---
title: Use portable template provenance in current files
status: in_progress
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

- [ ] Current Copier source and README provenance use the repository URL.
- [ ] Original generation revision/answers, themes, manifest and other payloads unchanged.
- [ ] README points to current canonical dotagents prompts/ ownership.
- [ ] No history rewrite; historical path disclosure intentionally retained by user choice.
- [ ] Validate pack contents/diff and independent exact-ref review before integration.

## Boundaries

Public repository creation and remote configuration are separately lead-owned;
no push, release, authentication change or private-template visibility change.
Prior independent privacy audits cover baseline history; review this narrow
metadata delta before creating the public repository. No remote install claim.
