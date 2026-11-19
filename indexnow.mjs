// Tells Bing (and the other IndexNow engines) which pages changed, so they are crawled again without waiting.
// Usage: node indexnow.mjs            -> pages whose HTML changed in the last commit
//        node indexnow.mjs --all      -> every page of the sitemap
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const cfg = JSON.parse(readFileSync(new URL("./site.config.json", import.meta.url), "utf8"));
if (!cfg.indexable || !cfg.indexNowKey) { console.log("Site not indexable or no key: nothing sent."); process.exit(0); }

const host = new URL(cfg.siteUrl).hostname;
const sitemap = readFileSync(new URL("./docs/sitemap.xml", import.meta.url), "utf8");
const all = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);

let urls = all;
if (!process.argv.includes("--all")) {
  const changed = execSync("git diff --name-only HEAD~1 HEAD -- docs", { encoding: "utf8" }).split("\n").filter((f) => f.endsWith("index.html"));
  const wanted = new Set(changed.map((f) => `${cfg.siteUrl}/${f.replace(/^docs\//, "").replace(/index\.html$/, "")}`));
  urls = all.filter((u) => wanted.has(u));
}
if (!urls.length) { console.log("No page changed: nothing sent."); process.exit(0); }

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: cfg.indexNowKey, keyLocation: `${cfg.siteUrl}/${cfg.indexNowKey}.txt`, urlList: urls }),
});
console.log(`${urls.length} pages sent to IndexNow: HTTP ${res.status}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
