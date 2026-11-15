# Design review checklist

Use after loading the references routed by SKILL.md. This record organizes evidence; the linked references own the rules.

## Define the review

Record the artifact/revision, audience, task, affected screens, current design system, and test environments. List the task's success, blocked, loading, empty, partial/stale, unsaved, saved, and error/recovery states that actually apply.

## Walk the task

| Review area | Evidence to capture | Rule source |
| --- | --- | --- |
| Purpose and action | User can locate the relevant object and action; irrelevant UI does not obscure the job. | [Interaction](iso-9241-110.md) |
| Scope and state | User explains what is selected, what applies now, what is pending, and why a restriction applies. | [Presentation](iso-9241-112.md) |
| Change and recovery | User predicts the result, distinguishes pending from confirmed success, and recovers from failure with valid input retained. | [Interaction](iso-9241-110.md) |
| Attention and alerts | Important exceptions remain noticeable and understandable without color alone. | [ISA-101 context](isa-101.md), [HSE application](hse-control-systems.md) |
| Consistency and navigation | Repeated behavior, regions, and tokens agree; navigation and object selection remain distinct at narrow width. | [Material 3 when selected](material-3.md), [Presentation](iso-9241-112.md) |
| Accessibility | Complete task works with keyboard and representative screen reader; applicable visual, input, error, and state criteria have evidence. | [WCAG 2.2](wcag-22.md) |
| Design contract | Tokens and prose agree and validation findings are reported. | [DESIGN.md](design-md.md) |

Use a real task rather than asking whether a screenshot "looks good." For an access-management product, an illustrative task is selecting an agent, granting Search Documents, explaining blocked Edit Document, predicting Save, and recovering from a failed save.

## Record findings

For each scoped check, capture:

- **Location:** page, object, and state.
- **Result:** pass, fail, not tested, or not applicable with a reason.
- **Evidence:** reproduction steps, observed behavior, and environment; attach screenshots or recordings when they clarify the issue.
- **Impact:** the task blocked or misunderstanding caused; prioritize by consequence and frequency.
- **Correction:** the smallest change that addresses the failure, linked to the relevant source or clearly labeled local rule.
- **Retest:** evidence of the corrected behavior, or an explicit pending check.

The review is complete when every scoped check has a result and evidence or a stated limitation. A complete record can still contain failures and unknowns; it is not a conformance certificate.
