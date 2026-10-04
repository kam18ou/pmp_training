/**
 * parse-program.ts
 * Parses the master training program markdown into structured JSON.
 * Run: node --experimental-strip-types parse-program.ts  (Node 24 supports TS strip)
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE = path.resolve(__dirname, '..', 'SME_Project_Management_Master_Program.md');
const OUT_DIR = path.resolve(__dirname, '..', 'app', 'src', 'data');
const RAW_OUT = path.join(OUT_DIR, 'raw.json');

type Workshop = {
  id: number;
  title: string;
  phase: string;
  line: string;
  level: string;
  duration: string;
  groupSize: string;
  prerequisite: string;
  scenario: string;
  objectives: string[];
  roles: string[];
  inputs: string[];
  tasks: string[];
  deliverables: string;
  facilitator: string;
  mistakes: string[];
  rubric: { tier: string; desc: string }[];
  transfer: string;
  variations: { small: string; large: string };
  raw: string;
};

type Module = {
  id: string;
  title: string;
  duration: string;
  phase: string;
  goal: string;
  pmbok: string;
  concepts: string[];
  sequence: { concept: string; example: string; problem: string; workshop: string; deliverable: string; application: string };
  raw: string;
};

type Template = {
  id: string;
  name: string;
  purpose: string;
  fields: string[];
  example: string;
  raw: string;
};

type KPI = { num: number; name: string; formula: string; target: string; trigger: string };

type PocketCard = { num: number; title: string; lines: string[] };

function readLines(): string[] {
  const text = fs.readFileSync(SOURCE, 'utf-8');
  return text.replace(/\r\n/g, '\n').split('\n');
}

/** Strip markdown emphasis + list markers to plain prose. */
function clean(s: string): string {
  return s
    .replace(/^[-*]\s+/, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/^"|"$/g, '')
    .trim();
}

/** Strip a leading "Label:" prefix (e.g. "Realistic Scenario: ..."). */
function stripLabel(s: string): string {
  return s.replace(/^[A-Z][A-Za-z /&,().-]{2,40}:\s*/, '').trim();
}

function untilBlank(lines: string[], start: number, opts: { bulletOnly?: boolean } = {}): string[] {
  const out: string[] = [];
  for (let i = start; i < lines.length; i++) {
    const l = lines[i];
    if (l.trim() === '') break;
    if (opts.bulletOnly && !/^\s*[-*]\s+/.test(l)) break;
    out.push(clean(l));
  }
  return out;
}

function findLine(lines: string[], from: number, to: number, prefix: string): number {
  for (let i = from; i < to; i++) if (lines[i].startsWith(prefix)) return i;
  return -1;
}

