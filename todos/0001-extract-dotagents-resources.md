---
title: extract dotagents resources
status: in_progress
priority: medium
type: chore
labels: [pi, packaging]
created: 2026-09-13
parent: null
blocked-by: []
blocks: [0002]
---

## Superseding scope (2026-11-15)

Todo `0003` narrows this package to themes only. The independent prompts remain
canonical in dotagents, not dormant retirement material. The initial extraction
checks below are historical. Prompt audit `0002` is not completed, but no longer
blocks this theme-only package. Immutable Git installation remains a separate
validation gate, not dependent on a package prompt audit. No publication, tag,
push, merge, or dotagents changes are authorized by `0003`.

## Context

Extract the resource-only Pi package from dotagents source todo `0027.8` using
the standard Copier template. Keep dotagents sources as dormant rollback
material; bootstrap cutover and source retirement are separate work.

`ask-for-review` and `implement-todo` are intentionally not part of this
package. Their communication and repository-workflow contracts are tracked by
pi-agent-channel todo `0003`.

## Acceptance Criteria

- [x] Preserve the five independent prompt templates and both themes literally
  during the initial move.
- [x] Expose only those resources through the explicit `pi` manifest and verify
  prompt/theme discovery, theme identities, and individual filtering paths.
- [x] Document local and immutable Git installation, filtering, and the fact
  that active-theme selection is downstream configuration.
- [x] Run direct prompt-frontmatter/theme-JSON validation,
  `npm pack --dry-run --json`, and isolated local-install/filter validation.
- [x] Remove the generated Node development toolchain; this resource-only
  package has no extensions, dependencies, build step, formatter, linter,
  typecheck, or test harness.
- [x] Record a release-blocking human audit for every included prompt; do not
  publish, tag, remove sources, or change dotagents settings in this task.
- [ ] After the human audit supplies a reviewed immutable ref, validate its Git
  installation in an isolated Pi configuration.

## Affected Files

- `prompts/` — literal prompt source files.
- `themes/` — literal theme source files.
- `package.json` — resource manifest and package metadata.
- `README.md` — package installation and filtering instructions.

## Notes

- `modus-operandi`/`modus-vivendi` remain the established light/dark pair, but
  this package does not select a default theme.
- Preserve `0.0.0` until the first reviewed release sets CalVer.
- Historical prompt gate: superseded for the theme-only package by `0003`;
  independent prompt audit remains outstanding with the canonical owner.
- Initial template validation used its generated Node toolchain. It was removed
  because it does not serve this resource-only package. A temporary `HOME`
  confirmed `pi install ~/git/pi/pi-dotagents-resources` and independent
  `prompts/ans.md` / `themes/modus-vivendi.json` filtering.
