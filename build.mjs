// Static build: node build.mjs  ->  docs/ (served by GitHub Pages)
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, copyFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "./src/pages.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, "docs");
const cfg = JSON.parse(readFileSync(join(root, "site.config.json"), "utf8"));
const siteUrl = cfg.siteUrl.replace(/\/$/, "");

const photoDir = join(root, "photos");
const photoFiles = existsSync(photoDir) ? readdirSync(photoDir).filter((f) => /\.(jpe?g|webp|png|avif)$/i.test(f)) : [];
const photo = (name) => photoFiles.find((f) => f.replace(/\.[^.]+$/, "").toLowerCase() === name) || null;
// Pixel sizes written by the photo export, so every <img> reserves its space before loading.
const sizes = existsSync(join(photoDir, "manifest.json")) ? JSON.parse(readFileSync(join(photoDir, "manifest.json"), "utf8")) : {};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

// Contact channels. Until a WhatsApp number or email is set in site.config.json,
// the only live channel is the studio's Instagram inbox.
const waText = encodeURIComponent("Hello Margaux, I'm looking at an apartment project in Paris.");
const channels = [];
if (cfg.whatsapp) channels.push({ label: "Message Margaux on WhatsApp", href: `https://wa.me/${cfg.whatsapp.replace(/\D/g, "")}?text=${waText}` });
if (cfg.email) channels.push({ label: `Email ${cfg.email}`, href: `mailto:${cfg.email}?subject=${encodeURIComponent("Paris apartment project")}` });
channels.push({ label: channels.length ? "Instagram" : "Message Margaux on Instagram", href: `https://ig.me/m/${cfg.instagram}` });

const nav = [
  ["projects/", "Projects"],
  ["apartment-sourcing-paris/", "Sourcing"],
  ["paris-apartment-renovation/", "Renovation"],
  ["paris-rental-investment/", "Rental investment"],
  ["paris-pied-a-terre/", "Pied-à-terre"],
  ["guide/buying-renovating-paris-apartment/", "Buyer's guide"],
  ["about/", "About"],
];
const footExtra = [
  ["glossary/", "Glossary"],
  ["paris-apartment-renovation-cost/", "Renovation cost per m²"],
  ["canadian-buyers-paris/", "Canadian buyers"],
  ["glossary/pied-a-terre/", "What is a pied-à-terre?"],
  ["glossary/haussmann-apartment/", "What is a Haussmann apartment?"],
  ["glossary/chambre-de-bonne/", "What is a chambre de bonne?"],
  ["glossary/copropriete-syndic/", "Copropriété and syndic"],
];
// Each page carries the date its content last changed (page.updated). The build date is
// never used: a lastmod that moves on every deploy teaches crawlers to ignore it.
const DEFAULT_UPDATED = "2026-11-11";
const updatedOf = (page) => page.updated || DEFAULT_UPDATED;

const ctx = (page) => {
  const depth = page.path ? page.path.split("/").filter(Boolean).length : 0;
  const rel = page.absolute ? `${siteUrl}/` : "../".repeat(depth);
  return {
    cfg, rel, photo,
    link: (p) => rel + p || "./",
    img: (name, alt, cls = "", eager = false) => {
      const f = photo(name);
      const s = sizes[name] ? ` width="${sizes[name].w}" height="${sizes[name].h}"` : "";
      return f ? `<img src="${rel}photos/${f}" alt="${esc(alt)}"${s}${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${cls ? ` class="${cls}"` : ""}>` : "";
    },
    buttons: () => `<div class="actions">${channels.map((c, i) => `<a class="btn${i ? " quiet" : ""}" href="${c.href}">${esc(c.label)}</a>`).join("")}</div>`,
  };
};

const org = {
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#studio`,
  name: cfg.studio,
  url: `${siteUrl}/`,
  description: "Interior architecture studio in Paris. Apartment sourcing, design, renovation management and furnishing for buyers based in the United States and Canada.",
  founder: { "@id": `${siteUrl}/about/#margaux` },
  foundingDate: String(cfg.foundingYear),
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Paris" },
  knowsLanguage: ["en", "fr"],
  sameAs: [`https://www.instagram.com/${cfg.instagram}/`],
  ...(cfg.email ? { email: cfg.email } : {}),
  ...(cfg.whatsapp ? { telephone: cfg.whatsapp } : {}),
};
const person = {
  "@type": "Person",
  "@id": `${siteUrl}/about/#margaux`,
  name: cfg.founder,
  jobTitle: "Interior architect",
  url: `${siteUrl}/about/`,
  worksFor: { "@id": `${siteUrl}/#studio` },
  workLocation: { "@type": "City", name: "Paris" },
  knowsLanguage: ["en", "fr"],
  sameAs: [cfg.linkedin, `https://www.instagram.com/${cfg.instagram}/`].filter(Boolean),
};

