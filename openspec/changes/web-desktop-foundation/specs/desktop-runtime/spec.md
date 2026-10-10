## ADDED Requirements

### Requirement: Native desktop shell
Backstage SHALL run as a packaged desktop application with isolated renderer and local assets.
#### Scenario: Launch without internet
- **WHEN** the app opens with no network connection
- **THEN** its local library and bundled practice track remain available

### Requirement: Audio-driven playable songs
The desktop runtime SHALL derive gameplay timing from audio playback and support five-lane MIDI charts with tempo changes, scoring, pause and results.
#### Scenario: A song pauses
- **WHEN** the player pauses or the app loses focus during play
- **THEN** audio and gameplay stop advancing until an explicit resume

### Requirement: Shared library and discovery
The app SHALL show installed songs from the shared Songs root and expose online search and a conversion queue through the local preparation service.
#### Scenario: Preparation is unavailable
- **WHEN** required preparation dependencies are missing or a provider fails
- **THEN** the app shows an actionable error and preserves local gameplay
#### Scenario: A queued conversion completes
- **WHEN** validated chart and audio files are installed atomically
- **THEN** refreshing the library makes the song selectable without moving files

### Requirement: Five-fret guitar rules
The runtime SHALL support five-fret strums, lower-fret anchoring, HOPOs, pull-offs, tap notes, open notes, scored sustains and solo bonuses. Note score SHALL be 50 points per gem multiplied by the current streak and Star Power multipliers.
#### Scenario: A guitar streak reaches ten
- **WHEN** the player hits the tenth consecutive chord
- **THEN** the base multiplier increases to 2x, reaching 3x at twenty and 4x at thirty
#### Scenario: Star Power is activated
- **WHEN** at least half a meter is earned and the player activates Star Power
- **THEN** scoring multiplier doubles without changing audio speed, and the meter drains with musical measures
#### Scenario: A sustain is released
- **WHEN** a required fret remains released beyond the drop grace period
- **THEN** that sustain stops awarding points and cannot be resumed
#### Scenario: The guitar stage is displayed
- **WHEN** a guitar chart is played
- **THEN** raised circular gems and fret receptors show five distinct lane colors, note-type markings and Star Power state
