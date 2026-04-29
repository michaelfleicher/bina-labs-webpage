import React from 'react';
import { BL, MQ } from '../system/bl.js';
import { useMediaQuery } from '../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillButton } from '../components/Chrome.jsx';
import { CASE_STUDIES, CASE_STUDY_DEFAULT_SLUG } from '../data/caseStudies.js';

const getSlug = () => {
  const h = window.location.hash.slice(1);
  const parts = h.split('/');
  return parts[1] || CASE_STUDY_DEFAULT_SLUG;
};

export default function PageCaseStudy({ navigate }) {
  const [slug, setSlug] = React.useState(getSlug);
  React.useEffect(() => {
    const onHash = () => setSlug(getSlug());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const data = CASE_STUDIES[slug];

  if (!data) {
    return (
      <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
        <BLNav current={`work / ${slug}`} navigate={navigate} />
        <CSComingSoon slug={slug} navigate={navigate} />
        <BLFooter navigate={navigate} />
      </div>
    );
  }

  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current={`work / ${data.slug}`} navigate={navigate} />
      <CSHero data={data} />
      <CSMeta data={data} />
      <CSBrief data={data} />
      <CSStack data={data} />
      <CSOutcomes data={data} />
      <CSQuote data={data} />
      <CSRelated navigate={navigate} currentSlug={data.slug} />
      <BLFooter navigate={navigate} />
    </div>
  );
}

function CSHero({ data }) {
  return (
    <section style={{
      padding: 'clamp(40px, 7vw, 64px) clamp(20px, 4vw, 32px) clamp(32px, 5vw, 48px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <div onClick={() => history.back()} style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, cursor: 'pointer', marginBottom: 32 }} className="bl-link-hover">
        ← back to work
      </div>
      <BLEyebrow>{data.eyebrow}</BLEyebrow>
      <h1 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 13vw, 168px)',
        lineHeight: 0.92, letterSpacing: '-0.045em', color: BL.inkText,
      }}>
        {data.title}
      </h1>
      <p style={{
        marginTop: 32, fontFamily: BL.serif, fontSize: 'clamp(20px, 3.2vw, 32px)', lineHeight: 1.3,
        color: BL.inkText, maxWidth: '38ch', fontWeight: 300, fontStyle: 'italic',
      }}>
        {data.tagline}
      </p>
    </section>
  );
}

function CSMeta({ data }) {
  const meta = data.meta;
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  const cols = isMobile ? 1 : isTablet ? 2 : 5;
  return (
    <section style={{
      display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
      borderBottom: `1px solid ${BL.inkLine}`, padding: 0,
      background: BL.inkSoft,
    }}>
      {meta.map((m, i) => {
        const colIndex = i % cols;
        const rowIndex = Math.floor(i / cols);
        const isLastCol = colIndex === cols - 1;
        const isLastRow = rowIndex === Math.ceil(meta.length / cols) - 1;
        return (
          <div key={m.l} style={{
            padding: 'clamp(20px, 3vw, 28px) clamp(20px, 3vw, 24px)',
            borderRight: !isLastCol ? `1px solid ${BL.inkLine}` : 'none',
            borderBottom: !isLastRow ? `1px solid ${BL.inkLine}` : 'none',
          }}>
            <div style={{ fontFamily: BL.mono, fontSize: 10, color: BL.inkDim, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>{m.l}</div>
            <div style={{ fontFamily: BL.sans, fontSize: 16, color: BL.inkText, fontWeight: 400 }}>{m.v}</div>
          </div>
        );
      })}
    </section>
  );
}

function CSBrief({ data }) {
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '300px 1fr',
        gap: isTablet ? 24 : 64,
      }}>
        <BLEyebrow>// the brief</BLEyebrow>
        <div>
          <p style={{ fontFamily: BL.serif, fontSize: 'clamp(20px, 3.2vw, 28px)', lineHeight: 1.45, color: BL.inkText, fontWeight: 300, marginBottom: 32 }}>
            {data.brief.lead}
          </p>
          {data.brief.paras.map((p, i) => (
            <p key={i} style={{ fontFamily: BL.sans, fontSize: 16, lineHeight: 1.7, color: BL.inkMuted, maxWidth: '64ch', marginTop: i === 0 ? 0 : 16 }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSStack({ data }) {
  const [t1, t2] = data.stackTitle;
  const isMobile = useMediaQuery(MQ.mobile);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`, background: BL.inkSoft,
    }}>
      <BLEyebrow>// what we built</BLEyebrow>
      <h2 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(40px, 8vw, 80px)',
        letterSpacing: '-0.035em', lineHeight: 1, color: BL.inkText,
        marginBottom: 'clamp(40px, 6vw, 64px)',
      }}>
        {t1} <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.copper, fontWeight: 300 }}>{t2}</span>.
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: 1, background: BL.inkLine,
      }}>
        {data.stack.map(l => (
          <div key={l.n} style={{
            background: BL.ink,
            padding: 'clamp(28px, 4vw, 36px) clamp(20px, 3vw, 32px)',
            minHeight: isMobile ? 'auto' : 200,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted, marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
              <span>[{l.n}]</span>
              <span>{l.tech.join(' · ')}</span>
            </div>
            <div style={{ fontFamily: BL.sans, fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 300, letterSpacing: '-0.02em', color: BL.inkText, marginBottom: 12 }}>{l.t}</div>
            <div style={{ fontFamily: BL.serif, fontSize: 'clamp(15px, 2.4vw, 18px)', fontStyle: 'italic', color: BL.inkMuted, lineHeight: 1.5 }}>{l.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CSOutcomes({ data }) {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// outcomes</BLEyebrow>
      <h2 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(40px, 8vw, 80px)',
        letterSpacing: '-0.035em', color: BL.inkText,
        marginBottom: 'clamp(40px, 6vw, 64px)',
      }}>
        The receipts.
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: 1, background: BL.inkLine,
      }}>
        {data.outcomes.map((o, i) => (
          <div key={i} style={{ background: BL.ink, padding: 'clamp(28px, 4vw, 40px) clamp(20px, 3vw, 32px)' }}>
            <div style={{ fontFamily: BL.serif, fontSize: 'clamp(48px, 9vw, 88px)', lineHeight: 1, color: i % 2 === 0 ? BL.red : BL.copper, fontWeight: 300, letterSpacing: '-0.04em' }}>{o.v}</div>
            <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, marginTop: 16, lineHeight: 1.5 }}>{o.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CSQuote({ data }) {
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`, background: BL.inkSoft,
    }}>
      <div style={{ maxWidth: '60ch', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: BL.serif, fontSize: 'clamp(56px, 10vw, 96px)', lineHeight: 1, color: BL.red, fontWeight: 300 }}>"</div>
        <p style={{ fontFamily: BL.serif, fontSize: 'clamp(22px, 4vw, 36px)', fontStyle: 'italic', lineHeight: 1.35, color: BL.inkText, fontWeight: 300, margin: '0 0 32px' }}>
          {data.quote.text}
        </p>
        <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted }}>
          {data.quote.attr}
        </div>
      </div>
    </section>
  );
}

