import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillLink } from '../Chrome.jsx';
import { CASE_STUDIES } from '../../data/caseStudies.js';

const WORK_FILTER_MATCH = {
  all: () => true,
  agents: (tag) => /agents/i.test(tag),
  vision: (tag) => /vision|vlm/i.test(tag),
  data: (tag) => /data|etl|llm/i.test(tag),
  strategy: (tag) => /strategy|advisory/i.test(tag),
};

const WORK = [
  { n: '01', slug: 'match-cuts', client: 'Match Cuts', tag: 'Vision · VLM', year: '2025', metric: '90 min → 3 min', desc: 'Auto-generated per-player highlight reels from full football matches.', sector: 'Sports Media' },
  { n: '02', slug: 'field-atlas', client: 'Field Atlas', tag: 'Data · ETL', year: '2025', metric: 'one source of truth', desc: 'ETL platform unifying field operations across an enterprise. Live dashboards, Gantt, automations.', sector: 'Enterprise PMO' },
  { n: '03', slug: 'telemetra', client: 'Telemetra', tag: 'Data · LLM', year: '2025', metric: 'NL → flight charts', desc: 'Post-flight PCAP analysis. Natural-language queries that emit dynamic plotting scripts.', sector: 'Aerospace' },
  { n: '04', slug: 'deskline', client: 'Deskline', tag: 'AI Agents', year: '2025', metric: '4× ticket velocity', desc: 'Teams-native chatbot that opens and manages Jira tickets in plain language.', sector: 'IT Ops' },
  { n: '05', slug: 'solo-studio', client: 'Solo Studio', tag: 'Strategy · Advisory', year: '2025', metric: '30 founders trained', desc: 'Vibe-coding accelerator curriculum for solo entrepreneurs shipping with GenAI + Copilot.', sector: 'Education' },
  { n: '06', slug: 'lloyd-score', client: 'Lloyd Score', tag: 'Data · LLM', year: '2025', metric: 'AIS-grade safety score', desc: 'Spatial AI for marine insurance. Ghost-fleet simulations quantify near-miss risk from AIS data.', sector: 'Insurance' },
  { n: '07', slug: 'auto-qto', client: 'Auto-QTO', tag: 'Vision · VLM', year: '2025', metric: '92% symbol recall', desc: 'Hybrid VLM engine extracts quantities from dense 2D construction drawings into a procurement BOM.', sector: 'Construction' },
  { n: '08', slug: 'forge-logistics', client: 'Forge Logistics', tag: 'AI Agents', year: '2025', metric: 'autonomous tendering', desc: 'GNN-driven procurement with risk + price weighting; MARL routing for last-mile dispatch.', sector: 'Supply Chain' },
  { n: '09', slug: 'caseworker', client: 'Caseworker', tag: 'AI Agents', year: '2025', metric: '−47% handle time', desc: 'Decision-support copilot for CX reps. Smart sub-tree LLM, handwriting OCR, full CRM integration.', sector: 'Customer Support' },
  { n: '10', slug: 'asktable', client: 'AskTable', tag: 'Data · LLM', year: '2024', metric: 'self-healing SQL', desc: 'Talk-to-data agent. Vector-RAG over the org ontology, semantic planner, runtime SQL repair.', sector: 'Enterprise Data' },
  { n: '11', slug: 'reachpoint', client: 'Reachpoint', tag: 'Vision · VLM', year: '2024', metric: 'real-time ROM', desc: 'Hand-rehab vision system. MAE + Graph-Guided Mamba for 3D reconstruction of fine motor tasks.', sector: 'MedTech' },
  { n: '12', slug: 'priority-pilot', client: 'Priority Pilot', tag: 'AI Agents', year: '2024', metric: '−6h/week per ops user', desc: 'Teams chatbot fronting an ERP. Free-text queries return SKUs, order status, training history.', sector: 'Manufacturing' },
  { n: '13', slug: 'slidekeep', client: 'Slidekeep', tag: 'Data · LLM', year: '2024', metric: 'always-current decks', desc: 'Automation that pulls live technical data into training decks; no more stale screenshots.', sector: 'L&D' },
  { n: '14', slug: 'confidential-engine', client: 'Confidential Engine', tag: 'Strategy · Advisory', year: '2024', metric: 'spec → ship', desc: 'End-to-end architecture lead for an AI engine: requirements, tech validation, code review, ship.', sector: 'Stealth' },
  { n: '15', slug: 'fractional-cto', client: 'Fractional CTO', tag: 'Strategy · Advisory', year: '2024', metric: '7 portfolios advised', desc: 'Embedded advisory for B2B founders putting AI agents into the core of their product.', sector: 'B2B SaaS' },
  { n: '16', slug: 'arc-concierge', client: 'Arc Concierge', tag: 'AI Agents', year: '2024', metric: '24/7 inbox cleared', desc: 'WhatsApp-native personal agent. Replies to clients, books meetings, edits the calendar.', sector: 'Productivity' },
  { n: '17', slug: 'northcell-pmo', client: 'Northcell PMO', tag: 'Data · ETL', year: '2024', metric: 'SharePoint → Power BI', desc: 'Enterprise data warehouse. Power Automate ingest, central model, exec Gantt for headcount.', sector: 'Enterprise PMO' },
];

