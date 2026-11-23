import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI coding agent fixed the bug live on stage, then confidently explained to the whole room that I wrote it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
