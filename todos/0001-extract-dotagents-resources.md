---
title: extract dotagents resources
status: closed
priority: medium
type: chore
labels: [pi, packaging]
created: 2026-09-13
parent: null
blocked-by: []
blocks: []
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

## Reconciliation (2026-11-15)

Closed as superseded mixed-resource scope, not as a completed human prompt audit.
Done `0003` and reviewed theme-only master `a8c5500d437e03e162d6b1df0e3a8886a8bb66c6`
(approved `e6612e9`) replace this package's original prompt/theme ownership contract.
The initial prompt copies were preserved and compared before removal; independent
prompts remain canonical in dotagents, not retirement material.

Both theme identities, strict schema/parser, six-file pack, native local/project
trust/filter/reload/restart and immutable native local-Git installation are independently
approved in `~/.cache/pi-migration/evidence/themes/{review,README}.md`. The user has
manually accepted the retained package, as reported by lead t16. The old prompt-audit
prerequisite no longer gates theme validation, so the obsolete `blocks: [0002]` edge
is removed. Todo `0002` remains OPEN and unfulfilled; its file and historical audit
criteria are untouched. The unchecked audit-dependent condition above is superseded,
not marked performed. Public remote availability, publication and source retirement
remain separate gates; no remote GitHub installation is claimed.
