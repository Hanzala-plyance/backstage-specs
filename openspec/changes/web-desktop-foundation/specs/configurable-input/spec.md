## ADDED Requirements

### Requirement: Configurable detected gamepads
The app SHALL list browser-visible gamepads and permit persistent per-device button and signed-axis bindings with live input feedback.
#### Scenario: An unfamiliar device is connected
- **WHEN** Chromium exposes its buttons and axes
- **THEN** the player can map them without the app claiming verified support for that model

### Requirement: Input loss recovery
The game SHALL pause and clear held inputs when the assigned controller disconnects or application focus is lost.
#### Scenario: A controller disconnects during play
- **WHEN** the assigned device disappears
- **THEN** scoring pauses and the player must reconnect or choose another input before resuming

### Requirement: Alternative input routes
The app SHALL offer keyboard gameplay and permission-controlled MIDI drum input without requiring an unsupported native bridge.
#### Scenario: MIDI access is denied
- **WHEN** the operating system or application denies MIDI access
- **THEN** a visible error is shown and keyboard/gamepad input remains available
