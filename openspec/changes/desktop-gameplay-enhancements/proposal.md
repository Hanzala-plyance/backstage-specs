# Why
Playtesting feedback (2026-10-11):
- Sustains feel like taps. The user wants a strummed long note to be held with
  the strum bar (and frets) for its whole tail. Evidence: the auto-charter
  writes few sustains (e.g. 0 of 1,623 notes in one song, ~70 of 2,800 in
  another), so most notes are taps; the user chose the hold-the-strum rule.
- The thin Star Power strip at the top and the multiplier are hard to read.
- Performers stand mid-screen, small, behind the highways; the artwork is
  hard to enjoy.
- Missing a note has no sound and the song never reacts to playing well.
- No reward for a fully held sustain or a clean chord; Star Power has no
  background effect.
- Smoke tests play at full speaker volume and steal focus, so the user can't
  work while they run.
- In-game text (points, accuracy, labels) is too small.

# What Changes
- Strum-held sustains: with strumming on, a strummed sustain continues only
  while its frets and the strum bar are held (small release grace). Tap/HOPO
  sustains and tap mode keep the fret-only rule. Demos and lesson text follow.
- A bottom HUD for each player: score, streak and accuracy, a large
  multiplier, and a thick Star Power meter with its percentage, under the
  highway; the highway sits above it.
- Performers stand at the outer side of their player's highway (solo: the
  chosen side), larger, partly tucked behind the highway.
- Feedback sounds (quiet, never over the song): an old-school "missed riff"
  clunk on a miss or overstrum; a guitar tone matching the lane when a
  sustain is held to its end. The song dips 3% per miss (floor 82% of the
  player's volume) and rises 3% per perfect hit (up to 105%, never above
  full device volume), easing between steps.
- A bigger hit animation for chords; falling stars behind the stage while
  Star Power is active.
- Smoke tests launch muted and without taking focus, with focus emulated so
  the game doesn't pause when the user works in another app.
- Larger in-game type for scores, accuracy and labels.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: gameplay rules and in-game presentation.

# Impact
backstage desktop: core/judgment.ts, core/lessons.ts, game/player.ts,
game/Game.tsx, game/highway.ts (chord burst), game/stage3d.ts (slots), new
core/feedback.ts, Lesson.tsx text, style.css, electron/main.cjs (test window),
scripts/smoke.mjs, tests. Branch feature/gameplay-enhancements stacked on
feature/controller-stability (PR #11).
