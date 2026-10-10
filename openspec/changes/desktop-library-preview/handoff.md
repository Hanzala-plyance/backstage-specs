# desktop-library-preview handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/desktop-library-preview from develop `87c3801`.
PR: https://github.com/Hanzala-plyance/backstage/pull/3

## Implemented
- `core/preview.ts`: dwell 300 ms, fade in to 0.5, 25 s loop from the scanned
  preview start (song.ini `preview_start_time`, else a third in). Own `<audio>`
  element. Stops on leave, play, page/screen change, dialog close and removal.
- Queue view hides jobs with library status `installed` or `missing`; toast on
  new installs.
- `Library.remove(id, trash)` + `removeSong` IPC: real directory strictly inside
  the real Songs root, symlinks refused, OS Trash via `shell.trashItem`; test runs
  use a userData test trash. Dialog confirmation defaults to Keep; blue/Delete
  shortcut on a focused song; Esc/red cancels.

## Evidence
Feature `f2b629b`, evidence `f996331`, test fix `14a6e12` (tested commit),
evidence `d55a767`. First CI round: PR run passed, push run failed on the
two-player pad strum (slow software frames). The smoke now slows the song clock
before waiting for scores and presses fret+strum together; verified locally
with 500 ms frames. Push and PR checks then passed on `d55a767`. ASAR
`ec367e450281ff0c37165d3eb8b3e8a72e573661e58c42649547eb9a6610163b`.
36 desktop unit tests; source and packaged smoke pass with exit code checked.
Real-library check (no removal): Janice previews from 30 s; queue shows none of
the five installed songs.

## Not verified / next
Physical controllers, audible timing, clean install, recovery; OS Trash restore
on another machine. Next action: user merges PR #3 (checks green on `d55a767`).
