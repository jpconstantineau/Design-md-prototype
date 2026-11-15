# WCAG 2.2 A and AA

Use for accessibility planning, implementation checks, and conformance questions. POUR organizes the checks below: **Perceivable, Operable, Understandable, Robust**.

## Scope and evidence

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the normative source; the current W3C Recommendation is dated **12 December 2024**. An AA claim requires all applicable A and AA success criteria across full pages and complete processes, plus the other [conformance requirements](https://www.w3.org/WAI/WCAG22/Understanding/conformance). Sources checked 2026-11-15.

[ISO/IEC 40500:2025](https://www.iso.org/standard/91029.html) adopts the October 2023 WCAG 2.2 text, as [W3C explains](https://www.w3.org/WAI/standards-guidelines/wcag/#iso). The pending ISO revision is not a published replacement. Record the dated text used rather than assuming the ISO adoption and updated W3C text are identical.

The checks here emphasize application risks, not a complete audit. Build the full applicable criterion inventory from the normative source or [W3C quick reference](https://www.w3.org/WAI/WCAG22/quickref/). A scan, screenshot, token linter, or component library cannot establish conformance alone.

Treat WCAG 2.2 AA as the project accessibility target, not automatic ACA, AODA, ADA, or EAA compliance. Verify the applicable jurisdiction, entity, content, legal instrument, edition, and exceptions separately. [W3C's policy directory](https://www.w3.org/WAI/policies/) is a starting point, not legal advice.

## Perceivable

Make information available in usable forms, including when a user cannot see a particular image, color, layout, or video.

- **Text contrast (1.4.3):** test actual pairs, including opacity and overlays, at 4.5:1 for normal text and 3:1 for qualifying large text (18pt/24 CSS px regular or 14pt/about 18.67 CSS px bold). Preserve incidental, inactive, and logotype exceptions. Never round a failure upward. [Text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- **Non-text contrast (1.4.11):** meaningful control/state cues and graphic information need 3:1 against adjacent colors where applicable. Not every decorative border or hover/default pair needs that ratio; inactive, unmodified user-agent, and essential-graphic exceptions matter. [Non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
- **Alternatives (1.1.1) and color (1.4.1):** give informative images an equivalent-purpose alternative and controls a meaningful name; hide purely decorative images from assistive technology. Charts need usable information, not only a generic image label. Combine color with other meaningful cues. [Non-text content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html), [use of color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).
- **Media (1.2):** prerecorded audio-only needs an equivalent alternative; prerecorded video-only needs an equivalent alternative or audio. Provide captions for prerecorded synchronized audio (subject to the media-alternative exception) and live synchronized audio at AA. Prerecorded synchronized video needs audio description at AA when important visuals are not already described by its soundtrack; a transcript alone does not replace that requirement. Check the relevant [audio/video-only](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html), [prerecorded captions](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html), [live captions](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html), and [audio description](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html) criteria.
- **Resize and reflow (1.4.4, 1.4.10):** resize text to 200% without loss. Test reflow at 320 CSS px width for vertically scrolling content, or 256 CSS px height for horizontally scrolling content. A 1280px viewport at 400% zoom can test the width case. Necessary two-dimensional content has an exception; it does not exempt the whole dashboard or normal prose in table cells. Reflow need not mean one identical column layout. [Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
- **Spacing (1.4.12):** tolerate user overrides of line height 1.5, paragraph spacing 2, letter spacing 0.12, and word spacing 0.16 times font size without loss, where the criterion applies. These are test settings, not mandatory authored defaults. [Text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).

**Example/check:** inspect a failure chart with color removed, its accessible equivalent, zoom, and spacing overrides. Verify users can still identify the affected object, magnitude, and required action. Record actual contrast measurements and exceptions.

## Operable

Keep the workflow usable with appropriate keyboard and pointer interaction, without trapping users or hiding their place.

- **Keyboard and orientation (2.1.1, 2.1.2, 2.4.1, 2.4.3, 2.4.6):** complete the task, menus, dialogs, and recovery using appropriate keyboard patterns. Use logical focus order, bypass repeated blocks, and meaningful headings. Composite widgets may use arrow keys rather than making every child a Tab stop. [Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), [no keyboard trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html), [focus order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html).
- **Focus (2.4.7, 2.4.11):** keyboard focus must be visible; author-created content must not entirely obscure the focused component at AA. Fully unobscured focus (2.4.12) and numeric focus-area/state-contrast rules (2.4.13) are AAA, though useful stronger local goals. [Visible focus](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [AA obscuring rule](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), [AAA focus appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html).
- **Targets (2.5.8 AA):** provide at least 24 by 24 CSS px or satisfy a specified spacing, equivalent-control, inline, user-agent, or essential exception. The spacing test uses 24px-diameter circles centered on undersized targets, not a blanket 24px gap. A 44 by 44 target is AAA 2.5.5 or a local comfort goal. [Minimum target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- **Dragging (2.5.7 AA):** provide a single-pointer non-drag alternative unless essential or an unmodified user-agent control. Keyboard support alone is insufficient; the alternative need not take exactly one click. [Dragging movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html).
- **Transient content:** evaluate hover/focus disclosures (1.4.13), time limits (2.2.1), moving/updating content (2.2.2), and flashes (2.3.1) when present. Apply their conditions and exceptions rather than banning all animation. [Hover/focus content](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html), [pause/stop/hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

**Example/check:** complete a permission change, open and close its explanation, reorder an item without dragging, and recover from an error. Test sticky headers, banners, and dialogs for focus visibility and correct return focus.

## Understandable

Use predictable behavior and explanations that help people complete and recover from the task.

- **Navigation and help (3.2.1-3.2.4, 3.2.6):** preserve predictable context changes, consistent navigation order, and component identification. Repeated help mechanisms covered by 3.2.6 must keep their relative order across the page set; it does not require help everywhere or identical pixel positions. [Consistent navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html), [consistent help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html).
- **Forms (3.3.1-3.3.4, 2.5.3):** provide labels/instructions, identify automatically detected errors in text, and suggest known safe corrections. Use persistent visible labels as the project pattern rather than placeholder-only instructions. Accessible names must include visible labels where applicable; extra error-prevention rules apply to the operations covered by 3.3.4. [Labels/instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html), [error identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html), [error suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html), [label in name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).
- **Repeated input (3.3.7 A):** repopulate or make previously supplied information selectable within the same process, except when essential, required for security, or no longer valid. [Redundant entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html).
- **Authentication (3.3.8 AA):** support an alternative to cognitive tests or assistance, such as password managers and paste. Evaluate the criterion's object-recognition and user-provided-content exceptions; it is not a blanket password or CAPTCHA ban. [Accessible authentication](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html).

**Example/check:** enter invalid data, correct it, and continue without retyping valid information. Test login with a password manager and paste, and verify error messages explain the issue without exposing private data.

## Robust

Expose structure and state so browsers and assistive technologies can interpret the interface.

- **Semantics (1.3.1, 4.1.2):** prefer native elements with meaningful headings, landmarks, controls, names, roles, values, and states. Use ARIA for genuine gaps and implement the corresponding behavior and keyboard handling; attributes alone do not create an accessible widget. [Name/role/value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html), [ARIA guidance](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).
- **Status (4.1.3):** expose qualifying status messages through appropriate roles/properties without moving focus. Choose announcement urgency for the task; not every DOM update needs a live announcement. [Status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).
- **Version discipline:** 4.1.1 Parsing was removed from WCAG 2.2. Code validation can still find defects, but it is not that removed success criterion. See [W3C's version overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

**Example/check:** inspect the accessibility tree and use a screen reader through a changed permission, open dialog, and result message. Verify accurate names/state, usable focus behavior, and announcements that neither omit important feedback nor drown it in routine updates.

## Completion

For each scoped criterion, record **pass**, **fail**, **not tested**, or **not applicable with a reason**, with page/state, task, browser, assistive technology, evidence, and unresolved issues. Combine automated checks with representative keyboard and screen-reader journeys, including blocked/error/recovery paths. Untested criteria remain unknown. Use the [review record](review-checklist.md) and keep recommendations separate from evidence of conformance.
