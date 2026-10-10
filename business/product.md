# Backstage product and business rules

## Purpose and customers

Backstage turns rhythm gaming and karaoke into a bookable entertainment appliance
for groups of roughly 2–6 people at bars, beer gardens, and other venues. The
software is a core product: a customer experience, employee operations suite,
and central management platform. The current runtime direction is a Backstage desktop web application using Electron,
React/TypeScript, Three.js and Web Audio. The YARG fork remains reference; the
original brief's Clone Hero references describe the original intent.

## Components and responsibilities

| Component | Responsibility | Initial implementation scope |
| --- | --- | --- |
| Customer experience | Welcome, instruments, authorized library, gameplay, session timer, results/reset | Branded game and shared song library |
| Local bay agent | Device detection, input tests, game processes, health and recovery | MacRiff setup integration; unsupported routes stay disabled |
| Employee suite | Bay readiness, diagnostics, session controls, guided recovery, incidents | Local Add New Song preparation workflow and controller setup |
| Central backend | Reservations, venues, permissions, events, configuration | Planned |
| Management dashboard | Multi-venue health, operations, revenue/utilization | Planned |

## Reservations and sessions (planned contracts)

- A reservation belongs to one venue and bay, with party size, start time, duration,
  and booking status. Initial durations are 30, 60, or 90 minutes.
- Confirmed reservations must not overlap on a bay. Availability and extensions
  must be checked transactionally; an extension cannot consume another booking.
- Bay states are Available, Reserved, In Session, Cleaning, Maintenance, or Offline.
  Ending a session enters Cleaning; a verified reset returns the bay to Available.
  Maintenance/Offline bays cannot begin customer sessions.
- A session tracks actual start, elapsed active time, explicit pauses, extensions,
  and end reason. Pauses for technical trouble preserve remaining paid time.
  Persist state to recover from process restarts; do not trust browser timer state.
- Moving a reservation requires an available destination bay and a logged transfer.
  Refunds/credits need authorized payment integration and an auditable action.
- A customer cannot operate employee recovery or administrative controls.
  Employees are venue-scoped; management permissions span explicitly allowed venues.

## Music and gameplay

- Online discovery, conversion, catalog authorization, and gameplay availability
  are distinct states. Successful download/conversion is not commercial clearance.
- The venue library must contain commercially authorized tracks before customer use.
  Keep authorization provenance/territory/expiry in the future catalog contract.
- The current Add New Song workflow is local staff/development preparation:
  search or upload, queue, convert, validate chart/audio, atomically install, scan.
  Failed/incomplete conversions must not become playable library entries.
- All game and preparation components use one local Songs root. Configured paths
  override a documented default. Never require cloud access for local song input
  timing or installed-song playback.
- Native controllers and supported MIDI routes remain direct. An unsupported
  bridge is a visible limitation, not an invitation to inject another game's DLL.

## Diagnostics and recovery (phased)

- First prioritize real detection/input checks for frets, strum, whammy, d-pad,
  start/select, tilt when supported, drum pads/cymbals/pedal, and microphone levels.
- Report Connected, Input Detected, Mapping Error, Stuck Button, or Not Detected
  from actual evidence. A mock interface must be labeled as simulation.
- Recovery follows detect -> explain -> restore/reconnect -> retest. Failed retests
  recommend a spare or maintenance and record an incident with downtime.
- Recovery commands need employee authorization and a recorded result. Controller
  input remains local; cloud outages must not stop essential play or diagnostics.
- Health tracks process/device/audio/display status where supported; projector
  telemetry is conditional on hardware capability, never assumed.

## Roadmap and success measures

1. Local hardware readiness and employee diagnostics. Target a full equipment check
   in about 60 seconds; validate on physical hardware.
2. Customer kiosk, session timing, instrument readiness, and reliable game launch.
   Target starting play within about 90 seconds of arrival.
3. Two-bay employee operations: reservations, concurrency, alerts, recovery, resets.
4. Multi-venue configuration, monitoring, permissions, updates, and analytics.
5. Profiles, leaderboards, competitions, events, loyalty, and memberships after
   reliable core operation.

Track revenue per bay/location, available and booked bay-hours, utilization,
reservation length, party size, repeat visits, downtime, maintenance cost, and
revenue per installation. These are planned reporting definitions, not implemented
measurements. Feature acceptance must state numerator, denominator, time zone,
and reporting period before analytics are built.
