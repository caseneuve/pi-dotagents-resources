import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, test } from "vitest";

type ResourceKind = "extensions" | "skills" | "prompts" | "themes";

type PackageManifest = {
  devDependencies: Record<string, string>;
  files: string[];
  keywords: string[];
  pi: Partial<Record<ResourceKind, string[]>>;
  scripts: Record<string, string>;
};

type PromptFrontmatter = {
  description?: string;
  "argument-hint"?: string;
};

type Theme = {
  name: string;
};

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(readFileSync(resolve(repositoryRoot, "package.json"), "utf8")) as PackageManifest;

const expectedPrompts = ["ans", "be-concise", "handoff", "speak-human", "style"];
const expectedThemes = ["modus-operandi", "modus-vivendi"];

const resourceNames = (directory: string, extension: string) =>
  readdirSync(resolve(repositoryRoot, directory))
    .filter((file) => extname(file) === extension)
    .map((file) => file.slice(0, -extension.length))
    .sort();

const frontmatter = (prompt: string): PromptFrontmatter => {
  const source = readFileSync(resolve(repositoryRoot, "prompts", `${prompt}.md`), "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);

  expect(match, `${prompt} frontmatter`).not.toBeNull();

  return Object.fromEntries(
    match![1]
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [key, ...value] = line.split(":");
        return [key, value.join(":").trim().replace(/^"|"$/g, "")];
      }),
  );
};

test("declares exactly the intended Pi resources", () => {
  expect(packageJson.keywords).toContain("pi-package");
  expect(packageJson.pi).toEqual({
    prompts: ["./prompts"],
    themes: ["./themes"],
  });

  for (const [resourceKind, entries] of Object.entries(packageJson.pi)) {
    for (const entry of entries ?? []) {
      expect(existsSync(resolve(repositoryRoot, entry)), `${resourceKind}: ${entry}`).toBe(true);
    }
  }

  expect(resourceNames("prompts", ".md")).toEqual(expectedPrompts);
  expect(resourceNames("themes", ".json")).toEqual(expectedThemes);
});

test("discovers each prompt command from valid frontmatter", () => {
  for (const prompt of expectedPrompts) {
    const metadata = frontmatter(prompt);
    expect(metadata.description, `${prompt} description`).toBeTruthy();
    expect(metadata["argument-hint"], `${prompt} argument hint`).toBeTruthy();
  }
});

test("parses themes with their stable Pi identities", () => {
  const names = expectedThemes.map((theme) => {
    const source = readFileSync(resolve(repositoryRoot, "themes", `${theme}.json`), "utf8");
    return (JSON.parse(source) as Theme).name;
  });

  expect(names).toEqual(expectedThemes);
});

test("ships each declared resource directory deliberately", () => {
  const files = new Set(packageJson.files);

  expect(files).toEqual(new Set(["README.md", "LICENSE", "CHANGELOG.md", "scripts", "prompts", "themes"]));
});

test("uses the standard local quality gates", () => {
  expect(packageJson.scripts.check).toBe("biome check --write --error-on-warnings .");
  expect(packageJson.scripts["check:ci"]).toBe("biome check --error-on-warnings .");
  expect(packageJson.scripts.typecheck).toBe("tsc --noEmit");
  expect(packageJson.scripts.test).toBe("vitest run");
  expect(packageJson.scripts["test:coverage"]).toBe("vitest run --coverage");
  expect(packageJson.scripts.prepare).toBe("node scripts/install-prek-hook.mjs");
  expect(existsSync(resolve(repositoryRoot, "scripts", "install-prek-hook.mjs"))).toBe(true);
  expect(packageJson.devDependencies.oxlint).toBeUndefined();
  expect(packageJson.devDependencies["@oxlint/plugins"]).toBeUndefined();
  expect(existsSync(resolve(repositoryRoot, "oxlint.config.ts"))).toBe(false);
});
