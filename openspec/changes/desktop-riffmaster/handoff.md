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

## In-app reader (user request: no separate code/command)
- `riff/gip.cjs` Receiver; `Riffmasters` manager with auto-connect, hot-plug,
  stable indexes, held-by-another-app reporting; `AdminBridge` kept as fallback.
  Tested commit `3ff10d1`, ASAR
  `076909a21aadfbf44e04f6468a3e5b1541c9bd2b76ad03be1522248d86053496`. 69 desktop
  unit (driver start-up/sequence/re-announce/release, two receivers with
  unplug/replug, held receiver), source/packaged smoke, test:dev pass. Fixed a
  CI-only flaky assertion (sampled two fake receivers at one instant).
- Hardware probe as uid 501: open + setConfiguration succeeded; claim returned
  LIBUSB_ERROR_NOT_FOUND because MacRiff's root reader (pid 73101) holds that
  receiver. Whether a normal user can claim a free receiver is still unverified.

## Reported: guitar navigates menus but is ignored in game
- Root cause: menus follow every controller, a song only its players'; Player 1
  stayed on the keyboard. Fixed in `5ad62d7`: arriving controller becomes
  Player 1 (with notice) when P1 is on the keyboard; unassigned controller input
  in a song shows a hint. ASAR
  `816a1e0b2783b139a51856d01647a5850421be9579c74608278d9dc6bd6bfebe`; 69 unit,
  source/packaged smoke (auto-assign toast, solo dialog on Riffmaster 1, hint for
  Riffmaster 2), test:dev pass. Not reproduced on the user's live instance.

## Player bar (user request: Clone Hero-style join and setup, avatar in pop-up)
- `PlayerBar.tsx`, `joinPlayer`/`cycleSetting`/`leavePlayer`, `MenuPad.pollFrom`
  (source per press), Start routing in App, choose() keeps player choices.
  Avatar row cycles presets (and the camera photo) via the same band slots as the
  Avatars section. Tested commit `71ef21e`, ASAR
  `29a61fc3c2010ea91dfaebf8408c72b298823b00ca6cc9d3f197da4a9f63e41f`; 71 unit,
  source/packaged smoke (gamepad joins with Start, picks avatar and Medium,
  closes with red), test:dev pass.

## Per-player strumming
- User report: strumming didn't hit notes. Their saved global mode was "tap"
  (Settings → Tap assist), which ignores strums. Each player's pop-up now has
  Strumming On/Off (unset follows Settings); PlayerInit.mode feeds each
  PlayerRuntime. Tested commit `8bb918b`, ASAR
  `f92572eb0403631409858aa006f341b8dd63517776d84bf7ccc6d80f32503a61`; 72 unit,
  source/packaged smoke (toggle from the pad's own pop-up), test:dev pass.

## Next
Merged to develop as `8eca10b` (PR #8). Real Riffmaster input on the user hardware (task 2.5) remains unverified.