function parseWorkshops(lines: string[]): Workshop[] {
  const workshops: Workshop[] = [];
  const heads: { ln: number; id: number; title: string }[] = [];
  lines.forEach((l, i) => {
    const m = l.match(/^## WORKSHOP (\d+):\s*(.+)$/);
    if (m) heads.push({ ln: i, id: +m[1], title: m[2].trim() });
  });

  for (let h = 0; h < heads.length; h++) {
    const { ln, id, title } = heads[h];
    const end = h + 1 < heads.length ? heads[h + 1].ln : ln + 300;
    const block = lines.slice(ln, end);
    const raw = block.join('\n');

    const get = (prefix: string): string => {
      const i = findLine(block, 0, block.length, prefix);
      if (i < 0) return '';
      return stripLabel(clean(block[i]));
    };
    const getList = (prefix: string): string[] => {
      const i = findLine(block, 0, block.length, prefix);
      if (i < 0) return [];
      // capture indented sub-bullets and following numbered list
      const out: string[] = [];
      for (let j = i + 1; j < block.length; j++) {
        const l = block[j];
        if (l.trim() === '') continue;
        // stop at the next bolded field label (a new property, not a list item)
        if (/^\s*[-*]\s+\*\*/.test(l)) break;
        const bm = l.match(/^\s*(?:[-*]|\d+\.)\s+(.*)$/);
        if (bm) { out.push(stripLabel(clean(bm[1]))); continue; }
        if (/^\s{2,}\S/.test(l) && out.length) { out[out.length - 1] += ' ' + clean(l); continue; }
        if (out.length) break;
      }
      return out;
    };

    const scenario = get('- **Realistic Scenario:**');
    const objectives = getList('- **Learning Objectives (Observable):**');
    const roles = getList('- **Group Size & Roles:**');
    const inputs = getList('- **Inputs & Artifacts Provided:**');
    let tasks = getList('- **The Task');
    if (!tasks.length) {
      // some workshops state the task as one inline sentence: "- **The Task (per day):** Do X; Y; Z."
      const ti = findLine(block, 0, block.length, '- **The Task');
      if (ti >= 0) {
        const sentence = stripLabel(clean(block[ti]));
        if (sentence) tasks = sentence.split(/(?<=[;.])\s+/).map((s) => s.trim()).filter(Boolean);
      }
    }
    const mistakes = getList('- **3 Most Common Field Mistakes & Debrief:**');
    const transfer = get('- **So What Monday Morning Transfer:**');

    let variations = { small: '', large: '' };
    const vi = findLine(block, 0, block.length, '- **Variations');
    if (vi >= 0) {
      for (let j = vi + 1; j < block.length; j++) {
        const l = block[j];
        const sm = l.match(/5-Person/) || l.match(/\*5-Person/);
        if (sm) variations.small = clean(l.replace(/^.*Shop:\*?\*?\s*/, ''));
        if (/30-Person/.test(l)) variations.large = clean(l.replace(/^.*Firm:\*?\*?\s*/, ''));
        if (l.trim() === '' && (variations.small || variations.large)) break;
      }
    }

    const rubric: { tier: string; desc: string }[] = [];
    const ri = findLine(block, 0, block.length, '- **Assessment Rubric');
    if (ri >= 0) {
      for (let j = ri + 1; j < block.length; j++) {
        const l = block[j];
        if (l.trim() === '') { if (rubric.length) break; continue; }
        // source marks tiers as *1 (Deficient):* — match on the raw line
        const rm = l.match(/\*?\*?([1-4])\s*\(([^)]+)\)\*?\*?:?\s*(.*)$/);
        if (rm) rubric.push({ tier: rm[2], desc: stripLabel(clean(rm[3])) });
      }
    }

    workshops.push({
      id, title,
      phase: get('- **Lifecycle Phase:**'),
      line: get('- **Business Line:**'),
      level: '',
      duration: get('- **Duration & Pacing:**'),
      groupSize: get('- **Group Size & Roles:**').split(':')[0],
      prerequisite: get('- **Prerequisite Module:**'),
      scenario,
      objectives,
      roles,
      inputs,
      tasks,
      deliverables: get('- **Expected Deliverables Produced:**'),
      facilitator: get('- **Facilitator Guide & Guiding Prompts:**'),
      mistakes,
      rubric,
      transfer,
      variations,
      raw,
    });
  }
  return workshops;
}

