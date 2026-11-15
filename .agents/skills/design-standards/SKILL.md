---
name: design-standards
description: Design or review application interfaces using task, state, accessibility, and design-system guidance; author or validate DESIGN.md design contracts. Use for dashboard guidelines, interaction reviews, or DESIGN.md work.
---

# Design standards

## Workflow

1. **Scope:** identify the user's task, selected object, current/effective state, intended change, and existing design system. Separate requested work from illustrative examples.
2. **Route:** load the references below whose conditions match. Keep the product's existing brand and stack unless a change is requested.
3. **Apply:** turn the relevant guidance into concrete layout, behavior, tokens, or review findings. Keep source-derived requirements distinct from local design choices.
4. **Verify:** use the [review checklist](references/review-checklist.md) for interface work, or the validation procedure in the [DESIGN.md guide](references/design-md.md) for document work. Report evidence, unresolved findings, and checks not performed.

## Reference routing

| When working on... | Read... |
| --- | --- |
| Task flow, controls, Save/immediate effects, errors, or recovery | [ISO 9241-110: seven interaction principles](references/iso-9241-110.md#the-seven-interaction-principles) |
| Information hierarchy, selected scope, state meaning, labels, or grouping | [ISO 9241-112: six presentation principles](references/iso-9241-112.md#the-six-presentation-principles) |
| Accessibility planning, implementation, or a conformance question | [WCAG 2.2 A and AA](references/wcag-22.md) |
| Operational dashboards, normal/exception emphasis, or industrial HMI context | [ISA-101: HMI scope](references/isa-101.md) |
| Material 3 components/tokens, or the GoDav design system | [Material 3](references/material-3.md) |
| Charts, quantitative dashboards, or comparison tables used to draw conclusions | [Tufte-inspired presenting evidence](references/edward-tufte-evidence.md) |
| Creating, updating, or validating a DESIGN.md file | [DESIGN.md authoring](references/design-md.md), then the relevant sections of the [pinned upstream spec](references/upstream/design-md-spec.md); adapt the [worked example](assets/DESIGN.md) |

For a full dashboard review, load both ISO references, WCAG, and the review checklist; add the HMI, Material, or evidence references when their conditions apply. A narrow token-file edit does not require loading every standards reference.

## Evidence boundary

Use **pass**, **fail**, **not tested**, or **not applicable with a reason** for each scoped check. This playbook summarizes public guidance in original words; it is not the licensed ISO/ISA text or a certification method. Establish a formal conformance claim only through the applicable full evaluation, not a prototype, token file, or automated scan.
