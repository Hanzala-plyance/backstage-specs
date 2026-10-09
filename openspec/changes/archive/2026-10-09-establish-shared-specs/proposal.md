# Proposal

## Why

Backstage has three reference projects but no shared feature planning or agent
governance. A separate planning repository lets agents share feature contracts
and preserves the empty product main branch during setup.

## What Changes

- Create an independent OpenSpec store with a pinned local CLI.
- Provide a shared feature lifecycle, handoffs, and cross-repository guidance.
- Generate workflows for every repository-scoped OpenSpec agent target.
- Maintain a canonical constitution with generated adapters and component rules.
- Check specs, instruction drift, synchronization safety, and reproducibility in CI.

## Capabilities

### New Capabilities

- `feature-lifecycle`: Shared artifacts, handoffs, verification, and archive.
- `agent-governance`: Canonical policy, managed synchronization, and drift checks.
- `repository-boundaries`: Separate planning and implementation with preserved branch roles.

### Modified Capabilities

None. This establishes planning capabilities without changing application behavior.

## Impact

Adds backstage-specs, Node tooling, OpenSpec 1.14.1, and GitHub validation. Adds
generated guidance and an external-store pointer only to backstage/starter.
Existing product sources and backstage/main are unchanged.
