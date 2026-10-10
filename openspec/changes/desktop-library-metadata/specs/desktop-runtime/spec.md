## ADDED Requirements

### Requirement: Readable library folders
Songs installed by Backstage SHALL be stored in folders named "Artist - Title". The app SHALL rename Backstage job-ID folders to readable names without overwriting anything, and SHALL NOT rename folders the user named.
#### Scenario: A converted song is installed
- **WHEN** a conversion of "Drake - Janice STFU (Official Video)" is installed
- **THEN** its folder is named "Drake - Janice STFU"
#### Scenario: Two songs want the same folder name
- **WHEN** a folder with the readable name already exists
- **THEN** the new folder gets a numbered suffix and the existing one is untouched

### Requirement: Album covers by lookup
For songs with a generated or missing cover, the app SHALL look up album art online once and use it only when both artist and title match. Otherwise it SHALL keep the existing art.
#### Scenario: A matching cover is found
- **WHEN** the catalog returns the same artist and title
- **THEN** the cover is saved for the song and shown in the library
#### Scenario: Only a wrong or alternate version is found
- **WHEN** results are by another artist or are instrumental, karaoke or tribute versions
- **THEN** no cover is applied and the existing art stays
