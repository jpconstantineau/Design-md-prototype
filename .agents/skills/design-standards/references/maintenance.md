# Maintenance and verification

Use when changing this skill, its source pin, or its bundled example.

## Maintain the documents

Read the [writing-for-agents source and method](writing-for-agents.md) before reshaping the entrypoint or references. Keep each source in its own reference and update its routing condition with its scope. Preserve the current product-neutral boundaries and source-specific limits.

For an upstream spec update, inspect the new official commit, schema/parser changes, license, and NOTICE files before replacing the vendored files. Copy the original bytes, update the manifest hashes and provenance, then rerun bundle and example validation. Keep original guidance separate from the upstream specification. An ordinary UI edit does not require refreshing the pin.

## Offline bundle check

From the repository root:

```sh
node .agents/skills/design-standards/scripts/verify-bundle.mjs
```

The script requires Node.js, no third-party packages or network. It verifies the vendored SHA-256 hashes and local Markdown file links. It deliberately excludes the unmodified upstream spec's illustrative links and does not check heading anchors, remote URLs, or the DESIGN.md schema.

For skill packaging, run the skill-creator `quick_validate.py` from the host's skill installation if available. It needs Python and PyYAML; report that check as unavailable if those are absent rather than presenting the bundle check as a substitute.

## Upstream DESIGN.md lint

Use a disposable checkout of `https://github.com/google-labs-code/design.md.git` at the manifest's commit. Inspect its package scripts/dependencies before installing. The source package identifies as `@google/design.md` version `0.4.1`; the commit is the authoritative code pin. That version was not available from the public npm registry during verification, so do not assume a registry install is identical or available.

With the upstream Bun toolchain available, its documented source entrypoint is:

```sh
bun install --frozen-lockfile
bun run packages/cli/src/index.ts lint /absolute/path/to/DESIGN.md --format json
```

The Bun path was not executed during this task. The example was instead checked on Windows with the same pinned parser/linter source compiled by TypeScript and run with Node. A normal npm workspace install hit an OS symlink restriction. In the disposable checkout only, the workspace dependency manifests were flattened while retaining the pinned lockfile package versions/integrities, dependencies were installed with `--ignore-scripts`, and the CLI was compiled with:

```sh
node node_modules/typescript/bin/tsc --project packages/cli/tsconfig.build.json --skipLibCheck
```

`src/linter/spec-config.yaml` and `docs/spec.md` were copied into `packages/cli/dist/linter/`, then the checked command was:

```sh
node /absolute/path/to/upstream/packages/cli/dist/index.js lint .agents/skills/design-standards/assets/DESIGN.md --format json
```

The upstream parser/linter source files were unchanged; dependency setup did not alter this repository or system settings. No installed global CLI is required. If that local build is unavailable, use a verified tool matching the pin or report validation as pending.

## Verification record

On 2026-11-15, the worked example produced **0 errors, 0 warnings, 1 informational token summary** using the pinned source CLI, version 0.4.1. It defined 11 colors, 3 typography scales, 2 rounding levels, 4 spacing tokens, and 6 components. The tool's contrast checks cover declared component foreground/background pairs, not an implemented interface.

Re-run the commands after changing the example. The bundled example is not a rendered product; keyboard, assistive-technology, and full WCAG evaluation remain separate work for any implementation built from it.
