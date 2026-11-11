// Definition pages, cost page and the page for Canadian buyers.
// Each page opens with the direct answer, because that is the sentence search
// engines and AI assistants quote. Facts checked 11 November 2026.
import { faqBlock } from "./pages-core.mjs";

const UPDATED = "Stouls Studio, Paris. Updated 11 November 2026.";
const SRC = {
  copro: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31513?lang=en",
  dpeLet: "https://www.ecologie.gouv.fr/presse/logements-classes-dpe-g-regles-evoluent-1er-janvier-gouvernement-continue-proteger",
  parisTourist: "https://www.paris.fr/pages/meubles-touristiques-3637",
  mobilite: "https://www.service-public.fr/particuliers/vosdroits/F34759",
  notaires: "https://www.labase-lextenso.fr/documents/standard/ngp-communique-25-06-2026-6a3d39e0c38e0776349253.pdf",
  homeSelect: "https://homeselect.paris/en/blog/renovation-appartement-parisien-budget-etapes/",
  parisBuyer: "https://parisbuyer.la-boite-immo.com/renovation",
};

const head = (c, crumbPath, crumbLabel, h1, lede) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / ${crumbPath ? `<a href="${c.link("glossary/")}">Glossary</a> / ` : ""}${crumbLabel}</p>
  <h1>${h1}</h1>
  <p class="lede">${lede}</p>
  <p class="crumbs">${UPDATED}</p>
</section>`;

const pied = {
  path: "glossary/pied-a-terre/",
  crumb: "Pied-à-terre",
  term: ["Pied-à-terre", "A small second home in a city, kept for regular short stays and not used as a main residence."],
  title: "What is a pied-à-terre? Meaning and pronunciation | Stouls Studio",
  description: "A pied-à-terre is a small second home in a city, kept for short stays. Meaning, pronunciation, plural, and what owning one in Paris involves.",
  faq: [
    ["What does pied-à-terre mean?", "A pied-à-terre is a small second home in a city, kept for regular short stays and not used as a main residence. The French words mean \"foot on the ground\"."],
    ["How do you pronounce pied-à-terre?", "Roughly \"pyay-dah-TAIR\". The d of pied links to the à, and the final e of terre is silent."],
    ["What is the plural of pied-à-terre?", "Pieds-à-terre. Only the first word takes an s, and the pronunciation does not change."],
    ["Is a pied-à-terre the same as a vacation home?", "Not quite. A vacation home is usually somewhere you go to rest. A pied-à-terre is in a city you return to often, for work, family or pleasure, and it is typically an apartment."],
    ["Can a foreigner own a pied-à-terre in Paris?", "Yes. France has no nationality restriction on buying residential property. Owning one does not give a right to live in France: US and Canadian citizens may stay 90 days in any 180 without a visa."],
  ],
  body: (c) => `${head(c, true, "Pied-à-terre", "What is a pied-à-terre?", "A pied-à-terre is a small second home in a city, kept for regular short stays and not used as a main residence. The French words mean “foot on the ground”.")}

