# Why
The user wants to play Backstage with the PDP Riffmaster for Xbox they have
plugged in (two receivers are connected), using the MacRiff bridge already in
this repository, and with several controllers at once. macOS has no driver for
the Riffmaster receiver (0e6f:0248), so it never appears to the Gamepad API.

# What Changes
- Revised at the user's request: Backstage reads the receivers in-process
  (usb module, GIP start-up and decoding adapted from MacRiff), connecting them
  automatically and reconnecting after a replug, with no separate program. The
  administrator reader below remains only as a fallback when a receiver can't be
  opened directly.
- Backstage becomes a native consumer of the MacRiff controller protocol
  (16-byte MRF2 reports and MRFH heartbeats over a private Unix socket per
  player). No adapter is injected into any game; no keyboard injection.
- Controllers lists Riffmaster receivers (read-only discovery) and offers
  Connect, which asks for macOS administrator approval once and starts the
  MacRiff reader supervisor for every receiver. Backstage owns the session lease,
  so readers stop and release USB when Backstage disconnects or quits.
- Each connected Riffmaster appears to the game as a standard-layout controller
  ("PDP Riffmaster 1", "2", …) with a built-in guitar mapping (frets, strum,
  Start, Star Power via Select or tilt, whammy), so menus, player assignment for
  up to four players, remapping, the Soundcheck controller check and
  disconnect pause work unchanged.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: Riffmaster controllers through the MacRiff reader.

# Impact
backstage desktop: electron riff session (sockets, lease/status files,
privileged launch via osascript), reader scripts adapted from mac-riff/build
(MIT, MacRiff), `usb` dependency unpacked from the asar, renderer virtual pads,
Controllers UI. Branch feature/riffmaster-bridge from develop `45aafb0`.
Hardware verification requires the user to approve the admin prompt and play.
