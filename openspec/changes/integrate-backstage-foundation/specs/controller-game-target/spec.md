## Purpose
Use the controller setup component with Backstage while representing supported
routes accurately.

## ADDED Requirements

### Requirement: Native Backstage target
Controller setup SHALL offer Backstage and allow supported native and MIDI
assignments before launching an installed Backstage build.

#### Scenario: A native guitar and MIDI drum kit are assigned
- **WHEN** Backstage is selected
- **THEN** the plan preserves native input routes and does not start a Clone Hero bridge

### Requirement: Unsupported bridge rejection
Backstage plans SHALL reject the existing Clone Hero-specific Xbox Riffmaster
bridge until a compatible integration is implemented and physically verified.

#### Scenario: Staff select an incompatible bridge
- **WHEN** a bridged Xbox Riffmaster is assigned to Backstage
- **THEN** setup explains the unsupported route and does not launch that bridge
