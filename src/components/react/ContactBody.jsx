import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow } from '../Chrome.jsx';
import FAQSection from './FAQSection.jsx';

export default function ContactBody({ faqs }) {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="contact" />
      <ContactSection />
      <FAQSection faqs={faqs} eyebrow="// faq · before you write" headline="Before you write us" headlineAccent="write us" />
      <BLFooter />
    </div>
  );
}

const INITIAL_FORM = {
  name: '', email: '', org: '', shape: 'strategy', stage: 'series-a', timeline: '6-weeks',
  budget: '$25k–$100k', message: '',
};

const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;

function ContactSection() {
  const [form, setForm] = React.useState(INITIAL_FORM);
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setSent(false);
    setError(null);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setError('Form is not configured. Please email intelligence@bina-labs.com directly.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Bina Labs - new engagement: ${form.name || 'unnamed'} (${form.shape})`,
          from_name: form.name || 'Bina Labs site',
          replyto: form.email,
          name: form.name,
          email: form.email,
          company: form.org,
          shape: form.shape,
          stage: form.stage,
          timeline: form.timeline,
          budget: form.budget,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || 'Could not send. Please email us directly.');
      }
    } catch (err) {
      setError('Network error. Please email intelligence@bina-labs.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(48px, 7vw, 64px) clamp(20px, 4vw, 32px) clamp(64px, 10vw, 96px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
        gap: isTablet ? 'clamp(40px, 7vw, 56px)' : 80,
      }}>
        <div>
          <BLEyebrow>// contact · ./connect.sh</BLEyebrow>
          <h1 style={{
            marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
            fontSize: isMobile ? 56 : 'clamp(48px, 11vw, 120px)',
            lineHeight: 0.94, letterSpacing: '-0.045em', color: BL.inkText, maxWidth: '12ch',
          }}>
            Tell us<br />
            the <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>shape</span> of it.
          </h1>
          <p style={{
            marginTop: 'clamp(28px, 5vw, 40px)',
            fontFamily: BL.serif, fontSize: 'clamp(17px, 2.4vw, 22px)', lineHeight: 1.45,
            color: BL.inkText, maxWidth: '40ch', fontWeight: 300,
          }}>
            We reply within one business day. The first call is 30 minutes, no NDA.
          </p>
          <div style={{ marginTop: 'clamp(36px, 6vw, 56px)', fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted, lineHeight: 2, wordBreak: 'break-word' }}>
            <div><span style={{ color: BL.inkDim }}>email </span><span style={{ color: BL.inkText }}>intelligence@bina-labs.com</span></div>
            <div><span style={{ color: BL.inkDim }}>signal </span><span style={{ color: BL.inkText }}>@bina-labs.01</span></div>
            <div><span style={{ color: BL.inkDim }}>TLV </span><span style={{ color: BL.inkText }}>30 Melchet St, 6523417</span></div>
          </div>
          <div style={{ marginTop: 'clamp(36px, 6vw, 56px)', padding: 24, border: `1px solid ${BL.inkLine}`, background: 'rgba(232,241,247,0.02)' }}>
            <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.copper, marginBottom: 12 }}>// office hours</div>
            <div style={{ fontFamily: BL.serif, fontSize: 18, color: BL.inkText, fontStyle: 'italic', fontWeight: 400 }}>
              Thursdays 14–16 IST. Public, no agenda. Bring a hard problem and we'll think out loud with you.
            </div>
            <a href="mailto:intelligence@bina-labs.com?subject=Office%20hours%20schedule" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 20, padding: '12px 18px', minHeight: BL.tap,
              border: `1px solid ${BL.copper}`, color: BL.copper,
              fontFamily: BL.mono, fontSize: 11, letterSpacing: '0.08em',
              textTransform: 'uppercase', textDecoration: 'none',
              background: 'transparent', cursor: 'pointer',
            }}>
              <span>Ask for a schedule</span>
              <span style={{ fontSize: 14 }}>→</span>
            </a>
          </div>
        </div>
        <div>
          {sent ? (
            <div style={{
              padding: 'clamp(28px, 5vw, 48px)', border: `1px solid ${BL.red}`,
              background: 'rgba(157,255,77,0.06)', minHeight: isMobile ? 'auto' : 600,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.red, marginBottom: 16 }}>● MESSAGE_SENT</div>
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(28px, 6vw, 48px)', color: BL.inkText, fontWeight: 400, lineHeight: 1.1 }}>
                Thanks, {form.name || 'friend'}.<br />
                <span style={{ fontStyle: 'italic', color: BL.copper }}>We'll be in touch within 24h.</span>
              </div>
              <button onClick={resetForm} style={{
                marginTop: 32, padding: '12px 18px', minHeight: BL.tap, border: `1px solid ${BL.inkLine}`,
                background: 'transparent', color: BL.inkText, fontFamily: BL.mono, fontSize: 12,
                alignSelf: 'flex-start', cursor: 'pointer',
              }}>send another →</button>
            </div>
          ) : (
            <form onSubmit={submit} style={{
              border: `1px solid ${BL.inkLine}`,
              padding: 'clamp(20px, 4vw, 36px)',
              display: 'grid', gap: 24, background: 'rgba(232,241,247,0.02)',
            }}>
              <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted, paddingBottom: 12, borderBottom: `1px solid ${BL.inkLine}` }}>
                // new_engagement.form · v2.1
              </div>
              <Field label="name" v={form.name} onChange={(v) => upd('name', v)} placeholder="Nehoray Cohen" />
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : 24 }}>
                <Field label="email" v={form.email} onChange={(v) => upd('email', v)} placeholder="n@pendulum.ai" />
                <Field label="company" v={form.org} onChange={(v) => upd('org', v)} placeholder="Pendulum AI" />
              </div>
              <Select label="shape of work" v={form.shape} onChange={(v) => upd('shape', v)}
                opts={[['strategy', 'AI Strategy'], ['engineering', 'AI / Software Engineering'], ['workshop', 'Lectures & Workshops'], ['research', 'Research'], ['unsure', 'Not sure yet']]} />
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : 24 }}>
                <Select label="stage" v={form.stage} onChange={(v) => upd('stage', v)}
                  opts={[['pre-seed', 'Pre-seed'], ['seed', 'Seed'], ['series-a', 'Series A'], ['series-b', 'Series B+'], ['public', 'Public / enterprise']]} />
                <Select label="timeline" v={form.timeline} onChange={(v) => upd('timeline', v)}
                  opts={[['urgent', 'Urgent (this month)'], ['6-weeks', 'Within 6 weeks'], ['quarter', 'This quarter'], ['exploratory', 'Exploring']]} />
              </div>
              <Select label="budget" v={form.budget} onChange={(v) => upd('budget', v)}
                opts={[['up-to-10k', 'Up to $10k'], ['$10k–$25k', '$10k–$25k'], ['$25k–$100k', '$25k–$100k'], ['$100k–$300k', '$100k–$300k'], ['$300k+', '$300k+'], ['unsure', 'Not sure']]} />
              <Field label="the shape of it" v={form.message} onChange={(v) => upd('message', v)}
                placeholder="In a paragraph: what are you trying to build, and why now?" textarea />
              {error && (
                <div style={{
                  padding: '12px 14px', border: `1px solid ${BL.red}`,
                  background: 'rgba(255,80,80,0.06)', color: BL.red,
                  fontFamily: BL.mono, fontSize: 12, lineHeight: 1.5,
                }}>// {error}</div>
              )}
              <div style={{
                paddingTop: 16, borderTop: `1px solid ${BL.inkLine}`,
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? 16 : 0,
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
              }}>
                <span style={{ fontFamily: BL.mono, fontSize: 11, color: BL.inkDim }}>we reply within 24h</span>
                <button type="submit" disabled={submitting} style={{
                  padding: '14px 22px', minHeight: BL.tap, background: BL.red, color: BL.ink,
                  border: 'none', fontFamily: BL.mono, fontSize: 13, fontWeight: 500,
                  cursor: submitting ? 'wait' : 'pointer', opacity: submitting ? 0.7 : 1,
                  width: isMobile ? '100%' : 'auto',
                }}>{submitting ? 'sending...' : './send_message →'}</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, v, onChange, placeholder, textarea }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
      <span style={{ fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>// {label}</span>
      <Tag value={v} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        rows={textarea ? 5 : undefined}
        style={{
          background: BL.ink, border: `1px solid ${BL.inkLine}`,
          padding: '12px 14px', fontFamily: textarea ? BL.sans : BL.mono,
          fontSize: 16, color: BL.inkText, outline: 'none',
          minHeight: textarea ? undefined : BL.tap,
          resize: textarea ? 'vertical' : undefined,
          width: '100%', maxWidth: '100%', boxSizing: 'border-box',
        }}
        onFocus={(e) => e.target.style.borderColor = BL.red}
        onBlur={(e) => e.target.style.borderColor = BL.inkLine}
      />
    </label>
  );
}

function Select({ label, v, onChange, opts }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
      <span style={{ fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>// {label}</span>
      <select value={v} onChange={(e) => onChange(e.target.value)} style={{
        background: BL.ink, border: `1px solid ${BL.inkLine}`,
        padding: '12px 14px', fontFamily: BL.mono, fontSize: 16, color: BL.inkText, outline: 'none',
        minHeight: BL.tap,
        width: '100%', maxWidth: '100%', boxSizing: 'border-box',
      }}>
        {opts.map(([val, l]) => <option key={val} value={val}>{l}</option>)}
      </select>
    </label>
  );
}
