/* ==========================================================================
   Salon Business – JS unifié
   Regroupe : Programme (timeline), Intervenants (grille + fallback photo),
   Stands (cartes), ScrollSpy Bootstrap, Navbar sticky.
   ========================================================================== */
(() => {
  "use strict";

  /* =========================
     PROGRAMME (Timeline)
     ========================= */
  const PROGRAM_DAYS = [
    {
      label: "",
      id: "day1",
      items: [
        { time: "13:00 – 19:00", title: "Espace forum, échanges & partage (tout public)", tags: ["En continu"] },
        { time: "14:30 – 15:15", title: "Plénière — L’importance de suivre l’appel de Dieu dans sa vie professionnelle", tags: ["Plénière"] },
        { time: "15:45 – 16:05", title: "Talent Time Show", tags: ["Jeunes"] },
        { time: "16:35 – 17:30", title: "Plénière — Femmes entrepreneurs chrétiennes : foi, audace & succès", tags: ["Plénière"] },
        { time: "17:30 – 19:00", title: "Jeu networking", tags: ["Networking"] },

        // Enfants (activité en continu)
        { time: "14:30 – 18:30", title: "Kid’s Club (enfants)", tags: ["En continu"] }
      ]
    }
  ];


  const $tabs = document.getElementById("programTabs");
  const $tabContent = document.getElementById("programTabContent");

  function fmtTimeBadge(t) {
    const left = String(t).split("–")[0].trim().split("-")[0].trim();
    return left; // ex. "13:30"
  }
  function tagToBadge(t) {
    const map = {
      "Jeunes": "badge-young",
      "Adultes": "badge-adult",
      "Plénière": "badge-plenary",
      "Networking": "badge-net",
      "Exposants": "badge-expo",
      "En continu": "badge-expo",
      "Pause": "badge-pause"
    };
    return `<span class="badge-tag ${map[t] || "badge-pause"}">${t}</span>`;
  }
  function renderProgramTabs() {
    if (!$tabs) return;
    $tabs.innerHTML = PROGRAM_DAYS.map((d, i) => (
      `<li class="nav-item" role="presentation">
        <button class="nav-link ${i === 0 ? "active" : ""}"
          id="${d.id}-tab" data-bs-toggle="tab" data-bs-target="#${d.id}"
          type="button" role="tab" aria-controls="${d.id}" aria-selected="${i === 0}">
          ${d.label || "Programme"}
        </button>
      </li>`
    )).join("");
  }
  function renderProgramPanels() {
    if (!$tabContent) return;
    $tabContent.innerHTML = PROGRAM_DAYS.map((d, i) => {
      const items = d.items.map(it => {
        const begin = fmtTimeBadge(it.time);
        const tags = (it.tags || []).map(tagToBadge).join(" ");
        const meta = [
          `<i class="bi bi-clock"></i> ${it.time}`,
          it.room ? `<span><i class="bi bi-geo-alt"></i> ${it.room}</span>` : ""
        ].filter(Boolean).join(" · ");
        return `
          <li class="event">
            <div class="time">${begin.replace(":", "<br>")}</div>
            <div class="event-card">
              <h6 class="event-title">${it.title}</h6>
              <div class="event-meta">${meta}</div>
              ${it.desc ? `<p class="event-desc">${it.desc}</p>` : ""}
              ${tags ? `<div class="tags">${tags}</div>` : ""}
            </div>
          </li>`;
      }).join("");
      return `
        <div class="tab-pane fade ${i === 0 ? "show active" : ""}"
             id="${d.id}" role="tabpanel" aria-labelledby="${d.id}-tab" tabindex="0">
          <div class="program-wrap">
            <ol class="timeline">${items}</ol>
          </div>
        </div>`;
    }).join("");
  }

  /* =========================
     INTERVENANTS (Grille)
     ========================= */
  const INTERVENANTS = [
    { "fullName": "Sourou AGOSSOU", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "photos/Sourou Agossou.JPG", "role": "Directeur Administratif et Financier - Responsable Performance ERP Groupe" },
    { "fullName": "Samuelle SINHOUNTO", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "photos/Samuelle SINHOUNTO.jpeg", "role": "Auditeur interne / externe\nContrôleur de gestion / Contrôleur financier\nAnalyste financier" },
    { "fullName": "Norris HANKPE", "sector": "BTP/Industries/Energie", "photo": "photos/Norris Hankpe.JPG", "role": "Technicien climatisation" },
    { "fullName": "Happy ZOUNVEHA", "sector": "Enseignement / Recherche/ Formation", "photo": "photos/Happy ZOUNVEHA.jpeg", "role": "Chargée de programmes" },
    { "fullName": "Élie SINHOUNTO", "sector": "Banque/Assurances", "photo": "photos/Elie SINHOUNTO.jpeg", "role": "Consultant IT -  AMOA/ Gestion de projet" },
    { "fullName": "Gabriel ADETONAH", "sector": "Informatique/Télécoms", "photo": "photos/Gabriel ADETONAH.jpeg", "role": "Chef de projet informatique" },
    { "fullName": "Regis MERCIER", "sector": "Informatique/Télécoms", "photo": "photos/Régis MERCIER.jpeg", "role": "Chef de projet sur des outils digitaux" },
    { "fullName": "Moise TEKO", "sector": "Construction/Travaux publics/Immobilier", "photo": "photos/Moise TEKO.jpeg", "role": "Chef de projet" },
    { "fullName": "Sébastien BASSONG", "sector": "Sport", "photo": "photos/Sébastien Bassong .jpeg", "role": "Ex footballer professionnel - Coach" },
    { "fullName": "Stephania AHOUDJI", "sector": "Santé/Social", "photo": "photos/Stephania AHOUDJI.jpeg", "role": "Travailleur sociale" },
    { "fullName": "Lewis SOMASSOU", "sector": "Arts du spectable", "photo": "photos/Lewis SOMASSOU.jpeg", "role": "Artiste, compositeur, Interprète" },
    { "fullName": "Elisabeth KOFFI", "sector": "Enseignement / Recherche/ Formation", "photo": "photos/Elisabeth KOFFI.jpeg", "role": "Chargée accompagnement  jeunes - FRANCE TRAVAIL " },
    { "fullName": "Jean-Yves MEFRE", "sector": "Droit/Economie/Gestion", "photo": "photos/Jean-Yves MEFRE.jpeg", "role": "Contrôleur de gestion" },
    { "fullName": "Marie-Emmanuel BRUNO", "sector": "Santé/Social", "photo": "photos/Marie-Emmanuel BRUNO.jpeg", "role": "Infirmière" },
    { "fullName": "Seynan ALOKPO", "sector": "Droit/Economie/Gestion", "photo": "photos/Seynan ALOKPO.jpeg", "role": "Expert-comptable" },
    { "fullName": "Donan TEKO", "sector": "Droit/Economie/Gestion", "photo": "photos/Donan TEKO.png", "role": "Responsable comptable/ Expertise comptable " },
    { "fullName": "Divine KASI", "sector": "Santé/Social", "photo": "photos/Divine KASI.png", "role": "Fondatrice de DSANI Event / Infirmière " },
    { "fullName": "Carol OUATTARA", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "photos/Carol OUATTARA.jpeg", "role": "Actuaire" },
    { "fullName": "Aurélien BASSONG NGUENA", "sector": "Audiovisuel", "photo": "photos/Aurélien BASSONG NGUENA.jpeg", "role": "Manager/Photographe" },
    { "fullName": "Laura MATABISHI-BIBI", "sector": "Santé/Social", "photo": "photos/Laura MATABISHI-BIBI.jpeg", "role": "Docteur en biologie / Chef de projet R&D" },
    { "fullName": "Karine BLI", "sector": "Restauration/Traiteur", "photo": "photos/Karine BLI.jpeg", "role": "Traiteur" },
    { "fullName": "Rebecca BIALY", "sector": "Restauration/Traiteur", "photo": "photos/Rebecca BIALY.jpeg", "role": "Traiteur" },
    { "fullName": "Hortense ANGOSTON-DOZA", "sector": "Hotêllerie", "photo": "photos/Hortense ANGOSTON-DOZA.jpeg", "role": "Gérante d'une conciergerie " },
    { "fullName": "Jules MEFRE", "sector": "Immobilier", "photo": "photos/Jules MEFRÉ.png", "role": "Conseiller immobilier" },
    { "fullName": "Anne-Marie BIALY", "sector": "Communication/Marketing/Commerce", "photo": "photos/Anne-Marie BIALY.jpeg", "role": "Fondatrice du mouvement 'Vase d'Honneur' et créatrice de contenu" },
    { "fullName": "Prince Israel KOYA", "sector": "Education/Formation", "photo": "photos/Prince Israël KOYA.jpeg", "role": "Enseignant Chercheur / Responsable EMUSA" },
    { "fullName": "Dominique DEPRI", "sector": "Santé/Social", "photo": "photos/Dominique DEPRI.jpeg", "role": "Travailleur sociale " },
    { "fullName": "Roméo GBONGBON", "sector": "Numérique/Informatique/Nouvelles technologies", "photo": "photos/Roméo GBONGBON.jpeg", "role": "Développeur informatique" },
    { "fullName": "Marie LARCHER", "sector": "Musique/Théâtre/Comédie", "photo": "photos/Marie LARCHER.jpeg", "role": "Actrice" },
    { "fullName": "Victoire BLÉ", "sector": "Urbanisme / Aménagement du territoire / Administration publique", "photo": "photos/Victoire BLÉ.jpeg", "role": "Chargé d'urbanisme" },
    { "fullName": "Manuela Charlene MANANGA", "sector": "Beauté/Mode/Esthétique", "photo": "photos/Manuela Charlene MANANGA.png", "role": "Coiffeuse" },
    { "fullName": "Merveille Hankpe", "sector": "Beauté/Mode/Esthétique", "photo": "photos/Merveille HANKPÉ.jpeg", "role": "Prothésiste ongulaire " },
    { "fullName": "Samson KADJA", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "photos/Samson KADJA.jpeg", "role": "Chef d'entreprise, Expert comptable, Auditeur" },
    { "fullName": "Samuel ANATOLE", "sector": "Services Juridiques/ Notariat", "photo": "photos/Samuel ANATOLE.jpeg", "role": "Clerc de notaire" },
    { "fullName": "Alexandra Cinthia BALINGUIN", "sector": "Fonction publique", "photo": "photos/Alexandra-Cinthia BALAGUIN.jpg", "role": "Gestionnaire de recouvrement - URSAFF" },
    { "fullName": "Michel Joncart", "sector": "Santé/Social", "photo": "photos/Michel JONCART.jpg", "role": "Infirmier à la retraite" },
    { "fullName": "Yvan NZALENGI", "sector": "Sport", "photo": "photos/Yvan NZALENGI.jpeg", "role": "Agent sportif" },
    { "fullName": "Emmanuel LAGO", "sector": "Ressources humaines ", "photo": "photos/Emmanuel LAGO.jpeg", "role": "Créateur de contenu / Responsable recrutement" },
    { "fullName": "Eric MATABISHI-BIBI", "sector": "Logistique/Transports", "photo": "photos/Eric MATABISHI-BIBI.jpeg", "role": "Responsable Import" },
    { "fullName": "Nadiah ADEBOH", "sector": "Education/Formation", "photo": "photos/Nadiah ADEBOH.jpeg", "role": "Enseignante motivatrice et personnalisée" },
    { "fullName": "Antoine Desiré NYEMB", "sector": "Maintenance / Sécurité / Bâtiment", "photo": "photos/Antoine Désiré NYEMB.jpg", "role": "Techniciens de maintenance Sécurité incendie et BAES" },
    { "fullName": "Patrick MANZUMBU", "sector": "Services Juridiques/ Notariat", "photo": "photos/Patrick MANZUMBU.jpeg", "role": "Fiscaliste " },
    { "fullName": "Sylvia KADJA", "sector": "Education/Formation", "photo": "photos/Sylvia KADJA.jpeg", "role": "Educatrice de jeunes enfants et fondatrice de 'Frères d'espoir'" },
    { "fullName": "Elia MEFRE", "sector": "Musique/Théâtre/Comédie", "photo": "photos/Elia Mefre.JPG", "role": "Actrice" },
    { "fullName": "Pelagie GAE", "sector": "Santé/Social", "photo": "photos/Pélagie GAE.jpg", "role": "Mamie Choco Traiteur / Auxiliaire de puéricuture " },
    { "fullName": "Samuel KASI", "sector": "Communication/Marketing/Commerce", "photo": "photos/Samuel KASI.jpeg", "role": "Graphiste - Fondateur de K6 Touch" },
    { "fullName": "Nathalie AKELE", "sector": "Fonction publique", "photo": "photos/Nathalie AKELE.jpeg", "role": "Chargé des concours aux Ministère de l'Intérieur" },
    { "fullName": "Angela SILVA FERNANDES", "sector": "Fonction publique", "photo": "photos/Angela SILVA FERNANDES.jpeg", "role": "Experte Services Publiques (CAF/CNAV/MSA) " },
    { "fullName": "Ruth ASSOGBA", "sector": "Beauté/Mode/Esthétique", "photo": "photos/Ruth ASSOGBA.jpeg", "role": "Styliste modéliste" },
    { "fullName": "Sarah BIALY", "sector": "Musique/Théâtre/Comédie", "photo": "photos/Sarah BIALY.jpeg", "role": "Artiste Chantre - Coach vocale" },
    { "fullName": "Wilfried GBONGBON", "sector": "BTP / Construction / Transport", "photo": "photos/Wilfried GBONGBON.jpeg", "role": "Chef de projet Génie Civil et Infrastructure de transport" },
    { "fullName": "Carole GUEI", "sector": "Hotêllerie", "photo": "photos/CAROLE GUEI.jpeg", "role": "Gérante de The Luxury Conciergerie" },
    { "fullName": "Albertine GBEGNONVI", "sector": "Santé/Social", "photo": "photos/Albertine GBEGNONVI.jpeg", "role": "Infirmière" },
    { "fullName": "Didier DOLOIR", "sector": "Transport public / Mobilité", "photo": "photos/Didier Doloir.jpg", "role": "Assistant d'exploitation - RATP" },
    { "fullName": "Calixte OGAN", "sector": "Education/Formation", "photo": "photos/Calixte OGAN.JPG", "role": "Chargé d’Accompagnement : Emploi, Insertion" },
    { "fullName": "Julie ETOUNDI", "sector": "Santé/Social", "photo": "photos/Julie ETOUNDI .png", "role": "Infirmière" },
    { "fullName": "Mélissa AGOSSOU", "sector": "Santé/Social", "photo": "photos/Mélissa AGOSSOU.jpeg", "role": "Etudiante en 2nde année de médecine" },
    { "fullName": "Bartel MBOUMBA", "sector": "Communication/Marketing/Commerce", "photo": "photos/Bartel MBOUMBA.jpeg", "role": "Expert digital marketing" },
    { "fullName": "Abiola PADONOU", "sector": "Diplomatie/coopération/aide au développement/analyse politique", "photo": "photos/Abiola PADONOU.jpeg", "role": "Expert en Art Oratoire" },
    { "fullName": "Thérèse ADJOVI", "sector": "BTP/Industries/Energie", "photo": "photos/Thérèse ADJOVI.jpeg", "role": "Ingénieur Génie Civil - Chargée d'études" },
    { "fullName": "Warren JEAN FRANÇOIS", "sector": "Communication/Marketing/Commerce", "photo": "photos/Warren JEAN FRANÇOIS.jpeg", "role": "Créateur de contenu" },
    { "fullName": "Martin EKO NTOGHE", "sector": "Numérique/Informatique/Nouvelles technologies", "photo": "photos/Martin EKO NTOGHE .png", "role": "Ingénieur Génie Civil - Chargée d'études" },
    { "fullName": "Loriane BORDIN", "sector": "BTP/Industries/Energie", "photo": "photos/Loriane BORDIN.jpeg", "role": "Architecte" },
    { "fullName": "Victoria AGBATO", "sector": "Restauration/Traiteur", "photo": "photos/Victoria AGBATO.png", "role": "Traiteur - Les Délices de Vicky" },
    { "fullName": "Francine BORDIN", "sector": "Fonction publique", "photo": "photos/Francine BORDIN.jpg", "role": "Inspectrice des Finances Publiques / Ancienne RH" }
  ];

  const $gridInterv = document.getElementById("intervenantsGrid");
  const $filterInterv = document.getElementById("intervenantsFilter");

  const escapeHTML = (s = "") =>
    s.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  function personIconSVG(alt = "") {
    return `
    <div class="d-flex align-items-center justify-content-center bg-light rounded avatar interv-photo" title="${escapeHTML(alt)}">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path fill="#9ca3af" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"/>
        <path fill="#9ca3af" d="M3 21a9 9 0 0 1 18 0Z"/>
      </svg>
    </div>`;
  }

  function cardHTML(p) {
    const alt = escapeHTML(p.fullName || "");
    const role = escapeHTML(p.role || "");
    const imgHTML = (p.photo && p.photo.trim())
      ? `<img class="avatar interv-photo mb-2" data-photo="1" src="${p.photo}" alt="${alt}" loading="lazy">`
      : personIconSVG(p.fullName);

    return `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card interv h-100 p-2">
          ${imgHTML}
          <div class="px-1 pb-2">
            <strong>${alt}</strong><br>
            <small class="text-muted">${role.replace(/\n/g, "<br>")}</small>
          </div>
        </div>
      </div>`;
  }

  function attachFallbackIcons(scope = document) {
    scope.querySelectorAll("#intervenantsGrid img[data-photo]").forEach(img => {
      img.addEventListener("error", () => {
        const alt = img.getAttribute("alt") || "Intervenant";
        img.outerHTML = personIconSVG(alt);
      }, { once: true });
    });
  }

  function renderIntervenants(sector = "") {
    if (!$gridInterv) return;
    const list = sector ? INTERVENANTS.filter(x => (x.sector || "").trim() === sector.trim()) : INTERVENANTS;
    $gridInterv.innerHTML = list.map(cardHTML).join("");
    attachFallbackIcons($gridInterv);
  }

  function initIntervenants() {
    if (!$gridInterv) return;
    if ($filterInterv) {
      const sectors = [...new Set(INTERVENANTS.map(x => (x.sector || "").trim()).filter(Boolean))].sort();
      sectors.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s; opt.textContent = s;
        $filterInterv.appendChild(opt);
      });
      $filterInterv.addEventListener("change", e => renderIntervenants(e.target.value));
    }
    renderIntervenants();
  }

  /* =========================
     STANDS (Cartes)
     ========================= */
  const STANDS = [
    { id: 1, title: "Art culinaire", subs: [
        "Dynos Delice",
        "LPB Le Petit Brunch",
        "Mamie Choco",
        "NKS Hair – Coiffeuse",
        "Les Délices de Vicky"
    ]},
    { id: 2, title: "Jongler avec les chiffres" },
    { id: 3, title: "Entre clavier et écran" },
    { id: 4, title: "Bâtir, transporter préserver" },
    { id: 5, title: "Prendre soin des autres : santé et social" },
    { id: 6, title: "Art du spectacle" },
    { id: 7, title: "Être révélé pour influencer" },
    { id: 8, title: "Sport : la passion du haut niveau" },
    { id: 9, title: "Œuvrer pour la paix, le droit et la justice" },
    { id: 10, title: "Explorer le monde" },
    { id: 11, title: "Bâtir sa carrière en entreprise" },
    { id: 12, title: "Talents, passion et appel" },
    { id: 13, title: "Soigner son image professionnelle : CV, profil LinkedIn" },
    { id: 14, title: "5 minutes pour convaincre" },
    { id: 15, title: "Institutions de l’État" },
    { id: 16, title: "Gestion des finances : trucs et astuces" },
    { id: 17, title: "Investir dans l’immobilier : ce qu’il faut savoir" },
    { id: 18, title: "Diversifier ses sources de revenus : Entrepreneuriat & Side Business" },
    { id: 19, title: "Vie associative", subs: ["Meilleurs santé pour tous", "Frères d’Espoir", "Vase d’Honneur", "EMUSA"] },
    { id: 20, title: "Je suis entrepreneur", subs: [
        "Nadiah Réussite – Accompagnement scolaire et académique",
        "Elohim Media – Photographe",
        "K6 Touch – Graphiste",
        "NKS Hair – Coiffeuse",
        "MyCel beauty – Prothésiste ongulaire",
        "DSANI Events – Location matériel d'art de la table",
        "Ayotunde Creation – Stylisme Modélisme",
        "Maison Kabia – Stylisme Modélisme",
        "Hatt Home Conciergerie – Conciergerie haut de gamme",
        "Luxury Conciergerie – Conciergerie de luxe"
      ]},
    { id: 21, title: "Communiquer, Vendre, Négocier" },
    { id: 22, title: "Être éloquent au quotidien : l’art de savoir s’exprimer" }
  ];

  const $standsGrid = document.getElementById("standsGrid");

  function standCardHTML(s) {
    const subs = s.subs ? `
      <details class="mt-2">
        <summary class="text-primary fw-bold" style="cursor:pointer">Détails</summary>
        <ul class="stand-sub">
          ${s.subs.map(x => `<li>${x}</li>`).join("")}
        </ul>
      </details>` : "";
    return `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="stand-card h-100">
          <h5 class="stand-title">${s.id}. ${s.title}</h5>
          ${subs}
        </div>
      </div>`;
  }
  function renderStands(list = STANDS) {
    if (!$standsGrid) return;
    $standsGrid.innerHTML = list.map(standCardHTML).join("");
  }

  function initStands() {
    renderStands();
    // petits filtres optionnels si présents dans le DOM
    document.querySelectorAll("[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.dataset.filter;
        if (mode === "pers") {
          renderStands([...STANDS].sort((a, b) => (b.persons || 0) - (a.persons || 0)));
        } else if (mode === "tables") {
          renderStands([...STANDS].sort((a, b) => (b.tables || 0) - (a.tables || 0)));
        } else {
          renderStands(STANDS);
        }
      });
    });
  }

  /* =========================
     ScrollSpy (Bootstrap 5)
     ========================= */
  function initScrollSpy() {
    const nav = document.querySelector(".navbar");
    const target = document.getElementById("mainNav");
    if (!window.bootstrap || !target) return;
    const offset = (nav?.offsetHeight || 80) + 8;
    const spy = new bootstrap.ScrollSpy(document.body, { target: "#mainNav", offset });
    window.addEventListener("load", () => spy.refresh());
    window.addEventListener("resize", () => spy.refresh());
  }

  /* =========================
     Navbar sticky (après le hero)
     ========================= */
  function initStickyNav() {
    const nav = document.querySelector(".navbar");
    const spacer = document.getElementById("nav-spacer");
    const hero = document.querySelector("header.hero");
    if (!nav || !hero || !spacer) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        nav.classList.remove("is-fixed");
        spacer.style.height = "0px";
      } else {
        nav.classList.add("is-fixed");
        spacer.style.height = nav.offsetHeight + "px";
      }
    }, { threshold: 0 });
    io.observe(hero);
  }

  /* =========================
     Bootstrapping
     ========================= */
  document.addEventListener("DOMContentLoaded", () => {
    // Programme
    renderProgramTabs();
    renderProgramPanels();

    // Intervenants
    initIntervenants();

    // Stands
    initStands();

    // UI comportements
    initScrollSpy();
    initStickyNav();
  });

})();
