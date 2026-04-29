import React from 'react';
import ReactDOM from 'react-dom';
import { BL, MQ } from '../system/bl.js';
import { useMediaQuery } from '../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow } from '../components/Chrome.jsx';
import michaelImg from '../assets/michael.png';

const RECEIPTS = [
  { y: '2× ex-CTO', d: 'MedTech · Insurance · AI SaaS', tag: 'leadership' },
  { y: 'Engineer', d: 'Semiconductors · production systems', tag: 'craft' },
  { y: 'Data scientist', d: 'Entertainment · applied ML', tag: 'craft' },
  { y: 'Founder', d: 'Bina Labs · Storywise', tag: 'ventures' },
];

const PRINCIPLES = [
  { n: '01', t: 'Deadline is holy', d: 'We commit to a date and we hit it. Scope flexes, quality has a floor, the date does not move.' },
  { n: '04', t: 'Prototype before contract', d: 'Every engagement starts with a 4-week paid pilot - working code in your environment before a 40-page SOW.' },
  { n: '05', t: 'Refund the rest', d: "When a project should die, we say so and refund the unused portion. We've done it four times." },
  { n: '06', t: 'Built to leave', d: 'Hand-off plan from day one. Documented, deployable, owned by your team. We are not the integration tax forever.' },
];

const ROLES = [
  { t: 'Senior AI Engineer', loc: 'Remote · contract', notes: 'agents, RAG, evals' },
  { t: 'Product Designer (UI/UX)', loc: 'Remote · contract', notes: 'AI-native interfaces' },
  { t: 'Applied Researcher', loc: 'Remote · part-time', notes: 'long-context, retrieval' },
  { t: 'Full-Stack Engineer', loc: 'Remote · contract', notes: 'TS, Python, infra' },
];

export default function PageAbout({ navigate }) {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="about" navigate={navigate} />
      <OperatorHero />
      <OperatorReceipts />
      <OperatorHowWeWork />
      <OperatorHiring navigate={navigate} />
      <OperatorPrinciples />
      <BLFooter navigate={navigate} />
    </div>
  );
}

function BenchBlurb() {
  return (
    <div style={{ fontFamily: BL.serif, fontSize: 17, fontStyle: 'italic', color: BL.inkMuted, lineHeight: 1.55, fontWeight: 300 }}>
      For larger scopes we extend with a vetted internal bench - product, UI/UX,
      and engineering, both local and offshore. You always work directly with
      the principal; the bench scales the build, not the relationship.
    </div>
  );
}

