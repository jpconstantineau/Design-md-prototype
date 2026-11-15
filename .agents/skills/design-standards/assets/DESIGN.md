---
version: alpha
name: Task Dashboard Example
description: Illustrative task-focused settings interface, not a mandated brand theme.
---

# Task Dashboard

## Overview

This fictional settings dashboard helps a person select an object, understand its effective state, and save an intentional change. It demonstrates the DESIGN.md format and a restrained Material-style role vocabulary. Adapt its tokens to the actual product; these values are local example choices, not mandated Material defaults.

Editing is staged. Show unsaved changes next to the editor and apply them only on Save. A pending selection is not effective access. Explain blocked settings beside their controls. Confirm persistence before showing success; retain valid input after failure.

## Colors

Use `surface` and `on-surface` for routine content. Use `primary` with `on-primary` for the main action and a visible focus treatment. The secondary pair marks navigation selection. Error and warning pairs identify actionable exceptions and always accompany text explaining the state and next action.

```yaml
colors:
  primary: "#164E78"
  on-primary: "#FFFFFF"
  secondary: "#DCE6F1"
  on-secondary: "#102A43"
  surface: "#F8FAFC"
  on-surface: "#17202A"
  outline: "#5D6B78"
  error: "#A12020"
  on-error: "#FFFFFF"
  warning: "#795400"
  on-warning: "#FFFFFF"
```

## Typography

Use a system sans-serif stack, sentence-case labels, and stable text roles. `headline` identifies the current object, `body` explains state and consequences, and `label` names controls. Preserve content when users increase text size or override text spacing.

```yaml
typography:
  headline:
    fontFamily: system-ui, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
```

## Layout

Use a stable navigation area for destinations and a separate content area for object selection and editing. Keep selected scope above the editor and the Save action beside the changes it applies to. Label requested and effective state separately.

On narrow screens, collapse navigation behind a labeled trigger and keep the editor in one column. A temporary drawer returns focus to its trigger on close. Avoid horizontal page scrolling; retain necessary two-dimensional content in its own region when applicable.

```yaml
spacing:
  control-padding: 12px
  content-padding: 24px
  navigation-width: 240px
  control-height: 44px
```

## Elevation & Depth

Use grouping, spacing, and clear boundaries for ordinary content. Reserve overlays for focused transient work; keep focused elements visible above sticky content. Implement a visible 3px primary-color focus outline with separation from the control where it is clear against the actual adjacent surfaces. This is a local design choice that still needs rendered-state testing.

## Shapes

Use the small radius for controls and the medium radius for content containers. Keep shapes consistent by role.

```yaml
rounded:
  sm: 4px
  md: 8px
```

## Components

Use native semantic elements where available. Buttons, selection controls, fields, and dialogs need explicit accessible names and keyboard behavior. Define applicable enabled, hover, focus, pressed, selected, loading, error, and unavailable states in implementation; the token pairs below are not a complete interaction implementation.

```yaml
components:
  content:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    padding: "{spacing.content-padding}"
    rounded: "{rounded.md}"
  object-heading:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline}"
  navigation-selected:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label}"
    width: "{spacing.navigation-width}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.control-padding}"
    height: "{spacing.control-height}"
  alert-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.body}"
  alert-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-warning}"
    typography: "{typography.body}"
```

The 44px control height is a local comfort choice, not the WCAG AA target-size minimum. Preserve labels and explanations for unavailable controls. Announce relevant save results without unnecessary focus changes. If Save fails, show the cause and retry option while keeping the draft.

## Do's and Don'ts

- Show current scope and effective state before asking for a change.
- Keep status meaning in text; color and symbols reinforce it.
- Keep navigation selection distinct from an unsaved permission selection.
- Test a complete keyboard and screen-reader journey, including blocked access and failed-save recovery.
- Check actual contrast, target size, zoom/reflow, and state behavior after implementation. Token lint results alone do not establish WCAG conformance.
