# pi-dotagents-resources

Two themes for [Pi](https://pi.dev/)
([`@earendil-works/pi-coding-agent`](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)):

- `modus-operandi` — light theme, for a light terminal background.
- `modus-vivendi` — dark theme, for a dark terminal background.

The repository/package name and theme identities are unchanged. This package
contains only theme JSON: no extensions, dependencies, build step or bootstrap.
Compatibility is verified against Pi **1.5.2**, not an asserted version range.

## Install

Personal installation (loaded in place, not copied):

```bash
pi install /absolute/path/to/pi-dotagents-resources
```

Project-local installation, run from the consuming project:

```bash
pi install -l /absolute/path/to/pi-dotagents-resources
```

The first command records a package in your agent-directory `settings.json`
(normally `~/.pi/agent/settings.json`); `-l` writes `.pi/settings.json` in the
current project. Review that declaration and grant Pi project trust before local
resources load. No dependency installation is needed for this resource-only
checkout. Updating its Git checkout changes the local resources in place.

For a future reviewed, available immutable Git revision:

```bash
pi install git:github.com/caseneuve/pi-dotagents-resources@<reviewed-tag-or-commit-sha>
```

Do not substitute a moving branch. This migration does not publish or push a
release; an unpushed local commit is not available from GitHub. `pi list` shows
configured packages; `pi remove <source>` removes one (`-l` for project scope).
`pi update` updates Pi itself; `pi update --extensions` reconciles installed
packages and does not move a pinned tag/commit. Copier updates are separate.

## Select and filter

In live Pi, open `/settings`, choose **Theme**, and select either identity.
Pi saves the selection; this package never sets your active theme. A light/dark
pair can be configured as `"theme": "modus-operandi/modus-vivendi"`, or use
`pi --use-theme modus-operandi` for one invocation. Match the terminal's own
background to the chosen appearance: theme JSON does not set that background,
and Operandi intentionally uses terminal-default body text. Run `/reload` after
package theme changes (only agent-directory themes receive automatic hot reload).

Use an object entry in `packages` to load only the dark theme:

```json
{
  "packages": [{
    "source": "/absolute/path/to/pi-dotagents-resources",
    "themes": ["themes/modus-vivendi.json"]
  }]
}
```

Use `themes/modus-operandi.json` for light-only. Omit `themes` to allow both;
`"themes": []` disables both. Filters narrow the explicit manifest and cannot
expose undeclared resources. `pi config` toggles individual resources; use
`pi config -l` for project settings. Avoid also loading legacy theme directories:
duplicate names cause resource-collision diagnostics.

## Prompt ownership

The five independent prompts (`ans`, `be-concise`, `handoff`, `speak-human`,
`style`) remain canonical in **dotagents**, under `prompts/`. Their package
copies were removed only after byte-equality verification; their history remains
in Git. No dotagents files or settings were changed here.

The earlier human prompt-audit gate no longer blocks this **theme-only** package.
That audit is **not completed** by this migration; prompt review remains separate
with the canonical prompt owner. See historical todo `0002` and superseding
scope/evidence todo `0003`.

## Development and provenance

Validate JSON against the installed Pi theme schema and inspect:

```bash
npm pack --dry-run --json
```

Also test native personal/local installs, trust, filtering, both themes in real
Pi, and inspect screenshots. Do not add a Node toolchain or CI for JSON resources.
`.pi` local settings, MCP and state are Git-ignored; only intentionally reviewed
`.pi/docs/` notes may be tracked. Git ignore and npm's exact `files` allowlist
are separate policies.

`.copier-answers.yml` retains the original generation revision `179a05d` and
uses `https://github.com/caseneuve/template-pi-package.git` instead of a
machine-specific checkout path. Generation originally used a local checkout;
changing the source reference does not run Copier or apply an update. The template
repository is private: access is required for template operations, not for using
this Pi theme package. A preexisting user rewrite to remote `v0.2.0` was
checkpointed separately in `01d8791`; it was not
proof of an applied update. This tranche **manually** adopts the relevant
resource-only, native-install and local-state-ignore conventions reviewed at
local/unpushed template baseline `08350707812e7036ab9477e879c1b029febd552b`,
plus the reviewed ignored-parent correction (`!/.pi/`). No Copier update was run
and the generation revision was not changed. Generation answers describe the historical
scaffold, not the current resource inventory. Review source availability and
repository-owned files before any future Copier operation.

## License

[MIT](LICENSE), Copyright (c) 2026 Caseneuve.
