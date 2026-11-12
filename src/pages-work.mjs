// Portfolio: one grid of projects, then one page per project with its facts and photographs.
// Built once per language from src/projects.mjs. No story text and no visible captions (Margaux's review):
// captions are kept as image alt text only.

import { projects } from "./projects.mjs";

const T = {
  en: {
    prefix: "", home: "Stouls Studio", portfolio: "Portfolio",
    indexTitle: "Stouls Studio portfolio, interior architecture in Paris",
    indexDesc: "Apartments, studios and houses designed by Stouls Studio in Paris and beyond, with custom furniture, plans and elevations. Interior architecture by Margaux Stouls.",
    h1: "Stouls Studio Portfolio",
    lede: "Places designed for the people who live in them.",
    yours: "Your project",
    yoursText: "Tell me what you are looking for in Paris, or send me the listing of an apartment you are considering.",
    more: "More work is on",
    type: "Property", location: "Location", surface: "Surface", use: "Use", work: "Work by the studio",
    size: (s) => `About ${s[0]} m² (${s[1].toLocaleString("en-US")} sq ft)`,
    cardSize: (s) => `${s[0]} m²`,
    desc: (p) => `${p.name}, ${p.place}, about ${p.size[0]} m². ${p.scope}. A project by Stouls Studio.`,
    extraDesc: (x) => `${x.name} by Stouls Studio, interior architecture in Paris: ${x.what}. Designed by Margaux Stouls for the apartments and houses in the portfolio.`,
    like: "A project like this one",
    likeText: "If this is close to what you have in mind for Paris, tell me. A link to this page and two lines about your budget and timing are enough to start.",
    prev: "Previous", next: "Next", sep: ": ", titleTail: " | Stouls Studio",
  },
  fr: {
    prefix: "fr/", home: "Stouls Studio", portfolio: "Portfolio",
    indexTitle: "Portfolio de Stouls Studio, architecture d'intérieur à Paris",
    indexDesc: "Appartements, studios et maisons conçus par Stouls Studio à Paris et ailleurs, mobilier sur mesure, plans et élévations. Architecture d'intérieur par Margaux Stouls.",
    h1: "Portfolio de Stouls Studio",
    lede: "Des lieux imaginés pour ceux qui les vivent.",
    yours: "Votre projet",
    yoursText: "Dites-moi ce que vous cherchez, ou envoyez-moi l'annonce d'un appartement que vous envisagez.",
    more: "D'autres réalisations sont sur",
    type: "Type de bien", location: "Lieu", surface: "Surface", use: "Usage", work: "Intervention du studio",
    size: (s) => `Environ ${s[0]} m²`,
    cardSize: (s) => `${s[0]} m²`,
    desc: (p) => `${p.name}, ${p.place}, environ ${p.size[0]} m². ${p.scope}. Un projet Stouls Studio.`,
    extraDesc: (x) => `${x.name} par Stouls Studio, architecture d'intérieur à Paris : ${x.what}. Dessiné par Margaux Stouls pour les appartements et maisons du portfolio.`,
    like: "Un projet comme celui-ci",
    likeText: "Si ce projet ressemble à ce que vous avez en tête, dites-le-moi. Un lien vers cette page et deux lignes sur votre budget et votre calendrier suffisent pour commencer.",
    prev: "Précédent", next: "Suivant", sep: " : ", titleTail: " | Stouls Studio Paris",
  },
};