<section class="band">
  <div class="band-grid prose">
    <h2>Where does the word come from?</h2>
    <div>
      <p>It is French, literally “foot on the ground”: a place to set your foot down when you arrive. English borrowed it in the nineteenth century and kept the spelling, hyphens and accent.</p>
      <p>It is pronounced roughly “pyay-dah-TAIR”. The plural is <em>pieds-à-terre</em>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What counts as a pied-à-terre?</h2>
    <div>
      <ul>
        <li>It is in a city, and usually an apartment.</li>
        <li>It is small: a studio, one bedroom, sometimes two.</li>
        <li>It is not where the owner lives most of the year.</li>
        <li>The owner uses it regularly, a few days or weeks at a time.</li>
      </ul>
      <p>A house in the country where you spend August is a holiday home. An apartment near the office that you sleep in three nights a week is a pied-à-terre. So is a one-bedroom in the 6th arrondissement owned by a couple from Boston who come four times a year.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What does owning a pied-à-terre in Paris involve?</h2>
    <div>
      <table>
        <thead><tr><th>Question</th><th>Short answer</th></tr></thead>
        <tbody>
          <tr><td>Can a foreigner buy one?</td><td>Yes, with no nationality restriction.</td></tr>
          <tr><td>How long can I stay?</td><td>US and Canadian citizens: 90 days in any 180 without a visa.</td></tr>
          <tr><td>What do buyers pay?</td><td>The median purchase by a foreign non-resident in Paris in 2025 was €864,000 for 65 m². <a href="${SRC.notaires}">Notaires du Grand Paris</a></td></tr>
          <tr><td>Can I rent it by the night when away?</td><td>Not without a change-of-use authorisation, which most owners cannot get. <a href="${SRC.parisTourist}">City of Paris</a></td></tr>
          <tr><td>Can I rent it for months?</td><td>Yes, on a furnished lease such as a bail mobilité of 1 to 10 months. <a href="${SRC.mobilite}">Service-Public</a></td></tr>
        </tbody>
      </table>
      <p>Most apartments that suit the purpose need work before they suit the owner. <a href="${c.link("paris-pied-a-terre/")}">How Stouls Studio finds, renovates and furnishes a pied-à-terre in Paris</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Short answers</h2>
    ${faqBlock(pied.faq)}
  </div>
</section>`,
};

const bonne = {
  path: "glossary/chambre-de-bonne/",
  crumb: "Chambre de bonne",
  term: ["Chambre de bonne", "A former servant's room under the roof of a Paris apartment building, usually 6 to 12 m², reached by a service staircase."],
  title: "What is a chambre de bonne? | Stouls Studio",
  description: "A chambre de bonne is a former servant's room under the roof of a Paris building, usually 6 to 12 m². What it is, the legal minimum size to rent one, and what can be done with it.",
  faq: [
    ["What is a chambre de bonne?", "A chambre de bonne is a former servant's room on the top floor of a Paris apartment building, usually 6 to 12 m², reached by a separate service staircase."],
    ["Can you live in a chambre de bonne?", "You can own and use one of any size. To rent it out as a home it must have at least 9 m² of floor area with a ceiling height of 2.20 m, or a volume of 20 m³."],
    ["Can several chambres de bonne be joined together?", "Often, yes. Joining two or three neighbouring rooms into a studio is a common Paris project. It needs the building's agreement when shared walls, corridors or pipes are involved."],
    ["Does a chambre de bonne have a bathroom?", "Originally no. There was a shared toilet and a tap on the landing. Many have since been fitted with a shower and a toilet, when the building's drainage allows it."],
  ],
  body: (c) => `${head(c, true, "Chambre de bonne", "What is a chambre de bonne?", "A chambre de bonne is a former servant's room under the roof of a Paris apartment building. Most measure 6 to 12 m² and are reached by a separate service staircase.")}

<section class="band">
  <div class="band-grid prose">
    <h2>Why do Paris buildings have them?</h2>
    <div>
      <p>The apartment buildings put up in Paris in the second half of the nineteenth century were built for households with live-in staff. The family lived on the main floors. The maid, <em>la bonne</em>, slept in a small room on the top floor, under the zinc roof.</p>
      <p>Each room belonged to an apartment below. A narrow back staircase, the <em>escalier de service</em>, linked the kitchens to the top floor so staff did not use the main stairs.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What is one like today?</h2>
    <div>
      <ul>
        <li>Top floor, often the sixth or seventh, frequently without a lift to that level.</li>
        <li>A sloping ceiling and a small window or skylight, sometimes with a view over the rooftops.</li>
        <li>Originally no bathroom: a shared toilet and tap on the landing.</li>
        <li>Sold with the apartment it belonged to, or separately as its own lot.</li>
      </ul>
      <h3>What is the minimum size to rent one out?</h3>
      <p>French rules on decent housing require a main room of at least 9 m² with 2.20 m of ceiling height, or a volume of at least 20 m³. A room below that can be owned and used, but not let as someone's home.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What can be done with a chambre de bonne?</h2>
    <div>
      <ul>
        <li>A guest room or office for the apartment downstairs.</li>
        <li>Two or three joined into a studio, with a real shower room and kitchenette.</li>
        <li>Storage that frees a room in the main apartment.</li>
      </ul>
      <p>The limits are almost always the drainage and the building's rules. Before buying an apartment for its maid's room, have someone check where waste water can go and what the co-owners have allowed before. Margaux looks at both on the visit. <a href="${c.link("apartment-sourcing-paris/")}">How she assesses an apartment before you offer</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Short answers</h2>
    ${faqBlock(bonne.faq)}
  </div>
