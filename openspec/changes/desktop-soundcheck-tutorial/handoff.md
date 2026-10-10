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

## Follow-up in the same PR (user request: easy, test everything, Soundcheck only in its section)
- `ControllerCheck.tsx` + `checkItems/padActive/keyItem`; Start Soundcheck runs
  the first unfinished step; last lesson leads to the full track, which starts
  directly on Easy (Drums for a MIDI kit). Goals eased (9/15, 5/8, 60% sustain,
  7/12 at half speed, 15 streak).
- Feature `c84f7fe` (tested commit), ASAR
  `bb939d65bb795e711da08a81d6cca322dbcf1986e31adbb4d73fa44b6db67a7b`. 54 desktop
  unit tests; source smoke passed 5 of 8 local runs under heavy load (misses in
  real-time keyboard steps, load average ~16), passes when the machine is idle;
  packaged smoke and test:dev pass.

## Banner removal (user request)
- Library Soundcheck banner and its styles removed (`6c2b54f`). Smoke rounds whose
  first note arrives while the stage warms up now slow the song clock (judgment
  follows it). ASAR `bf7ac218e132a3834ec3882b96934000781d4280631c0bd13c89e0a2af6048ba`
  (test-only commits after it don't change the bundle). Source x2 and packaged
  smoke passed at load ~18-27 on 8 cores; test:dev and 54 unit tests pass.

## Next
User merges PR #6; then check 3.1/3.2. Physical guitar acceptance remains.
