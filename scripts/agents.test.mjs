import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, symlink, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { mergeManaged, safePath, synchronize, START, END } from './agents.mjs';

test('refresh preserves handwritten instructions and is idempotent', () => {
  const before = `# Local guidance\n\nPreserve me.\n${START}\nold\n${END}\nMore local rules.\n`;
  const after = mergeManaged(before, 'new');
  assert.equal(after, `# Local guidance\n\nPreserve me.\n${START}\nnew\n${END}\nMore local rules.\n`);
  assert.equal(mergeManaged(after, 'new'), after);
});

test('initial rule metadata precedes the managed block', () => {
  const content = mergeManaged('', 'body', '---\nalwaysApply: true\n---\n\n');
  assert.ok(content.startsWith('---\nalwaysApply: true'));
  assert.equal(mergeManaged(content, 'body'), content);
});

test('malformed or duplicate blocks fail without silently replacing user text', () => {
  for (const text of [START, END, `${END}\n${START}`, `${START}${END}${START}${END}`]) {
    assert.throws(() => mergeManaged(text, 'body'), /Invalid managed markers/);
  }
});

test('paths cannot escape the checkout or follow a symlink', async () => {
  const root = await mkdtemp(resolve(tmpdir(), 'backstage-agent-paths-'));
  try {
    await assert.rejects(safePath(root, '../AGENTS.md'), /escapes/);
    await symlink(tmpdir(), resolve(root, 'linked'));
    await assert.rejects(safePath(root, 'linked/AGENTS.md'), /symlink/);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test('install refreshes existing components, preserves user text, and check detects drift without writing', async () => {
  const root = await mkdtemp(resolve(tmpdir(), 'backstage-agent-install-'));
  try {
    await mkdir(resolve(root, 'mac-riff'));
    await writeFile(resolve(root, 'AGENTS.md'), '# Handwritten rules\n');
    const first = await synchronize(root, { external: true });
    assert.equal(first.checked, 11);
    assert.ok((await readFile(resolve(root, 'AGENTS.md'), 'utf8')).startsWith('# Handwritten rules\n'));
    assert.match(await readFile(resolve(root, 'mac-riff/AGENTS.md'), 'utf8'), /source files are under build/);
    assert.equal((await synchronize(root, { external: true })).changed, 0);
    await synchronize(root, { external: true, check: true });
    await writeFile(resolve(root, 'CLAUDE.md'), 'drift\n');
    await assert.rejects(synchronize(root, { external: true, check: true }), /Instruction drift/);
    assert.equal(await readFile(resolve(root, 'CLAUDE.md'), 'utf8'), 'drift\n');
  } finally { await rm(root, { recursive: true, force: true }); }
});
