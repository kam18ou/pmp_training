import { useLang } from '../i18n/LangContext';
import type { Module, Workshop, Template, GlossaryEntry, AgendaDay, SimBeat, SpineSection } from '../types';
import { MODULES, STAGES } from './modules';
import { WORKSHOPS } from './workshops';
import { TEMPLATES } from './templates';
import { GLOSSARY } from './glossary';
import { AGENDA, AGENDA_COMPRESSED, POST_TRAINING_PLAN } from './agenda';
import { SIMULATION } from './simulation';
import { SPINE } from './spine';
import { MODULES_FR, STAGES_FR } from './fr/modules';
import { WORKSHOPS_FR } from './fr/workshops';
import { TEMPLATES_FR } from './fr/templates';
import { GLOSSARY_FR } from './fr/glossary';
import { AGENDA_FR, AGENDA_COMPRESSED_FR, POST_TRAINING_PLAN_FR } from './fr/agenda';
import { SIMULATION_FR } from './fr/simulation';
import { SPINE_FR } from './fr/spine';
import { MODULES_AR, STAGES_AR } from './ar/modules';
import { WORKSHOPS_AR } from './ar/workshops';
import { TEMPLATES_AR } from './ar/templates';
import { GLOSSARY_AR } from './ar/glossary';
import { AGENDA_AR, AGENDA_COMPRESSED_AR, POST_TRAINING_PLAN_AR } from './ar/agenda';
import { SIMULATION_AR } from './ar/simulation';
import { SPINE_AR } from './ar/spine';

export interface LocalizedStage {
  key: Module['stage'];
  name: string;
  color: string;
  blurb: string;
}

export interface LocalizedData {
  modules: Module[];
  stages: LocalizedStage[];
  workshops: Workshop[];
  templates: Template[];
  glossary: GlossaryEntry[];
  agenda: AgendaDay[];
  agendaCompressed: AgendaDay[];
  postTraining: { window: string; action: string }[];
  simulation: SimBeat[];
  spine: SpineSection[];
}

export function useData(): LocalizedData {
  const { lang } = useLang();

  if (lang === 'fr') {
    return {
      modules: MODULES_FR,
      stages: STAGES_FR.map((s) => ({
        ...s,
        color: STAGES.find((x) => x.key === s.key)!.color,
      })),
      workshops: WORKSHOPS_FR,
      templates: TEMPLATES_FR,
      glossary: GLOSSARY_FR,
      agenda: AGENDA_FR,
      agendaCompressed: AGENDA_COMPRESSED_FR,
      postTraining: POST_TRAINING_PLAN_FR,
      simulation: SIMULATION_FR,
      spine: SPINE_FR,
    };
  }

  if (lang === 'ar') {
    return {
      modules: MODULES_AR,
      stages: STAGES_AR.map((s) => ({
        ...s,
        color: STAGES.find((x) => x.key === s.key)!.color,
      })),
      workshops: WORKSHOPS_AR,
      templates: TEMPLATES_AR,
      glossary: GLOSSARY_AR,
      agenda: AGENDA_AR,
      agendaCompressed: AGENDA_COMPRESSED_AR,
      postTraining: POST_TRAINING_PLAN_AR,
      simulation: SIMULATION_AR,
      spine: SPINE_AR,
    };
  }

  return {
    modules: MODULES,
    stages: STAGES,
    workshops: WORKSHOPS,
    templates: TEMPLATES,
    glossary: GLOSSARY,
    agenda: AGENDA,
    agendaCompressed: AGENDA_COMPRESSED,
    postTraining: POST_TRAINING_PLAN,
    simulation: SIMULATION,
    spine: SPINE,
  };
}