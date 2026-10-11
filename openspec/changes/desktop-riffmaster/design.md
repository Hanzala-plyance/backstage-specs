# Design
- Main (`electron/riff.cjs`): discovery with `usb.getDeviceList()` filtered to
  0e6f:0248 (read-only). Connect creates a 0700 session dir, one `net.Server` per
  receiver on `<session>/pN/controller.sock` (0600), writes `controllers.json`,
  `session.json` (owner pid) and a 1 s lease, then runs `osascript … with
  administrator privileges` to start `riff/reader-group.cjs` under the app's own
  binary with ELECTRON_RUN_AS_NODE. Status files per slot keep the supervisor's
  stall detection satisfied while reports or heartbeats arrive.
- Reader code is adapted from `mac-riff/build` (reader-group, controller-reader
  /bridge controller path, controller-output, receiver-selector) without
  keyboard injection. `usb` and the reader scripts are unpacked from the asar.
- Decoding (`riff/decode.cjs`, unit tested) maps MRF2 to a standard-layout
  virtual pad: buttons 0–4 frets, 8 Select or tilt (Star Power), 9 Start, 12/13
  strum, 14/15 d-pad, 6 whammy; axes 0/1 stick, 2 whammy, 3 tilt. The renderer
  appends these pads to `navigator.getGamepads()` at stable indexes 16+.
- Tests: decode unit tests; a session test with a fake unprivileged reader over
  the real socket protocol; smoke with `BACKSTAGE_RIFF_FAKE` listing two
  receivers and streaming scripted presses.
