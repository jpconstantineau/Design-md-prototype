# DESIGN.md authoring

Use to create, update, or validate a design-system contract. This is a format guide; use the other routed references for interaction and accessibility decisions.

## Source contract

The [canonical Google specification](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md) is bundled as [design-md-spec.md](upstream/design-md-spec.md) at commit `1ed38aa9dd4451b9039f9aeb9ed1d2579edafddf`. Its format version is **alpha**, not 1.0. [Provenance and license](upstream/PROVENANCE.md) distinguish the exact upstream material from this guide.

Read the pinned specification for the field or section being changed. Preserve the pin during ordinary document edits; use [maintenance](maintenance.md) for an intentional update. The format is inspired by DTCG concepts, but a DESIGN.md token tree is not itself a DTCG JSON document.

## Write the contract

1. Inspect the product's existing components/tokens and requested change. Separate actual values from proposals; retain its selected brand and stack.
2. Create human-readable rationale and machine-readable YAML tokens. Adapt the [worked example](../assets/DESIGN.md) rather than treating its colors or sizes as requirements.
3. Include `name`; use `version: alpha` for this pin. Use YAML front matter, fenced `yaml` blocks, or both. Define each top-level key only once across the entire file. Quote hex colors and `{path.to.token}` references.
4. Use canonical H2 sections in this order when present: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts. Optional H1 is the title, not a parsed section. Put related behavior under the relevant section instead of repeating it elsewhere.
5. Use the schema's groups: `colors`, `typography`, `spacing`, `rounded`, `components`, plus its document metadata and optional `omitted`. Keep dimensions in `px`, `em`, or `rem`; put other layout constraints in prose or supported component strings. Use supported typography fields and resolve token paths to real values. Component references may point to composite typography tokens.
6. Explain usage, navigation, states, change effects, and accessibility obligations in prose. Tokens supply values; prose explains application. Document deliberate omissions with reasons instead of suppressing missing sections to hide unfinished work.

Use semantic token names consistent with the product. The spec's recommended token names and prose examples are guidance, not universal brand rules. Extra headings are preserved; unknown component properties may produce warnings. Duplicate section headings and duplicate top-level YAML keys are invalid.

## Validate and report

- Run the [offline bundle verifier](../scripts/verify-bundle.mjs) after editing this skill's references or source pin. It checks bundled bytes and file links, not DESIGN.md syntax.
- Run the pinned upstream parser/linter against the authored DESIGN.md. The verification procedure and checked tool revision live in [maintenance](maintenance.md). Inspect both errors and warnings; a zero exit code alone is insufficient because lint warnings do not fail the CLI.
- Check rendered UI and complete workflows separately using [WCAG](wcag-22.md) and the [review checklist](review-checklist.md). The upstream contrast rule checks component `textColor`/`backgroundColor` pairs; it does not audit the interface.

The pinned parser accepts `yaml` and `yml` fences but requires YAML content; prose-only input returns `NO_YAML_FOUND`. Prefer the documented `yaml` spelling. Parser acceptance, linter warnings, and a useful design contract are separate checks.

Finish with the document path, spec commit, tool version/revision, error/warning totals, and remaining unknowns. If the validator is unavailable, report the checks performed and leave parser/linter validation unverified.
