# Why
The user wants YARG/Clone Hero-style song previews while choosing a song, a queue
that clears songs once they are in the library, and an in-game way to remove
songs from the library without opening Finder.

# What Changes
- Play a short looping preview of a song's audio when it is hovered or focused
  (mouse, keyboard or controller) in the library, starting at the song's
  `preview_start_time` when present. Stop when leaving the song or starting play.
- Hide queue items whose song is installed (or was installed and later removed);
  announce each newly installed song.
- Remove a song from the track dialog, or with blue on a focused song, after a
  confirmation step. The song folder moves to the system Trash so it can be
  restored. The practice track cannot be removed.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: library preview, queue cleanup and song removal.

# Impact
backstage `desktop/electron` (library scan preview time, removal IPC) and
`desktop/src` (App, styles). Branch feature/desktop-library-preview from develop
`87c3801`. Removal only moves folders inside the configured Songs root.
