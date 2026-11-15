// Portfolio: one grid of projects, then one page per project with its facts and photographs.
// Built once per language from src/projects.mjs. No story text and no visible captions (Margaux's review):
// captions are kept as image alt text only. Photographs open full screen on click (src/zoom.js).

import { readFileSync } from "node:fs";
import { projects } from "./projects.mjs";

const sizes = JSON.parse(readFileSync(new URL("../photos/manifest.json", import.meta.url), "utf8"));

const T = {
  en: {
    prefix: "", home: "Stouls Studio", portfolio: "Portfolio",
    indexTitle: "Stouls Studio portfolio, interior architecture in Paris",
    indexDesc: "Apartments, studios and houses designed by Stouls Studio in Paris and beyond, with custom furniture. Interior architecture and design by Margaux Stouls.",
    h1: "Stouls Studio Portfolio",
    lede: "Places designed for the people who live in them.",
    more: "More work is on",
    type: "Property", location: "Location", surface: "Size", use: "Use", work: "Work by the studio",
    size: (s) => `About ${s[0]} m² (${s[1].toLocaleString("en-US")} sq ft)`,
    cardSize: (s) => `${s[0]} m² (${s[1].toLocaleString("en-US")} sq ft)`,
    desc: (p, where) => `${where}, about ${p.size[0]} m² (${p.size[1].toLocaleString("en-US")} sq ft). ${p.scope}. A project by Stouls Studio.`,
    extraDesc: (x) => `${x.name} by Stouls Studio, interior architecture and design in Paris: ${x.what}.`,
    prev: "Previous", next: "Next", all: "All projects", pagerLabel: "Other projects", sep: ": ", titleTail: " | Stouls Studio",
  },
  fr: {
    prefix: "fr/", home: "Stouls Studio", portfolio: "Portfolio",
    indexTitle: "Portfolio de Stouls Studio, architecture d'intérieur à Paris",
    indexDesc: "Appartements, studios et maisons conçus par Stouls Studio à Paris et ailleurs, avec du mobilier dessiné sur mesure. Architecture d'intérieur et design par Margaux Stouls.",
    h1: "Portfolio de Stouls Studio",
    lede: "Des lieux imaginés pour ceux qui les habitent.",
    more: "D'autres réalisations sont sur",
    type: "Type de bien", location: "Lieu", surface: "Surface", use: "Usage", work: "Intervention du studio",
    size: (s) => `Environ ${s[0]} m²`,
    cardSize: (s) => `${s[0]} m²`,
    desc: (p, where) => `${where}, environ ${p.size[0]} m². ${p.scope}. Un projet Stouls Studio.`,
    extraDesc: (x) => `${x.name} par Stouls Studio, architecture d'intérieur et design à Paris : ${x.what}.`,
    prev: "Précédent", next: "Suivant", all: "Tous les projets", pagerLabel: "Autres projets", sep: " : ", titleTail: " | Stouls Studio Paris",
  },
};

// One gallery shown after the projects: custom furniture.
const extras = [
  {
    slug: "custom-furniture", name: "Custom Furniture", what: "furniture and millwork drawn for one room and built to fit it",
    fr: { slug: "mobilier-sur-mesure", name: "Mobilier sur mesure", what: "des meubles et des menuiseries dessinés pour une pièce et fabriqués sur mesure" },
    photos: [
      ["x-fur10", "Full-height shelving on two oak posts above a rounded cabinet", "Étagères toute hauteur sur deux poteaux en chêne, au-dessus d'un meuble arrondi"],
      ["x-fur11", "Cream shelves carried by an oak post", "Étagères crème portées par un poteau en chêne"],
      ["x-fur12", "Detail of the rounded oak top and the turned post", "Détail du plateau arrondi en chêne et du poteau tourné"],
      ["x-fur8", "Front of the rounded oak cabinet", "Façade du meuble arrondi en chêne"],
      ["x-fur19", "Half-round dining table in stained oak, with its chairs", "Table demi-lune en chêne teinté et ses chaises"],
      ["x-fur14", "Detail of the table edge and an upholstered chair", "Détail du chant de la table et d'une chaise tapissée"],
      ["x-fur1", "Child's bedroom with sage closets around an alcove and a fluted oak headboard", "Chambre d'enfant, penderies vert sauge autour d'une alcôve et tête de lit en chêne cannelé"],
      ["x-fur4", "Arched alcove lined with floral wallpaper above a fluted oak shelf", "Alcôve en arche tapissée de papier peint fleuri, au-dessus d'une tablette en chêne cannelé"],
      ["x-fur2", "Cane-fronted drawers with round oak pulls", "Tiroirs à façade cannée et poignées rondes en chêne"],
      ["x-fur3", "Scalloped oak rail above cream cabinets", "Frise festonnée en chêne au-dessus de placards crème"],
    ],
  },
];

// Address of a project page in one language. The French pages have French addresses.
export const projectPath = (p, lang) => (lang === "fr" ? `fr/portfolio/${p.fr.slug}/` : `portfolio/${p.slug}/`);
export const allWork = [...projects, ...extras];

