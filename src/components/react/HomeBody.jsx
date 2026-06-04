import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillLink, BLMarquee } from '../Chrome.jsx';
import FAQSection from './FAQSection.jsx';

export default function HomeBody({ faqs }) {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="home" />
      <HomeHero />
      <HomeMarquee />
      <HomeManifesto />
      <HomeWork />
      <HomeServices />
      <FAQSection faqs={faqs} eyebrow="// 05_faq" headline="Questions, answered" headlineAccent="answered" />
      <BLFooter />
    </div>
  );
}

function HomeHero() {
  const [count, setCount] = React.useState(0);
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => { i++; setCount(i); if (i >= 17) clearInterval(id); }, 60);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{
      padding: isMobile
        ? '40px 20px 48px'
        : 'clamp(48px, 8vw, 72px) clamp(20px, 4vw, 32px) clamp(56px, 10vw, 96px)',
      position: 'relative',
      borderBottom: `1px solid ${BL.inkLine}`,
      backgroundImage: `linear-gradient(${BL.inkLine} 1px, transparent 1px),
                        linear-gradient(90deg, ${BL.inkLine} 1px, transparent 1px)`,
      backgroundSize: '64px 64px',
    }}>
      <div style={{
        fontFamily: BL.mono, fontSize: 11, marginBottom: isMobile ? 24 : 'clamp(24px, 5vw, 48px)',
        display: 'flex', gap: isMobile ? 12 : 24, color: BL.inkMuted,
        flexWrap: 'wrap',
      }}>
        <span style={{ color: BL.red }}>● ONLINE</span>
        <span><span style={{ color: BL.inkText }}>{count}</span> engagements shipped this year</span>
        {!isMobile && <span>· Tel Aviv · Berlin · remote-first</span>}
      </div>

      <h1 className="bl-fade-up" aria-label="What is Bina Labs?" style={{
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: isMobile ? BL.type.h1.mobile : BL.type.h1.desktop,
        lineHeight: 0.94, letterSpacing: '-0.045em',
        margin: 0, color: BL.inkText, maxWidth: '15ch',
      }}>
        Architectural<br />
        intelligence<br />
        <span style={{ fontFamily: BL.serif, fontStyle: 'italic', fontWeight: 300, color: BL.red }}>
          of tomorrow_
        </span>
        <span className="bl-cursor" style={{ color: BL.red }} />
      </h1>

      <h2 className="bl-fade-up" aria-label="What does Bina Labs do?" style={{
        marginTop: isMobile ? 20 : 'clamp(24px, 3vw, 36px)',
        fontFamily: BL.serif, fontStyle: 'italic', fontWeight: 300,
        fontSize: isMobile ? 18 : 'clamp(20px, 2.4vw, 28px)',
        lineHeight: 1.35, letterSpacing: '-0.01em',
        color: BL.inkMuted, maxWidth: '46ch',
      }}>
        AI consulting and engineering studio. We build production AI systems
        for founders and engineering teams - vision, agents, RAG, on-prem.
        Tel Aviv, Berlin, remote-first.
      </h2>

      <div style={{
        marginTop: isMobile ? 28 : 'clamp(32px, 5vw, 56px)',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr' : '1.4fr 1fr 1fr',
        gap: isMobile ? 12 : 24,
      }}>
        <div style={{
          fontFamily: BL.mono, fontSize: isMobile ? 13 : 14, lineHeight: 1.65,
          color: BL.inkText, padding: isMobile ? 20 : 24,
          border: `1px solid ${BL.inkLine}`, background: 'rgba(232,241,247,0.02)',
          gridColumn: (isMobile || (isTablet && !isMobile)) ? '1 / -1' : 'auto',
        }}>
          <div style={{ color: BL.inkDim, marginBottom: 8 }}>$ cat what-we-do.txt</div>
          <div><span style={{ color: BL.copper }}>→</span> A consultancy of engineers,</div>
          <div><span style={{ color: BL.copper }}>→</span> researchers and strategists.</div>
          <div><span style={{ color: BL.copper }}>→</span> We build AI systems that earn</div>
          <div><span style={{ color: BL.copper }}>→</span>   their seat at the production table.</div>
          <div style={{ color: BL.inkDim, marginTop: 8 }}>$ <span className="bl-cursor" style={{ color: BL.red }} /></div>
        </div>
        <StatBlock n="01" label="median ship time" value="11" unit="days" isMobile={isMobile} />
        <StatBlock n="02" label="repeat client rate" value="84" unit="%" accent isMobile={isMobile} />
      </div>

      {isMobile && (
        <div style={{
          marginTop: 20, fontFamily: BL.mono, fontSize: 11, color: BL.inkDim, letterSpacing: '0.04em',
        }}>
          Tel Aviv · Berlin · remote-first
        </div>
      )}

      <div style={{ marginTop: isMobile ? 28 : 'clamp(32px, 5vw, 56px)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <BLPillLink primary href="/contact">Start a project →</BLPillLink>
        <BLPillLink href="/work">See our work</BLPillLink>
      </div>
    </section>
  );
}

