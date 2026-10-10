# Why
The user now authorizes switching to a lean desktop web stack, integrated song search
and broad configurable gamepad support. The earlier evaluation-only decision is
superseded. A working desktop increment must replace the Unity build dependency
without pretending to reproduce all YARG gameplay or support every physical device.

# What Changes
- Add an Electron/React/TypeScript/Vite desktop application and Three.js gameplay.
- Reuse the shared Songs library, real MIDI charts and audio; provide a bundled,
  generated practice track for offline first-run testing without copyrighted music.
- Integrate song search and conversion queue with the existing optional local service.
- Detect browser-visible gamepads, support saved button/axis mappings, live input
  diagnostics, keyboard controls and MIDI drum input. Pause on loss of focus/device.
- Replace Unity-specific release build evidence with runtime-specific build evidence,
  retaining actual gameplay, hardware, install and recovery gates.

# Capabilities
## New Capabilities
- `desktop-runtime`: packaged desktop app, offline songs, search and playable rhythm core.
- `configurable-input`: visible device state and persistent configurable input mappings.
## Modified Capabilities
- `release-promotion`: verify the selected runtime's built artifact.

# Impact
Implementation: backstage/desktop plus converter path configuration and release gates.
Planning: backstage-specs/meta, governance, business decisions and handoff.
Unity source remains reference. Initial scope is single-player five-lane gameplay;
full YARG parity, vocal scoring, multiplayer, unsupported native USB bridges, venue
reservations, commercial catalog rights and signed store distribution are deferred.
