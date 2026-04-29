import React from 'react';
import { BL, MQ } from '../system/bl.js';
import { useMediaQuery } from '../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillButton, BLMarquee } from '../components/Chrome.jsx';

export default function PageHome({ navigate }) {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="home" navigate={navigate} />
      <HomeHero navigate={navigate} />
      <HomeMarquee />
      <HomeManifesto navigate={navigate} />
      <HomeWork navigate={navigate} />
      <HomeServices navigate={navigate} />
      <BLFooter navigate={navigate} />
    </div>
  );
}

function HomeHero({ navigate }) {
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
      padding: 'clamp(48px, 8vw, 72px) clamp(20px, 4vw, 32px) clamp(56px, 10vw, 96px)',
      position: 'relative',
      borderBottom: `1px solid ${BL.inkLine}`,
      backgroundImage: `linear-gradient(${BL.inkLine} 1px, transparent 1px),
                        linear-gradient(90deg, ${BL.inkLine} 1px, transparent 1px)`,
      backgroundSize: '64px 64px',
    }}>
      <div style={{
        fontFamily: BL.mono, fontSize: 11, marginBottom: 'clamp(24px, 5vw, 48px)',
        display: 'flex', gap: isMobile ? 12 : 24, color: BL.inkMuted,
        flexWrap: 'wrap',
      }}>
        <span style={{ color: BL.red }}>● ONLINE</span>
        <span><span style={{ color: BL.inkText }}>{count}</span> engagements shipped this year</span>
        <span>· Tel Aviv · Berlin · remote-first</span>
      </div>

      <h1 className="bl-fade-up" style={{
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 12vw, 156px)',
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

      <div style={{
        marginTop: 'clamp(40px, 6vw, 80px)',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.4fr 1fr 1fr',
        gap: isMobile ? 16 : 24,
      }}>
        <div style={{
          fontFamily: BL.mono, fontSize: 14, lineHeight: 1.65,
          color: BL.inkText, padding: 24,
          border: `1px solid ${BL.inkLine}`, background: 'rgba(232,241,247,0.02)',
          gridColumn: isTablet && !isMobile ? '1 / -1' : 'auto',
        }}>
          <div style={{ color: BL.inkDim, marginBottom: 8 }}>$ cat what-we-do.txt</div>
          <div><span style={{ color: BL.copper }}>→</span> A consultancy of engineers,</div>
          <div><span style={{ color: BL.copper }}>→</span> researchers and strategists.</div>
          <div><span style={{ color: BL.copper }}>→</span> We build AI systems that earn</div>
          <div><span style={{ color: BL.copper }}>→</span>   their seat at the production table.</div>
          <div style={{ color: BL.inkDim, marginTop: 8 }}>$ <span className="bl-cursor" style={{ color: BL.red }} /></div>
        </div>
        <StatBlock n="01" label="median ship time" value="14" unit="days" />
        <StatBlock n="02" label="repeat client rate" value="84" unit="%" accent />
      </div>

      <div style={{ marginTop: 'clamp(32px, 5vw, 56px)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <BLPillButton primary onClick={() => navigate('contact')}>Start a project →</BLPillButton>
        <BLPillButton onClick={() => navigate('work')}>See our work</BLPillButton>
      </div>
    </section>
  );
}

function StatBlock({ n, label, value, unit, accent }) {
  return (
    <div style={{
      border: `1px solid ${BL.inkLine}`, padding: 24,
      background: 'rgba(232,241,247,0.02)', position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: 10, right: 12, fontFamily: BL.mono, fontSize: 10, color: BL.inkDim }}>[{n}]</div>
      <div style={{
        fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted,
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16,
      }}>{label}</div>
      <div style={{
        fontFamily: BL.serif, fontSize: 'clamp(56px, 9vw, 96px)', lineHeight: 1,
        color: accent ? BL.red : BL.inkText, fontWeight: 300,
        letterSpacing: '-0.04em',
      }}>
        {value}<span style={{ fontSize: 'clamp(20px, 3vw, 32px)', color: BL.inkDim, marginLeft: 4 }}>{unit}</span>
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

function HomeManifesto({ navigate }) {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  const tenets = [
    { n: '01', t: 'Deadline is holy.', d: 'When we commit to a date, we hit it. Scope flexes, quality has a floor, but the deadline does not move.' },
    { n: '03', t: 'AI assistants are tools, not authors.', d: 'We use them to move faster, not to ship code no human on our team understands. Every line is owned by an operator who can defend it.' },
    { n: '05', t: 'Honest deprecation.', d: 'When a project should die, we tell you. We refund the rest of the engagement.' },
    { n: '06', t: 'Built to leave.', d: 'Embedded engagements come with a written hand-off plan from day one.' },
  ];
  const cols = isMobile ? 1 : isTablet ? 2 : 4;
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// 02_manifesto · last edited 2026-04-12 by creative_agent@bina-labs.com</BLEyebrow>
      <h2 style={{
        marginTop: 32,
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 11vw, 108px)',
        lineHeight: 1.0, letterSpacing: '-0.04em', color: BL.inkText, maxWidth: '14ch',
      }}>
        Decks don't<br />
        run in <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>production</span>.
      </h2>
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
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(22px, 3.5vw, 30px)', lineHeight: 1.1, color: BL.inkText, fontWeight: 400 }}>{p.t}</div>
              <div style={{ fontFamily: BL.mono, fontSize: 13, lineHeight: 1.55, color: BL.inkMuted }}>{p.d}</div>
            </div>
          );
        })}
      </div>
      <a onClick={() => navigate('manifesto')} style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 'clamp(32px, 6vw, 56px)',
        fontFamily: BL.mono, fontSize: 13, color: BL.inkText, cursor: 'pointer',
      }} className="bl-link-hover">
        Read the full manifesto →
      </a>
    </section>
  );
}

