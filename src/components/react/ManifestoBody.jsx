import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillLink } from '../Chrome.jsx';
import FAQSection from './FAQSection.jsx';

const TENETS = [
  {
    n: '01',
    t: 'Deadline is holy.',
    body: 'When we commit to a date, we hit it. Scope flexes, quality has a floor, but the deadline does not move. We plan backwards from it on day one and we tell you in week one if the date is at risk - not in week eleven. A missed ship date is a broken trust, and trust is the only compounding asset we have. If we ever say a deadline is firm, treat it as firm. If it is not, we will say that too.',
  },
  {
    n: '02',
    t: 'Decks do not run in production.',
    body: 'The most expensive thing in AI is a slide deck. The second most expensive is a six-month vendor selection. We were built to ship code by Friday - not because Friday is special, but because the gap between a deck and a deploy is where most consultancies live, and most clients die.',
  },
  {
    n: '03',
    t: 'AI assistants are tools, not authors.',
    body: 'We use AI coding assistants every day - and we use them with discipline. Smart: scoped prompts, narrow context windows, the right model for the task. Secured: sandboxed runs, no client secrets in third-party context, every dependency audited, every diff reviewed by a human who can defend each line. Fast: small commits, tight loops, generated code earns its keep in minutes, not sprints. Verified: nothing ships without tests, evals, and a reviewer who understands what changed and why. The assistant accelerates the engineer. It does not replace the judgment.',
  },
  {
    n: '04',
    t: 'A working prototype before a written contract.',
    body: 'We will not write a 40-page SOW before we know the shape of the problem. Every engagement begins with a 4-week paid pilot that produces working code in your environment. If we are wrong about what is possible, the pilot is where we learn it - not in month seven of a fixed-bid.',
  },
  {
    n: '05',
    t: 'Honest deprecation is part of the contract.',
    body: "When a project should die - because the model can't do it, the data isn't there, or the org isn't ready - we say so. We refund the unused portion of the engagement. We have done this four times. Each time we got a better client out of it.",
  },
  {
    n: '06',
    t: 'We are built to leave.',
    body: 'Embedded engagements come with a written hand-off plan from day one. We staff your team alongside ours. We document for the engineer who will inherit this in six months. The goal is not retention; the goal is for you to call us back in two years for a different problem.',
  },
  {
    n: '07',
    t: 'Evals are 80% of the job.',
    body: 'Most AI projects fail because nobody agreed on what success means. Before we write the agent, we write the eval. Before we run the eval, we run the workshop. Before we run the workshop, we get the people in the room who know the answer to be honest about it.',
  },
];

export default function ManifestoBody({ faqs }) {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="manifesto" />
      <ManifestoSection />
      <FAQSection faqs={faqs} eyebrow="// faq · manifesto" headline="On the record, no spin" headlineAccent="no spin" />
      <BLFooter />
    </div>
  );
}

function ManifestoSection() {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(48px, 7vw, 64px) clamp(20px, 4vw, 32px) clamp(64px, 10vw, 96px)',
    }}>
      <BLEyebrow>// manifesto · v3.2 · last edited 2026-04-12 by zara@bina-labs.com</BLEyebrow>
      <h1 style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(56px, 14vw, 168px)',
        lineHeight: 0.92, letterSpacing: '-0.045em', color: BL.inkText, maxWidth: '14ch',
      }}>
        Seven things<br />
        we <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>refuse</span> to compromise on.
      </h1>
      <p style={{
        marginTop: 'clamp(32px, 5vw, 48px)',
        fontFamily: BL.serif, fontSize: 'clamp(18px, 2.4vw, 24px)', lineHeight: 1.45,
        color: BL.inkText, maxWidth: '52ch', fontWeight: 300, fontStyle: 'italic',
      }}>
        Not values. Values are what people put on a wall when they want you to behave. These are the operating constraints we will close a deal over.
      </p>
      <div style={{ marginTop: 'clamp(56px, 10vw, 96px)', borderTop: `1px solid ${BL.inkLine}` }}>
        {TENETS.map((t) => (
          <div key={t.n} style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? 'auto 1fr'
              : isTablet
              ? '80px 1fr'
              : '120px 1.4fr 2fr',
            gridTemplateAreas: isMobile
              ? `"num title" "body body"`
              : isTablet
              ? `"num title" "body body"`
              : undefined,
            gap: isMobile ? '12px 16px' : isTablet ? '24px 32px' : 48,
            padding: 'clamp(40px, 7vw, 64px) 0',
            borderBottom: `1px solid ${BL.inkLine}`,
            alignItems: 'flex-start',
          }}>
            <div style={{ gridArea: isMobile || isTablet ? 'num' : 'auto', fontFamily: BL.mono, fontSize: 12, color: BL.red, paddingTop: isMobile ? 8 : 16 }}>[{t.n}]</div>
            <div style={{
              gridArea: isMobile || isTablet ? 'title' : 'auto',
              fontFamily: BL.serif, fontSize: 'clamp(24px, 4.5vw, 40px)',
              fontWeight: 400, lineHeight: 1.1, color: BL.inkText, letterSpacing: '-0.015em',
            }}>
              {t.t}
            </div>
            <div style={{
              gridArea: isMobile || isTablet ? 'body' : 'auto',
              fontFamily: BL.sans, fontSize: 16, lineHeight: 1.7, color: BL.inkMuted,
              paddingTop: isMobile || isTablet ? 0 : 12,
            }}>
              {t.body}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 'clamp(56px, 10vw, 96px)', padding: 'clamp(36px, 6vw, 56px) 0',
        borderTop: `1px solid ${BL.inkLine}`,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 20 : 0,
        justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
        fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted,
      }}>
        <div>Signed by Michael Fleicher · 2025</div>
        <BLPillLink primary href="/contact">Hold us to it →</BLPillLink>
      </div>
    </section>
  );
}
