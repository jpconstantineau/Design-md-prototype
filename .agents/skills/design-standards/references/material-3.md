# Material Design 3

Use when the product uses Material 3 or when implementing GoDav's selected design system.

## Sources and scope

[Material 3 foundations](https://m3.material.io/foundations/) and [Google's Material 3 overview](https://developer.android.com/develop/ui/compose/designsystems/material3), verified 2026-11-15, describe a design system built around themes, semantic roles, typography, shapes, and components. The Android documentation explains the system; it does not require a web product to adopt Compose.

Preserve a different product's chosen system unless the user requests a change. Material 3 Expressive is an expansion, not an automatic migration requirement. Material components do not by themselves establish WCAG conformance.

## Apply consistently

- Map colors by role, including foreground/background pairs, instead of copying a sample palette as brand policy.
- Reuse type, spacing, shape, control variants, and state treatments across related screens. Document deliberate density differences.
- Separate destination navigation, object selection, and editing. Use left navigation for stable destinations or a useful master-detail list, not as decoration.
- Show the current destination or selection clearly. Keep relevant scope visible during navigation.
- Adapt navigation to narrow screens with a discoverable trigger, logical focus, and focus return when a temporary drawer closes.
- Specify enabled, hover, focus, pressed, selected, loading, error, and unavailable behavior where applicable. Check actual interactions rather than assuming the component library covers them.

## Deliverable

Record the product's selected component roles and tokens in [DESIGN.md](design-md.md), with the reason for any departure from the existing system. Use [WCAG](wcag-22.md) to test the rendered workflow. The bundled example's palette, radii, and sizes are illustrative local choices, not mandatory Material defaults.
