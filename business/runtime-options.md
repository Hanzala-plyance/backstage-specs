# Browser runtime evaluation

Status: **historical evaluation, superseded by authorized implementation**. The
user first requested evaluation only, then explicitly authorized the desktop web
switch. See `business/decisions.md` and `openspec/changes/web-desktop-foundation/`.
The comparisons below remain rationale; they are not performance measurements.

## Recommendation

If a clean Chromium application becomes the chosen direction, build a browser-native
client with a narrow custom rhythm-game core, Three.js for the note highway/3D,
and Web Audio for playback timing. Keep song preparation and the shared filesystem
library in the existing local service. Use Gamepad/Web MIDI where devices work;
retain a small local device helper where actual hardware requires it.

Start with an installed Chrome/Chromium app or kiosk window on the venue computer.
Electron is an alternative when a self-contained desktop package and managed
runtime version justify bundling Chromium and Node. Neither packaging choice
proves lower CPU, memory, latency, or power consumption than the native game.

## Options

| Option | Fit | Migration and risk |
| --- | --- | --- |
| Browser-native TypeScript + Three.js + Web Audio | Recommended candidate for a focused rhythm game and shared kiosk/staff UI | Three.js is a renderer, not a complete game engine. Scoring, chart semantics, calibration, input mapping and recovery need implementation and verification. |
| Godot web export | Reasonable when a full scene editor and general-purpose engine are valuable | Unity scenes/code do not transfer directly. Current Godot 4 documentation says C# projects cannot export to web; web audio has platform-specific limitations. |
| Unity web export | Worth assessing if maximizing current code reuse dominates | Keeps Unity and requires auditing/replacing native dependencies. Does not satisfy the goal of removing the Unity toolchain. |
| Electron wrapping the existing game | Desktop packaging only | Electron does not convert a Unity executable into a browser game or remove its engine workload. |

These are engineering judgments from the repository and platform documentation,
not measured performance rankings.

## What the existing code tells us

- `Backstage/Assets/Script/Audio/Bass/` uses native BASS audio integration.
- `Backstage/Assets/Script/Input/` and the package manifest depend on Unity Input
  System, PlasticBand/Hidrogen and MIDI integration.
- Unity scenes, serialized references, shaders, rendering and game UI need a port
  or replacement for a browser-native client.
- The converter, shared song library contract, source charts/audio, specifications
  and most venue product logic can be reused independently of the renderer.
- The existing MacRiff Xbox Riffmaster bridge targets Clone Hero. Browser APIs
  being present does not establish that this controller works in Chromium.

## Proposed architecture if selected

Chromium displays the customer/game UI. A local service owns the approved Songs
library and exposes bounded song/chart/audio endpoints. Conversion runs separately
from the game loop. A device helper, if needed, exposes scoped local controller
input with explicit device assignment, timestamps and disconnect state. Privileged
staff actions stay outside the customer flow. Essential local play must survive
loss of internet access.

Chart timing and hit judgment follow the audio clock, with measured display/input
calibration. Rendering must not determine song position. Browser output latency,
permission prompts, focus loss, audio suspension and device reconnect are explicit
acceptance cases. No network audio streaming is required for local songs.

## Evidence collected

A headless Chrome 154 capability check on this Mac against localhost confirmed
secure context, WebGL2, WebGPU, Web Audio, AudioWorklet, Gamepad, Web MIDI, WebHID
and service-worker APIs are exposed. No device permission was requested, and no
physical controller or audible latency was tested. Headless API presence is not
performance or venue readiness evidence.

The Unity candidate has passing automated converter/controller/source-policy
checks but no Unity build or measured gameplay baseline here. Therefore a claim
that a browser version is faster or lighter would currently be unsupported.

## Decision gate before migration

If later authorized, build one playable browser slice using a real converted song,
a five-lane highway, scoring, keyboard and actual target guitar input. Compare it
against a working native build on the same venue machine, display and wired audio:

- Cold launch-to-play time and complete process-tree memory, including browser,
  converter and device helper; measure both idle and active conversion.
- Frame-time distribution and dropped frames at the intended resolution/player count.
- Measured audio/input/display latency, jitter and calibration stability.
- Full-song timing drift, chart accuracy and supported song formats.
- Guitar controls and MIDI drums; disconnect/reconnect, browser restart, offline
  play and permission recovery.

Choose target budgets with the venue hardware before collecting results. Preserve
the current implementation until the replacement meets explicit acceptance. Any
future change to Unity-specific promotion gates requires a reviewed OpenSpec delta
and replacement browser build/game/hardware evidence, not removal of the gates.

## Primary references

- [Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html): WebGL2 rendering.
- [Web Audio specification](https://www.w3.org/TR/webaudio/): audio context timing and latency contracts.
- [Chrome WebHID](https://developer.chrome.com/docs/capabilities/hid): device-specific access and permission flow.
- [Godot web export](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html): C# and audio limitations.
- [Unity web technical limitations](https://docs.unity3d.com/6000.3/Documentation/Manual/webgl-technical-overview.html): browser platform differences.
- [Electron introduction](https://www.electronjs.org/docs/latest/): Chromium and Node desktop packaging.
