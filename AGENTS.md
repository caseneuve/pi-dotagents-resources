# AGENTS.md — Pi package development

This repository contains a public Pi package for [pi-coding-agent](https://pi.dev/). Before changing code, read the relevant upstream Pi source and documentation in the installed `@earendil-works/pi-coding-agent` package, especially its package, extension, settings, and UI APIs. Treat the selected Pi API version as the compatibility contract.

## Development procedure

1. Discuss the problem and agree on scope.
2. Create or update a todo with concrete acceptance criteria. Record important design decisions and departures from the original plan in that todo.
3. Create a task branch; keep `master` stable.
4. Develop with checkpoint commits. Prefer red → green → refactor when testable.
5. Validate resource frontmatter, theme JSON, package contents, and installation behavior.
6. Request peer review against the todo and this file.
7. Address findings in new commits, then merge only after approval.

Do not redesign behavior or expand platform support without an explicit todo.

## Tooling

This is a resource-only package: it has no extensions, runtime dependencies,
build step, formatter, linter, typecheck, or test harness. Do not add one
without a concrete resource-format requirement.

Validate changed prompt frontmatter and theme JSON directly, inspect
`npm pack --dry-run --json`, and test Pi installation/filtering in an isolated
configuration.

## Engineering discipline

- Use focused manual validation for resource-format changes; add automated checks only when a concrete resource-format regression warrants them.
- Use FCIS: isolate pure planning, parsing, transformation, and formatting from filesystem, process, network, and UI side effects.
- Design with precise TypeScript types.
- Apply KISS, DRY, and YAGNI.
- Preserve public commands, tools, shortcuts, resource paths, settings, and platform limitations unless an approved todo changes them.
- Keep the `pi` manifest explicit. Package filtering must be documented and experimental resources must be manifest-excluded.

## Release procedure

Use npm-compatible CalVer `YYYY.M.D[.PATCH]`; release tags are annotated `v<version>` tags.

1. Complete automated checks and focused local/Git install validation.
2. Update `CHANGELOG.md` and `package.json`.
3. Merge approved work.
4. Create and push the annotated release tag.
5. Verify installation using that immutable tag or its reviewed commit SHA.

## Review checklist

Reviewers must check:

- Conformance to the todo and acceptance criteria.
- Focused manual validation evidence.
- Manifest/resource paths, filtering, local installation, and immutable Git installation.
- Pi resource-format compatibility and package contents from `npm pack --dry-run`.
- FCIS, modularity, KISS, DRY, and YAGNI discipline.
- Preservation of public behavior and documented platform limits.
- For visible UI changes, screenshot review unless a human explicitly waives it.
