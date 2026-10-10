# Why
The user asked for YARG-style karaoke: sing along with lyrics and be scored from a
microphone. None of the current library supports it: converted songs have empty
`lyrics.lrc`, no `PART VOCALS` track and a single mixed audio file, and the desktop
service runs conversion with the speech model off.

# What Changes (proposed, not implemented)
- Converter: optionally transcribe timed lyrics, extract pitched vocal notes and
  separate a vocal stem so the backing track can play without vocals.
- Desktop: parse `PART VOCALS` (notes, lyrics, phrases) and lyric-only charts;
  vocal highway with scrolling lyrics and pitch lanes; microphone input with
  local pitch detection, latency calibration and phrase scoring; join vocalists as
  multiplayer players.
- Lyric-only songs offer a karaoke display without pitch scoring.

# Capabilities
## New Capabilities
- `desktop-vocals`: lyrics display, microphone pitch scoring and vocal-stem playback.

# Impact
Implementation: backstage song-converter (models, stems) and desktop (parser, mic,
UI). Depends on `desktop-title-multiplayer` for player slots. Model downloads and
stem separation increase preparation time and disk use; measure before enabling by
default. Lyrics and vocal stems of commercial songs need catalog authorization.