export default function WorkBody() {
  const [activeFilter, setActiveFilter] = React.useState('all');
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="work" />
      <WorkHero />
      <WorkFilter active={activeFilter} setActive={setActiveFilter} />
      <WorkList activeFilter={activeFilter} />
      <BLFooter />
    </div>
  );
}

function WorkHero() {
  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 32px) clamp(32px, 5vw, 48px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// work · selected case studies · 17 / 34 public</BLEyebrow>
      <h1 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(56px, 13vw, 144px)',
        lineHeight: 0.94, letterSpacing: '-0.045em', color: BL.inkText, maxWidth: '12ch',
      }}>
        Things we<br />
        <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>shipped</span>.
      </h1>
      <p style={{
        marginTop: 'clamp(28px, 4vw, 40px)',
        fontFamily: BL.serif, fontSize: 'clamp(18px, 2.4vw, 24px)', lineHeight: 1.4,
        color: BL.inkText, maxWidth: '54ch', fontWeight: 300,
      }}>
        Every engagement below ended in production code, a measurable outcome, or both. The unsuccessful ones are filed under "honest deprecation" and we'll talk you through them on a call.
      </p>
    </section>
  );
}

function WorkFilter({ active, setActive }) {
  const isMobile = useMediaQuery(MQ.mobile);
  const filters = [
    { id: 'all', label: 'all', count: 17 },
    { id: 'agents', label: 'ai agents', count: 5 },
    { id: 'vision', label: 'vision · vlm', count: 4 },
    { id: 'data', label: 'data · etl · llm', count: 5 },
    { id: 'strategy', label: 'strategy · advisory', count: 3 },
  ];
  return (
    <div style={{
      padding: '14px clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
      display: 'flex', gap: 8, alignItems: 'center',
      position: 'sticky', top: 'var(--bl-nav-h, 49px)',
      background: BL.ink, zIndex: 10, fontFamily: BL.mono, fontSize: 12,
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      WebkitOverflowScrolling: 'touch',
    }}>
      {!isMobile && <span style={{ color: BL.inkDim, marginRight: 12, flexShrink: 0 }}>// filter:</span>}
      {filters.map(f => (
        <button key={f.id} onClick={() => setActive(f.id)} style={{
          padding: '6px 14px', border: `1px solid ${active === f.id ? BL.red : BL.inkLine}`,
          background: active === f.id ? BL.red : 'transparent',
          color: active === f.id ? BL.ink : BL.inkText, borderRadius: 0,
          fontFamily: BL.mono, fontSize: 12, fontWeight: 500, flexShrink: 0, cursor: 'pointer',
        }}>{f.label} <span style={{ opacity: 0.6, marginLeft: 4 }}>{f.count}</span></button>
      ))}
    </div>
  );
}

function WorkList({ activeFilter = 'all' }) {
  const matcher = WORK_FILTER_MATCH[activeFilter] || WORK_FILTER_MATCH.all;
  const hasCS = (w) => !!CASE_STUDIES[w.slug];
  const sorted = [...WORK].sort((a, b) => Number(hasCS(b)) - Number(hasCS(a)));
  const filtered = sorted.filter(w => matcher(w.tag));
  return (
    <section>
      <div style={{ borderTop: `1px solid ${BL.inkLine}` }}>
        {filtered.length === 0 ? (
          <div style={{ padding: 'clamp(40px, 8vw, 64px) clamp(20px, 4vw, 32px)', fontFamily: BL.mono, fontSize: 12, color: BL.inkDim, textAlign: 'center', borderBottom: `1px solid ${BL.inkLine}` }}>
            // no case studies match this filter
          </div>
        ) : (
          filtered.map((w) => (
            <WorkRow
              key={w.n}
              {...w}
              href={hasCS(w) ? `/work/${w.slug}` : null}
            />
          ))
        )}
      </div>
      <div style={{ padding: 'clamp(40px, 8vw, 64px) clamp(20px, 4vw, 32px)', textAlign: 'center', borderBottom: `1px solid ${BL.inkLine}` }}>
        <BLPillLink href="/contact">Request the private list →</BLPillLink>
      </div>
    </section>
  );
}

function WorkRow({ n, client, tag, year, metric, desc, sector, href }) {
  const [h, setH] = React.useState(false);
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  const isLinked = !!href;
  const hover = isLinked && h;
  const Tag = isLinked ? 'a' : 'div';
  const linkProps = isLinked
    ? {
        href,
        onMouseEnter: () => setH(true),
        onMouseLeave: () => setH(false),
      }
    : {};
  return (
    <Tag {...linkProps}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile
          ? '1fr'
          : isTablet
          ? '60px 1fr auto'
          : '60px 1fr 1.4fr 2fr 200px 60px',
        gridTemplateAreas: isMobile
          ? `"num" "client" "desc" "meta" "metric"`
          : isTablet
          ? `"num client metric" "desc desc desc" "meta meta meta"`
          : undefined,
        alignItems: isMobile ? 'flex-start' : 'center',
        padding: 'clamp(24px, 4vw, 32px) clamp(20px, 4vw, 32px)',
        borderBottom: `1px solid ${BL.inkLine}`,
        background: hover ? 'rgba(157,255,77,0.04)' : 'transparent',
        cursor: isLinked ? 'pointer' : 'default',
        opacity: isLinked ? 1 : 0.62,
        gap: isMobile ? 12 : isTablet ? 18 : 24,
        transition: 'background .15s',
        textDecoration: 'none', color: 'inherit',
      }}>
      <div style={{ gridArea: isMobile || isTablet ? 'num' : 'auto', fontFamily: BL.mono, fontSize: 12, color: BL.inkDim }}>/{n}</div>
      <div style={{
        gridArea: isMobile || isTablet ? 'client' : 'auto',
        fontFamily: BL.sans, fontSize: 'clamp(22px, 4vw, 32px)',
        fontWeight: 400, letterSpacing: '-0.015em',
        color: hover ? BL.red : BL.inkText, transition: 'color .15s',
      }}>{client}</div>
      <div style={{ gridArea: isMobile || isTablet ? 'desc' : 'auto' }}>
        <div style={{ fontFamily: BL.mono, fontSize: 10, color: BL.inkMuted, marginBottom: 4 }}>
          {tag.toUpperCase()} · {year}
          {!isLinked && <span style={{ marginLeft: 8, color: BL.inkDim }}>· on request</span>}
        </div>
        <div style={{ fontFamily: BL.serif, fontSize: 'clamp(15px, 2.2vw, 18px)', fontStyle: 'italic', color: BL.inkText }}>{desc}</div>
      </div>
      <div style={{ gridArea: isMobile || isTablet ? 'meta' : 'auto', fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted }}>{sector}</div>
      <div style={{ gridArea: isMobile || isTablet ? 'metric' : 'auto', textAlign: isMobile ? 'left' : 'right' }}>
        <div style={{ fontFamily: BL.serif, fontSize: 'clamp(24px, 4vw, 36px)', color: BL.copper, lineHeight: 1, fontWeight: 300 }}>{metric}</div>
      </div>
      {!isMobile && !isTablet && (
        <div style={{
          fontFamily: BL.mono, fontSize: 18, color: isLinked ? BL.inkText : BL.inkDim, textAlign: 'right',
          transform: hover ? 'translateX(8px)' : 'none', transition: 'transform .15s',
        }}>{isLinked ? '→' : '·'}</div>
      )}
    </Tag>
  );
}
