# Why
Players now join with their own controllers, but Soundcheck (controller check,
lessons) and the Controllers mapper still serve only Player 1. The user wants
every joined player to test, map and learn at once, with lessons explained for
their own instrument (guitar or drums; singing with a mic later).

# What Changes
- Controller check: one panel per joined player, each lit by that player's own
  inputs; Soundcheck continues when everyone has passed (or is skipped).
- Controllers mapper: player tabs (P1–P4) choose whose controller to map; a
  player's pad mapping is saved for that device. Selecting a device still sets
  Player 1.
- Lessons: every joined player plays simultaneously on their own highway with
  the lesson for their instrument. Six drum lessons parallel the six guitar
  lessons (pads, two-pad hits, steady beat, fills, Star Power, streaks). Each
  player has their own demo, cues, goal and result; any player's controller
  drives the menus.
- Lessons are organised per instrument so a vocals set can be added later.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: multiplayer controller check, mapper and lessons.

# Impact
backstage desktop: core/lessons.ts (drum lessons, lessonsFor), Lesson.tsx
(multi-runtime), ControllerCheck.tsx (per-player panels), Controllers.tsx
(player tabs), App wiring, styles, tests. Branch feature/multiplayer-soundcheck
stacked on feature/character-select (PR #9); targets develop after #9 merges.