function StatBlock({ n, label, value, unit, accent, isMobile }) {
  return (
    <div style={{
      border: `1px solid ${BL.inkLine}`, padding: isMobile ? 16 : 24,
      background: 'rgba(232,241,247,0.02)', position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: 10, right: 12, fontFamily: BL.mono, fontSize: 10, color: BL.inkDim }}>[{n}]</div>
      <div style={{
        fontFamily: BL.mono, fontSize: isMobile ? 10 : 11, color: BL.inkMuted,
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: isMobile ? 10 : 16,
        paddingRight: 32,
      }}>{label}</div>
      <div style={{
        fontFamily: BL.serif, fontSize: isMobile ? 48 : 'clamp(56px, 9vw, 96px)', lineHeight: 1,
        color: accent ? BL.red : BL.inkText, fontWeight: 300,
        letterSpacing: '-0.04em',
      }}>
        {value}<span style={{ fontSize: isMobile ? 18 : 'clamp(20px, 3vw, 32px)', color: BL.inkDim, marginLeft: 4 }}>{unit}</span>
      </div>
    </div>
  );
}

function HomeMarquee() {
  const items = [
    'Match Cuts — 90 min → 3 min highlights',
    'Field Atlas — single source of truth',
    'Telemetra — NL flight analysis',
    'Auto-QTO — 92% symbol recall',
    'Lloyd Score — AIS-grade safety scoring',
    'AskTable — self-healing SQL',
    'Caseworker — −47% handle time',
    'Reachpoint — real-time hand ROM',
  ];
  return <BLMarquee items={items} />;
}

