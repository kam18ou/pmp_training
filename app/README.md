# PMP Formation — Interactive Training Web App

The full **Practical Project Management Training Program for Technical SMEs** as an interactive
single-page application, generated directly from the master curriculum.

## Quick Start

```bash
cd "D:\PMP Formation\app"
npm install      # first time only
npm run dev      # starts dev server at http://localhost:5173
```

Build for production (outputs to `dist/`):

```bash
npm run build    # type-checks + bundles
npm run preview  # serves the production build
```

## What's Inside

**Content views** — all parsed programmatically from `SME_Project_Management_Master_Program.md`,
so the app can never drift from the source curriculum:

- **Dashboard** — program overview, progress stats, 8-phase lifecycle map
- **Curriculum** — all 10 modules with concepts, pedagogical sequences, and completion tracking
- **Workshops** — all 22 workshops with search/filter, full anatomy (scenario, objectives, roles,
  tasks, deliverables, facilitator guide, common mistakes, 4-tier rubric, Monday-morning transfer)
- **Templates** — all 31 reusable templates with required fields
- **Pocket Cards** — all 8 field job aids
- **KPIs** — all 18 operational KPIs with formulas, targets, and corrective-action triggers

**Interactive tools** (the reason this is an app, not a document):

- **Bid / No-Bid Scorecard** — 10-criteria weighted scoring with live verdict (must bid /
  conditional / strict no-bid)
- **Change Order Pricer** — prices extra work at full margin, labor + materials + subcontract
- **Risk Register** — add risks, score probability × impact, auto-sorted by severity
- **Margin Calculator** — fully burdened labor rate, margin on price (not cost), break-even
- **Project Titan Capstone** — playable 5-round decision simulation with injects (equipment delay,
  safety incident, failed inspection, scope creep), scoring, and round-by-round debrief
- **Field Assessment** — 8 diagnostic scenarios with answer review and tier scoring
- **Maturity Self-Assessment** — 8-dimension rating producing your maturity level and the
  corresponding 90-day improvement priority

Progress persists in the browser via `localStorage` — module/workshop completion, tool runs, and
best scores survive a refresh.

## Architecture

```
app/
├── parse-program.ts     # markdown → structured JSON (run after curriculum edits)
├── src/
│   ├── data/raw.json    # parsed curriculum (660 KB, do not hand-edit)
│   ├── hooks/           # data access + localStorage progress tracking
│   ├── components/      # layout, sidebar, shared UI
│   ├── views/           # content views (dashboard, modules, workshops, ...)
│   └── tools/           # interactive tools + simulations
└── vite.config.ts
```

**Regenerating content after curriculum changes:**

```bash
node --experimental-strip-types parse-program.ts
```

This re-parses the master program and overwrites `src/data/raw.json`. The parser validates
completeness — every workshop must have scenario, objectives, tasks, rubric, and transfer fields,
or it reports the gap.

## Tech Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4
- Zero runtime dependencies beyond React — all state is client-side
