## ADDED Requirements

### Requirement: Guitar presence
A Riffmaster controller SHALL be reported connected only after its guitar has announced itself or sent input through an open receiver.
#### Scenario: Receiver without a guitar
- **WHEN** a receiver is plugged in and opened but no guitar packets arrive
- **THEN** its port shows "Waiting for guitar" and no connected controller appears for it
#### Scenario: Guitar turns on
- **WHEN** the guitar announces itself or sends input on that receiver
- **THEN** the port shows the guitar connected and its controller is connected

### Requirement: Release and reconnect ports
Controller tools SHALL let a person release, connect or reconnect each Riffmaster receiver port without affecting other ports.
#### Scenario: Release a port
- **WHEN** Release is chosen for a port
- **THEN** Backstage closes that receiver, its controller disconnects, and it is not reopened by automatic connection or a replug until Connect is chosen
#### Scenario: Reconnect a stuck guitar
- **WHEN** Reconnect is chosen for a port
- **THEN** Backstage closes and reopens that receiver and resends the Xbox start-up sequence

### Requirement: Controller diagnostics
Controller tools SHALL show, for every Riffmaster port and every other controller, its live state, the reason for that state, recent input, and the assigned player, and SHALL copy a debug report.
#### Scenario: Copy debug report
- **WHEN** Copy debug report is chosen
- **THEN** a JSON report with each port's state, packet counts and recent events and every controller is placed on the clipboard

### Requirement: Staff-only recovery
Privileged controller recovery SHALL be available only in Staff tools, hidden until deliberately unlocked, and SHALL ask for macOS administrator approval.
#### Scenario: Players do not see recovery
- **WHEN** Controller tools opens normally
- **THEN** no administrator or process-stopping control is visible
#### Scenario: Stop stale readers
- **WHEN** staff choose to stop MacRiff readers whose sessions have ended
- **THEN** Backstage re-checks that each process is still a stale MacRiff reader and stops only those after administrator approval

### Requirement: Stable controller identity
A controller's player assignment SHALL survive another controller being unplugged and the same controller reappearing at a new index.
#### Scenario: Gamepad reappears at a new index
- **WHEN** a player's gamepad disconnects and the only controller with the same id appears at a different index
- **THEN** that player is reassigned to it
