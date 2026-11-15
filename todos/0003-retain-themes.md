---
title: retain theme-only resources package
status: done
priority: high
type: chore
labels: [pi, packaging, migration]
created: 2026-11-15
parent: null
blocked-by: []
blocks: []
---

## Scope

Approved task: keep `pi-dotagents-resources` resource-only, exposing only
`modus-operandi` and `modus-vivendi`. Independent prompts remain canonical in
`dotagents/pi/prompts`; no dotagents changes. No release bump, publication,
tag, push, merge, subagents, user configuration/auth/display changes, or other
repository edits. Evidence/scratch: `~/.cache/pi-migration/evidence/themes/`.

## Acceptance criteria

- [x] Preserve the exact two preexisting staged metadata changes separately on
  a new branch from `7138fff`; preserve stash and inspect orphan hook.
- [x] Verify all five prompt files byte-identical to canonical dotagents copies
  before removing package duplicates; retain Git history.
- [x] Explicit manifest and npm files allowlist expose exactly two stable themes.
- [x] Native personal/project-local installation, trust and single-theme filters
  documented and tested in isolated configurations.
- [x] Deliberate `.pi` ignore rules allow reviewed docs even with global
  `**/.pi`, while settings/MCP/state remain ignored; test both global policies.
- [x] Preserve actual Copier generation provenance; document manual adoption
  of local/unpushed template baseline `0835070`, not an applied remote update.
- [x] Clarify that outstanding prompt audit is not a theme-only release gate;
  do not claim that audit completed.
- [x] Validate installed Pi 1.5.2 schema, JSON, identities, manifest/files and
  `npm pack --dry-run --json`; no added dependency/toolchain/CI.
- [x] Actual isolated live renderer proof of BOTH themes, representative seeded
  Markdown/code and native UI, runtime selection, reload/restart, and filtering;
  read/inspect screenshots. No provider/auth claim from seeded fixtures.
- [x] Save exact SHA, steps, artifacts, scenario results and limitations; request
  independent review through lead t16 (reviewer assigned by lead).

## Decisions and preservation

- Branch `0003-retain-themes`; user-only checkpoint
  `01d8791a93f37695a6625fa46d5e0c495952d9b0` exactly matches the preservation
  report's full-index cached patch. Abbreviated-index diff first differed only
  in index hash width; full-index byte comparison passes.
- Original local `.git/hooks/pre-commit` invokes removed package-local Prek,
  falling back to PATH. No Prek config/toolchain remains. Copied verbatim to
  evidence and renamed only this orphan to `pre-commit.orphan-preserved`.
  No hooksPath/global hook bypass. Existing stash ref recorded, never applied.
- Prompt equality SHA-256 evidence is `prompt-equality.json`; original copies
  remain recoverable from the user checkpoint and prior history.
- Generation originally recorded local template source at `179a05d`. The
  user checkpoint's remote `v0.2.0` rewrite is preserved as user work, not proof
  of a Copier update. Restore original generation fields with explanatory
  comments; keep generation answers historical, document manual narrowing.
- Parent t16 requested root-anchored `!/.pi/` before `.pi/*` and `!.pi/docs/`
  to override a global ignored parent; tested including nested local-state safety.
- Existing extraction/audit todos are historical; supersede only their package
  scope/gate, not independent prompt audit decisions.

## Validation / review handoff

- Implementation checkpoint: `fe9248c6bb7b66ece3422de7342ce22732e6af24`.
  Strict installed Pi 1.5.2 schema/parser, exact six-file pack, manifest/files,
  canonical prompt hashes, both ignore-policy regressions pass.
- Actual native personal and project-local installs in own network-isolated
  `pi-live-proof-themes` container. Trust decline hides package themes; native
  trust grant persists on restart. Both themes selected via `/settings`, not
  preselected by CLI. Both `/reload` and restart preserve selection. Individual
  light-only and dark-only filters verified in native runtime menus.
- Original PNGs opened and inspected: `themes-light.png`,
  `themes-dark-corrected.png`, both identity menus, restart and filtered menus.
  Seeded assistant fixture is labeled; no provider/auth claim. Initial dark
  screenshot on white terminal was a setup failure, retained as non-acceptance;
  corrected only test-owned terminal appearance, preserving theme palettes.
- Native pinned Git installation also passes via real Pi/Git/npm with a
  process-scoped URL rewrite to read-only local source. This does NOT establish
  availability of the unpushed SHA on GitHub; no publication/push authorized.
- Evidence index: `~/.cache/pi-migration/evidence/themes/README.md` with exact
  steps, scenario matrix, source hashes, final SHA record and limitations.
  No toolchain/CI added; palettes unchanged apart from schema URL and explicit
  appearance metadata. User's stash and canonical prompts rechecked unchanged.
- Independent reviewer t4y approved exact validation checkpoint
  `eb308102447e86f3cb613d597e879598372d0277`, with no blocking findings.
  Lead t16 accepted the scoped criteria and requested this metadata-only closure.
  Shipped bytes remain identical; lead waived repeating live/pack/Git checks
  for this todo-only change. Final closure receives diff-only peer review.
- Independent prompt audit remains unfinished; closing this theme-only task
  does not complete or waive that audit. No functional scope added. Integration
  remains lead-owned, preserving user checkpoint ancestry and the existing stash;
  no merge, push, tag, publication, or release bump performed here.
