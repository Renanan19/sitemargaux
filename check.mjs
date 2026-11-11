// node check.mjs : run after build. Fails on broken internal links or invalid JSON-LD.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, normalize } from "node:path";

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : []; });
let bad = 0;
for (const file of walk("docs")) {
  const html = readFileSync(file, "utf8");
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try { JSON.parse(ld[1]); } catch { bad++; console.log("BAD JSON-LD", file); }
  if (file.endsWith("404.html")) continue;
  for (const [, href] of html.matchAll(/href="([^"#]+)"/g)) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    let target = normalize(join(dirname(file), href));
    if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
    if (!existsSync(target)) { bad++; console.log("BROKEN LINK", file, href); }
  }
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  if ((html.match(/<h1/g) || []).length !== 1) { bad++; console.log("H1 COUNT", file); }
  console.log(String(title.length).padStart(4), file.replace(/\\/g, "/"));
}
console.log(bad ? `${bad} problem(s)` : "all good");
process.exit(bad ? 1 : 0);
