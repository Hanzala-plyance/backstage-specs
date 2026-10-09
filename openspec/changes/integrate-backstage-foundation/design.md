# Design

Code: Hanzala-plyance/backstage, develop, bootstrapped from starter 31ec865.
Specs: Hanzala-plyance/backstage-specs, meta. The game moves from YARG-master to
Backstage while preserving Unity metadata and internal namespaces.

The converter validates a completed export and copies it into a staging directory
outside the Songs scan root, then atomically renames a complete immutable snapshot
into the shared library. Job-specific install receipts make retries idempotent.
Default root is ~/Music/Backstage/Songs; BACKSTAGE_SONGS_DIR overrides it.
The game always includes that root during a full scan. Staff open Add New Song
from the music-library menu or the root Add New Song folder and scan after install.

MacRiff gets a Backstage native target and finds Backstage.app. Existing native/MIDI
routes are preserved. Clone Hero's private bridge adapter remains blocked for
Backstage until actual device/game integration exists and is validated.

Release policy lives on meta and root README on every branch. CI tests Python
library publication, converter regressions, Node controller rules, and branding
contracts. Stage/main promotion checks enforce branch ancestry and complete release
evidence. Actual Unity and hardware checks are not inferred from source tests.
