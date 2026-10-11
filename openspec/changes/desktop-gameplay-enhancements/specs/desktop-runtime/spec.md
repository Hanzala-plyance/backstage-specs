## ADDED Requirements

### Requirement: Strum-held sustains
With strumming on, a sustain hit by strumming SHALL continue scoring only while its frets and the strum bar stay held.
#### Scenario: Strum bar released early
- **WHEN** a player strums a sustain and releases the strum bar before the tail ends
- **THEN** the sustain stops scoring shortly after the release
#### Scenario: Tap and HOPO sustains
- **WHEN** a sustain is hit by fretting a tap or HOPO note, or the player plays in tap mode
- **THEN** holding the frets alone keeps the sustain

### Requirement: Readable bottom HUD
The game SHALL show each player's score, streak, accuracy, multiplier and Star Power meter in a bar below their highway.
#### Scenario: Solo HUD
- **WHEN** a solo song is playing
- **THEN** the highway sits above a bottom bar showing the score, multiplier and a Star Power meter with its percentage

### Requirement: Performers beside the highway
Performers SHALL stand at the outer side of their player's highway, larger and partly behind it.
#### Scenario: Two players
- **WHEN** two players play
- **THEN** Player 1's performer stands at the left edge and Player 2's at the right edge

### Requirement: Play feedback
The game SHALL play a power-up sound when Star Power activates and SHALL adjust the song volume slightly: a small dip on misses and a small rise on perfect hits, within bounds. It SHALL NOT play miss or sustain sound effects.
#### Scenario: Volume stays bounded
- **WHEN** a player misses many notes in a row
- **THEN** the song volume never drops below 82% of the chosen volume, and perfect hits never raise it above 105% or full device volume
#### Scenario: Star Power activates
- **WHEN** a player activates Star Power
- **THEN** a short power-up sound plays over the song

### Requirement: Celebration effects
The game SHALL show a larger animation for chord hits, falling stars while Star Power is active, and large comic pop-ups over the performers.
#### Scenario: Star Power
- **WHEN** a player activates Star Power
- **THEN** stars fall in the background until it ends

### Requirement: Quiet automated tests
Automated app tests SHALL run muted and without taking keyboard focus from the person using the computer.
#### Scenario: Working during a test run
- **WHEN** the smoke test runs while the person uses another app
- **THEN** no sound plays and the test does not pause or fail because the window lost focus
