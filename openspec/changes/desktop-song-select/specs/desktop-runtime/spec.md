## ADDED Requirements

### Requirement: Song details while choosing
The library SHALL show a details panel for the highlighted song with a large cover, its metadata, each instrument's available difficulties and intensity, and the player's best score and stars.
#### Scenario: A player highlights a song
- **WHEN** a song is hovered or focused in the library
- **THEN** the panel shows that song's cover, details, instruments and best results

### Requirement: Best scores and stars
The app SHALL save the best score for each song, instrument and difficulty and SHALL rate performances with 0 to 6 stars relative to the chart's base score.
#### Scenario: A player beats their best
- **WHEN** a song finishes with a higher score than the saved best for that chart
- **THEN** the results show the stars and "New best", and the library shows the new best
#### Scenario: A player scores lower
- **WHEN** a song finishes below the saved best
- **THEN** the saved best is kept

### Requirement: Library resources in development mode
Covers and song audio SHALL load when the app runs in development mode.
#### Scenario: Dev mode library
- **WHEN** the app runs with the development server
- **THEN** covers display and library songs play
