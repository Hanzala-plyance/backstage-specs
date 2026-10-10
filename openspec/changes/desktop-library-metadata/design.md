# Design
Title cleanup is a pure function with shared test cases in JS (desktop) and Python
(converter): remove bracketed segments containing video/visualizer/official/audio/
lyric/exclusive/HD-style words, collapse spaces, and when the title starts with the
artist followed by " - " (or the artist is generic), split artist and title.

Folder names: "Artist - Title", unsafe filename characters removed, at most 120
characters, never leading dots; clashes get " (2)", " (3)". Renaming happens only
for 32-hex folder names inside the real Songs root, as a real directory rename
within its parent; targets are never overwritten.

Converter: publish() first looks for a root folder whose `.backstage.json` job_id
matches (legacy or renamed); otherwise installs under the readable name.
install_status() falls back to the same lookup when the receipt path moved.

Covers: main-process lookup via net.fetch to itunes.apple.com/search (entity=song,
limit 10). pickCover() requires normalized artist containment and title token
match, rejects instrumental/karaoke/tribute/cover/piano/remix-of-other results,
then downloads artworkUrl100 resized to 600x600 (https only, apple CDN host, image
content type, < 3 MB), converts to PNG and atomically replaces album.png. The
attempt result is recorded in `.backstage.json` (cover: itunes|none) so each song
is looked up once; "Find cover" retries. A `backstage://app/art/<id>` route serves
album.png/jpg for scanned songs only.
