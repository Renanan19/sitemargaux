// Projects page. The selection and its six groups come from Margaux's own portfolio.
// Captions describe only what each image shows.
const groups = [
  {
    id: "main-residences", name: "Main residences", key: "main",
    text: "Apartments people live in all year, in Paris and the towns around it. Kitchens opened to the living room, bathrooms rebuilt, storage built in, and the old timber posts, fireplaces and floors kept.",
    alts: [
      "Kitchen niche in oak and walnut with glazed tile", "Open kitchen and dining room with a round table and lit shelving", "Shower room in honey-coloured tile with a stone basin",
      "Built-in dining banquette with a fluted panel and wall lights", "Living room with a velvet sofa and amber curtains", "Bedroom with wallpaper panels above a green half-height wall",
      "Marble fireplace with a gilt mirror and built-in shelves", "Entrance with rounded oak shelving and an arched niche", "Oak kitchen on a terracotta hexagon floor",
      "Kitchen built around original timber posts", "Bedroom with a green headboard wall", "Arched doorway opening onto a bathroom vanity", "Shower room with green tiling and a stone basin",
      "Living room with a herringbone oak floor and tall windows", "Arched bookshelf niche beside a timber post",
    ],
  },
  {
    id: "second-homes", name: "Second homes", key: "second",
    text: "Houses used for part of the year, designed for owners who are not there to supervise: a country house in France and a house on the Greek island of Sifnos.",
    alts: [
      "View through a dark-framed doorway from a green room to a dining room", "Country living room with a beamed ceiling, wood stove and terracotta floor", "Green entrance hall with oak panelling and a row of folding seats",
      "Vaulted living room with patterned cement tiles, house on Sifnos", "Whitewashed courtyard and outdoor staircase, house on Sifnos", "Oak kitchen on patterned cement tiles, house on Sifnos",
    ],
  },
  {
    id: "rental-properties", name: "Rental properties", key: "rental",
    text: "Small apartments built to be let furnished. Every square metre is given a job: a kitchen along one wall, a desk under a skylight, a bed on a mezzanine, a bench that is also storage.",
    alts: [
      "Black kitchen against an exposed brick wall", "Corridor leading to a desk under a skylight", "Sleeping corner with oak cupboards and botanical wallpaper",
      "Living room with built-in oak bookshelves and a window bench", "White built-in cupboards with an oak desk", "Living room below a mezzanine with white railings", "Oak bench with integrated storage along a wall",
    ],
  },
  {
    id: "custom-furniture", name: "Custom-made furniture", key: "furniture",
    text: "Joinery and furniture drawn for one room and made by cabinetmakers: wardrobes, libraries, headboards, sideboards and tables.",
    alts: [
      "Desk niche lined with botanical wallpaper", "Blush cupboard with a curved oak surround", "Chest of drawers with cane fronts", "Cane-fronted cupboard doors with oak handles",
      "Sage headboard wall with niches under a landscape mural", "Sage wardrobe with open corner shelves", "Wardrobe doors with sculpted wooden handles",
      "Oak sideboard with shelves on turned posts", "Detail of a rounded oak top and turned post", "Round dining table in stained oak", "Detail of a table edge and upholstered chair",
      "Detail of a fluted oak upright against woven wall covering", "Library wall with a rounded oak frame above green cabinets", "Blue wardrobe portal framing the view to a library",
      "Shelving and cabinets on either side of a marble fireplace", "Grey shelving unit with brass uprights above low cabinets",
    ],
  },
  {
    id: "3d-visualisations", name: "3D visualisations", key: "render",
    text: "Before work starts, rooms and furniture are modelled in three dimensions. A client abroad sees the result on screen and can change it while changing still costs nothing.",
    alts: [
      "3D visualisation of a living room", "3D visualisation of a kitchen and dining corner", "3D visualisation of a bedroom", "3D visualisation of a dining banquette",
      "3D visualisation of a walnut kitchen with an island", "3D visualisation of a marble bathroom", "3D visualisation of a dressing room", "3D visualisation of a sideboard with handle details", "3D visualisation of a desk with metal legs",
    ],
  },
  {
    id: "technical-drawings", name: "Technical drawings", key: "drawing",
    text: "The drawings contractors build from: plans for electrics, lighting and plumbing, and dimensioned elevations of every piece of joinery.",
    alts: ["Electrical and lighting plan of an apartment", "Plumbing plan of an apartment", "Dimensioned elevation of a kitchen wall with joinery notes", "Dimensioned elevations of a kitchen island"],
  },
];

const work = {
  path: "projects/",
  crumb: "Projects",
  title: "Projects by interior architect Margaux Stouls | Stouls Studio",
  description: "Main residences, second homes, rental apartments, custom furniture, 3D visualisations and technical drawings by Stouls Studio, interior architecture in Paris.",
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Projects</p>
  <h1>Projects by Margaux Stouls</h1>
  <p class="lede">Homes, rental apartments and furniture, with the visualisations and drawings behind them.</p>
  <p class="jump">${groups.map((g) => `<a href="#${g.id}">${g.name}</a>`).join("")}</p>
</section>
${groups.map((g) => `
<section class="band project" id="${g.id}">
  <div class="band-grid">
    <div class="project-intro"><h2>${g.name}</h2><p>${g.text}</p></div>
    <div class="masonry${g.key === "drawing" ? " wide" : ""}">
      ${g.alts.map((alt, i) => c.img(`${g.key}-${i + 1}`, `${alt}. Stouls Studio`)).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n      ")}
    </div>
  </div>
</section>`).join("")}

<section class="band paper">
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

export const workPages = [work];
