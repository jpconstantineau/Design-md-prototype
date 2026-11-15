# Presenting evidence: Tufte-inspired principles

Use for charts, quantitative dashboards, and comparison tables when the user needs to draw a conclusion from evidence. Start with the question the display should help answer; a configuration page does not need a chart merely to apply these ideas.

The five principles and conditional checks below are this playbook's original practical application informed by Edward Tufte's work, not an exact canonical Tufte list, quoted book text, or a compliance standard. The linked first-party sources were checked on 2026-11-15. Where a notebook includes discussion, the attribution below refers to Tufte's own text, not other commenters.

## 1. Show magnitude honestly

- **Apply:** choose scales and visual encodings that preserve the differences being compared. Label units, range, and transformations. Bars that encode amounts by length normally start at zero; a clearly labeled time-series line can use a narrower range when that reveals useful variation. Avoid area, volume, or perspective effects that exaggerate change.
- **Example:** compare counts of 20 and 40 with proportionate bars, not circles whose diameters double and areas quadruple. A latency line may focus on 180-220 ms with that range explicit.
- **Check:** compare the plotted values with the source data and ask what ratio or change a reader would infer. Inspect the baseline, scale, units, and encoding for distortion.

Informed by [The Visual Display of Quantitative Information](https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/) and Tufte's October 18, 2001 [baseline discussion](https://www.edwardtufte.com/notebook/baseline-for-amount-scale/). The line-chart exception prevents a misleading all-charts-must-start-at-zero rule.

## 2. Make comparisons visible

- **Apply:** place relevant values side by side. For small multiples, repeat the chart format and use common scales when comparing magnitudes. If different scales are needed for a different question, label them prominently and avoid inviting a false size comparison.
- **Example:** compare queue sizes for three workers with aligned time windows and a shared count scale. Use a table alongside the charts when exact differences matter.
- **Check:** ask the reader which value is larger and by how much without switching views or mentally adjusting incompatible axes; verify the answer against the data.

Informed by the comparative and small-multiple design topics described in [The Visual Display of Quantitative Information](https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/). The common-scale rule is our task-specific application.

## 3. Give each number context

- **Apply:** pair a current value with relevant history, a meaningful reference range, target, or baseline. State the time window and denominator where needed. Keep zero, missing, stale, and unavailable data distinct rather than turning absent observations into zeroes.
- **Example:** show a current error rate with its recent trend, request count, and measurement period. Keep gaps in missing samples visible; provide exact values alongside a compact trend when the task needs them.
- **Check:** ask whether the reader can tell if the current value is typical or changing and how much evidence supports it. Test the same display with no observations and with a real zero.

Informed by Tufte's [sparkline discussion](https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/), including his May 27, 2004 treatment of a latest measurement, history, scale, and reference range. Missing-data handling is our implementation rule.

## 4. Keep explanations next to the evidence

- **Apply:** place source, observation period, freshness, and important limitations close to the display. Add useful annotations beside the relevant data. Distinguish an observed event or association from a demonstrated cause.
- **Example:** mark a deployment time on an error-rate plot as an event, not as proof that it caused a spike. Show the telemetry source, covered interval, and any missing samples nearby.
- **Check:** ask the reader where the data came from, what period it covers, and what the annotation actually establishes. Flag any causal conclusion unsupported by the evidence.

Informed by Tufte's [data documentation and inference discussion](https://www.edwardtufte.com/notebook/making-better-inferences-from-statistical-graphics-edward-tufte/) and [integrated annotations](https://www.edwardtufte.com/notebook/mapped-pictures-image-annotation/).

## 5. Remove decoration, keep what helps people read

- **Apply:** remove ornamental gauges, redundant framing, and decorative 3D effects before removing meaningful detail. Preserve labels, units, uncertainty, references, readable contrast, and focus indicators. Choose a table for precise lookup; provide an accessible equivalent when a compact chart cannot carry the required information.
- **Example:** replace a decorative gauge with a labeled value, useful trend, and reference range. Keep the values available as text or a table and retain clear keyboard focus on interactive controls.
- **Check:** verify that the simplified display preserves the conclusions and exact values needed for the task, then test the relevant [WCAG checks](wcag-22.md). A cleaner screenshot is insufficient evidence.

Informed by Tufte's March 6, 2006 response in [Analytical design and human factors](https://www.edwardtufte.com/notebook/analytical-design-and-human-factors/), which distinguishes restrained design from impoverished evidence. Accessibility requirements come from WCAG and this product's needs, not a claim about Tufte's compliance guidance.

## Conditional checks for richer evidence