</section>`,
};

const haussmann = {
  path: "glossary/haussmann-apartment/",
  crumb: "Haussmann apartment",
  term: ["Haussmann apartment", "An apartment in one of the stone buildings put up during and after the rebuilding of Paris led by Georges-Eugène Haussmann from 1853 to 1870."],
  title: "What is a Haussmann apartment? | Stouls Studio",
  description: "A Haussmann (Haussmannian) apartment is in one of the cut-stone buildings from the rebuilding of Paris, 1853 to 1870. How to recognise one, its layout, and what a renovation changes.",
  faq: [
    ["What is a Haussmann apartment?", "A Haussmann apartment is a flat in one of the cut-stone buildings put up during the rebuilding of Paris led by Georges-Eugène Haussmann between 1853 and 1870, and in the same style until about 1914."],
    ["Is it Haussmann or Haussmannian?", "Both are used in English. Haussmannian is the adjective, from the French haussmannien. They describe the same buildings."],
    ["Which floor is best in a Haussmann building?", "The second floor was the grandest, with the highest ceilings and a continuous balcony. Today the fifth floor, which also has a balcony and more light, is often the most sought after when there is a lift."],
    ["Can you remove walls in a Haussmann apartment?", "Some. Many internal walls carry load or brace the building. Any change to a load-bearing wall needs a structural engineer and a vote of the co-owners."],
    ["Can you add air conditioning?", "It is decided building by building. Outdoor units on a façade or roof need the building's approval and usually a filing with the city, and are refused on many protected streets."],
  ],
  body: (c) => `${head(c, true, "Haussmann apartment", "What is a Haussmann apartment?", "A Haussmann apartment is a flat in one of the cut-stone buildings put up during the rebuilding of Paris led by Georges-Eugène Haussmann between 1853 and 1870, and in the same style until about 1914.")}

<section class="band">
  <div class="band-grid prose">
    <h2>How do you recognise a Haussmann building?</h2>
    <div>
      <ul>
        <li>A façade in pale cut stone, lined up with its neighbours.</li>
        <li>Five or six storeys under a grey zinc or slate roof.</li>
        <li>A continuous balcony on the second floor and another on the fifth.</li>
        <li>Shops at street level and a low floor just above them.</li>
        <li>Maids' rooms under the roof. <a href="${c.link("glossary/chambre-de-bonne/")}">What a chambre de bonne is</a>.</li>
      </ul>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What is inside?</h2>
    <div>
      <table>
        <thead><tr><th>Feature</th><th>What it is</th></tr></thead>
        <tbody>
          <tr><td>Reception rooms in a row</td><td>Living and dining rooms on the street side, opening into each other through double doors.</td></tr>
          <tr><td>Ceiling height</td><td>Highest on the second floor, lower as you go up.</td></tr>
          <tr><td>Mouldings</td><td>Plaster cornices and ceiling roses.</td></tr>
          <tr><td>Parquet</td><td>Oak laid in herringbone or chevron.</td></tr>
          <tr><td>Fireplaces</td><td>Marble, with a mirror above.</td></tr>
          <tr><td>Kitchen</td><td>At the back, on the courtyard, by the service staircase.</td></tr>
          <tr><td>Corridor</td><td>Long, linking the front rooms to bedrooms and kitchen.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What changes when one is renovated?</h2>
    <div>
      <p>The layout was drawn for a household with staff. The kitchen is far from the dining room, there is one bathroom for four bedrooms, and a fifth of the floor area is corridor.</p>
      <ul>
        <li>The kitchen moves to the front, beside or inside the living room.</li>
        <li>The old kitchen becomes a bedroom or a bathroom, since the pipes are already there.</li>
        <li>Part of the corridor is absorbed into rooms or closets.</li>
        <li>Wiring and plumbing are replaced throughout.</li>
        <li>Mouldings, parquet and fireplaces are kept and repaired.</li>
      </ul>
      <p>What decides the plan is where the building's waste pipes run and which walls carry load. <a href="${c.link("paris-apartment-renovation/")}">How Stouls Studio designs and runs a renovation in Paris</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Short answers</h2>
    ${faqBlock(haussmann.faq)}
  </div>
