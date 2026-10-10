## MODIFIED Requirements

### Requirement: Verified release evidence
Stage SHALL require a successful build and artifact for the selected runtime, explicitly identified as electron or unity. Main SHALL additionally require verified song playback, physical controller behavior, clean installation, recovery, a reviewer, and rollback, linked to the tested commit and a meta report.
#### Scenario: An acceptance check has not run
- **WHEN** a candidate lacks a required passing result and evidence
- **THEN** promotion is blocked and the previously stable main state is retained
#### Scenario: A desktop web runtime replaces Unity
- **WHEN** an Electron candidate requests promotion
- **THEN** it supplies passing desktop build evidence without substituting mocked gameplay or skipping hardware acceptance
