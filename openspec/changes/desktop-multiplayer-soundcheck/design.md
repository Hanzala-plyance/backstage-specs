# Design
- `core/lessons.ts`: `drumLessons` (same count/order as guitar lessons, lanes
  0 kick … 4 cymbal), `lessonsFor(part)`; ids `drums-*`. Unit tests run every
  drum demo through Judgment in tap mode and require it to pass its goal.
- `Lesson.tsx`: one PlayerRuntime per player (device, profile, chart from
  lessonsFor(part)[step], mode), grid layout like Game multiplayer; demo uses a
  DemoPlayer per runtime; results per player; MIDI drums input as in Game.
- `ControllerCheck.tsx`: per-player panels; pads read via readPad with each
  player's profile; keyboard keys go to the keyboard player's panel.
- `Controllers.tsx`: player tabs choose the mapping target (device + profile);
  non-P1 profiles are loaded/saved per pad id; P1 keeps App's profile state.
