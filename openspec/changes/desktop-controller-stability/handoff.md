# desktop-controller-stability handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/controller-stability from develop (8d0dd64).

## Evidence before work (2026-10-11, read-only)
- MacRiff root readers 73100/73101 (session WmBC3h, usb:2:1.2) and
  79706/79707 (session 7qN7tc, phase stopped, 0 reports, usb:2:1.4) running.
- node-usb lists receivers as usb:0:1.1 and usb:0:1.2 (configuration 1).
- No reader was stopped and no receiver was opened by the agent.

## Decisions
- User chose a pull-out tools drawer (Settings) with staff diagnostics for
  privileged recovery.

## Done
- df7ea04: port states, guitar presence, no reset of configured receivers,
  launch policy (ended MacRiff sessions don't block), Release/Connect/
  Reconnect, Controller tools drawer, staff tools (Shift-click title),
  holders.cjs, stable Riffmaster names, gamepad rematch.
- 999e953: no USB enumeration per guitar report (snapshot used getDeviceList).
- 3eae51b: quitting waits (<= 2 s) for receivers to be released; SIGINT/
  SIGTERM quit cleanly. Found from a dev-session crash (Electron
  2026-10-11 10:29:37, SIGABRT in libusb_close from node-usb Device
  finalizer during napi env teardown) after the user restarted `npm run dev`
  on the work-in-progress branch.
- dee11c0: evidence; app.asar SHA-256
  d2280e5ed0785869dc82df5e35183e90707b3a37955f410ffd8e4dcf35e25a1c.
- Checks: npm test 85 pass; packaged smoke passed twice and dev smoke passed
  on 3eae51b; converter, promotion and mac-riff suites pass.
- Packaged smoke had failed four times on early gameplay timing while the
  crashed dev app, ReportCrash and overlapping runs loaded the machine;
  develop's packaged build passed and the branch passed twice once runs no
  longer overlapped.
- PR: https://github.com/Hanzala-plyance/backstage/pull/11

## Blockers
- Not tested on real Riffmasters: presence, release, reconnect, quit release,
  and stopping the stale MacRiff readers (73100/73101, 79706/79707 still
  running; the agent did not stop them).

## Next
CI on PR #11; user merges; then hardware checks on stage (task 3.2).
