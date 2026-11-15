// Home, service pages and About. Legal and tax content lives in pages-guide.mjs.
import { allWork, projectPath } from "./pages-work.mjs";

const faqBlock = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;

// The two ways of working with the studio, shared by the home page and the Services page.
export const formulas = [
  {
    id: "search-to-keys", name: "From the search to the keys",
    who: "For buyers who have not found their apartment yet.",
    steps: ["Apartment search", "Assessing the apartment's potential", "Design and technical drawings", "Materials, furniture and decoration", "Final quote", "Site supervision", "Furnishing and handover"],
  },
  {
    id: "full-renovation", name: "Full renovation of an apartment you own",
    who: "For owners who already have the keys.",
    steps: ["Study of the apartment and brief", "Design and technical drawings", "Materials, furniture and decoration", "Final quote", "Site supervision", "Furnishing and handover"],
  },
];

// The two options side by side, each in its own frame. Used by both languages.
export const frames = (list, word, more) => `<div class="frames">
      ${list.map((f, i) => `<div class="frame" id="${f.id}">
        <p class="formula-no">${word} ${i + 1}</p>
        <h3>${f.name}</h3>
        <p class="muted">${f.who}</p>
        <ol>${f.steps.map((s) => `<li>${s}</li>`).join("")}</ol>${more ? `
        <p class="frame-more"><a href="${more[0]}#${f.id}">${more[1]}</a></p>` : ""}
      </div>`).join("\n      ")}
    </div>`;

// Home gallery: six photographs, each named after its project and linked to it.
const RECENT = [
  ["project-1", "apartment-opera", "Curved mirror against the green wainscoting of a bedroom", "Miroir aux lignes courbes sur le soubassement vert d'une chambre"],
  ["project-2", "apartment-opera", "Arched bookshelf niche beside an exposed wood post", "Niche bibliothèque en arche à côté d'un poteau en bois apparent"],
  ["project-3", "apartment-opera", "Cane-fronted closet doors with oak handles", "Portes de penderie cannées à poignées de chêne"],
  ["project-4", "apartment-levallois-perret", "Marble fireplace with a gilt mirror and built-in shelves", "Cheminée en marbre, miroir doré et étagères intégrées"],
  ["project-5", "apartment-montparnasse", "Living room with a built-in oak bookcase and a window seat", "Séjour avec bibliothèque en chêne sur mesure et banc sous la fenêtre"],
  ["project-6", "apartment-montmartre", "Built-in dining banquette with a fluted panel and wall lights", "Banquette de repas intégrée, panneau cannelé et appliques"],
];
export const recent = (c, lang) => RECENT.map(([key, slug, en, fr]) => {
  const p = allWork.find((x) => x.slug === slug);
  const name = lang === "fr" ? p.fr.name : p.name;
  const img = c.img(key, `${lang === "fr" ? fr : en}. ${name}, Stouls Studio`, "", false, "(max-width: 820px) 50vw, 33vw");
  return img ? `<figure><a href="${c.link(projectPath(p, lang))}">${img}<figcaption>${name}</figcaption></a></figure>` : "";
}).filter(Boolean).join("\n      ");

