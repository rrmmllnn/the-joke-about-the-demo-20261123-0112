import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI coding agent fixed the bug live on stage, then confidently explained to the whole room that I wrote it.";

const codePoints = [...joke];
const singleLine = !joke.includes("\n") && !joke.includes("\r");
if (codePoints.length < 1 || codePoints.length > 280 || !singleLine) {
  console.error("error: joke must be a single line of 1-280 code points");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
