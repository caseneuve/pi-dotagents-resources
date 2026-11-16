---
title: Use portable template provenance in current files
status: done
priority: medium
type: docs
labels: [metadata, privacy]
created: 2026-11-16
parent: null
blocked-by: []
blocks: []
---

## Scope

User approved replacing machine-specific template paths in current files with
URL references, explicitly leaving Git history unchanged. Keep the original
Copier generation revision and answers; do not run Copier or claim a remote
update. The template repository remains private and is not a Pi dependency.

## Acceptance

- [x] Current Copier source and README provenance use the repository URL.
- [x] Original generation revision/answers, themes, manifest and other payloads unchanged.
- [x] README points to current canonical dotagents prompts/ ownership.
- [x] No history rewrite; historical path disclosure intentionally retained by user choice.
- [x] Validate pack contents/diff and independent exact-ref review before integration.

## Boundaries

Public repository creation and remote configuration are separately lead-owned;
no push, release, authentication change or private-template visibility change.
Prior independent privacy audits cover baseline history; review this narrow
metadata delta before creating the public repository. No remote install claim.

## Verification

Independent reviewer approved source tip58c869f: only README, Copier answers and
this task changed. Theme JSON/schema and manifest unchanged; actual Gitleaks8.30.1
history scan found no credentials; independent offline, ignore-scripts pack
inspection confirmed exactly six intended files. Diff check passes. This final
task-only closeout requires exact-tip renewal before lead integration. No Copier
update, dependency/lifecycle installation or history rewrite was performed.
