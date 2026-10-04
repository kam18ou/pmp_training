import type { Workshop } from '../../types';

export const WORKSHOPS_AR_B: Workshop[] = [
  {
    id: 12,
    title: 'إغلاق المشروع الكامل: قائمة المعاينة الختامية، ومخططات الواقع المنفذ، وتسليم الضمان والتسوية المالية',
    phase: 'المرحلة 7 — الإغلاق وتسليم الضمان',
    line: 'الأنظمة المتكاملة (أنظمة المراقبة CCTV + التحكم بالدخول + الكابلات المنظمة)',
    level: '',
    duration: '120 Minutes (20m The Economics of الإغلاق النهائي, 45m قائمة المعاينة الختامية & التسليم النهائي Package Assembly, 35m Financial Reconciliation & SLA Pitch, 20m Debrief).',
    groupSize: '3 to 4 participants per team',
    prerequisite: 'Module 7 (الإغلاق النهائي & SLA Transition).',
    scenario: 'A $145,000 corporate facility integration project is physically installed and operating, but the project is officially stalled in "الإغلاق النهائي Purgatory":',
    objectives: [
      'Execute the "Zero-Punch-List" triage protocol to negotiate, isolate, and eliminate الإغلاق النهائي disputes within 7 business days.',
      'Assemble a gold-standard Project التسليم النهائي Dossier (مخططات الواقع المنفَّذ, Fluke test certs, backup configs, O&M manuals).',
      'Perform a comprehensive Financial Reconciliation calculating final actual gross margin vs. original bid خط الأساس.',
      'Lead a structured Lessons Learned Post-Mortem and successfully present an Annual Maintenance SLA.'
    ],
    roles: [
      'Contractor Senior PM (resolves punch items, demands final acceptance and نسبة الاحتجاز release).',
      'Client Facilities Director (reluctant to sign, raising minor cosmetic issues to delay final payment).',
      'Contractor Lead Technician (executes punch items, presents cable test results and مخططات الواقع المنفَّذ drawings).',
      'Company Owner / Finance Lead (analyzes job profitability and negotiates the maintenance agreement).'
    ],
    inputs: [
      'Disputed 18-item قائمة المعاينة الختامية from client.',
      'Redline architectural floor plans and Fluke Versiv cable certification summary.',
      'Final project job-cost ledger (actual labor hours, actual material invoices, rental receipts).'
    ],
    tasks: [
      'Audit the client\'s 18 punch items: Categorize them into Legitimate Warranty Items vs. Unbilled Out-of-Scope Requests (e.g., the unpainted drywall where existing plaster cracked).',
      'Draft a signed قائمة المعاينة الختامية Resolution Protocol with fixed 72-hour completion commitments.',
      'Calculate Final Labor Cost, Material Cost, Gross Profit ($), and Gross Margin (%), comparing it to the 35% bid target.',
      'Formulate the 1-Page Annual Maintenance Agreement (Gold / Silver tiers) and present it during the final التسليم النهائي meeting.'
    ],
    deliverables: 'Signed Certificate of Final Acceptance, Formal قائمة المعاينة الختامية Clearance Log, Job Cost Reconciliation Sheet, and Maintenance SLA Proposal.',
    facilitator: '',
    mistakes: [
      'Leaving the jobsite when physical work is done without holding a formal sign-off walkthrough. Debrief: Show how unresolved الإغلاق النهائيs drag on for months, destroying contractor cash flow.',
      'Delivering sloppy, hand-scrawled مخططات الواقع المنفَّذ drawings. Debrief: Demonstrate that clean digital مخططات الواقع المنفَّذ build professional authority and make future service calls profitable.',
      'Walking away without pitching an annual maintenance agreement. Debrief: Show that an existing install is 5x easier to sell an SLA to than a cold prospect.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Cannot resolve قائمة المعاينة الختامية; agrees to do free cosmetic building repairs; fails to collect نسبة الاحتجاز.'
      },
      {
        tier: 'Developing',
        desc: 'Resolves قائمة المعاينة الختامية but fails to perform financial reconciliation or offer an SLA.'
      },
      {
        tier: 'Proficient',
        desc: 'Successfully negotiates Substantial Completion; clears قائمة المعاينة الختامية in 72 hours; reconciles job margin; presents SLA.'
      },
      {
        tier: 'Exemplary',
        desc: 'Collects 100% of final cash and نسبة الاحتجاز within 5 business days, while closing a $12,000/year multi-year maintenance agreement.'
      }
    ],
    transfer: 'Create a standard "التسليم النهائي Binder Template" (digital and physical). No project is marked closed in accounting until the Certificate of Acceptance is signed and the SLA proposal is delivered.',
    variations: {
      small: 'Owner personally leads the punch walk with the Facilities Director to collect the check on site.',
      large: 'Service Department Manager attends the الإغلاق النهائي walk to facilitate seamless transition to the recurring service team.'
    }
  },
  {
    id: 13,
    title: 'SITE SURVEY & TECHNICAL ASSESSMENT FOR ENTERPRISE WI-FI & INDUSTRIAL WAREHOUSE VIDEO',
    phase: 'المرحلة 1 — البدء ومعاينة الموقع',
    line: 'شبكة Wi-Fi الصناعية ونظام المراقبة بالفيديو للمستودعات العالية',
    level: '',
    duration: '105 Minutes (15m Industrial Environment Realities, 45m Floor Plan Annotation & Gap Discovery, 30m Survey Report Drafting, 15m Debrief).',
    groupSize: '3 to 4 participants per team',
    prerequisite: 'Module 1 (Initiation & معاينة الموقع).',
    scenario: 'A cold-storage logistics operator invites your company to survey a 75,000 sq ft distribution center containing:',
    objectives: [
      'Conduct a systematic technical معاينة الموقع using a standardized Industrial Assessment Protocol.',
      'Identify physical, environmental, and RF attenuation barriers (-20°F ratings, metal racking, high-voltage EMI).',
      'Formulate a comprehensive معاينة الموقع Findings Report with annotated photos, mounting heights, and cable pathway requirements.'
    ],
    roles: [
      'Senior Systems Surveyor / مُقدِّر التكاليف (identifies pathway obstacles, equipment environmental ratings).',
      'Lead Field Technician (evaluates scissor lift access, cold-weather cable jacket requirements, harness tie-offs).',
      'Warehouse Operations Manager (Client) (focused on forklift workflow, restricts lift access windows).'
    ],
    inputs: [
      '2D CAD architectural floor plan with deliberate errors and missing mezzanine details.',
      'Spec sheets for standard commercial vs. extreme-temp industrial cameras and APs.',
      'Comprehensive Industrial معاينة الموقع Checklist.'
    ],
    tasks: [
      'Audit the provided site plan and identify at least 7 critical technical omissions/risks.',
      'Select appropriate hardware specs (e.g., IP66/IP67 enclosures, internal heaters for -20°F, low-smoke zero-halogen/plenum cold-rated cable).',
      'Determine exact lift requirements (e.g., 34-ft electric narrow-aisle scissor lift vs. standard boom).',
      'Produce a professional معاينة الموقع Summary Report with clear recommendations and exclusionary assumptions.'
    ],
    deliverables: 'Redlined Industrial Survey Floor Plan, Environmental Equipment Selection Matrix, and معاينة الموقع Summary Report.',
    facilitator: '',
    mistakes: [
      'Specifying standard indoor APs and cameras in extreme thermal or moisture environments. Debrief: Show why industrial-grade hardware with integrated heaters and Gore-Tex breathers prevents endless warranty callbacks.',
      'Failing to check forklift mast heights against proposed camera/AP mounting elevations. Debrief: Show photos of cameras sheared off by forklift masts because they were mounted below 22 feet.',
      'Forgetting the cost of specialized cold-weather safety gear and lift battery depletion in freezing temps. Debrief: Account for 30% lower labor productivity in sub-zero environments.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Misses cold-storage constraints; proposes standard commercial hardware; fails to identify lift barriers.'
      },
      {
        tier: 'Developing',
        desc: 'Selects outdoor-rated hardware but fails to identify RF attenuation from metal racks and dense liquid inventory.'
      },
      {
        tier: 'Proficient',
        desc: 'Comprehensive environmental analysis; specifies correct IP-rated/heated enclosures; plans cable pathways around 480V lines.'
      },
      {
        tier: 'Exemplary',
        desc: 'Anticipates dock condensation issues; produces a flawless visual site report with thermal heat-map recommendations.'
      }
    ],
    transfer: 'Never submit a quote for an industrial, warehouse, or external site without completing the 3-page Industrial معاينة الموقع Checklist with minimum 15 timestamped site photos.',
    variations: {
      small: 'Lead installer conducts survey with smartphone checklist; reviews directly with owner.',
      large: 'Dedicated Pre-Sales Engineer coordinates with Field رئيس الطاقم for high-reach lift validation.'
    }
  },
  {
    id: 14,
    title: 'SUPPLIER QUOTATION ANALYSIS, BOM COMPARISON & LEAD-TIME OPTIMIZATION',
    phase: 'Phase 3 — Procurement & Vendor Governance',
    line: 'Multi-Vendor Hardware Procurement (Networks, CCTV, Access Control)',
    level: '',
    duration: '90 Minutes (15m Wholesale Distributor Dynamics & Pitfalls, 40m Quote Normalization & Scoring, 25m Hybrid Purchasing Strategy Defense, 10m Debrief).',
    groupSize: '3 to 4 participants per team',
    prerequisite: 'Module 3 (Procurement & Mobilization).',
    scenario: 'Your company is preparing to purchase $80,000 in hardware for a major commercial project. You receive three competing wholesale distributor quotations (Distributor A: Anixter/Wesco, Distributor B: ADI Global, Distributor C: Graybar/ScanSource) for a Bill of Materials comprising:',
    objectives: [
      'Evaluate multi-vendor supplier quotations across 6 weighted parameters (Price, Delivery Speed, Payment Terms, Technical Compliance, Warranty/RMA, Shipping Costs).',
      'Detect hidden technical non-compliances (e.g., Copper-Clad Aluminum vs. 100% Solid Bare Copper, grey-market warranties).',
      'Construct an optimized Hybrid Procurement Plan that protects project cash flow and Critical Path معلَمs.'
    ],
    roles: [
      'Procurement Manager / Office Administrator (manages distributor accounts, credit terms, and RMA policies).',
      'Project Manager / Lead Engineer (evaluates technical compliance, specs, and schedule impact).',
      'Company Financial Controller / Owner (protects cash flow, deposit exposure, and gross margin).'
    ],
    inputs: [
      '3 detailed distributor quotation sheets with itemized line prices, مهلة التوريدs, freight terms, and small-print conditions.',
      'Project specification sheet detailing mandatory TIA/EIA cabling standards and UL listings.',
      'Reusable Procurement Comparison Matrix template.'
    ],
    tasks: [
      'Normalize the three quotations into a standardized comparison matrix.',
      'Identify the fatal flaw in Distributor A\'s cable offering (CCA cable violates NEC/NFPA code and PoE safety standards).',
      'Split the BOM strategically across distributors to achieve the best balance of delivery speed, price, and credit terms.',
      'Calculate the financial impact on project gross margin.'
    ],
    deliverables: 'Completed Procurement Comparison Matrix, Vendor Risk Assessment, and Final Approved Purchase Order Plan.',
    facilitator: '',
    mistakes: [
      'Selecting distributors solely on lowest purchase price without factoring shipping freight or lead-time penalties. Debrief: Show how $500 saved on hardware resulted in $3,000 in technician downtime waiting for parts.',
      'Accepting grey-market or non-authorized distributor hardware that voids manufacturer warranties. Debrief: Emphasize verifying authorized partner status for enterprise products.',
      'Committing to large upfront deposits that starve the contractor of working capital. Debrief: Negotiate Net-30 credit terms based on project معلَم invoicing.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Selects Distributor A purely on price; fails to spot CCA wire hazard and 12-week switch delay.'
      },
      {
        tier: 'Developing',
        desc: 'Catches the cable issue but chooses the most expensive single vendor out of fear without optimizing.'
      },
      {
        tier: 'Proficient',
        desc: 'Normalizes quotes accurately; builds an optimized hybrid purchasing strategy; protects critical path.'
      },
      {
        tier: 'Exemplary',
        desc: 'Leverages Distributor B\'s stock against Distributor C\'s pricing to negotiate an additional 5% distributor discount with Net-45 terms.'
      }
    ],
    transfer: 'Whenever placing an equipment order over $10,000, run the 1-Page Procurement Comparison Matrix across at least two authorized distributors before issuing Purchase Orders.',
    variations: {
      small: 'Owner reviews the normalized comparison in 15 minutes before authorizing credit card charges.',
      large: 'Purchasing Coordinator executes the hybrid split POs under the PM\'s authorization.'
    }
  },
  {
    id: 15,
    title: 'DIFFICULT CUSTOMER MEETING & CONFLICT RESOLUTION: DELAYED HANDOVER & DISPUTED OUT-OF-SCOPE FEATURES',
    phase: 'Phase 4 / Phase 5 — Execution, أصحاب المصلحة Management & Conflict Resolution',
    line: 'Access Control, Intrusion Detection & Intercom Integration',
    level: '',
    duration: '120 Minutes (20m Conflict Psychology & De-escalation Techniques, 50m High-Stakes Confrontation Role-Play, 35m Reset Agreement Drafting, 15m Debrief).',
    groupSize: '3 to 4 participants per team',
    prerequisite: 'Module 4 (Execution & Comms) & Module 5 (Monitoring & Change Control).',
    scenario: 'You are the PM on a 16-door access control and multi-tenant video intercom project for a luxury high-rise condominium. The project is 3 weeks behind schedule, and the client\'s HOA Board President is furious.',
    objectives: [
      'De-escalate hostile client emotions using the 4-Step Professional Diffuse Model (Acknowledge -> Align on Facts -> Separate Scope -> Propose Path Forward).',
      'Defend contractual scope boundaries without becoming combative or defensive.',
      'Negotiate a formal Project Reset Agreement that settles schedule responsibility, prices the extra elevator work fairly, and restores customer trust.'
    ],
    roles: [
      'Contractor Senior PM / Owner (de-escalates, defends contract, maintains professional leadership).',
      'Furious HOA Board President (Client) (aggressive, demanding, feels misled, threatens legal action).',
      'Contractor Technical Lead / رئيس الطاقم (presents objective job logs, timeline dates, and elevator wiring realities).',
      'Neutral Mediator / Board Treasurer (practical, wants the building secured, concerned about cost and litigation).'
    ],
    inputs: [
      'Original signed contract showing the explicit "Elevator cab integration excluded" clause.',
      'Field daily logs detailing dates when elevator technicians failed to show up.',
      'Blank 1-Page Project Reset Agreement template.'
    ],
    tasks: [
      'Conduct the 20-minute simulated confrontation meeting. The PM must withstand aggressive verbal pressure without caving or shouting.',
      'Present the contractual exclusions calmly using objective evidence rather than emotion.',
      'Propose a win-win commercial compromise (e.g., provide elevator interface labor at a discounted rate in exchange for immediate release of progress billings and a revised completion schedule).',
      'Draft and sign the formal Project Reset Agreement & Action Plan.'
    ],
    deliverables: 'Project Reset Agreement, Signed Scope Clarification Addendum, and Updated Joint معلَم Timeline.',
    facilitator: '',
    mistakes: [
      'Becoming emotional and defensive, leading to a breakdown in communication and legal threats. Debrief: Show how emotional detachment and objective evidence disarm hostile clients.',
      'Caving completely and doing $6,500 of complex elevator integration for free. Debrief: Doing major out-of-scope work for free destroys contractor profitability and does not earn respect.',
      'Leaving the meeting without a signed written agreement, allowing the client to restart the dispute next week. Debrief: Always document and co-sign the meeting minutes and reset agreement before leaving the room.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Loses temper; argues with client; OR gives away all extra work for free out of fear.'
      },
      {
        tier: 'Developing',
        desc: 'Remains calm but fails to guide the client to a signed written compromise; dispute remains unresolved.'
      },
      {
        tier: 'Proficient',
        desc: 'De-escalates hostility effectively; uses contract documentation calmly; secures signed Reset Agreement with fair pricing.'
      },
      {
        tier: 'Exemplary',
        desc: 'Masterful executive composure; transforms the hostile confrontation into an expanded partnership, securing an annual service agreement for the entire complex.'
      }
    ],
    transfer: 'Whenever a project enters a dispute, stop email warfare. Call an immediate face-to-face Project Alignment Meeting armed with your signed Scope Statement and objective daily logs.',
    variations: {
      small: 'The company owner personally handles the negotiation.',
      large: 'The Operations Director attends alongside the PM to provide executive weight.'
    }
  },
  {
    id: 16,
    title: 'MAINTENANCE CONTRACT CONVERSION & SLA TRANSITION: TRANSFORMING A SCHOOL DISTRICT INSTALL INTO ARR',
    phase: 'Phase 7 — الإغلاق النهائي & Maintenance SLA Transition',
    line: 'Campus Network Infrastructure & Physical Security Maintenance',
    level: '',
    duration: '90 Minutes (15m The Power of Recurring Maintenance Revenue, 40m SLA Packaging & Margin Pricing, 25m التسليم النهائي Pitch Simulation, 10m Debrief).',
    groupSize: '3 to 4 participants per team',
    prerequisite: 'Module 7 (الإغلاق النهائي & SLA Transition).',
    scenario: 'Your company has just successfully completed a $180,000 network refresh and security integration across 4 schools in a public school district (80 Cat6A drops, 48 IP cameras, 12 access doors, 8 PoE switches). The installation was executed cleanly and the District IT Director is delighted.',
    objectives: [
      'Package installed systems into a tiered Service Level Agreement (Bronze, Silver, Gold) with clear operational boundaries.',
      'Price annual preventive maintenance, emergency response times, and spare-parts warehousing to achieve a 45%+ gross service margin.',
      'Deliver a persuasive Maintenance التسليم النهائي Presentation to the client during the final acceptance walk.'
    ],
    roles: [
      'Service Sales Manager / PM (packages the SLA, pitches the business value to the client).',
      'School District IT Director (Client) (values reliability, operates under fixed annual budgets, fears surprise repair costs).',
      'Contractor Service Operations Supervisor (ensures the SLA terms are operationally achievable without burning out field techs).'
    ],
    inputs: [
      'Installed equipment inventory sheet with serial numbers and manufacturer warranty end dates.',
      'Contractor historical service labor cost and dispatch data.',
      '3-Tier Maintenance SLA Agreement template.'
    ],
    tasks: [
      'Structure three maintenance tiers for the school district:',
      'Annual inspection + firmware updates + standard 48-hr business response.',
      'Bi-annual preventive inspection + 8-hr guaranteed emergency response + 15% labor discount on moves/adds/changes.',
      'Quarterly preventive maintenance + 4-hr 24/7 emergency response + on-site cold-spare pool + all labor included.',
      'Calculate the annual pricing for the Silver Tier: Determine technician hours required, overhead allocation, and ensure gross margin exceeds 45%.',
      'Role-play the التسليم النهائي & SLA Presentation to the IT Director.'
    ],
    deliverables: 'Complete 3-Tier Maintenance Agreement Proposal, Service Pricing & Margin Calculator, and Maintenance التسليم النهائي Protocol.',
    facilitator: '',
    mistakes: [
      'Offering vague "free warranty support" for 12 months, training the customer to call for unbillable user-error issues. Debrief: Clearly distinguish Manufacturer Warranty (defective parts) from Operational Support / Maintenance (configuration changes, cleaning, troubleshooting).',
      'Promising 2-hour response times without having on-call technician rotas or stocked spare parts. Debrief: Show how failing SLA response times leads to contractual penalties and canceled agreements.',
      'Selling maintenance as an afterthought via email 3 months after project close. Debrief: Enforce the rule: The SLA Proposal is delivered physically inside the Project التسليم النهائي Dossier.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Does not present maintenance options; leaves project with standard unbilled warranty obligations.'
      },
      {
        tier: 'Developing',
        desc: 'Presents a generic maintenance flyer without tailored tiers, equipment inventory, or clear pricing.'
      },
      {
        tier: 'Proficient',
        desc: 'Well-structured 3-tier SLA; accurate 45%+ margin pricing; delivers professional التسليم النهائي pitch.'
      },
      {
        tier: 'Exemplary',
        desc: 'Successfully packages an ongoing cloud backup / health-monitoring service into the Gold Tier, securing a 3-year signed recurring contract.'
      }
    ],
    transfer: 'Create a "Service التسليم النهائي Form" in your الإغلاق النهائي binder. Every PM must present a priced SLA proposal to the client alongside the final invoice.',
    variations: {
      small: 'Focus on Silver Tier with next-business-day response to prevent disrupting active installation crews.',
      large: 'Dedicated Service Division absorbs the contract with 24/7 on-call technician rotations.'
    }
  },
  {
    id: 17,
    title: 'MULTI-PROJECT RESOURCE DASHBOARD & PORTFOLIO CONFLICT RESOLUTION: 5 OVERLAPPING JOBS',
    phase: 'Phase 2 / Phase 5 — Multi-Project Operations & Portfolio Management',
    line: 'Multi-System SME Operations (IT, Cabling, CCTV, Fire Alarm)',
    level: '',
    duration: '105 Minutes (15m Multi-Project Friction in SMEs, 45m Resource Conflict Analysis & Re-Allocation, 30m Client Negotiation & Rescheduling Role-Play, 15m Debrief).',
    groupSize: '3 to 4 participants per team',
    prerequisite: 'Module 2 (Planning) & Module 5 (Monitoring & Multi-Project Operations).',
    scenario: 'You are the Operations Director of a 15-person technical contractor. It is Thursday afternoon, and your company is executing 5 simultaneous projects next week:',
    objectives: [
      'Construct a Multi-Project Master Resource Matrix tracking technician allocations across competing projects.',
      'Apply objective Portfolio Prioritization criteria (Contractual Penalties, Client Relationship Tier, Equipment Rental Expirations, Revenue Impact) to resolve resource clashes.',
      'Formulate and communicate a master scheduling re-allocation plan that protects company revenue and regulatory compliance.'
    ],
    roles: [
      'Operations Director / Owner (makes executive calls on company priorities and financial exposure).',
      'Project Manager — Project 1 & 2 (defends fire alarm AHJ date and VoIP cutover).',
      'Project Manager — Project 3 & 4 (defends cabling lift rental and bank branch schedule).'
    ],
    inputs: [
      'Weekly master technician schedule with active assignments and skill certifications (Fire Alarm Licensed, CCNA, Fiber Splicing, Lift Certified).',
      'Financial impact breakdown for each project (daily revenue, penalty clauses, rental costs).',
      'Reusable Multi-Project Operations Dashboard template.'
    ],
    tasks: [
      'Map out the resource deficit across the 5 projects for the upcoming week.',
      'Prioritize the projects quantitatively based on financial penalty, regulatory impact, and client criticality.',
      'Cross-utilize technicians, negotiate a minor delay on non-critical حزمة عملs, or authorize strategic overtime/المقاول من الباطن labor.',
      'Script the exact communication to the rescheduled client to preserve the relationship.'
    ],
    deliverables: 'Multi-Project Resource Dashboard, Weekly Crew Re-Assignment Sheet, and Client Rescheduling Communication Script.',
    facilitator: '',
    mistakes: [
      'The "Squeaky Wheel" response: Sending techs to whoever screams loudest on the phone rather than what makes business sense. Debrief: Base decisions on contractual exposure and hard financial penalties.',
      'Spreading technicians paper-thin across all 5 jobs, causing all 5 jobs to fall behind schedule. Debrief: It is far better to finish 3 jobs 100% on time and reschedule 1 job proactively than to fail all 5 jobs simultaneously.',
      'Waiting until Monday morning to notify a client that you are rescheduling their installation. Debrief: Notify clients 48 hours in advance with a proactive, revised schedule to maintain professional credibility.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Panics; spreads techs thinly; misses AHJ inspection; cancels emergency call for key client.'
      },
      {
        tier: 'Developing',
        desc: 'Covers the fire inspection but leaves other PMs uninformed and incurs heavy lift rental penalties.'
      },
      {
        tier: 'Proficient',
        desc: 'Uses quantitative prioritization; re-allocates certified techs logically; maintains emergency coverage; communicates proactively.'
      },
      {
        tier: 'Exemplary',
        desc: 'Re-allocates crew with zero regulatory penalties; negotiates a 3-day lift rental extension at no charge; converts the emergency switch outage into a billable emergency T&M dispatch.'
      }
    ],
    transfer: 'Run a 15-minute "All-PM Master Resource Standup" every Thursday at 4:00 PM to lock down the following week\'s technician schedule before weekend emergencies occur.',
    variations: {
      small: 'Owner and lead technician review the whiteboard schedule together daily.',
      large: 'Weekly operations board managed via shared digital dispatch tools (ConnectWise / ServiceTitan / Monday.com).'
    }
  },
  {
    id: 18,
    title: 'CAPSTONE PREPARATION: RAPID BID-TO-KICKOFF MICRO-SIMULATION',
    phase: 'Full Lifecycle Integration (Phase 0 through Phase 4)',
    line: 'Integrated Infrastructure (Structured Cabling + Network + CCTV + Access Control)',
    level: '',
    duration: '90 Minutes (10m Simulation Briefing & Ground Rules, 45m Rapid Planning Sprint, 25m Live Client Kickoff Execution, 10m Debrief).',
    groupSize: '4 participants per team',
    prerequisite: 'Modules 0 through 4.',
    scenario: 'A fast-growing technology incubator awards your company a design-build contract for their new 2-story co-working hub (120 Cat6A drops, 16 4K security cameras, 6 access control doors, 8 Wi-Fi 6 access points, and 1 main server room rack with UPS).',
    objectives: [
      'Synthesize all core methodologies learned across Modules 0 through 4 into a rapid, coordinated project mobilization.',
      'Transition a sales proposal into a fully executable operational خط الأساس in under 45 minutes.',
      'Conduct a high-impact Project Kickoff alignment meeting demonstrating total contractor command.'
    ],
    roles: [
      'Project Manager (leads planning sprint, controls schedule, leads kickoff).',
      'Lead Field Technician (evaluates physical installation, مرحلة التمديدات المبدئية sequencing, and tool readiness).',
      'Procurement & Staging Coordinator (builds BOM, tags مهلة التوريدs, verifies pre-configuration).',
      'Incubator Executive Director (Client) (observes kickoff, tests team on scope boundaries, demands tight deadlines).'
    ],
    inputs: [
      'Executive proposal agreement and architectural 2-story floor plan.',
      'Standard contractor planning toolkit (Scope Log, WBS template, Risk sheet, Kickoff deck).'
    ],
    tasks: [
      'Complete the Rapid Project Charter & Scope Statement (15 minutes).',
      'Build the 3-Level WBS & Critical Path Schedule with equipment ordering معلَمs (15 minutes).',
      'Identify top 3 project risks and establish preventive action plans (10 minutes).',
      'Deliver the live 15-minute Project Kickoff Meeting to the Incubator Director.'
    ],
    deliverables: 'Rapid Project خط الأساس Package (Charter, Scope, WBS, Risk Register) and Kickoff Meeting Alignment Sign-off.',
    facilitator: '',
    mistakes: [
      'Jumping straight to scheduling before defining the scope خط الأساس and exclusions. Debrief: Reiterate the sequence: Scope first, WBS second, Schedule third.',
      'Treating the Kickoff Meeting as an informal chat rather than a formal alignment gate. Debrief: The kickoff sets the tone for how the client treats you throughout the contract.',
      'Leaving roles and communication escalation paths undefined. Debrief: Show why a defined RACI chart prevents clients from calling technicians directly for scope changes.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Disorganized sprint; incomplete خط الأساس; delivers vague, defensive kickoff meeting.'
      },
      {
        tier: 'Developing',
        desc: 'Produces artifacts but runs out of time; kickoff lacks structured client alignment.'
      },
      {
        tier: 'Proficient',
        desc: 'Completes rapid خط الأساس smoothly; covers all core trade disciplines; executes crisp, professional kickoff.'
      },
      {
        tier: 'Exemplary',
        desc: 'Elite trade performance; rapid planning is flawless; kickoff inspires total client confidence and locks down scope boundaries.'
      }
    ],
    transfer: 'When you win a job, do not celebrate by immediately ordering parts. Call a 45-minute internal Rapid Planning Sprint with the PM, lead tech, and مُقدِّر التكاليف to build the خط الأساس before ordering a single screw.',
    variations: {
      small: 'The owner and lead tech execute the sprint at the tailgate of the work van.',
      large: 'Formal التسليم النهائي meeting between the Sales مُقدِّر التكاليف and the Assigned Project Team.'
    }
  },
  {
    id: 19,
    title: 'SAFETY STOP-WORK, PERMIT-TO-WORK & THE RECOVERY PLAN UNDER FIRE',
    phase: 'Cross-cutting — Phase 4 (Execution) with Phase 5 (Monitoring & Control) consequences',
    line: 'Structured Cabling + Network (partially occupied commercial building)',
    level: '',
    duration: '120 Minutes (15m scenario briefing & regulatory primer, 30m permit audit & immediate response, 40m recovery planning, 25m role-played المقاول العام/owner confrontation, 10m debrief).',
    groupSize: '4–5 participants per team',
    prerequisite: 'Module 8 (Jobsite Safety, Permit-to-Work & Stop-Work Authority).',
    scenario: 'Your crew is mid-install at Meridian Tower, a partially occupied 6-floor office building. The المقاول العام\'s superintendent has warned that the ceiling on floor 4 closes tomorrow at 16:00. Right now three tasks are live: (a) Tech Davis is on a scissor lift pulling Cat6A through the ceiling grid within arm\'s reach of an energized 480 V bus duct that the electrical sub was supposed to de-energize; (b) Tech Ortiz is core-drilling through the floor slab with no containment barrier while tenants work below; (c) a fire-alarm المقاول من الباطن is brazing conduit sleeves 6 meters from your pallet of cable inventory with no fire watch posted. Then it happens: a minor arc-flash event startles Davis on the lift. No injury — but the المقاول العام\'s safety coordinator arrives, issues a site-wide stop-work order, and the building owner is on the way.',
    objectives: [
      'Classify each active task against the six permit-to-work triggers and state exactly which permits and JHAs were missing.',
      'Exercise stop-work authority and execute the immediate response sequence correctly (secure, isolate, notify, preserve).',
      'Run the incident-reporting and authority-notification process within the required timeline.',
      'Build a same-day schedule and commercial recovery plan around the stop-work order while تعويضات التأخير are still running.'
    ],
    roles: [
      'Contractor PM (owns schedule, recovery plan, client communication).',
      'Site رئيس الطاقم (owns crew safety, permits, JHAs, scene control).',
      'Company Owner / Safety Officer (owns incident reporting, insurance, authority liaison).',
      'المقاول العام Safety Coordinator / Building Owner (issues the stop-work order, demands documentation, threatens back-charges).',
      'Insurance or Regulatory Investigator (asks the hard questions about permits and isolation).'
    ],
    inputs: [
      'Floor plan showing work zones, bus-duct routing, and tenant areas.',
      'The المقاول العام\'s site safety plan, plus blank permit-to-work and JHA templates.',
      'A 1-page incident report form and the contract clause showing $1,200/day تعويضات التأخير.'
    ],
    tasks: [
      'name every missing permit/JHA and every failed control.',
      'Execute the immediate post-incident sequence — the "golden 30 minutes": isolate, secure the scene, headcount, first-aid check, notifications, evidence preservation.',
      'Complete the 1-page incident report and the corrective-action list.',
      'which work can resume under corrected permits, in what order, and how you defend the schedule commercially.',
      'Conduct the confrontation with the المقاول العام/owner: accept accountability for your permit failures, refuse blame for the electrical sub\'s isolation failure, and negotiate the stop-work lifted on your scope only.'
    ],
    deliverables: 'Permit-to-Work Gate Log (audited), completed JHA per task, 1-Page Incident Report, Recovery Plan with revised schedule, client/المقاول العام communication letter.',
    facilitator: '',
    mistakes: [
      'Starting high-risk work on a verbal assurance ("the electrician said it was dead"). Debrief: Absence of voltage, verified and locked out, or you do not touch it.',
      'Crews hiding or minimizing a near-miss to avoid trouble. Debrief: A blameless near-miss report is the cheapest training the company will ever buy; punish reporting and you guarantee the next event is worse.',
      'Treating the stop-work order as only a safety problem. Debrief: It is simultaneously a schedule, commercial, and client-relations event — the recovery plan must be written the same day.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Cannot identify the missing permits; argues liability with the المقاول العام; produces no recovery plan.'
      },
      {
        tier: 'Developing',
        desc: 'Identifies permit failures but botches the immediate response sequence or the notification timeline.'
      },
      {
        tier: 'Proficient',
        desc: 'Clean permit audit, correct immediate response, complete incident report, and a credible recovery plan.'
      },
      {
        tier: 'Exemplary',
        desc: 'Demonstrates stop-work authority being used before the incident; recovery plan protects margin and gets partial work released; confrontation is calm, factual, and contract-based.'
      }
    ],
    transfer: 'Insert the permit-to-work gate into the Pre-Mobilization Kit Audit — no high-risk task starts without a signed JHA and permit, and every crew lead carries Pocket Card 6.',
    variations: {
      small: 'The owner is the safety officer — make it personal: one serious incident closes the company.',
      large: 'Formalize a dedicated safety coordinator role, a weekly permit audit, and a blameless near-miss review inside the Monday standup.'
    }
  },
  {
    id: 20,
    title: 'CONTRACT RED FLAGS, PRIVACY COMPLIANCE & THE CYBER-HARDENING SIGN-OFF',
    phase: 'Cross-cutting — Phase 0 (bid/contract) through Phase 7 (التسليم النهائي)',
    line: 'CCTV / VMS + Access Control (public-facing urban deployment)',
    level: '',
    duration: '120 Minutes (15m briefing on contract and data-protection duties, 30m contract redline, 35m privacy sheet + hardening checklist, 30m negotiation role-play, 10m debrief).',
    groupSize: '4 participants per team',
    prerequisite: 'Module 9 (Contract Risk, Compliance, Privacy & Cyber-Hardening).',
    scenario: 'You are about to sign and hand over a 60-camera city-center CCTV and access-control system for Northgate Retail Group. Their standard subcontract agreement states: "Contractor shall indemnify and hold harmless the Owner and its agents from and against any and all claims, damages, losses, and expenses whatsoever arising out of the Work" (uncapped, including consequential), and "Contractor shall be responsible for the lawful operation of the recording system." Technically: cameras are still on default administrative credentials; the NVR is exposed for remote access on a public management port; recordings have no set نسبة الاحتجاز (disks simply overwrite when full, ~14 months); no signs inform the public they are being recorded. The client\'s legal counsel has now sent a list of data-protection questions, and a data subject has already requested "all footage of me.',
    objectives: [
      'Identify the five contract traps and redline them with defensible counter-clauses.',
      'Produce a privacy & data-protection compliance sheet for a security installation (signage, نسبة الاحتجاز, access control, subject-request path, registration).',
      'Execute a cyber-hardening sign-off so the delivered system is not the client\'s weakest network link.',
      'Refuse scope you should not carry — lawful operation of the recordings is the client\'s obligation as data controller — while keeping the deal.'
    ],
    roles: [
      'Contractor Owner / Commercial Lead (negotiates the contract).',
      'PM / Lead Engineer (owns the privacy sheet and the hardening certificate).',
      'Client Legal Counsel (wants unlimited protection; asks sharp data questions).',
      'Client IT Director (receives the hardened system; demands remote access without a VPN).'
    ],
    inputs: [
      'The client\'s subcontract agreement with the two clauses above.',
      'camera/NVR/controller models with firmware versions; network topology showing the public-facing NVR port.',
      'Blank Privacy & Data-Protection Compliance Sheet and Cyber-Hardening Checklist.'
    ],
    tasks: [
      'cap indemnity at contract value or insurance limits; exclude consequential damages; reassign the "data controller" role (operation of the system and its recordings) to the client; and add an excusable-delay clause if تعويضات التأخير exist.',
      'signage plan and wording, lawful-basis statement, نسبة الاحتجاز rule (propose 30/90 days), access control to recordings with audit trail, secure storage, subject-access-request procedure with a 30-day response path, camera placement exclusions, audio-recording treatment, and registration requirement (note jurisdiction-specific rules).',
      'change all default credentials to unique per-device values; segment cameras and controllers onto a dedicated VLAN; update firmware; enforce NTP time sync (evidentiary timestamps); disable unused services and close public management ports (remote access via VPN only); enable logging with defined نسبة الاحتجاز; back up and password-manage configurations; hand over credentials securely with a signed receipt.',
      'get the redlines accepted or scoped as paid work, and explain to IT why public-port NVR access is a defect you will not deliver.'
    ],
    deliverables: 'Contract Red-Flag Register with redlines, Privacy & Data-Protection Compliance Sheet (signed), Cyber-Hardening Certificate of Delivery, credential التسليم النهائي receipt.',
    facilitator: '',
    mistakes: [
      'Signing the client\'s paper to win the job, then discovering uncapped liability. Debrief: Negotiate at the proposal stage — the leverage vanishes after signature.',
      'Shipping systems on default credentials with public remote access. Debrief: The ransomware entry point six months later is traceable; the reputational cost ends the client relationship permanently.',
      'Indefinite نسبة الاحتجاز and no signage "because the client never asked." Debrief: As the installer you are often the only party who knows the rules exist — document your advice and the client\'s decision.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Signs the clauses as written; leaves default credentials; produces no privacy documentation.'
      },
      {
        tier: 'Developing',
        desc: 'Spots the traps but cannot redline them; hardening incomplete.'
      },
      {
        tier: 'Proficient',
        desc: 'Redlines accepted or priced; complete privacy sheet; full hardening sign-off with credential receipt.'
      },
      {
        tier: 'Exemplary',
        desc: 'Reframes compliance as a service — sells a paid compliance & hardening package, converts the data question into recurring annual revenue, and documents everything.'
      }
    ],
    transfer: 'Attach the Privacy Sheet and Cyber-Hardening Certificate to the التسليم النهائي Dossier; make "no default credentials, no public management ports" a non-negotiable acceptance criterion.',
    variations: {
      small: 'Use your jurisdiction\'s official CCTV / data-protection guidance as the checklist — it is usually free and short.',
      large: 'Standardize the hardening build in the shop (firmware + credentials + config خط الأساس before devices ever reach site) and make it a billable tier.'
    }
  },
  {
    id: 21,
    title: 'RISK, ISSUE, INCIDENT, DEFECT — CHOOSE THE RIGHT RESPONSE',
    phase: 'Cross-cutting — Phase 2 (Risk) and Phase 5 (Monitoring & Control)',
    line: 'All lines (bank branch network / firewall & core switch refresh)',
    level: '',
    duration: '60 Minutes — ideal Jobsite Toolbox Talk format (10m classification primer, 25m team classification drill, 15m response design, 10m debrief).',
    groupSize: 'Teams of 3, rotating the "duty PM" who owns the final call.',
    prerequisite: 'Module 2 (Risk) & Module 5 (Monitoring & Control); Module 8 (Safety) recommended.',
    scenario: 'It is 09:30 on a Tuesday at Civic Bank, and four problems land on your desk at once: (a) a camera drops off the VMS intermittently during التشغيل والضبط; (b) the supplier warns of a 3-week delay on a switch destined for the next project phase; (c) a technician reports a live 120 V circuit inside a cabinet that was supposed to be isolated; (d) the client mentions a new regulation requiring 12-month log نسبة الاحتجاز on all access-control events.',
    objectives: [
      'Classify each problem correctly as risk, issue, incident, defect, or change — and justify the classification.',
      'Trigger the correct register and the correct response for each, at the correct priority.',
      'Recognize that classification is not academic — misclassification hides safety items and misdirects effort.'
    ],
    roles: [
    ],
    inputs: [
      'Four problem statements on cards (above), written deliberately so two of them are easy to misclassify.',
      'One-line reference definitions of risk / issue / incident / defect / change.',
      'risk register, issue log, defect list, change request form.'
    ],
    tasks: [
      'Classify all four items and justify each in one sentence.',
      'Assign owner, priority, and target resolution time for each.',
      'Define the immediate action — including the safety stop for the live circuit.',
      'Log each item into the correct register (one per team, shown on screen).'
    ],
    deliverables: 'Four correctly logged register entries and a one-page immediate-action list.',
    facilitator: '',
    mistakes: [
      'Treating a defect as a risk (or vice versa) so no action owner is ever assigned. Debrief: A risk has a probability and a response plan; a defect exists now and needs a fix date.',
      'Logging an issue but taking no action. Debrief: An issue log without dates is a confession list.',
      'Under-prioritizing the safety item because it came in last. Debrief: Classification determines urgency, not arrival order.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'All four items in one list; no owners; safety item not escalated.'
      },
      {
        tier: 'Developing',
        desc: 'Two or more misclassified; registers chosen but entries incomplete.'
      },
      {
        tier: 'Proficient',
        desc: 'All four classified correctly with owners, priorities, and dates; safety stop executed.'
      },
      {
        tier: 'Exemplary',
        desc: 'Also spots the hidden fifth problem (the log-نسبة الاحتجاز regulation is a change, not a defect — it is new scope) and prices it.'
      }
    ],
    transfer: 'Keep the four registers physically separate — risk, issue, defect, change — and review them in one weekly 15-minute pass.',
    variations: {
      small: 'Run it as a standalone 60-minute toolbox talk using four real problems from last week.',
      large: 'Fold the drill into the weekly PM meeting; rotate the duty PM so every PM practices the classification muscle.'
    }
  },
  {
    id: 22,
    title: 'THE INSTALLATION WEEK — MULTI-DAY EXECUTION SIMULATOR',
    phase: 'Phase 4 (Field Execution) with Phase 5 (Monitoring & Control) running throughout',
    line: 'Warehouse Wi-Fi + Video Surveillance (food-processing / cold-storage facility)',
    level: '',
    duration: '150 Minutes (six 15-minute "days" with 5-minute transitions, 30m setup and final debrief). Cap at 6 crews per room.',
    groupSize: 'Teams of 4–6',
    prerequisite: '',
    scenario: 'Meridian Foods — a 5-day installation of warehouse Wi-Fi (24 APs, incl. a −25 °C cold store requiring IP66 access points and heated cabinets) plus 22 CCTV cameras. You inherit a plan, a crew of 4 plus a المقاول من الباطن, and a customer who expects a daily report. Each compressed "day" lasts 15 minutes, and the site fights back.',
    objectives: [
      'Sustain schedule, issue, resource, and client-communication control across several days of continuous disruption.',
      'Process change requests at full change-control discipline even while firefighting.',
      'Produce honest daily reporting that would survive a client dispute.'
    ],
    roles: [
    ],
    inputs: [
      'The project schedule, budget snapshot, crew list, and a daily site report template.',
      'A sealed envelope of event cards drawn at the start of each "day.'
    ],
    tasks: [
      'Update schedule, progress, and issue log;',
      'reassign resources and decide escalations;',
      'manage any change request through the full COR discipline;',
      'write the daily site report;',
      'on the final day, produce the client-facing weekly summary.'
    ],
    deliverables: 'Updated schedule, issue log, change requests (priced and signed), 5–6 daily site reports, end-of-week client report.',
    facilitator: '',
    mistakes: [
      'No issue log; problems carried in heads. Debrief: By Day 4 nobody remembers Day 1\'s promise.',
      'Daily reports that hide problems. Debrief: A report that says "on track" while blockers pile up is the document that loses the dispute.',
      'Change requests piled up undocumented "until we\'re less busy." Debrief: The busy period never ends; unbilled changes are the margin.'
    ],
    rubric: [
      {
        tier: 'Deficient',
        desc: 'Schedule abandoned by Day 3; no records; client surprised by the slip.'
      },
      {
        tier: 'Developing',
        desc: 'Records kept but fragmented; changes captured verbally, not on CORs.'
      },
      {
        tier: 'Proficient',
        desc: 'Schedule and issue log current each day; changes on signed CORs; reports honest and on time.'
      },
      {
        tier: 'Exemplary',
        desc: 'Also protects next week\'s project while firefighting this one; the client report converts a problem into a display of control.'
      }
    ],
    transfer: 'Adopt the one-page daily site report on every active job — no exceptions, submitted by 17:00.',
    variations: {
      small: 'Run 3 days instead of 6 with the owner playing the client.',
      large: 'Run two parallel rooms and have the losing team debrief the winning team — peer review teaches faster than the trainer.'
    }
  }
];
