import React from 'react';
import { BL } from '../../system/bl.js';
import { trackEvent } from '../../system/analytics.js';
import {
  FEEDBACK_INTRO, SCOPE_OPTIONS, RATINGS, RATING_SCALE_LOW, RATING_SCALE_HIGH,
  OPEN_QUESTIONS, FEEDBACK_LABELS as L, FEEDBACK_ERRORS as E, FEEDBACK_THANKS,
} from '../../data/feedbackForm.js';

// Latin display faces (Geist / Fraunces / JetBrains Mono) carry no Hebrew glyphs,
// so Hebrew text uses Heebo + Suez One, loaded in src/pages/feedback.astro.
// Suez One is the accent voice here (the Fraunces-italic role on the English pages);
// it is the one Hebrew display serif whose optical size matches Heebo on the same line.
const HE_SANS = 'Heebo, system-ui, sans-serif';
const HE_DISPLAY = '"Suez One", Georgia, serif';

const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM = {
  company: '', email: '', scope: '', projectName: '',
  ratings: {}, worked: '', improve: '', anything: '',
};

export default function FeedbackBody() {
  return (
    <div className="bl-page" dir="rtl" style={{
      background: BL.ink, color: BL.inkText, fontFamily: HE_SANS,
      minHeight: '100vh', textAlign: 'right',
    }}>
      <MinimalHeader />
      <FeedbackSection />
      <MinimalFooter />
    </div>
  );
}

function MinimalHeader() {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: 'clamp(12px, 2.4vw, 16px) clamp(16px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
      fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted,
    }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
        <span style={{
          width: 10, height: 10, background: BL.red,
          boxShadow: `0 0 14px ${BL.red}aa`, display: 'inline-block', flexShrink: 0,
        }} />
        <span style={{ color: BL.inkText, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>BINA LABS</span>
      </a>
    </header>
  );
}

function MinimalFooter() {
  return (
    <footer style={{
      padding: 'clamp(24px, 4vw, 32px) clamp(16px, 4vw, 32px)',
      fontFamily: BL.mono, fontSize: 11, color: BL.inkDim,
      display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between',
    }}>
      <span dir="ltr">© Bina Labs</span>
      <a href="mailto:intelligence@bina-labs.com" dir="ltr" style={{ color: BL.inkMuted, textDecoration: 'none' }}>
        intelligence@bina-labs.com
      </a>
    </footer>
  );
}

function validate(form) {
  const errors = {};
  if (!form.company.trim()) errors.company = E.company;
  if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) errors.email = E.email;
  if (!form.scope) errors.scope = E.scope;
  if (form.scope === 'multiple' && !form.projectName.trim()) errors.projectName = E.projectName;
  if (!form.ratings.overall) errors.overall = E.overall;
  if (!form.improve.trim()) errors.improve = E.improve;
  return errors;
}

function buildPayload(form) {
  const scope = SCOPE_OPTIONS.find((o) => o.value === form.scope);
  const subjectTail = form.projectName.trim() || form.company.trim();
  const ratingLines = RATINGS.reduce((acc, r) => (
    form.ratings[r.key] ? { ...acc, [r.label]: `${form.ratings[r.key]} / 5` } : acc
  ), {});

  return {
    access_key: WEB3FORMS_KEY,
    subject: `משוב לקוח - ${subjectTail}`,
    from_name: form.company.trim() || 'Bina Labs feedback',
    ...(form.email.trim() ? { replyto: form.email.trim() } : {}),
    'חברה': form.company.trim(),
    ...(form.email.trim() ? { 'אימייל': form.email.trim() } : {}),
    'היקף העבודה': scope ? scope.label : '',
    ...(form.projectName.trim() ? { 'שם הפרויקט': form.projectName.trim() } : {}),
    ...ratingLines,
    'מה עבד טוב': form.worked.trim() || '-',
    'מה אפשר לשפר': form.improve.trim(),
    'הערות נוספות': form.anything.trim() || '-',
  };
}

