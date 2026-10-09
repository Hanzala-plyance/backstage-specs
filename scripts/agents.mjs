import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, lstat, realpath } from 'node:fs/promises';
import { resolve, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const START = '<!-- BACKSTAGE-CONSTITUTION:START -->';
export const END = '<!-- BACKSTAGE-CONSTITUTION:END -->';

export function mergeManaged(existing, body, frontmatter = '') {
  const block = `${START}\n${body.trim()}\n${END}\n`;
  const starts = existing.split(START).length - 1;
  const ends = existing.split(END).length - 1;
  if (starts !== ends || starts > 1 || (starts === 1 && existing.indexOf(END) < existing.indexOf(START))) {
    throw new Error('Invalid managed markers; repair the file before synchronizing.');
  }
  if (starts === 1) {
    const from = existing.indexOf(START);
    const to = existing.indexOf(END) + END.length;
    // Preserve every byte outside the managed region, including the existing newline.
    return existing.slice(0, from) + block.trimEnd() + existing.slice(to);
  }
  if (!existing) return frontmatter + block;
  return existing + (existing.endsWith('\n\n') ? '' : existing.endsWith('\n') ? '\n' : '\n\n') + block;
}

export async function safePath(root, name) {
  const destination = resolve(root, name);
  const local = relative(root, destination);
  if (!local || local === '..' || local.startsWith('../') || isAbsolute(local)) {
    throw new Error(`Instruction path escapes the checkout: ${name}`);
  }
  let current = root;
  for (const part of local.split(/[\\/]/)) {
    current = resolve(current, part);
    try {
      if ((await lstat(current)).isSymbolicLink()) throw new Error(`Refusing symlink: ${current}`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return destination;
}

async function loadSources() {
  const constitution = await readFile(resolve(ROOT, 'governance/constitution.md'), 'utf8');
  const componentText = await readFile(resolve(ROOT, 'governance/components.json'), 'utf8');
  const components = JSON.parse(componentText);
  const adapters = JSON.parse(await readFile(resolve(ROOT, 'governance/adapters.json'), 'utf8'));
  const hash = createHash('sha256').update(constitution + componentText).digest('hex');
  return { constitution, components, adapters, hash };
}

export async function synchronize(root, { check = false, external = false } = {}) {
  const sources = await loadSources();
  const pointer = 'https://github.com/Hanzala-plyance/backstage-specs';
  const prefix = `Generated from ${pointer}/tree/meta/governance.\nSource SHA-256: \`${sources.hash}\`.\nEdit the canonical sources in backstage-specs; regenerate this managed block.\n`;
  const location = external
    ? '\nThis is an implementation checkout. Open the separate backstage-specs checkout\nfor all OpenSpec commands and planning artifacts; its local path is not assumed.\n'
    : '\nThis is the specifications checkout. Application code belongs in the separate\nBackstage checkout. Read README.md for setup, commands, and feature handoffs.\n';
  const mainBody = `${prefix}${location}\n${sources.constitution}`;
  const files = sources.adapters.map(adapter => ({ ...adapter, body: mainBody }));
  if (external) {
    for (const component of sources.components.components) {
      const componentRoot = await safePath(root, component.path);
      try {
        const info = await lstat(componentRoot);
        if (!info.isDirectory()) throw new Error(`Component is not a directory: ${component.path}`);
      } catch (error) {
        if (error.code === 'ENOENT') continue; // Features on main need not import every starter component.
        throw error;
      }
      files.push({ path: `${component.path}/AGENTS.md`, body:
        `${prefix}\n# ${component.id}: ${component.description}\n\nRead the root AGENTS.md and the relevant shared specs first.\n\n${component.instructions.map(line => `- ${line}`).join('\n')}\n` });
    }
  }
  // Validate and prepare every destination before writing any file.
  const plans = [];
  for (const file of files) {
    const path = await safePath(root, file.path);
    let existing = '';
    try { existing = await readFile(path, 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    plans.push({ ...file, destination: path, existing,
      expected: mergeManaged(existing, file.body, file.frontmatter) });
  }
  const drift = plans.filter(plan => plan.existing !== plan.expected);
  if (check) {
    if (drift.length) throw new Error(`Instruction drift:\n${drift.map(file => `  ${file.path}`).join('\n')}\nRun agents:sync or agents:install without --check.`);
    return { checked: plans.length, changed: 0 };
  }
  for (const plan of drift) {
    await mkdir(dirname(plan.destination), { recursive: true });
    await writeFile(plan.destination, plan.expected);
  }
  return { checked: plans.length, changed: drift.length };
}

async function main() {
  const [action, ...args] = process.argv.slice(2);
  if (!['sync', 'check', 'install'].includes(action)) throw new Error('Usage: agents.mjs sync|check|install [--repo PATH] [--check]');
  let target;
  let check = action === 'check';
  for (let index = 0; index < args.length; index++) {
    if (args[index] === '--repo' && args[index + 1]) target = args[++index];
    else if (args[index] === '--check') check = true;
    else throw new Error(`Unknown or incomplete option: ${args[index]}`);
  }
  if (action === 'install' && !target) throw new Error('install requires --repo PATH');
  if (action !== 'install' && target) throw new Error('--repo is only supported by install');
  const root = await realpath(target ? resolve(target) : ROOT);
  if (action === 'install') {
    if (root === ROOT) throw new Error('Use agents:sync for the specs checkout.');
    const git = spawnSync('git', ['-C', root, 'rev-parse', '--show-toplevel'], { encoding: 'utf8' });
    if (git.status !== 0 || await realpath(git.stdout.trim()) !== root) throw new Error('--repo must be the root of a Git checkout.');
    const branch = spawnSync('git', ['-C', root, 'branch', '--show-current'], { encoding: 'utf8' });
    if (!check && (!branch.stdout.trim() || ['main', 'stage'].includes(branch.stdout.trim()))) {
      throw new Error('Install instructions on develop or a feature branch, then promote through stage to main.');
    }
  }
  const result = await synchronize(root, { check, external: action === 'install' });
  console.log(`${check ? 'Checked' : 'Synchronized'} ${result.checked} instruction files; ${result.changed} changed.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
