# Why
The user wants avatar selection to work like Super Smash Bros.: every player
picks at the same time with their own controller on one screen, with player
cards along the bottom, and names entered with a guitar using a phone-keypad
(multi-tap) layout. The bottom player pop-up should change guitar style and
colour (and name) rather than the avatar.

# What Changes
- Avatars becomes a character-select screen: a grid of the 10 avatars and a
  Camera tile; each joined player has their own token, moved by their own
  controller (strum), and picks with green. Several players select at once.
- Player cards along the bottom show the chosen avatar, a name plate, guitar
  style, finish colour dots, drum kit and stage side. On the screen, yellow
  cycles colour, blue cycles guitar style, orange opens name entry.
- Name entry: a 3×4 phone keypad (2=ABC … 9=WXYZ, ⌫, OK) driven by the guitar
  with multi-tap; up to 8 letters/digits. Keyboard players can type directly.
- The bottom pop-up replaces Avatar with Name, Guitar and Color (Kit for drums).

# Capabilities
## Modified Capabilities
- `desktop-runtime`: character select, keypad name entry, pop-up gear.

# Impact
backstage desktop: Avatars.tsx rewrite (camera flow kept), NamePad, core
namepad helper, PlayerBar rows, App input routing per player on the Avatars
page, styles, smoke. Branch feature/character-select from develop `8eca10b`.
