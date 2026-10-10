## ADDED Requirements

### Requirement: Soundcheck tutorial
The main menu SHALL offer Soundcheck, a section of guided lessons that teach how to play using demos on the real highway before the player tries each skill.
#### Scenario: A new player opens Soundcheck
- **WHEN** the player chooses Soundcheck from the main menu
- **THEN** the lessons are listed in order with the next lesson highlighted and completed lessons marked
#### Scenario: A lesson demo
- **WHEN** the player starts a lesson demo
- **THEN** the game performs the lesson chart itself with cues naming the frets and action for each upcoming note, without scoring the player's input
#### Scenario: The player's turn
- **WHEN** the player plays the lesson after the demo
- **THEN** the lesson reports whether its goal was met and offers the next lesson, a retry or the demo again
#### Scenario: Controller navigation
- **WHEN** a lesson menu is shown
- **THEN** it can be operated with strum up/down, green to select and red to go back

### Requirement: Soundcheck tests every input
Soundcheck SHALL begin with a controller check that confirms each fret, strum, Star Power, whammy and (on a pad) Start input, and a single Start action SHALL lead through the check, every lesson and the full track in order.
#### Scenario: A player starts Soundcheck
- **WHEN** the player chooses Start Soundcheck
- **THEN** the first unfinished step opens, beginning with the controller check, and each passed step offers the next
#### Scenario: An input never registers
- **WHEN** an input has not been detected in the controller check
- **THEN** its tile stays unlit and the player is told to remap it in Controllers

### Requirement: Library lists songs only
The song library SHALL NOT list the Soundcheck practice track among songs.
#### Scenario: Library opens
- **WHEN** the library is shown
- **THEN** only installed songs are listed and counted, and the full Soundcheck track is reached from Soundcheck
