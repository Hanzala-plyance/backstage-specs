## 1. Platform and storage
- [ ] 1.1 Extend the Electron permission gate to allow camera for the trusted origin only; keep microphone denied.
- [ ] 1.2 Add validated rocker save/load/delete IPC (image type and size limits, fixed storage name, user-data directory).
- [ ] 1.3 Unit-test IPC validation: oversize, wrong type, and path escape attempts are rejected.

## 2. Capture and framing
- [ ] 2.1 Build the rocker panel with consent copy, live preview, capture, retake and delete; stop the stream on every exit path.
- [ ] 2.2 Implement manual framing (drag/zoom into guide) as the default path.
- [ ] 2.3 Add optional on-demand detection model download with checksum validation; pre-fill framing only on a positive result; truthful status copy otherwise.
- [ ] 2.4 Implement the deterministic stylization filter (duotone/silhouette) and discard original frames after processing.

## 3. Stage integration
- [ ] 3.1 Render the performer sprite behind the highway with per-part instrument silhouettes.
- [ ] 3.2 Drive motion from the chart timeline: beat bob, solo accents, Star Power state; respect reduced-flashing preference.
- [ ] 3.3 Add the Settings toggle and empty-state prompts (song dialog, Controllers).
- [ ] 3.4 Ensure sprite failure or absence leaves gameplay, scoring, pause and base stage untouched.

## 4. Verification
- [ ] 4.1 Unit-test framing math, filter determinism and detection-to-framing mapping.
- [ ] 4.2 Extend the Electron smoke with a fake media stream: capture → sprite on stage; denied-permission and delete paths.
- [ ] 4.3 Verify packaged build offline first-run (manual framing path only).
- [ ] 4.4 Record evidence in handoff; physical webcam and frame-rate check on the target hardware before any release claim.
