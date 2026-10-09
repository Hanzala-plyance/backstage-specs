## Purpose
Make complete prepared songs accessible to the Backstage game through one local
library without exposing incomplete conversions.

## ADDED Requirements

### Requirement: Shared scan root
The converter and game SHALL use ~/Music/Backstage/Songs by default and support
a consistent BACKSTAGE_SONGS_DIR override.

#### Scenario: A completed song is installed
- **WHEN** the player runs Scan Songs in Backstage
- **THEN** the game includes the shared root alongside configured folders

### Requirement: Complete atomic publication
The converter SHALL validate metadata, readable audio, and supported chart content
before atomically publishing a complete song folder into the scan root.

#### Scenario: Conversion or copy fails
- **WHEN** a conversion or installation fails before publication
- **THEN** no partial song appears in the shared library and the error is visible

### Requirement: Idempotent install and retry
Install retries SHALL preserve the converted export and avoid duplicate folders or
replacement of unrelated content. Installed snapshots SHALL remain immutable.

#### Scenario: An install is retried after restarting the service
- **WHEN** the job already has a valid installed snapshot
- **THEN** the same installation is reported without creating another copy
