// Bina Labs - FAQ banks per page.
// Single source of truth: rendered as visible Q&A AND as FAQPage JSON-LD.
// Tone: terse, declarative, factual. AI engines prefer direct answers without hype.

export const HOME_FAQS = [
  {
    q: 'What is Bina Labs?',
    a: 'Bina Labs is a senior-by-default consultancy that builds AI systems for production. We embed with founder and engineering teams, write working code in week one, and hand off a system the client owns. Headquartered in Tel Aviv, with people in Berlin and remote-first delivery.',
  },
  {
    q: 'How long do typical engagements take?',
    a: 'Median time-to-ship is 11 days for a fixed-scope sprint. Embedded squads run 3 to 12 months. Strategy intensives run 4 weeks. Every engagement starts with a written kill date.',
  },
  {
    q: 'What is your repeat-client rate?',
    a: '84 percent of our clients hire us a second time within 18 months, usually for a different problem. We treat that number as the only customer-success metric that matters.',
  },
  {
    q: 'Do you let AI write your code?',
    a: 'We use AI coding assistants every day with discipline. Scoped prompts, narrow context, sandboxed runs. Every diff is reviewed by a human who can defend each line. The assistant accelerates the engineer; it does not replace the judgment.',
  },
  {
    q: 'How much does production AI cost?',
    a: 'Fixed-scope sprints start at $60k. Embedded squads run $140k per month. Fractional CTO from $32k per month with a two-quarter minimum. We size on-prem and inference budgets up front, in writing, before the contract.',
  },
  {
    q: 'Where are you based?',
    a: 'Tel Aviv, Israel. Operating partners in Berlin. We staff remote-first by default and travel on-site for kickoffs, milestone reviews, and hand-offs.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes. Default delivery model is remote with quarterly on-site. We have shipped engagements end-to-end without ever sharing a room with the client team.',
  },
  {
    q: 'What is a 4-week pilot?',
    a: 'A paid, fixed-scope 4-week engagement that ends in working code in your environment, an evals harness, and a written go or no-go memo. If we recommend no-go, we say it in writing and refund any unused portion of a follow-on contract.',
  },
  {
    q: 'Can I see your past work?',
    a: 'Yes. The /work page lists 17 selected case studies across vision, agents, data, and strategy, with named clients, durations, and outcomes. Match Cuts, Auto-QTO, Lloyd Score, Caseworker, and others are written up in detail.',
  },
];

export const SERVICES_FAQS = [
  {
    q: 'How do you price engagements?',
    a: 'Fixed-scope sprints from $60k. Embedded squads $140k per month, all-in. Fractional CTO from $32k per month, two-quarter minimum. Research retainers are custom. Every quote is a single number, not a rate card.',
  },
  {
    q: 'What scopes do you take on?',
    a: 'Vision systems, agentic copilots, retrieval and RAG, on-prem inference, applied research, and AI strategy intensives. We do not take SaaS implementation work, ad-tech, or anything we cannot ship in production with our name on it.',
  },
  {
    q: 'What is in a 4-week pilot?',
    a: 'Week one: working code in your environment. Week two: evals harness and baseline metrics. Week three: iteration against the eval. Week four: written go or no-go memo, runbook, and hand-off plan if the engagement extends.',
  },
  {
    q: 'Why do evals come before the agent?',
    a: 'Most AI projects fail because nobody agreed on what success means. We write the eval before we write the agent, run a workshop with the people who know the right answer, and only then start building. Evals are 80 percent of the job.',
  },
  {
    q: 'Are you a fit for early-stage startups?',
    a: 'Yes for pre-seed to Series C with a real wedge. We are a poor fit for ideation-stage founders without a problem statement, and for late-stage enterprises that want a 40-page SOW before any code is written.',
  },
  {
    q: 'What happens after handoff?',
    a: '30 days of free office hours, a recorded walkthrough, and a written runbook. After that, optional retainers are available. We are explicitly built to leave; the goal is not retention, it is for you to call us back in two years for a different problem.',
  },
  {
    q: 'Can you deploy on-premises?',
    a: 'Yes. We have shipped on-prem inference for regulated industries including marine insurance, customer support, and construction. We size GPU footprints, license costs, and observability before the contract.',
  },
];

