## MODIFIED Requirements

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
