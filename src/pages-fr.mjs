// French version of the main pages: home, services, apartment search, renovation, about, legal.
// The guides and the glossary are written for buyers abroad and stay in English only.
import { faqBlock } from "./pages-core.mjs";

const HOME = "fr/";

const formules = [
  {
    id: "de-la-recherche-aux-cles", name: "De la recherche à la remise des clés",
    who: "Pour les clients qui n'ont pas encore trouvé leur bien.",
    steps: [
      ["Recherche et chasse d'appartement", "Je pars de votre cahier des charges, je suis le marché et je visite sur place."],
      ["Analyse du potentiel du bien", "Pour chaque bien sérieux : mon avis, ce qu'il serait possible d'en faire et une première idée du coût."],
      ["Conception et dossier technique", "La nouvelle distribution, puis les plans à partir desquels les entreprises travaillent."],
      ["Matériaux, mobilier et décoration", "Tout ce qui composera et meublera l'appartement, choisi avec vous."],
      ["Devis définitif", "Établi une fois le dossier technique finalisé, pour que le prix corresponde au projet."],
      ["Suivi du chantier", "Des visites régulières, des comptes rendus et des photos pendant toute la durée des travaux."],
      ["Aménagement et remise des clés", "L'appartement est installé, vérifié, et les clés vous reviennent."],
    ],
  },
  {
    id: "renovation-cle-en-main", name: "Rénovation clé en main d'un bien déjà acquis",
    who: "Pour les clients qui possèdent déjà leur appartement.",
    steps: [
      ["Analyse du bien et définition du projet", "Une visite, un relevé, et une définition claire de ce qu'est le projet."],
      ["Conception et dossier technique", "La nouvelle distribution, puis les plans à partir desquels les entreprises travaillent."],
      ["Matériaux, mobilier et décoration", "Tout ce qui composera et meublera l'appartement, choisi avec vous."],
      ["Devis définitif", "Établi une fois le dossier technique finalisé, pour que le prix corresponde au projet."],
      ["Suivi du chantier, aménagement et remise des clés", "Des comptes rendus et des photos pendant les travaux, puis un appartement terminé."],
    ],
  },
];

const stepList = (steps) => `<ol class="steps plain">${steps.map(([h, p]) => `<li><div><h3>${h}</h3><p>${p}</p></div></li>`).join("")}</ol>`;
const lower = (s) => s.charAt(0).toLowerCase() + s.slice(1);