const home = {
  path: "",
  alt: "fr/",
  title: "Buy and renovate an apartment in Paris | Stouls Studio",
  description: "Margaux Stouls, interior architect and designer in Paris, finds your apartment, designs it, supervises the renovation and furnishes it while you stay in the US or Canada.",
  faq: [
    ["Do I have to come to Paris?", "Not for the search or the renovation. I visit apartments for you and send video, my opinion of each one and what the renovation would involve. During the renovation I send written reports, photographs and videos, and we meet by video call. Most buyers come once to see the apartment before they commit, and once for the handover."],
    ["Can you work on an apartment I already own?", "Yes. It is one of the studio's two ways of working. If you already have the keys, the project starts with a study of the apartment, then the design and the technical drawings."],
    ["Do you work in English?", "Yes. Calls, plans and reports are in English. The contractors work and write their quotes in French: I am the go-between, and I translate the quotes when needed."],
    ["What does it cost?", "Each stage is quoted in writing before it starts: search, technical drawings, site supervision, furnishing. Contractor quotes are passed on to you in full."],
    ["Do you only work in Paris?", "No. Most of my projects are in Paris, and I also work beyond it: the portfolio includes a country house in Burgundy and a house on Sifnos, in Greece."],
  ],
  body: (c) => `
<section class="hero">
  <div class="hero-copy">
    <h1>The right address, shaped around you.</h1>
    <p class="lede">I'm Margaux Stouls, an interior architect and designer in Paris. Finding the right apartment, revealing its potential, giving it character: I am with you at every step, until the day you walk in with your suitcases.</p>
    ${c.buttons()}
  </div>
  <div class="hero-photo">${c.img("hero", "Arch between the kitchen and the sleeping area of a Paris studio designed by Stouls Studio", "", true)}</div>
</section>

<section class="band wide">
  <h2>Recent apartments</h2>
  <div class="gallery">
      ${recent(c, "en")}
  </div>
  <p class="gallery-more"><a href="${c.link("portfolio/")}">See the full portfolio</a></p>
</section>

<section class="band wide paper">
  <h2>Two ways to work with me</h2>
  ${frames(formulas, "Option", [c.link("services/"), "The steps in detail"])}
</section>

<figure class="bleed">${c.img("main-14", "Living room with a chevron oak floor and tall windows, Paris apartment by Stouls Studio", "", false, "100vw")}</figure>

<section class="band wide">
  <h2>Whatever the apartment is for</h2>
  <ul class="quad">
    <li><h3>A primary residence</h3><p>You live in Paris, or are moving here, and want the apartment redrawn around your daily life.</p></li>
    <li><h3>A pied-à-terre</h3><p>Your own front door in Paris for a few months a year, with the bed made when you land.</p>
      <a class="more" href="${c.link("paris-pied-a-terre/")}">How a pied-à-terre project works</a></li>
    <li><h3>A rental investment</h3><p>An apartment where a new layout adds a bedroom or a real kitchen, built and furnished for the leases Paris allows.</p>
      <a class="more" href="${c.link("paris-rental-investment/")}">How a rental project works</a></li>
    <li><h3>A resale</h3><p>An apartment bought to be renovated and sold, where the design is judged on the value it adds.</p></li>
  </ul>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>From first call to keys back</h2>
    <ol class="steps">
      <li><div><span class="when">Week 1</span><h3>A call about what you want</h3><p>Budget, use, neighborhoods, how much work you are willing to take on. You leave with a realistic picture of what that budget buys.</p></div></li>
      <li><div><span class="when">Until the right one turns up</span><h3>Search and visits</h3><p>I visit the shortlist and send video, my opinion of each apartment and of the building's condition, and a first renovation estimate.</p></div></li>
      <li><div><span class="when">2 to 3 months</span><h3>Offer and purchase</h3><p>You buy in your own name through a notaire. I draw the plans and collect quotes during the wait between the preliminary contract and the final deed.</p></div></li>
      <li><div><span class="when">In parallel with the purchase</span><h3>Technical drawings and final quote</h3><p>You approve and sign the technical drawings. The final quote is drawn up from them, and the building's approval is requested where it is needed.</p></div></li>
      <li><div><span class="when">Depends on the scope</span><h3>The renovation</h3><p>Visits to the job site, decisions put to you with pictures and prices, payments made once I have checked the work.</p></div></li>
      <li><div><span class="when">Last 2 to 3 weeks</span><h3>Furnishing and handover</h3><p>Everything installed and photographed. I hand the keys to you, or to the property manager you chose.</p></div></li>
    </ol>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Why a designer and not an agent</h2>
    <div class="prose">
      <p>A buyer's agent is paid when you buy. Their work ends at the notaire's office, which is where the hard part of a Paris apartment begins: old wiring, a kitchen in the wrong room, a building that votes on what you may change.</p>
      <p>I look at an apartment as a future job site before you own it. On the visit I give you my opinion on whether the wall you want gone is holding up the floor above, where a second bathroom could drain, and roughly what the whole project will cost. You make your offer with the full price in mind, purchase plus renovation.</p>
      <p>Americans were the largest group of foreign non-resident buyers in Paris in 2025, with 220 purchases. Their median purchase was €864,000 for 65 m² (700 sq ft), according to the <a href="https://www.labase-lextenso.fr/documents/standard/ngp-communique-25-06-2026-6a3d39e0c38e0776349253.pdf">Notaires du Grand Paris</a>.</p>
    </div>
  </div>
</section>

<figure class="bleed">${c.img("x-b25-2", "Living room with a red marble fireplace and shelves on brass uprights, apartment by Stouls Studio", "", false, "100vw")}</figure>

<section class="band">
  <div class="band-grid">
    <h2>What protects you when you are not there</h2>
    <ul class="rows">
      <li><h3>Your deposit sits with the notaire</h3><p>The deposit you pay at the preliminary contract is held by the notaire, a public legal officer, until the sale closes. You have 10 days to withdraw, counted from the day after the signed contract is notified to you.</p></li>
      <li><h3>You own the contracts</h3><p>You buy in your own name and sign with each contractor yourself. Their quotes and invoices are addressed to you, and you pay them directly.</p></li>
      <li><h3>The contractors are insured by law</h3><p>In France every contractor must carry 10-year liability insurance covering serious defects after the work is accepted, as <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2034">Service-Public explains</a>. I collect each certificate before work starts.</p></li>
      <li><h3>You pay for work done</h3><p>Payments follow the stages of the work. You make each one after I have checked the work against the drawings and sent you the photos.</p></li>
      <li><h3>One person between you and the contractors</h3><p>I am the buffer. Questions, delays and corrections go through me, and I follow up until each point is settled.</p></li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Questions buyers ask first</h2>
    ${faqBlock(home.faq)}
  </div>
</section>`,
};