export const ABOUT_FAQS = [
  {
    q: 'Who is Michael Fleicher?',
    a: 'Engineer, data scientist, founder, and two-time CTO. Background spans MedTech, insurance, semiconductors, and entertainment. Building agentic systems and automations since 2017. Founder and principal of Bina Labs; previously founded Storywise.',
  },
  {
    q: 'Do you take fractional CTO engagements?',
    a: 'Yes. One day per week, two-quarter minimum, $32k per month. We work directly with the CEO and the engineering lead, set the technical direction, run hiring loops, and own architecture decisions.',
  },
  {
    q: 'Are you hiring?',
    a: 'Yes. We are building a small senior bench: senior AI engineer, product designer, applied researcher, full-stack engineer. All remote, all contract or part-time. Apply through the careers section on the about page.',
  },
  {
    q: 'What is your engagement process?',
    a: 'Discovery call, scoping memo, week-one prototype, bi-weekly iterate-or-kill review, hand-off. Every step is paid; every step is documented; every step ends with a written artifact your team can act on.',
  },
  {
    q: 'What is the founder background?',
    a: 'Two prior CTO roles in regulated industries (MedTech, insurance), a stint as data scientist in entertainment, and engineering work in semiconductor production systems. The pattern is operator-builder: building the team, the system, and the eval.',
  },
];

export const MANIFESTO_FAQS = [
  {
    q: 'Why is the deadline holy?',
    a: 'Because trust is the only compounding asset we have. When we commit to a date, we hit it. Scope flexes, quality has a floor, but the deadline does not move. We plan backwards from it on day one and tell you in week one if it is at risk, not in week eleven.',
  },
  {
    q: 'What does built to leave mean?',
    a: 'Embedded engagements come with a written hand-off plan from day one. We staff your team alongside ours, document for the engineer who will inherit the system in six months, and end with a deployable runbook. Retention is not the goal.',
  },
  {
    q: 'What is your refund policy?',
    a: 'When a project should die because the model cannot do it, the data is not there, or the org is not ready, we say so and refund the unused portion of the engagement. We have done this four times. Each time we got a better client out of it.',
  },
  {
    q: 'What is eval discipline?',
    a: 'Before we write the agent, we write the eval. Before we run the eval, we run the workshop. Before the workshop, we get the people in the room who know the answer to be honest about it. No eval means no engagement.',
  },
  {
    q: 'How do you use AI tools responsibly?',
    a: 'Scoped prompts, narrow context windows, sandboxed runs, no client secrets in third-party context, every dependency audited, every diff reviewed by a human who can defend each line. The assistant accelerates the engineer. It does not replace the judgment.',
  },
];

export const CONTACT_FAQS = [
  {
    q: 'What is your response time?',
    a: 'Within one business day, written, by Michael. No assistants, no auto-responders, no qualification gates. Office hours every Thursday 14 to 16 IST for direct conversations.',
  },
  {
    q: 'What is a typical engagement size?',
    a: 'Fixed-scope sprints from $60k to $240k. Embedded squads from $140k per month, typically running 3 to 12 months. Fractional CTO from $32k per month. Research retainers are custom.',
  },
  {
    q: 'Do you work with non-technical founders?',
    a: 'Yes. We translate between business and engineering by default. The intake form does not require technical specifications; a paragraph describing the problem in plain language is enough to start a discovery call.',
  },
  {
    q: 'What does a discovery call look like?',
    a: '30 minutes, video, no NDA, no deck. We ask about the problem, the constraints, the deadline, and the budget. We tell you whether we can help, who else might be a better fit, and what a written scoping memo would cover. No follow-up unless you ask for one.',
  },
];

