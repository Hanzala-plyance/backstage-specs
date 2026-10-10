# Why
The user wants a Clone Hero-style song select: a large cover and details for the
highlighted song, its instruments and difficulties, and their best scores and stars.
Scores are currently discarded when a song ends. The user also reported that covers
(and, earlier, song audio) never appeared: in dev mode (`npm run dev`) the page's
Content-Security-Policy blocks the app's own `backstage:` resources.

# What Changes
- Allow `backstage:` for images, media and fetches in the CSP, so dev mode shows
  covers and plays library songs; add a dev-mode smoke check.
- Song info panel beside the library for the hovered/focused song: big cover, title,
  artist, album, year, genre, charter, length, per-instrument difficulties and
  intensity, and best score with stars per instrument.
- Save each finished performance's best score per song, instrument and difficulty
  (all local players). Stars 0–5 plus gold 6 from YARG's five-fret thresholds
  relative to the chart's base score. Results show stars and "new best".

# Capabilities
## Modified Capabilities
- `desktop-runtime`: song select details, saved best scores and stars.

# Impact
backstage desktop (index.html CSP, library scan metadata, scores store IPC, App,
Game, styles). Branch feature/song-select-panel from develop `803c8a1`.
Scores are local to the computer (userData), not online leaderboards.