function HomeManifesto() {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  const allTenets = [
    { n: '01', t: 'Deadline is holy.', q: 'Why is hitting the ship date non-negotiable at Bina Labs?', d: 'When we commit to a date, we hit it. Scope flexes, quality has a floor, but the deadline does not move.' },
    { n: '02', t: 'AI assistants are tools, not authors.', q: 'How does Bina Labs use AI coding assistants?', d: 'We use them to move faster, not to ship code no human on our team understands. Every line is owned by an operator who can defend it.' },
    { n: '03', t: 'Honest deprecation.', q: 'What happens when a Bina Labs project should not ship?', d: 'When a project should die, we tell you. We refund the rest of the engagement.' },
    { n: '04', t: 'Built to leave.', q: 'Why is every Bina Labs engagement designed to end?', d: 'Embedded engagements come with a written hand-off plan from day one.' },
  ];
  const tenets = isMobile ? allTenets.slice(0, 3) : allTenets;
  const hiddenCount = allTenets.length - tenets.length;
  const cols = isMobile ? 1 : isTablet ? 2 : 4;
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// 02_manifesto · last edited 2026-04-12 by creative_agent@bina-labs.com</BLEyebrow>
      <h2 aria-label="Why don't strategy decks ship AI to production?" style={{
        marginTop: 32,
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 11vw, 108px)',
        lineHeight: 1.0, letterSpacing: '-0.04em', color: BL.inkText, maxWidth: '14ch',
      }}>
        Decks don't<br />
        run in <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>production</span>.
      </h2>
      <p style={{
        fontFamily: BL.mono,
        fontSize: 13,
        lineHeight: 1.55,
        color: BL.inkMuted,
        marginTop: 20,
        maxWidth: '62ch',
      }}>
        <span style={{ color: BL.copper, fontWeight: 500 }}>Why don't strategy decks ship AI to production?</span>{' '}
        Decks describe ambition; production AI needs evals, retrieval pipelines, on-prem cost budgets, and someone willing to debug at 2 a.m. Bina Labs builds the system, hands you the runbook, and leaves on day 90 with your team owning the code.
      </p>
      <div style={{
        display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
        marginTop: 'clamp(48px, 8vw, 80px)', borderTop: `1px solid ${BL.inkLine}`,
      }}>
        {tenets.map((p, i) => {
          const colIndex = i % cols;
          const rowIndex = Math.floor(i / cols);
          const isLastCol = colIndex === cols - 1;
          const isLastRow = rowIndex === Math.ceil(tenets.length / cols) - 1;
          return (
            <div key={p.n} style={{
              padding: 'clamp(28px, 4vw, 36px) clamp(20px, 3vw, 28px)',
              borderRight: !isLastCol ? `1px solid ${BL.inkLine}` : 'none',
              borderBottom: !isLastRow ? `1px solid ${BL.inkLine}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 16, minHeight: isMobile ? 'auto' : 280,
            }}>
              <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.red }}>[{p.n}]</div>
              <div aria-label={p.q} style={{ fontFamily: BL.serif, fontSize: 'clamp(22px, 3.5vw, 30px)', lineHeight: 1.1, color: BL.inkText, fontWeight: 400 }}>{p.t}</div>
              <div style={{ fontFamily: BL.mono, fontSize: 13, lineHeight: 1.55, color: BL.inkMuted }}>{p.d}</div>
            </div>
          );
        })}
      </div>
      <a href="/manifesto" style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 'clamp(32px, 6vw, 56px)',
        fontFamily: BL.mono, fontSize: 13, color: BL.inkText, cursor: 'pointer',
        minHeight: BL.tap, paddingTop: 8, paddingBottom: 8, textDecoration: 'none',
      }} className="bl-link-hover">
        {hiddenCount > 0 ? `+${hiddenCount} more · read the full manifesto →` : 'Read the full manifesto →'}
      </a>
    </section>
  );
}

function HomeWork() {
  const work = [
    { n: '/01', slug: 'match-cuts', client: 'MATCH CUTS', tag: 'VISION · VLM · 6MO', metric: '90→33', metricLabel: 'min, per player', desc: 'Auto-edited highlight reels from full football matches.' },
    { n: '/02', slug: 'auto-qto', client: 'AUTO-QTO', tag: 'VISION · VLM · 8MO', metric: '92%', metricLabel: 'symbol recall', desc: 'Hybrid VLM extracting BOMs from dense construction drawings.' },
    { n: '/03', slug: 'lloyd-score', client: 'LLOYD SCORE', tag: 'DATA · LLM · 9MO', metric: 'AIS', metricLabel: 'ghost-fleet sims', desc: 'Spatial AI that quantifies near-miss risk for marine insurers.' },
    { n: '/04', slug: 'caseworker', client: 'CASEWORKER', tag: 'AGENTS · EMBEDDED · 7MO', metric: '−47%', metricLabel: 'handle time', desc: 'CX copilot: smart sub-tree LLM, handwriting OCR, full CRM.' },
  ];

  const [hover, setHover] = React.useState(null);
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 'clamp(32px, 6vw, 56px)', fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted,
      }}>
        <BLEyebrow>// 03_selected_work</BLEyebrow>
        <a href="/work" style={{ cursor: 'pointer', color: BL.inkText, textDecoration: 'none' }} className="bl-link-hover">all 17 →</a>
      </div>
      <div style={{ borderTop: `1px solid ${BL.inkLine}` }}>
        {work.map((w, i) => (
          <a key={w.n}
            href={`/work/${w.slug}`}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : isTablet
                ? '60px 1fr auto'
                : '80px 1.4fr 2fr 200px 60px',
              gridTemplateAreas: isMobile
                ? `"num" "client" "metric"`
                : isTablet
                ? `"num client metric" "desc desc desc"`
                : undefined,
              alignItems: isMobile ? 'flex-start' : 'center',
              padding: isMobile ? '20px 16px' : 'clamp(24px, 4vw, 40px) clamp(16px, 3vw, 24px)',
              borderBottom: `1px solid ${BL.inkLine}`,
              background: hover === i ? 'rgba(157,255,77,0.04)' : 'transparent',
              cursor: 'pointer',
              gap: isMobile ? 8 : isTablet ? 20 : 32,
              minHeight: isMobile ? BL.tap : 'auto',
              transition: 'background .15s',
              textDecoration: 'none', color: 'inherit',
            }}>
            <div style={{ gridArea: isMobile || isTablet ? 'num' : 'auto', fontFamily: BL.mono, fontSize: 12, color: BL.inkDim }}>{w.n}</div>
            <div style={{
              gridArea: isMobile || isTablet ? 'client' : 'auto',
              fontFamily: BL.sans,
              fontSize: isMobile ? 28 : 'clamp(28px, 5vw, 40px)',
              fontWeight: 400, letterSpacing: '-0.015em',
              color: hover === i ? BL.red : BL.inkText, transition: 'color .15s',
            }}>{w.client}</div>
            {!isMobile && (
              <div style={{ gridArea: isTablet ? 'desc' : 'auto' }}>
                <div style={{ fontFamily: BL.mono, fontSize: 10, color: BL.inkMuted, marginBottom: 6, letterSpacing: '0.06em' }}>{w.tag}</div>
                <div style={{ fontFamily: BL.serif, fontSize: 'clamp(16px, 2.5vw, 20px)', fontStyle: 'italic', color: BL.inkText, fontWeight: 400 }}>{w.desc}</div>
              </div>
            )}
            <div style={{ gridArea: isMobile || isTablet ? 'metric' : 'auto', textAlign: isMobile ? 'left' : 'right' }}>
              <div style={{ fontFamily: BL.serif, fontSize: isMobile ? 36 : 'clamp(36px, 6vw, 52px)', color: BL.red, lineHeight: 1, fontWeight: 300 }}>{w.metric}</div>
              <div style={{ fontFamily: BL.mono, fontSize: 10, color: BL.inkDim, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{w.metricLabel}</div>
            </div>
            {!isMobile && !isTablet && (
              <div style={{
                fontFamily: BL.mono, fontSize: 18, color: BL.inkText, textAlign: 'right',
                transform: hover === i ? 'translateX(8px)' : 'none', transition: 'transform .15s',
              }}>→</div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

function HomeServices() {
  const services = [
    { n: 'svc.01', name: 'AI Strategy', q: 'What does a Bina Labs AI Strategy engagement deliver?', tags: ['roadmap', 'evals', 'org-design'], desc: '4-week intensives. Where to bet, where to wait, what to ignore.' },
    { n: 'svc.02', name: 'AI / Software Engineering', q: 'How does embedded AI engineering with Bina Labs work?', tags: ['full-stack', 'rag', 'agents', 'on-prem'], desc: 'Embedded squads that ship product and the AI plumbing underneath it.' },
    { n: 'svc.03', name: 'Lectures & Workshops', q: 'What do Bina Labs lectures and workshops cover?', tags: ['r&d', 'c-suite', 'hands-on', 'briefings'], desc: 'Tailored sessions for R&D teams and executives. What is real, what is one paper away, what is marketing.' },
    { n: 'svc.04', name: 'Research', q: 'What kind of research does Bina Labs take on?', tags: ['frontier', 'papers', 'prototypes'], desc: 'Applied research with frontier teams. Sometimes a paper. Occasionally a product.' },
    { n: 'svc.05', name: 'Innovation & Grant Strategy', q: 'What does a Bina Labs Innovation & Grant Strategy engagement deliver?', tags: ['funding', 'grants', 'strategy', 'due-diligence'], desc: 'Turn breakthrough tech into funded ventures. Competitive grants, business plans, and R&D roadmapping.' },
  ];

  const isMobile = useMediaQuery(MQ.mobile);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`, background: BL.inkSoft,
    }}>
      <BLEyebrow>// 04_services</BLEyebrow>
      <h2 aria-label="How can you engage Bina Labs?" style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 10vw, 96px)',
        lineHeight: 1, letterSpacing: '-0.04em',
        color: BL.inkText,
      }}>
        Five ways<br />
        we <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>engage</span>.
      </h2>
      <p style={{
        fontFamily: BL.mono,
        fontSize: 13,
        lineHeight: 1.55,
        color: BL.inkMuted,
        marginTop: 20,
        marginBottom: 'clamp(40px, 6vw, 64px)',
        maxWidth: '62ch',
      }}>
        <span style={{ color: BL.copper, fontWeight: 500 }}>How can you engage Bina Labs?</span>{' '}
        Five formats with transparent USD pricing: AI Strategy as a fixed-scope sprint from $10k (2 to 6 weeks), AI/Software Engineering as an embedded squad from $20k a month (3 to 12 months), Fractional CTO from $7k a month, Innovation & Grant Strategy on custom terms, and Research retainers on custom terms. Every engagement comes with a written hand-off plan and an honest-deprecation guarantee.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: 1, background: BL.inkLine,
      }}>
        {services.map((s) => (
          <a key={s.n} href="/services" style={{
            background: BL.ink,
            padding: isMobile ? '24px 20px' : 'clamp(28px, 5vw, 44px) clamp(20px, 4vw, 36px)',
            minHeight: isMobile ? 'auto' : 260, cursor: 'pointer',
            transition: 'background .2s', textDecoration: 'none', color: 'inherit',
            display: 'block',
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0e1c30'}
            onMouseLeave={(e) => e.currentTarget.style.background = BL.ink}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted, marginBottom: isMobile ? 10 : 16,
            }}>
              <span>{s.n}</span><span>↗</span>
            </div>
            <div aria-label={s.q} style={{
              fontFamily: BL.sans,
              fontSize: isMobile ? 26 : 'clamp(28px, 5vw, 44px)',
              fontWeight: 300, letterSpacing: '-0.025em', color: BL.inkText,
              marginBottom: isMobile ? 12 : 16,
            }}>
              {s.name}
            </div>
            {!isMobile && (
              <div style={{ fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted, lineHeight: 1.55, marginBottom: 24 }}>{s.desc}</div>
            )}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {s.tags.map((t) => (
                <span key={t} style={{
                  fontFamily: BL.mono, fontSize: 11, padding: '4px 10px',
                  border: `1px solid ${BL.inkLine}`, color: BL.inkMuted,
                }}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
