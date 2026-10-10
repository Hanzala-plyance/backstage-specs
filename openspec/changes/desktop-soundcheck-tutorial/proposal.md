# Why
The user wants Soundcheck to be its own main-menu section that teaches new players
how the game works, demo first, instead of a practice song inside the song library.
Today Soundcheck is only a 32-second practice track listed with library songs, and
nothing explains frets, strumming, chords, sustains, HOPOs or Star Power.

# What Changes
- Main menu entry "Soundcheck" (replaces "Practice") opening a lesson list.
- Guided lessons: Frets & strum, Chords, Sustains, HOPOs & taps, Star Power,
  Streaks & multiplier. Each lesson explains the idea with the player's own
  controls, plays a demo in which the game performs the chart on the real highway
  with on-screen cues, then gives the player a turn with a goal to pass.
- Lesson progress is remembered on this computer; a final step plays the full
  Soundcheck track (existing practice song) through the normal game.
- The practice track no longer appears in the song library list or count; the
  library banner points to Soundcheck instead.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: Soundcheck tutorial section; library lists only real songs.

# Impact
backstage desktop: Title main menu, App (page, routing), new core/lessons.ts,
Soundcheck.tsx and Lesson.tsx, PlayerRuntime demo input, styles, smoke.
Branch feature/soundcheck-tutorial from develop `ddee614`. Guitar lessons; drums
remain covered by the full track only (deferred).
