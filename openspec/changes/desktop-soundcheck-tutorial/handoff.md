# desktop-soundcheck-tutorial handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/soundcheck-tutorial from develop `ddee614`.
PR: https://github.com/Hanzala-plyance/backstage/pull/6

## Implemented
- `core/lessons.ts`: six lesson charts (120 BPM, 3 s lead-in, end < 31 s),
  `DemoPlayer`, `applyDemo` (shared by tests and `PlayerRuntime.demo`),
  `lessonResult`, `cueFor`. `game/Lesson.tsx` runner (intro → demo → turn →
  result); `Soundcheck.tsx` list with localStorage progress; main menu and sidebar
  entry; practice track removed from library list/count; Game `backTo` label.
- Decision: lessons are guitar-only; a MIDI kit falls back to the keyboard.

## Evidence
Feature `89ebfa9` (tested commit), ASAR
`87fe20798778eebc8f7087b650215c7865831fe85d25b1cda9ec2ad50d7d7721`.
53 desktop unit (demo passes every goal in strum/tap modes, idle fails, early
sustain release fails), 50 converter, 11 controller, promotion tests. Source and
packaged smoke (demo scores by itself, lesson 1 passed on keyboard, progress) and
test:dev pass. One local run skipped the title screen (likely a physical pad on the
dev Mac); three reruns passed.

## Next
User merges PR #6; then check 3.1/3.2. Physical guitar acceptance remains.
