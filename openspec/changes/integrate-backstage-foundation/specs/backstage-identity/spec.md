## Purpose
Present the fork as Backstage while keeping engine compatibility and attribution.

## ADDED Requirements

### Requirement: Public Backstage identity
The game's product name, app identity, public logo assets, and product-facing
copy SHALL identify Backstage while preserving upstream credits, licenses,
internal namespaces, and serialized asset identifiers.

#### Scenario: The branded game is built
- **WHEN** a user launches the built game
- **THEN** its public identity is Backstage and original attribution remains available

### Requirement: Staff song preparation entry
The repo SHALL provide an Add New Song folder/launcher and the game library menu
SHALL offer a staff entry to the local preparation service.

#### Scenario: Staff add a song
- **WHEN** the local preparation service is running and staff choose Add New Song
- **THEN** they can search or upload, queue conversion, observe installation state, and refresh the game library
