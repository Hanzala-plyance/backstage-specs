## ADDED Requirements

### Requirement: Riffmaster controllers
Backstage SHALL let each connected PDP Riffmaster for Xbox receiver be used as a separate controller through the MacRiff reader, after the user approves administrator access.
#### Scenario: Receivers are listed
- **WHEN** Riffmaster receivers are plugged in
- **THEN** Controllers lists each one by USB port without opening it
#### Scenario: Connect and play
- **WHEN** the user connects and approves access
- **THEN** each receiver appears as its own controller that can be chosen for any player and drives menus and gameplay
#### Scenario: Disconnect or quit
- **WHEN** the user disconnects or Backstage quits
- **THEN** the readers stop and release the receivers
#### Scenario: A receiver drops
- **WHEN** a reader stops sending reports or heartbeats for 3 seconds
- **THEN** that controller shows as disconnected and a game in progress pauses for that player
