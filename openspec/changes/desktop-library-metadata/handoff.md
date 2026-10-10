# desktop-library-metadata handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/library-metadata on feature/desktop-library-preview (PR #3).
PR: https://github.com/Hanzala-plyance/backstage/pull/4 (merge #3 first).

## Implemented
- Naming rules shared by `desktop/electron/names.cjs` and
  `song-converter/songmaker/names.py`, tested against one fixture of real
  YouTube metadata (`desktop/tests/fixtures/song-names.json`).
- Converter: readable install folders, numbered clashes, job-ID lookup for
  renamed/legacy folders in publish() and install_status().
- Desktop: cleaned display names; converter songs use their job ID as song ID;
  `renameFolders()` renames only 32-hex folders; `tidyLibrary` IPC runs after the
  first scan and after installs; play waits for it.
- Covers: `covers.cjs` (pickCover, mzstatic-only download, < 3 MB images);
  placeholder detection (768 px, generator background); per-song attempt log in
  userData `covers.json`; `backstage://app/art/<id>`; Find cover online.

## Evidence
Feature `a466cde` (tested commit). ASAR `6ffc54f338cfdf598f472e656beccb53c4666843ed658261a05cd9f9c2207058`.
Desktop 42 tests, converter 50, controller 11, promotion tests; source and packaged
smoke pass. Dry run on a copy of the user's library: 8 folders renamed, covers
for One More Time, Janice STFU and I Wonder; Gunna (only censored/instrumental in
catalog) and Yung Pinch (not in catalog) correctly kept their art.

## Notes / next
Lookups send artist and title to Apple. Covers are copyrighted artwork: personal
use only; venue use stays behind catalog authorization. The user's real library is
renamed on their first launch of this build. Next: CI, then merge after PR #3.
