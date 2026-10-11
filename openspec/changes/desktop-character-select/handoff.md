# desktop-character-select handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/character-select from develop `8eca10b`.

## Implemented
- `core/namepad.ts` + tests; `NamePad.tsx`; Avatars rewritten as a tile grid with
  per-player tokens/name entry/camera overlay and cards; App routes joined
  players' presses on the Avatars page; PlayerBar rows Name/Guitar/Color/Kit;
  portraits render each player's guitar and finish; old Avatars UI and
  StagePreview removed.

## Evidence
Feature `7bd89f5` (tested commit), ASAR
`595d9f975cda8e80986dac90fb3e520489d4f3de8828e203b108dc0202127a31`. 75 desktop
unit, source/packaged smoke (mouse P1 + pad P2 picking at once, keypad "B" by
multi-tap, camera tile for P2, pop-up guitar), test:dev, converter, controller,
promotion pass.

## Follow-ups (user requests)
- Brawl-style keypad (letter groups, 123, ←, wide OK). Every page fits the
  window; smoke asserts no page overflow. 13 new avatars (8 slim long-haired,
  3 rockers, demon and psychedelic tributes; original paint, not trademarked
  makeup), brows/ears/nose/neck/belt/jackets, two-row grid, labelled card gear.
  Tested commit `c187ee7`, ASAR
  `5f982d7cb4df809704a48380e9494538fb01afdf9ae181a206ec68b3c9fd7c60`; 75 unit,
  source/packaged smoke, test:dev pass.

## Next
User reviews PR; merge.