</section>`,
};

const copro = {
  path: "glossary/copropriete-syndic/",
  crumb: "Copropriété and syndic",
  term: ["Copropriété", "The French form of shared building ownership: each owner holds a private unit and a share of the common parts."],
  title: "Copropriété and syndic explained | Stouls Studio",
  description: "A copropriété is a building owned in shares by its apartment owners. The syndic is the manager they appoint. What each does, what you pay, and what they decide about your renovation.",
  faq: [
    ["What is a copropriété?", "A copropriété is a building divided into privately owned units, where each owner also holds a share of the common parts such as the roof, stairs and façade. It is the French equivalent of a condominium."],
    ["What is a syndic?", "The syndic is the manager appointed by the co-owners to run the building: it collects charges, pays the bills, keeps the accounts, organises repairs and calls the annual general meeting."],
    ["What are charges de copropriété?", "The building's running costs, shared among owners according to their share: cleaning, insurance, lift, the syndic's fee, sometimes heating and water. They are billed quarterly."],
    ["How often do co-owners meet?", "At least once a year, at the general meeting, where the accounts, the budget and any works are voted."],
    ["Do I need the copropriété's permission to renovate?", "Not for work inside your unit that touches nothing shared. Work affecting load-bearing walls, floors, shared pipes or the façade needs a vote at the general meeting."],
  ],
  body: (c) => `${head(c, true, "Copropriété and syndic", "What are a copropriété and a syndic?", "A copropriété is a building owned in shares by its apartment owners, the French equivalent of a condominium. The syndic is the manager they appoint to run it.")}

<section class="band">
  <div class="band-grid prose">
    <h2>How does a copropriété work?</h2>
    <div>
      <p>When you buy an apartment in Paris you buy a <em>lot</em>: your private unit plus a fixed share of everything that is shared. That share sets your vote at meetings and your part of the bills.</p>
      <table>
        <thead><tr><th>French term</th><th>What it is</th></tr></thead>
        <tbody>
          <tr><td>Règlement de copropriété</td><td>The building's rule book: what is private, what is shared, what uses are allowed.</td></tr>
          <tr><td>Syndic</td><td>The manager, usually a professional firm, appointed by vote.</td></tr>
          <tr><td>Conseil syndical</td><td>A few owners elected to oversee the syndic.</td></tr>
          <tr><td>Assemblée générale</td><td>The owners' meeting, at least once a year, where everything is voted.</td></tr>
          <tr><td>Charges</td><td>Running costs, billed quarterly according to your share.</td></tr>
          <tr><td>Travaux votés</td><td>Works already approved, such as a new roof, that owners will be billed for.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What should a buyer read before making an offer?</h2>
    <div>
      <ul>
        <li>The minutes of the last three general meetings. They show disputes, unpaid charges and works under discussion.</li>
        <li>The works voted but not yet billed, and who pays them: seller or buyer.</li>
        <li>The annual charges for the unit.</li>
        <li>The rule book, for limits on use, such as short lets or a professional practice.</li>
      </ul>
      <p>The seller's agent or notaire supplies these. They are in French, and they are where a cheap apartment turns out to be an expensive one.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What does the copropriété decide about a renovation?</h2>
    <div>
      <p>Inside your own walls, with nothing shared touched, you need no vote. As soon as the work affects load-bearing walls, floors, shared pipes, the façade or the windows, the owners must approve it at a general meeting (<a href="${SRC.copro}">Service-Public</a>).</p>
      <p>Since meetings are often held once a year, the date of the next one can set the start of your works. Margaux checks the rule book and the calendar before the design is fixed. <a href="${c.link("paris-apartment-renovation/")}">How she handles building approvals</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Short answers</h2>
    ${faqBlock(copro.faq)}
  </div>