function render(page) {
  const c = ctx(page);
  const url = `${siteUrl}/${page.path}`;
  const body = page.body(c);
  const graph = [org, person, { "@type": "WebPage", "@id": url, url, name: page.title, description: page.description, isPartOf: { "@id": `${siteUrl}/#site` }, about: { "@id": `${siteUrl}/#studio` }, inLanguage: "en", dateModified: updatedOf(page), author: { "@id": `${siteUrl}/about/#margaux` } }];
  if (!page.path) graph.push({ "@type": "WebSite", "@id": `${siteUrl}/#site`, url: `${siteUrl}/`, name: cfg.studio, inLanguage: "en" });
  if (page.crumb) graph.push({ "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: cfg.studio, item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: page.crumb, item: url }] });
  if (page.faq) graph.push({ "@type": "FAQPage", mainEntity: page.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a.replace(/<[^>]+>/g, "") } })) });
  if (page.service) graph.push({ "@type": "Service", name: page.service, provider: { "@id": `${siteUrl}/#studio` }, areaServed: { "@type": "City", name: "Paris" }, url });
  const defined = page.terms || (page.term ? [page.term] : null);
  if (defined) graph.push({ "@type": "DefinedTermSet", "@id": `${siteUrl}/glossary/#terms`, name: "Paris property glossary", hasDefinedTerm: defined.map(([name, description]) => ({ "@type": "DefinedTerm", name, description, inDefinedTermSet: `${siteUrl}/glossary/#terms` })) });
  const og = photo("hero") ? `${siteUrl}/photos/${photo("hero")}` : null;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">${cfg.indexable ? "" : '\n<meta name="robots" content="noindex, nofollow">'}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(cfg.studio)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
${og ? `<meta property="og:image" content="${og}">\n<meta name="twitter:card" content="summary_large_image">` : `<meta name="twitter:card" content="summary">`}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${c.rel}styles.css">
<link rel="icon" href="${c.rel}favicon.svg" type="image/svg+xml">
<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <a class="logo" href="${c.link("")}" aria-label="${esc(cfg.studio)}, interior architecture, home"></a>
  <nav class="site-nav" aria-label="Main">
    ${nav.map(([p, l]) => `<a href="${c.link(p)}"${p === page.path ? ' aria-current="page"' : ""}>${l}</a>`).join("\n    ")}
  </nav>
</header>
<main id="main">
${body}
</main>
<footer class="site-foot" id="contact">
  <div class="foot-grid">
    <div>
      <h2>Tell Margaux what you want in Paris.</h2>
      <p>Budget, neighbourhood if you have one, and whether you plan to live in it or rent it. She replies in English.</p>
      ${c.buttons()}
    </div>
    <ul class="foot-links">
      ${[...nav, ...footExtra].map(([p, l]) => `<li><a href="${c.link(p)}">${l}</a></li>`).join("\n      ")}
      <li><a href="https://www.instagram.com/${cfg.instagram}/">Instagram @${cfg.instagram}</a></li>
    </ul>
  </div>
  <div class="legal">
    <span class="logo" role="img" aria-label="${esc(cfg.studio)}"></span>
    <span>Interior architecture, Paris</span>
    <span>General information, not legal or tax advice.</span>
  </div>
</footer>
</body>
</html>
`;
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const page of pages) {
  const dir = join(out, page.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), render(page));
}
copyFileSync(join(root, "src", "styles.css"), join(out, "styles.css"));
copyFileSync(join(root, "src", "logo.svg"), join(out, "logo.svg"));
writeFileSync(join(out, "favicon.svg"), readFileSync(join(root, "src", "monogram.svg"), "utf8").replaceAll("currentColor", "#92916B"));
if (photoFiles.length) {
  mkdirSync(join(out, "photos"), { recursive: true });
  for (const f of photoFiles) copyFileSync(join(photoDir, f), join(out, "photos", f));
}
writeFileSync(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${siteUrl}/${p.path}</loc><lastmod>${updatedOf(p)}</lastmod></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(out, "robots.txt"), !cfg.indexable ? `User-agent: *\nDisallow: /\n` : `User-agent: *\nAllow: /\n\n# AI search and assistant crawlers are welcome.\n${["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"].map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n")}\nSitemap: ${siteUrl}/sitemap.xml\n`);
writeFileSync(join(out, "llms.txt"), `# ${cfg.studio}\n\n> Interior architecture studio in Paris run by ${cfg.founder}. For buyers based in the United States and Canada: apartment sourcing, design, renovation management and furnishing, for a rental investment or a pied-à-terre.\n\n${pages.map((p) => `- [${p.title}](${siteUrl}/${p.path}): ${p.description}`).join("\n")}\n`);
writeFileSync(join(out, ".nojekyll"), "");
const host = new URL(siteUrl).hostname;
if (!host.endsWith("github.io")) writeFileSync(join(out, "CNAME"), host + "\n");
writeFileSync(join(out, "404.html"), render({ path: "404.html", absolute: true, title: `Page not found | ${cfg.studio}`, description: "This page does not exist.", body: () => `<section class="page-head"><h1>That page isn't here.</h1><p class="lede">Go back to the <a href="${siteUrl}/">studio page</a>.</p></section>` }).replace(/<link rel="canonical"[^>]*>(\n<meta name="robots"[^>]*>)?/, '<meta name="robots" content="noindex">'));
console.log(`Built ${pages.length} pages, ${photoFiles.length} photos -> docs/`);
