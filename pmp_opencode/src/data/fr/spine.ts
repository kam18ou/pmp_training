import type { SpineSection } from '../../types';

export const SPINE_FR: SpineSection[] = [
  { title: 'Informations projet', icon: '◈', moduleId: 1, templateIds: [1], lines: [
    'Projet : installation de vidéosurveillance de bureaux — Northgate Ltd.',
    'Client : Samira Okon, responsable des installations.',
    'Site : 14 Merlin Road, Northgate — 3 étages + entrepôt de 400 m².',
    'Chef de projet : Karim. Équipe : équipe A (2 techniciens), Amel (coordinatrice).',
    'Début 3 juin · Système opérationnel le 18 juin · Inventaire 20 juin.',
  ]},
  { title: 'Exigences client', icon: '💬', moduleId: 2, templateIds: [2], lines: [
    'Déclencheur : des outils ont disparu de l’entrepôt en mai.',
    'Couvrir : entrepôt, baie de chargement, porte arrière, réception, bureaux.',
    'L’ancien DVR 4 caméras est mort — à remplacer, pas à réutiliser.',
    'Accès distant nécessaire, depuis le téléphone du propriétaire.',
    'Fonctionnement obligatoire avant l’inventaire du 20 juin.',
  ]},
  { title: 'Étude de site', icon: '🗺', moduleId: 3, templateIds: [3], lines: [
    '16 positions de caméras marquées sur 3 étages + entrepôt.',
    'Baie : salle serveurs étage 1, 2U libres, alimentation disponible.',
    'Plus long câblage : baie de chargement → baie = 62 m.',
    'Contrainte : entrepôt fermé pour nous de 09 h à 11 h (chariots élévateurs).',
    'Chaque position photographiée et mesurée.',
  ]},
  { title: 'Périmètre', icon: '▦', moduleId: 4, templateIds: [4], lines: [
    'Inclus : 16 caméras, enregistreur, 2 commutateurs, stockage, câblage, installation, configuration, essais, formation.',
    'Non inclus : retrait de l’ancien DVR, travaux électriques, abonnement internet, dégagement de l’entrepôt, rénovation.',
    'Confirmé par le client avant la passation de la commande.',
  ]},
  { title: 'Liste des tâches', icon: '▤', moduleId: 5, templateIds: [5], lines: [
    '1 Étude · 2 Conception · 3 Commande · 4 Réception & contrôle · 5 Câblage',
    '6 Fixation caméras · 7 Enregistreur & commutateurs · 8 Configuration',
    '9 Essais · 10 Formation client · 11 Livraison.',
    'Onze tâches — chacune assez petite pour être finie par une personne.',
  ]},
  { title: 'Responsabilités', icon: '👤', moduleId: 6, templateIds: [6], lines: [
    'Étude, configuration, essais — Karim (ingénieur).',
    'Câblage et fixation — équipe A (2 techniciens).',
    'Formation utilisateurs et documentation — Amel (coordinatrice).',
    'Une tâche, un nom. Remplaçants convenus à l’avance.',
  ]},
  { title: 'Matériel', icon: '📦', moduleId: 7, templateIds: [7], lines: [
    'Équipement : 16 caméras IP, enregistreur 32 canaux, 2 commutateurs PoE, stockage 8 To.',
    'Matériaux : 4 boîtes Cat6, connecteurs, liens, étiquettes, baie murale 6U.',
    'Outillage : pince à sertir, testeur, 2 échelles, ordinateur portable.',
    'Documents : plan, fiche d’exigences, feuille de périmètre.',
  ]},
  { title: 'Planning', icon: '📅', moduleId: 8, templateIds: [8], lines: [
    'Lun s1 : étude + conception. Mar : livraison et contrôle.',
    'Mer : câblage. Jeu : fixation caméras + baie. Ven : configuration.',
    'Lun s2 : essais. Mar s2 : formation + livraison.',
    'Tampon : vendredi après-midi, laissé vide. Enregistreur commandé le jour 1 (délai 2 semaines).',
  ]},
  { title: 'Budget', icon: '＄', moduleId: 10, templateIds: [10], lines: [
    'Équipement et matériaux : 11 400 $.',
    'Main-d’œuvre (taux chargé) : 6 900 $. Autres : 400 $.',
    'Coût total : 18 700 $. Prix : 24 500 $.',
    'Marge 23,7 % — sous l’objectif de 28 % ; prix ajusté avant envoi.',
  ]},
  { title: 'Registre des risques', icon: '⚠', moduleId: 11, templateIds: [11], lines: [
    'RISQUE : commutateurs en rupture → commande scindée, second fournisseur identifié (responsable : Amel).',
    'RISQUE : accès entrepôt 09–11 → câblage déplacé aux après-midis (responsable : Karim).',
    'PROBLÈME : baie de chargement bloquée par des palettes → client invité à dégager d’ici jeudi.',
    'Chaque entrée a une réponse et un propriétaire — jamais juste une inquiétude.',
  ]},
  { title: 'Avenants', icon: '✎', moduleId: 12, templateIds: [12], lines: [
    'Demande : 4 caméras supplémentaires au fond de l’entrepôt.',
    'Ajoute : 4 caméras, 90 m de câble, configuration — un jour de plus.',
    'Effet : la fin passe de mardi à mercredi.',
    'Prix 1 850 $. Signé par le client avant le début des travaux.',
  ]},
  { title: 'Résultats d’essais', icon: '✓', moduleId: 15, templateIds: [15], lines: [
    'Les 16 caméras en direct au bon angle — réussi.',
    'Enregistrement, lecture, stockage, accès distant — réussi.',
    'L’utilisateur trouve un extrait sans aide — réussi.',
    'Signé par le client le jour de la livraison.',
  ]},
  { title: 'Dossier de livraison', icon: '🗂', moduleId: 16, templateIds: [16], lines: [
    'Liste du matériel avec numéros de série.',
    'Adresses IP et mots de passe, scellés et signés sur le rabat.',
    'Deux pages d’instructions, essais signés, garantie, date de maintenance, contact du support.',
    'Remis en mains propres — avec une visite guidée de 15 minutes pour l’utilisateur réel.',
  ]},
  { title: 'Clôture et leçons', icon: '🎓', moduleId: 17, templateIds: [17, 18], lines: [
    'Acceptation signée le 18 juin. Facture finale envoyée le 19 juin.',
    'Retenue de 10 % sur 12 mois, notée au calendrier.',
    'Leçon 1 : commander l’enregistreur le jour de la signature du contrat.',
    'Leçon 2 : vérifier les horaires d’accès à l’entrepôt avant de planifier le câblage.',
    'Leçon 3 : envoyer le rapport quotidien avec photos — le client a cessé d’appeler deux fois par jour.',
  ]},
];