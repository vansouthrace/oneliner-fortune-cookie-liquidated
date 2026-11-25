// Fortune Cookie for the Liquidated Trader: one fortune that laughs at the loss, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The fortune line, composed fresh for this bounty.
const entry = "Your next trade will be your best one. The stars just needed you to start from zero first.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