// Per-case-study FAQ banks. Keyed by slug, mirroring caseStudies.js.
export const CASE_STUDY_FAQS = {
  'match-cuts': [
    {
      q: 'What was the engineering challenge?',
      a: 'Producing 22 personalized highlight reels per football match from a single broadcast camera, in under 90 minutes, with no human editor in the loop. Player re-identification under occlusion was the hardest sub-problem.',
    },
    {
      q: 'How long did the engagement run?',
      a: 'Six months, March to August 2025. First end-to-end render on real match footage shipped in week three. Production pipeline was live by month five.',
    },
    {
      q: 'What metrics improved?',
      a: 'Jersey-number OCR accuracy hit 94 percent on real youth-football footage. Render budget held under 90 minutes per match for 22 reels. Median reel length per player landed at three minutes. Zero human editors in the loop at production.',
    },
    {
      q: 'What is the technology stack?',
      a: 'Python and PyTorch for player ID and re-identification, PaddleOCR for jersey numbers, YOLO with ByteTrack for ball and event tracking, a fine-tuned VLM plus rule layer for highlight scoring, FFmpeg for auto-edit, and AWS for delivery.',
    },
    {
      q: 'What went wrong during the build?',
      a: 'Pile-ups and corner kicks broke early re-identification models. We added appearance-embedding fallbacks and switched the OCR pipeline mid-engagement. The revised stack held through the first paying league.',
    },
    {
      q: 'How was success measured?',
      a: 'Match-length SLA on render time, OCR accuracy on a held-out test set, parent open and watch-through rate on delivered reels, and the founder-defined metric: did the system produce a reel the parent actually wanted to share?',
    },
  ],
  'auto-qto': [
    {
      q: 'What was the engineering challenge?',
      a: 'Reading every door, outlet, and duct out of a 400-page construction plan set automatically and producing a procurement BOM that estimators would trust enough to sign within an hour.',
    },
    {
      q: 'How long did the engagement run?',
      a: 'Eight months in 2025, from concept to first paying general contractor.',
    },
    {
      q: 'What metrics improved?',
      a: '92 percent symbol recall on real industry plan sets. Eight times faster than manual takeoff. One-hour estimator audit per project. Six trades supported at launch.',
    },
    {
      q: 'What is the technology stack?',
      a: 'PDF tiling and OCR via PaddleOCR, per-trade detectors built on YOLO and DETR, a fine-tuned VLM with retrieval over the sheet legend for the long tail, and Pandas for cross-sheet BOM reconciliation with full audit trail.',
    },
    {
      q: 'Why did off-the-shelf VLMs fail?',
      a: 'They hallucinated symbols at unacceptable rates on dense plan sets. Pure CV pipelines missed any symbol they had not been hand-labeled for. The hybrid engine routes residual regions to the VLM and reconciles against the live legend on each sheet.',
    },
    {
      q: 'How was success measured?',
      a: 'Symbol recall on a held-out plan set, estimator agreement after one-hour audit, and time saved versus manual takeoff. The acceptance bar was set by the head estimator, not the founder.',
    },
  ],
  'lloyd-score': [
    {
      q: 'What was the engineering challenge?',
      a: 'Quantifying near-miss risk per vessel from messy AIS data with transmission gaps. The hard part was the ghost fleet: vessels that go dark, spoof, or transmit noisy positions. We had to model the gaps without pretending the ship vanished.',
    },
    {
      q: 'How long did the engagement run?',
      a: 'Nine months in 2025, from concept to underwriter UAT. Four P and I clubs are piloting the score.',
    },
    {
      q: 'What metrics improved?',
      a: '31 percent reduction in unexplained variance versus the prior risk model. AIS-grade ghost-fleet simulations during transmission gaps. Nightly global recompute over the AIS firehose.',
    },
    {
      q: 'What is the technology stack?',
      a: 'Kafka and DuckDB for AIS ingest, Numba-accelerated Python for trajectory simulation, R-tree and Shapely for spatial-temporal CPA scoring, and FastAPI plus an LLM explainer for the underwriter query layer.',
    },
    {
      q: 'How does ghost-fleet handling work?',
      a: 'When a vessel goes dark, we sample plausible trajectories from prior behavior and operational constraints, score near-miss exposure against those samples, and surface both the score and the uncertainty band to the underwriter.',
    },
    {
      q: 'How was success measured?',
      a: 'Variance reduction versus the legacy model on held-out claims, underwriter UAT pass rate, and the qualitative metric the head of underwriting demanded: would the score change a quote?',
    },
  ],
  'caseworker': [
    {
      q: 'What was the engineering challenge?',
      a: 'Cutting handle time on regulated case work without cutting accuracy and without ripping out the CRM the reps already lived in. The copilot had to read scanned handwritten forms and cite the policy leaf an auditor could follow.',
    },
    {
      q: 'How long did the engagement run?',
      a: 'Seven months in 2025, from pilot to production rollout. Three queues were live at handover.',
    },
    {
      q: 'What metrics improved?',
      a: '47 percent reduction in average handle time on piloted queues. 100 percent of accepted actions traceable to a policy leaf. NPS on piloted reps up 18 points. Zero CRM swaps required.',
    },
    {
      q: 'What is the technology stack?',
      a: 'React and TypeScript for the embedded CRM panel, fine-tuned TrOCR and PaddleOCR for handwriting on legacy intake forms, an LLM that routes through a policy sub-tree with citation, and a Python event-bus for write-back with full provenance.',
    },
    {
      q: 'How is the system audited?',
      a: 'Every accepted suggestion writes back to the CRM with a citation to the policy leaf and a link to the case-history snippet that triggered it. Auditors can replay the decision path end-to-end.',
    },
    {
      q: 'How was success measured?',
      a: 'Average handle time on piloted queues, action traceability rate, and the operational metric the ops director defined: did the reps stop asking IT to remove the panel by week two? They did.',
    },
  ],
};

// Author / team metadata per case study. Surface as a "led by" line.
export const CASE_STUDY_TEAMS = {
  'match-cuts': ['Michael Fleicher', 'Vision team'],
  'auto-qto': ['Michael Fleicher', 'CV + VLM team'],
  'lloyd-score': ['Michael Fleicher', 'Spatial-AI team'],
  'caseworker': ['Michael Fleicher', 'Embedded team'],
};