function FeedbackSection() {
  const [form, setForm] = React.useState(INITIAL_FORM);
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [sendError, setSendError] = React.useState(null);

  const upd = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev));
  };
  const setRating = (key, value) => {
    setForm((f) => ({ ...f, ratings: { ...f.ratings, [key]: value } }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };
  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSent(false);
    setSendError(null);
  };

  const submit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    if (!WEB3FORMS_KEY) {
      setSendError(E.notConfigured);
      return;
    }
    setSubmitting(true);
    setSendError(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(buildPayload(form)),
      });
      const data = await res.json();
      if (data.success) {
        trackEvent('feedback_submitted', { scope: form.scope });
        setSent(true);
      } else {
        setSendError(data.message || E.send);
      }
    } catch (err) {
      setSendError(E.network);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{
      padding: 'clamp(40px, 6vw, 64px) clamp(20px, 4vw, 32px) clamp(56px, 9vw, 96px)',
      borderBottom: `1px solid ${BL.inkLine}`,
      maxWidth: 820, margin: '0 auto',
    }}>
      <Intro />
      {sent ? (
        <ThanksPanel onReset={resetForm} />
      ) : (
        <form onSubmit={submit} noValidate style={{
          marginTop: 'clamp(36px, 6vw, 56px)',
          border: `1px solid ${BL.inkLine}`,
          padding: 'clamp(20px, 4vw, 36px)',
          display: 'grid', gap: 28, background: 'rgba(232,241,247,0.02)',
        }}>
          <div style={{
            fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted,
            paddingBottom: 12, borderBottom: `1px solid ${BL.inkLine}`,
          }}><span dir="ltr" style={{ display: 'inline-block' }}>{L.formHeader}</span></div>

          <div className="bl-fb-2col">
            <Field label={L.company} v={form.company} onChange={(v) => upd('company', v)}
              placeholder={L.companyPlaceholder} error={errors.company} />
            <Field label={L.email} v={form.email} onChange={(v) => upd('email', v)}
              placeholder={L.emailPlaceholder} error={errors.email} ltr type="email" />
          </div>

          <ScopeChoice value={form.scope} onChange={(v) => upd('scope', v)} error={errors.scope} />
          {form.scope === 'multiple' && (
            <Field label={L.projectName} v={form.projectName} onChange={(v) => upd('projectName', v)}
              placeholder={L.projectNamePlaceholder} error={errors.projectName} />
          )}

          <Block title={L.ratingsTitle} hint={L.ratingsHint}>
            <div style={{ display: 'grid', gap: 24 }}>
              {RATINGS.map((r) => (
                <RatingRow key={r.key} label={r.label} value={form.ratings[r.key]}
                  onChange={(v) => setRating(r.key, v)} error={errors[r.key]} />
              ))}
            </div>
          </Block>

          <Block title={L.openTitle}>
            <div style={{ display: 'grid', gap: 24 }}>
              {OPEN_QUESTIONS.map((q) => (
                <Field key={q.key} label={q.label} v={form[q.key]} onChange={(v) => upd(q.key, v)}
                  placeholder={q.placeholder} error={errors[q.key]} textarea />
              ))}
            </div>
          </Block>

          {sendError && (
            <div style={{
              padding: '12px 14px', border: `1px solid ${BL.red}`,
              background: 'rgba(157,255,77,0.06)', color: BL.red,
              fontFamily: HE_SANS, fontSize: 14, lineHeight: 1.6,
            }}>{sendError}</div>
          )}

          <div className="bl-fb-actions" style={{ paddingTop: 16, borderTop: `1px solid ${BL.inkLine}` }}>
            <span style={{ fontFamily: HE_SANS, fontSize: 13, color: BL.inkDim }}>{L.privacy}</span>
            <button type="submit" disabled={submitting} style={{
              padding: '14px 26px', minHeight: BL.tap, background: BL.red, color: BL.ink,
              border: 'none', fontFamily: HE_SANS, fontSize: 15, fontWeight: 500,
              cursor: submitting ? 'wait' : 'pointer', opacity: submitting ? 0.7 : 1,
            }}>{submitting ? L.submitting : `${L.submit} ←`}</button>
          </div>
        </form>
      )}
    </section>
  );
}

