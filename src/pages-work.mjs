// Portfolio: an index of projects, one page per project, then three skills shown apart.
// The selection follows Margaux's own portfolio. Texts and captions describe only what
// the photographs show; no surface, budget or duration is stated until she supplies them.

const projects = [
  {
    slug: "apartment-paris-9", name: "Apartment, Paris 9th", tag: "Main residence", place: "Paris, 9th arrondissement",
    scope: "Layout, kitchen, bathroom, powder room, built-in joinery, furnishing",
    intro: "An apartment redesigned around the timber posts that hold up the building.",
    text: [
      "The old posts and beams were left in view. The kitchen was built around them, in pale cabinets and stone, with a counter that turns into the dining side of the room. Herringbone oak runs through the living room, the kitchen and the bedroom, so the apartment reads as one space.",
      "Openings were redrawn as arches: the doorway to the bathroom and a bookshelf niche in the living room. The bedroom and the shower room share a deep green that stops at half height, and the wardrobes sit behind cane-fronted doors with oak handles. The powder room is the one loud room, in terracotta zellige with a terrazzo basin.",
    ],
    photos: [
      ["main-14", "Living room with a herringbone oak floor and tall windows"],
      ["x-sau25", "The living room seen from the kitchen, with the original timber posts"],
      ["main-10", "Kitchen built around the timber posts"],
      ["main-12", "Arched doorway opening onto the bathroom vanity"],
      ["main-13", "Shower room with green tiling and a stone basin"],
      ["main-11", "Bedroom with a green headboard wall"],
      ["project-1", "Curved mirror against the bedroom's green half-height wall"],
      ["main-15", "Arched bookshelf niche beside a timber post"],
      ["x-sau14", "Powder room in terracotta zellige with a terrazzo basin"],
      ["furniture-4", "Cane-fronted wardrobe doors with oak handles"],
      ["x-sau3", "View through to the bedroom, cane wardrobe at the end"],
    ],
  },
  {
    slug: "mezzanine-apartment-montparnasse", name: "Apartment with mezzanine, Montparnasse", tag: "Rental property", place: "Paris, Montparnasse",
    scope: "Layout, library wall, kitchen, built-in storage, desk, furnishing",
    intro: "A double-height room turned into a complete apartment, with the bed on a mezzanine.",
    text: [
      "The tall wall beside the window became a library in oak, built around the television and running down to a bench with storage underneath. The bench continues along the wall and doubles as seating, so the room needs very little loose furniture.",
      "Under the mezzanine, one run of white cupboards holds the kitchen, a niche for the coffee corner and a wine fridge. A second run frames an oak desk. The handles are small tabs, and nothing stands proud of the wall. From the mezzanine the whole room is visible at once, which is why every surface was kept quiet.",
    ],
    photos: [
      ["x-ali4", "Living room with the library wall, and the mezzanine above the kitchen"],
      ["x-ali2", "Oak library around the television, with a window bench"],
      ["x-ali12", "The living room seen from the mezzanine"],
      ["x-ali8", "Oak desk set into a wall of white cupboards"],
      ["x-ali6", "Tall cupboards with a niche for the coffee corner and a wine fridge"],
      ["x-ali10", "Detail of the oak bench with storage below"],
    ],
  },
  {
    slug: "top-floor-studio", name: "Top-floor studio", tag: "Rental property", place: "Paris",
    scope: "Layout, kitchen, shower room, built-in storage, furnishing",
    intro: "A studio under the roof, laid out as a real one-room home for a tenant who stays for months.",
    text: [
      "The kitchen is a single black run set against the old brick wall, with an island that serves as worktop, table and divider. The window beside it opens onto the rooftops. A skylight lights the far end of the room, where a desk and a chest of drawers were built under the slope of the roof.",
      "The sleeping corner has its own tall oak cupboards and a panel of botanical wallpaper that runs up behind the bed. The shower room is compact and fully tiled in olive, with a dark vanity and the water heater left visible and painted to match. Shelving and a low cabinet in oak finish the living side.",
    ],
    photos: [
      ["x-stu17", "Kitchen island and living area, the window open to the rooftops"],
      ["x-stu15", "Black kitchen against the exposed brick wall"],
      ["x-stu5", "Sleeping corner with oak cupboards and botanical wallpaper"],
      ["x-stu9", "Desk and drawers built under the skylight"],
      ["x-stu11", "Corridor from the living room to the desk"],
      ["x-stu3", "Shower room in olive tile with a dark vanity"],
      ["x-stu19", "Wall shelving and a low oak cabinet in the living area"],
    ],
  },
  {
    slug: "apartment-paris-18", name: "Apartment, Paris 18th", tag: "Main residence", place: "Paris, 18th arrondissement",
    scope: "Layout, dining banquette, kitchen, bedroom, built-in joinery, 3D visualisation",
    intro: "A small apartment shown twice: as it was drawn in three dimensions, and as it was built.",
    text: [
      "The dining corner is a banquette built into a wall of cupboards, with a fluted panel behind it, two wall lights and open shelves at the side. In the living room a velvet sofa sits under the original mouldings, with amber curtains at the window.",
      "The bedroom takes a calm green to half height, with three panels of patterned wallpaper framed above the bed. The visualisations below were made before the works. Setting them beside the photographs shows how closely the finished rooms follow what the client approved on screen.",
    ],
    photos: [
      ["main-4", "Built-in dining banquette with a fluted panel and wall lights"],
      ["render-4", "The dining banquette as drawn in 3D before the works"],
      ["main-5", "Living room with a velvet sofa and amber curtains"],
      ["render-1", "The living room as drawn in 3D"],
      ["main-6", "Bedroom with wallpaper panels above a green half-height wall"],
      ["render-3", "The bedroom as drawn in 3D"],
      ["render-2", "The kitchen and dining corner as drawn in 3D"],
    ],
  },
  {
    slug: "apartment-levallois", name: "Apartment, Levallois-Perret", tag: "Main residence", place: "Levallois-Perret, west of Paris",
    scope: "Layout, kitchen, entrance, built-in joinery, fireplace wall",
    intro: "An apartment where almost every wall carries something built for it.",
    text: [
      "In the living room the marble fireplace and its gilt mirror were kept, and shelving was built into the alcove beside them. A desk niche lined with botanical wallpaper sits under the slope of a cupboard.",
      "The entrance has rounded oak shelves that turn the corner, next to an arched niche opening onto the kitchen. The kitchen is in pale oak on a floor of terracotta hexagons with white insets. In the bedrooms, a blush cupboard is framed by a curved oak surround, and a chest of drawers has cane fronts under a panel of leafy wallpaper.",
      "Brass wall lights and a woven pendant repeat from room to room, and the old oak floors were kept throughout.",
    ],
    photos: [
      ["main-7", "Marble fireplace with a gilt mirror and built-in shelves"],
      ["main-8", "Entrance with rounded oak shelving and an arched niche"],
      ["main-9", "Oak kitchen on a terracotta hexagon floor"],
      ["furniture-1", "Desk niche lined with botanical wallpaper"],
      ["furniture-2", "Blush cupboard with a curved oak surround"],
      ["furniture-3", "Chest of drawers with cane fronts"],
    ],
  },
  {
    slug: "apartment-montmartre", name: "Apartment, Montmartre", tag: "Main residence", place: "Paris, 18th arrondissement",
    scope: "Kitchen, dining room, shower room, built-in shelving",
    intro: "A kitchen that became the dining room, in walnut and oak with glazed tile.",
    text: [
      "The kitchen runs along two walls of the dining room in dark walnut, with lit open shelves in the corner and a round table at the centre under a single pendant. The mouldings on the ceiling were kept. A second, smaller niche in oak holds the sink against a panel of glazed brick-red tile.",
      "The shower room is tiled from floor to ceiling in honey-coloured tile, with a stone basin on an oak vanity. In the living room, a grey shelving unit on brass uprights sits above a run of low cabinets.",
      "The colours stay close to the materials: walnut, oak, brick-red tile and warm white walls. Much of the light comes from the shelves themselves, which are lit from inside.",
    ],
    photos: [
      ["main-2", "Open kitchen and dining room with a round table and lit shelving"],
      ["main-1", "Kitchen niche in oak with glazed brick-red tile"],
      ["main-3", "Shower room in honey-coloured tile with a stone basin"],
      ["furniture-16", "Grey shelving unit with brass uprights above low cabinets"],
    ],
  },
  {
    slug: "bedroom-and-library-joinery", name: "Bedroom and library joinery", tag: "Custom-made furniture", place: "Paris region",
    scope: "Library wall, wardrobe portal, bedroom wardrobes and headboard",
    intro: "Three pieces of joinery drawn for one apartment and made by cabinetmakers.",
    text: [
      "The library fills a wall of the living room: a rounded oak frame around shelves backed in woven wall covering, above a run of green cabinets. Its uprights are fluted. The passage to the next room is a portal of deep blue wardrobes, lined in walnut where you walk through.",
      "In the bedroom, the headboard wall is panelled in sage to half height with two niches for bedside lights, under a landscape mural. The wardrobes are in the same sage, with open shelves at the corner and long sculpted wooden handles.",
      "Seen together, the three pieces share one vocabulary: rounded corners, fluted uprights and muted colour against warm wood.",
    ],
    photos: [
      ["furniture-13", "Library wall with a rounded oak frame above green cabinets"],
      ["furniture-14", "Blue wardrobe portal framing the view to the library"],
      ["furniture-12", "Detail of a fluted oak upright against woven wall covering"],
      ["furniture-5", "Sage headboard wall with niches under a landscape mural"],
      ["furniture-6", "Sage wardrobe with open corner shelves"],
      ["furniture-7", "Wardrobe doors with sculpted wooden handles"],
    ],
  },
  {
    slug: "country-house", name: "Country house", tag: "Second home", place: "France",
    scope: "Colour scheme, entrance, living room, built-in shelving",
    intro: "A house used for part of the year, where colour does most of the work.",
    text: [
      "The entrance hall is painted green from floor to ceiling, door included, with oak panelling below a glazed partition and a row of folding seats along the wall. From there a dark-framed doorway opens onto the dining room and its old terracotta floor.",
      "The living room keeps its beams, its brick fireplace with a wood stove and its hexagonal terracotta tiles. In another room, shelves and low cabinets were fitted on either side of a marble fireplace, around a television and above a window seat.",
      "The green of the hall is carried onto the ceiling, which makes a narrow room feel deliberate. Black coat hooks and a small gilt mirror are the only things on its walls.",
    ],
    photos: [
      ["second-2", "Living room with a beamed ceiling, wood stove and terracotta floor"],
      ["second-1", "View through a dark-framed doorway from the green hall to the dining room"],
      ["second-3", "Green entrance hall with oak panelling and a row of folding seats"],
      ["furniture-15", "Shelving and cabinets on either side of a marble fireplace"],
    ],
  },
  {
    slug: "house-sifnos", name: "House on Sifnos", tag: "Second home", place: "Sifnos, Greece",
    scope: "Interior layout, kitchen, living room, outdoor spaces",
    intro: "A whitewashed house on a Greek island, designed for owners who live elsewhere.",
    text: [
      "The house is built in the island's way: thick white walls, an outdoor staircase, a paved courtyard with a pergola. Inside, the living room sits under a painted beamed ceiling, with an arched doorway and a floor of patterned cement tiles.",
      "The kitchen is in oak along one wall, under a plastered hood, on the same star-patterned tiles. Outside, a table sits in the courtyard under an olive tree, a few steps from the kitchen door.",
      "Niches are cut into the thick walls in place of shelves, and the openings are arched. A woven pendant hangs from the beams in the living room, and in the kitchen a small deep-set window frames the view. The furniture is kept low and plain, so the floor carries the pattern.",
    ],
    photos: [
      ["second-5", "Whitewashed courtyard and outdoor staircase"],
      ["second-4", "Vaulted living room with patterned cement tiles"],
      ["second-6", "Oak kitchen on star-patterned cement tiles"],
      ["x-sif23", "Bedroom on the same star-patterned tiles"],
      ["x-sif1", "The house from the courtyard, with bougainvillea and an olive tree"],
    ],
  },
];

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
    text: "The drawings contractors build from: plans for electrics, lighting and plumbing, and dimensioned elevations of every piece of joinery.",
    photos: [["drawing-1", "Electrical and lighting plan of an apartment"], ["drawing-2", "Plumbing plan of an apartment"], ["drawing-3", "Dimensioned elevation of a kitchen wall with joinery notes"], ["drawing-4", "Dimensioned elevations of a kitchen island"]],
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
  description: "Nine projects by Stouls Studio in Paris and beyond: main residences, rental apartments and second homes, plus custom furniture, 3D visualisations and technical drawings.",
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Portfolio</p>
  <h1>Portfolio of Margaux Stouls</h1>
  <p class="lede">Nine projects, each on its own page: homes people live in, apartments built to be let, and houses used for part of the year.</p>
</section>

<section class="band cards-band">
  <ul class="cards">
    ${projects.map((p) => `<li><a href="${c.link(`portfolio/${p.slug}/`)}">${c.img(p.photos[0][0], `${p.photos[0][1]}. ${p.name}, Stouls Studio`)}<span class="card-tag">${p.tag}</span><h2>${p.name}</h2></a></li>`).join("\n    ")}
  </ul>
</section>
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
    title: `${p.name} | Stouls Studio portfolio`,
    description: `${p.intro} ${p.tag}, ${p.place}. Designed by interior architect Margaux Stouls.`,
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
        <dt>Location</dt><dd>${p.place}</dd>
        <dt>Designed by the studio</dt><dd>${p.scope}</dd>
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
