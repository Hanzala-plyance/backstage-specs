# desktop-controller-stability handoff

Agent/tool: Claude Code, macOS Apple Silicon.
Code: feature/controller-stability from develop (8d0dd64).

## Evidence before work (2026-10-11, read-only)
- MacRiff root readers 73100/73101 (session WmBC3h, usb:2:1.2) and
  79706/79707 (session 7qN7tc, phase stopped, 0 reports, usb:2:1.4) running.
- node-usb lists receivers as usb:0:1.1 and usb:0:1.2 (configuration 1).
- No reader was stopped and no receiver was opened by the agent.

## Decisions
- User chose a pull-out tools drawer (Settings) with staff diagnostics for
  privileged recovery.

## Next
Implement tasks 2.x.
