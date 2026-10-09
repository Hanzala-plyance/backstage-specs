> This is the historical `main` branch. Canonical planning and current policy live on [meta](https://github.com/Hanzala-plyance/backstage-specs/tree/meta). Switch to meta before starting work.

# Backstage Specs

Shared feature planning and agent governance for [Backstage](https://github.com/Hanzala-plyance/backstage), powered by [OpenSpec](https://github.com/Fission-AI/OpenSpec).

Describe features here, track their tasks, hand work between agents, and maintain
one agent constitution. Application code lives in the separate Backstage repo.
Every agent works from the same requirements and policy.

## Quick start

You need Git and **Node.js 20.19 or newer**. CI uses Node 22. OpenSpec **1.14.1**
is pinned in the lockfile; use the repo-local CLI through npm.

```bash
git clone --branch meta https://github.com/Hanzala-plyance/backstage-specs.git
cd backstage-specs
npm ci
npm run check
npm run store:register
npm run specs
npm run features
```

Open this folder in your agent/editor. OpenSpec integrations are already committed
for **49 repository-scoped targets**, including Codex, Claude, Cursor, Copilot,
Gemini, OpenCode, Cline, Kiro, and the universal `.agents` target.
See [the full generated agent list](docs/supported-agents.md).

To work on the product, clone the code repo beside it:

```bash
cd ..
git clone --recurse-submodules --branch develop https://github.com/Hanzala-plyance/backstage.git Backstage
cd backstage-specs
npm run agents:install -- --repo ../Backstage
npm run agents:install -- --repo ../Backstage --check
```

Install Git LFS before cloning for game assets. Develop pins the upstream core
submodule. Building Backstage requires Unity **6000.3.5f2**; automated source tests
do not establish a playable or hardware-qualified release.

## Two repositories, one feature ID

| Location | Responsibility |
| --- | --- |
| `backstage-specs/meta` | Canonical business logic, accepted specs, active deltas, decisions, agent governance |
| `backstage-specs/feature/<change-id>` | Proposed planning and policy changes, based on meta |
| `backstage/starter` | Preserved imported game, controller, and converter reference |
| `backstage/develop` | Integrated development candidate |
| `backstage/stage` | Release candidates that passed the Unity build gate |
| `backstage/main` | Stable releases that passed all acceptance gates |
| `backstage/feature/<change-id>` | Implementation branch, based on develop |

Use the same kebab-case change ID in both repositories. Product changes move by
pull request through **feature → develop → stage → main**, including fixes.
Stage accepts develop; main accepts stage. The documentation-only bootstrap on
stage/main is not an application release. Starter is historical reference.
Archiving a spec, merging code, and deploying are separate events.

[governance/components.json](governance/components.json) maps the game,
controller, and conversion components and records their local instructions.
Imported behavior is not automatically an accepted product requirement.

## Create and complete a feature

1. **Start a change** in the specs checkout:

   ```bash
   git switch meta
   git pull --ff-only
   git switch -c feature/add-song-import
   npm run openspec -- new change add-song-import
   npm run openspec -- status --change add-song-import
   npm run openspec -- instructions proposal --change add-song-import
   ```

2. **Write the artifacts.** Ask your agent to propose the feature, or request
   `instructions <artifact> --change <id>` for each artifact. The change folder
   contains `proposal.md`, `specs/<capability>/spec.md` deltas, `design.md`, and
   `tasks.md`. Requirements describe observable behavior with SHALL/MUST and
   WHEN/THEN scenarios. Use [the design context template](templates/design-context.md)
   to record the implementation checkout, branch, starter paths, and checks.

3. **Prepare the code branch** in the Backstage checkout:

   ```bash
   git fetch origin
   git switch -c feature/add-song-import origin/develop
   ```

   From this specs checkout, run `npm run agents:install -- --repo ../Backstage`.
   Component instructions are installed only for component directories that exist.
   Record the exact implementation checkout and branch before applying tasks.

4. **Build and hand off.** Implement in the code repo and update tasks here. Copy
   [templates/handoff.md](templates/handoff.md) into the change as `handoff.md`.
   Before switching agents, record current stage, decisions, overlapping work,
   code commit/PR links, test results, blockers, and the next action.

5. **Verify** the implementation with focused checks, then validate the specs:

   ```bash
   npm run openspec -- validate add-song-import --strict --no-interactive
   npm run check
   ```

   OpenSpec validation checks structure and consistency. Runtime and hardware
   checks need separate evidence. Check off tasks only after doing the work.

6. **Archive completed work** after tasks and verification are complete:

   ```bash
   npm run openspec -- archive add-song-import --yes
   npm run check
   ```

   Archive applies deltas to `openspec/specs/` and moves the change into
   `openspec/changes/archive/`. Commit the results and link the code review.
   Incomplete work remains active with its blocker recorded.

These commands use an example ID; setup does not open a song-import feature.

## Use your preferred agent

The generated integrations share the same workflows. Syntax depends on the tool.
These commands belong in **agent chat**, not your shell:

| Tool | Propose | Apply | Verify | Archive |
| --- | --- | --- | --- | --- |
| Codex | `$openspec-propose` | `$openspec-apply-change` | `$openspec-verify-change` | `$openspec-archive-change` |
| Claude Code / Gemini CLI | `/opsx:propose` | `/opsx:apply` | `/opsx:verify` | `/opsx:archive` |
| Cursor / Copilot / OpenCode / Cline | `/opsx-propose` | `/opsx-apply` | `/opsx-verify` | `/opsx-archive` |
| Universal skill reader | `openspec-propose` | `openspec-apply-change` | `openspec-verify-change` | `openspec-archive-change` |

Pass the change ID or description after the command. If your tool does not load
skills automatically, attach `AGENTS.md` and the active change artifacts and ask
it to follow the named workflow under `.agents/skills/`.

Editor plugins may need a restart. Hermes needs this project's skills path added
to its user configuration. MiniMax Code uses global skills and is opt-in; setup
instructions are in the supported-agent list. Consult the [official tool guide](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md)
for loading behavior. An instruction file's presence does not prove an agent loaded it.

## Maintain the agent constitution

[governance/constitution.md](governance/constitution.md) is the canonical policy.
[governance/adapters.json](governance/adapters.json) defines the instruction loaders:

| Loader | Generated instruction file |
| --- | --- |
| AGENTS-compatible agents | `AGENTS.md` |
| Claude Code | `CLAUDE.md` |
| Gemini CLI | `GEMINI.md` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursor/rules/backstage.mdc` |
| Cline | `.clinerules/backstage.md` |
| Windsurf | `.windsurf/rules/backstage.md` |
| Kiro | `.kiro/steering/backstage.md` |
| Amazon Q | `.amazonq/rules/backstage.md` |
| Roo Code | `.roo/rules/backstage.md` |

Edit the constitution or component map and regenerate:

```bash
npm run agents:sync
npm run agents:check
npm run agents:install -- --repo ../Backstage
npm run agents:install -- --repo ../Backstage --check
npm run check
```

The generator embeds a source hash and maintains only the
`BACKSTAGE-CONSTITUTION` block. It preserves handwritten text outside the block
and refuses malformed markers, escaping paths, and symlink destinations.
Check mode reads without writing. The installer never commits or pushes and
requires a code working branch other than stage or main. Review and commit generated
updates in both repos together. New agent types can use the universal fallback
or gain a native loader by extending the adapter manifest.

OpenSpec workflows are maintained separately. After an intentional dependency
upgrade, run `npm run workflows:sync`, review generated changes, and run the checks.
It generates all 12 workflows for repository-scoped targets with isolated config,
without changing global workflow preferences. Do not edit generated skills or
commands manually. CI checks governance drift, strict specs, synchronization
tests, and reproducible workflow generation.

## Use the shared OpenSpec store

This repository is registered as store **`backstage`**. Store support is beta in
the pinned release. Registration is machine-local: every collaborator runs
`npm run store:register` after cloning. Registration does not pull or push Git.

```bash
npm run openspec -- list --store backstage
npm run openspec -- instructions apply --change <change-id> --store backstage
npm run openspec -- store doctor backstage --json
```

The connected code checkout has an `openspec/config.yaml` pointer containing
`store: backstage`, with no copied specs. Using it requires a store-capable CLI;
the older global installation on the setup machine does not support stores.
For example, from the sibling code checkout:

```bash
node ../backstage-specs/node_modules/@fission-ai/openspec/bin/openspec.js list
```

Run planning commands in this specs checkout or use `--store backstage`. Keep the
store checkout on `meta` unless actively reviewing a planning feature branch.
Do not initialize duplicate planning folders in a connected code repository.

## Product and release status

Read [the business overview](business/README.md), [product contracts and roadmap](business/product.md),
[decisions](business/decisions.md), and [constitution](governance/constitution.md)
before changing behavior. The venue product includes a customer kiosk, timed
sessions, staff bay controls, diagnostics/recovery, offline operation, and fleet
management. These are a roadmap, not claims of implemented features.

The first development candidate combines Backstage game sources, Add New Song
search/conversion/queue, a shared local song library, and native/MIDI controller
setup. The Xbox Riffmaster injection bridge supports Clone Hero only; a Backstage
bridge remains blocked pending an actual implementation and hardware evidence.

[The foundation change](openspec/changes/integrate-backstage-foundation/) stays active
until its remaining Unity, gameplay, and hardware acceptance tasks are complete.
[Release evidence](releases/0.1.0-foundation.md) records what has actually run.
Agents must challenge poor code, unsafe release claims, weak product decisions,
and unnecessary complexity with concrete reasons and a better option.

## Change history and handoff

Keep feature deltas and tasks under `openspec/changes/<id>/`, business decisions
in `business/decisions.md`, and release evidence under `releases/`. Record code
commit/PR links, test outcomes, blockers, and the next action in each handoff.
Commit these updates to meta through planning review. Do not rewrite archived
history to make earlier decisions appear current; add a new decision or delta.

## Repository map

```text
business/                  Product brief, business contracts, roadmap, decisions
releases/                  Release evidence and outstanding acceptance gates
governance/                 Canonical policy, component map, adapter manifest
openspec/config.yaml       Shared context and artifact rules
openspec/specs/            Accepted capability requirements
openspec/changes/          Active features and archived history
.openspec-store/           Store identity and canonical clone URL
.agents/skills/            Universal OpenSpec workflows, also used by Codex
.<tool>/                   Native workflows and instruction adapters
scripts/                   Synchronization, workflow generation, safety tests
templates/                 Design context and agent handoff templates
docs/supported-agents.md   Generated integration inventory
.github/workflows/         CI validation
```

`npm run features` lists active changes; `npm run specs` lists accepted capabilities.
The initial archived change records setup of this planning workflow, not
completion of the Backstage application.
