import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Your lucky numbers are the ones you sold at the bottom; fortune favors the patient, and the patient are broke.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY);