function parseModules(lines: string[]): Module[] {
  const modules: Module[] = [];
  const heads: { ln: number; id: string; title: string }[] = [];
  lines.forEach((l, i) => {
    const m = l.match(/^## MODULE (\d+)(?:\s*\([^)]*\))?:\s*(.+)$/);
    if (m) heads.push({ ln: i, id: m[1], title: m[2].trim() });
  });

  for (let h = 0; h < heads.length; h++) {
    const { ln, id, title } = heads[h];
    const end = h + 1 < heads.length ? heads[h + 1].ln : ln + 200;
    const block = lines.slice(ln, end);
    const raw = block.join('\n');

    const get = (prefix: string): string => {
      const i = findLine(block, 0, block.length, prefix);
      return i >= 0 ? clean(block[i]) : '';
    };

    // numbered concept list under "### 1. Essential Concepts"
    const concepts: string[] = [];
    const ci = block.findIndex((l) => /^### 1\.\s/.test(l));
    if (ci >= 0) {
      for (let j = ci + 1; j < block.length; j++) {
        const l = block[j];
        if (/^###\s/.test(l)) break;
        const m = l.match(/^\s*(\d+)\.\s+(.*)$/);
        if (m) concepts.push(clean(m[2]));
      }
    }

    // pedagogical sequence under "### 2. Pedagogical Sequence"
    const seq = { concept: '', example: '', problem: '', workshop: '', deliverable: '', application: '' };
    const si = block.findIndex((l) => /^### 2\.\s/.test(l));
    if (si >= 0) {
      for (let j = si + 1; j < block.length; j++) {
        const l = block[j];
        if (/^###\s/.test(l)) break;
        if (l.startsWith('- **Concept:**')) seq.concept = clean(l);
        if (l.startsWith('- **Technical Example:**')) seq.example = clean(l);
        if (l.startsWith('- **Business Problem:**')) seq.problem = clean(l);
        if (l.startsWith('- **Integrated Workshop:**')) seq.workshop = clean(l);
        if (l.startsWith('- **Deliverable Produced:**')) seq.deliverable = clean(l);
        if (l.startsWith('- **Field Application:**')) seq.application = clean(l);
      }
    }

    modules.push({
      id,
      title,
      duration: get('- **Target Duration:**'),
      phase: get('- **Lifecycle Phase:**'),
      goal: get('- **Phase Goal:**'),
      pmbok: get('- **PMBOK Alignment:**'),
      concepts,
      sequence: seq,
      raw,
    });
  }
  return modules;
}

function parseTemplates(lines: string[]): Template[] {
  const templates: Template[] = [];
  const heads: { ln: number; id: string; name: string }[] = [];
  lines.forEach((l, i) => {
    const m = l.match(/^###\s+TEMPLATE\s+(\d+):\s*(.+)$/i);
    if (m) heads.push({ ln: i, id: m[1], name: m[2].trim() });
  });

  for (let h = 0; h < heads.length; h++) {
    const { ln, id, name } = heads[h];
    const end = h + 1 < heads.length ? heads[h + 1].ln : ln + 120;
    const block = lines.slice(ln, end);

    const get = (prefix: string): string => {
      const i = findLine(block, 0, block.length, prefix);
      return i >= 0 ? clean(block[i]) : '';
    };

    const fields: string[] = [];
    const fi = block.findIndex((l) => /Required Fields/i.test(l));
    if (fi >= 0) {
      for (let j = fi + 1; j < block.length; j++) {
        const l = block[j];
        if (l.trim() === '') { if (fields.length) break; continue; }
        const m = l.match(/^\s*(?:[-*]|\d+\.)\s+(.*)$/);
        if (m) fields.push(clean(m[1]));
        else if (fields.length) break;
      }
    }

    templates.push({
      id,
      name,
      purpose: get('- **Purpose:**'),
      fields,
      example: '',
      raw: block.join('\n'),
    });
  }
  return templates;
}

function parseKPIs(lines: string[]): KPI[] {
  const kpis: KPI[] = [];
  let inTable = false;
  for (const l of lines) {
    if (/^\| KPI #/.test(l)) { inTable = true; continue; }
    if (inTable) {
      if (l.trim() === '' || !l.startsWith('|')) { inTable = false; continue; }
      const cells = l.split('|').map((c) => c.trim()).filter(Boolean);
      if (cells.length >= 5) {
        const num = parseInt(cells[0].replace(/\D/g, ''), 10);
        if (!isNaN(num)) kpis.push({
          num,
          name: cells[1].replace(/\*\*/g, ''),
          formula: cells[2],
          target: cells[3].replace(/\*\*/g, ''),
          trigger: cells[4],
        });
      }
    }
  }
  return kpis;
}

function parsePocketCards(lines: string[]): PocketCard[] {
  const cards: PocketCard[] = [];
  let current: PocketCard | null = null;
  // Marker-driven (not fence-driven): a stray fence earlier in the file can desync
  // fence-state counting, so we key off the "POCKET CARD N:" header itself.
  for (const l of lines) {
    const m = l.match(/POCKET CARD (\d+):\s*(.*)/);
    if (m) {
      if (current && current.lines.length) cards.push(current);
      current = { num: +m[1], title: m[2].trim(), lines: [] };
      continue;
    }
    if (!current) continue;
    const t = l.trim();
    if (!t) continue;
    // skip box-drawing borders and rule lines
    if (/^[┌├└─┬┴┼┤│]/.test(t) && /^[\u2500-\u257F\s]*$/.test(t)) continue;
    // stop at the closing fence
    if (/^```/.test(t)) { if (current.lines.length) { cards.push(current); current = null; } continue; }
    current.lines.push(t.replace(/[│]/g, '').trim());
  }
  if (current && current.lines.length) cards.push(current);
  return cards;
}

function main() {
  const lines = readLines();
  console.log(`source lines: ${lines.length}`);

  const workshops = parseWorkshops(lines);
  const modules = parseModules(lines);
  const templates = parseTemplates(lines);
  const kpis = parseKPIs(lines);
  const cards = parsePocketCards(lines);

  console.log(`workshops: ${workshops.length}`);
  console.log(`modules: ${modules.length}`);
  console.log(`templates: ${templates.length}`);
  console.log(`kpis: ${kpis.length}`);
  console.log(`pocket cards: ${cards.length}`);

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const payload = { workshops, modules, templates, kpis, cards, generatedAt: new Date().toISOString() };
  fs.writeFileSync(RAW_OUT, JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`wrote ${RAW_OUT} (${(fs.statSync(RAW_OUT).size / 1024).toFixed(1)} KB)`);
}

main();
