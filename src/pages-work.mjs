// Portfolio: an index of projects, one page per project, then three skills shown apart.
// Built once per language from src/projects.mjs. The selection follows Margaux's own portfolio.

import { projects } from "./projects.mjs";

const T = {
  en: {
    prefix: "", home: "Stouls Studio", portfolio: "Portfolio",
    indexTitle: "Portfolio of interior architect Margaux Stouls | Stouls Studio",
    indexDesc: "Full and partial renovations by Stouls Studio in Paris and beyond: apartments, rental studios and second homes, plus custom furniture, 3D visualisations and drawings.",
    h1: "Portfolio of Margaux Stouls",
    lede: (n) => `${n} projects, each on its own page: full renovations first, then partial renovations, then furniture made to measure.`,
    kinds: [["full", "Full renovations"], ["partial", "Partial renovations"]],
    yours: "Your project",
    yoursText: "Tell Margaux what you are looking for in Paris, or send the listing of an apartment you are considering.",
    more: "More work is on",
    type: "Type", location: "Location", surface: "Surface", work: "Work by the studio",
    size: (s) => s[2] || `About ${s[0]} m² (${s[1].toLocaleString("en-US")} sq ft)`,
    cardSize: (s) => (s[2] ? s[2] : `${s[0]} m²`),
    like: "A project like this one",
    likeText: "If this is close to what you have in mind for Paris, tell Margaux. A link to this page and two lines about your budget and timing are enough to start.",
    prev: "Previous", next: "Next", sep: ": ", titleTail: " | Stouls Studio",
    descTail: "Designed by interior architect Margaux Stouls.",
    crafts: [
      { id: "custom-furniture", name: "Custom-made furniture", text: "Furniture drawn for one room and made by cabinetmakers. Here, a sideboard and shelves on turned oak posts, and a round dining table in stained oak." },
      { id: "3d-visualisations", name: "3D visualisations", text: "Before work starts, the rooms are modelled in three dimensions. A client abroad sees the result on screen and can change it while changing still costs nothing." },
      { id: "technical-drawings", name: "Technical drawings", text: "The drawings contractors build from. Here, dimensioned elevations of a kitchen wall and its island, with every material and fitting noted." },
    ],
  },
  fr: {
    prefix: "fr/", home: "Stouls Studio", portfolio: "Portfolio",
    indexTitle: "Portfolio de Margaux Stouls, architecte d'intérieur",
    indexDesc: "Rénovations complètes et partielles de Stouls Studio à Paris et ailleurs : appartements, studios locatifs, résidences secondaires, mobilier sur mesure, 3D et plans.",
    h1: "Portfolio de Margaux Stouls",
    lede: (n) => `${n} projets, chacun sur sa page : les rénovations complètes d'abord, puis les rénovations partielles, puis le mobilier sur mesure.`,
    kinds: [["full", "Rénovations complètes"], ["partial", "Rénovations partielles"]],
    yours: "Votre projet",
    yoursText: "Dites à Margaux ce que vous cherchez, ou envoyez-lui l'annonce d'un appartement que vous envisagez.",
    more: "D'autres réalisations sont sur",
    type: "Type", location: "Lieu", surface: "Surface", work: "Intervention du studio",
    size: (s) => (s[3] ? s[3] : `Environ ${s[0]} m²`),
    cardSize: (s) => (s[3] ? s[3] : `${s[0]} m²`),
    like: "Un projet comme celui-ci",
    likeText: "Si ce projet ressemble à ce que vous avez en tête, dites-le à Margaux. Un lien vers cette page et deux lignes sur votre budget et votre calendrier suffisent pour commencer.",
    prev: "Précédent", next: "Suivant", sep: " : ", titleTail: " | Stouls Studio Paris",
    descTail: "Un projet de l'architecte d'intérieur Margaux Stouls.",
    crafts: [
      { id: "mobilier-sur-mesure", name: "Mobilier sur mesure", text: "Des meubles dessinés pour une pièce et fabriqués par des ébénistes. Ici, un buffet et ses étagères sur poteaux en chêne tourné, et une table ronde en chêne teinté." },
      { id: "visualisations-3d", name: "Visualisations 3D", text: "Avant le début des travaux, les pièces sont modélisées en trois dimensions. Le client voit le résultat à l'écran et peut le modifier tant que changer d'avis ne coûte rien." },
      { id: "plans-techniques", name: "Plans techniques", text: "Les plans à partir desquels les artisans construisent. Ici, les élévations cotées d'un mur de cuisine et de son îlot, avec chaque matériau et chaque équipement indiqué." },
    ],
  },
};

