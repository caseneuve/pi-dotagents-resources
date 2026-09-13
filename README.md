# pi-dotagents-resources

Themes and reusable prompt templates for Pi.

This is a package for [Pi](https://pi.dev/), the [`@earendil-works/pi-coding-agent`](https://www.npmjs.com/package/@earendil-works/pi-coding-agent).

## Resources

- Prompt template directory: `prompts/`
- Theme directory: `themes/`

## Install

Install a local checkout while developing:

```bash
pi install ~/git/pi/pi-dotagents-resources
```

Install a reviewed immutable release in normal use:

```bash
pi install git:github.com/caseneuve/pi-dotagents-resources@<reviewed-tag-or-commit-sha>
```

Use an annotated release tag such as `v2026.7.10`, or a reviewed commit SHA. Do not use a moving branch name for a reproducible installation.

Pi filters package resources through an object entry in `packages` settings. Omit a resource key to load everything of that type; use an empty array to disable it. For example:

```json
{
  "packages": [{
    "source": "git:github.com/caseneuve/pi-dotagents-resources@<reviewed-tag-or-commit-sha>",
    "prompts": [],
    "themes": []
  }]
}
```

Use `pi config` (or `pi config -l` for project settings) to enable or disable individual resources.

## Development

For a new local checkout, initialize Git and create the committed lockfile once:

```bash
git init -b master
npm install
```

Commit the resulting lockfile:

```bash
git add package-lock.json
```

After the lockfile is committed, use clean installs:

```bash
npm ci
npm run verify
npm run test:coverage
npm run pack:check
```

`npm install` runs `prepare`, which installs the [Prek](https://github.com/j178/prek) hook when the development dependency is present. Production-only Pi Git installs skip hook installation safely. The hook runs Biome and may apply safe formatting fixes. Review and stage any hook changes before committing again.

Run all hooks explicitly with:

```bash
npx prek run --all-files
```

`npm run check` applies Biome formatting/lint fixes. `npm run check:ci` is the non-mutating CI equivalent.

## Releases

This project uses npm-compatible CalVer: `YYYY.M.D[.PATCH]` (for example, `2026.7.10` or `2026.7.10.1`). Before a release:

1. Run `npm run verify`, `npm run test:coverage`, and `npm run pack:check`.
2. Update `CHANGELOG.md` and `package.json` with the release version.
3. Merge approved work to `master`.
4. Create an annotated tag named `v<version>`.
5. Verify `pi install git:github.com/caseneuve/pi-dotagents-resources@v<version>` in an isolated Pi configuration.

## License

[MIT](LICENSE), Copyright (c) 2026 Caseneuve.
