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
- [x] Run formatting, typecheck, tests, Oxlint, `npm pack --dry-run --json`, and
  isolated local-install/filter validation.
- [x] Record a release-blocking human audit for every included prompt; do not
  publish, tag, remove sources, or change dotagents settings in this task.
- [ ] After the human audit supplies a reviewed immutable ref, validate its Git
  installation in an isolated Pi configuration.

## Affected Files

- `prompts/` — literal prompt source files.
- `themes/` — literal theme source files.
- `package.json` — resource manifest and package metadata.
- `README.md` — package installation and filtering instructions.
- `test/package.test.ts` — manifest, resource identity, and discovery checks.

## Notes

- `modus-operandi`/`modus-vivendi` remain the established light/dark pair, but
  this package does not select a default theme.
- Preserve `0.0.0` until the first reviewed release sets CalVer.
- Human prompt audit is a release blocker.
- Validation passed on 2026-09-13: `npm run check:ci`, `npm run typecheck`,
  `npm test`, `npx --yes oxlint@1.82.0 .`, and `npm run pack:check`; a temporary
  `HOME` confirmed `pi install ~/git/pi/pi-dotagents-resources` and independent
  `prompts/ans.md` / `themes/modus-vivendi.json` filtering.