const craftPhotos = [
  [["furniture-8", "Oak sideboard with shelves on turned posts", "Buffet en chêne avec étagères sur poteaux tournés"], ["furniture-9", "Detail of the rounded oak top and turned post", "Détail du plateau arrondi en chêne et du poteau tourné"], ["furniture-10", "Round dining table in stained oak", "Table ronde en chêne teinté"], ["furniture-11", "Detail of the table edge and an upholstered chair", "Détail du chant de la table et d'une chaise tapissée"]],
  [["render-5", "3D visualisation of a walnut kitchen with an island", "Visualisation 3D d'une cuisine en noyer avec îlot"], ["render-6", "3D visualisation of a marble bathroom", "Visualisation 3D d'une salle de bain en marbre"], ["render-7", "3D visualisation of a dressing room", "Visualisation 3D d'un dressing"]],
  [["drawing-3", "Dimensioned elevation of a kitchen wall with joinery notes", "Élévation cotée d'un mur de cuisine avec notes de menuiserie"], ["drawing-4", "Dimensioned elevations of a kitchen island", "Élévations cotées d'un îlot de cuisine"]],
];

function make(lang) {
  const t = T[lang];
  const other = lang === "en" ? "fr/" : "";
  const cap = (ph) => (lang === "fr" ? ph[2] : ph[1]);
  const loc = (p) => (lang === "fr" ? { ...p, ...p.fr } : p);
  const list = projects.map(loc);
  const figure = (c, ph) => {
    const img = c.img(ph[0], `${cap(ph)}. Stouls Studio`);
    return img ? `<figure>${img}<figcaption>${cap(ph)}</figcaption></figure>` : "";
  };
  const url = (p) => `${t.prefix}portfolio/${p.slug}/`;

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
  <p class="lede">${t.lede(list.length)}</p>
</section>

${t.kinds.map(([kind, label]) => `
<section class="band cards-band" id="${kind}-renovations">
  <h2>${label}</h2>
  <ul class="cards">
    ${list.filter((p) => p.kind === kind).map((p) => `<li><a href="${c.link(url(p))}">${c.img(p.photos[0][0], `${cap(p.photos[0])}. ${p.name}, Stouls Studio`)}<span class="card-tag">${[p.tag, p.size ? t.cardSize(p.size) : null].filter(Boolean).join(", ")}</span><h3>${p.name}</h3></a></li>`).join("\n    ")}
  </ul>
</section>`).join("")}
${t.crafts.map((g, i) => `
<section class="band${i % 2 ? "" : " paper"} project" id="${g.id}">
  <div class="band-grid">
    <div class="project-intro"><h2>${g.name}</h2><p>${g.text}</p></div>
    <div class="masonry${i === 2 ? " wide" : ""}">
      ${craftPhotos[i].map((ph) => figure(c, ph)).join("\n      ")}
    </div>
  </div>
</section>`).join("")}

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
    return {
      lang,
      path: url(p),
      alt: `${other}portfolio/${p.slug}/`,
      crumb: p.name,
      parent: [`${t.prefix}portfolio/`, t.portfolio],
      title: `${p.name}${t.titleTail}`,
      description: `${p.intro} ${p.place}. ${t.descTail}`.slice(0, 198),
      body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(t.prefix)}">${t.home}</a> / <a href="${c.link(`${t.prefix}portfolio/`)}">${t.portfolio}</a> / ${p.name}</p>
  <h1>${p.name}</h1>
  <p class="lede">${p.intro}</p>
</section>

<section class="band project">
  <div class="band-grid">
    <div class="project-intro">
      <dl class="facts">
        <dt>${t.type}</dt><dd>${p.tag}</dd>
        <dt>${t.location}</dt><dd>${p.place}</dd>${p.size ? `
        <dt>${t.surface}</dt><dd>${t.size(p.size)}</dd>` : ""}
        <dt>${t.work}</dt><dd>${p.scope}</dd>
      </dl>
      ${p.text.map((x) => `<p>${x}</p>`).join("\n      ")}
    </div>
    <div class="masonry">
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
