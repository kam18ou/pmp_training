import type { AgendaDay } from '../../types';

export const AGENDA_FR: AgendaDay[] = [
  {
    day: 1,
    title: 'Comprendre les projets et le client',
    modules: [1, 2, 3],
    close: 'Atelier 3 — une vraie liste de contrôle de visite sur un vrai plan de bâtiment.',
  },
  {
    day: 2,
    title: 'Définir et organiser le travail',
    modules: [4, 5, 6, 7],
    close: 'Le projet fil conducteur a un périmètre, des tâches, des responsables et une liste de matériel.',
  },
  {
    day: 3,
    title: 'Planning, approvisionnement et argent',
    modules: [8, 9, 10],
    close: 'Le projet fil conducteur a un planning d’une semaine et un budget honnête.',
  },
  {
    day: 4,
    title: 'Mener le travail et gérer les surprises',
    modules: [11, 12, 13, 14],
    close: 'Première injection, gérée en direct : un retard fournisseur et un avenant client.',
  },
  {
    day: 5,
    title: 'Qualité, livraison et la simulation complète',
    modules: [15, 16, 17],
    close: 'Simulation finale — le dossier projet fil conducteur complet, remis.',
  },
];

export const AGENDA_COMPRESSED_FR: AgendaDay[] = [
  {
    day: 1,
    title: 'Projets, clients et la visite',
    modules: [1, 2, 3, 4],
    close: 'Une liste de contrôle de visite remplie et une feuille de périmètre à deux colonnes.',
  },
  {
    day: 2,
    title: 'Organiser le travail',
    modules: [5, 6, 7, 8, 9, 10],
    close: 'Le projet fil conducteur a des tâches, des responsables, du matériel, un planning et un budget.',
  },
  {
    day: 3,
    title: 'Exécution et la simulation complète',
    modules: [11, 12, 13, 14, 15, 16, 17],
    close: 'Simulation finale — jamais compressée, c’est l’évaluation.',
  },
];

export const POST_TRAINING_PLAN_FR: { window: string; action: string }[] = [
  { window: 'Jours 1–30', action: 'Utilisez les modèles 4 (périmètre), 12 (avenant) et 13 (rapport quotidien) sur le prochain projet en cours.' },
  { window: 'Jours 31–60', action: 'Ajoutez les modèles 5 (tâches), 6 (responsabilités) et 8 (planning) à chaque nouvelle mission.' },
  { window: 'Jours 61–90', action: 'Menez une session de retour d’expérience interne avec le modèle 18, et relisez-la avant le prochain lancement.' },
];