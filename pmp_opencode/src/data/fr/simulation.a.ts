import type { SimBeat } from '../../types';

export const SIMULATION_FR_A: SimBeat[] = [
  {
    n: 1,
    beat: 'Comprendre la demande',
    stage: 'start',
    situation:
      'Samira Okon, responsable des installations chez Northgate Ltd, appelle : « Nous avons eu des outils volés dans l’entrepôt le mois dernier. Je pense qu’il nous faut de la vidéosurveillance. Pouvez-vous me donner un prix ? »',
    question: 'Quelle est votre première action ?',
    choices: [
      { text: 'Envoyer un prix pour un pack standard de 8 caméras dès l’après-midi.', correct: false, feedback: 'Vous avez chiffré avant de comprendre. « Vidéosurveillance » peut être 4 caméras ou 40 — et vous venez de deviner.' },
      { text: 'Organiser une visite et préparer les questions sur ce qui doit réellement être protégé.', correct: true, feedback: 'Bien. Le déclencheur te dit le vrai besoin : le vol à l’entrepôt. Tout le reste en découle.' },
      { text: 'Lui dire que la vidéosurveillance ne servira à rien et suggérer une alarme à la place.', correct: false, feedback: 'Vous avez résolu un problème avant de le diagnostiquer. Son besoin est la preuve et la dissuasion — la vidéosurveillance peut être exactement ce qu’il faut.' },
    ],
  },
  {
    n: 2,
    beat: 'Poser les questions',
    stage: 'start',
    situation: 'Vous êtes assis avec Samira. Elle répète : « Donnez-moi juste quelque chose qui couvre l’entrepôt. »',
    question: 'Quelle question compte le plus maintenant ?',
    choices: [
      { text: '« Quelle marque de caméra préférez-vous ? »', correct: false, feedback: 'Une question produit. Vous ne connaissez même pas encore les zones.' },
      { text: '« Que s’est-il passé, quelles zones ont été touchées, et qu’avez-vous déjà sur place ? »', correct: true, feedback: 'Exactement. Pourquoi, où, et ce qui existe — les trois questions qui façonnent toutes les autres décisions.' },
      { text: '« Quel est votre budget ? »', correct: false, feedback: 'Utile plus tard, mais comme ouverture, cela coupe la conversation sur les besoins avant qu’elle commence.' },
    ],
  },
  {
    n: 3,
    beat: 'Étude de site',
    stage: 'start',
    situation:
      'Samira vous fait visiter le bâtiment : 3 étages de bureaux plus un entrepôt de 400 m² avec une baie de chargement. Il y a un vieux DVR 4 caméras, hors service, dans un placard.',
    question: 'Que faites-vous pendant la visite ?',
    choices: [
      { text: 'Écouter attentivement et lui dire que vous enverrez un devis par e-mail.', correct: false, feedback: 'Vous êtes reparti sans faits. Quelle est la longueur des câblages ? Où est la baie ? Quelle alimentation existe ?' },
      { text: 'Marcher avec la liste de contrôle, marquer les positions sur le plan, photographier chacune, et mesurer les longs parcours.', correct: true, feedback: 'Parfait. Des faits sur papier battent la mémoire à tous les coups — et les photos vous permettent de concevoir depuis votre bureau.' },
      { text: 'Photographier seulement l’entrepôt — c’est là qu’est le problème.', correct: false, feedback: 'La baie de chargement et la porte arrière sont le chemin par lequel les choses sortent du bâtiment. La visite couvre tout le parcours.' },
    ],
  },
  {
    n: 4,
    beat: 'Définir le périmètre',
    stage: 'plan',
    situation:
      'De retour au bureau, vous rédigez l’offre. Samira a mentionné que la réception et les bureaux « seraient bien à couvrir aussi ».',
    question: 'Comment traitez-vous la frontière du projet ?',
    choices: [
      { text: 'Inclure tout ce qu’elle a mentionné — c’est plus simple que d’en discuter.', correct: false, feedback: 'Chaque élément inclus que vous n’avez jamais chiffré est de l’argent perdu. Et vous posez l’attente que demander, c’est obtenir.' },
      { text: 'Écrire deux colonnes — inclus et non inclus — avec le retrait de l’ancien DVR et les travaux électriques clairement exclus, et l’envoyer pour confirmation.', correct: true, feedback: 'Correct. Les deux côtés de la frontière, par écrit, confirmés avant de commencer. Cette seule feuille évite la plupart des disputes ultérieures.' },
      { text: 'Inclure les bureaux, mais ne rien dire sur le retrait de l’ancien DVR ni les travaux électriques.', correct: false, feedback: 'Les exclusions silencieuses deviennent des disputes. Si ce n’est pas écrit comme exclu, le client supposera que c’est inclus.' },
    ],
  },
  {
    n: 5,
    beat: 'Découper en tâches',
    stage: 'plan',
    situation: 'Périmètre validé : 16 caméras, un enregistreur, 2 commutateurs, câblage, installation, configuration, essais et formation des utilisateurs.',
    question: 'Que faites-vous ensuite ?',
    choices: [
      { text: 'Appeler l’équipe et leur dire de commencer lundi — vous les dirigerez sur place.', correct: false, feedback: 'Pas de liste, et quelque chose est oublié — généralement les essais et la formation, les deux tâches que personne n’aime.' },
      { text: 'Écrire la liste des tâches : onze tâches de l’étude de site à la livraison, chacune assez petite pour être finie par une personne.', correct: true, feedback: 'Oui. Un verbe, un objet, un propriétaire ensuite. La liste est la mémoire du projet.' },
      { text: 'Commander les caméras d’abord, puis trouver le reste.', correct: false, feedback: 'L’équipement avant les tâches, c’est ainsi qu’on achète les mauvaises quantités. La liste des tâches vous dit quoi commander.' },
    ],
  },
  {
    n: 6,
    beat: 'Attribuer les responsabilités',
    stage: 'plan',
    situation: 'Onze tâches, trois personnes disponibles : Karim l’ingénieur, l’équipe A (deux techniciens), et Amel la coordinatrice.',
    question: 'Comment les attribuez-vous ?',
    choices: [
      { text: 'Mettre « l’équipe » sur les tâches d’installation — ils se débrouilleront.', correct: false, feedback: '« L’équipe », c’est personne. Deux techniciens qui croient chacun que l’autre a monté les caméras arrière, c’est comme une fin de semaine devient un lundi.' },
      { text: 'Un nom par tâche : Karim possède l’étude, la configuration et les essais ; l’équipe A possède le câblage et la fixation ; Amel possède la formation et la documentation.', correct: true, feedback: 'Exactement juste. Une tâche, un nom — même si la même personne possède plusieurs tâches.' },
      { text: 'Tout attribuer à Karim parce qu’il est le plus expérimenté.', correct: false, feedback: 'Vous avez créé un goulot d’étranglement et formé personne. Karim ne peut pas être sur toutes les échelles.' },
    ],
  },
  {
    n: 7,
    beat: 'Lister ce qu’il faut',
    stage: 'plan',
    situation: 'Vous vérifiez le véhicule avant de charger pour le premier jour sur site.',
    question: 'Qu’y a-t-il sur votre liste ?',
    choices: [
      { text: 'Caméras, enregistreur, commutateurs, câble — les gros articles.', correct: false, feedback: 'Sans connecteurs, étiquettes ni testeur, l’équipe repart à 16 h vers un fournisseur.' },
      { text: 'Les cinq catégories : personnes, équipement, matériaux, outils et documents — avec le plan et la feuille de périmètre.', correct: true, feedback: 'Parfait. Cinq catégories, rien d’oublié — et les documents évitent toute dispute sur ce qui a été convenu.' },
      { text: 'Tout ce qui tient dans le véhicule ; vous achèterez le reste sur place.', correct: false, feedback: 'Acheter sur place, c’est payer le prix détail, perdre une heure et décevoir le client qui regarde.' },
    ],
  },
  {
    n: 8,
    beat: 'Construire le planning',
    stage: 'plan',
    situation: 'Samira veut le système en fonctionnement avant l’inventaire du 20 juin. Nous sommes le 3 juin.',
    question: 'Comment le planifiez-vous ?',
    choices: [
      { text: 'Tout commencer lundi et voir comment ça se passe.', correct: false, feedback: '« Voir comment ça se passe » signifie que l’enregistreur arrive le lendemain du jour où vous en aviez besoin. Les plannings existent pour être vérifiés, pas espérés.' },
      { text: 'Commander l’enregistreur aujourd’hui (délai de 2 semaines), planifier le câblage en semaine 1 pendant l’expédition, et remonter à rebours depuis le 20 juin avec un après-midi tampon.', correct: true, feedback: 'Exactement. Les articles à long délai commandés dès le premier jour, une séquence qui respecte les dépendances, et un tampon avant l’échéance.' },
      { text: 'Dire à Samira que le 20 juin est impossible et exiger un mois de plus.', correct: false, feedback: 'Avant de planifier ? Un professionnel séquence d’abord, puis rapporte honnêtement si la date est atteignable.' },
    ],
  },
];