### Before choosing a visual form: establish the content and its quality

- **Apply:** identify the real entities, relationships, labels, and decision-relevant fields before arranging chart frames or cards. Verify measurement definitions, calculations, coverage, and comparable populations. Add a breakdown or another variable when it changes the answer; choose detail by the task rather than a density quota. Disclose unresolved data limitations.
- **Example:** a hypothetical 99% success figure means 990 of 1,000 requests in the stated interval. Inspect failures by endpoint if the overall rate could hide one failing operation. The useful relationship determines the display, not an empty dashboard template.
- **Check:** trace a displayed measure to its input records and calculation; compare the aggregate with relevant groups. Record missing or incomparable evidence before making a conclusion.

Huening's content-led web examples (PDF pages 63-79, identified below) prompted this application. Tufte's own [content-driven design discussion](https://www.edwardtufte.com/notebook/good-web-design-web-standards-user-testing/) supports starting with specific content and analytical tasks; his [inference guidance](https://www.edwardtufte.com/notebook/making-better-inferences-from-statistical-graphics-edward-tufte/) supports checking evidence selection and analysis. The metric checks are our implementation, not quoted rules.

### When a summary hides variation: retain overview and inspectable detail

- **Apply:** show the overall pattern and provide access to the observations or exceptions that explain it. When zooming or drilling down, retain an overview, selected interval, or other clear location cue. Choose readable detail on demand instead of squeezing everything into one view.
- **Example:** an hourly queue summary opens minute-level samples while the day view marks the selected hour. The detail includes the peak that an hourly average would conceal.
- **Check:** find a local exception, inspect its exact value, then return to the same overview and selection. Verify that aggregation has not concealed a task-critical peak or gap.

Informed by the micro/macro topic in [Envisioning Information](https://www.edwardtufte.com/book/envisioning-information/) and Tufte's October 16, 2005 [contextual-zoom discussion](https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/). The gist prompted this additional review branch.

### When visual layers compete: separate them without hiding meaning

- **Apply:** distinguish observations, reference guides, and annotations with position, line treatment, labels, and restrained emphasis. Use the least emphasis that remains reliably perceptible under the applicable [WCAG checks](wcag-22.md). Keep meaningful data and interactive states legible through background bands, markers, and overlays.
- **Example:** place an event label beside a plot and keep its reference band behind the data line; a selected interval retains clear edges and a text label rather than covering the samples.
- **Check:** inspect overlapping and selected states at the intended size and zoom. Confirm that values, reference limits, annotations, and focus can each be identified without color alone; revise any overlap that masks evidence.

Informed by Tufte's August 19, 2005 [importance-flags discussion](https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/) and the layering/separation topic in [Envisioning Information](https://www.edwardtufte.com/book/envisioning-information/). Accessibility is a constraint on this application, not permission to make essential content faint.

## Secondary-source review

Reviewed on 2026-11-15:

- [Edward Tufte & Information Design For the Web](https://triux.wordpress.com/wp-content/uploads/2009/08/tufte.pdf), a 93-page presentation by **Nathan Huening**, dated **23 July 2009**, Sprocket House. It applies Tufte and quotes several other authors; it is not Tufte's own paper. Content-first planning and task-relevant detail informed the additions above. Its period screenshots and subtle visual effects are examples, not present-day accessibility prescriptions.
- [w0rd-driven's tufte-viz gist](https://gist.github.com/w0rd-driven/62a2c8377a5dfad337116625d71b486e), a third-party fork of aparente with three Markdown files. Its overview/detail, layering, and evidence-quality themes prompted primary-source checks. Comparisons, scales, context, annotation, and decoration were already covered by the five principles. Fixed sparkline sizing, grayscale defaults, density maximization, and its numerical pass/fail test are not requirements of this playbook.

The additions are independent practical paraphrases. Neither secondary source's text, figures, code, nor claimed canonical checklist is incorporated into this skill.

## Hypothetical GoDav-style example

For a future Indexing dashboard, show an illustrative queue count of **24 pending** beside its **last 15 minutes: 80 to 24**, the last successful run, and the data's timestamp/source. A gap in observations remains a gap. Use a common scale to compare queues and an accessible table for exact samples. This is a proposed example, not a description of GoDav's existing UI or telemetry.

## Review evidence

For each applicable principle, record the question being answered, source data, displayed state, observation, and result using the [review record](review-checklist.md). Preserve the [ISO presentation principles](iso-9241-112.md#the-six-presentation-principles) for clarity and [WCAG](wcag-22.md) for accessibility; this reference adds evidence-quality checks rather than replacing either.
