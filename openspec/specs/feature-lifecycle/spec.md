# feature-lifecycle Specification

## Purpose
Provide a shared, verifiable feature lifecycle so any agent can create, continue, and archive Backstage changes using durable artifacts and handoffs.

## Requirements

### Requirement: Shared feature artifacts
The planning repository SHALL keep each active feature in a uniquely named
OpenSpec change with a proposal, delta specifications, design, and task list.

#### Scenario: Another agent continues a feature
- **WHEN** an agent takes over an active change
- **THEN** it can read the same artifacts and identify the implementation repository, branch, and affected components

### Requirement: Durable handoff
Agents SHALL record current stage, implementation links, verification evidence,
open decisions, and the next action in a handoff when switching agents.

#### Scenario: Work is partially complete
- **WHEN** an agent leaves a feature with unfinished tasks
- **THEN** its handoff identifies completed work, unresolved issues, and the next task without falsely marking the feature complete

### Requirement: Verified archive
Completed features SHALL pass strict validation and have completed tasks and
recorded verification evidence before archive updates the accepted specs.

#### Scenario: A feature is archived
- **WHEN** a validated and verified feature is archived
- **THEN** its deltas enter accepted specs and its artifacts remain in archive history independently of a code merge
