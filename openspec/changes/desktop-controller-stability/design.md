# Design
## Port state (electron/riff.cjs, gip.cjs)
- `Receiver` records GIP traffic: packet counts by command, last packet time,
  whether the guitar announced (0x02) or sent input (0x20), and emits events
  (opened, handshake sent, announce, first input, transfer error, closed).
  It skips setConfiguration when the active configuration is already 1, and
  exposes `handshake()` for a resend.
- `Riffmasters` keeps a slot per USB port key with a persistent index (16+),
  `receiver` state (opening | open | released | held | error | absent),
  `guitar` state (waiting | connected), a reason string and a ring of the
  last 40 events. Snapshots include only present ports. `connected` (what the
  virtual gamepad reports) is true only when receiver is open and the guitar
  is connected.
- `release(key)`, `connect(key)`, `reconnect(key)`; released keys are skipped
  by connectAll and hotplug until connect(key).
- Launch: connectAll unless an active MacRiff session exists (session not
  stopped and its owner process alive). Ended sessions no longer block.
- `report()`: JSON debug report (versions, platform, USB receivers with their
  configuration, port slots with events, MacRiff readers, admin bridge state).

## Holders (electron/riff/holders.cjs)
- Parses `ps -Ao pid,user,lstart,command` for MacRiff reader-group.js and
  controller-reader.js processes, reads the session directory (from the
  config or --socket path), and marks a reader stale when session.json phase
  is stopped or its pid is gone. Pure parser with injected file reader; tests
  use fixtures.
- `stopReaders(pids)` (staff only): re-reads ps right before, keeps only pids
  that are still stale MacRiff readers, and runs one `kill` through osascript
  with administrator privileges. Never run by automated tests; tests inject a
  stub.

## Renderer
- `core/riff.ts`: RiffPad gains receiver, guitar, reason, packets, lastPacket,
  player name derived from index (stable).
- `ControllerTools.tsx`: right-side drawer (role dialog, controller navigable):
  Riffmaster ports (state, what to do, Release/Connect/Reconnect), Other
  controllers (index, id, mapping, live buttons, assigned player), Copy debug
  report; Staff tools section revealed by Shift-clicking the drawer title,
  with stale MacRiff readers and the administrator reader fallback.
- Settings has a Controller tools row; Controllers' Riffmaster panel shows
  states and a Controller tools button; its admin button moves to Staff tools.
- `core/players.ts`: `rematch(players, pads)` moves a player's pad device to
  the same controller id at a new index when the old one is gone and the
  match is unambiguous.
