# Design
CSP: `img-src 'self' backstage: …`, `media-src 'self' backstage: blob:`,
`connect-src 'self' backstage: …`. In the built app the page origin is
backstage://app (already 'self'); dev mode serves from http://127.0.0.1:5173.

Scan payload adds album, year, genre, charter and per-part intensity (song.ini
diff_guitar/diff_bass/diff_rhythm/diff_drums, 0–6, -1 = none).

Scores: main-process `scores.json` in userData, keyed `<songId>|<part>|<level>`,
keeping the highest score with its stars, accuracy, best streak and date. Writes are
atomic; inputs are validated (known part/level, finite non-negative numbers, stars
0–6). Converter songs keep job IDs as identity, so scores survive folder renames.

Stars: base score = 50 per gem plus 25 per sustained beat (tempo-aware), the score
a full combo would earn at 1x without bonuses. Thresholds (fraction of base):
guitar/bass/rhythm 0.21, 0.46, 0.77, 1.85, 3.08, 4.52; drums 0.21, 0.46, 0.77, 1.85,
3.08, 4.29 (YARG.Core five-fret/drums). Six = gold.

Panel: shows the song the preview is on (hover/focus), else the first song. Hidden
below 1100 px width where the list needs the space.
