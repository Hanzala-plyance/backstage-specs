## ADDED Requirements

### Requirement: Multiplayer controller check
The controller check SHALL show one panel per joined player and light each panel only from that player's own controller.
#### Scenario: Two players test at once
- **WHEN** Player 1 presses keys and Player 2 presses their pad's buttons
- **THEN** each player's panel marks only their own inputs

### Requirement: Per-player mapping
The Controllers mapper SHALL let any joined player's controller be selected and remapped without changing Player 1's controller.
#### Scenario: Map Player 2
- **WHEN** the Player 2 tab is chosen and an action is remapped
- **THEN** Player 2's controller uses the new binding and Player 1 is unchanged

### Requirement: Lessons for each instrument
Soundcheck lessons SHALL run for every joined player at once, each on their own highway with the lesson for their instrument.
#### Scenario: Guitar and drums together
- **WHEN** Player 1 plays guitar and Player 2 plays drums in a lesson
- **THEN** Player 1 sees the guitar lesson and Player 2 the matching drum lesson, each with their own demo, cues and result
