# Design

The specs repository's meta branch becomes canonical and the default branch.
Preserve main as prior history with a pointer to meta. Install generated governance
in the implementation branches and maintain a universal root README. Product code
flows feature -> develop -> stage -> main; only the initial documentation/policy
bootstrap can create stage/main without a game release.

GitHub PR protection and a required checks job enforce the path. Stage requires a
successful Unity build report; main also requires actual song playback, controllers,
clean install, recovery, reviewer, and rollback. A tested commit must be an ancestor
of the candidate with no executable/assets changes since testing. Reports live on
meta and release/acceptance.json starts blocked. Unsupported hardware is documented,
not fabricated. Source-policy tests exercise rejection paths.
