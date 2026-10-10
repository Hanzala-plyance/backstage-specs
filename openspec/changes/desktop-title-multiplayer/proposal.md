# Why
The user wants a YARG/Clone Hero-style opening screen and local multiplayer for up
to four players. Today the app opens straight into the library and supports one
player, so a band or venue group cannot play together on one screen.

# What Changes
- Add a title screen ("press Start") and a full-screen main menu that guitar,
  gamepad and keyboard can drive, before the library.
- Add local multiplayer for one to four players. Each player has their own input
  device (keyboard, a gamepad/guitar, or MIDI drums), instrument and difficulty.
  The song audio is shared; each player gets their own highway, judgment, Star
  Power, HUD and score. Results show each player and the band total.
- Any player's Start pauses the song; losing any player's device pauses it.
- Automated tests cover per-player input routing, device assignment rules and a
  multiplayer Electron smoke run.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: opening flow and local multiplayer.

# Impact
Implementation: backstage `desktop/src` (App, Game, highway, new title/menu and
player modules) on feature/desktop-title-multiplayer from develop `bb51622`.
Out of scope: online play, band Star Power sharing, vocals/karaoke (planned
separately in `desktop-vocals-karaoke`), physical-device certification.
