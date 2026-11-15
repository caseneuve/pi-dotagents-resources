---
title: human audit all prompt templates before first release
status: open
priority: high
type: chore
labels: [prompt-audit]
created: 2026-09-13
parent: null
blocked-by: []
blocks: []
---

## Scope clarification (2026-11-15)

This audit is **not completed**. Todo `0003` removes the byte-identical package
prompt duplicates, leaving canonical independent prompts in dotagents. This
historical prompt audit no longer gates a theme-only package release. The
criteria below remain an outstanding prompt-owner review record, not authority
to edit dotagents or to publish/tag this package. The removed Node test harness
is not to be restored for this audit.

## Context

The initial resource extraction moved five independent prompt templates from
dotagents without content redesign. Human review is required before the package
is published or tagged. `ask-for-review` and `implement-todo` are excluded from
this package and are tracked by pi-agent-channel todo `0003`.

## Acceptance Criteria

- [ ] Audit `/ans`, `/be-concise`, `/handoff`, `/speak-human`, and `/style`.
- [ ] For each prompt, record keep unchanged, revise, rename, or drop; its
  command name and argument semantics; external command/tool/package
  dependencies; general versus dotagents-specific applicability; overlap; and
  validation after approved edits.
- [ ] Apply only human-approved content changes and validate prompt frontmatter
  and command discovery for every retained prompt.
- [ ] Record the reviewed commit SHA and explicitly approve or defer the first
  CalVer release. Do not publish or tag before this is complete.

## Affected Files

- `prompts/*.md` — prompt content and frontmatter.
- `README.md` — resource inventory when audit decisions change it.
- `test/package.test.ts` — retained command discovery coverage.

## Notes

This historical prompt gate does not block the retained theme-only package and
does not authorize dotagents changes. No prompt-audit completion is claimed.
