# Writing method: Matt Pocock's writing-for-agents

Use when editing this skill or its agent-facing references.

## Verified source

The documents were authored using Matt Pocock's canonical [writing-for-agents SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/writing-for-agents/SKILL.md) and its [SKILL-MECHANICS.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/writing-for-agents/SKILL-MECHANICS.md), both read in full at commit `5863806dd4e15c63174bee4e7515a4256792ecfa` on 2026-11-15. The source repository is [MIT licensed](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/LICENSE); its text is linked, not copied into this bundle.

## Application in this skill

- Give each reference a distinct load condition in SKILL.md.
- Keep shared workflow steps in the entrypoint and source-specific rules in their own documents.
- Put a rule, its scope, and its caveats together; let one document own each detailed rule.
- End steps with observable evidence or a stated unknown, rather than an impression of completion.
- Remove duplicate or generic instructions and prefer a positive action unless a hard boundary needs explicit wording.

Before a substantial rewrite, read both pinned source files again and test the routing on a representative request. Keep this as a normal discoverable skill routing to plain references; no separate manual-only skills or global installation are required by this structure.
