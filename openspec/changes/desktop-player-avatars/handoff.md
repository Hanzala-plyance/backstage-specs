# desktop-player-avatars handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/player-avatars from develop `e0ddaef`.
PR: https://github.com/Hanzala-plyance/backstage/pull/7

## Implemented
- `electron/band.cjs` (4 slots, cleaned names, preset IDs or PNG data URL ≤ 400 KB,
  atomic writes, corrupt-file fallback); IPC `band`, `saveSlot`, `cameraAccess`.
- Permission handler allows `media` only for video from the app origin; macOS
  `askForMediaAccess("camera")` (skipped in tests); `NSCameraUsageDescription`.
- `core/avatars.ts` presets/names/stylize/motion/mood; `Avatar.tsx` SVG performer;
  `Avatars.tsx` page with camera flow; Game shows avatars and names; lobby names.
- Smoke: Chromium fake camera flags; real gamepads hidden via init script.

## Decisions
- 2D SVG avatars (not 3D) for performance alongside the WebGL highway.
- Raised-hand trigger is frame-difference motion in the upper corners, plus a
  Take photo button; no ML model download.

## Evidence
Feature `23545ac` (tested commit), ASAR
`e66e7245ea28e19cb3ebf68f2d63e2f025144425f1515834fd2aa9ea6cce480f`. 60 desktop
unit, 50 converter, 11 controller, promotion tests; source/packaged smoke and
test:dev pass (one packaged run missed a timed note under load; retry passed).

## 3D band (user feedback: 2D looked poor; wanted 3D in the stage lights)
- 2D `Avatar.tsx` removed; `stage3d.ts` + `AvatarView.tsx` added; Game shows the
  band stage, name tags and comic captions. Tested commit `109a80e`, ASAR
  `5b447dfdb9ca44f03215df627e7a8077d9159fb2c5ddc1bb2ba6a9bac313c638` (2.3 MB).
  60 unit tests, source/packaged smoke and test:dev pass. Frame cost was not
  profiled on low-end hardware; by design the stage renders 12 times a second.

## Next
User merges PR #7. Verify a real camera and the macOS permission prompt on the
packaged app by hand.
