
    // ===== Données Programme (peut gérer 1..N jours) =====
    const PROGRAM_DAYS = [
      { label: 'Jour - 01', id: 'day1', items: [
        {
          time: '13:00 – 13:30',
          title: 'Accueil & ouverture',
          room: 'Hall principal',
          desc: 'Bienvenue, café d’accueil et présentation des objectifs du réseau (échanger, partager, collaborer, s’entraider).',
          tags: ['Plénière']
        },
        {
          time: '13:30 – 15:00',
          title: 'Tables rondes – Jeunes',
          room: 'Salles A/B/C (par secteurs)',
          desc: 'Parcours & métiers : chiffres (banque/finance/assurance/gestion), BTP/industrie/énergie, numérique/IT, santé/social, communication/marketing/commerce, entrepreneuriat, arts/design/mode, service public/éducation, audiovisuel, droit/relations internationales, talents & appel, beauté/esthétique, restauration.',
          tags: ['Jeunes']
        },
        {
          time: '13:30 – 18:00',
          title: 'Espace exposants & stands',
          room: 'Espace Expo',
          desc: 'Découverte des projets, produits et initiatives des membres de la communauté.',
          tags: ['Exposants', 'En continu']
        },
        {
          time: '15:00 – 15:15',
          title: 'Pause',
          room: 'Hall',
          desc: 'Temps de respiration & rencontres informelles.',
          tags: ['Pause']
        },
        {
          time: '15:15 – 16:00',
          title: '5 tables thématiques – Adultes',
          room: 'Salles D/E/F/G/H',
          desc: 'Finances perso, investir dans l’immobilier, diversifier ses revenus (side business), éloquence, image professionnelle (CV/LinkedIn/photo).',
          tags: ['Adultes']
        },
        {
          time: '15:15 – 17:00',
          title: 'Corner LinkedIn & Photo',
          room: 'Hall (stand conseil)',
          desc: 'Aide flash pour optimiser CV/LinkedIn + prise de photo pro.',
          tags: ['Exposants', 'En continu']
        },
        {
          time: '16:15 – 16:45',
          title: 'Concours d’éloquence (jeunes)',
          room: 'Scène centrale',
          desc: 'Pitchs courts, jury & retours pour progresser dans l’art oratoire.',
          tags: ['Jeunes']
        },
        {
          time: '16:45 – 17:15',
          title: 'Plénière',
          room: 'Scène centrale',
          desc: '« Femme entrepreneur chrétienne : audace, foi et succès ».',
          tags: ['Plénière']
        },
        {
          time: '17:15 – 18:00',
          title: 'Networking guidé',
          room: 'Hall / zones thématiques',
          desc: 'Jeu de networking pour multiplier les connexions et opportunités.',
          tags: ['Networking']
        },
        {
          time: '18:00',
          title: 'Clôture & annonces réseau',
          room: 'Scène centrale',
          desc: 'Remerciements, prochaines étapes et actions du Celestial Network.',
          tags: ['Plénière']
        }
      ]}
    ];

    const PARTICIPANTS = [
      {"firstName": "Sourou", "lastName": "AGOSSOU", "job": "Directeur Administratif et Financier - Responsable Performance ERP Groupe", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "https://ui-avatars.com/api/?name=Sourou+AGOSSOU&background=0C0096&color=fff&size=256"},
      {"firstName": "Samuelle", "lastName": "SINHOUNTO", "job": "Auditeur interne / externe / Contrôleur de gestion / Contrôleur financier / Analyste financier", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "https://ui-avatars.com/api/?name=Samuelle+SINHOUNTO&background=0C0096&color=fff&size=256"},
      {"firstName": "Norris", "lastName": "HANKPE", "job": "Technicien climatisation", "sector": "Energie/Environnement", "photo": "https://ui-avatars.com/api/?name=Norris+HANKPE&background=0C0096&color=fff&size=256"},
      {"firstName": "Happy", "lastName": "ZOUNVEHA", "job": "Chargée de programmes", "sector": "Enseignement / Recherche/ Formation", "photo": "https://ui-avatars.com/api/?name=Happy+ZOUNVEHA&background=0C0096&color=fff&size=256"},
      {"firstName": "Élie", "lastName": "SINHOUNTO", "job": "Consultant IT -  AMOA/ Gestion de projet", "sector": "Banque/Assurances", "photo": "https://ui-avatars.com/api/?name=%C3%89lie+SINHOUNTO&background=0C0096&color=fff&size=256"},
      {"firstName": "Micheline", "lastName": "FETON", "job": "Chargée de clientèles / Conseillère Banque/Assurance", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "https://ui-avatars.com/api/?name=Micheline+FETON&background=0C0096&color=fff&size=256"},
      {"firstName": "Monlourd", "lastName": "KOUTON", "job": "Financial controller", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "https://ui-avatars.com/api/?name=Monlourd+KOUTON&background=0C0096&color=fff&size=256"},
      {"firstName": "TCHENG", "lastName": "KPOUNHOHOU", "job": "Consultant système d’information", "sector": "Banque, Finance, Assurance, Comptabilité, Gestion", "photo": "https://ui-avatars.com/api/?name=TCHENG+KPOUNHOHOU&background=0C0096&color=fff&size=256"},
      {"firstName": "Elie", "lastName": "ZOUNON", "job": "Mécanicien industriel", "sector": "Industrie", "photo": "https://ui-avatars.com/api/?name=Elie+ZOUNON&background=0C0096&color=fff&size=256"},
      {"firstName": "Kossi", "lastName": "AHOUANVOEBLA", "job": "Sapeur pompier", "sector": "Sécurité", "photo": "https://ui-avatars.com/api/?name=Kossi+AHOUANVOEBLA&background=0C0096&color=fff&size=256"},
      {"firstName": "Chahinez", "lastName": "DEHOUX", "job": "Infirmière auxiliaire de puériculture", "sector": "Santé/Social", "photo": "https://ui-avatars.com/api/?name=Chahinez+DEHOUX&background=0C0096&color=fff&size=256"},
      {"firstName": "Lucille", "lastName": "AITHNATHAN", "job": "Infirmière", "sector": "Santé/Social", "photo": "https://ui-avatars.com/api/?name=Lucille+AITHNATHAN&background=0C0096&color=fff&size=256"},
      {"firstName": "Sandra", "lastName": "FADEGBE", "job": "Aide soignante", "sector": "Santé/Social", "photo": "https://ui-avatars.com/api/?name=Sandra+FADEGBE&background=0C0096&color=fff&size=256"},
      {"firstName": "Edern", "lastName": "HERVOUET", "job": "Consultant en cybersécurité / ingénieur sécurité / Analyste SOC", "sector": "Numérique / IT ", "photo": "https://ui-avatars.com/api/?name=Edern+HERVOUET&background=0C0096&color=fff&size=256"},
      {"firstName": "Cédric", "lastName": "TOITOT", "job": "Technicien informatique / Administrateur systèmes et réseaux", "sector": "Numérique / IT ", "photo": "https://ui-avatars.com/api/?name=C%C3%A9dric+TOITOT&background=0C0096&color=fff&size=256"},
      {"firstName": "Mounir", "lastName": "BESSSI", "job": "STAGIAIRE ADMINISTRATEUR SYSTEME ET RÉSEAUX", "sector": "Numérique / IT ", "photo": "https://ui-avatars.com/api/?name=Mounir+BESSSI&background=0C0096&color=fff&size=256"},
      {"firstName": "Sofia", "lastName": "BENHAMDOUN", "job": "Consultante en stratégie", "sector": "Communication/ Marketing/ Commerce", "photo": "https://ui-avatars.com/api/?name=Sofia+BENHAMDOUN&background=0C0096&color=fff&size=256"},
      {"firstName": "Laure", "lastName": "KACOUTIE", "job": "Assistante commerciale", "sector": "Communication/ Marketing/ Commerce", "photo": "https://ui-avatars.com/api/?name=Laure+KACOUTIE&background=0C0096&color=fff&size=256"},
      {"firstName": "Gaelle", "lastName": "ALAYE", "job": "Assistante commerciale", "sector": "Communication/ Marketing/ Commerce", "photo": "https://ui-avatars.com/api/?name=Gaelle+ALAYE&background=0C0096&color=fff&size=256"},
      {"firstName": "Domitille", "lastName": "GOMIS", "job": "Chargée de marketing et communication", "sector": "Communication/ Marketing/ Commerce", "photo": "https://ui-avatars.com/api/?name=Domitille+GOMIS&background=0C0096&color=fff&size=256"},
      {"firstName": "Stessy", "lastName": "KPEDE", "job": "Commerciale sédentaire", "sector": "Communication/ Marketing/ Commerce", "photo": "https://ui-avatars.com/api/?name=Stessy+KPEDE&background=0C0096&color=fff&size=256"},
      {"firstName": "Arielle", "lastName": "OLADELE", "job": "Community manager/ Graphiste", "sector": "Communication/ Marketing/ Commerce", "photo": "https://ui-avatars.com/api/?name=Arielle+OLADELE&background=0C0096&color=fff&size=256"},
      {"firstName": "Daphné", "lastName": "AKPACA", "job": "Entrepreneure : DAPHY STUDIOS (Coiffure, tresses) / Consultante en immigration", "sector": "Entrepreneuriat", "photo": "https://ui-avatars.com/api/?name=Daphn%C3%A9+AKPACA&background=0C0096&color=fff&size=256"},
      {"firstName": "Joseph", "lastName": "GANDONOU", "job": "Entrepreneur : électricité / plomberie", "sector": "Entrepreneuriat", "photo": "https://ui-avatars.com/api/?name=Joseph+GANDONOU&background=0C0096&color=fff&size=256"},
      {"firstName": "Océane", "lastName": "BAKPE", "job": "Entrepreneure : Océano Style (Mode) — communication visuelle & stylisme", "sector": "Entrepreneuriat", "photo": "https://ui-avatars.com/api/?name=Oc%C3%A9ane+BAKPE&background=0C0096&color=fff&size=256"},
      {"firstName": "Bryan", "lastName": "BAPTISTE", "job": "Entrepreneur : Joe et Bryan Events (événementiel)", "sector": "Entrepreneuriat", "photo": "https://ui-avatars.com/api/?name=Bryan+BAPTISTE&background=0C0096&color=fff&size=256"},
      {"firstName": "Sharon", "lastName": "GODOMEY", "job": "Design & Animation 3D", "sector": "Arts / Design / Mode", "photo": "https://ui-avatars.com/api/?name=Sharon+GODOMEY&background=0C0096&color=fff&size=256"},
      {"firstName": "Hanniel", "lastName": "ODJO", "job": "Ingénieur en automatisme", "sector": "Service public / Education", "photo": "https://ui-avatars.com/api/?name=Hanniel+ODJO&background=0C0096&color=fff&size=256"},
      {"firstName": "Golbert", "lastName": "AKPO", "job": "Enseignant — mathématiques", "sector": "Service public / Education", "photo": "https://ui-avatars.com/api/?name=Golbert+AKPO&background=0C0096&color=fff&size=256"},
      {"firstName": "Albert", "lastName": "HOUSSOU", "job": "Enseignant — anglais", "sector": "Service public / Education", "photo": "https://ui-avatars.com/api/?name=Albert+HOUSSOU&background=0C0096&color=fff&size=256"},
      {"firstName": "Jordan", "lastName": "SOSSOU", "job": "Opérateur de prises de vues / cadreur", "sector": "Audiovisuel", "photo": "https://ui-avatars.com/api/?name=Jordan+SOSSOU&background=0C0096&color=fff&size=256"},
      {"firstName": "Chilon", "lastName": "KOUTON", "job": "Caméraman / monteur", "sector": "Audiovisuel", "photo": "https://ui-avatars.com/api/?name=Chilon+KOUTON&background=0C0096&color=fff&size=256"},
      {"firstName": "Alban", "lastName": "AGBOKOU", "job": "Monteur vidéo", "sector": "Audiovisuel", "photo": "https://ui-avatars.com/api/?name=Alban+AGBOKOU&background=0C0096&color=fff&size=256"},
      {"firstName": "Axel", "lastName": "AYADJI", "job": "Journaliste/présentateur radio", "sector": "Audiovisuel", "photo": "https://ui-avatars.com/api/?name=Axel+AYADJI&background=0C0096&color=fff&size=256"},
      {"firstName": "Precious", "lastName": "THIANDJI", "job": "Journaliste/présentatrice TV", "sector": "Audiovisuel", "photo": "https://ui-avatars.com/api/?name=Precious+THIANDJI&background=0C0096&color=fff&size=256"},
      {"firstName": "Jomar", "lastName": "TOUSSAINT", "job": "Rédacteur vidéos & monteur", "sector": "Audiovisuel", "photo": "https://ui-avatars.com/api/?name=Jomar+TOUSSAINT&background=0C0096&color=fff&size=256"},
      {"firstName": "Gracia", "lastName": "KAUFOLO", "job": "Juriste d’entreprise", "sector": "Droit / Relations internationales", "photo": "https://ui-avatars.com/api/?name=Gracia+KAUFOLO&background=0C0096&color=fff&size=256"},
      {"firstName": "Belinda", "lastName": "SAGBO", "job": "Assistante juridique", "sector": "Droit / Relations internationales", "photo": "https://ui-avatars.com/api/?name=Belinda+SAGBO&background=0C0096&color=fff&size=256"},
      {"firstName": "Thibault", "lastName": "ABOLI", "job": "Juriste en droit des affaires", "sector": "Droit / Relations internationales", "photo": "https://ui-avatars.com/api/?name=Thibault+ABOLI&background=0C0096&color=fff&size=256"},
      {"firstName": "Hosea", "lastName": "OWEREKONNE", "job": "Aide-soignant diplômé (BEPSS)", "sector": "Santé/Social", "photo": "https://ui-avatars.com/api/?name=Hosea+OWEREKONNE&background=0C0096&color=fff&size=256"},
      {"firstName": "Assitan", "lastName": "TRAORE", "job": "Esthéticienne", "sector": "Beauté / Esthétique", "photo": "https://ui-avatars.com/api/?name=Assitan+TRAORE&background=0C0096&color=fff&size=256"},
      {"firstName": "Eglantine", "lastName": "KOUASSI", "job": "Esthéticienne", "sector": "Beauté / Esthétique", "photo": "https://ui-avatars.com/api/?name=Eglantine+KOUASSI&background=0C0096&color=fff&size=256"},
      {"firstName": "Séphora", "lastName": "GANDONOU", "job": "Styliste culinaire / Pâtisserie — PePa’s cake", "sector": "Restauration / Art culinaire", "photo": "https://ui-avatars.com/api/?name=S%C3%A9phora+GANDONOU&background=0C0096&color=fff&size=256"},
      {"firstName": "Naomi", "lastName": "GAWROSZ", "job": "Serveuse / Aide cuisinière", "sector": "Restauration / Art culinaire", "photo": "https://ui-avatars.com/api/?name=Naomi+GAWROSZ&background=0C0096&color=fff&size=256"}
    ];


    // ===== Rendu Programme façon "tabs + accordéons" =====
    const tabsEl = document.getElementById('programTabs');
    const tabContentEl = document.getElementById('programTabContent');

    function renderProgramTabs(){
      tabsEl.innerHTML = PROGRAM_DAYS.map((d,idx)=>`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${idx===0?'active':''}" id="${d.id}-tab" data-bs-toggle="tab" data-bs-target="#${d.id}"
            type="button" role="tab" aria-controls="${d.id}" aria-selected="${idx===0}">${d.label}</button>
        </li>`).join('');
    }
    function fmtTimeBadge(t){
      // split début
      const parts = String(t).split('–')[0].trim().split('-')[0].trim();
      // retourne par ex. "13:30"
      return parts;
    }
    function tagToBadge(t){
      const map = {
        'Jeunes':'badge-young',
        'Adultes':'badge-adult',
        'Plénière':'badge-plenary',
        'Networking':'badge-net',
        'Exposants':'badge-expo',
        'En continu':'badge-expo',
        'Pause':'badge-pause'
      };
      return `<span class="badge-tag ${map[t]||'badge-pause'}">${t}</span>`;
    }

    function renderProgramPanels(){
      tabContentEl.innerHTML = PROGRAM_DAYS.map((d,idx)=>{
        const items = d.items.map(it=>{
          const begin = fmtTimeBadge(it.time);
          const tags  = (it.tags||[]).map(tagToBadge).join(' ');
          const meta  = [
            `<i class="bi bi-clock"></i> ${it.time}`,
            it.room ? `<span><i class="bi bi-geo-alt"></i> ${it.room}</span>` : ''
          ].filter(Boolean).join(' · ');
          return `
            <li class="event">
              <div class="time">${begin.replace(':','<br>')}</div>
              <div class="event-card">
                <h6 class="event-title">${it.title}</h6>
                <div class="event-meta">${meta}</div>
                ${it.desc ? `<p class="event-desc">${it.desc}</p>` : ''}
                ${tags ? `<div class="tags">${tags}</div>` : ''}
              </div>
            </li>`;
        }).join('');

        return `
          <div class="tab-pane fade ${idx===0?'show active':''}" id="${d.id}" role="tabpanel" aria-labelledby="${d.id}-tab" tabindex="0">
            <div class="program-wrap">
              <ol class="timeline">
                ${items}
              </ol>
            </div>
          </div>`;
      }).join('');
    }
    // ===== Participants (inchangé) =====
    const participantsGrid = document.getElementById('participantsGrid');
    const sectorFilter = document.getElementById('sectorFilter');

    function renderParticipants(sector = '') {
      const list = sector ? PARTICIPANTS.filter(x => x.sector === sector) : PARTICIPANTS;
      participantsGrid.innerHTML = list.map(x => `
        <div class='col-6 col-md-4 col-lg-3 mb-4'>
          <div class='card elev h-100 p-2'>
            <img class='avatar mb-2' src='${x.photo || "https://picsum.photos/600/450"}' alt='${x.firstName} ${x.lastName}'>
            <div class='px-1 pb-2'>
              <strong>${x.firstName} ${x.lastName}</strong>
              <p class='mb-1'>${x.job}</p>
              <small class='text-muted'>${x.sector}</small>
            </div>
          </div>
        </div>`).join('');
    }
    function renderSectors() {
      const sectors = [...new Set(PARTICIPANTS.map(x => x.sector))];
      sectors.forEach(s => { const opt = document.createElement('option'); opt.value = s; opt.textContent = s; sectorFilter.appendChild(opt) });
    }

    // ===== Init =====
    renderProgramTabs();
    renderProgramPanels();

    renderSectors();
    renderParticipants();

    sectorFilter?.addEventListener('change', e => renderParticipants(e.target.value));
    document.getElementById('year').textContent = new Date().getFullYear();