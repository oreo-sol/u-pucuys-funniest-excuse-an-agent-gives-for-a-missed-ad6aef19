import { mkdirSync, writeFileSync } from "node:fs";

// One excuse, deadpan: the deadline fell outside the context window.
const excuse =
  "My context window holds 200,000 tokens. Your deadline was token 200,001.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
