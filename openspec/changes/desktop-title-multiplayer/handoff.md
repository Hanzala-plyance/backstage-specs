# desktop-title-multiplayer handoff

Agent/tool: Claude Code, macOS Apple Silicon, Node 22.
Code: Hanzala-plyance/backstage, feature/desktop-title-multiplayer from develop `bb51622`.
PR: https://github.com/Hanzala-plyance/backstage/pull/2
Planning: backstage-specs/meta.

## Implemented
- Title screen and main menu (Quickplay, Practice, Add songs, Controllers,
  Settings, Quit), operable by guitar, gamepad and keyboard with hint bar.
- `core/players.ts`: lineup rules (1–4 players, unique devices, charts the song
  has). Track dialog lobby: add/remove players, cycle controller, instrument and
  difficulty. Player 1 is the Controllers selection.
- `game/player.ts`: per-player runtime (judgment, highway, pad edges, keys, MIDI).
  `Game.tsx` drives N runtimes from one audio clock; solo DOM unchanged.
  Any Start pauses; a lost device pauses and names the player; band results.
- Highway: narrow columns pull the camera back and keep the strikeline low.

## Evidence
Commits: feature `1f9c1c4`, docs `eeb0ac5`, CI test fix `01396e8` (tested
commit), evidence `92e32a8`/`e7d3ac2`. First CI run failed: the simulated pad
strum missed its window on slow software-rendered frames; the smoke now runs the
song clock at quarter speed for that strum. Push and PR checks then passed on
`e7d3ac2`; the packaged artifact did not change (scripts are not bundled). Packaged ASAR `3c185da86855aa8e0ea3ffa77bf23f4cf92bbea263acebd59d79bea5d53f3a70`.
- 35 desktop unit tests; 47 converter; 11 controller routing; promotion tests.
- Electron smoke (source and packaged) covers opening flow and a two-player
  round: keyboard and simulated pad each score only for their owner.
- Visual check: title, main menu, 4-player lobby and 4-player gameplay.
- One packaged smoke run failed and its output was lost (piped through `tail`);
  four following runs on the same artifact passed. During development, test
  windows were seen to advance menus by themselves only while the operator was
  using the machine; most likely real keystrokes reaching the focused test
  window. Not proven; watch CI for recurrences.

## Not verified / next
Physical multi-controller play, audible timing, clean install, recovery.
Next action: merge PR #2 after CI passes; then physical acceptance before stage.
