# Product decision log

## 2026-10-09 — Backstage engine and initial increment

User direction supersedes the original brief's initial Clone Hero engine choice:
use the imported YARG project as a Backstage-branded game. Preserve upstream
licenses and engine identifiers while replacing public branding. First connect
song search/queuing/conversion to a shared game-readable Songs folder and expose
MacRiff controller setup for Backstage. The full reservation and venue platform
remains a phased roadmap.

## 2026-10-09 — Branch and planning policy

Specs `meta` is the canonical home for business logic, feature changes, deltas,
and release evidence. Product work travels develop -> stage -> main. Bootstrap
README/governance is permitted on all branches; runtime release promotion requires
verified builds and hardware/game acceptance. The first source integration remains
on develop until those gates are met.

## 2026-10-09 — Browser runtime evaluation, no migration decision

The user asked whether Chromium could provide a lighter, faster game, then chose
**evaluate the options only**. [The assessment](runtime-options.md) recommends a
browser-native Three.js/Web Audio candidate if migration is later selected.
Performance remains unmeasured; no engine replacement or prototype is authorized
by this evaluation. Preserve the current implementation and release gates.

## 2026-10-09 — Authorize web desktop implementation

The user supersedes evaluation-only scope and authorizes a lean desktop web app,
song search, and configurable gamepads. Implement Electron/React/TypeScript/Vite,
Three.js and Web Audio. Preserve Unity as reference while migrating incrementally.
Do not claim all controller models or full YARG parity. Track implementation and
release blockers in `web-desktop-foundation`.

## 2026-10-09 — Five-fret guitar stage and scoring

The user prioritizes complete five-fret guitar mechanics first and clarifies that
Star Power doubles the score multiplier, not playback speed. Use YARG's source
rules and genre UI conventions; use original Backstage circular 3D gems and a
rougher rock-stage appearance. Track implemented core mechanics separately from
advanced YARG parity and physical-controller acceptance.
