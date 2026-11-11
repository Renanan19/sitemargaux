// Legal notice (mentions légales) and privacy. Company facts come from site.config.json,
// which mirrors the French business register (checked 11 November 2026).
const legal = {
  path: "legal/",
  alt: "fr/mentions-legales/",
  crumb: "Legal notice",
  title: "Legal notice and privacy | Stouls Studio",
  description: "Who publishes stoulsstudio.com: company name, registration, registered office, publication director, host, and how personal data is handled.",
  body: (c) => {
    const co = c.cfg.company;
    const row = (k, v) => (v ? `<tr><th>${k}</th><td>${v}</td></tr>` : "");
    return `
<section class="page-head">
  <p class="crumbs"><a href="${c.link("")}">Stouls Studio</a> / Legal notice</p>
  <h1>Legal notice and privacy</h1>
  <p class="lede">Who is behind this website, and what happens to your information when you get in touch.</p>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Publisher</h2>
    <div>
      <p>Stouls Studio is the trading name of ${co.legalName}, a French company. In French, these are the site's <em>mentions légales</em>.</p>
      <table>
        <tbody>
          ${row("Trading name", c.cfg.studio)}
          ${row("Company name", co.legalName)}
          ${row("Legal form", co.legalForm)}
          ${row("Share capital", co.capital)}
          ${row("Registered office", `${co.street}, ${co.postalCode} ${co.city}, France`)}
          ${row("Registration", `RCS ${co.rcs} ${co.siren}`)}
          ${row("SIRET (head office)", co.siret)}
          ${row("VAT number", co.vat)}
          ${row("Activity code", `${co.naf}, specialised design activities`)}
          ${row("Publication director", `${co.director}, manager`)}
          ${row("Email", `<a href="mailto:${c.cfg.email}">${c.cfg.email}</a>`)}
          ${row("Telephone", `<a href="tel:${c.cfg.whatsapp}">${c.cfg.whatsapp.replace(/^\+33(\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, "+33 $1 $2 $3 $4 $5")}</a>`)}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Host</h2>
    <div>
      <p>This site is hosted by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States (<a href="https://pages.github.com/">GitHub Pages</a>).</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Your personal data</h2>
    <div>
      <p>This site sets no cookies, runs no analytics and has no contact form. It does not collect anything about you while you read it.</p>
      <h3>When you write to Margaux</h3>
      <p>If you send a message by WhatsApp, email or Instagram, she receives what you choose to send: your name, your contact details and what you say about your project. She uses it only to answer you and, if you go ahead, to carry out the work. It is not sold or passed on for marketing.</p>
      <p>Messages are kept for as long as the exchange or the project lasts, then for the period French law requires for business records.</p>
      <h3>Services that receive technical data</h3>
      <ul>
        <li>GitHub, the host, receives your IP address when your browser loads a page, as any web server does.</li>
        <li>Google Fonts supplies the typefaces. Your browser requests them from Google, which receives your IP address.</li>
        <li>WhatsApp and Instagram are run by Meta. Their own terms apply once you follow those links.</li>
      </ul>
      <h3>Your rights</h3>
      <p>Under the EU General Data Protection Regulation you can ask to see, correct or delete the information Margaux holds about you, or object to its use. Write to <a href="mailto:${c.cfg.email}">${c.cfg.email}</a>. You can also complain to the French data protection authority, the <a href="https://www.cnil.fr/en">CNIL</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Content of this site</h2>
    <div>
      <p>Texts, plans and photographs belong to Stouls Studio or are used with permission. Please ask before reusing them.</p>
      <p>The guides and glossary give general information, checked against the official sources linked on each page on the date shown. They are not legal, tax or financial advice. Rules change: confirm with a notaire, lawyer or tax adviser before you act.</p>
    </div>
  </div>
</section>`;
  },
};

export const legalPages = [legal];
