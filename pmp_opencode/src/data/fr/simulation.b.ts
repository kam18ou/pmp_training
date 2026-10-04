import type { SimBeat } from '../../types';

export const SIMULATION_FR_B: SimBeat[] = [
  {
    n: 9,
    beat: 'Identifier les risques',
    stage: 'plan',
    situation: 'Le planning est tracé. Il vous reste une semaine avant le début des travaux sur site.',
    question: 'Que faites-vous de cette semaine ?',
    choices: [
      { text: 'Rien — vous gérerez les problèmes quand ils apparaîtront.', correct: false, feedback: 'Un risque sans réponse est une surprise qui attend l’échéance.' },
      { text: 'Écrire le registre : les commutateurs peuvent être en rupture, l’accès à l’entrepôt est limité de 09 h à 11 h, les palettes de la baie peuvent ne pas être dégagées — chacune avec une réponse et un propriétaire.', correct: true, feedback: 'Correct. Un propriétaire nommé et une réponse par risque. « Surveiller » n’est pas une réponse.' },
      { text: 'Appeler Samira pour l’avertir que beaucoup de choses peuvent mal tourner.', correct: false, feedback: 'Vous avez transféré votre anxiété sans plan. Apportez des réponses, jamais seulement des inquiétudes.' },
    ],
  },
  {
    n: 10,
    beat: 'Démarrer le travail',
    stage: 'do',
    situation: 'Lundi matin, semaine 1. L’équipe est sur place. Les premières caméras se montent.',
    question: 'Quelle est votre routine à partir d’aujourd’hui ?',
    choices: [
      { text: 'Travailler dur toute la semaine et faire un point à la fin si on a le temps.', correct: false, feedback: 'Vendredi, trois petits problèmes sont devenus un gros — et Samira l’apprend le jour de l’échéance.' },
      { text: 'Un point de deux minutes le matin sur l’état, et un rapport quotidien d’un paragraphe avec deux photos envoyé à Samira.', correct: true, feedback: 'Exactement. Deux minutes par jour, un paragraphe avec des photos. Samira n’a jamais besoin d’appeler pour demander où on en est.' },
      { text: 'Attendre que Samira vous appelle pour une mise à jour.', correct: false, feedback: 'Le silence engendre le doute. Un client qui doit relancer suppose le pire.' },
    ],
  },
  {
    n: 11,
    beat: 'INJECTION — le retard fournisseur',
    stage: 'do',
    inject: true,
    situation:
      'Enveloppe 1, ouverte mardi de la semaine 2 : le fournisseur appelle — l’enregistreur arrivera avec 5 jours de retard, le jour suivant votre journée de configuration planifiée. Vous avez promis à Samira un système fonctionnel le 18 juin.',
    question: 'Que faites-vous en premier ?',
    choices: [
      { text: 'Ne rien dire, continuer à monter les caméras, et espérer que le planning absorbe le retard.', correct: false, feedback: 'Samira a planifié l’inventaire autour du 18. Elle l’apprend le jour où rien ne fonctionne — quand plus rien ne peut être fait.' },
      { text: 'Appeler Samira aujourd’hui, garder l’équipe sur le câblage et la fixation, replanifier les essais autour de la nouvelle livraison, et confirmer une date révisée pendant qu’il est encore peu coûteux de bouger les choses.', correct: true, feedback: 'Correct. Vous apportez le problème et la solution ensemble, l’équipe reste productive, et la confiance survit parce que vous l’avez prévenue immédiatement.' },
      { text: 'Annuler la commande et acheter l’enregistreur le moins cher en stock.', correct: false, feedback: 'Un autre enregistreur peut ne pas gérer 16 canaux ni le stockage dont elle a besoin. Vous troqueriez un retard contre un défaut.' },
    ],
  },
  {
    n: 12,
    beat: 'INJECTION — l’avenant client',
    stage: 'do',
    inject: true,
    situation:
      'Enveloppe 2, ouverte mercredi : Samira entre pendant que l’équipe A finit les caméras de l’entrepôt. « Puisque vous êtes ici — pouvez-vous ajouter quatre caméras dans le coin arrière ? Pareil, vous êtes déjà sur place. »',
    question: 'Que dites-vous ?',
    choices: [
      { text: '« Pas de souci » — et les installer dans l’après-midi.', correct: false, feedback: 'Vous avez offert quatre caméras et une journée de travail. Du travail gratuit, fait, ne peut plus jamais être facturé sans conflit.' },
      { text: '« Bien sûr — laissez-moi l’écrire. Quatre caméras plus le câblage et la configuration, environ une journée de plus. Je vous envoie le prix ce soir, et nous commençons une fois que vous l’avez signé. »', correct: true, feedback: 'Le script, mot pour mot. Chaleureux, professionnel, payé — et Samira le respecte parce que c’est ainsi que travaillent les vraies entreprises.' },
      { text: '« Non, ce n’est pas dans le contrat. »', correct: false, feedback: 'Techniquement juste et commercialement faux. Elle est ravie de payer ; vous venez de refuser le travail et de refroidir la relation.' },
    ],
  },
  {
    n: 13,
    beat: 'Rapporter l’avancement',
    stage: 'check',
    situation: 'Vendredi midi, semaine 2. Vous vous asseyez pour écrire le rapport hebdomadaire.',
    question: 'Que doit contenir le rapport ?',
    choices: [
      { text: 'La liste de tout ce qui s’est bien passé cette semaine.', correct: false, feedback: 'Un rapport qui cache les caméras bloquées n’est pas un rapport — c’est une brochure. Samira a besoin des points rouges.' },
      { text: 'L’avancement, ce qui est terminé, ce qui est bloqué, les risques, la semaine prochaine — et la seule décision que vous attendez de Samira, avec son effet sur le délai et le prix.', correct: true, feedback: 'Exactement. La dernière ligne est la plus précieuse : elle force la décision qui fait avancer le projet.' },
      { text: 'Une ligne unique : « Tout est dans les temps. »', correct: false, feedback: 'Avec deux positions bloquées et un enregistreur glissé, « tout est dans les temps » n’est pas de l’optimisme — c’est un mensonge.' },
    ],
  },
  {
    n: 14,
    beat: 'Tester le système',
    stage: 'check',
    situation: 'L’enregistreur est arrivé et configuré. Les 16 caméras sont montées et affichent des images.',
    question: 'Comment terminez-vous ?',
    choices: [
      { text: 'Dire à Samira que le système est en ligne et envoyer la facture.', correct: false, feedback: 'Non testé, c’est inachevé. Une caméra au mauvais angle devient son problème — et votre visite sous garantie.' },
      { text: 'Dérouler la liste d’essais avec Samira à côté de vous : image par caméra, enregistrement, lecture, stockage, accès distant, connexions — et la faire signer.', correct: true, feedback: 'Correct. Laissez-la appuyer sur les boutons : elle apprend le système et accepte le résultat en même temps. La signature arrête la dispute avant qu’elle ne commence.' },
      { text: 'Le tester vous-même rapidement le matin et lui envoyer les résultats par e-mail.', correct: false, feedback: 'Un test que le client n’a jamais vu est un test que le client peut contester. L’acceptation a besoin d’un témoin.' },
    ],
  },
  {
    n: 15,
    beat: 'Préparer la livraison',
    stage: 'finish',
    situation: 'Les essais sont passés. Le jour de la livraison est demain.',
    question: 'Que préparez-vous ce soir ?',
    choices: [
      { text: 'La facture — le client a tout ce dont il a besoin.', correct: false, feedback: 'Si vous gardez les mots de passe, le projet n’est pas fini, il est en pause. Et vous serez au téléphone la semaine prochaine.' },
      { text: 'Le dossier de livraison : numéros de série, mots de passe scellés, deux pages d’instructions, essais signés, garantie, calendrier de maintenance, contact du support.', correct: true, feedback: 'Exactement — et remettez-le en mains propres, puis formez la réceptionniste qui l’utilisera vraiment, pas le manager qui ne le fera jamais.' },
      { text: 'Un e-mail rapide résumant ce qui a été installé.', correct: false, feedback: 'Des mots de passe dans un e-mail, pas d’essais signés, pas de feuille de garantie. C’est le dossier qui clôt le projet proprement.' },
    ],
  },
  {
    n: 16,
    beat: 'Clore le projet',
    stage: 'finish',
    situation: 'Le dossier est remis. Le système est accepté. L’équipe est fatiguée mais fière.',
    question: 'Quelle est la dernière chose que vous faites ?',
    choices: [
      { text: 'Passer tout le monde au projet suivant — pas de temps pour les cérémonies.', correct: false, feedback: 'Un projet non clos consomme encore de l’attention : facture non envoyée, retenue non notée, retours non écrits.' },
      { text: 'Le clore : envoyer la facture finale, noter la retenue de 10 % dans le calendrier, et tenir une réunion d’équipe de 20 minutes pour écrire trois leçons précises pour le prochain projet.', correct: true, feedback: 'Une clôture parfaite. La facture est envoyée, l’argent est suivi, et « commander l’enregistreur le jour de la signature du contrat » devient un savoir d’entreprise — pas la mémoire d’une seule équipe.' },
      { text: 'Appeler Samira pour demander si elle a besoin d’autre chose.', correct: false, feedback: 'Un appel amical, mais ce n’est pas une clôture. La facture et les leçons sont ce qui termine réellement le projet.' },
    ],
  },
];