const services = {
  path: "services/",
  alt: "fr/prestations/",
  crumb: "Services",
  service: "Apartment search, interior design and full renovation in Paris",
  title: "Services: from apartment search to handover | Stouls Studio",
  description: "Two ways to work with interior architect and designer Margaux Stouls in Paris: from the apartment search to the keys, or the full renovation of an apartment you already own.",
  faq: [
    ["Which of the two should I choose?", "It depends only on whether you have an apartment. If you are still looking, the first one starts with the search. If you own it or have signed for it, the second one starts with a study of the apartment. From the design onward the two are the same."],
    ["Can I take only part of it?", "Yes. Some clients ask for the design and the technical drawings alone, or for a partial renovation of a few rooms. Say what you need and I will tell you what I can take on."],
    ["Do I have to be in Paris?", "No. Meetings can be held by video call, decisions are confirmed by WhatsApp, and during the renovation you receive reports, photographs and, when needed, videos of the apartment. When you are in Paris, we meet at the apartment."],
    ["When do I know the final price?", "When the technical drawings are finished and signed. The final quote is based on them, so it prices the project you approved and nothing else. Before that, you work with estimates."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Services</p>
  <h1>Two ways to work with me, one finished apartment</h1>
  <p class="lede">Either I start by finding the apartment, or I start with the one you already own. In both cases I carry the project to the day I hand you the keys, so that you have as little as possible to manage.</p>
  ${c.buttons()}
</section>

<section class="band wide">
  <h2>The two options</h2>
  ${frames(formulas, "Option")}
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Each step, in detail</h2>
    <ul class="rows">
      <li><h3>Apartment search <span class="tag">Option 1</span></h3><div><p>I take your brief, follow the market and visit in person.</p>
        <a class="more" href="${c.link("apartment-search-paris/")}">Apartment search in Paris</a></div></li>
      <li><h3>Assessing the apartment's potential <span class="tag">Option 1</span></h3><p>For each apartment worth studying: my opinion, what could be done with it and a first idea of the cost.</p></li>
      <li><h3>Study of the apartment and brief <span class="tag">Option 2</span></h3><p>A visit, a survey, and a clear brief for the project.</p></li>
      <li><h3>Design and technical drawings</h3><div><p>The new layout, then the renovation plans and the elevations of the kitchen, the bathrooms and every piece of millwork. Drawn for the building as it is, with its beams, chimneys and load-bearing walls.</p>
        <a class="more" href="${c.link("paris-apartment-renovation/")}">Design and renovation</a></div></li>
      <li><h3>Materials, furniture and decoration</h3><p>Floors, tiles, faucets, lights, fabrics, furniture and objects are chosen with you during the design and listed with the technical drawings, so the quote covers what you actually picked.</p></li>
      <li><h3>Final quote</h3><p>Drawn up once the technical drawings are finished, so the price matches the project.</p></li>
      <li><h3>Site supervision</h3><p>Regular visits to the job site, a written report every week or every two weeks depending on the stage of the work, and photographs.</p></li>
      <li><h3>Furnishing and handover</h3><p>Furniture, lights, curtains, linens, dishes: ordered, delivered, assembled and placed. Everything is checked, and I hand you the keys.</p></li>
    </ul>
  </div>
</section>

<figure class="bleed">${c.img("x-sau25", "Living room seen from the kitchen, with the original wood posts, Paris apartment by Stouls Studio", "", false, "100vw")}</figure>

<section class="band" id="how-we-work">
  <div class="band-grid">
    <h2>How we work together</h2>
    <div class="pair">
      <div>
        <h3>During the design</h3>
        <ul>
          <li>Regular meetings, closer together or farther apart depending on the stage of the project.</li>
          <li>WhatsApp between meetings, in a group set up for the project if you like, to confirm choices and keep moving.</li>
          <li>A set of technical drawings: the plans the renovation needs, in particular the renovation plans and the elevations, with the list of materials, furniture and fixtures chosen.</li>
          <li>You approve and sign the drawings before work starts. The final quote comes once they are finished.</li>
        </ul>
      </div>
      <div>
        <h3>During the renovation</h3>
        <ul>
          <li>A written report every week or every two weeks, depending on the stage of the work and what there is to tell you.</li>
          <li>Photographs of the job site, sent regularly.</li>
          <li>Meetings at the apartment when you are in Paris. When you are not, we meet by video call, and I send videos when they are needed.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What this takes off your shoulders</h2>
    <div>
      <p>A renovation is hundreds of small decisions, a dozen trades and a building with its own rules. I handle all of it: I prepare the choices, put them to you with a picture and a price, and follow the work until the apartment is handed over.</p>
      <p>You decide, you are kept informed, and you have no one to chase. I am the buffer between you and the contractors: I check the work against the drawings you approved and follow up until each point is settled.</p>
    </div>
  </div>
</section>

<section class="band wide">
  <h2>The rooms in 3D, before anything is built</h2>
  <div class="figs">
    ${["render-5", "render-6", "render-7"].map((n, i) => c.img(n, ["3D model of a dressing room, Stouls Studio", "3D model of a marble bathroom, Stouls Studio", "3D model of a walnut kitchen with an island, Stouls Studio"][i], "", false, "(max-width: 820px) 100vw, 33vw")).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n    ")}
  </div>
  <p class="muted">These three images are 3D models, not photographs. Where it helps, I model the rooms during the design, so you can see a room and change your mind while it still costs nothing.</p>
</section>

<section class="band wide paper">
  <h2>Types of projects</h2>
  <ul class="quad">
    <li><h3>Primary residence</h3><p>An apartment to live in all year, redrawn around your daily life.</p></li>
    <li><h3>Pied-à-terre</h3><p>A second home in Paris for regular stays.</p><a class="more" href="${c.link("paris-pied-a-terre/")}">A pied-à-terre in Paris</a></li>
    <li><h3>Rental investment</h3><p>An apartment designed and furnished to be rented.</p><a class="more" href="${c.link("paris-rental-investment/")}">Rental investment in Paris</a></li>
    <li><h3>Resale</h3><p>An apartment bought to be renovated and sold.</p></li>
  </ul>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Clients in Paris and abroad</h2>
    <div>
      <p>Many of the studio's clients live abroad and follow their project from a distance, in English or in French. Others live in Paris and come to every meeting at the apartment. The method is the same, and so is the work: <a href="${c.link("portfolio/")}">see the portfolio</a>.</p>
      <p>More on each stage: <a href="${c.link("apartment-search-paris/")}">the apartment search</a> and <a href="${c.link("paris-apartment-renovation/")}">the renovation</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Questions about working together</h2>
    ${faqBlock(services.faq)}
  </div>
</section>`,
};

const sourcing = {
  path: "apartment-search-paris/",
  alt: "fr/recherche-appartement-paris/",
  crumb: "Apartment search",
  service: "Apartment search in Paris",
  title: "Buying an apartment in Paris from abroad | Stouls Studio",
  description: "Looking at apartments for sale in Paris from the US or Canada? An interior architect searches, visits them for you and tells you what each one could become before you make an offer.",
  faq: [
    ["How is this different from a buyer's agent?", "A buyer's agent judges location and price. I also give you my opinion on the renovation: structure, plumbing runs, the state of the wiring, what the building is likely to allow. You get a purchase price and a renovation estimate side by side."],
    ["Do you find off-market apartments?", "Sometimes, through agents and contractors I work with. Most good apartments in Paris are listed, and go quickly. What matters is seeing them in the first days and knowing at once whether the layout can be fixed."],
    ["Who signs the purchase?", "You do, with a notaire, in your own name or through your own company. The sale itself goes through licensed Paris real estate agents and the notaire. My part is the brief, the visits and my assessment of each apartment. I do not hold your money and am not a party to the sale."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Apartment search</p>
  <h1>The right apartment, seen with an interior architect's eye</h1>
  <p class="lede">I look for the apartments, visit them and send you a video of each one. My eye as an interior architect does the rest: seeing what a place could become, imagining the transformation, estimating the renovation. You can make an offer knowing what you are getting into.</p>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What you get for each apartment</h2>
    <div>
      <ul>
        <li>A walk-through video, room by room, with the views onto the street and the stairwell.</li>
        <li>My opinion on what I can see of the structure, moisture, wiring, plumbing, windows and heating.</li>
        <li>My opinion of the apartment and a short written report: what could be done with it, and what could not.</li>
        <li>The energy rating and what it means for renting the place.</li>
        <li>The building and its copropriété (the co-ownership): the minutes of the owners' general meetings, recent work, work voted on but not yet paid for, the building's charges.</li>
        <li>A first renovation estimate, so that you compare two apartments on the full cost of each.</li>
      </ul>
      <p>When an apartment suits you and is worth going further, I can draw a first sketch of what the new layout could be.</p>
      <p>Photos in a Paris listing are taken with a wide lens on a sunny day. The visit is where you learn that the bedroom faces a wall 2 m (about 6 ft) away, or that the only place for a washer is the entry hall.</p>
      ${c.buttons()}
    </div>
  </div>
</section>

<figure class="bleed">${c.img("x-bag8", "Walnut kitchen with lit shelves and an oval dining table, apartment by Stouls Studio", "", false, "100vw")}</figure>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What I look for</h2>
    <div>
      <p>The apartments worth buying from abroad are usually the ones that show badly. A dark hallway that can be opened up. A kitchen at the back that can move to the living room. A 50 m² (540 sq ft) one-bedroom that becomes a two-bedroom once the layout is redrawn.</p>
      <p>Those are the ones other buyers pass over, and the ones where design adds the most value for the same budget.</p>
      <p>I also tell you which ones to pass on. A beautiful apartment under a roof that the building has not voted to repair is not a bargain.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>After the search</h2>
    <div>
      <p>The search is the first step of a complete service that runs to the handover of a finished, furnished apartment: design, technical drawings, final quote, site supervision, furnishing. <a href="${c.link("services/")}#search-to-keys">See every step, from the search to the keys</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Questions about the search</h2>
    ${faqBlock(sourcing.faq)}
  </div>
</section>`,
};

// The five drawings shown on the Renovation page, all landscape, in one grid of equal cells.
export const PLANS = ["x-plan4", "x-plan2", "x-plan3", "x-plan5", "x-plan1"];

const renovation = {
  path: "paris-apartment-renovation/",
  alt: "fr/renovation-appartement-paris/",
  crumb: "Renovation",
  service: "Full apartment renovation in Paris",
  title: "Paris apartment renovation, managed for you | Stouls Studio",
  description: "Design, technical drawings, materials, site supervision and furnishing for your Paris apartment, by interior architect and designer Margaux Stouls, from the first plan to the keys.",
  faq: [
    ["Do I need the building's permission to renovate?", "For work inside your apartment that touches nothing shared, usually not. For anything affecting structure, shared pipes, the façade or windows, the copropriété (the building's co-ownership) has to agree, and some work also needs a filing with city hall. I check the building's rules before the design is final."],
    ["How do I pay contractors from abroad?", "By wire transfer, directly to each contractor, against invoices I have checked against the work completed. I do not collect or hold contractor payments."],
    ["How do I follow the renovation?", "A written report every week or every two weeks depending on the stage of the work, photographs of the job site, and videos or a video call when you cannot come. Every choice that is yours to make comes with pictures and a price."],
    ["Can you renovate only the kitchen or bathroom?", "Yes, the studio also does partial renovations. Most apartments bought from abroad need the wiring, plumbing and layout looked at together, though. It costs less to open the walls once."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Renovation</p>
  <h1>A project designed in every detail, followed to the end of the work</h1>
  <p class="lede">Rethinking the spaces, drawing the plans, choosing the materials and imagining the details that will make the difference: I design your interior as a whole, taking into account the way you live and the character of the place.</p>
  <p class="lede">To build the project, I work with teams of craftspeople in every trade, people I have known and trusted for years. I supervise the job site and make sure, alongside them, that the work is done properly, through the final finishes.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What you approve before work starts</h2>
    <div>
      <p>Nothing is built that you have not seen and agreed to. Before work starts, I put three things in front of you.</p>
      <ul>
        <li>The project in images: the new layout and, where it helps, the rooms modeled in 3D, so you can change your mind while it still costs nothing.</li>
        <li>The technical drawings: the renovation plans and the dimensioned elevations of the kitchen, the bathrooms and each piece of millwork. Contractors price and build from these.</li>
        <li>The sourcing: the materials, the furniture, the lights and the decoration chosen with you, listed item by item.</li>
      </ul>
      <p>You sign the drawings. The final quote is then drawn up from the finished set, so it prices exactly what you approved.</p>
    </div>
    <div class="figs plans">
      ${PLANS.map((n, i) => c.img(n, ["Floor plan of a studio with kitchen, living room, bathroom and sleeping area, Stouls Studio", "Floor plan of an apartment with two bedrooms and two terraces, Stouls Studio", "Electrical plan of a large apartment, Stouls Studio", "Dimensioned elevations of a powder room and a children's bathroom, Stouls Studio", "Dimensioned elevations of a kitchen in oak and terracotta tiles, Stouls Studio"][i], "", false, "(max-width: 820px) 100vw, 33vw")).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>On the job site</h2>
    <div>
      <div class="figs five">
        ${["x-site1", "x-site2", "x-site3", "x-site4", "x-site5"].map((n, i) => c.img(n, ["Demolition under way in a Paris apartment, rubble on the floor, a Stouls Studio job site", "An old chimney flue opened up during demolition, a Stouls Studio job site", "Two workers bagging rubble in a room stripped back to the structure, a Stouls Studio job site", "An installer setting a new window frame facing a Paris courtyard, a Stouls Studio job site", "A plasterer sanding a wall from a stepladder, a Stouls Studio job site"][i])).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>What is included</h2>
    <ul class="rows">
      <li><h3>Design</h3><p>A study of what is there, then the new layout. Kitchen, bathrooms, built-in cabinetry, lighting and colors are drawn for the apartment as it really is.</p></li>
      <li><h3>Technical drawings</h3><p>Renovation plans and elevations, detailed enough for every contractor to price the same thing and build it without guessing.</p></li>
      <li><h3>Materials and furniture</h3><p>Floors, tiles, faucets, lights, fabrics, furniture and objects, selected with you and listed with the drawings.</p></li>
      <li><h3>Building approvals</h3><p>Reading the copropriété rules, preparing the file for the syndic (the building's managing agent) and for the owners' vote where one is needed, and any filing with city hall.</p></li>
      <li><h3>Site supervision</h3><p>Visits through the renovation, a written report with photographs every week or every two weeks depending on the stage of the work, and punch-list items listed and closed before the last payment.</p></li>
      <li><h3>Furnishing and handover</h3><p>From the sofa to the corkscrew, if you want it. The apartment is handed over ready to live in or to rent out.</p></li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Where the renovation fits</h2>
    <div>
      <p>The renovation is the heart of both ways of working with the studio. If you have not bought yet, it follows the <a href="${c.link("apartment-search-paris/")}">apartment search</a>. If you already own the apartment, it starts with a study of the place and your brief.</p>
      <p><a href="${c.link("services/")}">The two options, step by step, and how the renovation is supervised</a>.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What old Paris buildings do to a plan</h2>
    <div>
      <p>Most of Paris was built before 1914. The floors are wood or iron joists, the walls between rooms are often part of the structure, and the waste pipes run where they were put a century ago.</p>
      <p>That decides where a bathroom can go, which walls can open, and whether the floor can take a stone countertop. It is also why two apartments of the same size can cost such different amounts to renovate.</p>
      <p>I design with those limits in mind from the first visit. It keeps the quotes realistic and reduces the surprises in the middle of the work.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Questions about the renovation</h2>
    ${faqBlock(renovation.faq)}
  </div>
</section>`,
};

const pied = {
  path: "paris-pied-a-terre/",
  crumb: "Pied-à-terre",
  service: "Paris pied-à-terre search, renovation and furnishing",
  title: "A pied-à-terre in Paris, found and renovated | Stouls Studio",
  description: "Your own apartment in Paris, found, renovated and furnished by an interior architect while you are at home. Arrive to a finished place.",
  faq: [
    ["What is a pied-à-terre?", "A second home in a city, kept for regular short stays, not as a primary residence. The French means \"foot on the ground.\" In Paris it is usually a one- or two-bedroom apartment in a central neighborhood."],
    ["How long can I stay in my apartment each year?", "Owning property gives no right of residence. US and Canadian citizens can stay in the Schengen area for up to 90 days in any 180-day period without a visa. Longer stays need a French long-stay visa."],
    ["Who looks after it when I am away?", "I can hand over to a concierge or property manager for cleaning, mail and checks. Ask me for the ones my clients use."],
    ["Can I rent it out when I am not there?", `Short tourist rentals of a second home are tightly restricted in Paris. Longer furnished leases are possible. The <a href="../guide/buying-renovating-paris-apartment/">buyer's guide</a> sets out the rules.`],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Pied-à-terre</p>
  <h1>A pied-à-terre in Paris, ready the day you land</h1>
  <p class="lede">You choose the neighborhood and the feeling. I find the apartment, redraw it for the way you live, and hand you a furnished home.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What North American owners ask for</h2>
    <div>
      <p>Paris apartments were not laid out for the way most Americans and Canadians live. The requests come up again and again, and each has a Paris answer.</p>
      <ul>
        <li>A bathroom for each bedroom. Possible more often than sellers think, once the drainage is understood.</li>
        <li>A kitchen you can cook in, open to the living room.</li>
        <li>Cooling. Outdoor units are restricted on most Paris façades, so the options are decided building by building.</li>
        <li>Closets. Built-in cabinetry, drawn to fit, because the rooms are not square.</li>
        <li>A washer and a dryer, somewhere that is not the kitchen.</li>
        <li>Quiet. Double-pane windows that the building and the city will accept.</li>
      </ul>
      <p>A BARNES agency director reports three of these requests from American buyers: bedrooms with their own bathroom, a fitted kitchen and air conditioning (<a href="https://magazine.barnes-international.com/autres_etudes_de_marche/france_2026/article/paris-retour-acheteurs-americains/?lang=en">BARNES, 2026</a>).</p>
    </div>
  </div>
</section>

<figure class="bleed">${c.img("x-b25-6", "Bedroom with tall windows, a fireplace and a brass chandelier, apartment by Stouls Studio", "", false, "100vw")}</figure>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Keeping what made you want Paris</h2>
    <div>
      <p>Moldings, chevron oak floors, marble fireplaces, tall windows. They are why you are buying here and they are easy to lose in a renovation done quickly.</p>
      <p>The studio's work keeps them and builds around them: arched openings, limewashed walls, cane-fronted cabinets, color used on millwork and in small rooms.</p>
      <p><a href="${c.link("portfolio/")}">See finished apartments in the portfolio</a></p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Questions about owning a pied-à-terre</h2>
    ${faqBlock(pied.faq)}
  </div>
</section>`,
};

const about = {
  path: "about/",
  alt: "fr/a-propos/",
  crumb: "About",
  title: "English-speaking interior architect in Paris | Stouls Studio",
  description: "Margaux Stouls, interior architect and designer, founded Stouls Studio in Paris in 2019. More than 60 projects, from design to site supervision, in Paris and beyond.",
  body: (c) => `
<section class="about-split">
  <div class="about-photo">${c.img("margaux", "Margaux Stouls, interior architect and designer", "", true)}</div>
  <div class="about-text">
    <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / About</p>
    <h1>Margaux Stouls <span>Interior architect and designer</span></h1>
    <p>Stouls Studio is me. The person you meet at the first appointment is also the one who draws your plans, supervises your job site and sees the project through to the end.</p>
    <p>I trained in both interior architecture and product design, so I like to think of a project as a whole: the way you move through an apartment, the light, the proportions, but also the drawing of a piece of furniture, the choice of a material or getting a finish exactly right. That double background lets me move naturally from the overall vision to the details that give a place its character.</p>
    <p>I founded Stouls Studio in 2019 to design interiors that are personal, pleasant to live in and suited to the people who live in them. Since then, I have led more than 60 projects, from design to site supervision.</p>
    <p>Today I work both with people who want to find their apartment in Paris from abroad and with those who want to rethink a place they already live in. For the former, I am their eyes on the ground: I search, I visit, I share what I find and I imagine what each property could become. For the latter, I turn their wishes into a real project, custom-designed and supervised on the job site.</p>
    <p>In both cases, my approach is the same: listening, understanding the way you live and bringing out what a place has to offer, to make it an interior that feels like you.</p>
    ${c.buttons()}
    <p class="about-links"><a href="${c.link("services/")}">The two ways of working with me</a><a href="${c.link("portfolio/")}">The portfolio</a></p>
  </div>
</section>

<section class="band wide paper">
  <h2>How I work</h2>
  <ul class="quad plain">
    <li><p>One point of contact, start to finish.</p></li>
    <li><p>Contractor quotes passed on to you in full. You contract with each contractor directly.</p></li>
    <li><p>Decisions put to you with a picture and a price.</p></li>
    <li><p>In Paris and beyond, in English or in French.</p></li>
  </ul>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What an interior architect does in France</h2>
    <div>
      <p>An <em>architecte d'intérieur</em> redesigns the inside of a building: where the walls, kitchen and bathrooms go, how the rooms are lit, what everything is made of. She draws the plans contractors build from and supervises the job site.</p>
      <table>
        <thead><tr><th>Who</th><th>What they do</th></tr></thead>
        <tbody>
          <tr><td>Interior architect</td><td>Layout, technical drawings, materials, lighting, millwork, contractors and site supervision.</td></tr>
          <tr><td>Decorator</td><td>Furniture, color, fabrics and styling, without changing the layout or the plumbing and wiring.</td></tr>
          <tr><td>Structural engineer</td><td>Calculates and signs off any change to a load-bearing wall or floor. Brought in when the plan needs one.</td></tr>
          <tr><td>Buyer's agent</td><td>Searches and negotiates the purchase. Their work ends when you sign.</td></tr>
        </tbody>
      </table>
      <p>I do the first two for you, bring in the third when the plan requires it, and search for the apartment so that the purchase and the renovation are judged together.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What I do not do</h2>
    <div>
      <ul>
        <li>Tax or legal advice. Your notaire and your tax adviser cover that.</li>
        <li>Rental management. I hand the finished apartment to the manager you choose.</li>
        <li>Hold your money. The notaire holds the purchase funds, and you pay contractors directly.</li>
      </ul>
      <p>Common questions about the purchase itself are answered in the <a href="${c.link("guide/buying-renovating-paris-apartment/")}">buyer's guide</a>, and the French vocabulary in the <a href="${c.link("glossary/")}">glossary</a>.</p>
    </div>
  </div>
</section>`,
};

export const corePages = [home, services, sourcing, renovation, pied, about];
export { faqBlock };
