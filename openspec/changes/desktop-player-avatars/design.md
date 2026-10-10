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
- `Avatar.tsx`: SVG performer (body, head or photo, instrument by part) with CSS
  animations; a hit counter re-triggers the strum/strike, tempo drives the groove.
- `Avatars.tsx`: slot tabs, name input, premade grid, camera flow (preview,
  raise-hand countdown, capture, use/retake). Game reads names and looks through
  `PlayerInit`; PlayerRuntime stats add hits and misses.