function Intro() {
  return (
    <div>
      <div style={{
        fontFamily: BL.mono, fontSize: 11, color: BL.copper,
        letterSpacing: '0.08em',
      }}><span dir="ltr" style={{ display: 'inline-block' }}>{FEEDBACK_INTRO.eyebrow}</span></div>
      <h1 style={{
        marginTop: 24, fontFamily: HE_SANS, fontWeight: 300,
        fontSize: 'clamp(38px, 7vw, 76px)',
        lineHeight: 1.1, letterSpacing: '-0.02em', color: BL.inkText,
      }}>
        {FEEDBACK_INTRO.headlineLead}{' '}
        <span style={{ fontFamily: HE_DISPLAY, color: BL.red, fontWeight: 400 }}>
          {FEEDBACK_INTRO.headlineAccent}
        </span>
      </h1>
      {FEEDBACK_INTRO.paragraphs.map((p, i) => (
        <p key={i} style={{
          marginTop: i === 0 ? 'clamp(24px, 4vw, 32px)' : 16,
          fontFamily: HE_SANS, fontSize: 'clamp(16px, 2.2vw, 19px)',
          lineHeight: 1.75, color: i === 0 ? BL.inkText : BL.inkMuted,
          maxWidth: '60ch', fontWeight: 300,
        }}>{p}</p>
      ))}
      <div style={{
        marginTop: 24, fontFamily: HE_SANS, fontSize: 16, fontWeight: 500, color: BL.copper,
      }}>{FEEDBACK_INTRO.signature}</div>
    </div>
  );
}

function Block({ title, hint, children }) {
  return (
    <div style={{ paddingTop: 20, borderTop: `1px solid ${BL.inkLine}`, display: 'grid', gap: 20 }}>
      <div>
        <div style={{ fontFamily: HE_SANS, fontSize: 17, color: BL.inkText, fontWeight: 500 }}>{title}</div>
        {hint && <div style={{ marginTop: 6, fontFamily: HE_SANS, fontSize: 13, color: BL.inkDim }}>{hint}</div>}
      </div>
      {children}
    </div>
  );
}

