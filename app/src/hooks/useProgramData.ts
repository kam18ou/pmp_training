import { useI18n } from './useI18n';
import type { ProgramData, ViewKey } from '../types';
import raw from '../data/raw.json';
import { PROGRAM_FR } from '../data/fr';
import { PROGRAM_AR } from '../data/ar';

const en = raw as unknown as ProgramData;

export function useProgramData(): ProgramData {
  const { lang } = useI18n();
  if (lang === 'fr') return PROGRAM_FR;
  if (lang === 'ar') return PROGRAM_AR;
  return en;
}

export const NAV_GROUPS: { labelKey: string; items: { key: ViewKey; labelKey: string; icon: string }[] }[] = [
  {
    labelKey: 'nav.overview',
    items: [
      { key: 'dashboard', labelKey: 'nav.dashboard', icon: '▦' },
      { key: 'modules', labelKey: 'nav.curriculum', icon: '▣' },
      { key: 'workshops', labelKey: 'nav.workshops', icon: '⚙' },
    ],
  },
  {
    labelKey: 'nav.referenceLibrary',
    items: [
      { key: 'templates', labelKey: 'nav.templates', icon: '▤' },
      { key: 'pocket-cards', labelKey: 'nav.pocketCards', icon: '▦' },
      { key: 'kpis', labelKey: 'nav.kpis', icon: '◈' },
    ],
  },
  {
    labelKey: 'nav.interactiveTools',
    items: [
      { key: 'bid-scorecard', labelKey: 'nav.bidScorecard', icon: '⚖' },
      { key: 'change-order', labelKey: 'nav.changeOrder', icon: '✎' },
      { key: 'risk-register', labelKey: 'nav.riskRegister', icon: '⚠' },
      { key: 'margin-calculator', labelKey: 'nav.marginCalculator', icon: '＄' },
    ],
  },
  {
    labelKey: 'nav.simulation',
    items: [
      { key: 'capstone', labelKey: 'nav.capstone', icon: '🚀' },
      { key: 'assessment', labelKey: 'nav.assessment', icon: '✓' },
      { key: 'maturity', labelKey: 'nav.maturity', icon: '📈' },
    ],
  },
];

export const VIEW_TITLE_KEYS: Record<ViewKey, string> = {
  dashboard: 'viewTitles.dashboard',
  modules: 'viewTitles.modules',
  'module-detail': 'viewTitles.module-detail',
  workshops: 'viewTitles.workshops',
  'workshop-detail': 'viewTitles.workshop-detail',
  templates: 'viewTitles.templates',
  'pocket-cards': 'viewTitles.pocket-cards',
  kpis: 'viewTitles.kpis',
  'bid-scorecard': 'viewTitles.bid-scorecard',
  'change-order': 'viewTitles.change-order',
  'risk-register': 'viewTitles.risk-register',
  'margin-calculator': 'viewTitles.margin-calculator',
  capstone: 'viewTitles.capstone',
  assessment: 'viewTitles.assessment',
  maturity: 'viewTitles.maturity',
};
