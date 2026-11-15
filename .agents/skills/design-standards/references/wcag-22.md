# WCAG 2.2 A and AA

Use for accessibility requirements, implementation checks, and conformance questions.

## Scope and evidence

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the normative source. An AA claim requires all applicable A and AA success criteria across full pages and complete processes, plus the other [conformance requirements](https://www.w3.org/WAI/WCAG22/Understanding/conformance). Sources verified 2026-11-15.

The checks below emphasize dashboard risks; they are not an exhaustive WCAG audit. Build the complete applicable criterion inventory from the normative source for a formal assessment. An automated scan, screenshot, token linter, or component-library choice cannot establish conformance alone.

For every scoped criterion, record pass, fail, not tested, or not applicable with a reason. Include page/state, task, browser, assistive technology, evidence, and unresolved issues. Untested criteria remain unknown.

## Operate and understand the workflow

- Use semantic controls and expose names, roles, values, relationships, and state (1.3.1, 4.1.2). Match visible labels and accessible names where applicable (2.5.3).
- Complete the task with keyboard alone, including menus, dialogs, error recovery, and closing transient UI (2.1.1, 2.1.2). Verify logical focus order (2.4.3) and meaningful navigation/headings (2.4.1, 2.4.6).
- Keep keyboard focus visible (2.4.7). At AA, author-created content must not entirely obscure the focused component (2.4.11). [Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html), including its area and state-contrast requirements, is AAA 2.4.13; adopt it as a stronger local rule only when labeled as such. See [AA focus visibility under overlays](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).
- Keep context changes predictable; show labels/instructions, identify errors in text, and suggest useful corrections when applicable (3.2.1, 3.2.2, 3.3.1-3.3.3). Apply additional error prevention where the operation falls under 3.3.4.
- Expose relevant [status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) through suitable roles/properties without forcing focus (4.1.3). Choose polite or assertive announcement based on urgency; avoid announcing every changing value.

## Perceive content and state

- Test actual foreground/background pairs, including opacity and state overlays. [Text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) is at least 4.5:1 for normal text and 3:1 for qualifying large text (18pt regular or 14pt bold), subject to the criterion's exceptions (1.4.3). Do not round a failing result up to a pass.
- Test meaningful control/state cues and graphics at 3:1 against adjacent colors where [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) applies (1.4.11). Decorative borders and every hover/default pair do not automatically require that ratio. Preserve the criterion's exceptions.
- Convey meaning without color alone (1.4.1). Check relevant non-text content alternatives (1.1.1); charts need usable equivalents for their information, not only a generic image label.
- Resize text to 200% without loss of content or functionality (1.4.4). Verify [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) at a 320 CSS px equivalent width, such as a 1280px viewport at 400% zoom (1.4.10). Apply necessary two-dimensional-layout exceptions only to the relevant content, not the whole dashboard.
- Test [text-spacing overrides](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html): line 1.5, paragraph 2, letter 0.12, and word 0.16 times font size, without loss (1.4.12). These are resilience-test values, not mandatory default typography tokens.
- Review hover/focus disclosures, timing, animation, flashes, and media criteria when present (including 1.4.13, 2.2.1, 2.2.2, 2.3.1 and applicable 1.2 criteria).

## Include WCAG 2.2 additions when relevant

- [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), 2.5.8 AA: at least 24 by 24 CSS px or a documented exception, including the specified spacing exception. A 44 by 44 target is the enhanced AAA criterion or a local comfort rule, not the AA minimum.
- [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html), 2.5.7 AA: provide a single-pointer alternative that does not require dragging when applicable. Keyboard support alone does not satisfy this criterion.
- [Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html), 3.3.7 A: reuse or make prior input selectable within the same process, subject to exceptions.
- [Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html), 3.3.8 AA: support an accessible method or assistance such as password-manager use and paste, and evaluate applicable exceptions. This is not a blanket ban on CAPTCHA.
- Check consistent help when repeated help mechanisms are present (3.2.6 A).

## Completion

Run automated checks and representative keyboard and screen-reader journeys, including the blocked/error/recovery paths. Report the tested scope and remaining unknowns separately from implementation recommendations. Use the [review record](review-checklist.md) to keep evidence attached to each result.
