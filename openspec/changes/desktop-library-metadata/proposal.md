# Why
Converted songs are stored in folders named by a 32-character job ID, their titles
are raw YouTube video titles ("… (Official Video)", "[Official Visualizer]"), and
their covers are generated placeholders. The user asked for folders named by artist
and song, and for real album covers found by lookup.

# What Changes
- Clean display titles: strip video-only decorations and split "Artist - Title";
  song.ini files are not rewritten.
- The converter installs new songs into "Artist - Title" folders (suffix on clash)
  and recognises installed songs by the job ID stored in the folder, so renamed
  folders stay installed.
- The app renames Backstage-made job-ID folders to readable names; folders the user
  named are never renamed.
- Album covers: for songs with a generated or missing cover, look up the iTunes
  catalog once, accept only an artist-and-title match (skipping instrumental,
  karaoke and tribute versions), and save it as album.png. Covers show in the
  library and track dialog; the dialog can retry. Offline keeps existing art.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: readable library folders, cleaned titles and album covers.

# Impact
backstage `song-converter/songmaker/library.py`, `desktop/electron` (library,
art protocol, cover lookup) and `desktop/src`. Branch feature/library-metadata on
feature/desktop-library-preview (PR #3). Lookups send artist and title to Apple's
public search API. Fetched covers are copyrighted: personal use only until catalog
authorization; venue use stays behind the catalog gate.
