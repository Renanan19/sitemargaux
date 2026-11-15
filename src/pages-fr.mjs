// French version of the main pages: home, services, apartment search, renovation, about, legal.
// The guides and the glossary are written for buyers abroad and stay in English only.
import { faqBlock, frames, recent, PLANS } from "./pages-core.mjs";

const HOME = "fr/";

const formules = [
  {
    id: "de-la-recherche-aux-cles", name: "De la recherche à la remise des clés",
    who: "Pour les clients qui n'ont pas encore trouvé leur bien.",
    steps: ["Recherche d'appartement", "Analyse du potentiel du bien", "Conception et dossier technique", "Matériaux, mobilier et décoration", "Devis définitif", "Suivi du chantier", "Aménagement et remise des clés"],
  },
  {
    id: "renovation-complete", name: "Rénovation complète d'un bien déjà acquis",
    who: "Pour les clients qui possèdent déjà leur appartement.",
    steps: ["Analyse du bien et définition du projet", "Conception et dossier technique", "Matériaux, mobilier et décoration", "Devis définitif", "Suivi du chantier", "Aménagement et remise des clés"],
  },
];

const home = {
  lang: "fr",
  path: HOME,
  alt: "",
  title: "Architecte d'intérieur et designer à Paris | Stouls Studio",
  description: "Margaux Stouls, architecte d'intérieur et designer à Paris, cherche votre appartement, conçoit le projet, suit le chantier et l'aménage. Résidence principale, pied-à-terre ou locatif.",
  faq: [
    ["Faut-il que je sois à Paris ?", "Non. Les rendez-vous peuvent se tenir en visioconférence, les choix se confirment par WhatsApp, et pendant le chantier vous recevez des comptes rendus, des photos et, quand c'est nécessaire, des vidéos de l'appartement. Quand vous êtes sur place, les rendez-vous ont lieu sur le chantier."],
    ["Pouvez-vous intervenir sur un appartement que je possède déjà ?", "Oui. C'est l'une des deux formules du studio. Le projet commence alors par l'analyse du bien, puis la conception et le dossier technique."],
    ["Faites-vous aussi des rénovations partielles ?", "Oui. Une bibliothèque, une cuisine, quelques pièces : le portfolio en montre plusieurs. Dites-moi ce dont vous avez besoin et je vous dirai ce que je peux prendre en charge."],
    ["Combien cela coûte-t-il ?", "Chaque étape fait l'objet d'un devis écrit avant de commencer. Le devis définitif des travaux est établi une fois le dossier technique finalisé : il chiffre le projet que vous avez approuvé, et rien d'autre."],
    ["Travaillez-vous uniquement à Paris ?", "Non. La plupart de mes projets sont à Paris, et j'interviens aussi ailleurs : le portfolio comprend une maison de campagne en Bourgogne et une maison à Sifnos, en Grèce."],
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

<section class="band wide">
  <h2>Réalisations récentes</h2>
  <div class="gallery">
      ${recent(c, "fr")}
  </div>
  <p class="gallery-more"><a href="${c.link("fr/portfolio/")}">Voir tout le portfolio</a></p>
</section>

<section class="band wide paper">
  <h2>Deux façons de travailler avec moi</h2>
  ${frames(formules, "Formule", [c.link("fr/prestations/"), "Les étapes en détail"])}
</section>

<figure class="bleed">${c.img("main-14", "Séjour au parquet en point de Hongrie et hautes fenêtres, appartement parisien de Stouls Studio", "", false, "100vw")}</figure>

<section class="band wide">
  <h2>Quel que soit le projet</h2>
  <ul class="quad">
    <li><h3>Résidence principale</h3><p>Vous vivez à Paris, ou vous vous y installez, et vous voulez un appartement redessiné autour de votre quotidien.</p></li>
    <li><h3>Pied-à-terre</h3><p>Un appartement à vous à Paris pour des séjours réguliers, prêt à vivre dès votre arrivée.</p></li>
    <li><h3>Investissement locatif</h3><p>Un bien où une nouvelle distribution crée une chambre ou une vraie cuisine, conçu et meublé pour être loué.</p></li>
    <li><h3>Projet destiné à la revente</h3><p>Un appartement acheté pour être rénové puis revendu, où la conception se juge à la valeur qu'elle ajoute.</p></li>
  </ul>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Du premier appel à la remise des clés</h2>
    <ol class="steps">
      <li><div><span class="when">Semaine 1</span><h3>Un premier échange sur votre projet</h3><p>Le budget, l'usage, les quartiers, l'ampleur des travaux que vous êtes prêt à engager. Vous repartez avec une idée réaliste de ce que ce budget permet.</p></div></li>
      <li><div><span class="when">Jusqu'à trouver le bon</span><h3>Recherche et visites</h3><p>Je visite les biens retenus et je vous envoie une vidéo, mon avis sur chaque appartement et sur l'état de l'immeuble, et une première estimation des travaux.</p></div></li>
      <li><div><span class="when">2 à 3 mois</span><h3>Offre et achat</h3><p>Vous achetez en votre nom, chez le notaire. Je dessine les plans et je réunis les devis pendant le délai entre le compromis et l'acte de vente.</p></div></li>
      <li><div><span class="when">En parallèle de l'achat</span><h3>Dossier technique et devis définitif</h3><p>Vous validez et signez le dossier technique. Le devis définitif est établi à partir de ce dossier, et l'accord de la copropriété est demandé quand il est nécessaire.</p></div></li>
      <li><div><span class="when">Selon l'ampleur des travaux</span><h3>Le chantier</h3><p>Des visites de chantier, des décisions présentées avec des images et des prix, des paiements réglés une fois les travaux vérifiés.</p></div></li>
      <li><div><span class="when">2 à 3 dernières semaines</span><h3>Aménagement et remise des clés</h3><p>Tout est installé et photographié. Je vous remets les clés, ou je les confie au gestionnaire de votre choix.</p></div></li>
    </ol>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Pourquoi une architecte d'intérieur</h2>
    <div class="prose">
      <p>Un chasseur d'appartement est rémunéré à l'achat. Sa mission s'arrête chez le notaire, là où commence la partie difficile d'un appartement parisien : une électricité ancienne, une cuisine dans la mauvaise pièce, une copropriété qui vote ce que vous pouvez modifier.</p>
      <p>Je regarde un appartement comme un futur chantier avant que vous en soyez propriétaire. Dès la visite, je vous donne mon avis : le mur que vous voulez abattre porte-t-il le plancher du dessus, où une seconde salle de bain pourrait s'évacuer, et combien coûterait l'ensemble, à peu près. Vous faites votre offre en connaissant le coût total, achat et travaux.</p>
    </div>
  </div>
</section>

<figure class="bleed">${c.img("x-b25-2", "Séjour avec cheminée en marbre rouge et étagères sur montants en laiton, appartement de Stouls Studio", "", false, "100vw")}</figure>

<section class="band">
  <div class="band-grid">
    <h2>Ce qui vous protège à distance</h2>
    <ul class="rows">
      <li><h3>Votre dépôt de garantie reste chez le notaire</h3><p>Le dépôt versé au compromis est conservé par le notaire jusqu'à la vente. Vous disposez de dix jours pour vous rétracter, à compter du lendemain de la notification du compromis signé.</p></li>
      <li><h3>Les contrats sont à votre nom</h3><p>Vous achetez en votre nom et vous signez vous-même avec chaque entreprise. Leurs devis et leurs factures vous sont adressés, et vous les réglez directement.</p></li>
      <li><h3>Les entreprises sont assurées</h3><p>Toute entreprise doit avoir une assurance décennale, qui couvre les désordres graves après la réception des travaux, comme le rappelle <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2034">Service-Public</a>. Je recueille chaque attestation avant le démarrage.</p></li>
      <li><h3>Vous payez des travaux réalisés</h3><p>Les paiements suivent l'avancement du chantier. Vous réglez chaque étape après que j'ai vérifié les travaux par rapport aux plans et que je vous ai envoyé les photos.</p></li>
      <li><h3>Une seule personne entre vous et les entreprises</h3><p>Je fais tampon. Les questions, les retards et les reprises passent par moi, et je relance jusqu'à ce que chaque point soit réglé.</p></li>
    </ul>
  </div>
</section>

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
  service: "Recherche d'appartement, architecture d'intérieur et rénovation complète à Paris",
  title: "Prestations : de la recherche aux clés | Stouls Studio",
  description: "Les deux formules de Margaux Stouls, architecte d'intérieur et designer à Paris : de la recherche d'appartement à la remise des clés, ou la rénovation complète d'un bien déjà acquis.",
  faq: [
    ["Quelle formule choisir ?", "Tout dépend d'une seule chose : avez-vous déjà l'appartement ? Si vous cherchez encore, la première formule commence par la recherche. Si vous êtes propriétaire ou si vous avez déjà signé l'achat, la seconde commence par l'analyse du bien. À partir de la conception, les deux sont identiques."],
    ["Peut-on ne prendre qu'une partie de la prestation ?", "Oui. Certains clients demandent uniquement la conception et le dossier technique, ou la rénovation partielle de quelques pièces. Dites-moi ce dont vous avez besoin et je vous dirai ce que je peux prendre en charge."],
    ["Faut-il être à Paris ?", "Non. Les rendez-vous peuvent se tenir en visioconférence, les choix se confirment par WhatsApp, et pendant le chantier vous recevez des comptes rendus, des photos et, quand c'est nécessaire, des vidéos de l'appartement."],
    ["Quand connaît-on le prix définitif ?", "Quand le dossier technique est finalisé et signé. Le devis définitif est établi à partir de ce dossier : il chiffre le projet que vous avez approuvé. Avant cela, vous travaillez avec des estimations."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / Prestations</p>
  <h1>Deux formules, un appartement terminé</h1>
  <p class="lede">Soit je commence par trouver l'appartement, soit je pars de celui que vous possédez déjà. Dans les deux cas, je mène le projet jusqu'à la remise des clés, pour que vous ayez le moins de choses possible à gérer.</p>
  ${c.buttons()}
</section>

<section class="band wide">
  <h2>Les deux formules</h2>
  ${frames(formules, "Formule")}
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Chaque étape, en détail</h2>
    <ul class="rows">
      <li><h3>Recherche d'appartement <span class="tag">Formule 1</span></h3><div><p>Je pars de votre cahier des charges, je suis le marché et je visite sur place.</p>
        <a class="more" href="${c.link("fr/recherche-appartement-paris/")}">La recherche d'appartement</a></div></li>
      <li><h3>Analyse du potentiel du bien <span class="tag">Formule 1</span></h3><p>Pour chaque bien qui mérite d'être étudié : mon avis, ce qu'il serait possible d'en faire et une première idée du coût.</p></li>
      <li><h3>Analyse du bien et définition du projet <span class="tag">Formule 2</span></h3><p>Une visite, un relevé, et un cahier des charges clair.</p></li>
      <li><h3>Conception et dossier technique</h3><div><p>La nouvelle distribution, puis les plans de rénovation et les élévations de la cuisine, des salles de bain et de chaque menuiserie, dessinés pour l'immeuble tel qu'il est.</p>
        <a class="more" href="${c.link("fr/renovation-appartement-paris/")}">La rénovation</a></div></li>
      <li><h3>Matériaux, mobilier et décoration</h3><p>Sols, carrelages, robinetterie, luminaires, tissus, mobilier et objets sont choisis avec vous pendant la conception et listés dans le dossier technique : le devis porte sur ce que vous avez réellement retenu.</p></li>
      <li><h3>Devis définitif</h3><p>Établi une fois le dossier technique finalisé, pour que le prix corresponde au projet.</p></li>
      <li><h3>Suivi du chantier</h3><p>Des visites régulières, un compte rendu chaque semaine ou toutes les deux semaines selon la phase du chantier, et des photos.</p></li>
      <li><h3>Aménagement et remise des clés</h3><p>Mobilier, luminaires, rideaux, linge, vaisselle : commandés, livrés, montés et mis en place. L'appartement est meublé et équipé, tout est vérifié, et je vous remets les clés.</p></li>
    </ul>
  </div>
</section>

<figure class="bleed">${c.img("x-sau25", "Le séjour vu depuis la cuisine, avec les poteaux en bois d'origine, appartement parisien de Stouls Studio", "", false, "100vw")}</figure>

<section class="band" id="deroulement">
  <div class="band-grid">
    <h2>Comment nous travaillons ensemble</h2>
    <div class="pair">
      <div>
        <h3>Pendant la conception</h3>
        <ul>
          <li>Des rendez-vous réguliers, plus ou moins rapprochés selon la phase du projet.</li>
          <li>Des échanges par WhatsApp entre les rendez-vous, dans un groupe dédié si vous le souhaitez, pour confirmer certains choix et continuer d'avancer.</li>
          <li>Un dossier technique : les plans nécessaires aux travaux, notamment les plans de rénovation et les élévations, avec la liste des matériaux, du mobilier et des équipements retenus.</li>
          <li>Vous validez et signez le dossier avant le démarrage des travaux. Le devis définitif vient une fois le dossier finalisé.</li>
        </ul>
      </div>
      <div>
        <h3>Pendant le chantier</h3>
        <ul>
          <li>Un compte rendu chaque semaine ou toutes les deux semaines, selon la phase du chantier et les points à vous communiquer.</li>
          <li>Un reportage photo régulier.</li>
          <li>Des rendez-vous sur place quand vous êtes présent. À distance, nous échangeons en visioconférence, et je vous envoie des vidéos quand c'est nécessaire.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Ce dont vous n'avez plus à vous occuper</h2>
    <div>
      <p>Une rénovation, ce sont des centaines de petites décisions, une dizaine de corps de métier et un immeuble qui a ses propres règles. Je m'occupe de l'ensemble : je prépare les choix, je vous les soumets avec une image et un prix, et j'assure le suivi des travaux jusqu'à la livraison.</p>
      <p>Vous décidez, vous êtes tenu informé, et vous n'avez personne à relancer. Je fais tampon entre vous et les entreprises : je vérifie les travaux par rapport au dossier que vous avez approuvé et je relance jusqu'à ce que chaque point soit réglé.</p>
    </div>
  </div>
</section>

<section class="band wide">
  <h2>Les pièces en 3D, avant le chantier</h2>
  <div class="figs">
    ${["render-5", "render-6", "render-7"].map((n, i) => c.img(n, ["Modélisation 3D d'un dressing, Stouls Studio", "Modélisation 3D d'une salle de bain en marbre, Stouls Studio", "Modélisation 3D d'une cuisine en noyer avec îlot, Stouls Studio"][i], "", false, "(max-width: 820px) 100vw, 33vw")).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n    ")}
  </div>
  <p class="muted">Ces trois images sont des modélisations 3D, et non des photos. Quand c'est utile, je modélise les pièces pendant la conception : vous voyez la pièce et pouvez changer d'avis tant que cela ne coûte rien.</p>
</section>

<section class="band wide paper">
  <h2>Types de projets</h2>
  <ul class="quad">
    <li><h3>Résidence principale</h3><p>Un appartement pour y vivre toute l'année, redessiné autour de votre quotidien.</p></li>
    <li><h3>Pied-à-terre</h3><p>Une résidence secondaire à Paris pour des séjours réguliers.</p></li>
    <li><h3>Investissement locatif</h3><p>Un appartement conçu et meublé pour être loué.</p></li>
    <li><h3>Projet destiné à la revente</h3><p>Un appartement acheté pour être rénové puis revendu.</p></li>
  </ul>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Clients à Paris et à l'étranger</h2>
    <div>
      <p>Une partie des clients du studio vit à l'étranger et suit son projet à distance, en français ou en anglais. D'autres vivent à Paris et viennent à chaque réunion de chantier. La méthode est la même, le travail aussi : <a href="${c.link("fr/portfolio/")}">voir le portfolio</a>.</p>
      <p>Le détail de chaque étape : <a href="${c.link("fr/recherche-appartement-paris/")}">la recherche d'appartement</a> et <a href="${c.link("fr/renovation-appartement-paris/")}">la rénovation</a>.</p>
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Questions fréquentes</h2>
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
    ["Quelle différence avec un chasseur d'appartement ?", "Un chasseur juge l'emplacement et le prix. Je donne aussi mon avis sur les travaux : la structure, les évacuations, l'état de l'électricité, ce que l'immeuble devrait autoriser. Vous avez côte à côte un prix d'achat et une estimation de rénovation."],
    ["Trouvez-vous des biens hors marché ?", "Parfois, par les agents et les entreprises avec lesquels je travaille. La plupart des bons appartements parisiens sont en annonce et partent vite. L'important est de les voir dans les premiers jours et de savoir tout de suite si le plan peut être corrigé."],
    ["Qui signe l'achat ?", "Vous, chez le notaire, en votre nom ou au nom de votre société. La vente passe par des agents immobiliers parisiens titulaires de la carte professionnelle et par le notaire. Mon rôle : le cahier des charges, les visites et mon analyse de chaque bien. Je ne détiens pas vos fonds et je ne suis pas partie à la vente."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / Recherche d'appartement</p>
  <h1>Le bon appartement, avec un regard d'architecte d'intérieur.</h1>
  <p class="lede">Je cherche les biens, je les visite et je vous envoie une vidéo de chacun. Mon regard d'architecte d'intérieur fait le reste : voir ce qu'un lieu peut devenir, imaginer la transformation, estimer les travaux. Vous pouvez faire une offre en sachant où vous allez.</p>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Ce que vous recevez pour chaque appartement</h2>
    <div>
      <ul>
        <li>Une vidéo de la visite, pièce par pièce, avec les vues sur la rue et la cage d'escalier.</li>
        <li>Mon avis sur ce que je vois de la structure, de l'humidité, de l'électricité, de la plomberie, des fenêtres et du chauffage.</li>
        <li>Mon avis sur le bien et un court compte rendu : ce qu'il serait possible d'en faire, et ce qui ne le serait pas.</li>
        <li>La performance énergétique (DPE) et ses conséquences si vous comptez louer.</li>
        <li>L'immeuble et la copropriété : les procès-verbaux d'assemblée générale, les travaux récents, les travaux votés mais pas encore payés, les charges.</li>
        <li>Une première estimation du coût de rénovation, pour comparer deux appartements sur leur coût total, achat et travaux.</li>
      </ul>
      <p>Quand un appartement vous convient et mérite d'aller plus loin, je peux dessiner un premier croquis d'intention de la nouvelle distribution.</p>
      <p>Les photos d'une annonce sont prises au grand-angle, un jour de soleil. C'est à la visite que l'on découvre que la chambre donne sur un mur à deux mètres, ou que la seule place pour le lave-linge est dans l'entrée.</p>
      ${c.buttons()}
    </div>
  </div>
</section>

<figure class="bleed">${c.img("x-bag8", "Cuisine en noyer aux étagères éclairées et table ovale, appartement de Stouls Studio", "", false, "100vw")}</figure>

<section class="band paper">
  <div class="band-grid prose">
    <h2>Ce que je recherche</h2>
    <div>
      <p>Les appartements qui valent la peine sont souvent ceux qui ne paient pas de mine. Un couloir sombre que l'on peut ouvrir. Une cuisine au fond qui peut passer dans le séjour. Un deux-pièces de 50 m² qui devient un trois-pièces une fois le plan redessiné.</p>
      <p>Ce sont ceux que les autres acheteurs écartent, et ceux où la conception ajoute le plus de valeur à budget égal.</p>
      <p>Je vous dis aussi lesquels écarter. Un bel appartement sous une toiture dont la copropriété n'a pas voté la réfection n'est pas une affaire.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Après la recherche</h2>
    <div>
      <p>La recherche est la première étape d'une prestation complète, jusqu'à la remise d'un appartement terminé et meublé : conception, dossier technique, devis définitif, suivi du chantier, aménagement. <a href="${c.link("fr/prestations/")}#de-la-recherche-aux-cles">Toutes les étapes, de la recherche à la remise des clés</a>.</p>
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
  service: "Rénovation complète d'appartement à Paris",
  title: "Rénovation d'appartement à Paris, de A à Z | Stouls Studio",
  description: "Conception, dossier technique, matériaux, suivi de chantier et aménagement de votre appartement à Paris, par Margaux Stouls, architecte d'intérieur et designer, du premier plan aux clés.",
  faq: [
    ["Faut-il l'accord de la copropriété pour rénover ?", "Pour des travaux à l'intérieur de votre appartement qui ne touchent à rien de commun, en général non. Pour tout ce qui concerne la structure, les canalisations communes, la façade ou les fenêtres, l'accord de la copropriété est nécessaire, et certains travaux demandent aussi une déclaration en mairie. Je vérifie le règlement de l'immeuble avant de figer le projet."],
    ["Comment suit-on le chantier ?", "Un compte rendu chaque semaine ou toutes les deux semaines selon la phase du chantier, des photos, et des vidéos ou un échange en visioconférence quand vous ne pouvez pas venir. Chaque choix qui vous revient est présenté avec des images et un prix."],
    ["Qui paie les entreprises ?", "Vous, directement, sur la base de factures que j'ai vérifiées par rapport aux travaux réalisés. Je n'encaisse ni ne détiens les paiements destinés aux entreprises."],
    ["Peut-on rénover seulement la cuisine ou la salle de bain ?", "Oui, le studio réalise aussi des rénovations partielles. Dans un appartement ancien, il est toutefois souvent plus économique de traiter ensemble l'électricité, la plomberie et la distribution : on n'ouvre les murs qu'une fois."],
  ],
  body: (c) => `
<section class="page-head">
  <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / Rénovation</p>
  <h1>Un projet pensé dans les moindres détails, suivi jusqu'à la fin du chantier.</h1>
  <p class="lede">Repenser les volumes, dessiner les plans, choisir les matériaux et imaginer les détails qui feront la différence : je conçois votre intérieur dans son ensemble, en tenant compte de votre façon de vivre et du caractère du lieu.</p>
  <p class="lede">Pour donner vie au projet, je m'entoure d'équipes d'artisans tous corps d'état avec lesquelles j'entretiens une relation de confiance de longue date. J'assure le suivi du chantier et je veille, à leurs côtés, à la bonne réalisation des travaux, jusqu'aux dernières finitions.</p>
  ${c.buttons()}
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Ce que vous validez avant les travaux</h2>
    <div>
      <p>Rien n'est construit que vous n'ayez vu et approuvé. Avant le démarrage des travaux, je vous présente trois choses.</p>
      <ul>
        <li>Le projet en images : la nouvelle distribution et, quand c'est utile, les pièces modélisées en 3D, pour changer d'avis tant que cela ne coûte rien.</li>
        <li>Le dossier technique : les plans de rénovation et les élévations cotées de la cuisine, des salles de bain et de chaque menuiserie. Les entreprises chiffrent et construisent à partir de ces documents.</li>
        <li>Le sourcing : les matériaux, le mobilier, les luminaires et la décoration choisis avec vous, listés un par un.</li>
      </ul>
      <p>Vous signez le dossier. Le devis définitif est ensuite établi à partir du dossier finalisé : il chiffre exactement ce que vous avez retenu.</p>
    </div>
    <div class="figs plans">
      ${PLANS.map((n, i) => c.img(n, ["Plan d'un studio avec cuisine, pièce de vie, salle d'eau et coin nuit, Stouls Studio", "Plan d'un appartement avec deux chambres et deux terrasses, Stouls Studio", "Plan électrique d'un grand appartement, Stouls Studio", "Élévations cotées d'un WC et d'une salle de bain enfants, Stouls Studio", "Élévations cotées d'une cuisine en chêne et carreaux de terre cuite, Stouls Studio"][i], "", false, "(max-width: 820px) 100vw, 33vw")).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="band paper">
  <div class="band-grid">
    <h2>Sur le chantier</h2>
    <div>
      <div class="figs five">
        ${["x-site1", "x-site2", "x-site3", "x-site4", "x-site5"].map((n, i) => c.img(n, ["Démolition en cours dans un appartement parisien, gravats au sol, chantier Stouls Studio", "Ancien conduit de cheminée mis à nu pendant la démolition, chantier Stouls Studio", "Deux ouvriers évacuent les gravats d'une pièce mise à nu, chantier Stouls Studio", "Pose d'une nouvelle fenêtre donnant sur une cour parisienne, chantier Stouls Studio", "Ponçage d'un mur depuis un escabeau, chantier Stouls Studio"][i])).filter(Boolean).map((img) => `<figure>${img}</figure>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid">
    <h2>Ce qui est compris</h2>
    <ul class="rows">
      <li><h3>Conception</h3><p>L'étude de l'existant, puis la nouvelle distribution. Cuisine, salles de bain, menuiseries intégrées, éclairage et couleurs sont dessinés pour l'appartement tel qu'il est vraiment.</p></li>
      <li><h3>Dossier technique</h3><p>Plans de rénovation et élévations, assez détaillés pour que chaque entreprise chiffre la même chose et la réalise sans deviner.</p></li>
      <li><h3>Matériaux et mobilier</h3><p>Sols, carrelages, robinetterie, luminaires, tissus, mobilier et objets, sélectionnés avec vous et listés dans le dossier.</p></li>
      <li><h3>Autorisations</h3><p>Lecture du règlement de copropriété, préparation du dossier pour le syndic et le vote des copropriétaires quand il est nécessaire, et déclaration en mairie le cas échéant.</p></li>
      <li><h3>Suivi du chantier</h3><p>Des visites pendant toute la durée des travaux, un compte rendu avec photos chaque semaine ou toutes les deux semaines selon la phase du chantier, et des réserves listées puis levées avant le dernier paiement.</p></li>
      <li><h3>Aménagement et remise des clés</h3><p>Du canapé au tire-bouchon, si vous le souhaitez. L'appartement est livré prêt à vivre ou à louer.</p></li>
    </ul>
  </div>
</section>

<section class="band paper">
  <div class="band-grid prose">
    <h2>La place de la rénovation</h2>
    <div>
      <p>La rénovation est le cœur des deux formules du studio. Si vous n'avez pas encore acheté, elle suit la <a href="${c.link("fr/recherche-appartement-paris/")}">recherche d'appartement</a>. Si vous êtes déjà propriétaire, elle commence par l'analyse du bien et la définition du projet.</p>
      <p><a href="${c.link("fr/prestations/")}">Les deux formules, étape par étape, et le suivi du chantier</a>.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Ce que l'ancien impose à un plan</h2>
    <div>
      <p>L'essentiel de Paris a été construit avant 1914. Les planchers sont en solives de bois ou de fer, les murs entre les pièces font souvent partie de la structure, et les évacuations passent là où on les a posées il y a un siècle.</p>
      <p>Cela décide de l'endroit où peut aller une salle de bain, des murs que l'on peut ouvrir, et de la capacité d'un plancher à porter un plan de travail en pierre. C'est aussi pourquoi deux appartements de même surface peuvent coûter des montants très différents à rénover.</p>
      <p>Je conçois avec ces contraintes en tête dès la première visite. Les devis restent réalistes, et les surprises de milieu de chantier sont moins nombreuses.</p>
    </div>
  </div>
</section>

<section class="band paper">
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
  description: "Margaux Stouls, architecte d'intérieur et designer, a créé Stouls Studio à Paris en 2019. Plus de 60 projets menés, de la conception au suivi des travaux, à Paris et ailleurs.",
  body: (c) => `
<section class="about-split">
  <div class="about-photo">${c.img("margaux", "Margaux Stouls, architecte d'intérieur et designer", "", true)}</div>
  <div class="about-text">
    <p class="crumbs"><a href="${c.link(HOME)}">Stouls Studio</a> / À propos</p>
    <h1>Margaux Stouls <span>Architecte d'intérieur et designer</span></h1>
    <p>Derrière Stouls Studio, il y a moi. La personne que vous rencontrez au premier rendez-vous est aussi celle qui dessine vos plans, assure le suivi de votre chantier et mène le projet jusqu'aux derniers détails.</p>
    <p>Diplômée en architecture d'intérieur et en design produit, j'aime penser un projet dans son ensemble : la circulation dans un appartement, la lumière, les volumes, mais aussi le dessin d'un meuble, le choix d'une matière ou la justesse d'une finition. Cette double formation me permet de passer naturellement de la vision globale aux détails qui donnent son caractère à un lieu.</p>
    <p>J'ai créé Stouls Studio en 2019 avec l'envie de concevoir des intérieurs personnels, agréables à vivre et adaptés à ceux qui les habitent. Depuis, j'ai mené plus de 60 projets, de la conception au suivi des travaux.</p>
    <p>Aujourd'hui, je travaille aussi bien avec les personnes qui souhaitent trouver leur appartement à Paris depuis l'étranger qu'avec celles qui veulent repenser un lieu qu'elles habitent déjà. Pour les premières, je suis leur regard sur place : je recherche, je visite, je partage mes découvertes et j'imagine les possibilités de chaque bien. Pour les secondes, je transforme leurs envies en un projet concret, conçu sur mesure et suivi sur le terrain.</p>
    <p>Dans les deux cas, mon approche reste la même : écouter, comprendre votre manière de vivre et révéler le potentiel d'un lieu pour en faire un intérieur qui vous ressemble.</p>
    ${c.buttons()}
    <p class="about-links"><a href="${c.link("fr/prestations/")}">Les deux formules du studio</a><a href="${c.link("fr/portfolio/")}">Le portfolio</a></p>
  </div>
</section>

<section class="band wide paper">
  <h2>Ma manière de travailler</h2>
  <ul class="quad plain">
    <li><p>Une seule interlocutrice, du début à la fin.</p></li>
    <li><p>Des devis d'entreprises communiqués dans leur intégralité. Vous contractez directement avec les entreprises.</p></li>
    <li><p>Des décisions présentées avec une image et un prix.</p></li>
    <li><p>À Paris et ailleurs, en français ou en anglais.</p></li>
  </ul>
</section>

<section class="band">
  <div class="band-grid prose">
    <h2>Le métier d'architecte d'intérieur</h2>
    <div>
      <p>L'architecte d'intérieur repense l'intérieur d'un bâtiment : l'emplacement des cloisons, de la cuisine et des salles de bain, l'éclairage des pièces, les matériaux. Elle dessine les plans à partir desquels les entreprises construisent et assure le suivi du chantier.</p>
      <table>
        <thead><tr><th>Métier</th><th>Rôle</th></tr></thead>
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
        <li>Du conseil fiscal ou juridique. C'est le rôle de votre notaire et de votre conseiller fiscal.</li>
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
      <p>Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne comporte aucun formulaire de contact. Je ne collecte rien sur vous pendant votre lecture ; seul l'hébergeur reçoit les données techniques décrites plus bas.</p>
      <h3>Quand vous m'écrivez</h3>
      <p>Si vous envoyez un message par WhatsApp, e-mail ou Instagram, je reçois ce que vous choisissez d'envoyer : votre nom, vos coordonnées et ce que vous dites de votre projet. Ces informations servent uniquement à vous répondre et, si le projet se fait, à réaliser la prestation. Elles ne sont ni vendues ni transmises à des fins commerciales.</p>
      <p>Les messages sont conservés pendant la durée de l'échange ou du projet, puis pendant la durée imposée par la loi pour les documents commerciaux.</p>
      <h3>Services qui reçoivent des données techniques</h3>
      <ul>
        <li>GitHub, l'hébergeur, reçoit votre adresse IP lorsque votre navigateur charge une page, comme tout serveur web.</li>
        <li>Les polices de caractères sont servies par ce site : aucune requête n'est envoyée à Google.</li>
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
      <p>Les textes, plans et photographies appartiennent à Stouls Studio ou sont utilisés avec autorisation. Toute réutilisation est soumise à autorisation préalable.</p>
      <p>Les informations publiées ici sont générales. Elles ne constituent pas un conseil juridique, fiscal ou financier : renseignez-vous auprès d'un notaire, d'un avocat ou d'un conseiller fiscal avant de vous engager.</p>
    </div>
  </div>
</section>`;
  },
};

export const frPages = [home, prestations, recherche, renovation, apropos, mentions];
