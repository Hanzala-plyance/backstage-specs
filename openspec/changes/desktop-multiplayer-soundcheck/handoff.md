# desktop-multiplayer-soundcheck handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/multiplayer-soundcheck stacked on feature/character-select.

## Done
- a20b38d: multiplayer controller check, per-player mapper tabs, lesson lanes per
  instrument (six drum lessons), select-screen lock-in (blue) / unlock (red), with
  the Avatar row and controller hint removed from cards (user request).
- 245285c: evidence in release/acceptance.json; app.asar SHA-256
  ca46256c2624b62fc0701c5b6c91ae88fa87f4990758fc23a23677522fb70ab8.
- Checks: npm test 76 pass, build, packaged and dev Electron smoke, converter,
  promotion and mac-riff suites pass. One local smoke run flaked on a modal
  backdrop at the first Soundcheck click; rerun passed.
- PR: https://github.com/Hanzala-plyance/backstage/pull/10 (stacked on #9).

## Notes
- "Invalid avatar" on saving new characters came from a dev main process started
  before band.cjs gained the 23 presets; restarting `npm run dev` resolves it.

## Blockers
- Real two-player hardware (Riffmaster + MIDI kit) not tested.

## Next
Wait for CI on PR #10; user merges #9 then #10; then mark 3.1/3.2.
