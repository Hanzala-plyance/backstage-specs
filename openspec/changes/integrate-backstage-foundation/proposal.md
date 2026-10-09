# Proposal

## Why

The three reference projects need one Backstage identity and a reliable path from
song preparation to gameplay, with stable release promotion and shared business context.

## What Changes

- Establish specs meta and a develop -> stage -> main release policy.
- Preserve the product brief and define business logic, roadmap, and decision history.
- Rebrand the Unity game as Backstage, restore its pinned core dependency, and add
  the shared library and Add New Song entry.
- Publish validated converted songs to one shared folder and expose install/retry state.
- Add Backstage as a native MacRiff setup target while rejecting unsupported bridging.

## Capabilities

### New Capabilities

- `shared-song-library`: Reliable publication of converted songs to the game library.
- `backstage-identity`: Public game identity and staff song-preparation entry.
- `controller-game-target`: Backstage native controller setup integration.

### Modified Capabilities

None. Branch/governance changes are tracked separately in govern-backstage-releases.

## Impact

All three implementation components, root launchers/docs/CI, agent instructions,
and shared specs. Unity build and physical controller acceptance are explicit
release gates. Reservations, billing, kiosk authentication, and multi-venue services
are documented future work, not part of this increment.
