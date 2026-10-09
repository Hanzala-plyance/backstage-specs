## ADDED Requirements

### Requirement: Separate planning home
Specifications and governance SHALL live in independent backstage-specs, while
application implementation lives in backstage.

#### Scenario: A code checkout connects to shared planning
- **WHEN** a code checkout declares the registered backstage store
- **THEN** a store-capable CLI resolves planning to the specs checkout without duplicating accepted specs in the code repository

### Requirement: Preserved reference and product branches
Setup SHALL preserve imported projects on backstage/starter and leave
backstage/main empty. Future implementation branches SHALL bring across only
reference code needed for their feature.

#### Scenario: Shared planning is installed
- **WHEN** governance is installed during bootstrap
- **THEN** only starter receives instruction and pointer files and main retains its empty tree

### Requirement: Scoped component guidance
Instruction installation SHALL add component AGENTS.md only for component
directories already present in the implementation checkout.

#### Scenario: A feature branch contains one component
- **WHEN** instructions are installed in a checkout containing only mac-riff
- **THEN** mac-riff receives guidance and no YARG-master or song-converter directory is created by the installer