const home = {
  lang: "fr",
  path: HOME,
  alt: "",
  title: "Architecte d'intérieur et designer à Paris | Stouls Studio",
  description: "Margaux Stouls, architecte d'intérieur et designer à Paris, cherche votre appartement, conçoit le projet, suit le chantier et l'aménage. Résidence principale, pied-à-terre ou locatif.",
  faq: [
    ["Faut-il que je sois à Paris ?", "Non. Les rendez-vous peuvent se tenir en visioconférence, les choix se confirment par WhatsApp, et pendant le chantier vous recevez des comptes rendus, des photos et des visites de l'appartement en vidéo. Quand vous êtes sur place, les rendez-vous ont lieu sur le chantier."],
    ["Pouvez-vous intervenir sur un appartement que je possède déjà ?", "Oui. C'est l'une des deux formules du studio. Le projet commence alors par l'analyse du bien, puis la conception et le dossier technique."],
    ["Faites-vous aussi des rénovations partielles ?", "Oui. Une bibliothèque, une cuisine, quelques pièces : le portfolio en montre plusieurs. Dites-moi ce dont vous avez besoin et je vous dirai ce que je peux prendre en charge."],
    ["Combien cela coûte-t-il ?", "Chaque étape fait l'objet d'un devis écrit avant de commencer. Le devis définitif des travaux est établi une fois le dossier technique finalisé : il chiffre le projet que vous avez validé, et rien d'autre."],
    ["Travaillez-vous uniquement à Paris ?", "À Paris et dans les communes voisines. Rester proche, c'est ce qui me permet d'être présente sur le chantier."],
  ],
  body: (c) => `
<section class="hero">
  <div class="hero-copy">
    <h1>La bonne adresse, à votre image.</h1>
    <p class="lede">Je suis Margaux Stouls, architecte d'intérieur et designer à Paris. Trouver le bon appartement, révéler son potentiel, lui donner du caractère : je vous accompagne à chaque étape, jusqu'au jour où vous posez vos valises.</p>
    ${c.buttons()}
  </div>
  <div class="hero-photo">${c.img("hero", "Arche entre la cuisine et le coin nuit d'un studio parisien conçu par Stouls Studio", "", true)}</div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Réalisations récentes</h2>
    <div class="gallery">
      ${["Angle de chambre avec miroir aux lignes courbes sur un soubassement vert", "Niche bibliothèque en arche à côté d'un poteau en bois apparent", "Portes de placard cannées à poignées de chêne", "Cheminée en marbre, miroir doré et étagères intégrées", "Séjour avec bibliothèque en chêne sur mesure et banc sous la fenêtre", "Banquette de repas intégrée, panneau cannelé et appliques"].map((alt, n) => c.img(`project-${n + 1}`, `${alt}, réalisation Stouls Studio`)).filter(Boolean).map((i) => `<figure>${i}</figure>`).join("\n      ")}
      <p class="gallery-more"><a href="${c.link("fr/portfolio/")}">Voir tout le portfolio</a></p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Deux façons de travailler avec moi</h2>
    <div>
      <div class="pair">
        ${formules.map((f) => `<div>
          <h3>${f.name}</h3>
          <p class="muted">${f.who} ${f.steps.map(([s], i) => (i ? lower(s) : s)).join(", ")}.</p>
          <p><a href="${c.link("fr/prestations/")}#${f.id}">Les étapes en détail</a></p>
        </div>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<figure class="bleed">${c.img("main-14", "Séjour au parquet en point de Hongrie et hautes fenêtres, appartement parisien de Stouls Studio")}</figure>

<section class="band paper">
  <div class="band-grid">
    <h2>Quel que soit le projet</h2>
    <ul class="rows">
      <li><h3>Résidence principale</h3><p>Vous vivez à Paris, ou vous vous y installez, et vous voulez un appartement redessiné autour de votre quotidien.</p></li>
      <li><h3>Pied-à-terre</h3><p>Un appartement à vous à Paris pour des séjours réguliers, prêt à vivre dès votre arrivée.</p></li>
      <li><h3>Investissement locatif</h3><p>Un bien où une nouvelle distribution crée une chambre ou une vraie cuisine, conçu et meublé pour être loué.</p></li>
      <li><h3>Projet destiné à la revente</h3><p>Un appartement acheté pour être rénové puis revendu, où la conception se juge à la valeur qu'elle ajoute.</p></li>
    </ul>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Un suivi complet</h2>
    <div>
      <p>Une rénovation, ce sont des centaines de petites décisions, une dizaine de corps de métier et un immeuble qui a ses propres règles. Je porte l'ensemble : je prépare les choix, je vous les soumets avec une image et un prix, et je suis les travaux jusqu'à la livraison.</p>
      <p>Vous décidez, vous êtes tenu informé, et vous n'avez personne à relancer. L'objectif est de réduire au maximum votre charge mentale, jusqu'à la remise d'un appartement adapté à votre projet.</p>
      <p><a href="${c.link("fr/prestations/")}">Les prestations et le déroulement de l'accompagnement</a></p>
    </div>
  </div>
</section>

<figure class="bleed">${c.img("x-b25-2", "Séjour avec cheminée en marbre rouge et étagères sur montants en laiton, appartement de Stouls Studio")}</figure>

<section class="band paper">
  <div class="band-grid">
    <h2>Les questions que l'on pose en premier</h2>
    ${faqBlock(home.faq)}
  </div>
</section>`,
};

const prestations = {
  lang: "fr",
  path: "fr/prestations/",
  alt: "services/",
  crumb: "Prestations",
  service: "Recherche d'appartement, architecture d'intérieur et rénovation clé en main à Paris",
  title: "Prestations : de la recherche aux clés | Stouls Studio",
  description: "Les deux formules de Margaux Stouls, architecte d'intérieur et designer à Paris : de la recherche d'appartement à la remise des clés, ou la rénovation clé en main d'un bien déjà acquis.",
  faq: [
    ["Quelle formule choisir ?", "Tout dépend d'une seule chose : avez-vous déjà l'appartement ? Si vous cherchez encore, la première formule commence par la recherche. Si vous êtes propriétaire ou avez signé, la seconde commence par l'analyse du bien. À partir de la conception, les deux sont identiques."],
    ["Peut-on ne prendre qu'une partie de la prestation ?", "Oui. Certains clients demandent uniquement la conception et le dossier technique, ou la rénovation partielle de quelques pièces. Dites-moi ce dont vous avez besoin et je vous dirai ce que je peux prendre en charge."],
    ["Faut-il être à Paris ?", "Non. Les rendez-vous peuvent se tenir en visioconférence, les choix se confirment par WhatsApp, et pendant le chantier vous recevez des comptes rendus, des photos et des visites de l'appartement en vidéo."],
    ["Quand connaît-on le prix définitif ?", "Quand le dossier technique est finalisé et signé. Le devis définitif est établi à partir de ce dossier : il chiffre le projet que vous avez validé. Avant cela, vous travaillez avec des estimations."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / Prestations</p>
  <h1>Deux formules, un appartement terminé</h1>
  <p class="lede">Soit je commence par trouver l'appartement, soit je pars de celui que vous possédez déjà. Dans les deux cas, je mène le projet jusqu'à la remise des clés, pour que vous ayez le moins possible à porter.</p>
  ${c.buttons()}
</section>

${formules.map((f, i) => `<section class="band${i ? " paper" : ""}" id="${f.id}">
  <div class="band-grid">
    <div class="formula-head"><p class="formula-no">Formule ${i + 1}</p><h2>${f.name}</h2><p class="muted">${f.who}</p></div>
    ${stepList(f.steps)}
  </div>
</section>`).join("\n\n")}

<figure class="bleed">${c.img("x-sau25", "Le séjour vu depuis la cuisine, avec les poteaux en bois d'origine, appartement parisien de Stouls Studio")}</figure>

<section class="band" id="deroulement">
  <div class="band-grid">
    <h2>Le déroulement de l'accompagnement</h2>
    <div class="pair">
      <div>
        <h3>Pendant la conception</h3>
        <ul>
          <li>Des rendez-vous réguliers, plus ou moins rapprochés selon la phase du projet.</li>
          <li>Des échanges par WhatsApp entre les rendez-vous, dans un groupe dédié si vous le souhaitez, pour confirmer certains choix et continuer d'avancer.</li>
          <li>Un dossier technique : les plans nécessaires aux travaux, notamment les plans de rénovation et les élévations, avec la liste des matériaux, du mobilier et des équipements retenus.</li>
          <li>Vous validez et signez le dossier avant le démarrage des travaux. Le devis définitif est établi une fois le dossier finalisé.</li>
        </ul>
      </div>
      <div>
        <h3>Pendant le chantier</h3>
        <ul>
          <li>Un compte rendu, en général chaque semaine ou toutes les deux semaines, selon la phase du chantier et les points à vous communiquer.</li>
          <li>Un reportage photo régulier.</li>
          <li>Des rendez-vous sur place quand vous êtes présent, ou des visites de l'appartement en visioconférence quand vous êtes à distance.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Ce dont vous n'avez plus à vous occuper</h2>
    <div>
      <p>Une rénovation, ce sont des centaines de petites décisions, une dizaine de corps de métier et un immeuble qui a ses propres règles. Je porte l'ensemble : je prépare les choix, je vous les soumets avec une image et un prix, et je suis les travaux jusqu'à la livraison.</p>
      <p>L'accompagnement est complet et fluide. Il réduit au maximum votre charge mentale, jusqu'à la livraison d'un appartement conforme à ce que vous avez validé et adapté à votre projet.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Types de projets</h2>
    <ul class="rows">
      <li><h3>Résidence principale</h3><p>Un appartement pour y vivre toute l'année, redessiné autour de votre quotidien.</p></li>
      <li><h3>Pied-à-terre</h3><p>Une résidence secondaire à Paris pour des séjours réguliers.</p></li>
      <li><h3>Investissement locatif</h3><p>Un appartement conçu et meublé pour être loué.</p></li>
      <li><h3>Projet destiné à la revente</h3><p>Un appartement acheté pour être rénové puis revendu.</p></li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Clients à Paris et à l'étranger</h2>
    <div>
      <p>Une partie des clients du studio vit aux États-Unis ou au Canada et suit son projet à distance, en anglais. D'autres vivent à Paris et viennent à chaque réunion de chantier. La méthode est la même, le travail aussi : <a href="${c.link("fr/portfolio/")}">voir le portfolio</a>.</p>
      <p>Le détail de chaque étape : <a href="${c.link("fr/recherche-appartement-paris/")}">la recherche d'appartement</a> et <a href="${c.link("fr/renovation-appartement-paris/")}">la rénovation</a>.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Questions sur l'accompagnement</h2>
    ${faqBlock(prestations.faq)}
  </div>
</section>`,
};

