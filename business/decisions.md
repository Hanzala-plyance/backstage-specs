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
