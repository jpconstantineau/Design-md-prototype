# EEMUA 201, third edition: control-room design guidance

Use for control-room human factors or an explicit web adaptation of operational overviews, display conventions, remote use, and role-aware interfaces.

## Source and scope

[EEMUA Publication 201, third edition](https://www.eemua.org/products/publications/digital/eemua-publication-201) covers the working environment, consoles, control-system graphics, and human factors. EEMUA describes it as guidance, **not a standard**. Its industrial scope is broader than a web interface.

The public [2019 contents, PDF page 3](https://www.eemua.org/getattachment/4c0caa84-0123-423f-b663-a680af961783/Contents-EEMUA-Publications-201-Edition3-July-2019.pdf#page=3) name these color and symbol topics:

- **4.4.1:** Use of Colour on HMI Graphics
- **4.4.2:** Choice of Background Colour
- **4.4.3:** Colour Scheme for Items on Graphics
- **4.4.4:** Use of Symbols

Contents headings establish topic coverage, not the recommendations within each section. Public material does not supply a complete normative palette. Hex values, light/dark pairings, and symbol treatments remain project decisions requiring rationale and testing. The full publication was not reviewed or bundled. Sources checked 2026-11-15.

## Five practical web principles

These are original cross-domain applications, not an EEMUA principle list or normative web requirements. Each coverage note identifies the relevant public contents; each Apply/Example/Check defines our proposed implementation.

### 1. Situational awareness and information density

**Coverage:** sections 4.2.2 and 4.5.1-4.5.9 cover tasks and display types. [Andy Brazier's 2019 IChemE paper, pages 2-3](https://www.icheme.org/media/19390/hazards-29-paper-10.pdf#page=2), explains overview displays as a way to understand present conditions and find developing problems.

- **Apply:** prioritize current state, critical anomalies, and the context needed to choose an action. Put secondary metrics in accessible detail views while retaining meaningful comparisons. Density should serve the task, not a fixed number of cards.
- **Example:** a hypothetical indexing overview shows current progress, the affected source, and a blocking failure; its detail view supplies individual file results.
- **Check:** ask a user to identify what needs attention, explain why, inspect the evidence, and return without losing the selected source or time range.

### 2. Consistent navigation, layout, and interactive feedback

**Coverage:** sections 4.3, 4.6, and 4.8 address design philosophy, navigation, and data entry ([contents, PDF pages 3-4](https://www.eemua.org/getattachment/4c0caa84-0123-423f-b663-a680af961783/Contents-EEMUA-Publications-201-Edition3-July-2019.pdf#page=4)).

- **Apply:** keep shared controls, labels, context, and navigation patterns consistent. Make loading, success, failure, and immediate versus staged changes visible; preserve valid input on recoverable errors.
- **Example:** equivalent detail views keep the object heading and navigation in the same location. An immediately applied permission change reports its result without inventing a Save step.
- **Check:** navigate between equivalent objects, trigger a failed change, and recover using the keyboard. Verify that the active context and actual outcome remain clear.

### 3. Restrained, semantic color with non-color cues

**Coverage:** sections 4.4.1-4.4.4 address color and symbols. Brazier's [paper, page 3](https://www.icheme.org/media/19390/hazards-29-paper-10.pdf#page=3), describes the tradeoff between salient warnings and useful routine-state color, rather than one universal grayscale solution.

- **Apply:** use color consistently for meaning and combine important states with text or recognizable symbols. Preserve contrast for ordinary text, controls, and focus, not only alerts. Record the viewing context and rationale; preserve the project's brand and use [WCAG checks](wcag-22.md) for web accessibility.
- **Example:** supported light and dark themes keep the same warning meaning and label while using readable foreground/background pairs. Neither theme is an EEMUA-prescribed palette.
- **Check:** test normal, selected, read-only, and abnormal states without color alone, across supported themes and representative lighting, display sizes, and viewing distances.

### 4. Multi-device and remote use

**Coverage:** sections 5.1-5.5 cover remote access and devices ([contents, PDF page 4](https://www.eemua.org/getattachment/4c0caa84-0123-423f-b663-a680af961783/Contents-EEMUA-Publications-201-Edition3-July-2019.pdf#page=4)). Brazier's [paper, page 6](https://www.icheme.org/media/19390/hazards-29-paper-10.pdf#page=6), treats remote operation as part of the system and distinguishes viewing from control.

- **Apply:** preserve critical context and a safe task flow across supported viewport sizes. Make connection freshness, ability to act, and response ownership clear when relevant. Responsive design is our web adaptation, not an inferred EEMUA breakpoint rule.
- **Example:** a narrow monitoring view retains the affected service, priority, and stale-data notice; secondary columns move to details without hiding the response action.
- **Check:** complete the same task at supported widths and zoom levels, then test a stale connection and a read-only session. Confirm users can tell what is current and who can act.

### 5. Security and user roles

**Coverage:** sections 5.2.1-5.2.3 address remote control and responsibility; 8.3.2 covers digital access ([contents, PDF pages 4-5](https://www.eemua.org/getattachment/4c0caa84-0123-423f-b663-a680af961783/Contents-EEMUA-Publications-201-Edition3-July-2019.pdf#page=5)). The contents do not establish a web RBAC model or named role set.

- **Apply:** tailor views to permitted tasks and explain unavailable or read-only actions where safe to disclose. UI visibility is not authorization: enforce access on the server for each operation and protected resource.
- **Example:** a project-defined viewer can inspect status but sees a read-only explanation for changes; sending the same change directly to the API is rejected.
- **Check:** test permitted, denied, and expired-access paths. Verify server rejection independently of disabled or hidden controls, and avoid exposing protected data through previews or error messages.

For display hierarchy and lifecycle artifacts, load [ISA-101](isa-101.md). For alarm response and queues, load [IEC 62682](iec-62682.md). Record chosen tokens and rationale in [DESIGN.md](design-md.md) without presenting the file as certification.
