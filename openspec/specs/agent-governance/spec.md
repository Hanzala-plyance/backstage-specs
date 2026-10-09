# agent-governance Specification

## Purpose
Keep Backstage agents aligned with one maintained constitution through safe instruction generation, read-only drift checks, and shared OpenSpec workflows.

## Requirements

### Requirement: Canonical constitution
All maintained instruction adapters SHALL derive shared policy from the canonical
constitution and component map in the specifications repository.

#### Scenario: Policy changes
- **WHEN** a maintainer updates the policy and regenerates instructions
- **THEN** every maintained adapter contains the updated policy and source hash

### Requirement: Safe managed synchronization
Instruction synchronization SHALL preserve handwritten content outside managed
blocks and refuse malformed markers, escaping paths, and symlink destinations.

#### Scenario: A checkout has handwritten instructions
- **WHEN** a maintainer refreshes shared instructions
- **THEN** handwritten guidance outside managed blocks remains intact and repeating synchronization produces no further changes

#### Scenario: An unsafe destination is encountered
- **WHEN** an instruction destination escapes the checkout or follows a symlink
- **THEN** synchronization fails before writing any planned instruction file

### Requirement: Read-only drift detection
Governance checks SHALL report missing or stale blocks with a nonzero exit status
and SHALL NOT modify the checked instruction files.

#### Scenario: An adapter differs from its source
- **WHEN** a maintainer checks a stale adapter
- **THEN** the check identifies the adapter, fails, and leaves its bytes unchanged

### Requirement: Shared agent workflows
The repository SHALL provide the pinned OpenSpec release's complete workflows
for every repository-scoped target and a universal fallback for other agents.

#### Scenario: An agent lacks a native adapter
- **WHEN** an agent has no maintained native instruction loader
- **THEN** the contributor can explicitly supply AGENTS.md and universal OpenSpec workflow artifacts
