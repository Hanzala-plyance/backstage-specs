## ADDED Requirements

### Requirement: Riffmaster controllers
Backstage SHALL read each connected PDP Riffmaster for Xbox receiver itself and present it as a separate controller, connecting automatically, and SHALL offer an administrator-access fallback when a receiver cannot be opened directly.
#### Scenario: Receivers are listed
- **WHEN** Riffmaster receivers are plugged in
- **THEN** Controllers lists each one by USB port without opening it
#### Scenario: Plugged in
- **WHEN** Backstage is running and a receiver is plugged in or replugged
- **THEN** it connects without a separate program or command
#### Scenario: Connect and play
- **WHEN** the receivers are connected
- **THEN** each receiver appears as its own controller that can be chosen for any player and drives menus and gameplay
#### Scenario: Disconnect or quit
- **WHEN** the user disconnects or Backstage quits
- **THEN** the readers stop and release the receivers
#### Scenario: A receiver drops
- **WHEN** a reader stops sending reports or heartbeats for 3 seconds
- **THEN** that controller shows as disconnected and a game in progress pauses for that player

### Requirement: Controllers reach the song
A controller that connects while Player 1 uses the keyboard SHALL become Player 1, and a controller played during a song without being assigned to a player SHALL be reported rather than silently ignored.
#### Scenario: Guitar connects
- **WHEN** a Riffmaster or gamepad connects and Player 1 is on the keyboard
- **THEN** Player 1 switches to it and the app says so
#### Scenario: Unassigned guitar in a song
- **WHEN** a connected controller that no player uses is pressed during a song
- **THEN** the game names it and says to assign it in Controllers or add it as a player

### Requirement: Press Start to join
A bar along the bottom of the menus SHALL show Players 1–4; an unassigned controller pressing Start SHALL join as the next player and open a setup pop-up driven only by that controller, with an input test, avatar, instrument, difficulty and leave.
#### Scenario: Second guitar joins
- **WHEN** a controller no player uses presses Start on the home screen or any page
- **THEN** it joins as the next player and its pop-up opens above the bar
#### Scenario: Player sets up with their own controller
- **WHEN** the joined player strums and presses green in the pop-up
- **THEN** their avatar, instrument or difficulty changes, while other controllers keep driving the menus