function ScopeChoice({ value, onChange, error }) {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <FieldLabel>{L.scope}</FieldLabel>
      <div className="bl-fb-2col" style={{ gap: 12 }}>
        {SCOPE_OPTIONS.map((o) => {
          const active = value === o.value;
          return (
            <button key={o.value} type="button" onClick={() => onChange(o.value)}
              aria-pressed={active}
              style={{
                textAlign: 'right', padding: '16px 18px', minHeight: BL.tap, cursor: 'pointer',
                border: `1px solid ${active ? BL.red : BL.inkLine}`,
                background: active ? 'rgba(157,255,77,0.08)' : 'transparent',
                color: BL.inkText, fontFamily: HE_SANS, display: 'grid', gap: 6,
                transition: 'border-color .15s, background .15s',
              }}>
              <span style={{ fontSize: 16, fontWeight: 500, color: active ? BL.red : BL.inkText }}>{o.label}</span>
              <span style={{ fontSize: 13, color: BL.inkDim }}>{o.hint}</span>
            </button>
          );
        })}
      </div>
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function RatingRow({ label, value, onChange, error }) {
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <span style={{ fontFamily: HE_SANS, fontSize: 15, color: BL.inkText }}>{label}</span>
      <div className="bl-fb-rating">
        <div style={{ display: 'flex', gap: 8 }} role="group" aria-label={label}>
          {[1, 2, 3, 4, 5].map((n) => {
            const active = value === n;
            return (
              <button key={n} type="button" onClick={() => onChange(n)} aria-pressed={active}
                style={{
                  width: BL.tap, height: BL.tap, cursor: 'pointer',
                  border: `1px solid ${active ? BL.red : BL.inkLine}`,
                  background: active ? BL.red : 'transparent',
                  color: active ? BL.ink : BL.inkMuted,
                  fontFamily: BL.mono, fontSize: 14, fontWeight: 500,
                  transition: 'border-color .15s, background .15s, color .15s',
                }}>{n}</button>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 8, fontFamily: HE_SANS, fontSize: 12, color: BL.inkDim }}>
          <span>{`1 = ${RATING_SCALE_LOW}`}</span>
          <span>·</span>
          <span>{`5 = ${RATING_SCALE_HIGH}`}</span>
        </div>
      </div>
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <span style={{ fontFamily: HE_SANS, fontSize: 15, color: BL.inkText }}>{children}</span>
  );
}

function FieldError({ children }) {
  return (
    <span style={{ fontFamily: HE_SANS, fontSize: 13, color: BL.red, lineHeight: 1.5 }}>{children}</span>
  );
}

function Field({ label, v, onChange, placeholder, error, textarea, ltr, type }) {
  const Tag = textarea ? 'textarea' : 'input';
  const borderColor = error ? BL.red : BL.inkLine;
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
      <FieldLabel>{label}</FieldLabel>
      <Tag
        value={v}
        type={textarea ? undefined : (type || 'text')}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        dir={ltr ? 'ltr' : 'rtl'}
        style={{
          background: BL.ink, border: `1px solid ${borderColor}`,
          padding: '12px 14px', fontFamily: ltr ? BL.mono : HE_SANS,
          fontSize: 16, lineHeight: 1.6, color: BL.inkText, outline: 'none',
          textAlign: ltr ? 'left' : 'right',
          minHeight: textarea ? undefined : BL.tap,
          resize: textarea ? 'vertical' : undefined,
          width: '100%', maxWidth: '100%', boxSizing: 'border-box',
        }}
        onFocus={(e) => { e.target.style.borderColor = BL.red; }}
        onBlur={(e) => { e.target.style.borderColor = borderColor; }}
      />
      {error && <FieldError>{error}</FieldError>}
    </label>
  );
}

function ThanksPanel({ onReset }) {
  return (
    <div style={{
      marginTop: 'clamp(36px, 6vw, 56px)',
      padding: 'clamp(28px, 5vw, 48px)', border: `1px solid ${BL.red}`,
      background: 'rgba(157,255,77,0.06)',
      display: 'flex', flexDirection: 'column',
      animation: 'bl-fade-up .4s ease both',
    }}>
      <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.red, marginBottom: 16 }}>
        <span dir="ltr" style={{ display: 'inline-block' }}>{FEEDBACK_THANKS.status}</span>
      </div>
      <div style={{
        fontFamily: HE_DISPLAY, fontSize: 'clamp(28px, 5vw, 46px)',
        color: BL.inkText, fontWeight: 400, lineHeight: 1.3,
      }}>
        {FEEDBACK_THANKS.headlineLead}<br />
        <span style={{ color: BL.copper }}>{FEEDBACK_THANKS.headlineAccent}</span>
      </div>
      <p style={{
        marginTop: 20, fontFamily: HE_SANS, fontSize: 17, lineHeight: 1.75,
        color: BL.inkMuted, maxWidth: '52ch', fontWeight: 300,
      }}>{FEEDBACK_THANKS.body}</p>
      <button onClick={onReset} style={{
        marginTop: 32, padding: '12px 20px', minHeight: BL.tap, border: `1px solid ${BL.inkLine}`,
        background: 'transparent', color: BL.inkText, fontFamily: HE_SANS, fontSize: 14,
        alignSelf: 'flex-start', cursor: 'pointer',
      }}>{`${FEEDBACK_THANKS.reset} ←`}</button>
    </div>
  );
}
