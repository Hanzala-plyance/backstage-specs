# Design
- `core/lessons.ts` (pure): lesson definitions generate 120 BPM guitar charts that
  start after a 3 s lead-in and end within the 32 s practice backing; `DemoPlayer`
  returns held frets, strum and Star Power intent for a time; `lessonResult` grades
  hits, sustain score, streak or Star Power use. Unit tests drive Judgment with the
  demo player at 60 fps (strum and tap modes) and require every demo to pass its
  own goal and an idle run to fail.
- `PlayerRuntime.demo(t, input)` applies demo input through the same Judgment
  calls a pad uses (strike/fret/update/activate) and draws the highway, so demos
  show real rules, not an animation.
- `Lesson.tsx` runs one lesson full screen: intro → demo → your turn → result,
  dialogs navigable with pad edges or keyboard like Game. Uses the practice WAV
  as backing and the player 1 device from Controllers.
- `Soundcheck.tsx` lists lessons (progress in localStorage, per-viewer
  convenience; losing it only re-shows lessons) and the full-track step, which
  opens the existing song dialog for the practice track.
- App: menu choice `soundcheck` opens page `soundcheck` in the app shell; menu pad
  polling is off while a lesson runs, as during play.
