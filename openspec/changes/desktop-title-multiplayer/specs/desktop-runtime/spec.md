## ADDED Requirements

### Requirement: Opening screen and main menu
The app SHALL open on a title screen, then a main menu, before the song library. Both SHALL be operable with a guitar, gamepad or keyboard and show the controls to use.
#### Scenario: A player starts the app
- **WHEN** the title screen is showing and any player presses Start, green or Enter
- **THEN** the main menu opens with its first option focused
#### Scenario: A player backs out of the library
- **WHEN** the library is showing with no dialog open and the player presses red or Esc
- **THEN** the main menu opens

### Requirement: Local multiplayer
The runtime SHALL support one to four local players playing the same song. Each player SHALL use a distinct input device and choose their own instrument and difficulty. Each player SHALL have independent judgment, streak, multiplier, Star Power and score.
#### Scenario: Two players play together
- **WHEN** player 1 uses the keyboard and player 2 a guitar on the same song
- **THEN** each player's inputs score only on their own highway and the results show both scores and the band total
#### Scenario: A device is already taken
- **WHEN** a player selects a device another player already holds
- **THEN** the device is not assigned twice
#### Scenario: One player disconnects
- **WHEN** any player's controller disconnects during a song
- **THEN** the song pauses and names the player whose device is missing
