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
