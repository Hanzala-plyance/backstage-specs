# Foundation integration handoff

Agent: Codex. Implementation: `Hanzala-plyance/backstage`, branch `develop`.
Planning: `Hanzala-plyance/backstage-specs`, branch `meta`.

## Implemented

- Backstage Unity project, public names and five branded assets; original asset
  GUIDs, engine namespaces, notices and core dependency identity preserved.
- Pinned YARG.Core 3beb94e526558134145bcd3e409428f759001a40.
- Add New Song search/queue staff entry and validated atomic, immutable publication
  into ~/Music/Backstage/Songs (BACKSTAGE_SONGS_DIR override).
- Game scans shared library on Scan Songs; completed installs show status/retry.
- macOS Backstage controller target supports native/MIDI routing and rejects
  Clone Hero-specific Xbox Riffmaster injection. No new Backstage bridge claimed.
- Setup/launchers, governance links, branch promotion gates and blocked acceptance report.

## Checks actually run

- Python 3.11: 47 converter/library tests passed, including real chart generation,
  readable audio/MIDI validation, partial-copy failure, retry, path rejection,
  queue concurrency and restart receipt behavior. Test library isolated in /tmp.
- Node: 11 controller/transport/session tests passed.
- Release policy: four rejection/acceptance contract tests passed.
- macOS: Swift typecheck, controller app native build, local code-sign verification,
  and app --self-test passed. Self-test uses fake devices/apps in a temporary root.
- Chrome headless: Add New Song page, library API path, search tabs and queue
  rendered without JavaScript errors. This did not download external songs.
- All locale JSON parsed; all five replacement assets retain original GUIDs.
- Specs: npm ci and npm run check passed (strict active/accepted/archived specs,
  instruction drift check, five synchronization safety tests).

## Remaining blockers and next action

Unity 6000.3.5f2 is not installed here. Build/visual/gameplay acceptance has not run.
No physical guitar or MIDI controller was exercised. Do not promote this game to
stage/main, mark it stable, or archive this feature until those checks pass.
New notice text uses English fallback pending translation review. Existing engine
identifiers and third-party attribution intentionally retain upstream names.

Next: install the pinned Unity editor, restore its packages, build Backstage.app,
then import and play a converted song and verify actual controller inputs. Record
artifact/checksum, exact tested commit, logs, clean-install/recovery results and
reviewer in the meta release report and code release/acceptance.json. Follow
feature → develop → stage → main; do not skip required checks.