</section>`,
};

const terms = [
  ["Notaire", "A public legal officer who drafts and registers property sales in France. Every purchase goes through one. Buyer and seller may each have their own at no extra cost, since they share the fee."],
  ["Compromis de vente", "The preliminary sale contract. It fixes the price and conditions, and the buyer pays a deposit, commonly about 10%. The buyer then has ten days to withdraw."],
  ["Acte de vente", "The final deed, signed at the notaire's office two to three months after the compromis. Ownership and keys change hands that day."],
  ["Frais de notaire", "The costs paid on top of the price at signing, about 7% to 8% for an existing apartment. Most of it is transfer tax, not the notaire's own fee."],
  ["DPE", "Diagnostic de performance énergétique, the energy rating from A to G that every property for sale must show. G-rated homes cannot be newly let since 1 January 2025."],
  ["Loi Carrez", "The law requiring the seller of a unit in a shared building to state its private floor area. Only floor with at least 1.80 m of ceiling height counts."],
  ["Bail mobilité", "A furnished lease of 1 to 10 months, not renewable, with no deposit, for tenants such as students or people on a work assignment."],
  ["Chasseur immobilier", "A buyer's agent who searches on the buyer's behalf and is paid by the buyer, typically a percentage of the price."],
  ["Dépôt de garantie", "The security deposit a tenant pays at the start of a lease."],
  ["Meublé", "Furnished. A furnished let must include a set list of furniture and equipment defined by decree."],
];

const hub = {
  path: "glossary/",
  crumb: "Glossary",
  terms: [pied.term, bonne.term, haussmann.term, copro.term, ["Syndic", "The manager appointed by the co-owners of a French apartment building to run it."], ...terms],
  title: "Paris property glossary in plain English | Stouls Studio",
  description: "Plain-English definitions of the French words in a Paris apartment purchase and renovation: notaire, compromis, copropriété, syndic, DPE, loi Carrez, chambre de bonne, pied-à-terre.",
  body: (c) => `${head(c, false, "Glossary", "Paris property glossary", "The French words you will meet when buying and renovating an apartment in Paris, each defined in a sentence or two.")}

<section class="band">
  <div class="band-grid">
    <h2>Explained in full</h2>
    <ul class="rows">
      <li><h3><a href="${c.link("glossary/pied-a-terre/")}">Pied-à-terre</a></h3><p>${pied.term[1]}</p></li>
      <li><h3><a href="${c.link("glossary/haussmann-apartment/")}">Haussmann apartment</a></h3><p>${haussmann.term[1]}</p></li>
      <li><h3><a href="${c.link("glossary/chambre-de-bonne/")}">Chambre de bonne</a></h3><p>${bonne.term[1]}</p></li>
      <li><h3><a href="${c.link("glossary/copropriete-syndic/")}">Copropriété and syndic</a></h3><p>${copro.term[1]} The syndic is the manager the owners appoint.</p></li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Buying and renting terms</h2>
    <ul class="rows">
      ${terms.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("\n      ")}
    </ul>
  </div>
