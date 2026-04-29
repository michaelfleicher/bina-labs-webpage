import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillLink } from '../Chrome.jsx';

export default function WritingBody() {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="writing" />
      <WritingComingSoon />
      <BLFooter />
    </div>
  );
}

function WritingComingSoon() {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px) clamp(80px, 14vw, 160px)',
      borderBottom: `1px solid ${BL.inkLine}`,
      minHeight: '70vh',
      position: 'relative',
      backgroundImage: `linear-gradient(${BL.inkLine} 1px, transparent 1px),
                        linear-gradient(90deg, ${BL.inkLine} 1px, transparent 1px)`,
      backgroundSize: '64px 64px',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '8px 14px',
        border: `1px solid ${BL.red}`,
        background: 'rgba(157,255,77,0.06)',
        fontFamily: BL.mono, fontSize: 11, color: BL.red,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        marginBottom: 'clamp(28px, 5vw, 40px)',
      }}>
        <span style={{
          width: 8, height: 8, background: BL.red, borderRadius: '50%',
          boxShadow: `0 0 10px ${BL.red}aa`,
        }} />
        blog · coming soon
      </div>
      <BLEyebrow>// writing · drafting in progress</BLEyebrow>
      <h1 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(56px, 13vw, 144px)',
        lineHeight: 0.94, letterSpacing: '-0.045em', color: BL.inkText, maxWidth: '13ch',
      }}>
        Things we<br />
        had to <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>say</span>.
      </h1>
      <p style={{
        marginTop: 'clamp(28px, 4vw, 40px)',
        fontFamily: BL.serif, fontSize: 'clamp(18px, 2.4vw, 24px)', lineHeight: 1.45,
        color: BL.inkText, maxWidth: '52ch', fontWeight: 300, fontStyle: 'italic',
      }}>
        Notes from production - written by the people who shipped the thing, never by a marketing team that did not. The first essays are in edit. We will not ship a stale archive.
      </p>
      <div style={{
        marginTop: 'clamp(40px, 7vw, 64px)',
        padding: 'clamp(24px, 4vw, 32px)',
        border: `1px solid ${BL.inkLine}`,
        background: 'rgba(232,241,247,0.02)',
        maxWidth: 640,
        fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted, lineHeight: 1.7,
      }}>
        <div style={{ color: BL.copper, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
          // what's coming
        </div>
        <div><span style={{ color: BL.red }}>→</span> Eval-first AI engineering, the unglamorous version</div>
        <div><span style={{ color: BL.red }}>→</span> On-prem inference economics for B2B teams</div>
        <div><span style={{ color: BL.red }}>→</span> Honest deprecation: four projects we refunded</div>
        <div><span style={{ color: BL.red }}>→</span> Long-context retrieval, beyond the chunking memes</div>
      </div>
      <div style={{
        marginTop: 'clamp(40px, 7vw, 64px)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 12, flexWrap: 'wrap',
        alignItems: isMobile ? 'stretch' : 'center',
      }}>
        <BLPillLink primary href="/contact">Get notified →</BLPillLink>
        <BLPillLink href="/work">See our work instead</BLPillLink>
      </div>
    </section>
  );
}
