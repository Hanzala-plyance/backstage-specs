## ADDED Requirements

### Requirement: Player names
Each of the four player slots SHALL have an optional name of up to 8 letters or digits that replaces P1–P4 in game and lobby labels.
#### Scenario: A player names their slot
- **WHEN** a player types a name longer than 8 characters or with symbols
- **THEN** the saved name keeps only the first 8 letters and digits, in capitals

### Requirement: Avatar choice
Each slot SHALL use either one of 10 premade avatars or a camera avatar; a camera avatar SHALL NOT offer customization.
#### Scenario: Premade avatar
- **WHEN** a player chooses a premade avatar
- **THEN** that avatar is saved for the slot and previewed playing
#### Scenario: Camera avatar
- **WHEN** a camera is available and the player raises a hand or presses Take photo
- **THEN** after a countdown a photo is taken, restyled to the game theme, and offered to use or retake
#### Scenario: No camera
- **WHEN** no camera is available or access is denied
- **THEN** the page says so and premade avatars remain available

### Requirement: Avatar performance
In game each player's avatar SHALL play that player's instrument and react to that player's results.
#### Scenario: Hits and misses
- **WHEN** the player hits a note
- **THEN** the avatar strums or strikes once
- **WHEN** the player misses
- **THEN** the avatar shows a miss expression
#### Scenario: Star Power
- **WHEN** the player's Star Power is active
- **THEN** the avatar shows its Star Power state

### Requirement: Performer gear and placement
Each slot SHALL choose a guitar shape, a finish, a drum kit and a stage side; in single player the performer SHALL stand on the chosen side of the highway, not behind its centre.
#### Scenario: A player picks gear
- **WHEN** a player chooses the Single Cut shape and the left side
- **THEN** their performer plays a single-cut guitar and stands left of the highway in game
#### Scenario: Natural playing
- **WHEN** the player hits a note
- **THEN** the fretting hand moves toward that note's fret and the strumming hand strokes the strings, or the drummer strikes the matching piece
