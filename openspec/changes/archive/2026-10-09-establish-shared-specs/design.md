# Design

## Context

Planning spans game (YARG), controllers (MacRiff), and conversion (song-converter).
Their import is reference material on starter; product main starts empty.

## Decisions

- Keep backstage-specs as the single planning root and register store `backstage`.
  Code checkouts use a config-only pointer with no duplicated planning artifacts.
- Pin OpenSpec 1.14.1 and its lockfile. Generate all 12 workflows for all 49 local
  targets using isolated configuration; keep global-only MiniMax opt-in.
- Generate 10 constitution adapters from governance sources, with hashes and
  managed markers. Install nested AGENTS.md only for components already present.
- Preserve text outside managed blocks and validate every destination before
  writing. Refuse malformed markers, path escapes, and symlinks; check mode is read-only.
- Treat workflow adapters and instruction loaders separately. Files alone do not
  prove an editor loaded them. Supply AGENTS.md explicitly as the fallback.

## Repository targets

- Specs: https://github.com/Hanzala-plyance/backstage-specs, bootstrap on main.
- Code: https://github.com/Hanzala-plyance/backstage, starter only.
- Starter baseline: 479b43bc0ad23fe838055fde937198feca1e2892.
- Code edits: native instructions, component AGENTS.md, external-store pointer.
- Code main remains ff63180f0cfee3759963d535d5cde48fedb4ad12 with an empty tree.

## Verification and limits

Run synchronization safety tests, strict spec validation, instruction checks,
workflow regeneration, and store diagnostics. Check installed instructions and
verify code main still has an empty tree. Store support is beta; the pinned local
CLI avoids the older incompatible global install. Agent instructions cannot
guarantee model compliance or automatically enable editor integrations.

## Rollback

Revert the code-side instruction/pointer commit to disconnect a checkout. Store
unregister forgets local registration without deleting either repository.
