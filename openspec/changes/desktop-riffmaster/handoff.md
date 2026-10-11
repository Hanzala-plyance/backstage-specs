# desktop-riffmaster handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/riffmaster-bridge from develop `45aafb0`.
Observed: two receivers (0e6f:0248, locations 0x02110000 and 0x02120000) and
MacRiff root readers (pids 73100/73101 started ~3 days earlier, 79706/79707
recent) holding them. Not touched by the agent.

## Implemented
- `electron/riff/` reader, output, receivers, reader-group (adapted from
  mac-riff/build, MIT), decode, fake-reader; `electron/riff.cjs` session
  (sockets 0600 in a 0700 dir, lease/status, osascript launch, MacRiff-busy
  check, stale-session sweep, stop on quit); preload `backstageRiff` events;
  `core/riff.ts` virtual standard pads at index 16+; Controllers panel.
- Packaging unpacks the reader and usb (this platform's prebuild only).

## Evidence
Feature `7314952` + build `d3a8f67` (tested commit `d3a8f67`), ASAR
`b6850a4e9e6a8f7967c3ec0dc315146c39c9fcd637eea94c6f3953c864f90fb7`. 66 desktop
unit (decode, hysteresis, malformed reports, port keys, fake-reader session
through the real supervisor), source/packaged smoke (two fake receivers as
separate controllers with live input), test:dev, converter, controller, promotion.
Packaged binary loads usb and lists the two physical receivers read-only.

## Next
User: stop MacRiff readers holding the receivers, Connect in Backstage, approve,
play with both guitars (task 2.5). Then PR merge.
