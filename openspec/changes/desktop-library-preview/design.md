# Design
Preview: one renderer-owned `<audio>` element (not the game's `SongAudio`), routed
through the existing `backstage://app/audio/<id>` stream. A 300 ms dwell avoids
playing while scrolling; volume fades in and out; playback loops back to the
preview start after 25 s. Practice uses the synthesized practice WAV. Starting a
song, leaving the library or removing the song stops it.

Queue: the renderer filters jobs whose `library.status` is `installed` or
`missing` (installed, then removed). The service history is unchanged.

Removal: `removeSong(id)` IPC. The main process resolves the song directory from
its scanned entry, re-checks it is a real directory strictly inside the real Songs
root and not a symlink, then calls `shell.trashItem`. Test runs (BACKSTAGE_TEST_DATA)
move the folder into a test trash under userData instead of the OS Trash. Failure
leaves the song in place and reports an error; nothing is permanently deleted.
