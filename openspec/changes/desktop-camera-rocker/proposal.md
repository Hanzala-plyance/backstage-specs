# Why
The desktop stage is currently abstract: beams, rails and gems, but no performer.
Venue customers expect to see themselves "in the band." A single camera photo of
the player, turned into a stylized animated rocker on the instrument they picked,
delivers that fantasy without 3D character pipelines, asset bundles, or network
dependencies. A venue kiosk also raises the stakes on privacy: photos must be
opt-in, local-only, and deletable, and the app must never imply it detected a
person when it did not.

# What Changes
- Add an opt-in camera capture flow: consent, live preview, capture, retake,
  and delete. The camera is released immediately after capture; there is no live
  feed during gameplay.
- Detect a person in the captured photo when a detection model is available, and
  auto-frame the cutout. When detection is unavailable or finds no person, fall
  back to an honest manual framing mode (drag/zoom) — never presented as
  automatic. No model weights are bundled in the app; on-device detection models
  are optional on-demand downloads, with manual framing as the offline default.
- Store the rocker photo and framing locally in application data only. Photos are
  never uploaded, synced, or included in diagnostics. Delete removes the file.
- Render the photo as a treated (duotone/silhouette) rocker sprite in the 3D
  stage behind the highway, with an instrument silhouette matching the selected
  part, animated from the chart timeline: beat-synced motion, strum accents on
  phrase/solo activity, and a Star Power state.
- Extend the Electron permission gate to allow camera capture only from the
  trusted application origin, and add narrow validated IPC for photo save/load/
  delete with size and type limits.
- Add a Settings toggle to disable the rocker entirely; without a photo or with
  the feature off, the existing stage renders unchanged.

# Capabilities
## New Capabilities
- `camera-rocker`: consent-gated photo capture, honest person detection with
  manual fallback, local-only storage, and beat-synced performer rendering in
  the gameplay stage.

## Modified Capabilities
- `desktop-runtime`: gameplay stage gains an optional performer layer; the base
  stage, timing and scoring are unchanged when the layer is absent or disabled.

# Impact
Implementation: backstage/desktop renderer (capture UI, stage sprite, settings),
electron main/preload (media permission, photo IPC), tests and smoke coverage.
Planning: backstage-specs/meta proposal, design, scenarios, tasks and handoff.
Deferred: multiplayer/multi-face bands, live camera during gameplay, animated
body re-posing, cloud sync of photos, venue-managed photo retention policy, and
any identity recognition beyond person presence. Detection accuracy is never a
release claim; manual framing is the guaranteed path.
