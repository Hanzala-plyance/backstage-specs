# Handoff: desktop-camera-rocker

- Status: proposal drafted, not implemented. Change ID: `desktop-camera-rocker`.
- Agent/tool: GitHub Copilot (Kimi K3), proposal authored 2026-10-10.
- Repositories: planning in backstage-specs/meta; implementation will be
  backstage/desktop (renderer capture UI + stage sprite, electron permission and
  IPC) on a feature branch from develop.
- Decisions: consent-first capture with immediate camera release; manual framing
  as the guaranteed offline path; optional checksum-pinned on-demand detection
  model (no bundled weights per desktop component rule); stylized single-image
  performer with per-part instrument silhouettes; one rocker stored locally,
  deletable, never transmitted.
- Evidence: none yet — no implementation or tests exist.
- Blockers/notes: none. Physical webcam and frame-rate verification on target
  hardware is required before any release claim (tasks 4.3–4.4).
- Next action: review proposal; on approval, implement tasks 1.1–2.2 first
  (permission gate, IPC, capture with manual framing) as the minimal shippable
  slice.
