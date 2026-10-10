# Why
The user wants a major Avatars section: each player picks a 2D avatar that plays
their instrument in rhythm with what they actually hit, reacting to hits, misses,
streaks and Star Power, plus a short player name instead of P1/P2/P3.

# What Changes
- Main menu and sidebar entry "Avatars" with four player slots.
- Each slot has a name (up to 8 letters/digits, shown instead of P1–P4) and an
  avatar: one of 10 premade themed avatars, or a camera avatar.
- Camera avatar: device camera (if any); the player raises a hand (motion in the
  upper corners starts a 3-2-1 countdown) or presses Take photo; the photo is
  restyled to the game's neon theme. Camera avatars have no customization; photos
  stay on this computer.
- In game, each player's avatar plays their part (guitar, bass, drums): a strum or
  stick hit for each note the player hits, a groove to the tempo, expressions for
  misses, streaks and Star Power.

# Capabilities
## Modified Capabilities
- `desktop-runtime`: player names and avatars, camera capture, in-game avatar.

# Impact
backstage desktop: electron band store + camera permission (video only, macOS
camera usage description), core/avatars.ts, Avatars page, Avatar renderer, Game
and lobby labels, smoke with Chromium's fake camera. Branch feature/player-avatars
from develop `e0ddaef`. Hand detection is a motion heuristic, not pose tracking.
