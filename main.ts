// The joke this entry submits, and the small delivery logic around it.
// Written from scratch for the make.fun "Make the AI Judge Laugh: Office Jokes"
// bounty: one original one-line office joke, under 200 characters.

import { jokeLine } from "./src/joke.ts";
import { validateEntry } from "./src/validate.ts";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader runs the program in a sandbox whose writable output mount is
// /output. Locally, OUTPUT_DIR may point somewhere else for a smoke test.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// Take the line through its accessor so the submitted text is exactly the
// one the joke module owns, never a copy pasted here.
const line = jokeLine();

const problems = validateEntry(line);
if (problems.length > 0) {
  for (const problem of problems) {
    console.error(`entry rejected: ${problem}`);
  }
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, line, "utf8");

// The gate reads the file back, so read it back here too: a write that does
// not round-trip byte for byte is a failure, not a submission.
const written = readFileSync(entryPath, "utf8");
if (written !== line) {
  console.error("entry rejected: written file does not match the joke line");
  process.exit(1);
}
console.log(`wrote ${entryPath} (${line.length} chars)`);
