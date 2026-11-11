// Portfolio: an index of projects, one page per project, then three skills shown apart.
// The selection follows Margaux's own portfolio. Texts and captions describe only what
// the photographs show; no surface, budget or duration is stated until she supplies them.

import { projects } from "./projects.mjs";

const crafts = [
  {
    id: "custom-furniture", name: "Custom-made furniture",
    text: "Furniture drawn for one room and made by cabinetmakers. Here, a sideboard and shelves on turned oak posts, and a round dining table in stained oak.",
    photos: [["furniture-8", "Oak sideboard with shelves on turned posts"], ["furniture-9", "Detail of the rounded oak top and turned post"], ["furniture-10", "Round dining table in stained oak"], ["furniture-11", "Detail of the table edge and an upholstered chair"]],
  },
  {
    id: "3d-visualisations", name: "3D visualisations",
    text: "Before work starts, the rooms are modelled in three dimensions. A client abroad sees the result on screen and can change it while changing still costs nothing.",
    photos: [["render-5", "3D visualisation of a walnut kitchen with an island"], ["render-6", "3D visualisation of a marble bathroom"], ["render-7", "3D visualisation of a dressing room"]],
  },
  {
    id: "technical-drawings", name: "Technical drawings", wide: true,
    text: "The drawings contractors build from. Here, dimensioned elevations of a kitchen wall and its island, with every material and fitting noted.",
    photos: [["drawing-3", "Dimensioned elevation of a kitchen wall with joinery notes"], ["drawing-4", "Dimensioned elevations of a kitchen island"]],
  },
];

const figure = (c, [name, caption]) => {
  const img = c.img(name, `${caption}. Stouls Studio`);
  return img ? `<figure>${img}<figcaption>${caption}</figcaption></figure>` : "";
};

const index = {
  path: "portfolio/",
  crumb: "Portfolio",
  title: "Portfolio of interior architect Margaux Stouls | Stouls Studio",
  description: "Full and partial renovations by Stouls Studio in Paris and beyond: apartments, rental studios and second homes, plus custom furniture, 3D visualisations and drawings.",
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Portfolio</p>
  <h1>Portfolio of Margaux Stouls</h1>
  <p class="lede">${projects.length} projects, each on its own page: full renovations first, then partial renovations, then furniture made to measure.</p>
</section>

${[["full", "Full renovations"], ["partial", "Partial renovations"]].map(([kind, label]) => `
<section class="band cards-band" id="${kind}-renovations">
  <h2>${label}</h2>
  <ul class="cards">
    ${projects.filter((p) => p.kind === kind).map((p) => `<li><a href="${c.link(`portfolio/${p.slug}/`)}">${c.img(p.photos[0][0], `${p.photos[0][1]}. ${p.name}, Stouls Studio`)}<span class="card-tag">${[p.tag, p.size ? (p.size[2] || `${p.size[0]} m²`) : null].filter(Boolean).join(", ")}</span><h3>${p.name}</h3></a></li>`).join("\n    ")}
  </ul>
</section>`).join("")}
${crafts.map((g, i) => `
<section class="band${i % 2 ? "" : " paper"} project" id="${g.id}">
  <div class="band-grid">
    <div class="project-intro"><h2>${g.name}</h2><p>${g.text}</p></div>
    <div class="masonry${g.wide ? " wide" : ""}">
      ${g.photos.map((ph) => figure(c, ph)).join("\n      ")}
    </div>
  </div>
</section>`).join("")}

<section class="band">
  <div class="band-grid prose">
    <h2>Your project</h2>
    <div>
      <p>Tell Margaux what you are looking for in Paris, or send the listing of an apartment you are considering.</p>
      ${c.buttons()}
      <p style="margin-top:1.5rem">More work is on <a href="https://www.instagram.com/${c.cfg.instagram}/">Instagram @${c.cfg.instagram}</a>.</p>
    </div>
  </div>
</section>`,
};

const projectPages = projects.map((p, i) => {
  const prev = projects[(i + projects.length - 1) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return {
    path: `portfolio/${p.slug}/`,
    crumb: p.name,
    parent: ["portfolio/", "Portfolio"],
    title: `${p.name} | Stouls Studio`,
    description: `${p.intro} ${p.place}. Designed by interior architect Margaux Stouls.`.slice(0, 198),
    body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / <a href="${c.link("portfolio/")}">Portfolio</a> / ${p.name}</p>
  <h1>${p.name}</h1>
  <p class="lede">${p.intro}</p>
</section>

<section class="band project">
  <div class="band-grid">
    <div class="project-intro">
      <dl class="facts">
        <dt>Type</dt><dd>${p.tag}</dd>
        <dt>Location</dt><dd>${p.place}</dd>${p.size ? `
        <dt>Surface</dt><dd>${p.size[2] || `About ${p.size[0]} m² (${p.size[1].toLocaleString("en-US")} sq ft)`}</dd>` : ""}
        <dt>Work by the studio</dt><dd>${p.scope}</dd>
      </dl>
      ${p.text.map((t) => `<p>${t}</p>`).join("\n      ")}
    </div>
    <div class="masonry">
      ${p.photos.map((ph) => figure(c, ph)).join("\n      ")}
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>A project like this one</h2>
    <div>
      <p>If this is close to what you have in mind for Paris, tell Margaux. A link to this page and two lines about your budget and timing are enough to start.</p>
      ${c.buttons()}
      <p class="pager"><a href="${c.link(`portfolio/${prev.slug}/`)}">Previous: ${prev.name}</a><a href="${c.link(`portfolio/${next.slug}/`)}">Next: ${next.name}</a></p>
    </div>
  </div>
</section>`,
  };
});

export const workPages = [index, ...projectPages];
