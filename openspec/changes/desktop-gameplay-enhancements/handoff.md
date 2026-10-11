# desktop-gameplay-enhancements handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/gameplay-enhancements stacked on feature/controller-stability.

## Decisions
- User chose "hold the strum bar" for sustains (over charter changes). The
  auto-charter writes few sustains, so the rule affects few notes until the
  charter is improved (separate change).

## Done
- ee5715f: strum-held sustains (Judgment holdStrum, strumHeld input from
  pads/keyboard/demos), celebration counters, core/feedback.ts (missed-riff,
  sustain pluck, SongGain 0.82-1.05), bottom HUD, performer slots, chord and
  sustain bursts, star rain, larger type, muted/unfocused smoke.
- 4abd267: evidence; app.asar SHA-256
  fd0403c8c0365029d0640e47dd6884811c15e377dfef833e267f53f854f3f82e.
- Checks: npm test 90 pass; packaged and dev smoke pass; converter,
  promotion and mac-riff suites pass. One earlier local smoke failed on the
  existing Star Power timing step at load average ~20; rerun passed.
- PR: https://github.com/Hanzala-plyance/backstage/pull/12 (stacked on #11).

## Revisions after playtest (user, 2026-10-11)
- Star Power meter moved into the highway (strip under the frets); numbers
  beside the highway, away from the performer; no bar under the highway.
- Performers raised when two or more play.
- Bigger scores; comic pop-ups enlarged to halftone starburst panels that
  grow toward the screen centre.
- Miss clunk and sustain pluck removed (user found them bad); a Star Power
  power-up sound added for evaluation. Song volume dip/rise kept.

## Blockers
- Playtest on real guitars: strum-hold feel, effect and volume levels.

## Next
CI on PR #12; user merges #11 then #12; playtest (task 3.2). Possible follow-up:
auto-charter writes more sustains.
