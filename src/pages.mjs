import { corePages } from "./pages-core.mjs";
import { guidePages } from "./pages-guide.mjs";
import { glossaryPages } from "./pages-glossary.mjs";

export const pages = [...corePages, ...guidePages, ...glossaryPages];
