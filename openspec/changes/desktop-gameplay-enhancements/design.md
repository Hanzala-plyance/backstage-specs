# Design
## Strum-held sustains (core/judgment.ts)
- `Judgment` option `holdStrum`. Input carries `strumHeld` (pad: strum up or
  down held; keyboard: Space/arrow held; demo: held from the strum to the
  tail end). A sustain created by a strum hit when `holdStrum` is on needs
  `strumHeld` as well as its frets; the existing 60 ms release grace applies.
- Counters for presentation: `perfects`, `chords` (multi-lane hits),
  `sustained` (sustains held to their end) with the lanes of the last one.

## Feedback (core/feedback.ts)
- One WebAudio context per song. `powerUp()` plays a filtered rising saw sweep
  with a short triangle arpeggio when Star Power activates, scaled by the
  player's volume. (Miss and sustain sounds were tried and removed after
  playtest.)
- `SongGain`: factor 1.0 start, miss/overstrum -0.03 (floor 0.82), perfect
  +0.03 (cap 1.05); applied to the song element as min(1, volume × factor),
  eased per frame.
- Game compares each frame's judge counters with the previous frame (like
  captions) to trigger sounds, chord bursts and gain steps.

## Presentation
- Solo: `.game-hud` bottom bar (metrics, multiplier with pips, Star Power
  with button). Multi: `.player-hud` moves to the bottom of each lane.
  Highways end above the HUD. Minimum in-game text 13 px; key numbers larger.
- `createStage` option `slots`: each performer's x as a fraction of the
  canvas and `fill` (fraction of canvas height). The band canvas spans the
  play area behind the highways; spotlights follow each performer.
- Chord hits add a `chord` class to the hit label (bigger, longer burst) and a
  wide flash in the highway hit zone. `.star-rain` layer of CSS-animated
  stars shows while any player's Star Power is active.

## Tests
- Smoke launches Electron with `--mute-audio`; in test mode the window is shown
  without focus (`showInactive`); the smoke enables CDP focus emulation so
  the game never sees a blur.
- Unit tests: strum-held sustain rules, counters, gain stepping and bounds,
  demo passes the sustains lesson in strum mode.