</section>`,
};

const cost = {
  path: "paris-apartment-renovation-cost/",
  crumb: "Renovation cost",
  title: "Paris apartment renovation cost per m² | Stouls Studio",
  description: "What Paris firms publish for renovation cost per m², from a refresh to a full premium renovation, why two apartments of the same size differ, and the costs on top of the contractor's quote.",
  faq: [
    ["How much does it cost to renovate an apartment in Paris?", "Paris firms publish ranges from about €500 to €900 per m² for a refresh, €1,200 to €2,000 per m² for a complete renovation and €2,000 to €3,500 per m² or more for a premium one. The state of the wiring, plumbing and structure matters more than the floor area."],
    ["What is that in square feet?", "One square metre is 10.76 square feet. €1,500 per m² is about €139 per square foot."],
    ["What is not in a contractor's quote?", "Design fees, furniture, kitchen appliances in some quotes, building-approval costs, and a contingency for what is found when walls are opened."],
    ["How long does a renovation take?", "It depends on scope and on building approvals. Works that need a vote of the co-owners cannot start before the general meeting that approves them."],
  ],
  body: (c) => `${head(c, false, "Renovation cost", "What does it cost to renovate an apartment in Paris?", "Paris firms publish ranges from about €500 per m² for a refresh to €3,500 per m² or more for a premium renovation. The state of the wiring, plumbing and structure moves the figure more than the floor area does.")}

<section class="band">
  <div class="band-grid prose">
    <h2>What do Paris firms publish?</h2>
    <div>
      <table>
        <thead><tr><th>Scope</th><th>Per m²</th><th>Per sq ft</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td>Refresh: paint, floors, small repairs</td><td>€500 to €900</td><td>€46 to €84</td><td><a href="${SRC.homeSelect}">Home Select, 2026</a></td></tr>
          <tr><td>Complete renovation</td><td>€1,200 to €2,000</td><td>€111 to €186</td><td><a href="${SRC.homeSelect}">Home Select, 2026</a></td></tr>
          <tr><td>Premium renovation</td><td>€2,000 to €3,500</td><td>€186 to €325</td><td><a href="${SRC.homeSelect}">Home Select, 2026</a></td></tr>
          <tr><td>Renovation with a design team</td><td>€3,000 to €4,000</td><td>€279 to €372</td><td><a href="${SRC.parisBuyer}">Paris Buyer</a></td></tr>
        </tbody>
      </table>
      <p class="note">These are figures published by other Paris firms, quoted here so you can compare like with like. They are not Stouls Studio quotes. Margaux prices the apartment in front of her.</p>
      <p>On the median foreign purchase in Paris, 65 m² (<a href="${SRC.notaires}">Notaires du Grand Paris</a>), a complete renovation at €1,200 to €2,000 per m² comes to €78,000 to €130,000 before design fees and furniture.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Why do two apartments of the same size cost so differently?</h2>
    <div>
      <ul>
        <li><strong>Wiring.</strong> Old installations have to be replaced entirely, which means opening walls and ceilings.</li>
        <li><strong>Plumbing.</strong> Moving a kitchen or adding a bathroom depends on where the building's waste pipes run.</li>
        <li><strong>Structure.</strong> Opening a load-bearing wall needs an engineer, steel, and the co-owners' vote.</li>
        <li><strong>Floors.</strong> Old parquet can be restored, or may hide joists that need work.</li>
        <li><strong>Windows.</strong> Replacing them changes the energy rating and needs the building's and the city's agreement.</li>
        <li><strong>Access.</strong> A sixth floor without a lift costs more in labour for everything carried up and down.</li>
        <li><strong>Finish.</strong> Custom joinery, stone and fittings can double a budget on their own.</li>
      </ul>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What comes on top of the contractor's quote?</h2>
    <div>
      <ul>
        <li>Design and site-management fees.</li>
        <li>Furniture, lighting, curtains and linen.</li>
        <li>Engineer's study, when structure is touched.</li>
        <li>Fees charged by the building manager for handling an approval.</li>
        <li>A contingency. In an old building, something is always found behind a wall.</li>
      </ul>
      <p>The useful number is the whole project: purchase, notaire fees, works, fees and furniture. Margaux gives a first estimate of the works at the visit, before you make an offer. <a href="${c.link("apartment-sourcing-paris/")}">How the pre-offer assessment works</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Short answers</h2>
    ${faqBlock(cost.faq)}
  </div>
