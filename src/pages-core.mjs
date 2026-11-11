// Home, service pages and About. Legal and tax content lives in pages-guide.mjs.

const faqBlock = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;

const planSvg = `<svg class="plan" viewBox="0 0 300 430" role="img" aria-label="Line drawing of a Paris apartment floor plan">
  <path class="draw" pathLength="1" d="M40 150 H260 V390 H40 Z"/>
  <path class="draw" pathLength="1" d="M40 250 H120 M150 250 H260 M150 150 V225 M150 250 V300 M150 330 V390 M40 320 H95 M125 320 H150"/>
  <path class="draw late thin" pathLength="1" d="M120 250 A30 30 0 0 1 150 220 M150 300 A30 30 0 0 0 180 330 M95 320 A30 30 0 0 1 125 290"/>
  <path class="draw late thin" pathLength="1" d="M70 150 V143 H120 V150 M180 150 V143 H235 V150 M260 280 H267 V350 H260 M175 195 H235 V225 H175 Z M200 345 H245 V378 H200 Z"/>
  <text x="62" y="205">Bedroom</text>
  <text x="182" y="180">Living room</text>
  <text x="56" y="290">Bath</text>
  <text x="58" y="360">Entry</text>
  <text x="196" y="300">Kitchen</text>
</svg>`;

