# release-promotion Specification

## Purpose
Keep product releases stable through an explicit branch path and evidence tied to
the exact code being promoted.

## Requirements

### Requirement: Ordered promotion
Stage SHALL accept product promotion only from develop, and main SHALL accept
product promotion only from stage, through pull requests with required checks.

#### Scenario: Develop attempts to bypass stage
- **WHEN** a PR targets main directly from develop
- **THEN** the promotion check fails

### Requirement: Verified release evidence
Stage SHALL require a successful game build and artifact. Main SHALL additionally
require verified song playback, physical controller behavior, clean installation,
recovery, a reviewer, and rollback, linked to the tested commit and a meta report.

#### Scenario: An acceptance check has not run
- **WHEN** a candidate lacks a required passing result and evidence
- **THEN** promotion is blocked and the previously stable main state is retained

### Requirement: Evidence matches promoted code
A promotion SHALL fail when executable or asset changes follow the recorded tested
commit; release evidence and documentation may be committed after testing.

#### Scenario: Code changes after acceptance
- **WHEN** the candidate differs from the tested commit in game or service code
- **THEN** new verification is required before promotion
