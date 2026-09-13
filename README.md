# pi-dotagents-resources

Themes and reusable prompt templates for [Pi](https://pi.dev/), the
[`@earendil-works/pi-coding-agent`](https://www.npmjs.com/package/@earendil-works/pi-coding-agent).

## Resources

### Prompt templates

- `/ans` — answer a question in read-only mode.
- `/be-concise` — use a concise-reply protocol.
- `/handoff` — write a persistent Markdown handoff.
- `/speak-human` — use concise, one-topic-at-a-time conversation.
- `/style` — suggest simpler, human-friendly prose edits.

### Themes

- `modus-operandi` — light theme.
- `modus-vivendi` — dark theme.

The themes retain their existing identities. A downstream Pi configuration may
select them as a light/dark pair with `"theme": "modus-operandi/modus-vivendi"`.
This package does not select an active theme.

## Install

Install a local checkout while developing:

```bash
pi install ~/git/pi/pi-dotagents-resources
```

Install a reviewed immutable release in normal use:

```bash
pi install git:github.com/caseneuve/pi-dotagents-resources@<reviewed-tag-or-commit-sha>
```

Use an annotated release tag or a reviewed commit SHA. Do not use a moving
branch name for a reproducible installation.

Pi filters package resources through an object entry in `packages` settings.
For example, load only `/ans`:

```json
{
  "packages": [{
    "source": "git:github.com/caseneuve/pi-dotagents-resources@<reviewed-tag-or-commit-sha>",
    "prompts": ["prompts/ans.md"],
    "themes": []
  }]
}
```

Or load only the dark theme:

```json
{
  "packages": [{
    "source": "git:github.com/caseneuve/pi-dotagents-resources@<reviewed-tag-or-commit-sha>",
    "prompts": [],
    "themes": ["themes/modus-vivendi.json"]
  }]
}
```

Omit a resource key to load every resource of that type; use an empty array to
disable that type. Use `pi config` (or `pi config -l` for project settings) to
enable or disable individual resources.

## Development

```bash
npm ci
npm run check:ci
npm run typecheck
npm test
npx --yes oxlint@1.82.0 .
npm run pack:check
```

`npm install` runs `prepare`, which installs the [Prek](https://github.com/j178/prek)
hook when the development dependency is present. Production-only Pi Git
installs skip hook installation safely.

## Release gate

A human audit of every prompt is required before the first release. Record each
prompt's keep/revise/rename/drop decision, command and argument semantics,
dependencies, applicability, overlap, and validation before publishing or
tagging.

## License

[MIT](LICENSE), Copyright (c) 2026 Caseneuve.
