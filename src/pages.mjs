import { corePages } from "./pages-core.mjs";
import { guidePages } from "./pages-guide.mjs";
import { glossaryPages } from "./pages-glossary.mjs";

import { workPages } from "./pages-work.mjs";

import { legalPages } from "./pages-legal.mjs";

export const pages = [...corePages, ...workPages, ...guidePages, ...glossaryPages, ...legalPages];