// Two galleries shown after the projects: furniture made to measure, then drawings.
const extras = [
  {
    slug: "custom-furniture", name: "Custom Furniture", what: "furniture and joinery drawn for one room and made to measure",
    fr: { name: "Mobilier sur mesure", what: "des meubles et des menuiseries dessinés pour une pièce et fabriqués sur mesure" },
    photos: [
      ["x-fur9", "Oak sideboard with shelves on turned posts", "Buffet en chêne avec étagères sur poteaux tournés"],
      ["x-fur10", "Full-height shelving on two oak posts above a rounded cabinet", "Étagères toute hauteur sur deux poteaux en chêne, au-dessus d'un meuble arrondi"],
      ["x-fur11", "Cream shelves carried by an oak post", "Étagères crème portées par un poteau en chêne"],
      ["x-fur12", "Detail of the rounded oak top and the turned post", "Détail du plateau arrondi en chêne et du poteau tourné"],
      ["x-fur13", "The shelves seen from the side", "Les étagères vues de côté"],
      ["x-fur5", "Rounded oak cabinet under the television, beside the fireplace", "Meuble arrondi en chêne sous la télévision, à côté de la cheminée"],
      ["x-fur8", "Front of the rounded oak cabinet", "Façade du meuble arrondi en chêne"],
      ["x-fur6", "Brass knobs on the oak cabinet doors", "Boutons en laiton sur les portes du meuble en chêne"],
      ["x-fur7", "Two round knobs on the oak doors", "Deux boutons ronds sur les portes en chêne"],
      ["x-fur19", "Half-round dining table in stained oak, with its chairs", "Table demi-lune en chêne teinté et ses chaises"],
      ["x-fur17", "Stained oak wall panel behind the table, with a pendant light", "Panneau mural en chêne teinté derrière la table, avec une suspension"],
      ["x-fur15", "The oak table and wall panel seen from the hall", "La table et le panneau mural en chêne vus depuis l'entrée"],
      ["x-fur14", "Detail of the table edge and an upholstered chair", "Détail du chant de la table et d'une chaise tapissée"],
      ["x-fur16", "Cylindrical leg of the oak table", "Pied cylindrique de la table en chêne"],
      ["x-fur18", "Pendant light in front of the oak panel", "Suspension devant le panneau en chêne"],
      ["x-fur20", "The table top meeting the oak wall panel", "Le plateau de la table contre le panneau mural en chêne"],
      ["x-fur21", "The table and its wall panel, by the window", "La table et son panneau mural, près de la fenêtre"],
      ["x-fur1", "Child's bedroom with sage wardrobes around an alcove and a fluted oak headboard", "Chambre d'enfant, penderies vert sauge autour d'une alcôve et tête de lit en chêne cannelé"],
      ["x-fur4", "Arched alcove lined with floral wallpaper above a fluted oak shelf", "Alcôve en arche tapissée de papier peint fleuri, au-dessus d'une tablette en chêne cannelé"],
      ["x-fur2", "Cane-fronted drawers with round oak pulls", "Tiroirs à façade cannée et poignées rondes en chêne"],
      ["x-fur3", "Scalloped oak rail above cream cupboards", "Frise festonnée en chêne au-dessus de placards crème"],
    ],
  },
  {
    slug: "plans-and-elevations", name: "Plans and Elevations", wide: true, what: "floor plans, dimensioned elevations and 3D visualisations drawn before the works",
    fr: { name: "Plans et élévations", what: "plans, élévations cotées et visualisations 3D dessinés avant les travaux" },
    photos: [
      ["x-plan4", "Floor plan of a studio with kitchen, living room, shower room and sleeping area", "Plan d'un studio avec cuisine, pièce de vie, salle d'eau et coin nuit"],
      ["x-plan5", "Dimensioned elevations of a WC and a children's bathroom in striped tiles", "Élévations cotées d'un WC et d'une salle de bain enfants en carrelage rayé"],
      ["x-plan2", "Floor plan of an apartment with two bedrooms and two terraces", "Plan d'un appartement avec deux chambres et deux terrasses"],
      ["x-plan3", "Electrical plan of a large apartment", "Plan électrique d'un grand appartement"],
      ["x-plan1", "Dimensioned elevations of a kitchen in oak and terracotta tiles", "Élévations cotées d'une cuisine en chêne et carreaux de terre cuite"],
      ["drawing-3", "Dimensioned elevation of a kitchen wall with joinery notes", "Élévation cotée d'un mur de cuisine avec notes de menuiserie"],
      ["drawing-4", "Dimensioned elevations of a kitchen island", "Élévations cotées d'un îlot de cuisine"],
      ["render-5", "3D visualisation of a walnut kitchen with an island", "Visualisation 3D d'une cuisine en noyer avec îlot"],
      ["render-6", "3D visualisation of a marble bathroom", "Visualisation 3D d'une salle de bain en marbre"],
      ["render-7", "3D visualisation of a dressing room", "Visualisation 3D d'un dressing"],
    ],
  },
];

function make(lang) {
  const t = T[lang];
  const other = lang === "en" ? "fr/" : "";
  const cap = (ph) => (lang === "fr" ? ph[2] : ph[1]);
  const loc = (p) => (lang === "fr" ? { ...p, ...p.fr } : p);
  const list = [...projects.map(loc), ...extras.map((x) => ({ ...loc(x), extra: true }))];
  const figure = (c, ph) => {
    const img = c.img(ph[0], `${cap(ph)}. Stouls Studio`);
    return img ? `<figure>${img}</figure>` : "";
  };
  const url = (p) => `${t.prefix}portfolio/${p.slug}/`;
  const fit = (s) => (s.length <= 198 ? s : `${s.slice(0, 195).replace(/\s+\S*$/, "")}...`);

  const index = {
    lang,
    path: `${t.prefix}portfolio/`,
    alt: `${other}portfolio/`,
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
    ${list.map((p) => `<li><a href="${c.link(url(p))}">${c.img(p.photos[0][0], `${cap(p.photos[0])}. ${p.name}, Stouls Studio`, p.wide ? "plan" : "")}<h3>${p.name}</h3>${p.extra ? "" : `<span class="card-tag">${p.place}, ${t.cardSize(p.size)}</span>`}</a></li>`).join("\n    ")}
  </ul>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>${t.yours}</h2>
    <div>
      <p>${t.yoursText}</p>
      ${c.buttons()}
      <p style="margin-top:1.5rem">${t.more} <a href="https://www.instagram.com/${c.cfg.instagram}/">Instagram @${c.cfg.instagram}</a>.</p>
    </div>
  </div>
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
    return {
      lang,
      path: url(p),
      alt: `${other}portfolio/${p.slug}/`,
      crumb: p.name,
      parent: [`${t.prefix}portfolio/`, t.portfolio],
      title: `${p.name}${t.titleTail}`,
      description: fit(p.extra ? t.extraDesc(p) : t.desc(p)),
      body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(t.prefix)}">${t.home}</a> / <a href="${c.link(`${t.prefix}portfolio/`)}">${t.portfolio}</a> / ${p.name}</p>
  <h1>${p.name}</h1>
</section>

<section class="band project${p.extra ? " solo" : ""}">
  <div class="band-grid">
    <div class="project-intro">${facts}</div>
    <div class="masonry${p.wide ? " wide" : ""}">
      ${p.photos.map((ph) => figure(c, ph)).join("\n      ")}
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>${t.like}</h2>
    <div>
      <p>${t.likeText}</p>
      ${c.buttons()}
      <p class="pager"><a href="${c.link(url(prev))}">${t.prev}${t.sep}${prev.name}</a><a href="${c.link(url(next))}">${t.next}${t.sep}${next.name}</a></p>
    </div>
  </div>
</section>`,
    };
  });

  return [index, ...projectPages];
}

export const workPages = make("en");
export const workPagesFr = make("fr");
