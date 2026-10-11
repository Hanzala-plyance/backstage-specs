## ADDED Requirements

### Requirement: Simultaneous character select
The Avatars screen SHALL let every joined player move their own cursor over the avatars with their own controller and pick one, independently and at the same time.
#### Scenario: Two players pick
- **WHEN** Player 2 strums to another avatar and presses green while Player 1 uses the mouse
- **THEN** each player's card shows the avatar that player picked

### Requirement: Keypad name entry
Players SHALL be able to enter a name of up to 8 letters or digits with a guitar using a phone-keypad layout with multi-tap.
#### Scenario: Multi-tap
- **WHEN** a player presses green twice on the 2 key within a second
- **THEN** the name gains the letter B

### Requirement: Gear from the player pop-up
The bottom player pop-up SHALL let a player change their name, guitar style and colour (or drum kit) with their own controller.
#### Scenario: Guitar style
- **WHEN** a player presses green on the Guitar row
- **THEN** their guitar style changes to the next style

### Requirement: Fit the window
Every page SHALL fit the window without the app scrolling as a whole; long lists SHALL scroll inside their own panels, and the song dialog SHALL stay above the bottom bar.
#### Scenario: Short window
- **WHEN** the window is 1280×720
- **THEN** no page overflows and the last song and the keypad's bottom keys are visible

### Requirement: More avatars
The select screen SHALL offer 23 premade avatars, including 8 long-haired looks and rock tributes with face paint.
#### Scenario: Tribute look
- **WHEN** a player picks the demon tribute
- **THEN** their performer has bat-wing face paint and big teased hair