const home = {
  path: "",
  title: "Buy and renovate an apartment in Paris | Stouls Studio",
  description: "Margaux Stouls, interior architect in Paris, finds your apartment, draws the plans, runs the renovation and furnishes it while you stay in the US or Canada. Rental investment or pied-à-terre.",
  faq: [
    ["Do I have to come to Paris?", "Not for the search or the works. Margaux visits apartments for you and sends video, measurements and her read on what the renovation involves. During the works she sends photo and video reports from site. Most buyers come once to see the apartment before they commit, and once for the handover."],
    ["Can you work on an apartment I already own?", "Yes. Sourcing is a separate service. If you already have the keys, the work starts at the survey and the plans."],
    ["Do you work in English?", "Yes. Calls, plans, quotes and site reports are in English. The contractors work in French, and Margaux stands between you and them."],
    ["What does it cost?", "Each stage is quoted in writing before it starts: search, design, site management, furnishing. Contractor quotes are shown to you in full."],
    ["Do you only work in Paris?", "Paris and the towns that touch it. Staying close is what lets her be on site through the works."],
  ],
  body: (c) => `
<section class="hero">
  <div class="hero-copy">
    <h1>Your Paris apartment, found, rebuilt and furnished while you stay home.</h1>
    <p class="lede">Margaux Stouls is an interior architect in Paris. She searches and visits for you, draws the plans, runs the building site and furnishes the place. You buy the apartment and hand her the keys.</p>
    ${c.buttons()}
  </div>
  <div class="arch-wrap"><div class="arch">${c.img("hero", "Arched doorway opening onto a bathroom in a Paris apartment designed by Stouls Studio", "", true) || planSvg}</div></div>
</section>

${c.photo("project-1") ? `<section class="band">
  <div class="band-grid">
    <h2>Recent apartments</h2>
    <div class="gallery">
      ${["Bedroom corner with a curved mirror against a green half-height wall", "Arched niche with bookshelves beside an exposed timber post", "Cane-fronted cupboard doors with oak handles", "Marble fireplace with a gilt mirror and built-in shelves", "Living room with built-in oak bookshelves and a window bench", "Built-in dining banquette with a fluted panel and wall lights"].map((alt, n) => c.img(`project-${n + 1}`, `${alt}, apartment by Stouls Studio`)).filter(Boolean).map((i) => `<figure>${i}</figure>`).join("\n      ")}
      <p class="gallery-more"><a href="${c.link("portfolio/")}">See the full portfolio</a></p>
    </div>
  </div>
</section>` : `<section class="band">
  <div class="band-grid">
    <h2>Recent apartments</h2>
    <div><p>Finished projects are on the studio's Instagram: arched doorways, limewashed walls, cane and oak joinery, deep green paint.</p>
    <p><a href="https://www.instagram.com/${c.cfg.instagram}/">See the work on Instagram @${c.cfg.instagram}</a></p></div>
  </div>
</section>`}

<section class="band">
  <div class="band-grid">
    <h2>Two reasons people call</h2>
    <div class="pair">
      <div>
        <h3>A place to rent out</h3>
        <p class="muted">You want a Paris apartment that earns. Margaux looks for the ones where a new layout adds a bedroom or a real kitchen, then builds and furnishes it to the standard tenants on corporate and furnished leases expect.</p>
        <p><a href="${c.link("paris-rental-investment/")}">How a rental project works</a></p>
      </div>
      <div>
        <h3>A place of your own</h3>
        <p class="muted">You want your own front door in Paris for a few months a year. She finds it, fixes what a hundred and fifty years have done to it, and has the bed made when you land.</p>
        <p><a href="${c.link("paris-pied-a-terre/")}">How a pied-à-terre project works</a></p>
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>What Margaux does</h2>
    <ul class="rows">
      <li>
        <h3>Apartment sourcing</h3>
        <div><p>She takes your brief, shortlists, visits in person and tells you what each apartment would cost to put right before you make an offer.</p>
        <a class="more" href="${c.link("apartment-sourcing-paris/")}">Apartment sourcing in Paris</a></div>
      </li>
      <li>
        <h3>Plans and design</h3>
        <div><p>Survey, new layout, kitchen and bathroom drawings, materials, lighting, joinery. Drawn for the building you bought, with its beams, chimneys and load-bearing walls.</p>
        <a class="more" href="${c.link("paris-apartment-renovation/")}">Design and renovation</a></div>
      </li>
      <li>
        <h3>Running the building site</h3>
        <div><p>She gets comparable quotes, picks the contractors with you, handles the building's approvals, and is on site to check the work against the drawings.</p>
        <a class="more" href="${c.link("paris-apartment-renovation-cost/")}">What a Paris renovation costs per m²</a></div>
      </li>
      <li>
        <h3>Furnishing</h3>
        <div><p>Furniture, lights, curtains, linen, plates. Ordered, delivered, assembled and placed, so the apartment can be lived in or listed the day you get the keys back.</p></div>
      </li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>From first call to keys back</h2>
    <ol class="steps">
      <li><div><h3>A call about what you want</h3><p>Budget, use, neighbourhoods, how much work you are willing to take on. You leave with a realistic picture of what that budget buys.</p></div><span class="when">Week 1</span></li>
      <li><div><h3>Search and visits</h3><p>Margaux visits the shortlist and sends video, measurements, the building's condition and a first renovation estimate for each.</p></div><span class="when">Until the right one turns up</span></li>
      <li><div><h3>Offer and purchase</h3><p>You buy in your own name through a notaire. She draws the plans and collects quotes during the wait between the preliminary contract and the final deed.</p></div><span class="when">About 3 months</span></li>
      <li><div><h3>Approvals and contractors</h3><p>Final drawings, the building's sign-off where it is needed, contractors chosen on like-for-like quotes.</p></div><span class="when">In parallel with the purchase</span></li>
      <li><div><h3>The works</h3><p>Site visits, decisions put to you with pictures and prices, payments released against work she has checked.</p></div><span class="when">Depends on scope</span></li>
      <li><div><h3>Furnishing and handover</h3><p>Everything installed and photographed. Keys go back to you, or to the rental manager you chose.</p></div><span class="when">Last 2 to 3 weeks</span></li>
    </ol>
  </div>
</section>


<section class="band">
  <div class="band-grid">
    <h2>Why a designer and not an agent</h2>
    <div>
      <p>A buyer's agent is paid when you buy. Their work ends at the notaire's office, which is where the hard part of a Paris apartment begins: old wiring, a kitchen in the wrong room, a building that votes on what you may change.</p>
      <p>Margaux reads an apartment as a building site before you own it. She can tell you on the visit whether the wall you want gone is holding up the floor above, where a second bathroom could drain, and roughly what the whole thing will cost. You make your offer knowing the full price, purchase plus works.</p>
      <p>Americans were the largest group of foreign non-resident buyers in Paris in 2025, with 220 purchases and a median of €864,000 for 65 m², according to the <a href="https://www.labase-lextenso.fr/documents/standard/ngp-communique-25-06-2026-6a3d39e0c38e0776349253.pdf">Notaires du Grand Paris</a>.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>What protects you when you are not there</h2>
    <ul class="rows">
      <li><h3>Your deposit sits with the notaire</h3><p>The deposit you pay at the preliminary contract is held by the notaire, a public legal officer, until the sale completes. You have ten days after signing to withdraw.</p></li>
      <li><h3>You own the contracts</h3><p>You buy in your own name and sign with each contractor yourself. Their quotes and invoices are addressed to you, and you pay them directly.</p></li>
      <li><h3>The builders are insured by law</h3><p>In France every contractor must carry ten-year liability insurance covering serious defects after the works are accepted. Margaux collects each certificate before work starts. <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2034">Service-Public</a></p></li>
      <li><h3>You pay for work done</h3><p>Payments follow the stages of the site. Each one is released after Margaux has checked the work against the drawings and sent you the photos.</p></li>
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

const sourcing = {
  path: "apartment-sourcing-paris/",
  crumb: "Apartment sourcing",
  service: "Apartment sourcing in Paris",
  title: "Buying an apartment in Paris from abroad | Stouls Studio",
  description: "Looking at apartments for sale in Paris from the US or Canada? An interior architect visits them for you and prices the renovation before you make an offer.",
  faq: [
    ["How is this different from a property finder?", "A property finder judges location and price. Margaux also judges the works: structure, plumbing runs, electrical state, what the building will allow. You get a purchase price and a renovation estimate side by side."],
    ["Do you find off-market apartments?", "Sometimes, through agents and contractors she works with. Most good apartments in Paris are listed, and go quickly. What matters is seeing them in the first days and knowing at once whether the layout can be fixed."],
    ["Who signs the purchase?", "You do, with a notaire, in your own name or through your own company. The sale itself goes through licensed Paris estate agents and the notaire. Margaux's part is the brief, the visits and the assessment of each apartment. She does not hold your money and is not a party to the sale."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Apartment sourcing</p>
  <h1>Buying an apartment in Paris, with someone who will have to renovate it</h1>
  <p class="lede">The listings of apartments for sale in Paris look alike from across the Atlantic. Margaux searches, visits and reports. You see every apartment on video with her notes on what it needs, and you make an offer knowing what the works will cost.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What you get for each apartment</h2>
    <div>
      <ul>
        <li>A walk-through video, room by room, with the street and the stairwell.</li>
        <li>Measurements and a sketch of the layout as it is and as it could be.</li>
        <li>Her notes on structure, damp, wiring, plumbing, windows and heating.</li>
        <li>The energy rating and what it means for renting the place.</li>
        <li>The building: recent works, works voted but not yet paid for, monthly charges.</li>
        <li>A first renovation estimate, so the comparison between two apartments is the full price of each.</li>
      </ul>
      <p>Photos in a Paris listing are taken with a wide lens on a sunny day. The visit is where you learn that the bedroom faces a wall two metres away, or that the only place for a washing machine is the entry hall.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What she looks for</h2>
    <div>
      <p>The apartments worth buying from abroad are usually the ones that show badly. A dark corridor that can be opened up. A kitchen at the back that can move to the living room. A 50 m² one-bedroom that becomes a two-bedroom once the layout is redrawn.</p>
      <p>Those are the ones other buyers pass over, and the ones where design adds the most value for the money spent.</p>
      <p>She also tells you which ones to leave. A beautiful flat under a roof that the building has not voted to repair is not a bargain.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Questions about sourcing</h2>
    ${faqBlock(sourcing.faq)}
  </div>
</section>`,
};