</section>`,
};

const canada = {
  path: "canadian-buyers-paris/",
  crumb: "Canadian buyers",
  service: "Paris apartment search and renovation for Canadian buyers",
  title: "Buying an apartment in Paris from Canada | Stouls Studio",
  description: "Stouls Studio's first overseas clients were Canadian. How a Canadian buyer finds, buys, renovates and furnishes a Paris apartment without being on site, in English or French.",
  faq: [
    ["Can Canadians buy property in France?", "Yes. France places no nationality restriction on buying residential property, and you do not need to live in France to buy."],
    ["How long can a Canadian stay in France without a visa?", "Up to 90 days in any 180-day period in the Schengen area. Owning an apartment does not extend that. Longer stays need a French long-stay visa."],
    ["Do you work in French as well as English?", "Yes. Margaux is French. Clients from Québec and francophone Canada work with her in French; everyone else in English."],
    ["Do I have to travel for the purchase?", "Not necessarily. The final deed can be signed by power of attorney. Most buyers come once to see the apartment before committing."],
  ],
  body: (c) => `${head(c, false, "Canadian buyers", "A Paris apartment, bought and renovated from Canada", "Stouls Studio's first overseas clients were Canadian. They bought in Paris, handed over the keys, and came back to a finished apartment.")}
<section class="band">
  <div class="band-grid prose">
    <h2>What Margaux does for a buyer in Canada</h2>
    <div>
      <ul>
        <li>Searches and visits apartments for you, with video and a renovation estimate for each. <a href="${c.link("apartment-sourcing-paris/")}">Sourcing</a></li>
        <li>Draws the plans and gets the building's approvals.</li>
        <li>Hires the contractors and runs the site. <a href="${c.link("paris-apartment-renovation/")}">Renovation</a></li>
        <li>Furnishes the apartment down to the linen.</li>
        <li>Works in English or in French.</li>
      </ul>
      ${c.buttons()}
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>What a Canadian buyer should know first</h2>
    <div>
      <table>
        <thead><tr><th>Question</th><th>Short answer</th></tr></thead>
        <tbody>
          <tr><td>Can I buy?</td><td>Yes, with no nationality restriction.</td></tr>
          <tr><td>How long can I stay?</td><td>90 days in any 180 without a visa.</td></tr>
          <tr><td>Costs on top of the price</td><td>About 7% to 8% in notaire fees on an existing apartment.</td></tr>
          <tr><td>Time from offer to keys</td><td>Two to three months after the preliminary contract.</td></tr>
          <tr><td>Renting by the night</td><td>Closed in practice for a second home in Paris. <a href="${c.link("paris-rental-investment/")}">What is allowed</a></td></tr>
          <tr><td>Tax</td><td>Take advice from someone who handles both French and Canadian returns before you buy.</td></tr>
        </tbody>
      </table>
      <p>The full sequence is in the <a href="${c.link("guide/buying-renovating-paris-apartment/")}">buyer's guide</a>, and the French terms are in the <a href="${c.link("glossary/")}">glossary</a>.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Short answers</h2>
    ${faqBlock(canada.faq)}
  </div>
</section>`,
};

export const glossaryPages = [hub, pied, haussmann, bonne, copro, cost, canada];
