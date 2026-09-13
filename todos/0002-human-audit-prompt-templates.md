---
title: human audit all prompt templates before first release
status: open
priority: high
type: chore
labels: [release-blocker]
created: 2026-09-13
parent: null
blocked-by: []
blocks: []
---

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

This todo is a release blocker, not authorization to change dotagents bootstrap
settings or remove dormant dotagents source files.
