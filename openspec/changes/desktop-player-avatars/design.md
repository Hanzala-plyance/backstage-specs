# Design
- `electron/band.cjs`: four slots in userData `band.json` (atomic write). Names
  are cleaned to `[A-Z0-9]{0,8}`; avatars are `{kind:"preset", id}` (10 known IDs)
  or `{kind:"photo", image}` (PNG data URL ≤ 400 KB). IPC `band`, `saveSlot`.
- Camera: permission handler allows `media` for the app origin only when video
  alone is requested; macOS asks via `systemPreferences.askForMediaAccess("camera")`
  and the bundle declares `NSCameraUsageDescription`.
- `core/avatars.ts` (pure, unit tested): presets, `cleanName`, `slotName`,
  `stylize` (posterized gradient map to the theme palette), `motion` (frame
  difference in a zone, used for the raised-hand trigger), `moodFor`.
- `game/stage3d.ts`: Three.js performers built from primitives (no downloaded
  assets): custom toon shader with screen-space halftone and rim light, inverted
  hull outlines, face textures per expression drawn on canvas (photo faces keep
  the photo and add comic marks). One transparent canvas behind the highway holds
  every player; poses are quantized to 1/12 s and the stage renders only when the
  pose changes, so the cost is about 12 small renders a second. Failure to start
  WebGL leaves the game running without the band.
- `AvatarView.tsx`: live 3D preview and cached one-off portrait renders
  (sequential, context released after each).
- `Avatars.tsx`: slot tabs, name input, premade grid, camera flow (preview,
  raise-hand countdown, capture, use/retake). Game reads names and looks through
  `PlayerInit`; PlayerRuntime stats add hits and misses.
