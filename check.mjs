// node check.mjs : run after build. Fails on broken internal links or invalid JSON-LD.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, normalize } from "node:path";

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : []; });
let bad = 0;
const seen = new Set();
const cfg = JSON.parse(readFileSync("site.config.json", "utf8"));
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
  const desc = html.match(/name="description" content="(.*?)"/)[1];
  const canonical = (html.match(/rel="canonical" href="(.*?)"/) || [])[1];
  if (title.length > 65) { bad++; console.log("TITLE TOO LONG", title.length, file); }
  if (desc.length < 70 || desc.length > 200) { bad++; console.log("DESCRIPTION LENGTH", desc.length, file); }
  if (seen.has(title) || seen.has(desc)) { bad++; console.log("DUPLICATE TITLE OR DESCRIPTION", file); }
  seen.add(title); seen.add(desc);
  if (!canonical) { bad++; console.log("NO CANONICAL", file); }
  if (cfg.indexable && /name="robots" content="noindex/.test(html)) { bad++; console.log("NOINDEX ON A LIVE PAGE", file); }
  const words = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>/g, "").replace(/<[^>]+>/g, " ").split(/\s+/).length;
  if (words < 250) { bad++; console.log("THIN PAGE", words, "words", file); }
  if ((html.match(/<h1/g) || []).length !== 1) { bad++; console.log("H1 COUNT", file); }
  console.log(String(title.length).padStart(4), file.replace(/\\/g, "/"));
}
console.log(bad ? `${bad} problem(s)` : "all good");
process.exit(bad ? 1 : 0);
