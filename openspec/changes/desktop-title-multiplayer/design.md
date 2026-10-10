# Design
Code: backstage, feature/desktop-title-multiplayer from develop `bb51622`.

Opening flow: Title → Main menu → existing app shell pages. Title accepts Start,
green or Enter from any device. Red on the library's top level returns to the main
menu; red on the main menu returns to the title. Returning from a song goes to the
library, not the title.

Players: a lobby in the track dialog lists 1–4 player slots. A slot owns exactly one
device; keyboard and MIDI may each be held by one player, and each gamepad by one
player. Each slot chooses instrument and difficulty from the song's charts.
Players' pad profiles come from the saved per-device mapping.

Game: one `SongAudio` clock drives N player runtimes. Each runtime owns a
`Judgment`, a highway renderer on its own canvas, edge-detection state and held
lanes. Keyboard input is routed only to the keyboard player, pad state only to the
pad's player, MIDI only to the MIDI player. A single player keeps the existing
full-size layout and HUD. Two to four players render side-by-side columns with a
compact HUD each; renderer pixel ratio drops as players are added. Menus in the
pause/results overlay accept any player's controller.

Tests: player assignment and routing are pure functions with unit tests. Electron
smoke runs a two-player song (keyboard + simulated pad), checks independent scores
and that one player's input does not score for another.
