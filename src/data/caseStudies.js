// Bina Labs — Case study data, keyed by slug

export const CASE_STUDIES = {
  'match-cuts': {
    slug: 'match-cuts',
    n: '01',
    client: 'Match Cuts',
    title: 'Match Cuts',
    eyebrow: '// case_study /01 · match cuts · 2025 · 6 months · vision + vlm engineering',
    tagline: 'Ninety minutes of football, twenty-two players, one auto-edited highlight reel per kid by the time they get home.',
    meta: [
      { l: 'sector', v: 'Sports Media · Youth Football' },
      { l: 'engagement', v: 'AI Engineering · MVP build' },
      { l: 'duration', v: '6 months · Mar–Aug 2025' },
      { l: 'outcome', v: '90 min match → 3 min reels, per player' },
    ],
    brief: {
      lead: "A sports-media founder wanted to ship per-player highlight reels for full football matches - automatically, with no human editor in the loop.",
      paras: [
        "The thesis was simple: parents will pay for a personalized three-minute reel of their kid's best touches, but only if it lands the same evening as the match. The product had to ingest a single broadcast-style camera feed, identify every player on the pitch, follow the ball, and stitch each player's involvement into a watchable cut.",
        "We embedded for six months across vision, applied ML, and product. The first end-to-end render was running on real match footage in week three. By month five the pipeline was producing 22 personalized reels per match, in under the length of the match itself.",
      ],
    },
    stackTitle: ['Four layers,', 'one product'],
    stack: [
      { n: '01', t: 'Player ID & re-identification', d: 'Jersey-number OCR + appearance embeddings, robust to occlusion and pile-ups.', tech: ['py', 'torch', 'paddleocr'] },
      { n: '02', t: 'Ball + event tracking', d: 'Single-camera ball trajectory with possession + event classification.', tech: ['yolo', 'bytetrack'] },
      { n: '03', t: 'Highlight scoring', d: 'Per-player involvement score on every clip; ranked and length-budgeted.', tech: ['vlm', 'rules'] },
      { n: '04', t: 'Auto-edit & delivery', d: 'Cut, music bed, branded titles, push to parent on match end.', tech: ['ffmpeg', 'aws'] },
    ],
    outcomes: [
      { v: '22', l: 'personalized reels per match' },
      { v: '<90m', l: 'render budget · match-length SLA' },
      { v: '94%', l: 'jersey-number OCR accuracy' },
      { v: '3 min', l: 'median reel length per player' },
      { v: '6mo', l: 'concept to first paying league' },
      { v: '0', l: 'human editors in the loop' },
    ],
    quote: {
      text: 'They wrote production code in week 4 and refused to write a slide for six months. The first time we saw the system render a real reel, i felt so proud.',
      attr: 'Guy — founder, Match Cuts',
    },
    team: {
      lead: 'Michael Fleicher',
      role: 'Principal',
      members: ['Michael Fleicher', 'Vision team'],
    },
    datePublished: '2025-08-01',
  },

  'auto-qto': {
    slug: 'auto-qto',
    n: '07',
    client: 'Auto-QTO',
    title: 'Auto-QTO',
    eyebrow: '// case_study /07 · auto-qto · 2025 · 8 months · vision + vlm engineering',
    tagline: 'Dense 2D construction drawings in. A procurement-ready bill of materials out. No tracing, no clicking, no estimator.',
    meta: [
      { l: 'sector', v: 'Construction · Pre-construction QTO' },
      { l: 'engagement', v: 'AI Engineering · Hybrid VLM build' },
      { l: 'duration', v: '8 months · 2025' },
      { l: 'outcome', v: '92% symbol recall on industry plan sets' },
    ],
    brief: {
      lead: "A construction-tech founder needed to read every door, every outlet, every duct out of a 400-page plan set - automatically - and deliver a procurement BOM that estimators would actually trust.",
      paras: [
        "Off-the-shelf VLMs hallucinated symbols. Pure CV pipelines missed any symbol they hadn't been hand-labeled for. The product had to combine both: classical detection for known symbols, vision-language reasoning for the long tail, and a verification loop that estimators could audit.",
        "We built a hybrid engine: tile the plan, run a fast detector for the trade's high-frequency symbols, route the residual regions to a fine-tuned VLM, and reconcile against the legend on each sheet. Output goes straight into a quantity takeoff CSV that an estimator can sign off in an hour.",
      ],
    },
    stackTitle: ['Hybrid pipeline,', 'one BOM'],
    stack: [
      { n: '01', t: 'Sheet ingest & legend parsing', d: 'PDF tiling, OCR, sheet-level legend extraction so each page knows its own vocabulary.', tech: ['pdfminer', 'paddleocr'] },
      { n: '02', t: 'Symbol detection', d: 'Per-trade detector trained on a curated corpus of MEP and architectural symbols.', tech: ['yolo', 'detr'] },
      { n: '03', t: 'VLM long-tail reasoning', d: 'Fine-tuned VLM handles ambiguous, novel, or partially occluded symbols against the live legend.', tech: ['vlm', 'rag'] },
      { n: '04', t: 'BOM reconciliation', d: 'Cross-sheet rollup, dedup, audit trail so an estimator can sign the takeoff in an hour.', tech: ['py', 'pandas'] },
    ],
    outcomes: [
      { v: '92%', l: 'symbol recall on real plan sets' },
      { v: '8×', l: 'faster than manual takeoff' },
      { v: '400p', l: 'plan sets, end to end' },
      { v: '1h', l: 'estimator audit per project' },
      { v: '8mo', l: 'concept to first paying GC' },
      { v: '6', l: 'trades supported at launch' },
    ],
    quote: {
      text: 'Everyone in the category showed me a demo. Bina shipped a system my estimators actually trust on real plan sets. That is a different conversation.',
      attr: 'Oded — founder, Auto-QTO',
    },
    team: {
      lead: 'Michael Fleicher',
      role: 'Principal',
      members: ['Michael Fleicher', 'CV + VLM team'],
    },
    datePublished: '2025-09-15',
  },

  'lloyd-score': {
    slug: 'lloyd-score',
    n: '06',
    client: 'Lloyd Score',
    title: 'Lloyd Score',
    eyebrow: '// case_study /06 · lloyd score · 2025 · 9 months · spatial ai + llm',
    tagline: 'Quantifying near-miss risk for marine insurers from messy, gappy AIS data - including the ships that go dark.',
    meta: [
      { l: 'sector', v: 'Marine Insurance · Spatial Risk' },
      { l: 'engagement', v: 'AI Engineering · Risk Engine' },
      { l: 'duration', v: '9 months · 2025' },
      { l: 'outcome', v: 'AIS-grade safety score, ghost-fleet aware' },
    ],
    brief: {
      lead: 'A marine-insurance team wanted a single, defensible risk score per vessel - one that handled gaps in the AIS feed without pretending the ship vanished.',
      paras: [
        'The hard part was the ghost fleet: vessels that go dark, spoof, or transmit noisy positions. We simulated plausible trajectories during the gaps, scored near-miss exposure against them, and surfaced the result alongside the underwriting workflow.',
        'The system runs nightly over the global AIS firehose, recomputes risk per vessel and per port call, and feeds a query layer that underwriters use during quoting.',
      ],
    },
    stackTitle: ['Sparse signal,', 'dense risk'],
    stack: [
      { n: '01', t: 'AIS ingest & cleaning', d: 'Global AIS firehose, dedup, gap detection, spoof flags.', tech: ['kafka', 'duckdb'] },
      { n: '02', t: 'Ghost-fleet simulation', d: 'Plausible-trajectory sampling during transmission gaps.', tech: ['py', 'numba'] },
      { n: '03', t: 'Near-miss scoring', d: 'Spatial-temporal CPA scoring across simulated and observed tracks.', tech: ['rtree', 'shapely'] },
      { n: '04', t: 'Underwriter query layer', d: 'Per-vessel and per-port-call score with an LLM explainer for the underwriting note.', tech: ['llm', 'fastapi'] },
    ],
    outcomes: [
      { v: 'AIS', l: 'grade ghost-fleet sims' },
      { v: 'nightly', l: 'global recompute' },
      { v: '−31%', l: 'unexplained variance vs prior model' },
      { v: '9mo', l: 'concept to underwriter UAT' },
      { v: '4', l: 'P&I clubs piloting' },
      { v: '1', l: 'risk score, defensible' },
    ],
    quote: {
      text: "We bought spatial-AI vendors before. This is the first one that admitted what they don't see and modelled around it.",
      attr: 'Offer — CTO, Lloyd Score',
    },
    team: {
      lead: 'Michael Fleicher',
      role: 'Principal',
      members: ['Michael Fleicher', 'Spatial-AI team'],
    },
    datePublished: '2025-10-30',
  },

  'caseworker': {
    slug: 'caseworker',
    n: '09',
    client: 'Caseworker',
    title: 'Caseworker',
    eyebrow: '// case_study /09 · caseworker · 2025 · 7 months · ai agents · embedded',
    tagline: "A copilot that actually lives inside the agent's CRM - reads the case, the handwriting, and the policy tree, then drafts the next move.",
    meta: [
      { l: 'sector', v: 'Customer Support · Regulated CX' },
      { l: 'engagement', v: 'AI Agents · Embedded Build' },
      { l: 'duration', v: '7 months · 2025' },
      { l: 'outcome', v: '−47% average handle time on piloted queues' },
    ],
    brief: {
      lead: "A regulated CX operation wanted to cut handle time without cutting accuracy - and without ripping out the CRM their reps already lived in.",
      paras: [
        'The copilot had to read the open case, the historical correspondence, the scanned handwritten forms, and the policy decision tree, then suggest the next action with a citation an auditor could follow.',
        'We embedded inside the existing CRM, ran a smart sub-tree LLM over the policy graph, and added handwriting OCR for the legacy intake forms. Reps see suggestions inline; every accepted action writes back into the CRM with provenance.',
      ],
    },
    stackTitle: ['Embedded copilot,', 'auditable steps'],
    stack: [
      { n: '01', t: 'CRM embed', d: 'Native panel inside the existing CRM. No swivel-chair, no new app.', tech: ['react', 'ts'] },
      { n: '02', t: 'Handwriting OCR', d: 'Fine-tuned recogniser for the legacy intake forms in the case history.', tech: ['trocr', 'paddleocr'] },
      { n: '03', t: 'Policy sub-tree LLM', d: 'Routes each case through the relevant slice of the policy graph; cites the leaf.', tech: ['llm', 'graph'] },
      { n: '04', t: 'Action write-back', d: 'Every accepted suggestion writes back to the CRM with full provenance for audit.', tech: ['py', 'eventbus'] },
    ],
    outcomes: [
      { v: '−47%', l: 'average handle time' },
      { v: '100%', l: 'actions traceable to policy' },
      { v: '7mo', l: 'pilot to production rollout' },
      { v: '3', l: 'queues live at handover' },
      { v: '0', l: 'CRM swap required' },
      { v: '+18', l: 'NPS, piloted reps' },
    ],
    quote: {
      text: "The reps stopped asking IT to remove it after week two. That's the metric I actually cared about.",
      attr: 'Johan — CEO, Caseworker',
    },
    team: {
      lead: 'Michael Fleicher',
      role: 'Principal',
      members: ['Michael Fleicher', 'Embedded team'],
    },
    datePublished: '2025-11-20',
  },
};

export const CASE_STUDY_DEFAULT_SLUG = 'match-cuts';
