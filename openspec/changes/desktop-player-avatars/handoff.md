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

## Gear and natural motion (user feedback: stiff animation, centred performer)
- Two-bone IK arms with eased targets (fret per lane, alternating strokes, drum
  piece per lane, kick pedal), 30 poses/s; five guitar outlines extruded with
  pickguard/pickups/strings/headstock; four drum kits; per-slot gear and stage
  side (store-validated). Generic style names because brand/model names are
  trademarks. Tested commit `aabf5ae`, ASAR
  `31ba789fa04de6a983239134b5fb2f860c3b631caba977f1fc18c88500e76c01` (2.4 MB);
  61 unit tests, source/packaged smoke, test:dev pass.

## Next
Merged to develop as `45aafb0` (PR #7). Real camera, macOS prompt and low-end frame cost remain to verify by hand.
