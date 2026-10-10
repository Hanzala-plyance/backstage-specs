# Design
Implementation: backstage, feature/web-desktop-foundation from develop d0596607.
Planning: backstage-specs/meta. Electron provides a sandboxed Chromium renderer,
a narrow preload bridge and validated main-process IPC. React owns application UI;
Three.js renders only during gameplay. Audio time drives judgment and note position.
No renderer Node access, arbitrary shell execution, remote executable content or
unrestricted filesystem IPC. Assets are bundled and loaded through a local protocol.

The main process indexes the shared Songs root and decodes supported notes.mid into
seconds using its tempo map. Asset access is restricted to discovered songs. Local
play does not require Python. The existing converter starts lazily for online
search/queue and uses writable per-user output/cache paths. Python/FFmpeg remain
optional preparation dependencies, not bundled speech models in the desktop app.

Input adapters normalize keyboard, browser Gamepad and MIDI into game actions.
Mappings persist by device identity and allow button or signed axis bindings. Devices
not exposed by Chromium remain explicitly unsupported; native bridging is future work.

Tests cover MIDI timing, judgment boundaries, pause/resume, held input/reconnect,
path validation and service request restrictions; Electron smoke exercises a packaged
UI and actual practice audio. Record physical input and latency checks as unverified.
Build size is measured rather than described as faster or smaller without evidence.

## Five-fret guitar and stage revision
The user selected complete five-fret guitar mechanics first and confirmed that
Star Power doubles the score multiplier, not song speed. Reference the pinned
YARG.Core engine and MIDI loader for scoring, anchoring, HOPO/tap, sustain,
phrase and solo behavior. Keep the deterministic engine independent of rendering.
Use circular, raised gems, visible note-type markings, an orange fifth lane,
metal highway rails and a charcoal/amber rock-stage interface. Do not claim full
YARG parity until advanced lane/BRE and hardware acceptance are verified.
