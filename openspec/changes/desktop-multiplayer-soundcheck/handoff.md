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

- CI on PR #10 first failed: after the solo song the smoke pressed Start
  before the menu restarted, and menus ignore buttons already held when they
  start. b8084c1 waits for the library first; the smoke also prints controller
  state and page/console errors on failure. d345bd7 evidence (same ASAR);
  both CI runs pass.
- #9 merged into develop (32ee9c2).

## Notes
- "Invalid avatar" on saving new characters came from a dev main process started
  before band.cjs gained the 23 presets; restarting `npm run dev` resolves it.

## Blockers
- Real two-player hardware (Riffmaster + MIDI kit) not tested.

## Next
User merges PR #10; then mark 3.2.
