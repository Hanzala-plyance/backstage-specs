# desktop-song-select handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/song-select-panel from develop `803c8a1`.
PR: https://github.com/Hanzala-plyance/backstage/pull/5

## Root cause found
The user ran `npm run dev`. The CSP (`img-src 'self'`, `media-src 'self' blob:`)
blocked every backstage: cover and library song audio when the UI is served from
Vite (http://127.0.0.1:5173). This was also the cause of the earlier unreproduced
report that only the practice song played: all previous checks used the built app,
whose origin is backstage://app. Fix `958398c` plus `npm run test:dev` in CI, which
fails without the fix.

## Implemented
- `SongInfo.tsx` details panel (fixed height to avoid layout shift under the
  pointer); `Stars.tsx`; `core/stars.ts` (base score, YARG thresholds);
  `electron/scores.cjs` store + `scores`/`saveScore` IPC; Game saves each player's
  result and shows stars/NEW BEST; rows show best stars; scan exposes album, year,
  genre, charter, intensity.
- Hover uses mousemove with non-zero movement so rows scrolling under a resting
  cursor during controller/key navigation don't steal the highlight.

## Evidence
Feature `7307b5c` (tested commit), CSP fix `958398c`. ASAR
`ab13eb410dc6f7a50e1c02e8d08499f57c946bced7a0eed0d1a4a0d68e32ad57`.
47 desktop unit, 50 converter, 11 controller, promotion tests. Source and packaged
smoke (finishes a song, stars/new best, panel best) and test:dev pass.

## Next
CI, then user merge. Physical controller acceptance remains before stage.