const recherche = {
  lang: "fr",
  path: "fr/recherche-appartement-paris/",
  alt: "apartment-search-paris/",
  crumb: "Recherche d'appartement",
  service: "Recherche d'appartement à Paris",
  title: "Recherche d'appartement à Paris | Stouls Studio",
  description: "Une architecte d'intérieur cherche et visite pour vous à Paris, et vous dit pour chaque appartement ce qu'il est possible d'en faire et ce que coûteraient les travaux.",
  faq: [
    ["Quelle différence avec un chasseur d'appartement ?", "Un chasseur juge l'emplacement et le prix. Je juge aussi les travaux : la structure, les évacuations, l'état de l'électricité, ce que l'immeuble autorisera. Vous avez côte à côte un prix d'achat et une estimation de rénovation."],
    ["Trouvez-vous des biens hors marché ?", "Parfois, par les agents et les entreprises avec lesquels je travaille. La plupart des bons appartements parisiens sont en annonce et partent vite. L'important est de les voir dans les premiers jours et de savoir tout de suite si le plan peut être corrigé."],
    ["Qui signe l'achat ?", "Vous, chez le notaire, en votre nom ou au nom de votre société. La vente passe par des agents immobiliers parisiens titulaires de la carte professionnelle et par le notaire. Mon rôle : le cahier des charges, les visites et l'analyse de chaque bien. Je ne détiens pas vos fonds et je ne suis pas partie à la vente."],
    ["Est-ce la même chose que le sourcing de matériaux ?", "Non. La recherche d'appartement vient en premier. Plus tard, pendant la conception, je sélectionne aussi les matériaux, le mobilier et la décoration. Cette sélection fait partie du travail de conception."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / Recherche d'appartement</p>
  <h1>Le bon appartement, avec un regard d'architecte d'intérieur.</h1>
  <p class="lede">Je cherche les biens, je les visite et je vous partage chaque découverte en vidéo. Mon regard d'architecte d'intérieur fait le reste : repérer le potentiel, imaginer la transformation, chiffrer les travaux. Vous pouvez faire une offre en sachant où vous allez.</p>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Ce que vous recevez pour chaque appartement</h2>
    <div>
      <ul>
        <li>Une vidéo de la visite, pièce par pièce, avec les vues sur la rue et la cage d'escalier.</li>
        <li>Mes notes sur la structure, l'humidité, l'électricité, la plomberie, les fenêtres et le chauffage.</li>
        <li>Mon avis sur le bien et un court compte rendu de son potentiel : ce qu'il serait possible d'en faire, et ce qui ne le serait pas.</li>
        <li>La performance énergétique (DPE) et ses conséquences si vous comptez louer.</li>
        <li>L'immeuble et la copropriété : les procès-verbaux d'assemblée générale, les travaux récents, les travaux votés mais pas encore payés, les charges.</li>
        <li>Une première estimation du coût de rénovation, pour comparer deux appartements sur leur prix complet.</li>
      </ul>
      <p>Quand un appartement vous convient et présente du potentiel, je peux aller plus loin et dessiner un premier croquis d'intention de la nouvelle distribution.</p>
      <p>Les photos d'une annonce sont prises au grand-angle, un jour de soleil. C'est à la visite que l'on découvre que la chambre donne sur un mur à deux mètres, ou que la seule place pour le lave-linge est dans l'entrée.</p>
      ${c.buttons()}
    </div>
  </div>
</section>

<figure class="bleed">${c.img("x-bag8", "Cuisine en noyer aux étagères éclairées et table ovale, appartement de Stouls Studio")}</figure>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Ce que je recherche</h2>
    <div>
      <p>Les appartements qui valent la peine sont souvent ceux qui se présentent mal. Un couloir sombre que l'on peut ouvrir. Une cuisine au fond qui peut passer dans le séjour. Un deux-pièces de 50 m² qui devient un trois-pièces une fois le plan redessiné.</p>
      <p>Ce sont ceux que les autres acheteurs écartent, et ceux où la conception ajoute le plus de valeur pour l'argent dépensé.</p>
      <p>Je vous dis aussi lesquels laisser. Un bel appartement sous une toiture dont la copropriété n'a pas voté la réfection n'est pas une affaire.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Après la recherche</h2>
    <div>
      <p>La recherche est la première étape d'un accompagnement complet, jusqu'à la remise d'un appartement terminé et meublé : conception, dossier technique, devis définitif, suivi du chantier, aménagement. <a href="${c.link("fr/prestations/")}#de-la-recherche-aux-cles">Toutes les étapes, de la recherche à la remise des clés</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Questions sur la recherche</h2>
    ${faqBlock(recherche.faq)}
  </div>
</section>`,
};

const renovation = {
  lang: "fr",
  path: "fr/renovation-appartement-paris/",
  alt: "paris-apartment-renovation/",
  crumb: "Rénovation",
  service: "Rénovation d'appartement clé en main à Paris",
  title: "Rénovation d'appartement à Paris, de A à Z | Stouls Studio",
  description: "Conception, dossier technique, matériaux, suivi de chantier et aménagement de votre appartement à Paris, par Margaux Stouls, architecte d'intérieur et designer, du premier plan aux clés.",
  faq: [
    ["Faut-il l'accord de la copropriété pour rénover ?", "Pour des travaux à l'intérieur de votre appartement qui ne touchent à rien de commun, en général non. Pour tout ce qui concerne la structure, les canalisations communes, la façade ou les fenêtres, l'accord de la copropriété est nécessaire, et certains travaux demandent aussi une déclaration en mairie. Je vérifie le règlement de l'immeuble avant d'arrêter le projet."],
    ["Comment suit-on le chantier ?", "Un compte rendu chaque semaine ou toutes les deux semaines, des photos du chantier, et une visite de l'appartement en vidéo quand vous ne pouvez pas venir. Chaque choix qui vous revient est présenté avec des images et un prix."],
    ["Qui paie les entreprises ?", "Vous, directement, sur la base de factures que j'ai vérifiées par rapport aux travaux réalisés. Je n'encaisse ni ne détiens les paiements destinés aux entreprises."],
    ["Peut-on rénover seulement la cuisine ou la salle de bain ?", "Oui, le studio réalise aussi des rénovations partielles. Dans un appartement ancien, il est toutefois souvent plus économique de traiter ensemble l'électricité, la plomberie et la distribution : on n'ouvre les murs qu'une fois."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / Rénovation</p>
  <h1>Un projet pensé dans les moindres détails, suivi jusqu'au chantier.</h1>
  <p class="lede">Repenser les volumes, dessiner les plans, choisir les matériaux et imaginer les détails qui feront la différence : je conçois votre intérieur dans son ensemble, en tenant compte de votre façon de vivre et du caractère du lieu.</p>
  <p class="lede">Pour donner vie au projet, je m'entoure d'équipes d'artisans tous corps d'état avec lesquelles j'entretiens une relation de confiance de longue date. Je suis le chantier et veille, à leurs côtés, à la bonne réalisation des travaux, jusqu'aux dernières finitions.</p>
  ${c.buttons()}
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Sur le chantier</h2>
    <div>
      <div class="figs five">
        ${["x-site1", "x-site2", "x-site3", "x-site4", "x-site5"].map((n, i) => c.img(n, ["Démolition en cours dans un appartement parisien, gravats au sol, chantier Stouls Studio","Ancien conduit de cheminée mis à nu pendant la démolition, chantier Stouls Studio","Deux ouvriers évacuent les gravats d'une pièce mise à nu, chantier Stouls Studio","Pose d'une nouvelle fenêtre donnant sur une cour parisienne, chantier Stouls Studio","Ponçage d'un mur depuis un escabeau, chantier Stouls Studio"][i])).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Ce que vous validez avant les travaux</h2>
    <div>
      <div class="figs contain">
        ${["x-plan4", "x-plan5", "render-5"].map((n, i) => c.img(n, ["Plan d'un studio avec cuisine, pièce de vie, salle d'eau et coin nuit, Stouls Studio", "Élévations cotées d'un WC et d'une salle de bain enfants, Stouls Studio", "Visualisation 3D d'une cuisine en noyer avec îlot, Stouls Studio"][i])).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n        ")}
      </div>
      <p>Rien n'est construit que vous n'ayez vu et validé. Avant le démarrage des travaux, je vous présente trois choses.</p>
      <ul>
        <li>Le projet en images : la nouvelle distribution et, quand c'est utile, les pièces modélisées en trois dimensions, pour changer d'avis tant que cela ne coûte rien.</li>
        <li>Le dossier technique : les plans de rénovation et les élévations cotées de la cuisine, des salles de bain et de chaque menuiserie. Les entreprises chiffrent et construisent à partir de ces documents.</li>
        <li>La sélection : les matériaux, le mobilier, les luminaires et la décoration choisis avec vous, listés un par un.</li>
      </ul>
      <p>Vous validez et signez le dossier. Le devis définitif est établi à partir du dossier finalisé : il chiffre exactement ce que vous avez validé. <a href="${c.link("fr/portfolio/plans-and-elevations/")}">Plus de plans, d'élévations et de visualisations</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Ce qui est compris</h2>
    <ul class="rows">
      <li><h3>Conception</h3><p>L'étude de l'existant, puis la nouvelle distribution. Cuisine, salles de bain, menuiseries intégrées, éclairage et couleurs sont dessinés pour l'appartement tel qu'il est vraiment.</p></li>
      <li><h3>Dossier technique</h3><p>Plans de rénovation et élévations, assez détaillés pour que chaque entreprise chiffre la même chose et la réalise sans deviner.</p></li>
      <li><h3>Matériaux et mobilier</h3><p>Sols, carrelages, robinetterie, luminaires, tissus, mobilier et objets, sélectionnés avec vous et listés dans le dossier.</p></li>
      <li><h3>Autorisations</h3><p>Lecture du règlement de copropriété, préparation du dossier pour le syndic et le vote des copropriétaires quand il est nécessaire, et déclaration en mairie le cas échéant.</p></li>
      <li><h3>Suivi du chantier</h3><p>Des visites pendant toute la durée des travaux, un compte rendu chaque semaine ou toutes les deux semaines avec photos, et des réserves listées puis levées avant le dernier paiement.</p></li>
      <li><h3>Aménagement et remise des clés</h3><p>Du canapé au tire-bouchon, si vous le souhaitez. L'appartement est livré prêt à vivre ou à louer.</p></li>
    </ul>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>La place de la rénovation dans l'accompagnement</h2>
    <div>
      <p>La rénovation est le cœur des deux formules du studio. Si vous n'avez pas encore acheté, elle suit la <a href="${c.link("fr/recherche-appartement-paris/")}">recherche d'appartement</a>. Si vous êtes déjà propriétaire, elle commence par l'analyse du bien et la définition du projet.</p>
      <p><a href="${c.link("fr/prestations/")}">Les deux formules, étape par étape, et le déroulement de l'accompagnement</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Ce que l'ancien impose à un plan</h2>
    <div>
      <p>L'essentiel de Paris a été construit avant 1914. Les planchers sont en solives de bois ou de fer, les murs entre les pièces font souvent partie de la structure, et les évacuations passent là où on les a posées il y a un siècle.</p>
      <p>Cela décide de l'endroit où peut aller une salle de bain, des murs que l'on peut ouvrir, et de la capacité d'un plancher à porter un plan de travail en pierre. C'est aussi pourquoi deux appartements de même surface peuvent coûter des montants très différents à rénover.</p>
      <p>Je conçois avec ces contraintes connues dès la première visite. Les devis restent justes, et l'on évite la mauvaise surprise de milieu de chantier.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Questions sur les travaux</h2>
    ${faqBlock(renovation.faq)}
  </div>
</section>`,
};

const apropos = {
  lang: "fr",
  path: "fr/a-propos/",
  alt: "about/",
  crumb: "À propos",
  title: "Margaux Stouls, architecte d'intérieur et designer à Paris",
  description: "Margaux Stouls, architecte d'intérieur et designer, a créé Stouls Studio à Paris en 2019. Plus de 60 projets accompagnés, de la conception au suivi des travaux.",
  body: (c) => `
<section class="about-split">
  <div class="about-photo">${c.img("margaux", "Margaux Stouls, architecte d'intérieur et designer", "", true)}</div>
  <div class="about-text">
    <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / À propos</p>
    <h1>Margaux Stouls <span>Architecte d'intérieur et designer</span></h1>
    <p>Derrière Stouls Studio, il y a moi. La personne que vous rencontrez au premier rendez-vous est aussi celle qui dessine vos plans, suit votre chantier et vous accompagne jusqu'aux derniers détails.</p>
    <p>Diplômée en architecture d'intérieur et en design produit, j'aime penser un projet dans son ensemble : la circulation dans un appartement, la lumière, les volumes, mais aussi le dessin d'un meuble, le choix d'une matière ou la justesse d'une finition. Cette double approche me permet de passer naturellement de la vision globale aux détails qui donnent son caractère à un lieu.</p>
    <p>J'ai créé Stouls Studio en 2019 avec l'envie de concevoir des intérieurs personnels, beaux à vivre et adaptés à ceux qui les habitent. Depuis, j'ai accompagné plus de 60 projets, de la conception au suivi des travaux.</p>
    <p>Aujourd'hui, j'accompagne aussi bien les personnes qui souhaitent trouver leur appartement à Paris depuis l'étranger que celles qui veulent repenser un lieu qu'elles habitent déjà. Pour les premières, je suis un regard sur place : je recherche, je visite, je partage mes découvertes et j'imagine les possibilités de chaque bien. Pour les secondes, je transforme leurs envies en un projet concret, conçu sur mesure et suivi sur le terrain.</p>
    <p>Dans les deux cas, mon approche reste la même : écouter, comprendre votre manière de vivre et révéler le potentiel d'un lieu pour en faire un intérieur qui vous ressemble.</p>
    ${c.buttons()}
    <p class="about-links"><a href="${c.link("fr/prestations/")}">Les deux formules du studio</a><a href="https://www.instagram.com/${c.cfg.instagram}/">Instagram @${c.cfg.instagram}</a></p>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Ma manière de travailler</h2>
    <div>
      <ul>
        <li>Une seule interlocutrice, du début à la fin.</li>
        <li>Des devis montrés en entier. Vous contractez directement avec les entreprises.</li>
        <li>Des décisions présentées avec une image et un prix.</li>
        <li>Paris et ses environs, pour pouvoir être sur le chantier.</li>
        <li>Des échanges en français ou en anglais.</li>
      </ul>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Le métier d'architecte d'intérieur</h2>
    <div>
      <p>L'architecte d'intérieur repense l'intérieur d'un bâtiment : l'emplacement des cloisons, de la cuisine et des salles de bain, l'éclairage des pièces, les matériaux. Elle dessine les plans à partir desquels les entreprises construisent et suit le chantier.</p>
      <table>
        <thead><tr><th>Qui</th><th>Ce qu'il fait</th></tr></thead>
        <tbody>
          <tr><td>Architecte d'intérieur</td><td>Distribution, plans techniques, matériaux, éclairage, menuiseries, entreprises et suivi du chantier.</td></tr>
          <tr><td>Décorateur</td><td>Mobilier, couleurs, tissus et mise en scène, sans toucher à la distribution ni aux réseaux.</td></tr>
          <tr><td>Bureau d'études structure</td><td>Calcule et valide toute modification d'un mur porteur ou d'un plancher. Sollicité quand le projet l'exige.</td></tr>
          <tr><td>Chasseur d'appartement</td><td>Cherche le bien et négocie l'achat. Sa mission s'arrête à la signature.</td></tr>
        </tbody>
      </table>
      <p>J'assure les deux premiers rôles, je fais intervenir le troisième quand le projet le demande, et je cherche l'appartement pour que l'achat et les travaux soient jugés ensemble.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Ce que je ne fais pas</h2>
    <div>
      <ul>
        <li>Du conseil fiscal ou juridique. C'est le rôle de votre notaire et de votre conseil.</li>
        <li>De la gestion locative. Je remets l'appartement terminé au gestionnaire de votre choix.</li>
        <li>Détenir vos fonds. Le notaire détient les fonds de l'achat, et vous payez les entreprises directement.</li>
      </ul>
      <p>Les réalisations du studio sont dans le <a href="${c.link("fr/portfolio/")}">portfolio</a>.</p>
    </div>
  </div>
</section>`,
};

const mentions = {
  lang: "fr",
  path: "fr/mentions-legales/",
  alt: "legal/",
  crumb: "Mentions légales",
  title: "Mentions légales et confidentialité | Stouls Studio",
  description: "Qui édite stoulsstudio.com : dénomination, immatriculation, siège social, directrice de la publication, hébergeur, et ce que deviennent vos données personnelles.",
  body: (c) => {
    const co = c.cfg.company;
    const row = (k, v) => (v ? `<tr><th>${k}</th><td>${v}</td></tr>` : "");
    return `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / Mentions légales</p>
  <h1>Mentions légales et confidentialité</h1>
  <p class="lede">Qui est derrière ce site, et ce que deviennent vos informations quand vous prenez contact.</p>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Éditeur</h2>
    <div>
      <p>Stouls Studio est le nom commercial de la société ${co.legalName}.</p>
      <table>
        <tbody>
          ${row("Nom commercial", c.cfg.studio)}
          ${row("Dénomination sociale", co.legalName)}
          ${row("Forme juridique", co.legalForm)}
          ${row("Capital social", co.capital.replace(/^€\s*(.+)$/, "$1 €"))}
          ${row("Siège social", `${co.street}, ${co.postalCode} ${co.city}, France`)}
          ${row("Immatriculation", `RCS ${co.rcs} ${co.siren}`)}
          ${row("SIRET (siège)", co.siret)}
          ${row("Numéro de TVA", co.vat)}
          ${row("Code APE", `${co.naf}, activités spécialisées de design`)}
          ${row("Directrice de la publication", `${co.director}, gérante`)}
          ${row("E-mail", `<a href="mailto:${c.cfg.email}">${c.cfg.email}</a>`)}
          ${row("Téléphone", `<a href="tel:${c.cfg.whatsapp}">${c.cfg.whatsapp.replace(/^\+33(\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, "+33 $1 $2 $3 $4 $5")}</a>`)}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Hébergeur</h2>
    <div>
      <p>Ce site est hébergé par GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis (<a href="https://pages.github.com/">GitHub Pages</a>).</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Vos données personnelles</h2>
    <div>
      <p>Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne comporte aucun formulaire de contact. Il ne collecte rien sur vous pendant votre lecture.</p>
      <h3>Quand vous m'écrivez</h3>
      <p>Si vous envoyez un message par WhatsApp, e-mail ou Instagram, je reçois ce que vous choisissez d'envoyer : votre nom, vos coordonnées et ce que vous dites de votre projet. Ces informations servent uniquement à vous répondre et, si le projet se fait, à réaliser la prestation. Elles ne sont ni vendues ni transmises à des fins commerciales.</p>
      <p>Les messages sont conservés pendant la durée de l'échange ou du projet, puis pendant la durée imposée par la loi pour les documents commerciaux.</p>
      <h3>Services qui reçoivent des données techniques</h3>
      <ul>
        <li>GitHub, l'hébergeur, reçoit votre adresse IP lorsque votre navigateur charge une page, comme tout serveur web.</li>
        <li>Google Fonts fournit les polices de caractères. Votre navigateur les demande à Google, qui reçoit votre adresse IP.</li>
        <li>WhatsApp et Instagram sont exploités par Meta. Leurs propres conditions s'appliquent dès que vous suivez ces liens.</li>
      </ul>
      <h3>Vos droits</h3>
      <p>Conformément au Règlement général sur la protection des données (RGPD), vous pouvez demander à consulter, corriger ou supprimer les informations que je détiens sur vous, ou vous opposer à leur utilisation. Écrivez à <a href="mailto:${c.cfg.email}">${c.cfg.email}</a>. Vous pouvez aussi saisir la <a href="https://www.cnil.fr/">CNIL</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Contenu du site</h2>
    <div>
      <p>Les textes, plans et photographies appartiennent à Stouls Studio ou sont utilisés avec autorisation. Merci de demander avant de les réutiliser.</p>
      <p>Les informations publiées ici sont générales. Elles ne constituent pas un conseil juridique, fiscal ou financier : vérifiez auprès d'un notaire, d'un avocat ou d'un conseil fiscal avant de vous engager.</p>
    </div>
  </div>
</section>`;
  },
};

export const frPages = [home, prestations, recherche, renovation, apropos, mentions];
