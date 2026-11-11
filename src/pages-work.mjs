// Projects page. Captions describe only what the photographs show.
const projects = [
  {
    id: "paris-9", name: "Apartment, Paris 9th", photos: 8, key: "saulnier",
    text: "An apartment in the 9th arrondissement, redesigned around its original timber posts. Openings were redrawn as arches, the bedroom and bathroom wear the same deep green to half height, and the storage is built in behind cane-fronted doors. Herringbone oak runs through every room.",
    alts: ["Living room with herringbone oak floor and tall windows", "Arched doorway opening onto a bathroom vanity", "Bedroom corner with a curved mirror against a green half-height wall", "Arched niche with bookshelves beside an exposed timber post", "Shower room with green tiling and a stone basin", "Powder room in terracotta zellige tile with a terrazzo basin", "Detail of cane-fronted cupboard doors with oak handles", "View through a doorway to the bedroom, cane wardrobe at the end"],
  },
  {
    id: "paris-6", name: "Studio with mezzanine, Paris 6th", photos: 4, key: "augustins",
    text: "A small apartment under old exposed beams in the 6th arrondissement. The bed went up onto a glazed mezzanine, the stair to reach it holds the television and the storage, and the living room got its floor back.",
    alts: ["Living room under exposed beams with a glazed mezzanine above", "Staircase built as storage, with a dining table by the window", "Mezzanine bed under painted beams", "Glass dining table and oak chairs in front of tall windows"],
  },
  {
    id: "top-floor-studio", name: "Top-floor studio", photos: 5, key: "studio",
    text: "A studio under the roof, laid out as a real one-room home: a black kitchen set against the old brick, a desk under the skylight, a sleeping corner with its own storage, and a compact tiled shower room.",
    alts: ["Kitchen island and living area with a view over the rooftops", "Sleeping corner with oak cupboards and botanical wallpaper", "Black kitchen against an exposed brick wall", "Shower room in olive tile with a dark vanity", "Desk built under a skylight"],
  },
  {
    id: "boulogne", name: "Apartment, Boulogne-Billancourt", photos: 4, key: "boulogne",
    text: "A black kitchen opened onto the living room, with a window seat built into its run. The marble fireplace and gilt mirror stayed. A desk was fitted into an arched niche.",
    alts: ["Living room with marble fireplace, gilt mirror and built-in media unit", "Black kitchen with a walnut counter and window seat", "Desk fitted into an arched niche", "Bathroom with a round mirror and oak vanity"],
  },
  {
    id: "colombes", name: "Apartment, Colombes", photos: 5, key: "colombes",
    text: "A full wall of library and cupboards in the living room, a blush kitchen on a cabochon floor, deep teal panelling down the corridor, and a marble vanity in the bathroom.",
    alts: ["Living room looking through glazed doors to the dining room", "Marble fireplace with an ornate gilt mirror", "Corridor with teal panelling to half height", "Blush pink kitchen on a black and white cabochon floor", "Bathroom with a dark marble vanity and brass wall lights"],
  },
];

const work = {
  path: "projects/",
  crumb: "Projects",
  title: "Paris apartment projects by Stouls Studio | Stouls Studio",
  description: "Apartments designed by interior architect Margaux Stouls in Paris and its western suburbs: arched openings, built-in joinery, cane, oak and colour.",
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Projects</p>
  <h1>Apartments designed by Margaux Stouls</h1>
  <p class="lede">Five homes in Paris and just outside it, photographed once the works were finished.</p>
  ${c.buttons()}
</section>
${projects.map((p) => `
<section class="band project" id="${p.id}">
  <div class="band-grid">
    <div class="project-intro"><h2>${p.name}</h2><p>${p.text}</p></div>
    <div class="masonry">
      ${Array.from({ length: p.photos }, (_, i) => c.img(`${p.key}-${i + 1}`, `${p.alts[i]}. ${p.name}, Stouls Studio`)).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n      ")}
    </div>
  </div>
</section>`).join("")}

<section class="band paper">
  <div class="band-grid prose">
    <h2>What these have in common</h2>
    <div>
      <ul>
        <li>Storage is built in, drawn to the centimetre for rooms that are never square.</li>
        <li>What the building already had is kept: beams, fireplaces, mouldings, old oak floors.</li>
        <li>Colour goes on joinery and in small rooms, where it costs little and changes most.</li>
        <li>Kitchens and bathrooms are redrawn first, because they decide where everything else can go.</li>
      </ul>
      <p><a href="${c.link("paris-apartment-renovation/")}">How a renovation is run</a>. More work is on <a href="https://www.instagram.com/${c.cfg.instagram}/">Instagram @${c.cfg.instagram}</a>.</p>
    </div>
  </div>
</section>`,
};

export const workPages = [work];
