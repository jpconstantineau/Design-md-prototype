# Practical web design baseline

Use when the project needs starting choices for typography, layout, disclosure, and feedback. These are adjustable project defaults, **not WCAG or ISO requirements**. Preserve an established design system unless a change is requested.

## Readable hierarchy and typography

- **Apply:** if no prose scale exists, start body text at 1rem (often 16 CSS px with the browser's default root size), line height around 1.4-1.6, and a prose measure around 60-80 characters. Tune for the typeface, language, task, and user settings; tables, labels, code, and CJK text need their own evaluation. Use heading levels, alignment, and spacing to express structure rather than adding visual decoration.
- **Example:** a long explanation has a comfortable reading measure while a comparison table uses available width; neither forces all content into the same column size.
- **Check:** test realistic long text, localization, zoom, and spacing overrides without clipping or losing controls. A 16px declaration is not a pass for [WCAG text and reflow checks](wcag-22.md#perceivable).

## Progressive disclosure with retained context

- **Apply:** show the information and controls needed for the current task first; reveal advanced options when useful. Keep critical state, consequences, and recovery discoverable. Choose tabs, accordions, or detail views based on the information relationship, not a preference for fewer visible controls.
- **Example:** an advanced indexing schedule is expandable, but the currently effective schedule and blocked-run reason remain visible.
- **Check:** complete ordinary and advanced tasks with keyboard and assistive technology. Confirm that hiding options has not hidden the reason an action is unavailable.

## Non-disruptive, resilient feedback

- **Apply:** provide meaningful loading, empty, error, success, and stale-data states as applicable. Preserve valid input and offer a useful recovery action. Use non-blocking status for routine feedback and a modal only when the task needs a focused decision, with proper focus behavior. Choose feedback timing for the task; no universal millisecond threshold follows from these standards.
- **Example:** an empty result distinguishes no matches from a failed request, retains the query, and offers clear filters or retry. An immediately applied change confirms the actual result rather than displaying an unrelated Save control.
- **Check:** test slow, empty, failed, cancelled, successful, and stale paths. Ensure routine updates do not steal focus and important feedback remains available long enough to use. Apply the [WCAG robust-status checks](wcag-22.md#robust) and the [interaction principles](iso-9241-110.md#the-seven-interaction-principles).

Record chosen typography, layout, and component states in [DESIGN.md](design-md.md). Measure whether they improve the task using [ISO 9241-11](iso-9241-11.md); visual consistency alone does not establish usability or accessibility.