function OperatorHero() {
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 32px) clamp(48px, 8vw, 72px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// about · the operator</BLEyebrow>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '1.4fr 1fr',
        gap: isTablet ? 32 : 64,
        marginTop: 40, alignItems: 'start',
      }}>
        <div>
          <h1 style={{
            fontFamily: BL.sans, fontWeight: 300,
            fontSize: 'clamp(52px, 12vw, 132px)',
            lineHeight: 0.94,
            letterSpacing: '-0.045em', color: BL.inkText, maxWidth: '14ch',
          }}>
            One operator.<br />
            <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>Senior by default.</span>
          </h1>
          <p style={{
            marginTop: 'clamp(24px, 4vw, 40px)',
            fontFamily: BL.serif, fontSize: 'clamp(18px, 2.4vw, 24px)', lineHeight: 1.45,
            color: BL.inkText, maxWidth: '52ch', fontWeight: 300,
          }}>
            Bina Labs is a consulting and development studio led by{' '}
            <span style={{ color: BL.red }}>Michael Fleicher</span> - engineer,
            data scientist, founder, two-time CTO. The person you meet is the
            person who builds.
          </p>
        </div>
        <div style={{ maxWidth: isTablet ? 360 : 'none' }}>
          <PortraitFrame label="michael_fleicher.jpg" />
          <div style={{ marginTop: 14, fontFamily: BL.mono, fontSize: 11, color: BL.inkDim, lineHeight: 1.6 }}>
            Founder & Principal · Bina Labs<br />
            Tel Aviv → Berlin → remote-first
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitFrame({ label }) {
  return (
    <div style={{
      aspectRatio: '4/5',
      backgroundColor: BL.inkSoft,
      position: 'relative', border: `1px solid ${BL.inkLine}`,
      overflow: 'hidden',
    }}>
      <img
        src={michaelImg}
        alt="Michael Fleicher"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 18%',
          filter: 'grayscale(1) contrast(1.02)',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, ${BL.ink}00 55%, ${BL.ink}55 100%)`,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', top: 12, left: 14, fontFamily: BL.mono, fontSize: 10, color: BL.bone, opacity: 0.85, mixBlendMode: 'difference' }}>{label}</div>
      <div style={{ position: 'absolute', top: 12, right: 14, width: 8, height: 8, background: BL.red }} />
      <div style={{ position: 'absolute', bottom: 12, left: 14, fontFamily: BL.mono, fontSize: 10, color: BL.bone, opacity: 0.85, mixBlendMode: 'difference' }}>// fleicher_m</div>
      <div style={{ position: 'absolute', bottom: 12, right: 14, fontFamily: BL.mono, fontSize: 10, color: BL.bone, opacity: 0.85, mixBlendMode: 'difference' }}>4:5</div>
    </div>
  );
}

function OperatorReceipts() {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 96px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '1fr 1.6fr',
        gap: isTablet ? 32 : 64, alignItems: 'start',
      }}>
        <div>
          <BLEyebrow>// receipts</BLEyebrow>
          <h2 style={{
            marginTop: 24, fontFamily: BL.sans, fontWeight: 300,
            fontSize: 'clamp(36px, 6vw, 56px)',
            letterSpacing: '-0.03em', color: BL.inkText, lineHeight: 1,
          }}>
            Where we've <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.copper, fontWeight: 300 }}>been</span>.
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: BL.serif, fontSize: 'clamp(17px, 2.4vw, 22px)', lineHeight: 1.55, color: BL.inkText, fontWeight: 300, maxWidth: '54ch' }}>
            Vast experience as a founder and as a two-time CTO, leading tech teams across AI SaaS Companies. Background is varied from MedTech, to Insurance, Entertainment and Semi-conductors industry. Hands-on, building product, agentic systems, and automations since 2017.
          </p>
          <div style={{ marginTop: 40, borderTop: `1px solid ${BL.inkLine}` }}>
            {RECEIPTS.map((r, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr auto' : '180px 1fr 100px',
                padding: 'clamp(14px, 2vw, 20px) 0',
                borderBottom: `1px solid ${BL.inkLine}`,
                alignItems: 'baseline',
                gap: isMobile ? 12 : 24,
              }}>
                <div style={{ fontFamily: BL.sans, fontSize: 'clamp(18px, 3vw, 22px)', color: BL.inkText, fontWeight: 400, letterSpacing: '-0.01em' }}>{r.y}</div>
                {!isMobile && (
                  <div style={{ fontFamily: BL.serif, fontSize: 18, fontStyle: 'italic', color: BL.inkMuted, fontWeight: 300 }}>{r.d}</div>
                )}
                <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.copper, textAlign: 'right', letterSpacing: '0.04em' }}>[{r.tag}]</div>
                {isMobile && (
                  <div style={{ gridColumn: '1 / -1', fontFamily: BL.serif, fontSize: 16, fontStyle: 'italic', color: BL.inkMuted, fontWeight: 300, marginTop: -4 }}>{r.d}</div>
                )}
              </div>
            ))}
          </div>
          <a href="https://www.linkedin.com/in/michaelfleicher" target="_blank" rel="noreferrer"
            className="bl-link-hover"
            style={{ display: 'inline-block', marginTop: 28, fontFamily: BL.mono, fontSize: 13, color: BL.red, letterSpacing: '0.04em' }}>
            linkedin.com/in/michaelfleicher →
          </a>
        </div>
      </div>
    </section>
  );
}

function OperatorHowWeWork() {
  const phases = [
    { n: '01', t: 'Discovery', d: 'Direct work with the principal. Frame the problem, scope a sprint, set evals before we write code.' },
    { n: '02', t: 'Build', d: 'A small senior team. Code, models, infra. Weekly demo, no status theater.' },
    { n: '03', t: 'Scale', d: 'When the build needs more horsepower, we extend with our internal bench - product, design, engineering.' },
    { n: '04', t: 'Handoff', d: 'You own the system. Documented, evaluated, deployable. We are not the integration tax forever.' },
  ];
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  const cols = isMobile ? 1 : isTablet ? 2 : 4;
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`, background: BL.inkSoft,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isTablet ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isTablet ? 'flex-start' : 'baseline',
        gap: isTablet ? 24 : 32,
        marginBottom: 'clamp(32px, 6vw, 56px)',
      }}>
        <div>
          <BLEyebrow>// how we work</BLEyebrow>
          <h2 style={{
            marginTop: 24, fontFamily: BL.sans, fontWeight: 300,
            fontSize: 'clamp(40px, 7vw, 72px)',
            letterSpacing: '-0.035em', color: BL.inkText, lineHeight: 1,
          }}>
            The <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>engagement</span>.
          </h2>
        </div>
        <div style={{ maxWidth: '34ch', textAlign: isTablet ? 'left' : 'right' }}>
          <BenchBlurb />
        </div>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
        borderTop: `1px solid ${BL.inkLineStrong}`,
      }}>
        {phases.map((p, i) => {
          const colIndex = i % cols;
          const rowIndex = Math.floor(i / cols);
          const isLastCol = colIndex === cols - 1;
          const isLastRow = rowIndex === Math.ceil(phases.length / cols) - 1;
          return (
            <div key={p.n} style={{
              padding: 'clamp(24px, 4vw, 32px) clamp(20px, 3vw, 24px) clamp(28px, 5vw, 36px)',
              borderRight: !isLastCol ? `1px solid ${BL.inkLine}` : 'none',
              borderBottom: !isLastRow ? `1px solid ${BL.inkLine}` : 'none',
            }}>
              <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.red, letterSpacing: '0.06em' }}>[{p.n}]</div>
              <div style={{ fontFamily: BL.sans, fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 300, color: BL.inkText, marginTop: 18, letterSpacing: '-0.015em' }}>{p.t}</div>
              <div style={{ fontFamily: BL.serif, fontSize: 15, color: BL.inkMuted, marginTop: 14, lineHeight: 1.55, fontWeight: 300 }}>{p.d}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function OperatorHiring({ navigate }) {
  const [openRole, setOpenRole] = React.useState(null);
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isTablet ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isTablet ? 'flex-start' : 'baseline',
        gap: isTablet ? 16 : 32,
        marginBottom: 'clamp(32px, 6vw, 56px)',
      }}>
        <div>
          <BLEyebrow>// bench · {ROLES.length} open roles</BLEyebrow>
          <h2 style={{
            marginTop: 24, fontFamily: BL.sans, fontWeight: 300,
            fontSize: 'clamp(40px, 7vw, 72px)',
            letterSpacing: '-0.035em', color: BL.inkText, lineHeight: 1,
          }}>
            We're <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>hiring</span>.
          </h2>
        </div>
        <p style={{
          fontFamily: BL.serif, fontSize: 17, fontStyle: 'italic', color: BL.inkMuted,
          maxWidth: '36ch', textAlign: isTablet ? 'left' : 'right', fontWeight: 300,
        }}>
          Building a small senior bench around the studio. Apply when it hurts to do otherwise.
        </p>
      </div>
      <div>
        {ROLES.map((r, i) => (
          <div key={r.t} style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '40px 1fr auto'
              : isTablet
              ? '50px 1fr auto'
              : '60px 2fr 1fr 1fr 60px',
            gridTemplateAreas: isMobile
              ? `"num title arrow" "loc loc loc" "notes notes notes"`
              : isTablet
              ? `"num title arrow" "loc notes notes"`
              : undefined,
            padding: 'clamp(20px, 3vw, 28px) 0',
            borderTop: `1px solid ${BL.inkLine}`,
            alignItems: 'center', cursor: 'pointer',
            gap: isMobile ? 8 : isTablet ? 16 : 24,
            transition: 'background .2s',
          }}
            onClick={() => setOpenRole(r)}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(157,255,77,0.04)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
            <div style={{ gridArea: isMobile || isTablet ? 'num' : 'auto', fontFamily: BL.mono, fontSize: 12, color: BL.inkDim }}>0{i + 1}</div>
            <div style={{ gridArea: isMobile || isTablet ? 'title' : 'auto', fontFamily: BL.sans, fontSize: 'clamp(20px, 3.4vw, 26px)', fontWeight: 300, color: BL.inkText, letterSpacing: '-0.015em' }}>{r.t}</div>
            <div style={{ gridArea: isMobile || isTablet ? 'loc' : 'auto', fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, marginTop: isMobile ? 4 : 0 }}>{r.loc}</div>
            <div style={{ gridArea: isMobile || isTablet ? 'notes' : 'auto', fontFamily: BL.serif, fontSize: 16, fontStyle: 'italic', color: BL.copper }}>{r.notes}</div>
            <div style={{ gridArea: isMobile || isTablet ? 'arrow' : 'auto', fontFamily: BL.mono, fontSize: 16, color: BL.inkText, textAlign: 'right' }}>→</div>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${BL.inkLine}` }} />
      </div>
      {openRole && <ApplyModal role={openRole} onClose={() => setOpenRole(null)} />}
    </section>
  );
}

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

function ApplyModal({ role, onClose }) {
  const [form, setForm] = React.useState({ name: '', email: '', linkedin: '', note: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [submitError, setSubmitError] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'valid email required';
    if (!form.linkedin.trim() || !/linkedin\.com\//i.test(form.linkedin)) e.linkedin = 'linkedin url required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    if (!WEB3FORMS_KEY) {
      setSubmitError('Form is not configured. Please email intelligence@bina-labs.com directly.');
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Bina Labs - application: ${role.t} - ${form.name}`,
          from_name: form.name,
          replyto: form.email,
          role: role.t,
          location: role.loc,
          name: form.name,
          email: form.email,
          linkedin: form.linkedin,
          note: form.note,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.message || 'Could not send. Please email us directly.');
      }
    } catch (err) {
      setSubmitError('Network error. Please email intelligence@bina-labs.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const fieldLabelStyle = { display: 'block', fontFamily: BL.mono, fontSize: 11, color: BL.inkDim, letterSpacing: '0.06em', marginBottom: 10, textTransform: 'uppercase' };
  const inputStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: `1px solid ${BL.inkLineStrong}`,
    color: BL.inkText, fontFamily: BL.sans, fontWeight: 300,
    fontSize: 18, padding: '8px 0 12px', outline: 'none',
    letterSpacing: '-0.005em',
  };
  const errStyle = { fontFamily: BL.mono, fontSize: 10, color: BL.red, marginTop: 6, letterSpacing: '0.04em' };

  const modal = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
        background: 'rgba(8,11,20,0.78)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 32px)', animation: 'blFadeIn .2s ease-out',
        boxSizing: 'border-box', overflowY: 'auto',
      }}>
      <style>{`
        .bl-apply-input::placeholder { color: ${BL.inkDim}; }
        .bl-apply-input:focus { border-bottom-color: ${BL.red}; }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 620,
          margin: '0 auto',
          background: BL.inkSoft,
          border: `1px solid ${BL.inkLineStrong}`,
          position: 'relative',
          animation: 'blPopIn .25s ease-out',
          boxSizing: 'border-box',
        }}>
        <div style={{ position: 'absolute', top: 14, right: 14, width: 8, height: 8, background: BL.red }} />
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 18, right: 36,
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted, letterSpacing: '0.06em',
          }}>
          [esc] ×
        </button>

        {!submitted ? (
          <form onSubmit={submit} style={{ padding: 'clamp(28px, 5vw, 40px) clamp(20px, 4vw, 44px) clamp(28px, 5vw, 44px)' }}>
            <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.red, letterSpacing: '0.08em' }}>
              // applying for
            </div>
            <h3 style={{
              fontFamily: BL.sans, fontWeight: 300, fontSize: 36, color: BL.inkText,
              letterSpacing: '-0.025em', lineHeight: 1.05, margin: '12px 0 6px',
            }}>
              {role.t}
            </h3>
            <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, marginBottom: 36 }}>
              {role.loc} <span style={{ color: BL.inkDim, padding: '0 8px' }}>·</span>
              <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.copper, fontSize: 14 }}>{role.notes}</span>
            </div>

            <div style={{ display: 'grid', gap: 28 }}>
              <div>
                <label style={fieldLabelStyle}>Full name</label>
                <input className="bl-apply-input" style={inputStyle} value={form.name} onChange={update('name')} placeholder="Jane Doe" autoFocus />
                {errors.name && <div style={errStyle}>// {errors.name}</div>}
              </div>
              <div>
                <label style={fieldLabelStyle}>Email</label>
                <input className="bl-apply-input" style={inputStyle} value={form.email} onChange={update('email')} placeholder="you@domain.com" type="email" />
                {errors.email && <div style={errStyle}>// {errors.email}</div>}
              </div>
              <div>
                <label style={fieldLabelStyle}>LinkedIn</label>
                <input className="bl-apply-input" style={inputStyle} value={form.linkedin} onChange={update('linkedin')} placeholder="linkedin.com/in/your-handle" />
                {errors.linkedin && <div style={errStyle}>// {errors.linkedin}</div>}
              </div>
              <div>
                <label style={fieldLabelStyle}>One line on why <span style={{ color: BL.inkMuted, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                <input className="bl-apply-input" style={inputStyle} value={form.note} onChange={update('note')} placeholder="Shipped X. Curious about Y." />
              </div>
            </div>

            {submitError && (
              <div style={{
                marginTop: 24, padding: '12px 14px', border: `1px solid ${BL.red}`,
                background: 'rgba(255,80,80,0.06)', color: BL.red,
                fontFamily: BL.mono, fontSize: 12, lineHeight: 1.5,
              }}>// {submitError}</div>
            )}
            <div style={{
              marginTop: 44, display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'space-between', gap: 16,
              borderTop: `1px solid ${BL.inkLine}`, paddingTop: 24,
            }}>
              <div style={{ fontFamily: BL.serif, fontStyle: 'italic', fontSize: 14, color: BL.inkDim, fontWeight: 300, maxWidth: '32ch' }}>
                No CV needed. Your LinkedIn is enough to start a conversation.
              </div>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: BL.red, color: BL.ink, border: 'none',
                  padding: '14px 24px', fontFamily: BL.mono, fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: submitting ? 'wait' : 'pointer', whiteSpace: 'nowrap',
                  opacity: submitting ? 0.7 : 1,
                }}>
                {submitting ? 'Sending...' : 'Send application →'}
              </button>
            </div>
          </form>
        ) : (
          <div style={{ padding: 'clamp(40px, 7vw, 64px) clamp(20px, 4vw, 44px) clamp(36px, 6vw, 56px)' }}>
            <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.red, letterSpacing: '0.08em' }}>
              // received
            </div>
            <h3 style={{
              fontFamily: BL.sans, fontWeight: 300, fontSize: 44, color: BL.inkText,
              letterSpacing: '-0.03em', lineHeight: 1, margin: '16px 0 18px',
            }}>
              Thanks, <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red }}>{form.name.split(' ')[0]}</span>.
            </h3>
            <p style={{ fontFamily: BL.serif, fontSize: 18, color: BL.inkMuted, fontWeight: 300, lineHeight: 1.55, maxWidth: '44ch' }}>
              We read every application personally. If there's a fit on <span style={{ color: BL.copper, fontStyle: 'italic' }}>{role.t}</span>, you'll hear back within a week.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 36, background: 'transparent',
                color: BL.inkText, border: `1px solid ${BL.inkLineStrong}`,
                padding: '12px 22px', fontFamily: BL.mono, fontSize: 12,
                letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
              }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
}

function OperatorPrinciples() {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  const cols = isMobile ? 1 : isTablet ? 2 : 4;
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// how we operate</BLEyebrow>
      <h2 style={{
        marginTop: 24, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(40px, 7vw, 72px)',
        letterSpacing: '-0.035em', color: BL.inkText, lineHeight: 1,
        marginBottom: 'clamp(32px, 6vw, 56px)',
      }}>
        Operating <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.copper, fontWeight: 300 }}>principles</span>.
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
        borderTop: `1px solid ${BL.inkLine}`,
      }}>
        {PRINCIPLES.map((x, i) => {
          const colIndex = i % cols;
          const isLastCol = colIndex === cols - 1;
          return (
            <div key={x.t} style={{
              padding: 'clamp(28px, 4vw, 36px) clamp(20px, 3vw, 24px)',
              borderRight: !isLastCol ? `1px solid ${BL.inkLine}` : 'none',
              borderBottom: `1px solid ${BL.inkLine}`,
            }}>
              <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.red }}>[{x.n}]</div>
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(20px, 3vw, 26px)', color: BL.inkText, marginTop: 16, fontWeight: 400, letterSpacing: '-0.01em' }}>{x.t}</div>
              <div style={{ fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted, marginTop: 14, lineHeight: 1.55 }}>{x.d}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