const renovation = {
  path: "paris-apartment-renovation/",
  crumb: "Renovation",
  service: "Turnkey apartment renovation in Paris",
  title: "Paris apartment renovation, managed for you | Stouls Studio",
  description: "Plans, building approvals, contractors, site visits and furnishing for your Paris apartment, run by interior architect Margaux Stouls and reported to you in English.",
  faq: [
    ["Do I need the building's permission to renovate?", "For work inside your apartment that touches nothing shared, usually not. For anything affecting structure, shared pipes, the façade or windows, the co-owners' association has to agree, and some work also needs a filing at the town hall. Margaux checks the building's rules before the design is fixed."],
    ["How do I pay contractors from abroad?", "By bank transfer, directly to each contractor, against invoices Margaux has checked against work done. She does not collect or hold contractor payments."],
    ["How do I follow the works?", "Photo and video reports from site, and a call whenever a decision is yours to make. Every choice comes with pictures and a price."],
    ["Can you renovate only the kitchen or bathroom?", "Yes, though most apartments bought from abroad need the wiring, plumbing and layout looked at together. It costs less to open the walls once."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Renovation</p>
  <h1>Paris apartment renovation, run for you from start to keys</h1>
  <p class="lede">One person draws the plans, hires the trades, stands on site and answers to you. In English, with photos, and with the quotes in front of you.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What you see before work starts</h2>
    <div>
      <div class="figs contain">
        ${["render-5", "drawing-1", "drawing-3"].map((n, i) => c.img(n, ["3D visualisation of a walnut kitchen with an island, Stouls Studio", "Electrical and lighting plan of an apartment, Stouls Studio", "Dimensioned elevation of a kitchen wall with joinery notes, Stouls Studio"][i])).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n        ")}
      </div>
      <p>From abroad you cannot stand in the room and point. So Margaux models the rooms in three dimensions, and you see the apartment on screen while changing your mind still costs nothing.</p>
      <p>Once you approve, she produces the technical drawings: plans for electrics, lighting and plumbing, and dimensioned elevations of every piece of joinery. Contractors price and build from those. <a href="${c.link("portfolio/")}#3d-visualisations">More visualisations and drawings</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>What is included</h2>
    <ul class="rows">
      <li><h3>Survey and layout</h3><p>A measured survey of what is there, then two or three ways to rearrange it. You choose one before any detail is drawn.</p></li>
      <li><h3>Detailed design</h3><p>Kitchen, bathrooms, built-in joinery, lighting plan, materials and colours. Each item drawn and specified so contractors price the same thing.</p></li>
      <li><h3>Building approvals</h3><p>Reading the co-ownership rules, preparing the file for the building manager and the co-owners' vote where one is needed, and any town hall filing.</p></li>
      <li><h3>Contractors</h3><p>Like-for-like quotes from trades she has worked with, laid out line by line. You sign with the contractors directly.</p></li>
      <li><h3>Site management</h3><p>Site visits through the works, a written report after each with photos, and snags listed and closed before the last payment.</p></li>
      <li><h3>Furnishing</h3><p>From the sofa to the corkscrew, if you want it. Useful when the apartment will be let furnished or when you arrive with two suitcases.</p></li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What old Paris buildings do to a plan</h2>
    <div>
      <p>Most of Paris was built before 1914. The floors are timber or iron joists, the walls between rooms are often part of the structure, and the waste pipes run where they were put a century ago.</p>
      <p>That decides where a bathroom can go, which walls can open, and whether the floor can take a stone worktop. It is also why two apartments of the same size can cost very different amounts to renovate.</p>
      <p>Margaux designs with those limits known from the first visit. It keeps the quotes honest and avoids the mid-site surprise that eats the contingency.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Questions about the works</h2>
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
    ["What is a pied-à-terre?", "A second home in a city, kept for regular short stays, not as a main residence. The French means \"foot on the ground\". In Paris it is usually a one- or two-bedroom apartment in a central neighbourhood."],
    ["How long can I stay in my apartment each year?", "Owning property gives no right of residence. US and Canadian citizens can stay in the Schengen area for up to 90 days in any 180-day period without a visa. Longer stays need a French long-stay visa."],
    ["Who looks after it when I am away?", "Margaux can hand over to a concierge or property manager for cleaning, mail and checks. Ask her for the ones her clients use."],
    ["Can I rent it out when I am not there?", `Short tourist lets of a second home are tightly restricted in Paris. Longer furnished leases are possible. The <a href="../guide/buying-renovating-paris-apartment/">buyer's guide</a> sets out the rules.`],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Pied-à-terre</p>
  <h1>A pied-à-terre in Paris, ready the day you land</h1>
  <p class="lede">You choose the neighbourhood and the feeling. Margaux finds the apartment, redraws it for the way you live, and hands you a furnished home.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What North American owners ask for</h2>
    <div>
      <p>A pied-à-terre is a second home in a city, kept for regular short stays. In Paris that usually means a one- or two-bedroom apartment in a central neighbourhood.</p>
      <p>Paris apartments were not laid out for the way most Americans and Canadians live. The requests come up again and again, and each has a Paris answer.</p>
      <ul>
        <li>A bathroom for each bedroom. Possible more often than sellers think, once the drainage is understood.</li>
        <li>A kitchen you can cook in, open to the living room.</li>
        <li>Cooling. Outdoor units are restricted on most Paris façades, so the options are decided building by building.</li>
        <li>Closets. Built-in joinery, drawn to the centimetre, because the rooms are not square.</li>
        <li>A washer and a dryer, somewhere that is not the kitchen.</li>
        <li>Quiet. Double glazing that the building and the city will accept.</li>
      </ul>
      <p>Agents who work with American buyers report the same list: en-suite bedrooms, a full kitchen and air conditioning (<a href="https://magazine.barnes-international.com/autres_etudes_de_marche/france_2026/article/paris-retour-acheteurs-americains/?lang=en">BARNES, 2026</a>).</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Keeping what made you want Paris</h2>
    <div>
      <p>Mouldings, herringbone oak, marble fireplaces, tall windows. They are why you are buying here and they are easy to lose in a renovation done quickly.</p>
      <p>The studio's work keeps them and builds around them: arched openings, limewashed walls, cane-fronted cupboards, colour used on joinery and in small rooms.</p>
      <p><a href="https://www.instagram.com/${c.cfg.instagram}/">See finished apartments on Instagram</a></p>
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
  crumb: "About",
  title: "English-speaking interior architect in Paris | Stouls Studio",
  description: "Margaux Stouls founded Stouls Studio in Paris in 2019. She designs and manages apartment renovations, and works with owners based in North America.",
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / About</p>
  <h1>Margaux Stouls, English-speaking interior architect in Paris</h1>
  <p class="lede">Stouls Studio is one person. The one you speak to on the first call is the one who draws your plans and stands on your building site.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>The studio</h2>
    <div>
      ${c.img("margaux", "Margaux Stouls, interior architect", "portrait")}
      <p>Margaux founded Stouls Studio in Paris in 2019. She designs apartments and runs their renovation: survey, plans, contractors, site, furniture.</p>
      <p>Working with owners abroad started with Canadian clients who bought in Paris and could not be there for the works. They handed over the keys and came back to a finished apartment. Others followed by word of mouth.</p>
      <p>She now offers the same thing from one step earlier: finding the apartment.</p>
      <p><a href="https://www.instagram.com/${c.cfg.instagram}/">Instagram @${c.cfg.instagram}</a></p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>How she works</h2>
    <div>
      <ul>
        <li>One client-facing person, start to finish.</li>
        <li>Quotes shown in full. You contract with the trades directly.</li>
        <li>Decisions put to you with a picture and a price.</li>
        <li>Paris only, so she can be on site.</li>
      </ul>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What an interior architect does in France</h2>
    <div>
      <p>An <em>architecte d'intérieur</em> redesigns the inside of a building: where the walls, kitchen and bathrooms go, how the rooms are lit, what everything is made of. She draws the plans contractors build from and manages the site.</p>
      <table>
        <thead><tr><th>Who</th><th>What they do</th></tr></thead>
        <tbody>
          <tr><td>Interior architect</td><td>Layout, technical drawings, materials, lighting, joinery, contractors and site management.</td></tr>
          <tr><td>Decorator</td><td>Furniture, colour, fabrics and styling, without changing the layout or the services.</td></tr>
          <tr><td>Structural engineer</td><td>Calculates and signs off any change to a load-bearing wall or floor. Brought in when the plan needs one.</td></tr>
          <tr><td>Buyer's agent</td><td>Searches and negotiates the purchase. Their work ends when you sign.</td></tr>
        </tbody>
      </table>
      <p>Margaux does the first two for you, brings in the third when the plan requires it, and searches for the apartment so that the fourth step and the works are judged together.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What she does not do</h2>
    <div>
      <ul>
        <li>Tax or legal advice. Your notaire and a cross-border tax adviser cover that.</li>
        <li>Rental management. She hands the finished apartment to the manager you choose.</li>
        <li>Hold your money. The notaire holds the purchase funds, and you pay contractors directly.</li>
      </ul>
      <p>Common questions about the purchase itself are answered in the <a href="${c.link("guide/buying-renovating-paris-apartment/")}">buyer's guide</a>, and the French vocabulary in the <a href="${c.link("glossary/")}">glossary</a>.</p>
    </div>
  </div>
</section>`,
};

export const corePages = [home, sourcing, renovation, pied, about];
export { faqBlock };
