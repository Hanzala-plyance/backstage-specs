# repository-boundaries Specification

## Purpose
Keep canonical meta planning independent of application code, preserve reference projects, and promote verified product changes through develop, stage, and main with component-specific guidance.

## Requirements

### Requirement: Separate planning home
Specifications, business logic, governance, agent changes, decisions, and feature
deltas SHALL live on backstage-specs/meta; implementation SHALL live in backstage.

#### Scenario: A contributor starts from any code branch
- **WHEN** a contributor reads its root README
- **THEN** it links to the canonical specs meta branch and explains the product branch roles

#### Scenario: A code checkout connects to shared planning
- **WHEN** an agent begins implementation in backstage
- **THEN** it uses the backstage OpenSpec store backed by backstage-specs/meta and keeps planning artifacts there

### Requirement: Preserved reference and product branches
Product changes SHALL follow develop -> stage -> main. Starter SHALL retain the
reference import. Main SHALL contain stable releases only, with a documentation-only
bootstrap permitted before the first qualified application release.

#### Scenario: An unverified game candidate exists
- **WHEN** Unity build or gameplay/hardware acceptance is incomplete
- **THEN** the candidate remains on develop and cannot be represented as a stable main release

#### Scenario: Shared planning is installed
- **WHEN** repository governance is bootstrapped
- **THEN** starter retains the reference source, develop holds integration, and stage and main receive documentation and release gates without unverified application code

### Requirement: Scoped component guidance
Instruction installation SHALL add component AGENTS.md only for component
directories already present in the implementation checkout.

#### Scenario: A feature branch contains one component
- **WHEN** instructions are installed in a checkout containing only mac-riff
- **THEN** mac-riff receives guidance and no YARG-master or song-converter directory is created by the installer