// Photographs are laid out in rows of equal height that fill the width, so the gallery ends flush on both sides.
// Each row takes photographs until their combined width-to-height ratio reaches `target`.
function rowsOf(photos, target) {
  const ar = (ph) => (sizes[ph[0]] ? sizes[ph[0]].w / sizes[ph[0]].h : 0.75);
  const rows = [];
  let row = [], sum = 0;
  for (const ph of photos) {
    // Close the row before this photograph if adding it would take the row further from the target.
    if (row.length && Math.abs(sum - target) < Math.abs(sum + ar(ph) - target)) { rows.push(row); row = []; sum = 0; }
    row.push(ph); sum += ar(ph);
  }
  if (row.length) {
    if (sum < target * 0.6 && rows.length) rows[rows.length - 1].push(...row);
    else rows.push(row);
  }
  return rows.map((r) => r.map((ph) => [ph, ar(ph)]));
}

// A hyphenated place name stays on one line in a title when the screen is wide enough.
const whole = (name) => name.replace(/\S+-\S+/g, (m) => `<span class="nb">${m}</span>`);

function make(lang) {
  const t = T[lang];
  const otherLang = lang === "en" ? "fr" : "en";
  const cap = (ph) => (lang === "fr" ? ph[2] : ph[1]);
  const loc = (p) => ({ ...(lang === "fr" ? { ...p, ...p.fr } : p), path: projectPath(p, lang), altPath: projectPath(p, otherLang) });
  const list = [...projects.map(loc), ...extras.map((x) => ({ ...loc(x), extra: true }))];
  const fit = (s) => (s.length <= 198 ? s : `${s.slice(0, 195).replace(/\s+\S*$/, "")}...`);
  // "Bagnolet Apartment, Bagnolet, east of Paris" said the town twice: the place is not repeated when the name has it.
  const where = (p) => {
    const first = p.place.split(/[,(]/)[0].trim();
    if (!p.name.includes(first)) return `${p.name}, ${p.place}`;
    const rest = p.place.slice(first.length).replace(/^[,\s]+/, "");
    return rest.startsWith("(") ? `${p.name} ${rest}` : `${p.name}, ${rest}`;
  };

  const index = {
    lang,
    path: `${t.prefix}portfolio/`,
    alt: `${lang === "en" ? "fr/" : ""}portfolio/`,
    crumb: t.portfolio,
    title: t.indexTitle,
    description: t.indexDesc,
    body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(t.prefix)}">${t.home}</a> / ${t.portfolio}</p>
  <h1>${t.h1}</h1>
  <p class="lede">${t.lede}</p>
</section>

<section class="band cards-band">
  <ul class="cards">
    ${list.map((p, i) => `<li><a href="${c.link(p.path)}">${c.img(p.photos[0][0], `${cap(p.photos[0])}. ${p.name}, Stouls Studio`, "", i < 3, "(max-width: 820px) 50vw, 33vw")}<h2>${p.name}</h2>${p.extra ? "" : `<span class="card-tag">${p.place}, ${t.cardSize(p.size)}</span>`}</a></li>`).join("\n    ")}
  </ul>
  <p class="cards-more">${t.more} <a href="https://www.instagram.com/${c.cfg.instagram}/">Instagram @${c.cfg.instagram}</a>.</p>
</section>`,
  };

  const projectPages = list.map((p, i) => {
    const prev = list[(i + list.length - 1) % list.length];
    const next = list[(i + 1) % list.length];
    const facts = p.extra ? "" : `
      <dl class="facts">
        <dt>${t.type}</dt><dd>${p.type}</dd>
        <dt>${t.location}</dt><dd>${p.place}</dd>
        <dt>${t.surface}</dt><dd>${t.size(p.size)}</dd>${p.use ? `
        <dt>${t.use}</dt><dd>${p.use}</dd>` : ""}
        <dt>${t.work}</dt><dd>${p.scope}</dd>
      </dl>`;
    const rows = rowsOf(p.photos, p.extra ? 2.9 : 1.75);
    return {
      lang,
      path: p.path,
      alt: p.altPath,
      crumb: p.name,
      parent: [`${t.prefix}portfolio/`, t.portfolio],
      title: `${p.name}${t.titleTail}`,
      description: fit(p.extra ? t.extraDesc(p) : t.desc(p, where(p))),
      og: p.photos[0][0],
      zoom: true,
      body: (c) => `
<section class="page-head project-head">
  <p class="crumbs"><a href="${c.link(t.prefix)}">${t.home}</a> / <a href="${c.link(`${t.prefix}portfolio/`)}">${t.portfolio}</a> / ${p.name}</p>
  <h1>${whole(p.name)}</h1>
</section>

<section class="band project${p.extra ? " solo" : ""}">
  <div class="band-grid">
    <div class="project-intro">${facts}</div>
    <div class="photo-rows zoomable">
      ${rows.map((r, n) => `<div class="photo-row">${r.map(([ph, ar]) => `<figure style="flex:${ar.toFixed(3)}">${c.img(ph[0], `${cap(ph)}. Stouls Studio`, "", n === 0, `(max-width: 820px) 100vw, ${Math.ceil((ar / r.reduce((s, x) => s + x[1], 0)) * (p.extra ? 100 : 75))}vw`)}</figure>`).join("")}</div>`).join("\n      ")}
    </div>
  </div>
  <nav class="pager" aria-label="${t.pagerLabel}"><a href="${c.link(prev.path)}"><span>${t.prev}</span>${prev.name}</a><a class="all" href="${c.link(`${t.prefix}portfolio/`)}">${t.all}</a><a href="${c.link(next.path)}"><span>${t.next}</span>${next.name}</a></nav>
</section>`,
    };
  });

  return [index, ...projectPages];
}

export const workPages = make("en");
export const workPagesFr = make("fr");
