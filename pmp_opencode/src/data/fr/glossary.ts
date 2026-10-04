import type { GlossaryEntry } from '../../types';

export const GLOSSARY_FR: GlossaryEntry[] = [
  {
    plain: 'Un projet',
    pro: 'Projet',
    meaning: 'Travail temporaire réalisé une seule fois pour obtenir un résultat précis, avec un début et une fin.',
    example: 'Installer le système de vidéosurveillance — fait une fois, terminé le jour de la livraison.',
  },
  {
    plain: 'Le travail quotidien',
    pro: 'Opérations',
    meaning: 'Le travail répétitif qui fait tourner l’activité, sans date de fin unique.',
    example: 'La visite mensuelle d’entretien de l’alarme incendie.',
  },
  {
    plain: 'Ce dont le client a besoin',
    pro: 'Exigences',
    meaning: 'La liste écrite et validée de ce que le projet doit livrer.',
    example: '« 16 caméras couvrant l’entrepôt et la réception, accès distant, fonctionnement avant le 20 juin. »',
  },
  {
    plain: 'La visite avant devis',
    pro: 'Étude de site',
    meaning: 'Une visite du site avec une liste de contrôle pour recueillir les faits physiques avant de concevoir ou de chiffrer.',
    example: 'Marquer les positions des caméras sur le plan et photographier chacune d’elles.',
  },
  {
    plain: 'Ce que nous ferons et ne ferons pas',
    pro: 'Périmètre',
    meaning: 'La frontière validée du projet — le travail inclus et, tout aussi important, le travail exclu.',
    example: 'Installation incluse ; travaux électriques et abonnement internet exclus.',
  },
  {
    plain: 'Découper le projet en tâches',
    pro: 'Organigramme des tâches (WBS)',
    meaning: 'La liste complète des tâches qui, réunies, produisent tout le projet.',
    example: 'Onze tâches, de l’étude de site à la livraison.',
  },
  {
    plain: 'Qui est responsable',
    pro: 'Tableau des responsabilités (RACI)',
    meaning: 'Un tableau donnant à chaque tâche exactement un propriétaire. RACI est la version avancée : Réalise, Approuve, Consulté, Informé.',
    example: 'Câblage — équipe A ; configuration — Karim.',
  },
  {
    plain: 'Ce dont nous avons besoin avant de commencer',
    pro: 'Liste des ressources',
    meaning: 'Les personnes, équipements, matériaux, outils et documents nécessaires au projet.',
    example: 'Deux techniciens, 16 caméras, du câble, un testeur de câbles et le plan.',
  },
  {
    plain: 'Ce qui doit se passer avant quoi',
    pro: 'Dépendances',
    meaning: 'La règle selon laquelle une tâche ne peut pas commencer tant qu’une autre n’est pas finie.',
    example: 'On ne configure pas des caméras pas encore fixées.',
  },
  {
    plain: 'Acheter pour le projet',
    pro: 'Approvisionnement (procurement)',
    meaning: 'La séquence : identifier → demander des devis → comparer → commander → réceptionner → contrôler.',
    example: 'Commander l’enregistreur dès le premier jour parce que son délai est de deux semaines.',
  },
  {
    plain: 'Le coût complet d’une personne par heure',
    pro: 'Taux horaire chargé',
    meaning: 'Le salaire plus tous les coûts d’entreprise : impôts, assurances, véhicule et temps non facturable.',
    example: 'Un salaire de 28 $ peut donner un taux chargé de 48 $ — utilisez 48 $ dans le budget.',
  },
  {
    plain: 'Coût, prix, et la différence',
    pro: 'Marge',
    meaning: 'Marge = (Prix − Coût) ÷ Prix. Elle se lit sur le prix, jamais sur le coût.',
    example: 'Coût 18 700 $, prix 24 500 $ → marge 23,7 %.',
  },
  {
    plain: 'Quelque chose qui pourrait arriver',
    pro: 'Risque',
    meaning: 'Un événement futur possible avec une réponse planifiée et un propriétaire.',
    example: 'L’enregistreur peut arriver en retard — alors il est commandé dès le premier jour.',
  },
  {
    plain: 'Quelque chose qui est déjà arrivé',
    pro: 'Problème',
    meaning: 'Un événement réel déjà survenu qui exige une décision maintenant.',
    example: 'L’enregistreur est arrivé en retard — le planning doit changer aujourd’hui.',
  },
  {
    plain: 'Une modification demandée après le début',
    pro: 'Avenant (demande de modification)',
    meaning: 'Une demande écrite et signée d’ajouter ou modifier du travail, avec son effet sur le délai et le prix.',
    example: 'Quatre caméras supplémentaires à l’entrepôt, tarifées 1 850 $, signées avant le début des travaux.',
  },
  {
    plain: 'Où en est le projet',
    pro: 'Rapport d’avancement',
    meaning: 'Un point court et régulier de ce qui est terminé, en cours, pas commencé et bloqué.',
    example: 'Câblage vert, caméras de la baie rouges, configuration orange.',
  },
  {
    plain: 'Le contrôle final avec le client',
    pro: 'Essai de réception',
    meaning: 'L’essai convenu qui prouve que le système fonctionne, signé par le client.',
    example: 'Parcourir les 16 caméras, l’enregistrement et la lecture avec le client à côté de vous.',
  },
  {
    plain: 'Remettre le système fini au client',
    pro: 'Livraison (remise)',
    meaning: 'Le transfert organisé du système terminé, de ses documents et de sa responsabilité.',
    example: 'Le dossier : numéros de série, mots de passe scellés, instructions, essais signés, garantie.',
  },
  {
    plain: 'Ce que nous avons appris pour la prochaine fois',
    pro: 'Retour d’expérience',
    meaning: 'Une liste courte, précise et actionnable de ce qu’il faut répéter et changer pour le prochain projet.',
    example: '« Commande l’enregistreur le jour de la signature du contrat. »',
  },
];