# Why
Controller support is unstable on the development Mac. Sometimes a guitar
works and sometimes it does not, a paired guitar can sit on a yellow light,
and Backstage can show a guitar as plugged in when only the USB receiver is
there. Evidence gathered on 2026-10-11:
- Two MacRiff reader sessions run as root (since Oct 7 and Oct 10). Their
  sessions are marked stopped or their game has exited, but the readers still
  hold receivers. One logged 0 reports and an endpoint transfer error.
- Backstage skips connecting entirely when any MacRiff reader exists, so the
  result depends on which stale processes are alive.
- Backstage marks a Riffmaster "connected" when the receiver opens, before any
  guitar has announced itself or sent input.
- Opening a receiver always calls setConfiguration, which can disturb a reader
  that already holds it.
- Virtual controller names number Riffmasters by list position, so a player's
  device can change name when another receiver is unplugged.
- MacRiff and node-usb name the same ports differently (usb:2:1.x vs usb:0:1.x),
  so a holder cannot be matched to a port by key alone.

# What Changes
- Each receiver port has an explicit state (opening, waiting for guitar, guitar
  connected, released, held by another program, error) with a plain-language
  reason. A virtual controller is connected only once its guitar has
  announced itself or sent input.
- Per-port Release, Connect and Reconnect. Released ports stay released
  (including across replugs) until Connect. Reconnect closes and reopens the
  receiver and resends the Xbox start-up (fixes a guitar stuck on yellow).
- Backstage tries every receiver at launch instead of skipping all of them when
  MacRiff readers exist; it does not reconfigure an already-configured receiver,
  and it still waits when an active (not ended) MacRiff session exists.
- A Controller tools pull-out drawer, opened from Settings and Controllers,
  lists every Riffmaster port and every other controller with live state,
  packet counts, last input, the assigned player, recent events, and a Copy
  debug report button.
- Staff tools inside the drawer, hidden until unlocked, list MacRiff readers
  whose sessions have ended and can stop them after a macOS administrator
  prompt. The administrator reader fallback moves here too. Players never see
  privileged controls.
- Riffmaster names use their stable index; a gamepad that reconnects at a new
  index keeps its player.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: stable controller connection, per-port release, controller
  diagnostics and staff recovery tools.

# Impact
backstage desktop: electron/riff.cjs, electron/riff/gip.cjs, new
electron/riff/holders.cjs, fake-usb.cjs, main/preload IPC, src/core/riff.ts,
src/core/players.ts, new src/ControllerTools.tsx, Controllers.tsx, Settings,
App wiring, styles, unit tests and smoke. Branch feature/controller-stability
from develop.
