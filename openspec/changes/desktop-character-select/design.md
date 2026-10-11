# Design
- `core/namepad.ts` (pure, tested): keypad layout and `tapKey(name, key,
  last, now)` multi-tap within 1 s; letters cycle then the digit; max 8.
- `NamePad.tsx`: keypad UI with a cursor (strum ±1, yellow/blue ±3 rows,
  green press, red delete, Start/orange done) plus a text field for keyboards.
- `Avatars.tsx`: tile grid (10 presets + Camera), per-player cursor and name
  entry state, cards; `input(slot, button)` handler registered with App, which
  routes a joined player's controller presses there while the page is open
  (Start still opens their pop-up unless their name entry is open).
- PlayerBar pop-up rows: Name, Instrument, Difficulty, Strumming, Guitar,
  Color (non-drums) or Kit (drums), Leave, Done.
