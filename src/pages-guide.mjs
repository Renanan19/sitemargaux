// Rental investment page and buyer's guide. Every rule stated here carries its source.
// Checked 11 November 2026. Re-check before changing any figure.
import { faqBlock } from "./pages-core.mjs";

const SRC = {
  parisTourist: "https://www.paris.fr/pages/meubles-touristiques-3637",
  dpeTourist: "https://www.service-public.fr/particuliers/vosdroits/F2043",
  dpeLet: "https://www.ecologie.gouv.fr/presse/logements-classes-dpe-g-regles-evoluent-1er-janvier-gouvernement-continue-proteger",
  mobilite: "https://www.service-public.fr/particuliers/vosdroits/F34759",
  ifi: "https://www.service-public.fr/particuliers/vosdroits/F138",
  copro: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31513?lang=en",
  notaires: "https://www.labase-lextenso.fr/documents/standard/ngp-communique-25-06-2026-6a3d39e0c38e0776349253.pdf",
};

const rental = {
  path: "paris-rental-investment/",
  crumb: "Rental investment",
  service: "Rental investment apartment sourcing and renovation in Paris",
  title: "Paris rental investment for US and Canadian buyers: what is allowed and what to build | Stouls Studio",
  description: "Short tourist lets of a second home are all but closed in Paris. What still works, the energy-rating rules, and how an interior architect sources and builds a rental apartment for you.",
  faq: [
    ["Can I put my Paris apartment on Airbnb?", "If it is not your main home, only with a change-of-use authorisation from the City of Paris, which requires compensation: converting commercial space into housing elsewhere. For most individual buyers that closes the door. A main home can be let to tourists for up to 90 days a year, with a registration number."],
    ["What is a bail mobilité?", "A furnished lease of one to ten months, not renewable, with no deposit, for tenants who qualify: students, people on a work assignment, in training or on a temporary posting."],
    ["Does the energy rating matter?", "Yes. Apartments rated G can no longer be let on a new or renewed lease since 1 January 2025. F follows in 2028 and E in 2034. Many small Paris apartments are rated F or G, so the rating belongs in the purchase decision."],
    ["Will you manage the tenants?", "No. Margaux hands the finished apartment to the rental manager you choose and can introduce you to ones her clients use."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Rental investment</p>
  <h1>A Paris rental apartment, bought and built for the leases that are allowed</h1>
  <p class="lede">Paris has all but closed short tourist lets for second homes. A rental project here is designed for furnished leases of months and years. Better to know that before you buy.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>What the rules allow</h2>
    <div>
      <table>
        <thead><tr><th>Type of let</th><th>For an apartment that is not your main home</th></tr></thead>
        <tbody>
          <tr><td>Tourist let by the night</td><td>Needs a change-of-use authorisation with compensation. Letting without it is fined up to €100,000. <a href="${SRC.parisTourist}">City of Paris</a></td></tr>
          <tr><td>Bail mobilité</td><td>Furnished, 1 to 10 months, not renewable, no deposit, tenant must qualify. <a href="${SRC.mobilite}">Service-Public</a></td></tr>
          <tr><td>Furnished or unfurnished long lease</td><td>Allowed. The apartment must meet the energy-rating threshold. <a href="${SRC.dpeLet}">Ministry of Ecology</a></td></tr>
        </tbody>
      </table>
      <p>If the apartment is your main home, you may let it to tourists for up to 90 days a year, and the listing must show a registration number (<a href="${SRC.parisTourist}">City of Paris</a>). A second home owned from abroad does not qualify.</p>
      <p class="note">Rules as published on 11 November 2026. They have tightened several times since 2024. Check the current text, and take advice from a French lawyer or notaire before you buy on the strength of a rental plan.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>The energy rating decides more than the view</h2>
    <div>
      <p>Every apartment for sale in France carries an energy rating from A to G. Since 1 January 2025 an apartment rated G cannot be let on a new or renewed lease. The same applies to F from 2028 and to E from 2034 (<a href="${SRC.dpeLet}">Ministry of Ecology</a>).</p>
      <p>Poorly rated apartments sell at a discount for that reason. Whether the rating can be raised depends on the building: windows the city will accept, insulation from the inside, the heating system, ventilation.</p>
      <p>Margaux looks at this on the visit. A G-rated apartment that can reach D with the works you were going to do anyway is an opportunity. One that cannot is a trap.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>What she builds into a rental</h2>
    <ul class="rows">
      <li><h3>A layout that rents</h3><p>A real bedroom door, a desk that is not the dining table, storage for a tenant who arrives with a year of belongings.</p></li>
      <li><h3>Materials that last</h3><p>Floors, worktops and bathroom fittings chosen for the fifth tenant, and paint colours that can be touched up between leases.</p></li>
      <li><h3>Complete furnishing</h3><p>French law lists what a furnished let must contain. She supplies that list and the things tenants look for beyond it.</p></li>
      <li><h3>A file for your manager</h3><p>Plans, appliance manuals, paint references, contractor contacts and photos of every room on handover day.</p></li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Questions about renting out</h2>
    ${faqBlock(rental.faq)}
  </div>
</section>`,
};

const guide = {
  path: "guide/buying-renovating-paris-apartment/",
  crumb: "Buyer's guide",
  title: "Can Americans buy an apartment in Paris? A plain guide to buying and renovating | Stouls Studio",
  description: "The purchase steps, the costs on top of the price, building approvals, energy ratings, rental rules and taxes to ask your adviser about, each with its official source.",
  faq: [
    ["Can Americans buy property in France?", "Yes, and so can Canadians. France places no nationality restriction on buying residential property. Ownership does not give a right to live in France."],
    ["How long does a purchase take?", "Expect two to three months between the preliminary contract and the final deed. The buyer has a ten-day withdrawal period after signing the preliminary contract."],
    ["Do I need the building's approval to renovate?", "Not for work inside your apartment that touches nothing shared. Work affecting load-bearing walls, floors, shared pipes or the façade needs a vote of the co-owners."],
    ["Is there a wealth tax on French property?", "The French real-estate wealth tax (IFI) applies when net taxable property exceeds €1,300,000. Non-residents are assessed on their French property only."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Buyer's guide</p>
  <h1>Buying and renovating a Paris apartment from abroad</h1>
  <p class="lede">What happens, in what order, and what it costs beyond the price. Written for buyers in the United States and Canada. Last checked 11 November 2026.</p>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Who is buying</h2>
    <div>
      <p>Americans and Canadians can buy property in France. There is no nationality restriction on residential purchases, and you do not need to live in France. Owning an apartment does not give you a right to stay beyond the usual 90 days in any 180.</p>
      <p>Americans were the first nationality among foreign non-resident buyers in Paris in 2025: 220 purchases, 26% of that group. The median purchase by a foreign non-resident in Paris was €864,000 for 65 m². Foreign non-residents made 3.7% of all Paris purchases (<a href="${SRC.notaires}">Notaires du Grand Paris, 25 June 2026</a>).</p>
      <p>The notaires publish no separate figure for Canadian buyers.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>The purchase, step by step</h2>
    <div>
      <ol>
        <li><strong>Offer.</strong> Made in writing through the seller's agent. Once accepted, the notaires prepare the contract.</li>
        <li><strong>Preliminary contract.</strong> You sign and pay a deposit, commonly around 10% of the price, held by the notaire. You then have ten days to withdraw without giving a reason.</li>
        <li><strong>The wait.</strong> Two to three months while the notaire runs searches and any mortgage is approved. This is when plans are drawn and contractors priced.</li>
        <li><strong>Final deed.</strong> Signed at the notaire's office, in person or by power of attorney. You get the keys that day.</li>
      </ol>
      <h3>Costs on top of the price</h3>
      <p>Budget roughly 7% to 8% of the price for what are called notaire fees on an existing apartment. Most of it is transfer tax. Your notaire gives the exact figure before you sign.</p>
      <p>If you use a buyer's agent, the published fees of Paris agencies run from about 2.5% to 3% of the price plus VAT.</p>
      <h3>Mortgages</h3>
      <p>French banks do lend to non-residents, but fewer of them lend to US taxpayers, and terms vary widely. Speak to a broker who handles non-resident files before you make an offer that depends on a loan.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Renovating in a shared building</h2>
    <div>
      <p>Nearly every Paris apartment is in a co-owned building, a <em>copropriété</em>. The building's rules and its manager, the <em>syndic</em>, shape what you can do. <a href="${c.link("glossary/copropriete-syndic/")}">Copropriété and syndic explained</a>.</p>
      <table>
        <thead><tr><th>Work</th><th>Approval</th></tr></thead>
        <tbody>
          <tr><td>Inside your apartment, nothing shared touched</td><td>None from the building</td></tr>
          <tr><td>Load-bearing walls, floors, shared pipes and stacks, façade, windows</td><td>Vote of the co-owners at a general meeting. <a href="${SRC.copro}">Service-Public</a></td></tr>
          <tr><td>Changes visible from the street</td><td>Usually a filing at the town hall as well</td></tr>
        </tbody>
      </table>
      <p>General meetings are often held once a year. If your project needs a vote, the date of the next meeting can set your timetable, so it is worth asking before you buy.</p>
      <h3>What a renovation costs</h3>
      <p>It depends on the state of the wiring, plumbing and structure far more than on the floor area. Figures quoted per square metre online range so widely that they mislead. Margaux gives an estimate for the apartment in front of her, at the visit, and a fixed set of contractor quotes once the plans are drawn. <a href="${c.link("paris-apartment-renovation-cost/")}">Published cost ranges per m²</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Renting it out</h2>
    <div>
      <ul>
        <li>Tourist lets of a second home need a change-of-use authorisation with compensation; without it the fine is up to €100,000 (<a href="${SRC.parisTourist}">City of Paris</a>).</li>
        <li>A main home may be let to tourists up to 90 days a year, with a registration number (<a href="${SRC.parisTourist}">City of Paris</a>).</li>
        <li>A bail mobilité is a furnished lease of 1 to 10 months for qualifying tenants (<a href="${SRC.mobilite}">Service-Public</a>).</li>
        <li>Apartments rated G cannot be newly let since 1 January 2025; F from 2028; E from 2034 (<a href="${SRC.dpeLet}">Ministry of Ecology</a>).</li>
      </ul>
      <p><a href="${c.link("paris-rental-investment/")}">More on rental projects</a></p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Tax questions for your adviser</h2>
    <div>
      <p>Margaux is an interior architect, not a tax adviser. These are the questions to take to someone who handles both French and US or Canadian returns.</p>
      <ul>
        <li>French income tax on rent received by a non-resident, and how your home country credits it.</li>
        <li>French social charges on rental income for residents of the US or Canada.</li>
        <li>The real-estate wealth tax, IFI, which applies above €1,300,000 of net taxable property; non-residents are assessed on French property only (<a href="${SRC.ifi}">Service-Public</a>).</li>
        <li>Whether to buy in your own name or through a company, and what that changes on resale and inheritance.</li>
        <li>French inheritance rules, which differ from those in North America.</li>
      </ul>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Short answers</h2>
    ${faqBlock(guide.faq)}
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Sources</h2>
    <ul class="sources">
      <li>Notaires du Grand Paris, communiqué of 25 June 2026: <a href="${SRC.notaires}">non-resident buyers, 2025 data</a></li>
      <li>City of Paris: <a href="${SRC.parisTourist}">furnished tourist lets</a></li>
      <li>Service-Public: <a href="${SRC.mobilite}">bail mobilité</a>, <a href="${SRC.copro}">works in a co-owned building</a>, <a href="${SRC.ifi}">IFI</a>, <a href="${SRC.dpeTourist}">energy rating and tourist lets</a></li>
      <li>Ministry of Ecology: <a href="${SRC.dpeLet}">energy rating and letting</a></li>
    </ul>
  </div>
</section>`,
};

export const guidePages = [rental, guide];
