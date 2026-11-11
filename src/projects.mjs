// Portfolio projects. Facts (surface, scope, history) come from Margaux's written review of
// 11 November 2026; captions describe what each photograph shows.
// `kind` groups the portfolio index: "full" = full renovation, "partial" = partial renovation.

export const projects = [
  {
    slug: "apartment-paris-9", name: "Apartment, Paris 9th", kind: "full", tag: "Main residence", place: "Paris, 9th arrondissement", size: null,
    scope: "Full renovation: design, works and furniture",
    intro: "A dark, badly laid-out apartment redrawn so that light crosses it from one side to the other.",
    text: [
      "The apartment started in its original state: poorly divided, with a very dark kitchen. It was redesigned from end to end to connect the living spaces and let daylight through, around the old timber posts and beams, which were left in view.",
      "It now has two main bedroom suites, each with its own bathroom and dressing room, a study, a separate WC, an entrance with built-in storage and a large kitchen open to the living room. Herringbone oak runs through the living room, the kitchen and the bedroom.",
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
    slug: "studio-mazarine", name: "Studio Mazarine, Paris 6th", kind: "full", tag: "Rental investment", place: "Paris, 6th arrondissement", size: [24, 258],
    scope: "Full renovation for a rental investment",
    intro: "A 24 m² studio rebuilt to hold a real kitchen, a table to eat at, a living room and a sleeping area set apart from all three.",
    text: [
      "The studio was renovated entirely for a rental investment. What it already had was kept and shown: the stone, the old beams, the tall windows and the height under the ceiling.",
      "That height is what makes the plan work. The bed went up onto a mezzanine behind a glass balustrade, so the sleeping area is separate from the living space without a wall. The stair that reaches it is a piece of joinery in its own right, with the television and the storage built into its steps.",
      "Below, the kitchen is generous for a studio, with room to cook properly, and a glass table by the windows is there for dinner. Functions and circulation were arranged to make the room feel larger than its floor area.",
    ],
    photos: [
      ["x-gra6", "Living room under the old beams, with the mezzanine above and tall windows"],
      ["x-gra8", "Sofa and dining table below the glazed mezzanine"],
      ["x-gra9", "Staircase built as storage, with the dining table by the window"],
      ["x-gra12", "Glass dining table and oak chairs in front of the windows"],
      ["x-gra22", "Kitchen in green cabinets with a white worktop and open oak shelves"],
      ["x-gra19", "Open oak shelves in the kitchen"],
      ["x-gra3", "Bed on the mezzanine, under painted beams"],
      ["x-gra1", "The room seen from the mezzanine"],
    ],
  },
  {
    slug: "top-floor-studio", name: "Top-floor studio, Saint-Germain-des-Prés", kind: "full", tag: "Rental property", place: "Paris, Saint-Germain-des-Prés", size: [26, 280],
    scope: "Full renovation",
    intro: "A small apartment under the roof, renovated entirely and laid out as a real one-room home.",
    text: [
      "The old terracotta floor tiles were renovated and the parquet restored. The brick wall was a discovery made during the works: it was cleaned and became the backdrop of the kitchen, a single black run with an island that serves as worktop, table and divider.",
      "A desk and drawers were built under the slope of the roof, below the skylight. The headboard is a piece of joinery that opens from the inside and holds most of the apartment's storage, including a hanging rail. The shower room was planned to the centimetre, tiled in olive with a dark vanity.",
    ],
    photos: [
      ["x-stu17", "Kitchen island and living area, the window open to the rooftops"],
      ["x-stu15", "Black kitchen against the brick wall uncovered during the works"],
      ["x-stu5", "Sleeping corner with the storage headboard and botanical wallpaper"],
      ["x-stu9", "Desk and drawers built under the skylight"],
      ["x-stu11", "Corridor from the living room to the desk, on the restored floor tiles"],
      ["x-stu3", "Shower room in olive tile with a dark vanity"],
      ["x-stu19", "Wall shelving and a low oak cabinet in the living area"],
    ],
  },
  {
    slug: "apartment-montmartre", name: "Apartment, Montmartre", kind: "full", tag: "Main residence", place: "Paris 18th, Montmartre", size: [26, 280],
    scope: "Full renovation, with 3D visualisation before the works",
    intro: "Twenty-six square metres in Montmartre, renovated from A to Z and shown twice: as drawn in three dimensions, and as built.",
    text: [
      "The parquet was kept and restored. The plaster mouldings were reworked and new beading added to the walls to give the rooms character. The aim was to make a small apartment work, with each use given its own place: a kitchen, a living room, a desk, a bedroom with storage and a separate bathroom.",
      "The dining corner is a banquette built into a wall of cupboards, with a fluted panel behind it, two wall lights and open shelves at the side. The bedroom takes a calm green to half height, with three panels of patterned wallpaper framed above the bed.",
      "The visualisations were made before the works. Set beside the photographs, they show how closely the finished rooms follow what the client approved on screen.",
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
    slug: "apartment-levallois", name: "Apartment, Levallois-Perret", kind: "full", tag: "Bought, renovated and resold", place: "Levallois-Perret, west of Paris", size: [55, 592],
    scope: "Full renovation for resale",
    intro: "A 55 m² apartment bought to be renovated and sold, designed around its marble fireplace and its old parquet.",
    text: [
      "The layout turns on the marble fireplace and the oak floor. Storage was built to respect the proportions of the rooms and to show off what makes a Parisian apartment: the mouldings, the mantel, the gilt mirror above it.",
      "The style leans slightly English, with wallpapers and colour: a botanical paper behind a desk niche, a leafy one above a chest of drawers with cane fronts, a blush cupboard in a curved oak surround. The kitchen is modern, in pale oak with a polished-concrete worktop, on a floor of terracotta hexagons that keeps the charm of the old building.",
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
    slug: "country-house-burgundy", name: "Country house, Burgundy", kind: "full", tag: "Second home", place: "Burgundy, France", size: [130, 1400],
    scope: "Renovation of a country house",
    intro: "A 130 m² house in Burgundy that gained comfort without losing what made it an old country house.",
    text: [
      "The existing terracotta floor tiles were kept in several rooms, the beams were reworked and the stone fireplaces brought back to the centre of the rooms. The original door frames, with their deep mouldings, were kept too.",
      "Colour does the rest. The entrance hall is painted green from floor to ceiling, door included, with oak panelling below a glazed partition and a row of folding seats along the wall. From there a dark-framed doorway opens onto the dining room and its old hexagonal floor. The living room keeps its beams, its brick fireplace with a wood stove and its terracotta tiles. More photographs of this house will be added here.",
    ],
    photos: [
      ["second-2", "Living room with a beamed ceiling, wood stove and terracotta floor"],
      ["second-1", "Original door frame between the green hall and the dining room"],
      ["second-3", "Green entrance hall with oak panelling and a row of folding seats"],
    ],
  },
  {
    slug: "house-sifnos", name: "House on Sifnos", kind: "full", tag: "Holiday house", place: "Sifnos, Greece", size: [150, 1615],
    scope: "Full conversion of a former jazz club into a house",
    intro: "A jazz club that everyone on the island knew, turned into a 150 m² holiday house.",
    text: [
      "The building had been a jazz club, well known on Sifnos. It came with twelve toilets and professional kitchens. Everything was rethought to make it a home.",
      "The original floor was kept, cleaned and restored. The project holds on to the Greek and Sifnian character of the place and to the memory of the club, with a plain approach: lime on the walls and local materials, above all the island's own stone.",
      "Outside, thick white walls, an outdoor staircase and a paved courtyard with a pergola. Inside, the living room sits under a painted beamed ceiling with an arched doorway, and the oak kitchen runs along one wall under a plastered hood, on star-patterned cement tiles.",
    ],
    photos: [
      ["second-5", "Whitewashed courtyard and outdoor staircase"],
      ["second-4", "Vaulted living room with patterned cement tiles"],
      ["second-6", "Oak kitchen on star-patterned cement tiles"],
      ["x-sif23", "Bedroom on the same star-patterned tiles"],
      ["x-sif1", "The house from the courtyard, with bougainvillea and an olive tree"],
    ],
  },
  {
    slug: "mezzanine-apartment-montparnasse", name: "Apartment with mezzanine, Montparnasse", kind: "partial", tag: "Partial renovation", place: "Paris, Montparnasse", size: null,
    scope: "Partial renovation: the library wall and its storage",
    intro: "A partial renovation with one subject: the library, and the storage a double-height room was missing.",
    text: [
      "The brief was to rearrange the library side of the room: use the full height, create storage, show the books off and make the whole more practical. The tall wall beside the window became a library in oak, built around the television and running down to a bench with storage underneath.",
      "The bench continues along the wall and doubles as seating, so the room needs very little loose furniture. Under the mezzanine, one run of white cupboards holds a niche for the coffee corner and a wine fridge, and a second run frames an oak desk. The handles are small tabs, and nothing stands proud of the wall.",
    ],
    photos: [
      ["x-ali4", "Living room with the library wall, and the mezzanine above"],
      ["x-ali2", "Oak library around the television, with a window bench"],
      ["x-ali12", "The living room seen from the mezzanine"],
      ["x-ali8", "Oak desk set into a wall of white cupboards"],
      ["x-ali6", "Tall cupboards with a niche for the coffee corner and a wine fridge"],
      ["x-ali10", "Detail of the oak bench with storage below"],
    ],
  },
  {
    slug: "apartment-meudon", name: "Apartment, Meudon", kind: "partial", tag: "Partial renovation", place: "Meudon, south-west of Paris", size: [85, 915, "80 to 90 m² (860 to 970 sq ft)"],
    scope: "Partial renovation of several rooms, with extensive custom joinery",
    intro: "Several rooms of a large apartment reworked through joinery made to measure.",
    text: [
      "In the bedroom, the headboard and the wardrobes were designed together, with wallpaper, mouldings, colour, niches and mirrors placed to throw the light back into the room. The headboard wall is panelled in sage to half height under a landscape mural, and the wardrobes carry long sculpted wooden handles.",
      "In the living room and along a corridor several metres long, a library and a long run of made-to-measure storage take in the doors to the other rooms. Arches in wood stand out against the painted joinery and mark each passage. The library itself is a rounded oak frame around shelves backed in woven wall covering, above a run of green cabinets.",
    ],
    photos: [
      ["furniture-13", "Library wall with a rounded oak frame above green cabinets"],
      ["furniture-14", "Wooden arch through blue wardrobes, framing the view to the library"],
      ["furniture-12", "Detail of a fluted oak upright against woven wall covering"],
      ["furniture-5", "Sage headboard wall with niches under a landscape mural"],
      ["furniture-6", "Sage wardrobe with open corner shelves"],
      ["furniture-7", "Wardrobe doors with sculpted wooden handles"],
    ],
  },
];
