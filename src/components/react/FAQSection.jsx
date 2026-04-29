import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLEyebrow } from '../Chrome.jsx';

export default function FAQSection({ faqs, eyebrow = '// faq', headline = 'Questions, answered', headlineAccent = 'answered', background }) {
  const isMobile = useMediaQuery(MQ.mobile);
  if (!faqs || faqs.length === 0) return null;

  const headlineParts = (() => {
    if (!headlineAccent || !headline.includes(headlineAccent)) return [headline, null, null];
    const [before, after] = headline.split(headlineAccent);
    return [before, headlineAccent, after];
  })();

  const [pre, accent, post] = headlineParts;

  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
      background: background ?? BL.inkSoft,
    }}>
      <BLEyebrow>{eyebrow}</BLEyebrow>
      <h2 style={{
        marginTop: 24,
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(40px, 8vw, 80px)',
        letterSpacing: '-0.035em', lineHeight: 1, color: BL.inkText,
        marginBottom: 'clamp(40px, 6vw, 64px)',
        maxWidth: '18ch',
      }}>
        {pre}
        {accent && (
          <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>
            {accent}
          </span>
        )}
        {post}
        {!post && '.'}
      </h2>
      <div style={{ borderTop: `1px solid ${BL.inkLine}` }}>
        {faqs.map((f, i) => (
          <FAQRow key={i} faq={f} index={i} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}

function FAQRow({ faq, index, isMobile }) {
  const [open, setOpen] = React.useState(index === 0);
  const num = String(index + 1).padStart(2, '0');
  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      style={{
        borderBottom: `1px solid ${BL.inkLine}`,
        padding: 'clamp(20px, 3vw, 28px) 0',
      }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          all: 'unset',
          display: 'grid',
          gridTemplateColumns: isMobile ? '36px 1fr 24px' : '60px 1fr 40px',
          alignItems: 'baseline',
          gap: isMobile ? 12 : 24,
          width: '100%',
          cursor: 'pointer',
          minHeight: BL.tap,
        }}>
        <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.inkDim, letterSpacing: '0.06em' }}>
          [{num}]
        </div>
        <h3
          itemProp="name"
          style={{
            margin: 0,
            fontFamily: BL.serif,
            fontSize: isMobile ? 20 : 'clamp(20px, 3vw, 26px)',
            lineHeight: 1.3,
            color: BL.inkText,
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}>
          {faq.q}
        </h3>
        <div
          aria-hidden="true"
          style={{
            fontFamily: BL.mono,
            fontSize: 18,
            color: open ? BL.red : BL.inkText,
            textAlign: 'right',
            transition: 'transform .18s, color .18s',
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
            lineHeight: 1,
          }}>
          +
        </div>
      </button>
      {open && (
        <div
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '36px 1fr 24px' : '60px 1fr 40px',
            gap: isMobile ? 12 : 24,
            marginTop: 16,
          }}>
          <div />
          <p
            itemProp="text"
            style={{
              margin: 0,
              maxWidth: '64ch',
              fontFamily: BL.sans,
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.7,
              color: BL.inkMuted,
            }}>
            {faq.a}
          </p>
          <div />
        </div>
      )}
    </div>
  );
}