function HomeWork({ navigate }) {
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
        <a onClick={() => navigate('work')} style={{ cursor: 'pointer', color: BL.inkText }} className="bl-link-hover">all 17 →</a>
      </div>
      <div style={{ borderTop: `1px solid ${BL.inkLine}` }}>
        {work.map((w, i) => (
          <div key={w.n}
            onClick={() => navigate(`case-study/${w.slug}`)}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : isTablet
                ? '60px 1fr auto'
                : '80px 1.4fr 2fr 200px 60px',
              gridTemplateAreas: isMobile
                ? `"num" "client" "desc" "metric"`
                : isTablet
                ? `"num client metric" "desc desc desc"`
                : undefined,
              alignItems: isMobile ? 'flex-start' : 'center',
              padding: 'clamp(24px, 4vw, 40px) clamp(16px, 3vw, 24px)',
              borderBottom: `1px solid ${BL.inkLine}`,
              background: hover === i ? 'rgba(157,255,77,0.04)' : 'transparent',
              cursor: 'pointer',
              gap: isMobile ? 16 : isTablet ? 20 : 32,
              transition: 'background .15s',
            }}>
            <div style={{ gridArea: isMobile || isTablet ? 'num' : 'auto', fontFamily: BL.mono, fontSize: 12, color: BL.inkDim }}>{w.n}</div>
            <div style={{
              gridArea: isMobile || isTablet ? 'client' : 'auto',
              fontFamily: BL.sans,
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: 400, letterSpacing: '-0.015em',
              color: hover === i ? BL.red : BL.inkText, transition: 'color .15s',
            }}>{w.client}</div>
            <div style={{ gridArea: isMobile || isTablet ? 'desc' : 'auto' }}>
              <div style={{ fontFamily: BL.mono, fontSize: 10, color: BL.inkMuted, marginBottom: 6, letterSpacing: '0.06em' }}>{w.tag}</div>
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(16px, 2.5vw, 20px)', fontStyle: 'italic', color: BL.inkText, fontWeight: 400 }}>{w.desc}</div>
            </div>
            <div style={{ gridArea: isMobile || isTablet ? 'metric' : 'auto', textAlign: isMobile ? 'left' : 'right' }}>
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(36px, 6vw, 52px)', color: BL.red, lineHeight: 1, fontWeight: 300 }}>{w.metric}</div>
              <div style={{ fontFamily: BL.mono, fontSize: 10, color: BL.inkDim, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{w.metricLabel}</div>
            </div>
            {!isMobile && !isTablet && (
              <div style={{
                fontFamily: BL.mono, fontSize: 18, color: BL.inkText, textAlign: 'right',
                transform: hover === i ? 'translateX(8px)' : 'none', transition: 'transform .15s',
              }}>→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeServices({ navigate }) {
  const services = [
    { n: 'svc.01', name: 'AI Strategy', tags: ['roadmap', 'evals', 'org-design'], desc: '4-week intensives. Where to bet, where to wait, what to ignore.' },
    { n: 'svc.02', name: 'AI / Software Engineering', tags: ['full-stack', 'rag', 'agents', 'on-prem'], desc: 'Embedded squads that ship product and the AI plumbing underneath it.' },
    { n: 'svc.03', name: 'Lectures & Workshops', tags: ['r&d', 'c-suite', 'hands-on', 'briefings'], desc: 'Tailored sessions for R&D teams and executives. What is real, what is one paper away, what is marketing.' },
    { n: 'svc.04', name: 'Research', tags: ['frontier', 'papers', 'prototypes'], desc: 'Applied research with frontier teams. Sometimes a paper. Occasionally a product.' },
  ];

  const isMobile = useMediaQuery(MQ.mobile);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`, background: BL.inkSoft,
    }}>
      <BLEyebrow>// 04_services</BLEyebrow>
      <h2 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 10vw, 96px)',
        lineHeight: 1, letterSpacing: '-0.04em',
        marginBottom: 'clamp(40px, 6vw, 64px)', color: BL.inkText,
      }}>
        Four ways<br />
        we <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>engage</span>.
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: 1, background: BL.inkLine,
      }}>
        {services.map((s) => (
          <div key={s.n} onClick={() => navigate('services')} style={{
            background: BL.ink,
            padding: 'clamp(28px, 5vw, 44px) clamp(20px, 4vw, 36px)',
            minHeight: isMobile ? 'auto' : 260, cursor: 'pointer',
            transition: 'background .2s',
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0e1c30'}
            onMouseLeave={(e) => e.currentTarget.style.background = BL.ink}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted, marginBottom: 16,
            }}>
              <span>{s.n}</span><span>↗</span>
            </div>
            <div style={{
              fontFamily: BL.sans,
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 300, letterSpacing: '-0.025em', color: BL.inkText, marginBottom: 16,
            }}>
              {s.name}
            </div>
            <div style={{ fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted, lineHeight: 1.55, marginBottom: 24 }}>{s.desc}</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {s.tags.map((t) => (
                <span key={t} style={{
                  fontFamily: BL.mono, fontSize: 11, padding: '4px 10px',
                  border: `1px solid ${BL.inkLine}`, color: BL.inkMuted,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
