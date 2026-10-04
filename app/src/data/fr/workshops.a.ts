import type { Workshop } from '../../types';

export const WORKSHOPS_FR_A: Workshop[] = [
  {
    id: 1,
    title:
      'DEVISÉ / PAS DEVISÉ ET DÉCOUVERTE DU PÉRIMÈTRE SUR UN RFP D’INTÉGRATION SÉCURITÉ FLOU ET IMPRÉCIS',
    phase: 'Phase 0 — Pré-vente / Qualification des opportunités',
    line: 'Intégration de systèmes de sécurité physique (CCTV + Contrôle d’accès + Détection d’intrusion)',
    level: '',
    duration:
      '90 minutes (15m briefing du scénario et revue du RFP, 40m analyse d’équipe et exécution des outils, 25m défense inter-équipes et débriefing, 10m transfert de l’habitude du lundi matin).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 0 (Pré-vente et qualification des opportunités).',
    scenario:
      'Un groupe régional de gestion immobilière émet un RFP de 4 pages pour une « modernisation clé en main de la sécurité » sur un parc de bureaux commerciaux de 5 bâtiments. Le RFP indique : « Fournir une couverture CCTV complète de tous les parkings et des façades de bâtiments, un contrôle d’accès par badge sur toutes les portes périphériques, la détection d’intrusion et le raccordement à une station de surveillance centrale. L’offre doit être au forfait global. Proposition à remettre sous 5 jours ouvrés. Projet à livrer en 6 semaines. 10 % de retenue de garantie bloquée pendant 12 mois. » Aucun plan, aucun dénombrement de prises, aucune spécification de caméra et aucune donnée sur les chemins de câbles ne sont fournis.',
    objectives: [
      'Évaluer un RFP ambigu à l’aide d’une grille de notation Devisé / Pas devisé quantitative à 10 critères.',
      'Rédiger une demande de clarification avant devis ciblée qui fait ressortir les pièges techniques et financiers sans indisposer le client.',
      'Formuler une déclaration de limite de périmètre avec exclusions, défendant l’entreprise contre une responsabilité illimitée.',
    ],
    roles: [
      'Dirigeant / directeur commercial de l’entreprise (veut le chiffre d’affaires, tenté de soumissionner à l’aveugle).',
      'Chargé d’études de prix / PM senior (calcule le risque, identifie les données d’ingénierie manquantes).',
      'Technicien chef de chantier (évalue la réalité physique : hauteurs de pose, tranchées, alimentation).',
      'Représentant du client / GC (défend le RFP vague, pousse pour obtenir un prix bas).',
    ],
    inputs: [
      'Copie du RFP ambigu de 4 pages et exemple de contrat standard GC–sous-traitant comportant des clauses d’indemnisation.',
      'Données historiques de gains et de pertes montrant l’érosion des marges sur des RFP « clé en main » similaires.',
    ],
    tasks: [
      'Noter le RFP avec la grille de notation de décision Devisé / Pas devisé.',
      'Si le score est inférieur à 70, formuler la recommandation Go / No-Go exacte et les conditions associées.',
      'Rédiger 5 questions techniques de clarification obligatoires pour le client.',
      'Rédiger une déclaration d’hypothèses de périmètre d’un paragraphe pour accompagner toute estimation budgétaire préliminaire.',
    ],
    deliverables:
      'Grille de notation Devisé / Pas devisé complétée, lettre de clarification technique et journal préliminaire des limites de périmètre.',
    facilitator: '',
    mistakes: [
      'Supposer que le client sera « raisonnable » plus tard, quand des coûts imprévus apparaîtront. Débriefing : montrer qu’en contrat à prix fixe, l’ambiguïté profite juridiquement à l’acheteur, sauf si elle est explicitement exclue.',
      'Consacrer 20 heures à concevoir un système sans savoir si le client dispose d’un budget réaliste. Débriefing : établir la règle de l’« appel de qualification » pour cerner les fourchettes budgétaires avant toute ingénierie détaillée.',
      'Ne pas identifier les travaux de génie civil (tranchées, gaines, carottage, alimentation 120 V). Débriefing : enseigner la clause d’exclusion standard en basse tension : « Toutes les gaines, tous les cheminements, tout carottage et toute alimentation 120 VCA sont fournis par d’autres. »',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Recommande une soumission au forfait global à l’aveugle ; oublie les risques de tranchée et de cheminement.' },
      { tier: 'En développement', desc: 'Identifie les spécifications manquantes mais n’attache pas d’hypothèses contractuelles à l’offre.' },
      { tier: 'Compétent', desc: 'Évalue le RFP objectivement ; rédige des questions claires avant devis et les exclusions standard du métier.' },
      { tier: 'Exemplaire', desc: 'Négocie avec succès une phase payante d’ingénierie et d’étude de site avec le client avant la soumission.' },
    ],
    transfer:
      'Placez la grille de notation Devisé / Pas devisé d’une page sur le bureau du chargé d’études de prix. Tout RFP obtenant un score inférieur à 65 est soit rejeté, soit converti en visite de découverte payante.',
    variations: {
      small:
        'Le dirigeant passe la grille seul en 10 minutes pour préserver le temps limité des techniciens.',
      large:
        'Le chargé d’études de prix et le PM principal examinent la grille ensemble avant le lancement de la proposition.',
    },
  },
  {
    id: 2,
    title:
      'CARTOGRAPHIE DES PARTIES PRENANTES ET VISITE DE SITE POUR UN REMPLACEMENT D’ALARME INCENDIE DANS UN PÔLE DE SOINS OCCUPÉ',
    phase: 'Phase 1 — Lancement du projet et étude de site',
    line: 'Systèmes d’alarme incendie et de sécurité des personnes',
    level: '',
    duration:
      '120 minutes (20m briefing du scénario et réglementation des soins de santé, 50m simulation de visite de site et annotations, 35m présentation de la stratégie parties prenantes, 15m débriefing).',
    groupSize: '4 à 5 participants par équipe',
    prerequisite: 'Module 1 (Lancement et étude de site).',
    scenario:
      'Un établissement de soins de santé de 40 lits, spécialisé en soins subaigus, doit remplacer un ancien tableau d’alarme incendie conventionnel obsolète par un nouveau système d’évacuation vocale adressable (Notifier NFS2-3030 avec vocalisation). L’établissement est occupé à 100 %, avec des patients dépendants, des services de patients immunodéprimés et des unités de soins de mémoire verrouillées. Les plafonds sont connus pour contenir de l’isolant amianté dans les bâtiments anciens. Les travaux ne doivent déclencher aucune alarme parasite ni perturber les soins.',
    objectives: [
      'Construire un registre complet des parties prenantes et un protocole de communication pour un environnement de soins à fort enjeu.',
      'Mener une visite de site simulée multidimensionnelle identifiant les obstacles de contrôle de l’infection (ICRA), l’amiante et l’accès aux plafonds.',
      'Formuler un plan de bascule par phases « contrôle de l’infection et sécurité des personnes » maintenant une détection active 24 h/24 et 7 j/7.',
    ],
    roles: [
      'Directeur de l’établissement de soins (obsédé par la sécurité des patients, zéro alarme parasite, contrôle du bruit).',
      'Responsable du contrôle de l’infection (ICRA) (exige des baraquements de confinement, des aspirateurs HEPA et une pression d’air négative).',
      'PM incendie principal de l’entreprise (responsable du planning, du budget et du fonctionnement du système).',
      'Technicien chef de chantier / électricien (responsable du tirage physique des câbles, du placement des échelles et du remplacement des détecteurs).',
      'Commissaire incendie local / AHJ (exige une couverture de la sécurité des personnes sans interruption pendant les travaux).',
    ],
    inputs: [
      'Plan d’architecture du pôle de soins indiquant les chambres, les postes de soins infirmiers et les coupe-feu.',
      'Schéma unifilaire de l’ancien système d’alarme incendie existant (incomplet).',
      'Fiche de protocole d’évaluation des risques de contrôle de l’infection en milieu hospitalier (ICRA), classe IV.',
    ],
    tasks: [
      'Cartographier toutes les parties prenantes internes et externes avec leur niveau d’autorité, leurs craintes principales et leurs besoins de communication.',
      'Compléter la check-list de visite de site hospitalier en identifiant 8 contraintes opérationnelles cachées.',
      'Établir un calendrier de bascule assorti de mesures provisoires de sécurité des personnes (ILSM) garantissant une protection incendie continue.',
    ],
    deliverables:
      'Matrice des parties prenantes du site de soins, journal des risques de la visite de site complété et plan de phasage opérationnel ILSM.',
    facilitator: '',
    mistakes: [
      'Traiter un hôpital comme un bureau commercial classique ; percer les plafonds sans confinement. Débriefing : expliquer les amendes de la classe IV ICRA, les arrêts d’activité et les risques sanitaires.',
      'Ne pas se coordonner avec le service d’incendie local avant de mettre hors service une zone de l’ancien système. Débriefing : démontrer la procédure obligatoire de surveillance incendie et les protocoles de notification de l’AHJ.',
      'Oublier les heures de repos des patients et les restrictions acoustiques. Débriefing : montrer que les estimations de main-d’œuvre doivent tenir compte des heures hors service et des plages de travaux bruyants (6 h - 8 h uniquement).',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Ignore les exigences ICRA ; prévoit les essais de stroboscopes en journée dans des chambres de patients occupées.' },
      { tier: 'En développement', desc: 'Identifie l’amiante et l’ICRA mais ne tient pas compte des coûts de main-d’œuvre de surveillance incendie 24 h/24 et 7 j/7.' },
      { tier: 'Compétent', desc: 'Cartographie complète des parties prenantes ; inclut le confinement mobile des poussières et les bascules de zone par phases.' },
      { tier: 'Exemplaire', desc: 'Livre un manuel ILSM clé en main que le comité de sécurité de l’hôpital approuve sans aucune modification.' },
    ],
    transfer:
      'Avant de poser le pied sur un site commercial, industriel ou de soins occupé, complétez la check-list des parties prenantes à réaliser avant la visite et identifiez l’autorité du site qui délivre les permis de travail.',
    variations: {
      small:
        'Accentuer fortement le coût quotidien réel de la main-d’œuvre hors service et de la location du matériel de confinement.',
      large:
        'Établir une séparation formelle des rôles entre le coordinateur sécurité et le chef de projet.',
    },
  },
  {
    id: 3,
    title:
      'DÉCOMPOSITION WBS POUR UN DÉPLOIEMENT CCTV ET CONTRÔLE D’ACCÈS MULTI-SITES SUR 12 AGENCES DE RETAIL',
    phase: 'Phase 2 — Planification',
    line: 'Vidéosurveillance et contrôle d’accès',
    level: '',
    duration:
      '105 minutes (15m théorie du WBS et pièges multi-sites, 45m décomposition WBS en équipe, 30m revue inter-équipes et analyse des écarts, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 2 (WBS, planning et planification des coûts).',
    scenario:
      'Un établissement de crédit régional attribue à votre entreprise un contrat pour déployer une solution intégrée de vidéo IP et de contrôle d’accès sur 12 agences réparties dans un rayon de 150 miles. Chaque agence requiert : 8 caméras IP (Hanwha 4K), 1 NVR 8 canaux avec synchronisation cloud, 3 portes à contrôle d’accès par badge (Software House iSTAR Edge), l’intégration d’un interphone au drive-through et des raccordements de boutons d’alerte locaux. Toutes les agences doivent rester pleinement opérationnelles pendant les heures d’ouverture. Les travaux doivent être terminés en 60 jours calendaires.',
    objectives: [
      'Décomposer un projet technique d’intégration multi-sites en une organigramme des travaux (WBS) à 4 niveaux respectant la règle des 100 %.',
      'Définir des lots de travaux mesurables avec des critères d’achèvement, des budgets de main-d’œuvre et des rôles responsables distincts.',
      'Standardiser les lots de déploiement des agences afin de créer un gabarit opérationnel répétable, « copier-coller ».',
    ],
    roles: [
      'Chef de projet senior (pilote le planning multi-sites, la standardisation et le reporting par agence).',
      'Chef de chantier principal (gère les déplacements, le pré-tirage, la pose des équipements et les techniciens d’agence).',
      'Programmeur intégration systèmes (gère le pré-paramétrage des NVR, l’adressage IP, l’enregistrement VMS dans le cloud et la programmation des lecteurs).',
    ],
    inputs: [
      'Plan type d’une agence (agencement bancaire de détail standard : file de guichets, coffre-fort, hall ATM, bureau du directeur, drive-through).',
      'Document de synthèse du périmètre détaillant les quantités de matériel et les dates de jalons.',
    ],
    tasks: [
      'Construire un WBS graphique ou indenté à 4 niveaux couvrant toutes les phases (Ingénierie centrale / pré-paramétrage -> Déploiement en agence -> Mise en service en agence -> Clôture du programme).',
      'Créer une entrée du dictionnaire WBS pour deux lots de travaux critiques : WP 2.3 : Pré-configuration préparée de l’agence et WP 3.4 : Bascule physique en agence et réception.',
      'Définir les critères exacts de « terminé » pour une agence afin d’éviter que les techniciens laissent des réserves non traitées.',
    ],
    deliverables:
      'Arbre WBS complet du déploiement multi-sites, fiches du dictionnaire WBS pour les lots de travaux clés.',
    facilitator: '',
    mistakes: [
      'Structurer le WBS uniquement par tâches de métier physique, en ignorant les achats centraux, le pré-paramétrage et la clôture administrative. Débriefing : montrer que le pré-paramétrage en atelier économise 60 % du temps de déplacement sur site.',
      'Donner des définitions de lots de travaux vagues (par ex. « Installer les caméras » au lieu de « Poser, raccorder, orienter, focaliser et capturer l’instantané de réception »). Débriefing : des définitions vagues mènent à des listes de réserves infinies.',
      'Négliger la logistique de mobilisation multi-sites (temps de trajet, frais de déplacement, entretien des véhicules). Débriefing : intégrer directement les déplacements et la logistique au WBS comme lots de travaux distincts.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Se contente de lister les composants matériels sans lots de travaux chronologiques ou logiques.' },
      { tier: 'En développement', desc: 'Couvre les travaux physiques sur site mais oublie le pré-paramétrage, la logistique des déplacements et la coordination avec l’IT du client.' },
      { tier: 'Compétent', desc: 'WBS à 4 niveaux bien structuré, avec des lots de travaux clairs, des définitions au dictionnaire et des jalons d’achèvement mesurables.' },
      { tier: 'Exemplaire', desc: 'Produit un WBS modulaire et très optimisé, standardisé, où n’importe quel technicien peut réaliser un déploiement d’agence identique sans supervision.' },
    ],
    transfer:
      'Ne démarrez jamais un chantier multi-sites sans un modèle de WBS standardisé comprenant le pré-paramétrage en atelier, le déploiement sur site et les jalons de réception client.',
    variations: {
      small:
        'Consolider le WBS à 3 niveaux ; fusionner le pré-paramétrage et les achats en un seul lot mené par le technicien principal.',
      large:
        'Désigner des responsables de lots dédiés (ingénieur pré-paramétrage central vs. chef de chantier mobile).',
    },
  },
  {
    id: 4,
    title:
      'PLANIFICATION CPM ET NIVELLEMENT DES RESSOURCES AVEC UNE ÉQUIPE DE 2 TECHNICIENS ET DE LONGS DÉLAIS DE FABRICATION',
    phase: 'Phase 2 — Planification',
    line: 'Réseaux informatiques et câblage structuré',
    level: '',
    duration:
      '120 minutes (20m chemin critique et mécanique des délais de fabrication, 50m exercice de planification et de nivellement, 35m défense de l’optimisation du planning, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 2 (WBS, planning et planification des coûts).',
    scenario:
      'Une entreprise de logistique de distribution s’étend vers un nouvel entrepôt de 80 000 sq ft. Le périmètre comprend : 140 prises réseau Cat6A, 12 points d’accès industriels sans fil (Aruba AP-555), 2 baies serveurs mural IDF et une liaison dorsale en fibre optique 10G vers le MDF du siège (tirage de 500 pieds de fibre multimode blindée avec épissurage par fusion).',
    objectives: [
      'Construire un diagramme de réseau selon la méthode du chemin critique (CPM) calculant le début au plus tôt, la fin au plus tôt, le début au plus tard, la fin au plus tard et la marge.',
      'Identifier le vrai chemin critique qui détermine la date de livraison du projet avec de longs délais d’achat.',
      'Réaliser le nivellement des ressources pour une équipe de 2 personnes afin d’éliminer les suraffectations tout en respectant les créneaux d’accès interdits au site.',
    ],
    roles: [
      'Planificateur / responsable des opérations (équilibre les affectations d’équipes à l’échelle de l’entreprise).',
      'Technicien chef de chantier (connaît la productivité quotidienne de tirage de câbles et les contraintes des nacelles élévatrices).',
      'Représentant de l’entrepreneur général (défend les dates de polissage du sol et de pose des rayonnages ; refuse tout glissement de planning).',
    ],
    inputs: [
      'Liste des activités avec durées estimées (en heures-technicien) et dépendances physiques strictes.',
      'Feuille de contraintes calendaires (fenêtre de séchage du sol en béton, dates de location des nacelles, dates d’expédition du matériel).',
    ],
    tasks: [
      'Construire un planning CPM séquencé identifiant la marge totale pour tous les chemins non critiques.',
      'Répartir l’affectation quotidienne des 2 techniciens sur les 12 semaines du planning.',
      'Du jour 18 au jour 24, il faut 3 techniciens pour tenir la date du polisseur de sol. Proposez une solution viable pour l’entreprise (heures supplémentaires, tirage par phases ou pré-tirage des cheminements de fibre).',
    ],
    deliverables:
      'Diagramme de logique réseau CPM, planning de Gantt nivelé en ressources et plan de mitigation des risques de délai de fabrication.',
    facilitator: '',
    mistakes: [
      'Planifier l’installation en supposant que le matériel est miraculeusement sur site au jour 1. Débriefing : montrer que commander du matériel sans suivre les dates de confirmation des bons de commande génère des périodes d’inactivité pour les équipes.',
      'Affecter le technicien principal à 60 heures sur une semaine sans tenir compte de la fatigue, des reprises ou des trajets en véhicule. Débriefing : démontrer des modèles de planning durables à 35 heures facturables pour les petites équipes.',
      'Ignorer les contraintes fermes du site imposées par les autres corps de métier (par ex. le séchage du béton poli). Débriefing : insister sur la coordination des travaux en hauteur avant que les traitements de sol ou les rayonnages n’obstruent l’accès en hauteur.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Ignore le délai de fabrication de 10 semaines du matériel ; produit un planning irréalisable avec d’énormes conflits de ressources.' },
      { tier: 'En développement', desc: 'Identifie les délais de fabrication mais ne nivelle pas les heures technicien ; chevauche les travaux pendant la fenêtre de séchage du béton.' },
      { tier: 'Compétent', desc: 'Diagramme CPM exact ; identifie correctement le chemin critique ; nivelle l’équipe de 2 techniciens en tenant compte des créneaux interdits.' },
      { tier: 'Exemplaire', desc: 'Optimise le planning en pré-tirant les liaisons principales pendant les créneaux où l’entrepôt est vide, économisant 15 % des coûts de location de nacelles.' },
    ],
    transfer:
      'Dès qu’un devis contient du matériel dont le délai de fabrication dépasse 3 semaines, placez un jalon « Bon de commande matériel passé et confirmé » en tête du planning du chantier.',
    variations: {
      small:
        'Accentuer fortement l’impact financier des nacelles louées à l’arrêt pendant l’attente des câbles.',
      large:
        'Niveler les techniciens entre deux projets commerciaux différents pour absorber les marges.',
    },
  },
  {
    id: 5,
    title:
      'ESTIMATION DES COÛTS, PROTECTION DE LA MARGE ET ALÉAS DANS UNE OFFRE AU PRIX FIXE DE RENOUVELLEMENT RÉSEAU',
    phase: 'Phase 2 — Planification',
    line: 'Services IT d’entreprise et renouvellement LAN/WAN',
    level: '',
    duration:
      '105 minutes (20m coûts chargés et mécanique de la marge, 45m calcul sur la feuille de devis, 25m présentation et défense de l’offre, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 2 (WBS, planning et planification des coûts).',
    scenario:
      'Un établissement privé de 3 bâtiments (administration, lycée, centre sportif) demande une proposition au forfait global à prix fixe pour remplacer son infrastructure réseau vieillissante : 14 switchs Cisco Catalyst 9300 PoE, 3 switchs cœur, 60 câbles de raccordement Cat6A, 4 onduleurs avec batteries (APC 3000VA) et 1 200 pieds de dorsale en fibre optique monomode reliant les bâtiments via les gaines souterraines extérieures existantes.',
    objectives: [
      'Calculer de vrais taux de main-d’œuvre entièrement chargés incluant le véhicule, les assurances, les frais généraux et le temps d’outil non productif.',
      'Structurer un devis de coûts exact et multicatégorie (matières, main-d’œuvre, locations, sous-traitance, permis, déplacements).',
      'Appliquer des aléas de risque structurés et des hypothèses d’exclusion claires pour protéger la marge brute du projet face aux inconnues souterraines catastrophiques.',
    ],
    roles: [
      'Chargé d’études de prix senior / PM (établit les chiffres, défend les heures de main-d’œuvre et la marge sur matières).',
      'Dirigeant de l’entreprise (examine au zoom le pourcentage de marge brute et le décaissement de trésorerie).',
      'Responsable administratif de l’établissement (client) (pousse pour le prix le plus bas, tente de transférer sur le soumissionnaire tout le risque lié aux gaines).',
    ],
    inputs: [
      'Plan d’implantation du campus indiquant les distances entre les bâtiments et les regards extérieurs.',
      'Grille tarifaire de gros des équipements avec remises par niveau de distributeur.',
      'Feuille de calcul du coût de main-d’œuvre entièrement chargé de l’entreprise.',
    ],
    tasks: [
      'Calculer le coût total du projet dans toutes les catégories (matériel, main-d’œuvre directe, locations, déplacements).',
      'Calculer l’impact financier si la gaine 2 est écrasée ou complètement comblée de vase.',
      'Chiffrer le projet pour atteindre exactement 35 % de marge brute en ajoutant un aléa de risque explicite.',
      'Rédiger la clause de qualification obligatoire de la proposition concernant l’intégrité des cheminements souterrains.',
    ],
    deliverables:
      'Feuille d’estimation des coûts et de marge du projet complétée, lettre d’offre ajustée au risque avec hypothèses de qualification.',
    facilitator: '',
    mistakes: [
      'Confondre la marge sur coût et la marge, ce qui donne un bénéfice inférieur de 10 % à celui prévu. Débriefing : faire répéter le calcul : coût de $10,000 / (1 - 0,35) = prix de vente de $15,385, et NON $13,500.',
      'Accepter des risques de génie civil ou de structure illimités (par ex. gaines souterraines, amiante, effondrement des plafonds suspendus). Débriefing : montrer la formulation exacte des exclusions de cheminement : « Les gaines souterraines existantes sont supposées propres, sèches et munies d’un câble de tirage en place. Le jetage, le dégagement ou les tranchées font l’objet d’un avenant temps et matériel (T&M). »',
      'Oublier l’élimination, le transport des nacelles et les frais de permis dans la feuille de coûts. Débriefing : revoir la check-list standard des « coûts cachés du chantier ».',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Calcule mal la marge ; accepte le risque des gaines souterraines sans aléa ni exclusion.' },
      { tier: 'En développement', desc: 'Calcule correctement la marge mais n’ajoute pas d’aléa de risque structuré pour les tests de raccordement de fibre.' },
      { tier: 'Compétent', desc: 'Estimation des coûts irréprochable ; atteint la marge cible de 35 % ; joint des clauses de qualification claires et professionnelles.' },
      { tier: 'Exemplaire', desc: 'Propose une offre alternative incluant une inspection caméra des gaines avant devis afin de dérisquer le chantier et de devancer la concurrence.' },
    ],
    transfer:
      'Auditez votre tableur de devis. Vérifiez si votre taux horaire est un taux chargé ou un salaire de base, et vérifiez que les formules de marge utilisent une division, pas une multiplication.',
    variations: {
      small:
        'Accentuer fortement le trésorerie nécessaire pour avancer $65,000 de matériel Cisco avant la première facturation de jalon.',
      large:
        'Séparer les heures d’ingénierie avant-vente des heures de main-d’œuvre d’installation sur site.',
    },
  },
  {
    id: 6,
    title:
      'REGISTRE DES RISQUES ET PLAN DE RÉPONSE POUR UNE BASCULE DANS UN ENVIRONNEMENT 24 h/24 ET 7 J/7 EN PRODUCTION',
    phase: 'Phase 2 / Phase 5 — Planification et réponse aux risques',
    line: 'Infrastructure IT, pare-feu et téléphonie VoIP',
    level: '',
    duration:
      '120 minutes (20m principes du risque et bascules à fort enjeu, 50m construction du runbook et du tableau des risques, 35m simulation d’incident en direct, 15m débriefing).',
    groupSize: '4 participants par équipe',
    prerequisite: 'Module 2 (Planification) et module 5 (Suivi et contrôle).',
    scenario:
      'Un centre régional de dispatch 911 et un siège de services médicaux d’urgence (EMS) remplacent leur grappe de pare-feu cœur (migration de l’ancien FortiGate vers une paire redondante Palo Alto Networks PA-3410) et basculent 85 liens SIP VoIP.',
    objectives: [
      'Remplir un registre des risques projet quantitatif (Probabilité x Impact = Score d’exposition).',
      'Formuler des plans d’action concrets de prévention (avant bascule) et de contingence (pendant la bascule).',
      'Construire un runbook de bascule minute par minute avec des procédures explicites de « Point de non-retour » et de retour arrière.',
    ],
    roles: [
      'Ingénieur systèmes réseau senior / PM (pilote la séquence de bascule).',
      'Spécialiste télécom chef de chantier (gère le câblage physique, les liens SIP et les sécurités analogiques).',
      'Directeur des communications 911 (client) (nerveux, protecteur des opérations, exige un retour arrière immédiat en cas de problème).',
      'Ingénieur support ISP de niveau 3 (à distance, peu réactif, travaille à son rythme).',
    ],
    inputs: [
      'Diagramme de topologie réseau montrant les connexions pare-feu et routeurs existantes vs. proposées.',
      'Feuille d’allocation d’adresses IP publiques et table des identifiants des liens SIP.',
      'Modèle de chronologie de bascule de 3 heures.',
    ],
    tasks: [
      'Identifier au moins 6 risques catastrophiques (par ex. la propagation BGP de l’ISP qui échoue, une erreur de syntaxe dans la configuration du pare-feu, la perte des consoles analogiques de dispatch alimentées en PoE).',
      'Attribuer des scores de risque quantitatifs (1-5 P x 1-5 I) et définir les responsables.',
      'Rédiger un runbook de bascule minute par minute pour la fenêtre de 01:00 à 04:00.',
      'Quelle condition de panne précise à 02:45 déclenche un retour arrière immédiat vers l’ancien système pour protéger les opérations du matin ?',
    ],
    deliverables:
      'Registre des risques de bascule à fort enjeu et runbook de bascule et de retour arrière minute par minute.',
    facilitator: '',
    mistakes: [
      'Poursuivre le dépannage d’un système défaillant au-delà de la fenêtre de bascule au lieu de revenir en arrière. Débriefing : montrer que dépanner au-delà de l’échéance de retour arrière entraîne une interruption catastrophique des opérations du matin et des contentieux.',
      'Ne pas tester les sauvegardes hors site et les configurations de retour arrière avant de débrancher les câbles. Débriefing : imposer la règle : le chemin de retour arrière doit être testé physiquement et vérifié avant de lancer la bascule.',
      'Hiérarchie de communication défaillante ; plusieurs techniciens parlent en même temps au client affolé. Débriefing : désigner un unique PM incident qui gère toutes les communications client pendant que les responsables techniques dépannent au calme.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Aucune procédure formelle de retour arrière ; mise sur « on corrigera si ça casse » ; chronologie vague.' },
      { tier: 'En développement', desc: 'Liste les risques techniques mais oublie la coordination avec l’ISP et les protocoles de communication client.' },
      { tier: 'Compétent', desc: 'Runbook détaillé minute par minute ; horaires de déclenchement du retour arrière clairs ; registre des risques complet.' },
      { tier: 'Exemplaire', desc: 'Inclut des scripts automatisés de contrôle de santé avant bascule, la vérification du basculement analogique et des jalons formels de réception client.' },
    ],
    transfer:
      'Toute bascule réseau, pare-feu ou téléphonie planifiée en dehors des heures ouvrables doit disposer d’un runbook de bascule et de retour arrière écrit d’une page, signé par le client avant 17 h le vendredi.',
    variations: {
      small:
        'Le dirigeant assure la communication d’incident pendant que l’ingénieur principal gère les commandes en console.',
      large:
        'Inclure un ingénieur QA dédié vérifiant de manière indépendante l’aboutissement des appels depuis une ligne extérieure.',
    },
  },
  {
    id: 7,
    title:
      'CLINIQUE DE RÉUNION DE LANCEMENT ET DE CONTRÔLE DES AVENANTS POUR UNE MIGRATION VOIP/UC SOUFFRANT DE DÉRIVE DU PÉRIMÈTRE',
    phase: 'Phase 4 / Phase 5 — Exécution et contrôle du périmètre',
    line: 'Communications unifiées, VoIP et téléphonie cloud',
    level: '',
    duration:
      '105 minutes (15m lancement et psychologie du changement, 45m jeu de rôle de la réunion de lancement et confrontation, 30m calcul et documentation des avenants, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 4 (Exécution et communication) et module 5 (Suivi et contrôle des changements).',
    scenario:
      'Votre entreprise déploie un système VoIP cloud pour 120 utilisateurs (intégration Teams Phone / Zoom Phone avec des postes IP Yealink) pour un cabinet d’avocats régional. Le contrat comprend 120 profils utilisateur standard, 4 serveurs vocaux automatiques et une télécopie électronique de base.',
    objectives: [
      'Animer une réunion de lancement de projet structurée établissant les canaux de communication et les règles de périmètre de référence.',
      'Appliquer le script verbal en quatre phrases « Pouvez-vous juste... » pour détourner l’extension orale du périmètre sans escalader le conflit.',
      'Transformer une demande informelle du client en une demande d’avenant (COR) chiffrée et entièrement documentée.',
    ],
    roles: [
      'Chef de projet de l’entreprise (anime le lancement, contrôle le périmètre, maintient un ton positif).',
      'Associé gérant / responsable client (exigeant, suppose que tout est inclus, conteste les coûts supplémentaires).',
      'Ingénieur télécom principal (explique clairement les contraintes techniques et les exigences de licence).',
      'Observateur / évaluateur (note le PM sur son calme, le respect du script et sa fermeté).',
    ],
    inputs: [
      'Énoncé de périmètre du contrat original signé (précisant les fonctions VoIP standard).',
      'Fiche de licence constructeur et liste de prix de gros du matériel (connecteurs CRM, stockage des enregistrements d’appels, casques).',
      'Formulaire vierge de demande d’avenant (COR) d’une page.',
    ],
    tasks: [
      'Animer le jeu de rôle de la réunion de lancement simulée de 15 minutes.',
      'Gérer les exigences de l’associé gérant avec le script verbal professionnel en quatre phrases.',
      'Préparer une demande d’avenant formelle détaillant : description du changement, justification, impact sur la main-d’œuvre (heures), coût matériel et licence ($), marge sur coût et ajustement du planning.',
    ],
    deliverables:
      'Compte rendu professionnel de la réunion de lancement, formulaire d’alignement sur la référence signé et demande d’avenant complétée avec le chiffrage.',
    facilitator: '',
    mistakes: [
      'Répondre immédiatement « non » ou citer les règles PMBOK, ce qui donne au client l’impression d’être lésé. Débriefing : enseigner le basculement positif : « Nous pouvons tout à fait fournir l’enregistrement d’appels entreprise ; documentons les exigences exactes de conformité et nous vous fournirons l’addendum. »',
      'Faire le travail supplémentaire gratuitement en espérant une bonne volonté future. Débriefing : montrer les données : les clients qui obtiennent du travail gratuit ne respectent pas l’entreprise ; ils en attendent encore plus ensuite.',
      'Ne pas documenter les prolongations de délai sur les avenants. Débriefing : si un changement ajoute 3 jours de configuration, le jalon de fin doit être décalé de 3 jours dans la COR.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Cède à la pression du client et promet du travail gratuit, OU se confronte de manière agressive et détruit la confiance.' },
      { tier: 'En développement', desc: 'Défend le contrat oralement mais ne fournit pas de formulaire d’avenant complet et chiffré.' },
      { tier: 'Compétent', desc: 'Utilise le script en quatre phrases avec aisance ; entretient la relation client ; produit une COR précise et chiffrée.' },
      { tier: 'Exemplaire', desc: 'Réussit à vendre au client un forfait annuel de conformité renforcé tout en préservant le planning du projet.' },
    ],
    transfer:
      'Imprimez le script « Pouvez-vous juste... » sur des fiches de poche pour tous les techniciens et tous les PM. Ne laissez jamais un installateur commencer une prise supplémentaire sans texte ni signature autorisé.',
    variations: {
      small:
        'Le dirigeant apprend au technicien principal à recueillir rapidement une signature sur smartphone sur le site.',
      large:
        'Mettre en place un flux automatisé où les demandes de changement terrain sont automatiquement transmises au PM pour chiffrage immédiat.',
    },
  },
  {
    id: 8,
    title:
      'GESTION DES SOUS-TRAITANTS ET DES ACHATS POUR UN SOUS-TRAITANT DE CABLAGE STRUCTURÉ EN RETARD SUR LE PLANNING',
    phase: 'Phase 3 / Phase 4 — Achats et contrôle des sous-traitants',
    line: 'Câblage structuré, fibre optique et gouvernance des sous-traitants',
    level: '',
    duration:
      '105 minutes (15m principes de gouvernance des sous-traitants, 45m stratégie de rattrapage et rédaction de lettre, 30m jeu de rôle de confrontation du sous-traitant, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 3 (Achats) et module 5 (Suivi et contrôle).',
    scenario:
      'Sur un projet de siège commercial de 400 prises, votre entreprise sous-traite le tirage horizontal des câbles Cat6A, les crochets de cheminement en J et le calfeutrement coupe-feu à un sous-traitant de main-d’œuvre en basse tension (« QuickPull Data Systems ») pour un prix fixe de $24,000.',
    objectives: [
      'Construire un cahier des charges sous-traitant (SOW) exécutoire avec des jalons de performance clairs et des clauses de recours.',
      'Mener une intervention de rattrapage du planning par analyse des causes racines avec un sous-traitant en échec.',
      'Émettre une lettre formelle de mise en demeure pour non-exécution / de régularisation du planning tout en établissant un plan de rattrapage réalisable sous 48 heures.',
    ],
    roles: [
      'Chef de projet de l’entreprise principale (ferme, professionnel, fait respecter les délais et la qualité).',
      'Dirigeant du sous-traitant (« QuickPull ») (sur la défensive, multiplication des excuses, à court de capitaux et de techniciens).',
      'Conducteur de travaux de l’entrepreneur général (impatient, menace de répercuter le retard sur les deux parties si les cloisons sont bloquées).',
    ],
    inputs: [
      'Contrat de sous-traitance d’origine indiquant les jalons de planning convenus et les clauses de pénalités de retard.',
      'Journal d’inspection quotidienne du site avec photos montrant des zones de travail vides et des cheminements non tirés.',
      'Modèle standard de mise en demeure juridique sous 48 heures.',
    ],
    tasks: [
      'Calculer le rythme quotidien de raccordement de prises nécessaire pour finir avant mardi 17 h.',
      'Rédiger une mise en demeure formelle de régularisation sous 48 heures détaillant le déficit précis, l’augmentation d’effectif requise et les recours contractuels (complément de main-d’œuvre aux frais du sous-traitant).',
      'Animer en jeu de rôle la réunion de coordination à fort enjeu avec le dirigeant du sous-traitant pour négocier un plan de rattrapage.',
    ],
    deliverables:
      'Mise en demeure formelle sous 48 heures, plan de rattrapage du planning du sous-traitant et calcul d’aléa pour la main-d’œuvre complémentaire.',
    facilitator: '',
    mistakes: [
      'Attendre la dernière semaine avant de confronter un sous-traitant en retard. Débriefing : montrer pourquoi le suivi du rythme quotidien de raccordement dès le jour 3 détecte le dérapage avant qu’il ne devienne une catastrophe.',
      'Crier ou proférer des menaces émotionnelles sur le chantier. Débriefing : garder un calme juridique ; s’appuyer sur les termes écrits du contrat et sur les journaux quotidiens documentés.',
      'Compléter la main-d’œuvre du sous-traitant avec vos propres techniciens sans mise en demeure écrite formelle. Débriefing : si vous intervenez sans avis écrit, le sous-traitant accusera une ingérence et refusera les répercussions.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'N’émet pas d’avis écrit formel ; accepte les excuses ; manque la date limite de fermeture du plafond en cloisons.' },
      { tier: 'En développement', desc: 'Identifie le retard mais rédige un courriel vague sans citer les clauses contractuelles ni les indicateurs de rattrapage.' },
      { tier: 'Compétent', desc: 'Émet une mise en demeure professionnelle et juridiquement solide sous 48 heures ; calcule le rythme quotidien de raccordement requis ; établit un plan de rattrapage ferme.' },
      { tier: 'Exemplaire', desc: 'Obtient l’engagement du sous-traitant tout en mettant en place une main-d’œuvre de relais agréée, protégeant la relation avec le GC.' },
    ],
    transfer:
      'Auditez tous les bons de commande actifs de sous-traitance. Vérifiez que chacun précise : (1) des dates de fin impératives, (2) la taille d’équipe obligatoire et (3) la clause de mise en demeure sous 48 heures pour les répercussions de main-d’œuvre complémentaire.',
    variations: {
      small:
        'Le dirigeant contrôle directement l’avancement du sous-traitant chaque jour à 16 h pour protéger le seul chantier de l’entreprise.',
      large:
        'Le PM se coordonne avec les achats pour geler les paiements au sous-traitant jusqu’à ce que l’avancement corresponde à la facturation.',
    },
  },
  {
    id: 9,
    title:
      'SIMULATION DE TESTS, DE MISE EN SERVICE ET DE SIGN-OFF PAR L’AUTORITÉ DE SÉCURITÉ DES PERSONNES',
    phase: 'Phase 6 — Qualité, tests et réception par l’autorité',
    line: 'Intégration de systèmes d’alarme incendie, de contrôle d’accès et de sécurité des personnes',
    level: '',
    duration:
      '120 minutes (20m fonctionnement de l’AHJ et normes NFPA 72, 50m inspection simulée et simulation de défaillance, 35m diagnostic et sign-off des actions correctives, 15m débriefing).',
    groupSize: '4 à 5 participants par équipe',
    prerequisite: 'Module 6 (Tests, mise en service et qualité).',
    scenario:
      'Mise en service finale d’un système intégré de sécurité des personnes dans un bâtiment commercial mixte de 3 étages : tableau d’alarme incendie adressable Notifier, 8 verrous magnétiques de porte, 4 portes d’escalier à évacuation différée sous contrôle d’accès et intégration de l’arrêt des centrales de traitement d’air sur les détecteurs de gaines.',
    objectives: [
      'Construire une check-list complète de tests intégrés avant mise en service couvrant les déclenchements intersystèmes (CVC, portes coupe-feu, rappel d’ascenseur).',
      'Gérer une inspection réglementaire en direct et à forte pression avec le commissaire incendie / l’AHJ en gardant un calme professionnel.',
      'Exécuter un dépannage diagnostic rapide et présenter les preuves des actions correctives pour éviter l’échec de l’inspection.',
    ],
    roles: [
      'PM incendie principal de l’entreprise (pilote l’inspection, présente le dossier, maintient la conformité réglementaire).',
      'Responsable de la mise en service sur site / électricien (pilote le tableau, active la fumée d’essai, dépanne le câblage).',
      'Inspecteur commissaire incendie / AHJ (exigeant, tolérance zéro pour les défauts de sécurité des personnes, conteste chaque valeur).',
      'Entrepreneur général / propriétaire du bâtiment (désespère d’obtenir le certificat d’occupation, terrifié par les délais).',
    ],
    inputs: [
      'Dossier de plans d’exécution incendie approuvé, portant les cachets d’approbation de l’AHJ.',
      'Séquence des opérations (matrice des entrées et sorties / matrice cause-effet).',
      'Schéma de câblage constructeur pour le déverrouillage magnétique de porte et les relais d’interface CVC.',
    ],
    tasks: [
      'Préparer le dossier d’inspection officiel de l’AHJ (calculs de batteries, calculs de chute de tension, journaux de pré-tests, impressions des détecteurs).',
      'Animer en jeu de rôle l’inspection en direct jusqu’à la défaillance du détecteur de fumée en gaine 2-1 et de la porte d’escalier B.',
      'Identifier le défaut de câblage, corriger la logique des relais et retester avec le commissaire incendie.',
      'Obtenir un sign-off conditionnel ou une réception complète sans subir la pénalité de réinspection de 30 jours.',
    ],
    deliverables:
      'Matrice cause-effet complète de la séquence des opérations, dossier de vérification avant inspection et feuille de réception sur site de l’AHJ.',
    facilitator: '',
    mistakes: [
      'Convoquer l’inspection officielle de l’AHJ sans avoir réalisé un pré-test silencieux à 100 % de chaque détecteur. Débriefing : n’utilisez jamais le commissaire incendie comme votre testeur qualité.',
      'Se présenter sans plans tamponnés, sans calculs de batteries et sans fiches techniques. Débriefing : les inspecteurs annulent immédiatement une inspection si les documents approuvés manquent.',
      'Discuter avec l’AHJ sur l’interprétation du code directement sur site. Débriefing : enseigner à demander poliment les références d’articles du code et à proposer des solutions d’ingénierie approuvées par le constructeur.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Le système échoue à l’inspection ; documentation manquante ; le PM discute avec le commissaire incendie.' },
      { tier: 'En développement', desc: 'Bonne documentation, mais l’équipe est désorganisée pendant la défaillance et ne parvient pas à dépanner rapidement le défaut de relais.' },
      { tier: 'Compétent', desc: 'Dossier professionnel ; diagnostic rapide du câblage des relais ; conserve son calme ; obtient le sign-off.' },
      { tier: 'Exemplaire', desc: 'Démontre une maîtrise complète de la séquence des opérations NFPA 72 ; mène un audit de pré-tests qui détecte les erreurs avant le début de l’inspection.' },
    ],
    transfer:
      'Ne planifiez jamais une visite de réception de l’AHJ ou du client avant que le technicien principal n’ait signé le « Pre-Test Sign-Off 100 % » interne certifiant chaque événement entrée-sortie.',
    variations: {
      small:
        'Le technicien principal et le dirigeant assistant ensemble à l’inspection.',
      large:
        'Le responsable de la division incendie mène un audit interne obligatoire par les pairs 48 heures avant l’arrivée de l’AHJ.',
    },
  },
  {
    id: 10,
    title:
      'SUIVI DE L’AVANCEMENT AVEC UN TABLEAU DE BORD LÉGER VALEUR ACQUISE / DÉPENSE D’AVANCE POUR UN PROGRAMME MULTI-SITES',
    phase: 'Phase 5 — Suivi et contrôle',
    line: 'Vidéosurveillance et contrôle d’accès multi-sites',
    level: '',
    duration:
      '105 minutes (20m mécanique de la valeur acquise côté entreprise, 45m analyse des données et calcul du tableau de bord, 25m défense auprès de la direction et pitch de rattrapage, 15m débriefing).',
    groupSize: '3 à 4 participants par équipe',
    prerequisite: 'Module 2 (Planification) et module 5 (Suivi et contrôle).',
    scenario:
      'Votre entreprise est à 4 semaines du lancement d’une modernisation de 8 semaines portant sur 10 sites CCTV et contrôle d’accès pour une compagnie régionale d’utilités.',
    objectives: [
      'Calculer la valeur acquise (EV), la valeur planifiée (PV) et le coût réel (AC) en heures de main-d’œuvre entreprise, sans jargon académique.',
      'Calculer l’indice de performance du planning (SPI) et l’indice de performance des coûts (CPI) pour révéler l’état réel du projet.',
      'Produire une estimation à achèvement (EAC) anticipant le dépassement final de main-d’œuvre et l’impact sur la marge.',
      'Formuler un plan d’action agressif de rattrapage de la main-d’œuvre pour ramener le projet à la rentabilité cible.',
    ],
    roles: [
      'Chef de projet (présente l’état du projet, défend la consommation de main-d’œuvre).',
      'Contrôleur financier / dirigeant (interroge les chiffres, exige la protection de la marge).',
      'Chef de chantier principal (explique les inefficacités au niveau des sites, les retards de déplacement et les frictions de pré-tirage).',
    ],
    inputs: [
      'Relevés de temps hebdomadaires par technicien et par site.',
      'Check-list de pourcentage d’avancement physique pour chaque agence.',
      'Modèle de tableau de bord de suivi d’une page « dépense d’avance » entreprise.',
    ],
    tasks: [
      'Calculer le pourcentage d’avancement physique réel sur l’ensemble du programme de 10 sites :',
      '3 sites à 100 % = 300 unités-équivalent de site.',
      '2 sites à 50 % = 100 unités-équivalent de site.',
      'Total = 400 sur 1000 = 40,0 % d’avancement physique.',
      '',
      'Valeur planifiée = 50 % de 800 h = 400 h.',
      'Valeur acquise = 40 % de 800 h = 320 h.',
      'Heures réellement consommées = 450 h.',
      'Indice de coûts (CPI) = 320 / 450 = 0,71 (Catastrophe : dépenser $1.00 de main-d’œuvre pour obtenir $0.71 de valeur !).',
      'Total d’heures prévu à l’achèvement (EAC) = 800 / 0.71 = 1 126 heures (dépassement de main-d’œuvre de 326 heures = saignée de $17,000 de marge).',
      'Construire le tableau de bord de gestion d’une page affichant l’alerte rouge.',
      'Développer 3 mesures terrain spécifiques pour éliminer le dépassement de 326 heures sur les 5 sites restants.',
    ],
    deliverables:
      'Tableau de bord « dépense d’avance » d’une page complété, analyse de l’écart prévisionnel et plan de rattrapage de la productivité de la main-d’œuvre.',
    facilitator: '',
    mistakes: [
      'Se fier aux estimations subjectives des techniciens (« Oui chef, on en est à environ 80 % »). Débriefing : imposer le comptage des unités physiques (par ex. 64 prises raccordées sur 80 = 80 %).',
      'Ne pas calculer le dépassement prévu assez tôt pour le corriger. Débriefing : à 40 % d’avancement, vous avez le temps de corriger les habitudes des équipes ; à 85 %, la marge est déjà consommée.',
      'Accuser les techniciens au lieu d’examiner la préparation, le pré-paramétrage ou la logistique des déplacements. Débriefing : montrer que le retard sur les sites D et E vient du fait que les techniciens attendaient les clés, et non d’un tirage lent.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Croit la déclaration du PM selon laquelle tout est dans les temps ; ne sait pas calculer l’avancement physique par rapport aux heures consommées.' },
      { tier: 'En développement', desc: 'Calcule que les heures dépassent le budget mais n’anticipe pas le dépassement final en EAC ni ne propose de solutions viables.' },
      { tier: 'Compétent', desc: 'Calcule correctement le CPI/SPI ; construit un tableau de bord clair ; présente un plan réaliste de rattrapage de productivité.' },
      { tier: 'Exemplaire', desc: 'Identifie des causes racines systémiques précises (échecs de pré-paramétrage) et restructure le flux de travail pour les 5 sites restants afin de récupérer 80 % de la marge perdue.' },
    ],
    transfer:
      'Chaque vendredi après-midi, saisissez le total des heures facturées rapportées aux jalons physiques achevés dans la feuille « dépense d’avance » d’une page. Si le CPI passe sous 0,85, déclenchez immédiatement une revue d’équipe.',
    variations: {
      small:
        'Gardez les calculs simples : suivez les « jours-technicien budgétés vs. jours-technicien réellement consommés ».',
      large:
        'Intégrer complètement le logiciel de suivi du temps (TSheets/QuickBooks Time) aux tableaux de bord d’avancement des jalons.',
    },
  },
  {
    id: 11,
    title:
      'SIMULATION DE CRISE : RETARD DE LIVRAISON DE MATÉRIEL PLUS UN INCIDENT DE SÉCURITÉ SUR CHANTIER EN COURS D’INSTALLATION',
    phase: 'Phase 4 / Phase 5 — Exécution, sécurité et réponse à la crise',
    line: 'Intégration commerciale multisystème (CCTV + réseau + contrôle d’accès)',
    level: '',
    duration:
      '120 minutes (20m cadre de gestion de crise et protocoles de sécurité, 50m triage d’incident en direct et documentation, 35m simulation de communication multi-parties prenantes, 15m débriefing).',
    groupSize: '4 participants par équipe',
    prerequisite: 'Module 4 (Exécution) et module 5 (Suivi et contrôle).',
    scenario:
      'Le mardi matin de la semaine 3 d’un projet de campus d’entreprise très médiatisé :',
    objectives: [
      'Exécuter le protocole d’urgence d’incident de sécurité en 4 phases (Soins médicaux -> Sécurisation du site -> Déclaration réglementaire -> Enquête).',
      'Gérer la communication de crise sous une pression extrême (GC, OSHA / régulateurs de la sécurité, famille du travailleur blessé, personnel interne).',
      'Formuler un plan de récupération du projet à double voie réorganisant le planning autour à la fois de l’ordre d’arrêt pour raison de sécurité et du retard de matériel de 3 semaines.',
    ],
    roles: [
      'Dirigeant / responsable des opérations (gère la responsabilité, la prise en charge du salarié et la survie de l’entreprise).',
      'PM terrain / responsable sécurité de l’entreprise (mène l’enquête sur site, gère le GC, dépose les rapports).',
      'Directeur sécurité du GC (furieux, agressif, menace une exclusion définitive du chantier).',
      'Sponsor dirigeant côté client (inquiet du retard d’ouverture du campus d’entreprise et de la publicité négative).',
    ],
    inputs: [
      'Plan de sécurité du chantier et check-list d’inspection des échelles.',
      'Formulaire vierge OSHA 301 / rapport d’enquête d’incident.',
      'Courriel de notification de rupture de stock de matériel envoyé par le distributeur.',
    ],
    tasks: [
      'Trier les 60 premières minutes : définir les actions immédiates dans l’ordre chronologique.',
      'Compléter le formulaire officiel d’enquête d’incident en identifiant la cause racine (mauvais choix d’échelle, absence de contact à trois points, absence d’arrimage).',
      '',
      'Communication 1 : avis d’incident professionnel et plan d’actions correctives à remettre au directeur sécurité du GC pour lever l’ordre d’arrêt sous 24 heures.',
      'Communication 2 : note d’information transparente au client expliquant la stratégie de réacheminement du matériel (déploiement de switchs de prêt temporaires pour tenir le jalon de bascule).',
    ],
    deliverables:
      'Rapport d’enquête d’incident de sécurité complété, protocole d’actions correctives sur chantier et plan de récupération du planning côté client.',
    facilitator: '',
    mistakes: [
      'Cacher ou minimiser l’incident de sécurité pour échapper au contrôle du GC. Débriefing : montrer comment la dissimulation transforme des accidents mineurs en responsabilités pénales et en exclusion définitive de l’entreprise.',
      'Paralyser tout le projet parce qu’un composant matériel est en retard. Débriefing : démontrer la « stratégie du switch de prêt » — utiliser du matériel d’atelier temporaire pour maintenir l’avancement de la mise en service.',
      'Autoriser les techniciens à remonter sur les échelles sans un arrêt sécurité général ni un recyclage obligatoires. Débriefing : insister sur l’« arrêt sécurité toolbox pour toute l’équipe » obligatoire avant la reprise des travaux.',
    ],
    rubric: [
      { tier: 'Insuffisant', desc: 'Panique ; ignore le protocole de sécurité ; ment au GC ; accepte un arrêt total du projet de 3 semaines.' },
      { tier: 'En développement', desc: 'Gère bien l’urgence médicale mais ne fournit pas au GC de plan de sécurité correctif documenté.' },
      { tier: 'Compétent', desc: 'Triage d’urgence irréprochable ; établit un rapport de niveau OSHA ; rédige un plan correctif professionnel pour le GC ; déploie des switchs de prêt temporaires.' },
      { tier: 'Exemplaire', desc: 'Transforme la crise en démonstration de la maturité d’une entreprise d’élite, gagne la confiance du GC et préserve la date de bascule.' },
    ],
    transfer:
      'Placez une « fiche d’action en cas d’incident de sécurité » plastifiée dans la boîte à gants de chaque camion de l’entreprise et réalisez un audit d’inspection des échelles de 5 minutes sur chaque chantier.',
    variations: {
      small:
        'Le dirigeant se précipite à l’hôpital pendant que le PM principal sécurise le chantier.',
      large:
        'Un coordinateur sécurité dédié gère les déclarations pendant que le PM exécute la stratégie du switch de prêt.',
    },
  },
];