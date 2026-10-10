## 1. Plan and governance
- [x] 1.1 Record authorized runtime direction and feature contracts.
- [x] 1.2 Regenerate constitution and update runtime-specific release gates.

## 2. Desktop implementation
- [x] 2.1 Build isolated Electron shell, native packaging and lean UI.
- [x] 2.2 Load shared MIDI/audio library and provide offline practice song.
- [x] 2.3 Implement audio-clock gameplay, scoring, pause/resume and results.
- [x] 2.4 Integrate online search, queue, installation status and local audio preparation.
- [x] 2.5 Add gamepad discovery, button/axis mapping, diagnostics, keyboard and MIDI input.

## 3. Verification and publication
- [x] 3.1 Pass automated core, boundary, converter and desktop smoke tests.
- [x] 3.2 Build and launch a native macOS application; record size and limitations.
- [ ] 3.3 Publish feature PR and merge to develop after required checks.
- [ ] 3.4 Verify physical guitars/gamepads/MIDI, audible timing, clean install and recovery before release promotion.

## 4. Five-fret guitar revision
- [x] 4.1 Parse guitar note types, open notes, per-fret sustains, tempo/signatures, Star Power and solo phrases.
- [x] 4.2 Test scoring, anchoring, HOPO/pull-off/taps, strum leniency, sustain drops, Star Power/whammy and solo bonuses.
- [x] 4.3 Add circular 3D gems, note-type markings, rock-stage styling and live multiplier/Star Power HUD.
- [x] 4.4 Verify packaged gameplay and document remaining parity/hardware gaps.

## 5. Controller navigation and stage visuals
- [x] 5.1 Fix audio start: media-element playback without an AudioContext dependency; report file, blocked and device failures accurately.
- [x] 5.2 Add YARG-style pad menu navigation, hint bar, guitar-selectable track dialog and in-game pause menu with restart.
- [x] 5.3 Restyle UI and 3D stage: neon palette, tempo grid, multiplier rails, hit flames/sparks, Star Power phrase notes and stage beams.
- [x] 5.4 Unit-test menu edge detection/repeat and beat grid; extend Electron smoke with pad navigation; verify packaged build.
- [ ] 5.5 Verify navigation and visuals with physical guitars and gamepads.

