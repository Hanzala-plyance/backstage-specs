# web-desktop-foundation handoff

Agent/tool: Codex, local macOS Apple Silicon, Node 22.22.0 and Python 3.11.
Code: Hanzala-plyance/backstage, feature/web-desktop-foundation → develop.
PR: https://github.com/Hanzala-plyance/backstage/pull/1
Planning: Hanzala-plyance/backstage-specs/meta.

## Implemented and tested

Runtime commit: `30fe970ad246f1f748947aed809b4cb9b3fccde4`.
Foundation `a91d697`, signed-bundle fix `047391a`, authored guitar thresholds `30fe970`.
Electron desktop with shared library, original offline Soundcheck, real streamed
MIDI/audio songs, search/conversion queue and device mapping. Three.js circular
metal-rimmed gems, HOPO/tap cap markings, orange fifth lane, charcoal/amber stage,
multiplier and Star Power display. Scoring: 50 per gem, 10/20/30 streak thresholds,
anchoring, HOPO/pull-offs/taps, open notes, strum grace, sustained/disjoint/extended
holds, solo bonuses and phrase/whammy Star Power. Star Power doubles score only.

Verification:
- 25 desktop unit/boundary tests pass, including frame-independent sustain/Star
  Power integration across tempo/meter changes, note/phrase MIDI and SysEx markers,
  authored thresholds, open notes, solo bonus, library confinement and queue recovery.
- 47 Python converter/library tests; 11 controller-routing tests; five promotion
  policy tests pass. OpenSpec strict validation and five instruction-sync tests pass.
- Packaged Electron smoke passes: sandbox isolation, actual WAV range streaming,
  original practice audio, keyboard hit, pause/audio freeze, two earned phrases,
  Star Power activation/2x scoring/playbackRate=1, mapped simulated pad/disconnect,
  live YouTube metadata search and post-search strict code-signature verification.
- Real generated eight-second recording passed converter upload → chart generation
  → atomic shared-library installation → desktop MIDI parse (16 expert chords).
  Live provider checks returned nine YouTube and ten Chorus results; no provider
  audio was downloaded in automated checks.

Artifact: `desktop/release/Backstage-darwin-arm64/Backstage.app`.
Approximately 291 MB total; app.asar approximately 2.2 MB plus converter source.
ASAR SHA-256: `4566ccfc0785bcc1f711e2d5b8653bd67fab75bac575b77a3f0c1a0e62d47dcc`.
Local ad-hoc signing, not notarized public distribution. Adapted module sources,
YARG LGPL and Moonscraper BSD attribution accompany the package. Development
caches, Unity assets, Python environments, model weights and user songs are excluded.
Service output/cache is writable user data; Python bytecode writing is disabled
so launching preparation cannot mutate or invalidate the signed bundle.

### Revision 5 — controller navigation, stage visuals, audio start (Claude Code, 2026-10-10)

- Audio: songs play through the media element directly; start no longer depends on
  AudioContext resume. Errors distinguish bad files from blocked audio and device
  failures (a file error is no longer overwritten). Original "Audio could not start"
  report was not reproducible in automation on the reporter's songs or build.
- Navigation: strum/green/red/yellow/Start across library, dialog, pages and the
  in-game menu, using each pad's saved mapping; held buttons are ignored when a
  screen or pad appears; navigation pauses while Controllers captures a binding.
  Hint bar shows fret gems, or keys after keyboard use. Enter starts/resumes.
- Library refreshes itself when a queued song installs.
- Visuals: neon stage palette; highway with scrolling board, beat/bar grid from tempo
  map, rails colored by multiplier tier, receptors, hit flames, sparks, wobbling held
  sustains, white Star Power phrase gems, cyan active Star Power, sweeping beams.
- Evidence: 30 desktop unit tests; source and packaged Electron smoke pass including
  pad navigation (with a remapped green). Commits on `feature/web-desktop-foundation`:
  `4134f62` (feature), cleanup commit `1535c53` (tested commit), evidence follow-up.
  `release/acceptance.json` names `1535c53` and ASAR `10d3ee85…`.
- Repository cleanup: removed Backstage/ Unity fork and YARG.Core submodule (tag
  `unity-reference` preserves them), commercial converter sample songs, stale
  imported dotfiles and Unity-only `scripts/launch.py`. Docs point at the tag.
- Not verified: physical guitar/gamepad navigation, drums Star Power (phrases are
  only parsed for guitar-family tracks), long-session rendering performance.

## Remaining work and limits

Required before stable main: physical guitar/gamepad/MIDI, audible calibration,
clean-machine install, recovery and long-session performance. Simulated input does
not certify any controller model. Xbox Riffmaster's existing Clone Hero injection
bridge does not target this Electron app.

Full YARG parity remains open: advanced trill/tremolo lane forgiveness, big rock
endings, engine presets/dynamic windows, exact sustain-burst rounding, mixed open
chords, .chart and split-stem support, six-fret, vocals and multiplayer. The user
prioritized five-fret guitar; other instruments remain later work. Tap assist and
basic MIDI drum input are retained, not represented as complete drum engines.

Next action: require passing PR checks before merging to develop; record merge
commit here. Keep stage/main unchanged pending their release gates. Complete
remaining physical acceptance before archiving this feature.
