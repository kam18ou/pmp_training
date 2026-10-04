import type { Workshop } from '../../types';

export const WORKSHOPS_FR_B: Workshop[] = [
  {
    id: 12,
    title:
      'CLÔTURE COMPLÈTE DU PROJET : LISTE DE RÉSERVES, PLANS DE RÉCOLEMENT, REMISE DE GARANTIE & JUSTIFICATION FINANCIÈRE',
    phase: 'Phase 7 — Clôture & remise de garantie',
    line: 'Systèmes intégrés (CCTV + contrôle d\'accès + câblage structuré)',
    level: '',
    duration:
      '120 minutes (20m l\'économie de la clôture, 45m montage du dossier de remise et de la liste de réserves, 35m justification financière & pitch SLA, 20m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 7 (Clôture & transition SLA).',
    scenario:
      'Un projet d\'intégration sur un site tertiaire de $145,000 est physiquement installé et en service, mais le projet est officiellement bloqué dans le « purgatoire de la clôture » :',
    objectives: [
      'Appliquer le protocole de triage « zéro liste de réserves » pour négocier, isoler et éliminer les litiges de clôture en 7 jours ouvrés.',
      'Constituer un dossier de remise de projet de qualité supérieure (plans de récolement, certificats de test Fluke, sauvegardes de configuration, manuels O&M).',
      'Réaliser une justification financière complète en calculant la marge brute réelle finale par rapport à la référence du devis initial.',
      'Animer un débriefing structuré « retours d\'expérience » et présenter avec succès une SLA de maintenance annuelle.',
    ],
    roles: [
      'PM senior de l\'entreprise (traite les réserves, exige l\'acceptation définitive et la libération de la retenue de garantie).',
      'Directeur des services généraux du client (peu enclin à signer, soulève des problèmes cosmétiques mineurs pour retarder le paiement final).',
      'Technicien principal de l\'entreprise (réalise les corrections, présente les résultats de test des câbles et les plans de récolement).',
      'Dirigeant de l\'entreprise / Responsable finance (analyse la rentabilité du chantier et négocie le contrat de maintenance).',
    ],
    inputs: [
      'Liste de réserves de 18 points contestée par le client.',
      'Plans d\'architecture annotés en rouge et synthèse des certifications câbles Fluke Versiv.',
      'Registre final des coûts de chantier (heures de main-d\'œuvre réelles, factures de matériel réelles, justificatifs de location).',
    ],
    tasks: [
      'Auditer les 18 réserves du client : les classer entre réserves de garantie légitimes et demandes hors périmètre non facturées (par ex. le cloisonnement non peint à l\'endroit où l\'enduit existant s\'est fissuré).',
      'Rédiger un protocole de résolution des réserves signé, avec des engagements de fin de travaux à 72 heures.',
      'Calculer le coût final de main-d\'œuvre, le coût du matériel, la marge brute ($) et le taux de marge brute (%), puis les comparer à l\'objectif de 35 % du devis.',
      'Rédiger le contrat annuel de maintenance d\'une page (paliers Gold / Silver) et le présenter lors de la réunion de remise finale.',
    ],
    deliverables:
      'Certificat d\'acceptation définitive signé, registre formel de levée des réserves, feuille de justification des coûts de chantier et proposition de SLA de maintenance.',
    facilitator: '',
    mistakes: [
      'Quitter le chantier lorsque les travaux physiques sont terminés sans organiser de visite de réception formelle. Débriefing : montrer comment des clôtures non résolues s\'étirent sur des mois et détruisent la trésorerie de l\'entreprise.',
      'Livrer des plans de récolement bâclés, griffonnés à la main. Débriefing : démontrer que des plans de récolement numériques et soignés construisent une autorité professionnelle et rendent les futures interventions rentables.',
      'Partir sans proposer de contrat annuel de maintenance. Débriefing : montrer qu\'une installation existante est 5x plus facile à prospecter qu\'un nouveau client pour vendre une SLA.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Ne parvient pas à lever la liste de réserves ; accepte des réparations cosmétiques gratuites ; ne récupère pas la retenue de garantie.',
      },
      {
        tier: 'En développement',
        desc: 'Lève la liste de réserves mais n\'effectue pas la justification financière et ne propose pas de SLA.',
      },
      {
        tier: 'Compétent',
        desc: 'Négocie avec succès l\'achèvement substantiel ; lève la liste de réserves en 72 heures ; justifie la marge du chantier ; présente la SLA.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Encaisse 100 % du solde final et de la retenue sous 5 jours ouvrés, tout en signant un contrat de maintenance pluriannuel de $12,000/an.',
      },
    ],
    transfer:
      'Créer un « modèle de classeur de remise » standard (numérique et papier). Aucun projet n\'est marqué clôturé en comptabilité tant que le certificat d\'acceptation n\'est pas signé et la proposition de SLA remise.',
    variations: {
      small:
        'Le dirigeant pilote lui-même la visite des réserves avec le directeur des services généraux pour encaisser le règlement sur site.',
      large:
        'Le responsable du service maintenance participe à la visite de clôture pour assurer une transition sans rupture vers l\'équipe de maintenance récurrente.',
    },
  },
  {
    id: 13,
    title:
      'ÉTUDE DE SITE & DIAGNOSTIC TECHNIQUE POUR UN WI-FI D\'ENTREPRISE ET LA VIDÉO D\'ENTREPÔT INDUSTRIEL',
    phase: 'Phase 1 — Initiation & étude de site',
    line: 'Wi-Fi industriel & vidéosurveillance grande hauteur',
    level: '',
    duration:
      '105 minutes (15m réalités du milieu industriel, 45m annotation des plans et détection des manques, 30m rédaction du rapport d\'étude, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 1 (Initiation & étude de site).',
    scenario:
      'Un opérateur logistique en entreposage frigorifique invite votre entreprise à réaliser l\'étude d\'un centre de distribution de 75,000 sq ft comprenant :',
    objectives: [
      'Réaliser une étude de site technique systématique à l\'aide d\'un protocole de diagnostic industriel standardisé.',
      'Identifier les barrières physiques, environnementales et d\'atténuation RF (tenue -20 °F, rayonnages métalliques, CEM haute tension).',
      'Rédiger un rapport de constat d\'étude de site complet, avec photos annotées, hauteurs de montage et exigences de cheminements de câbles.',
    ],
    roles: [
      'Surveyeur systèmes senior / chargé d\'études de prix (identifie les obstacles de cheminement et les indices de tenue environnementale des équipements).',
      'Technicien terrain principal (évalue l\'accessibilité en nacelle élévatrice, les exigences de gaine de câble par grand froid, les fixations de harnais).',
      'Responsable des opérations d\'entrepôt (client) (centré sur le flux des chariots élévateurs, restreint les créneaux d\'accès des nacelles).',
    ],
    inputs: [
      'Plan d\'architecture 2D fait sur CAD contenant volontairement des erreurs et sans détails de mezzanine.',
      'Fiches techniques des caméras et points d\'accès industriels pour températures extrêmes comparés aux modèles commerciaux standard.',
      'Liste de contrôle complète pour étude de site industrielle.',
    ],
    tasks: [
      'Auditer le plan de site fourni et identifier au moins 7 omissions ou risques techniques critiques.',
      'Choisir les spécifications matérielles adaptées (par ex. enveloppes IP66/IP67, résistances internes pour -20 °F, câble à faible fumée sans halogène de type plenum, homologué basse température).',
      'Déterminer les besoins exacts en nacelle (par ex. nacelle électrique à ciseaux de 34 ft pour allée étroite plutôt que nacelle télescopique standard).',
      'Produire un rapport de synthèse d\'étude de site professionnel, avec des recommandations claires et les hypothèses d\'exclusion.',
    ],
    deliverables:
      'Plan d\'étude annoté en rouge, matrice de sélection des équipements selon l\'environnement et rapport de synthèse d\'étude de site.',
    facilitator: '',
    mistakes: [
      'Spécifier des points d\'accès et caméras intérieurs standard dans des environnements à températures extrêmes ou très humides. Débriefing : montrer pourquoi du matériel de qualité industrielle avec résistances intégrées et membranes Gore-Tex évite des retours en garantie sans fin.',
      'Oublier de vérifier les hauteurs de mâts de chariots face aux hauteurs de montage proposées pour les caméras et les points d\'accès. Débriefing : montrer des photos de caméras sectionnées par des mâts de chariots parce qu\'elles étaient montées sous 22 ft.',
      'Oublier le coût des équipements de sécurité spécialisés pour grand froid et la décharge des batteries de nacelle par temps de gel. Débriefing : intégrer une productivité du travail réduite de 30 % en environnement sub-zéro.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Oublie les contraintes de l\'entreposage frigorifique ; propose du matériel commercial standard ; ne repère pas les barrières d\'accès des nacelles.',
      },
      {
        tier: 'En développement',
        desc: 'Choisit du matériel outdoor mais ne repère pas l\'atténuation RF due aux rayonnages métalliques et à l\'inventaire liquide dense.',
      },
      {
        tier: 'Compétent',
        desc: 'Analyse environnementale complète ; spécifie les enveloppes IP et chauffantes adaptées ; prévoit les cheminements de câbles autour des lignes 480 V.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Anticipe les problèmes de condensation au niveau des quais ; produit un rapport de site visuel irréprochable avec des recommandations de carte thermique.',
      },
    ],
    transfer:
      'Ne soumettez jamais un devis pour un site industriel, d\'entrepôt ou extérieur sans avoir complété la liste de contrôle d\'étude de site industrielle de 3 pages avec au minimum 15 photos de site horodatées.',
    variations: {
      small:
        'Le monteur en chef réalise l\'étude avec la liste de contrôle sur smartphone ; le point est fait directement avec le dirigeant.',
      large:
        'Un ingénieur avant-vente dédié coordonne avec le chef de chantier pour valider la nacelle à grande hauteur.',
    },
  },
  {
    id: 14,
    title:
      'ANALYSE DES DEVIS FOURNISSEURS, COMPARAISON DES BOM & OPTIMISATION DES DÉLAIS DE FABRICATION',
    phase: 'Phase 3 — Achats & gouvernance fournisseurs',
    line: 'Achats de matériel multi-fournisseurs (réseaux, CCTV, contrôle d\'accès)',
    level: '',
    duration:
      '90 minutes (15m dynamique des grossistes et pièges, 40m normalisation et notation des devis, 25m défense d\'une stratégie d\'achat hybride, 10m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 3 (Achats & mobilisation).',
    scenario:
      'Votre entreprise s\'apprête à acheter $80,000 de matériel pour un important projet commercial. Vous recevez trois devis de grossistes concurrents (Fournisseur A : Anixter/Wesco, Fournisseur B : ADI Global, Fournisseur C : Graybar/ScanSource) pour une nomenclature (BOM) comprenant :',
    objectives: [
      'Évaluer les devis fournisseurs multi-sources selon 6 critères pondérés (prix, vitesse de livraison, conditions de paiement, conformité technique, garantie/RMA, frais d\'expédition).',
      'Détecter les non-conformités techniques dissimulées (par ex. aluminium cuivré vs. cuivre massif 100 %, garanties de marché gris).',
      'Construire un plan d\'approvisionnement hybride optimisé qui protège la trésorerie du projet et les jalons du chemin critique.',
    ],
    roles: [
      'Responsable achats / administratif de bureau (gère les comptes fournisseurs, les conditions de crédit et les politiques RMA).',
      'Chef de projet / ingénieur principal (évalue la conformité technique, les spécifications et l\'impact sur le planning).',
      'Contrôleur financier / dirigeant de l\'entreprise (protège la trésorerie, le risque lié aux acomptes et la marge brute).',
    ],
    inputs: [
      '3 devis de distributeurs détaillés avec prix par ligne, délais de fabrication, conditions de fret et mentions en petits caractères.',
      'Fiche de spécifications projet détaillant les normes de câblage TIA/EIA obligatoires et les homologations UL.',
      'Modèle réutilisable de matrice de comparaison des achats.',
    ],
    tasks: [
      'Normaliser les trois devis dans une matrice de comparaison standardisée.',
      'Identifier le défaut rédhibitoire de l\'offre câbles du Fournisseur A (le câble CCA enfreint le code NEC/NFPA et les normes de sécurité PoE).',
      'Répartir la BOM de façon stratégique entre les distributeurs pour obtenir le meilleur équilibre entre vitesse de livraison, prix et conditions de crédit.',
      'Calculer l\'impact financier sur la marge brute du projet.',
    ],
    deliverables:
      'Matrice de comparaison des achats complétée, évaluation des risques fournisseurs et plan final de bons de commande approuvés.',
    facilitator: '',
    mistakes: [
      'Choisir les distributeurs uniquement sur le prix d\'achat le plus bas, sans intégrer le fret ni les pénalités de retard de livraison. Débriefing : montrer comment $500 économisés sur le matériel ont coûté $3,000 d\'immobilisation de techniciens en attente de pièces.',
      'Accepter du matériel de marché gris ou proposé par un distributeur non autorisé, ce qui annule les garanties constructeur. Débriefing : insister sur la vérification du statut de partenaire autorisé pour les produits entreprise.',
      'S\'engager sur d\'importants acomptes qui privent l\'entreprise de son fonds de roulement. Débriefing : négocier des conditions de crédit Net-30 fondées sur une facturation aux jalons du projet.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Choisit le Fournisseur A uniquement pour le prix ; ne repère ni le risque du câble CCA ni le retard de 12 semaines sur les switchs.',
      },
      {
        tier: 'En développement',
        desc: 'Repère le problème des câbles mais choisit le fournisseur unique le plus cher par peur, sans optimiser.',
      },
      {
        tier: 'Compétent',
        desc: 'Normalise les devis avec précision ; construit une stratégie d\'achat hybride optimisée ; protège le chemin critique.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Utilise le stock du Fournisseur B face aux prix du Fournisseur C pour négocier 5 % de remise supplémentaire et des conditions Net-45.',
      },
    ],
    transfer:
      'Pour toute commande d\'équipement supérieure à $10,000, appliquez la matrice de comparaison des achats d\'une page sur au moins deux distributeurs autorisés avant d\'émettre les bons de commande.',
    variations: {
      small:
        'Le dirigeant examine la comparaison normalisée en 15 minutes avant d\'autoriser les règlements par carte de crédit.',
      large: 'Le coordinateur achats exécute les bons de commande hybrides sous l\'autorisation du chef de projet.',
    },
  },
  {
    id: 15,
    title:
      'RÉUNION CLIENT DIFFICILE & RÉSOLUTION DE CONFLIT : REMISE RETARDÉE & FONCTIONNALITÉS HORS PÉRIMÈTRE CONTESTÉES',
    phase: 'Phase 4 / Phase 5 — Exécution, gestion des parties prenantes & résolution des conflits',
    line: 'Intégration contrôle d\'accès, détection d\'intrusion & interphonie',
    level: '',
    duration:
      '120 minutes (20m psychologie du conflit & techniques de désescalade, 50m jeu de rôle de confrontation à fort enjeu, 35m rédaction de l\'accord de réalignement, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 4 (Exécution & communication) & Module 5 (Suivi & gestion des modifications).',
    scenario:
      'Vous êtes le chef de projet d\'un projet de contrôle d\'accès à 16 portes et d\'interphonie vidéo multi-locataires pour une résidence de luxe de grande hauteur. Le projet a 3 semaines de retard et le président du syndicat des copropriétaires du client est furieux.',
    objectives: [
      'Désescalader l\'émotion d\'un client hostile à l\'aide du modèle professionnel de désescalade en 4 étapes (reconnaître -> se baser sur les faits -> séparer le périmètre -> proposer une voie d\'avancement).',
      'Défendre les limites contractuelles du périmètre sans devenir agressif ni défensif.',
      'Négocier un accord formel de réalignement du projet qui clarifie la responsabilité du planning, chiffre équitablement les travaux d\'ascenseur supplémentaires et rétablit la confiance du client.',
    ],
    roles: [
      'PM senior / dirigeant de l\'entreprise (désescalade, défend le contrat, assure un leadership professionnel).',
      'Président du syndicat des copropriétaires, en colère (client) (agressif, exigeant, se sent trompé, menace d\'action en justice).',
      'Responsable technique / chef de chantier de l\'entreprise (présente les journaux de chantier objectifs, les dates du planning et la réalité du câblage des ascenseurs).',
      'Médiateur neutre / trésorier du conseil (pragmatique, veut le bâtiment sécurisé, soucieux du coût et du contentieux).',
    ],
    inputs: [
      'Contrat original signé montrant la clause explicite « intégration des cabines d\'ascenseur exclue ».',
      'Journaux de chantier quotidiens indiquant les dates où les techniciens d\'ascenseur ne se sont pas présentés.',
      'Modèle vierge d\'accord de réalignement de projet d\'une page.',
    ],
    tasks: [
      'Animer la réunion de confrontation simulée de 20 minutes. Le chef de projet doit résister à une pression verbale agressive sans céder ni crier.',
      'Présenter calmement les exclusions contractuelles en s\'appuyant sur des preuves objectives plutôt que sur l\'émotion.',
      'Proposer un compromis commercial gagnant-gagnant (par ex. réaliser la main-d\'œuvre de l\'interface ascenseur à tarif réduit en échange de la libération immédiate des facturations d\'avancement et d\'un planning d\'achèvement révisé).',
      'Rédiger et signer l\'accord formel de réalignement du projet et le plan d\'action.',
    ],
    deliverables:
      'Accord de réalignement du projet, avenant de clarification du périmètre signé et planning de jalons conjoint mis à jour.',
    facilitator: '',
    mistakes: [
      'Devenir émotionnel et défensif, provoquant une rupture de communication et des menaces juridiques. Débriefing : montrer comment le détachement émotionnel et les preuves objectives désamorcent un client hostile.',
      'Céder complètement et réaliser gratuitement $6,500 d\'intégration d\'ascenseur complexe. Débriefing : réaliser gratuitement des travaux importants hors périmètre détruit la rentabilité de l\'entreprise et ne gagne aucun respect.',
      'Quitter la réunion sans accord écrit signé, ce qui permet au client de relancer le litige la semaine suivante. Débriefing : documentez et contresignez toujours le compte rendu de réunion et l\'accord de réalignement avant de quitter la salle.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Perd son sang-froid ; se dispute avec le client ; OU cède tous les travaux supplémentaires gratuitement par peur.',
      },
      {
        tier: 'En développement',
        desc: 'Reste calme mais ne parvient pas à conduire le client vers un compromis écrit et signé ; le litige reste ouvert.',
      },
      {
        tier: 'Compétent',
        desc: 'Désescalade efficacement l\'hostilité ; utilise calmement la documentation contractuelle ; obtient un accord de réalignement signé avec une tarification équitable.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Sang-froid exécutif remarquable ; transforme la confrontation hostile en partenariat élargi et décroche un contrat de maintenance annuel pour l\'ensemble de la résidence.',
      },
    ],
    transfer:
      'Dès qu\'un projet entre en litige, cessez la guerre des courriels. Convoquez immédiatement une réunion d\'alignement projet en face à face, muni de votre énoncé de périmètre signé et de vos journaux de chantier objectifs.',
    variations: {
      small: 'Le dirigeant de l\'entreprise mène la négociation en personne.',
      large: 'Le directeur des opérations accompagne le chef de projet pour apporter le poids de la direction générale.',
    },
  },
  {
    id: 16,
    title:
      'CONVERSION EN CONTRAT DE MAINTENANCE & TRANSITION SLA : TRANSFORMER UNE INSTALLATION SCOLAIRE EN ARR',
    phase: 'Phase 7 — Clôture & transition SLA de maintenance',
    line: 'Maintenance de l\'infrastructure réseau de campus & de la sécurité physique',
    level: '',
    duration:
      '90 minutes (15m la puissance du revenu récurrent de maintenance, 40m packaging SLA & tarification de la marge, 25m simulation du pitch de remise, 10m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 7 (Clôture & transition SLA).',
    scenario:
      'Votre entreprise vient de terminer avec succès une rénovation réseau et une intégration sécurité de $180,000 dans 4 écoles d\'un district scolaire public (80 prises Cat6A, 48 caméras IP, 12 portes contrôlées, 8 switchs PoE). L\'installation a été réalisée proprement et le directeur informatique du district est ravi.',
    objectives: [
      'Packager les systèmes installés dans un contrat de niveau de service (SLA) à paliers (Bronze, Silver, Gold) avec des frontières opérationnelles claires.',
      'Tarifer la maintenance préventive annuelle, les délais de réponse d\'urgence et le stockage des pièces de rechange afin d\'atteindre une marge de service brute de 45 % ou plus.',
      'Présenter au client une démonstration convaincante de la remise en maintenance lors de la visite de réception définitive.',
    ],
    roles: [
      'Responsable des ventes de services / chef de projet (packager le SLA, argumenter la valeur métier auprès du client).',
      'Directeur informatique du district scolaire (client) (valorise la fiabilité, travaille avec des budgets annuels fixes, craint les coûts de réparation imprévus).',
      'Responsable des opérations de service de l\'entreprise (s\'assure que les termes du SLA sont réalisables opérationnellement sans épuiser les techniciens terrain).',
    ],
    inputs: [
      'Fiche d\'inventaire du matériel installé avec numéros de série et dates de fin de garantie constructeur.',
      'Historique des coûts de main-d\'œuvre de service et données d\'intervention de l\'entreprise.',
      'Modèle de contrat SLA de maintenance à 3 paliers.',
    ],
    tasks: [
      'Structurer trois paliers de maintenance pour le district scolaire :',
      'Inspection annuelle + mises à jour firmware + réponse standard sous 48 h ouvrées.',
      'Inspection préventive semestrielle + réponse d\'urgence garantie sous 8 h + 15 % de remise sur la main-d\'œuvre pour déplacements, ajouts et modifications.',
      'Maintenance préventive trimestrielle + réponse d\'urgence 24/7 sous 4 h + stock de pièces de rechange sur site + main-d\'œuvre incluse.',
      'Calculer la tarification annuelle du palier Silver : déterminer les heures de technicien requises, l\'imputation des frais généraux et vérifier que la marge brute dépasse 45 %.',
      'Mettre en scène (jeu de rôle) la présentation de la remise & de la SLA au directeur informatique.',
    ],
    deliverables:
      'Proposition complète de contrat de maintenance à 3 paliers, calculateur de tarification et de marge des services, et protocole de remise en maintenance.',
    facilitator: '',
    mistakes: [
      'Proposer un vague « support garantie gratuit » pendant 12 mois, qui habitue le client à appeler pour des problèmes d\'utilisateur non facturables. Débriefing : distinguer clairement la garantie constructeur (pièces défectueuses) du support opérationnel / maintenance (modifications de configuration, nettoyage, dépannage).',
      'Promettre des délais de réponse de 2 heures sans disposer de rotations d\'astreinte ni de pièces de rechange en stock. Débriefing : montrer comment le non-respect des délais de réponse SLA entraîne des pénalités contractuelles et la résiliation des contrats.',
      'Vendre la maintenance comme une afterthought par courriel 3 mois après la clôture du projet. Débriefing : appliquez la règle : la proposition de SLA est remise physiquement dans le dossier de remise du projet.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Ne présente aucune option de maintenance ; laisse le projet avec les obligations de garantie standard non facturées.',
      },
      {
        tier: 'En développement',
        desc: 'Présente une plaquette de maintenance générique sans paliers adaptés, sans inventaire du matériel ni tarification claire.',
      },
      {
        tier: 'Compétent',
        desc: 'SLA à 3 paliers bien structurée ; tarification de marge de 45 % ou plus exacte ; livre un pitch de remise professionnel.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Intègre avec succès un service continu de sauvegarde cloud / de supervision de santé dans le palier Gold et décroche un contrat récurrent signé de 3 ans.',
      },
    ],
    transfer:
      'Créez un « formulaire de remise de service » dans votre classeur de clôture. Chaque chef de projet doit présenter une proposition de SLA tarifée au client avec la facture finale.',
    variations: {
      small:
        'Mettez l\'accent sur le palier Silver avec une réponse le jour ouvré suivant pour ne pas perturber les équipes d\'installation en cours.',
      large: 'Une division service dédiée absorbe le contrat avec des rotations de techniciens d\'astreinte 24/7.',
    },
  },
  {
    id: 17,
    title:
      'TABLEAU DE BORD DES RESSOURCES MULTI-PROJETS & RÉSOLUTION DES CONFLITS DE PORTEFEUILLE : 5 CHANTIERS CONCURRENTS',
    phase: 'Phase 2 / Phase 5 — Opérations multi-projets & gestion de portefeuille',
    line: 'Opérations PME multi-systèmes (IT, câblage, CCTV, incendie)',
    level: '',
    duration:
      '105 minutes (15m frictions multi-projets en PME, 45m analyse des conflits de ressources & réaffectation, 30m jeu de rôle négociation client & replanification, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 2 (Planification) & Module 5 (Suivi & opérations multi-projets).',
    scenario:
      'Vous êtes le directeur des opérations d\'une entreprise technique de 15 personnes. C\'est jeudi après-midi et votre entreprise réalise 5 projets simultanés la semaine prochaine :',
    objectives: [
      'Construire une matrice maître des ressources multi-projets suivant l\'affectation des techniciens sur des projets concurrents.',
      'Appliquer des critères objectifs de priorisation de portefeuille (pénalités contractuelles, niveau de relation client, échéances de location de matériel, impact sur le chiffre d\'affaires) pour résoudre les conflits de ressources.',
      'Formuler et communiquer un plan de réaffectation du planning maître qui protège le chiffre d\'affaires de l\'entreprise et la conformité réglementaire.',
    ],
    roles: [
      'Directeur des opérations / dirigeant (arbitre les priorités de l\'entreprise et l\'exposition financière).',
      'Chef de projet — projets 1 et 2 (défend la date de l\'inspection incendie AHJ et la bascule VoIP).',
      'Chef de projet — projets 3 et 4 (défend la location de nacelles de câblage et le planning des agences bancaires).',
    ],
    inputs: [
      'Planning maître hebdomadaire des techniciens avec les affectations en cours et les certifications (incendie agréé, CCNA, épissurage fibre, nacelle certifiée).',
      'Détail de l\'impact financier de chaque projet (revenu journalier, clauses de pénalités, coûts de location).',
      'Modèle réutilisable de tableau de bord des opérations multi-projets.',
    ],
    tasks: [
      'Cartographier le déficit de ressources sur les 5 projets pour la semaine à venir.',
      'Prioriser quantitativement les projets sur la base des pénalités financières, de l\'impact réglementaire et de la criticité client.',
      'Mutualiser les techniciens, négocier un léger décalage sur les lots de travaux non critiques ou autoriser des heures supplémentaires stratégiques / de la main-d\'œuvre sous-traitée.',
      'Rédiger le texte exact de la communication au client replanifié pour préserver la relation.',
    ],
    deliverables:
      'Tableau de bord des ressources multi-projets, feuille de réaffectation hebdomadaire des équipes et trame de communication client pour la replanification.',
    facilitator: '',
    mistakes: [
      'La réaction de la « roue qui grince » : envoyer les techniciens chez celui qui crie le plus fort au téléphone plutôt que là où le sens des affaires l\'exige. Débriefing : basez vos décisions sur l\'exposition contractuelle et les pénalités financières fermes.',
      'Répartir les techniciens au eleventh dans les 5 chantiers, ce qui fait prendre du retard aux 5. Débriefing : il vaut bien mieux terminer 3 chantiers à 100 % dans les temps et replanifier 1 chantier par anticipation que d\'échouer simultanément sur les 5.',
      'Attendre le lundi matin pour prévenir un client que son installation est replanifiée. Débriefing : prévenez les clients 48 heures à l\'avance avec un planning révisé et proactif pour préserver votre crédibilité professionnelle.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Panique ; répartit les techniciens au eleventh ; manque l\'inspection AHJ ; annule l\'intervention d\'urgence pour un client clé.',
      },
      {
        tier: 'En développement',
        desc: 'Couvre l\'inspection incendie mais ne prévient pas les autres chefs de projet et subit de lourdes pénalités de location de nacelles.',
      },
      {
        tier: 'Compétent',
        desc: 'Utilise une priorisation quantitative ; réaffecte logiquement les techniciens certifiés ; maintient la couverture d\'urgence ; communique de façon proactive.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Réaffecte les équipes sans aucune pénalité réglementaire ; négocie une prolongation de 3 jours de la location de nacelle sans frais ; transforme la panne urgente du switch en intervention d\'urgence facturable en temps et matériaux (T&M).',
      },
    ],
    transfer:
      'Tenez chaque jeudi à 16:00 un « point maître ressources de tous les chefs de projet » de 15 minutes pour verrouiller le planning des techniciens de la semaine suivante avant les urgences du week-end.',
    variations: {
      small: 'Le dirigeant et le technicien principal examinent ensemble chaque jour le planning du tableau blanc.',
      large:
        'Tableau de bord des opérations hebdomadaire géré via des outils numériques partagés de dispatch (ConnectWise / ServiceTitan / Monday.com).',
    },
  },
  {
    id: 18,
    title: 'PRÉPARATION AU PROJET FINAL : MICRO-SIMULATION RAPIDE DU DEVIS AU LANCEMENT',
    phase: 'Intégration de tout le cycle de vie (Phase 0 à Phase 4)',
    line: 'Infrastructure intégrée (câblage structuré + réseau + CCTV + contrôle d\'accès)',
    level: '',
    duration:
      '90 minutes (10m briefing de simulation & règles du jeu, 45m sprint de planification rapide, 25m exécution du lancement client en direct, 10m débriefing).',
    groupSize: '4 participants par équipe',
    prerequisite: 'Modules 0 à 4.',
    scenario:
      'Un incubateur technologique en pleine croissance attribue à votre entreprise un contrat conception-réalisation pour son nouveau hub de coworking de 2 étages (120 prises Cat6A, 16 caméras de sécurité 4K, 6 portes sous contrôle d\'accès, 8 points d\'accès Wi-Fi 6 et 1 baie serveur principale avec UPS).',
    objectives: [
      'Synthétiser toutes les méthodologies clés acquises dans les modules 0 à 4 en une mobilisation de projet rapide et coordonnée.',
      'Transformer une proposition commerciale en une référence opérationnelle entièrement exécutable en moins de 45 minutes.',
      'Animer une réunion d\'alignement de lancement de projet à fort impact démontrant une maîtrise totale du projet.',
    ],
    roles: [
      'Chef de projet (pilote le sprint de planification, contrôle le planning, anime le lancement).',
      'Technicien terrain principal (évalue l\'installation physique, le séquencement du pré-tirage et la préparation des outils).',
      'Coordinateur achats & préparation (construit la BOM, marque les délais de fabrication, vérifie la pré-configuration).',
      'Directeur général de l\'incubateur (client) (observe le lancement, teste l\'équipe sur les limites du périmètre, exige des délais serrés).',
    ],
    inputs: [
      'Contrat de proposition exécutif et plan d\'architecture du bâtiment de 2 étages.',
      'Kit de planification standard de l\'entreprise (registre de périmètre, modèle WBS, fiche de risques, support de lancement).',
    ],
    tasks: [
      'Compléter la charte de projet express & l\'énoncé de périmètre (15 minutes).',
      'Construire le WBS à 3 niveaux & le planning du chemin critique avec les jalons de commande du matériel (15 minutes).',
      'Identifier les 3 principaux risques du projet et établir des plans d\'action préventifs (10 minutes).',
      'Animer en direct la réunion de lancement de projet de 15 minutes devant le directeur de l\'incubateur.',
    ],
    deliverables:
      'Dossier de référence de projet express (charte, périmètre, WBS, registre des risques) et bon d\'alignement signé de la réunion de lancement.',
    facilitator: '',
    mistakes: [
      'Passer directement au planning avant d\'avoir défini la référence de périmètre et les exclusions. Débriefing : rappelez la séquence : périmètre d\'abord, WBS ensuite, planning en troisième.',
      'Traiter la réunion de lancement comme une discussion informelle plutôt que comme une porte d\'alignement formelle. Débriefing : le lancement donne le ton de la façon dont le client vous traitera pendant tout le contrat.',
      'Laisser les rôles et les chemins d\'escalade de communication non définis. Débriefing : montrez pourquoi un tableau RACI défini empêche les clients d\'appeler directement les techniciens pour des changements de périmètre.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Sprint désorganisé ; référence incomplète ; anime une réunion de lancement vague et défensive.',
      },
      {
        tier: 'En développement',
        desc: 'Produit les livrables mais manque de temps ; le lancement manque d\'alignement structuré avec le client.',
      },
      {
        tier: 'Compétent',
        desc: 'Complète la référence express sans accroc ; couvre toutes les disciplines principales du métier ; exécute un lancement clair et professionnel.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Performance métier de haut niveau ; la planification rapide est irréprochable ; le lancement inspire une confiance totale du client et verrouille les limites du périmètre.',
      },
    ],
    transfer:
      'Quand vous remportez un chantier, ne fête pas cela en commandant les pièces. Convoquez un sprint de planification rapide de 45 minutes avec le chef de projet, le technicien principal et le chargé d\'études de prix pour bâtir la référence avant de commander la moindre vis.',
    variations: {
      small: 'Le dirigeant et le technicien principal mènent le sprint à l\'arrière du véhicule de chantier.',
      large: 'Réunion formelle de remise entre le chargé d\'études de prix ventes et l\'équipe projet affectée.',
    },
  },
  {
    id: 19,
    title: 'ARRÊT DE TRAVAIL SÉCURITÉ, PERMIS DE TRAVAIL & PLAN DE REPRISE SOUS PRESSION',
    phase: 'Transversal — Phase 4 (Exécution) avec les conséquences de la Phase 5 (Suivi & contrôle)',
    line: 'Câblage structuré + réseau (immeuble tertiaire partiellement occupé)',
    level: '',
    duration:
      '120 minutes (15m briefing scénario & rappel réglementaire, 30m audit des permis & réponse immédiate, 40m planification de la reprise, 25m confrontation jouée avec le GC / le propriétaire, 10m débriefing).',
    groupSize: '4–5 participants par équipe',
    prerequisite: 'Module 8 (Sécurité chantier, permis de travail & autorité d\'arrêt de travail).',
    scenario:
      'Votre équipe est en pleine installation à Meridian Tower, un immeuble de bureaux de 6 étages partiellement occupé. Le superintendant du GC a averti que le plafond du 4e étage sera fermé demain à 16:00. À cet instant, trois tâches sont en cours : (a) le technicien Davis est sur une nacelle élévatrice et tire du Cat6A à travers la grille du plafond, à portée de bras d\'un bus duct de 480 V sous tension que l\'entreprise d\'électricité devait mettre hors tension ; (b) le technicien Ortiz perce la dalle au carottage sans aucune barrière de confinement, pendant que les locataires travaillent en dessous ; (c) un sous-traitant incendie soude des manchettes de conduit à 6 mètres de votre palette d\'inventaire de câbles, sans poste de veille incendie. Puis cela arrive : un léger arc électrique surprend Davis sur la nacelle. Aucune blessure — mais le coordinateur sécurité du GC arrive, délivre un ordre d\'arrêt de travail sur tout le site, et le propriétaire de l\'immeuble est en route.',
    objectives: [
      'Classer chaque tâche en cours au regard des six déclencheurs de permis de travail et indiquer exactement quels permis et quelles JHA manquaient.',
      'Exercer l\'autorité d\'arrêt de travail et exécuter correctement la séquence de réponse immédiate (sécuriser, isoler, notifier, préserver).',
      'Mener le processus de déclaration d\'incident et de notification de l\'autorité dans le délai imparti.',
      'Bâtir dans la journée un planning et un plan de reprise commerciale compte tenu de l\'ordre d\'arrêt de travail, alors que les pénalités de retard courent toujours.',
    ],
    roles: [
      'Chef de projet de l\'entreprise (pilote le planning, le plan de reprise et la communication client).',
      'Chef de chantier (pilote la sécurité de l\'équipe, les permis, les JHA et le contrôle de la zone).',
      'Dirigeant de l\'entreprise / responsable sécurité (pilote la déclaration d\'incident, l\'assurance et la relation avec les autorités).',
      'Coordinateur sécurité du GC / propriétaire de l\'immeuble (délivre l\'ordre d\'arrêt de travail, exige la documentation, menace des refacturations).',
      'Enquêteur assurance ou réglementaire (pose les questions difficiles sur les permis et l\'isolement).',
    ],
    inputs: [
      'Plan d\'étage indiquant les zones de travail, le tracé des bus ducts et les zones de locataires.',
      'Le plan de sécurité chantier du GC, plus les modèles vierges de permis de travail et de JHA.',
      'Un formulaire de déclaration d\'incident d\'une page et la clause contractuelle indiquant $1,200/jour de pénalités de retard.',
    ],
    tasks: [
      'Nommer chaque permis / JHA manquant et chaque mesure de maîtrise défaillante.',
      'Exécuter la séquence immédiate post-incident — les « 30 minutes d\'or » : isoler, sécuriser la zone, compter les personnes, vérifier les premiers secours, notifier, préserver les preuves.',
      'Remplir la déclaration d\'incident d\'une page et la liste des actions correctives.',
      'Déterminer quels travaux peuvent reprendre avec des permis corrigés, dans quel ordre, et comment défendre le planning sur le plan commercial.',
      'Mener la confrontation avec le GC / le propriétaire : assumer la responsabilité de vos défaillances de permis, refuser la responsabilité de la défaillance d\'isolement de l\'entreprise d\'électricité et négocier la levée de l\'arrêt de travail limitée à votre périmètre.',
    ],
    deliverables:
      'Registre des portes de permis de travail (audité), JHA complétée par tâche, déclaration d\'incident d\'une page, plan de reprise avec planning révisé, lettre de communication client / GC.',
    facilitator: '',
    mistakes: [
      'Démarrer un travail à risque élevé sur la foi d\'une assurance verbale (« l\'électricien a dit que c\'était mort »). Débriefing : absence de tension, vérifiée et consignée, ou vous n\'y touchez pas.',
      'Des équipes qui cachent ou minimisent un quasi-accident pour éviter les ennuis. Débriefing : un rapport de quasi-accident sans reproche est la formation la moins chère que l\'entreprise achètera jamais ; sanctionner la déclaration et vous garantit que le prochain événement sera plus grave.',
      'Traiter l\'ordre d\'arrêt de travail comme un simple problème de sécurité. Débriefing : c\'est simultanément un enjeu de planning, commercial et de relation client — le plan de reprise doit être rédigé le jour même.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Ne parvient pas à identifier les permis manquants ; conteste la responsabilité avec le GC ; ne produit aucun plan de reprise.',
      },
      {
        tier: 'En développement',
        desc: 'Identifie les défaillances de permis mais bâcle la séquence de réponse immédiate ou le délai de notification.',
      },
      {
        tier: 'Compétent',
        desc: 'Audit des permis rigoureux, réponse immédiate correcte, déclaration d\'incident complète et plan de reprise crédible.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Démontre que l\'autorité d\'arrêt de travail a été exercée avant l\'incident ; le plan de reprise protège la marge et obtient la reprise partielle des travaux ; la confrontation est calme, factuelle et fondée sur le contrat.',
      },
    ],
    transfer:
      'Insérez la porte de permis de travail dans l\'audit du kit de pré-mobilisation — aucune tâche à risque élevé ne démarre sans JHA ni permis signé, et chaque chef d\'équipe porte la carte de poche 6.',
    variations: {
      small:
        'Le dirigeant est le responsable sécurité — rendez la chose personnelle : un incident sérieux ferme l\'entreprise.',
      large:
        'Institutionnalisez un rôle de coordinateur sécurité dédié, un audit hebdomadaire des permis et une revue des quasi-accidents sans reproche au point d\'équipe du lundi.',
    },
  },
  {
    id: 20,
    title:
      'SIGNAUX D\'ALERTE CONTRACTUELS, CONFORMITÉ DE LA CONFIDENTIALITÉ & SIGN-OFF DE DURCISSEMENT CYBER',
    phase: 'Transversal — Phase 0 (devis / contrat) jusqu\'à la Phase 7 (remise)',
    line: 'CCTV / VMS + contrôle d\'accès (déploiement urbain exposé au public)',
    level: '',
    duration:
      '120 minutes (15m briefing sur le contrat et les obligations de protection des données, 30m annotation des clauses contractuelles, 35m fiche confidentialité + liste de contrôle du durcissement, 30m jeu de rôle de négociation, 10m débriefing).',
    groupSize: '4 participants par équipe',
    prerequisite: 'Module 9 (Risque contractuel, conformité, confidentialité & durcissement cyber).',
    scenario:
      'Vous êtes sur le point de signer et de remettre un système CCTV et contrôle d\'accès de 60 caméras au centre-ville pour Northgate Retail Group. Leur contrat de sous-traitance standard stipule : « L\'Entrepreneur indemnise et met hors de cause le Maître d\'ouvrage et ses agents contre toute réclamation, tout dommage, toute perte et toute dépense résultant des Travaux » (sans plafond, y compris les dommages indirects), et « L\'Entrepreneur est responsable du fonctionnement licite du système d\'enregistrement ». Sur le plan technique : les caméras sont encore sur les identifiants administrateurs par défaut ; le NVR est exposé à l\'accès distant sur un port de gestion public ; les enregistrements n\'ont aucune durée de conservation définie (les disques écrassent simplement les données quand ils sont pleins, ~14 mois) ; aucun panneau n\'informe le public qu\'il est filmé. Le conseil juridique du client vient d\'envoyer une liste de questions sur la protection des données, et une personne concernée a déjà demandé « toutes les images de moi ».',
    objectives: [
      'Identifier les cinq pièges contractuels et les annoter avec des clauses de réponse défendables.',
      'Produire une fiche de conformité confidentialité & protection des données pour une installation de sécurité (signalétique, conservation, contrôle d\'accès, procédure de demande d\'une personne concernée, enregistrement).',
      'Réaliser un sign-off de durcissement cyber afin que le système livré ne soit pas le maillon le plus faible du réseau du client.',
      'Refuser une charge de périmètre que vous ne devez pas porter — le fonctionnement licite des enregistrements relève du client en tant que responsable du traitement — tout en conservant l\'affaire.',
    ],
    roles: [
      'Dirigeant / responsable commercial de l\'entreprise (négocie le contrat).',
      'Chef de projet / ingénieur principal (pilote la fiche de confidentialité et le certificat de durcissement).',
      'Conseil juridique du client (veut une protection illimitée ; pose des questions pointues sur les données).',
      'Directeur informatique du client (reçoit le système durci ; exige un accès distant sans VPN).',
    ],
    inputs: [
      'Le contrat de sous-traitance du client avec les deux clauses ci-dessus.',
      'Modèles de caméras / NVR / contrôleurs avec versions de firmware ; topologie réseau montrant le port NVR exposé au public.',
      'Fiche de conformité confidentialité & protection des données vierge et liste de contrôle de durcissement cyber vierge.',
    ],
    tasks: [
      'Plafonner l\'indemnisation à la valeur du contrat ou aux limites d\'assurance ; exclure les dommages indirects ; transférer au client le rôle de « responsable du traitement » (exploitation du système et de ses enregistrements) ; et ajouter une clause de délai excusable si des pénalités de retard existent.',
      'Plan et formulation de la signalétique, mention de la base légale, règle de conservation (proposer 30/90 jours), contrôle d\'accès aux enregistrements avec piste d\'audit, stockage sécurisé, procédure de demande d\'accès d\'une personne concernée avec un délai de réponse de 30 jours, exclusions d\'implantation des caméras, traitement de l\'enregistrement audio et obligation d\'enregistrement (signaler les règles propres à la juridiction).',
      'Modifier tous les identifiants par défaut en valeurs uniques par appareil ; segmenter les caméras et les contrôleurs sur un VLAN dédié ; mettre à jour le firmware ; imposer la synchronisation horaire NTP (horodatages probants) ; désactiver les services inutilisés et fermer les ports de gestion publics (accès distant uniquement via VPN) ; activer la journalisation avec une durée de conservation définie ; sauvegarder les configurations et en gérer les mots de passe ; transmettre les identifiants de manière sécurisée avec un reçu signé.',
      'Obtenir l\'acceptation des annotations ou les faire chiffrer comme travaux payants, et expliquer à la DSI pourquoi l\'accès au NVR sur un port public est une non-conformité que vous ne livrerez pas.',
    ],
    deliverables:
      'Registre des signaux d\'alerte contractuels avec annotations, fiche de conformité confidentialité & protection des données (signée), certificat de livraison du durcissement cyber et reçu de transmission des identifiants.',
    facilitator: '',
    mistakes: [
      'Signer le contrat du client pour remporter le chantier, puis découvrir une responsabilité sans plafond. Débriefing : négociez au stade de la proposition — votre levier disparaît après la signature.',
      'Livrer des systèmes avec les identifiants par défaut et un accès distant public. Débriefing : le point d\'entrée du rançongiciel six mois plus tard est traçable ; le coût en réputation met fin définitivement à la relation client.',
      'Conservation illimitée et aucune signalétique « parce que le client n\'a jamais demandé ». Débriefing : en tant qu\'installateur, vous êtes souvent la seule partie qui sait que ces règles existent — documentez votre conseil et la décision du client.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Signe les clauses telles quelles ; laisse les identifiants par défaut ; ne produit aucune documentation de confidentialité.',
      },
      {
        tier: 'En développement',
        desc: 'Repère les pièges mais ne sait pas les annoter ; durcissement incomplet.',
      },
      {
        tier: 'Compétent',
        desc: 'Annotations acceptées ou chiffrées ; fiche de confidentialité complète ; sign-off de durcissement complet avec reçu des identifiants.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Recadre la conformité comme un service — vend un forfait conformité & durcissement payant, transforme la question des données en revenu annuel récurrent et documente tout.',
      },
    ],
    transfer:
      'Joignez la fiche de confidentialité et le certificat de durcissement cyber au dossier de remise ; faites de « aucun identifiant par défaut, aucun port de gestion public » un critère de réception non négociable.',
    variations: {
      small:
        'Utilisez le guide officiel CCTV / protection des données de votre juridiction comme liste de contrôle — il est généralement gratuit et court.',
      large:
        'Standardisez la construction durcie en atelier (firmware + identifiants + configuration de référence avant que les équipements n\'arrivent sur site) et faites-en un palier facturable.',
    },
  },
  {
    id: 21,
    title: 'RISQUE, PROBLÈME, INCIDENT, NON-CONFORMITÉ — CHOISIR LA BONNE RÉPONSE',
    phase: 'Transversal — Phase 2 (Risque) et Phase 5 (Suivi & contrôle)',
    line: 'Toutes lignes d\'activité (réseau d\'agence bancaire / renouvellement pare-feu & switch cœur)',
    level: '',
    duration:
      '60 minutes — format idéal de causerie sécurité chantier (10m primer de classification, 25m exercice de classification en équipe, 15m conception de la réponse, 10m débriefing).',
    groupSize: 'Équipes de 3, en faisant tourner le « chef de projet de garde » qui porte la décision finale.',
    prerequisite: 'Module 2 (Risque) & Module 5 (Suivi & contrôle) ; Module 8 (Sécurité) recommandé.',
    scenario:
      'Il est 09:30 un mardi chez Civic Bank et quatre problèmes arrivent simultanément sur votre bureau : (a) une caméra décroche par intermittence du VMS pendant la mise en service ; (b) le fournisseur annonce un retard de 3 semaines sur un switch destiné à la prochaine phase du projet ; (c) un technicien signale un circuit sous tension de 120 V dans une armoire qui devait être isolée ; (d) le client évoque une nouvelle réglementation imposant une conservation de 12 mois des journaux de tous les événements de contrôle d\'accès.',
    objectives: [
      'Classer correctement chaque problème comme risque, problème, incident, non-conformité ou changement — et justifier la classification.',
      'Déclencher le bon registre et la bonne réponse pour chacun, à la bonne priorité.',
      'Reconnaître que la classification n\'est pas un exercice académique — une mauvaise classification cache les sujets de sécurité et détourne les efforts.',
    ],
    roles: [],
    inputs: [
      'Quatre énoncés de problème sur des cartes (ci-dessus), rédigés volontairement de sorte que deux soient faciles à mal classer.',
      'Définitions de référence en une ligne de risque / problème / incident / non-conformité / changement.',
      'registre des risques, journal des problèmes, liste des non-conformités, formulaire de demande de modification.',
    ],
    tasks: [
      'Classer les quatre éléments et justifier chacun en une phrase.',
      'Attribuer un responsable, une priorité et un délai de résolution cible à chacun.',
      'Définir l\'action immédiate — y compris l\'arrêt de sécurité pour le circuit sous tension.',
      'Consigner chaque élément dans le bon registre (un par équipe, projeté à l\'écran).',
    ],
    deliverables: 'Quatre entrées correctement consignées dans les registres et une liste d\'actions immédiates d\'une page.',
    facilitator: '',
    mistakes: [
      'Traiter une non-conformité comme un risque (ou l\'inverse), si bien qu\'aucun responsable d\'action n\'est jamais désigné. Débriefing : un risque a une probabilité et un plan de réponse ; une non-conformité existe dès maintenant et exige une date de correction.',
      'Consigner un problème sans prendre de mesure. Débriefing : un journal des problèmes sans dates est une liste d\'aveux.',
      'Sous-prioriser le sujet de sécurité parce qu\'il est arrivé en dernier. Débriefing : c\'est la classification qui détermine l\'urgence, pas l\'ordre d\'arrivée.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Les quatre éléments dans une seule liste ; aucun responsable ; le sujet de sécurité n\'est pas escaladé.',
      },
      {
        tier: 'En développement',
        desc: 'Deux éléments ou plus mal classés ; registres choisis mais entrées incomplètes.',
      },
      {
        tier: 'Compétent',
        desc: 'Les quatre éléments correctement classés avec responsables, priorités et dates ; arrêt de sécurité exécuté.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Repère en plus le cinquième problème caché (la réglementation sur la conservation des journaux est un changement, pas une non-conformité — il s\'agit d\'un nouveau périmètre) et le chiffre.',
      },
    ],
    transfer:
      'Gardez les quatre registres physiquement séparés — risque, problème, non-conformité, changement — et revoyez-les dans une même revue hebdomadaire de 15 minutes.',
    variations: {
      small: 'Menez-le comme une causerie sécurité chantier autonome de 60 minutes à partir de quatre problèmes réels de la semaine dernière.',
      large:
        'Intégrez l\'exercice à la réunion hebdomadaire des chefs de projet ; faites tourner le chef de projet de garde pour que chacun pratique ce réflexe de classification.',
    },
  },
  {
    id: 22,
    title: 'LA SEMAINE D\'INSTALLATION — SIMULATEUR D\'EXÉCUTION SUR PLUSIEURS JOURS',
    phase: 'Phase 4 (Exécution terrain) avec la Phase 5 (Suivi & contrôle) active en permanence',
    line: 'Wi-Fi d\'entrepôt + vidéosurveillance (usine de transformation alimentaire / entrepôt frigorifique)',
    level: '',
    duration:
      '150 minutes (six « jours » de 15 minutes avec des transitions de 5 minutes, 30 min d\'installation et débriefing final). Maximum 6 équipes par salle.',
    groupSize: 'Équipes de 4–6',
    prerequisite: '',
    scenario:
      'Meridian Foods — une installation de 5 jours de Wi-Fi d\'entrepôt (24 points d\'accès, dont une chambre froide à −25 °C exigeant des points d\'accès IP66 et des armoires chauffantes) plus 22 caméras CCTV. Vous héritez d\'un plan, d\'une équipe de 4 personnes plus un sous-traitant, et d\'un client qui attend un rapport quotidien. Chaque « jour » compressé dure 15 minutes, et le site riposte.',
    objectives: [
      'Tenir le contrôle du planning, des problèmes, des ressources et de la communication client sur plusieurs jours de perturbation continue.',
      'Traiter les demandes de modification avec la rigueur complète du contrôle des modifications, même en pleine gestion de crise.',
      'Produire des rapports quotidiens honnêtes qui résoudraient un litige avec le client.',
    ],
    roles: [],
    inputs: [
      'Le planning du projet, un instantané du budget, la liste des équipes et un modèle de rapport de chantier quotidien.',
      'Une enveloppe scellée de cartes d\'événements tirée au début de chaque « jour ».',
    ],
    tasks: [
      'Mettre à jour le planning, l\'avancement et le journal des problèmes ;',
      'réaffecter les ressources et décider des escalades ;',
      'gérer toute demande de modification selon la rigueur complète du processus COR ;',
      'rédiger le rapport de chantier quotidien ;',
      'le dernier jour, produire la synthèse hebdomadaire destinée au client.',
    ],
    deliverables:
      'Planning mis à jour, journal des problèmes, demandes de modification (chiffrées et signées), 5–6 rapports de chantier quotidiens, rapport client de fin de semaine.',
    facilitator: '',
    mistakes: [
      'Aucun journal des problèmes ; les problèmes restent dans les têtes. Débriefing : au jour 4, plus personne ne se souvient de la promesse du jour 1.',
      'Des rapports quotidiens qui masquent les problèmes. Débriefing : un rapport qui annonce « dans les clous » alors que les blocages s\'accumulent est précisément le document qui perd le litige.',
      'Des demandes de modification accumulées sans documentation « jusqu\'à ce qu\'on soit moins occupés ». Débriefing : la période chargée ne finit jamais ; les modifications non facturées, c\'est de la marge perdue.',
    ],
    rubric: [
      {
        tier: 'Insuffisant',
        desc: 'Planning abandonné dès le jour 3 ; aucun enregistrement ; client surpris par le retard.',
      },
      {
        tier: 'En développement',
        desc: 'Enregistrements tenus mais fragmentés ; modifications captées oralement, pas sur des COR.',
      },
      {
        tier: 'Compétent',
        desc: 'Planning et journal des problèmes à jour chaque jour ; modifications sur des COR signés ; rapports honnêtes et à l\'heure.',
      },
      {
        tier: 'Exemplaire',
        desc: 'Protège en plus le projet de la semaine suivante pendant la gestion de crise sur celui-ci ; le rapport client transforme un problème en démonstration de maîtrise.',
      },
    ],
    transfer:
      'Adoptez le rapport de chantier quotidien d\'une page sur tous les chantiers actifs — sans exception, transmis avant 17:00.',
    variations: {
      small: 'Faites tourner 3 jours au lieu de 6, avec le dirigeant dans le rôle du client.',
      large:
        'Faites tourner deux salles en parallèle et demandez à l\'équipe perdante de débriefer l\'équipe gagnante — la revue par les pairs enseigne plus vite que le formateur.',
    },
  },
];
