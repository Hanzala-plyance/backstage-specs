# Design: camera rocker

## Context
The desktop runtime renders a Three.js stage behind the note highway (light
beams, rails) and owns a beat-accurate `Timeline` per chart. The Electron main
process explicitly denies camera permission today; only MIDI and fullscreen are
allowed. The renderer is sandboxed with a strict CSP. Venue use adds privacy and
performance constraints that a home app would not have.

## Goals
- A first-time player can capture a photo in under a minute and see themselves
  performing on their chosen instrument during gameplay.
- All of it works offline on a venue machine with no camera attached and no
  detection model present (graceful degradation at every step).
- Photo handling passes a privacy review without caveats.

## Non-goals
- Live video behind the highway during gameplay.
- Skeletal re-posing or motion capture; the rocker is a treated still image
  with procedural motion.
- Recognizing *who* the person is, or storing more than one rocker photo.
- Bundled ML model weights (desktop component rule).

## Decisions

### 1. Capture UX and consent
A "Your rocker" panel on the Controllers page (input-adjacent, already
device-centric) and an empty-state prompt on the song dialog. Capture flow:
explicit consent copy → `getUserMedia` preview → capture frame to canvas →
review with Retake / Use photo. The stream is stopped on capture, cancel, or
navigation away. No snapshot is taken without the player pressing Capture.

### 2. Person detection: tiered and honest
- Tier 1 (default, offline): manual framing. The player drags/zooms the photo
  into a head-and-shoulders guide. Always available, no dependencies.
- Tier 2 (optional): on-device person/face detection via a small model
  downloaded on demand over HTTPS to application data, with checksum validation.
  When it runs and finds a person, it pre-fills the framing; the player can
  adjust. When it is absent or finds nothing, the UI says so and stays in
  manual mode. The UI must never show "we found you" without a detection
  result (constitution: no disguised simulations).
- Detection output is framing metadata only; it is not retained separately.

### 3. Image treatment
The framed photo is rendered through a fixed stylization filter (duotone +
contrast + silhouette edge) at capture time into a single processed texture.
Rationale: consistent art direction across arbitrary venue lighting, hides
framing imperfections, and reduces the "surveillance feel" — the stored asset
looks like a graphic, not a webcam photo. Original frames are discarded after
processing.

### 4. Stage rendering
A textured plane in the existing Three.js scene, positioned behind the highway
at the stage backdrop, with an instrument silhouette (guitar / bass / drums
variant per selected part) composited in front of the sprite. Animation is
procedural and timeline-driven:
- Beat-synchronized bob/lean from `Timeline.position(time).beat`.
- Strum/sway accents during solo sections; idle sway otherwise.
- Star Power state changes tint and motion amplitude, matching the existing
  `power-active` HUD language.
Rendering cost is one textured plane plus a fragment filter — negligible
against the instanced gem budget; capped like the rest of the scene.

### 5. Storage and IPC
- Photo + framing stored as one processed image file under the app user-data
  directory, referenced by a fixed name; one rocker per installation.
- New IPC: `rocker.save` (validated image bytes, size/type limits),
  `rocker.load`, `rocker.delete`. All validated in main like existing handlers.
- Permission handler extended to allow `media` (camera) only for the trusted
  application origin; microphone is not requested or allowed.
- CSP gains `img-src blob:` (or the texture is created from canvas/ImageBitmap
  to avoid new CSP surface).

### 6. Failure and fallback behavior
- No camera, denied permission, or capture failure → clear message, feature
  stays off, existing stage unchanged.
- Texture/WebGL failure of the sprite → stage renders without the rocker;
  gameplay, scoring and pause are unaffected.
- Settings toggle "Show my rocker on stage" default on when a photo exists,
  remembered per installation.

## Risks
- **Privacy perception at venues**: mitigated by consent-first flow, immediate
  camera release, stylized output, one-photo retention, visible delete.
- **Detection download supply chain**: checksum-pinned, optional, and never
  required; failure degrades to manual mode.
- **Motion sickness/flash sensitivity**: rocker motion respects the existing
  reduced-flashing style preference; amplitude is modest and beat-locked, not
  strobe.
- **Scope creep toward avatars**: single still + procedural motion is the hard
  boundary for this change.

## Verification
Unit: framing math, filter pipeline determinism, detection-result → framing
mapping, IPC validation. Smoke (Electron): fake `getUserMedia` stream →
capture → sprite appears in stage; denied permission path; delete path.
Manual/hardware: real webcam on the target venue Mac, offline first-run, and
performance check during Expert charts with the layer enabled.