function CSRelated({ navigate, currentSlug }) {
  const all = Object.values(CASE_STUDIES).filter(c => c.slug !== currentSlug);
  const rel = all.slice(0, 3).map(c => ({
    slug: c.slug,
    client: c.client,
    tag: (c.eyebrow.match(/·\s*([a-z0-9 +·-]+)$/i) || [, 'case study'])[1],
    metric: (c.outcomes && c.outcomes[0]) ? `${c.outcomes[0].v} ${c.outcomes[0].l}` : 'see case study',
  }));
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// next case studies</BLEyebrow>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: 16, marginTop: 32,
      }}>
        {rel.map(r => (
          <div key={r.slug} onClick={() => navigate(`case-study/${r.slug}`)} style={{
            border: `1px solid ${BL.inkLine}`, padding: 'clamp(24px, 4vw, 32px)', cursor: 'pointer',
            background: 'rgba(232,241,247,0.02)',
            minHeight: isMobile ? 'auto' : 220,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            gap: 24,
          }}>
            <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted }}>{r.tag}</div>
            <div>
              <div style={{ fontFamily: BL.sans, fontSize: 'clamp(26px, 4.5vw, 36px)', fontWeight: 300, letterSpacing: '-0.02em', color: BL.inkText, marginBottom: 8 }}>{r.client}</div>
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(18px, 3vw, 22px)', color: BL.red, fontWeight: 300 }}>{r.metric}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CSComingSoon({ slug, navigate }) {
  const pretty = slug.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px) clamp(80px, 14vw, 160px)',
      borderBottom: `1px solid ${BL.inkLine}`, minHeight: '70vh',
    }}>
      <div onClick={() => navigate('work')} style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, cursor: 'pointer', marginBottom: 32 }} className="bl-link-hover">
        ← back to work
      </div>
      <BLEyebrow>// case_study · {slug} · write-up in progress</BLEyebrow>
      <h1 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 13vw, 144px)',
        lineHeight: 0.94, letterSpacing: '-0.045em', color: BL.inkText, maxWidth: '14ch',
      }}>
        {pretty}<span style={{ color: BL.red }}>.</span>
      </h1>
      <p style={{
        marginTop: 32, fontFamily: BL.serif, fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.4,
        color: BL.inkText, maxWidth: '52ch', fontWeight: 300, fontStyle: 'italic',
      }}>
        The full write-up for this engagement is still under client review. We can walk you through the build, the metrics, and the trade-offs on a call.
      </p>
      <div style={{ marginTop: 'clamp(32px, 6vw, 56px)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <BLPillButton primary onClick={() => navigate('contact')}>Request a walkthrough →</BLPillButton>
        <BLPillButton onClick={() => navigate('work')}>Back to all work</BLPillButton>
      </div>
    </section>
  );
}
