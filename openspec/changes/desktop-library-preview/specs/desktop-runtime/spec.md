## ADDED Requirements

### Requirement: Song preview while choosing
The library SHALL play a short preview of a song's audio while the song is hovered or focused, and SHALL stop it when focus leaves the song or play starts.
#### Scenario: A player browses with a guitar
- **WHEN** the player strums onto a song and stays on it briefly
- **THEN** that song's preview plays from its preview start time

### Requirement: Queue clears installed songs
The preparation queue SHALL hide songs that have been installed in the library.
#### Scenario: A conversion finishes
- **WHEN** a queued song is installed in the library
- **THEN** it leaves the queue and the player is told it was added

### Requirement: Remove a song in game
The player SHALL be able to remove a song from the library inside the app after confirming. The song folder SHALL move to the system Trash, not be permanently deleted.
#### Scenario: A player removes a song
- **WHEN** the player chooses Remove for a song and confirms
- **THEN** the song disappears from the library and its folder is in the Trash
#### Scenario: A player changes their mind
- **WHEN** the player cancels the confirmation
- **THEN** the song stays in the library
