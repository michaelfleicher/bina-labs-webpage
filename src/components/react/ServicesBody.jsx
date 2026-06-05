import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillLink } from '../Chrome.jsx';
import FAQSection from './FAQSection.jsx';

export default function ServicesBody({ faqs }) {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="services" />
      <ServicesHero />
      <ServicesDetail />
      <ServicesProcess />
      <ServicesEngagementModels />
      <FAQSection faqs={faqs} eyebrow="// faq · what clients ask" headline="The questions, on the record" headlineAccent="on the record" />
      <BLFooter />
    </div>
  );
}

function ServicesHero() {
  return (
    <section style={{
      padding: 'clamp(56px, 8vw, 80px) clamp(20px, 4vw, 32px) clamp(40px, 7vw, 64px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// services · what we do</BLEyebrow>
      <h1 aria-label="How does Bina Labs work with clients?" style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(56px, 13vw, 144px)',
        lineHeight: 0.94, letterSpacing: '-0.045em', color: BL.inkText, maxWidth: '12ch',
      }}>
        Five ways<br />
        we <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>engage</span>.
      </h1>
      <p style={{
        marginTop: 'clamp(32px, 5vw, 48px)',
        fontFamily: BL.serif, fontSize: 'clamp(18px, 2.6vw, 26px)', lineHeight: 1.4,
        color: BL.inkText, maxWidth: '54ch', fontWeight: 300,
      }}>
        We don't sell deliverables; we sell outcomes. Every engagement is staffed by senior operators and ends in working software, a written hand-off, or a thesis we can defend.
      </p>
    </section>
  );
}

function ServicesDetail() {
  const services = [
    {
      n: '01', name: 'AI Strategy',
      q: 'What does an AI Strategy engagement with Bina Labs deliver?',
      tagline: 'Where to bet, where to wait, what to ignore.',
      outcome: 'A defensible thesis your CFO will sign.',
      desc: 'A short, opinionated engagement that ends in a roadmap your CFO will sign. We interview your team, audit your stack, run an evals workshop, and deliver a written thesis on what to build, what to buy, what to kill.',
      deliverables: ['Capability audit', 'Build/buy/kill matrix', 'Evals harness v0', '12-month roadmap', 'Hiring plan'],
      best: 'Series A–C teams who suspect they should be doing more with AI but cannot name the shape of it.',
    },
    {
      n: '02', name: 'AI / Software Engineering',
      q: 'How does embedded AI engineering with Bina Labs work?',
      tagline: 'Production code. The plumbing and the magic.',
      outcome: 'A system your team can own on day one of hand-off.',
      desc: "Full-stack squads who embed inside your team, write production code on day one, and leave behind a system your engineers can own. We build the product surface and the AI infrastructure underneath - the RAG, the evals, the agent runtime, the observability, the on-prem deployment. No agencies, no offshoring, no lingering past the value cliff.",
      deliverables: ['Product features & internal platforms', 'Retrieval pipelines & agent runtime', 'Eval harness + dashboards', 'On-prem inference & cost budgets', 'Hand-off runbook & training'],
      best: 'Teams with a working prototype - or none at all - who need senior velocity for a defined window without permanent headcount.',
    },
    {
      n: '03', name: 'Lectures & Workshops',
      q: 'What do Bina Labs lectures and workshops cover?',
      tagline: 'Calibrate your team. Two days, no slides about hype.',
      outcome: 'A team that can argue about AI without flinching.',
      desc: 'Tailored sessions for R&D teams, executive offsites, and boards. We teach what is real, what is one paper away, and what is marketing. Hands-on labs for engineers; sharp, opinionated briefings for C-levels. Every session ends with a written takeaway your team can act on the next morning.',
      deliverables: ['Custom curriculum from your stack', 'Hands-on labs (engineers)', 'Executive briefings (C-suite)', 'Live evals on your own data', 'Written takeaway memo'],
      best: 'R&D leaders, CTOs, and boards who need their organisation to share a vocabulary before the next planning cycle.',
    },
    {
      n: '04', name: 'Research',
      q: 'What kind of research engagements does Bina Labs take on?',
      tagline: 'Applied research with frontier teams.',
      outcome: 'A thesis we are willing to defend in public.',
      desc: 'We take research engagements with labs, universities and frontier-model companies. The work occasionally produces a paper, sometimes a prototype, and rarely a product - but always a thesis we are willing to defend in public.',
      deliverables: ['Literature review', 'Reproductions & extensions', 'Prototype + writeup', 'Joint authorship (where appropriate)'],
      best: 'Frontier labs and curious operators who want to understand what is one paper away from being possible.',
    },
    {
      n: '05', name: 'Innovation & Grant Strategy',
      q: 'What does an Innovation & Grant Strategy engagement with Bina Labs deliver?',
      tagline: 'Turn breakthrough tech into funded ventures.',
      outcome: 'A funded roadmap and an investor-ready story.',
      desc: 'We help startups, SMEs, and research organizations secure competitive funding and turn breakthrough technology into scalable ventures. Grant and funding strategy, proposal writing, business plans, technology due diligence, international partnerships, and R&D roadmapping.',
      deliverables: ['Grant & funding strategy (Horizon Europe, EIC, Eurostars, BIRD, IIA)', 'Proposal writing & submission support', 'Business plans & commercialization strategy', 'Technology due diligence & evaluation', 'International partnerships & consortium building', 'R&D planning & technology roadmapping'],
      best: 'Startups, SMEs, and research organizations seeking competitive funding and a credible path to market.',
    },
  ];
  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      {services.map((s, i) => <ServiceDetailRow key={s.n} {...s} flip={i % 2 === 1} />)}
    </section>
  );
}

function ServiceDetailRow({ n, name, q, tagline, outcome, desc, deliverables, best, flip }) {
  const isTablet = useMediaQuery(MQ.tablet);
  const stack = isTablet;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: stack ? '1fr' : '1fr 1fr',
      gap: stack ? 32 : 64,
      padding: 'clamp(40px, 7vw, 64px) 0',
      borderTop: `1px solid ${BL.inkLine}`,
    }}>
      <div style={{ order: !stack && flip ? 2 : 1 }}>
        <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.red, marginBottom: 24 }}>[{n}] · service</div>
        <h2 aria-label={q} style={{
          fontFamily: BL.sans, fontWeight: 300,
          fontSize: 'clamp(40px, 8vw, 88px)',
          lineHeight: 0.95, letterSpacing: '-0.035em', color: BL.inkText, marginBottom: 16,
        }}>{name}</h2>
        <div style={{ fontFamily: BL.serif, fontSize: 'clamp(18px, 2.6vw, 26px)', fontStyle: 'italic', color: BL.copper, fontWeight: 300, marginBottom: 32 }}>
          {tagline}
        </div>
        <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, marginBottom: 28, paddingTop: 16, borderTop: `1px solid ${BL.inkLine}` }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ color: BL.inkDim, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>you walk away with</span>
            <span style={{ color: BL.inkText, lineHeight: 1.45 }}>{outcome}</span>
          </div>
        </div>
        <p style={{ fontFamily: BL.sans, fontSize: 16, lineHeight: 1.6, color: BL.inkMuted, maxWidth: '54ch' }}>{desc}</p>
      </div>
      <div style={{
        order: !stack && flip ? 1 : 2,
        borderLeft: stack ? 'none' : (!flip ? `1px solid ${BL.inkLine}` : 'none'),
        borderRight: stack ? 'none' : (flip ? `1px solid ${BL.inkLine}` : 'none'),
        borderTop: stack ? `1px solid ${BL.inkLine}` : 'none',
        paddingLeft: stack ? 0 : (flip ? 0 : 32),
        paddingRight: stack ? 0 : (flip ? 32 : 0),
        paddingTop: stack ? 24 : 0,
      }}>
        <BLEyebrow color={BL.copper}>// deliverables</BLEyebrow>
        <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 40px' }}>
          {deliverables.map(d => (
            <li key={d} style={{
              padding: '12px 0', borderBottom: `1px solid ${BL.inkLine}`,
              fontFamily: BL.mono, fontSize: 13, color: BL.inkText,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ color: BL.red }}>→</span> {d}
            </li>
          ))}
        </ul>
        <BLEyebrow color={BL.copper}>// best for</BLEyebrow>
        <p style={{ fontFamily: BL.serif, fontSize: 18, fontStyle: 'italic', color: BL.inkText, marginTop: 16, lineHeight: 1.5, fontWeight: 400 }}>
          {best}
        </p>
      </div>
    </div>
  );
}

function ServicesProcess() {
  const steps = [
    { n: '00', t: 'Intro call', d: '30 minutes. We figure out if we are the right fit. No deck.' },
    { n: '01', t: 'Scoping memo', d: 'A 2-page written proposal with timeline, team, and a kill date.' },
    { n: '02', t: 'Week-1 prototype', d: 'Working code in your environment by end of week one. Always.' },
    { n: '03', t: 'Iterate or kill', d: 'Bi-weekly reviews. If a project should die, we say so. We refund the rest.' },
    { n: '04', t: 'Hand-off', d: 'A written runbook, a recorded walkthrough, and 30 days of free office hours.' },
  ];
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  const cols = isMobile ? 1 : isTablet ? 2 : 5;
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`, background: BL.inkSoft,
    }}>
      <BLEyebrow>// how we work</BLEyebrow>
      <h2 aria-label="How does a Bina Labs engagement run from first call to handoff?" style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(40px, 8vw, 80px)',
        letterSpacing: '-0.035em', color: BL.inkText, lineHeight: 1,
      }}>
        From hello to <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>handoff</span>.
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
        <span style={{ color: BL.copper, fontWeight: 500 }}>How does a Bina Labs engagement run from first call to handoff?</span>{' '}
        Five stages: a 30-minute intro call, a 2-page scoping memo with timeline and kill date, a working week-1 prototype in your environment, bi-weekly iterate-or-kill reviews with refund-the-rest if it should die, and a final hand-off with runbook, recorded walkthrough, and 30 days of free office hours. Embedded engagements typically run 6 to 9 months.
      </p>
      <div style={{
        display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 0, borderTop: `1px solid ${BL.inkLine}`,
      }}>
        {steps.map((s, i) => {
          const colIndex = i % cols;
          const rowIndex = Math.floor(i / cols);
          const isLastCol = colIndex === cols - 1;
          const isLastRow = rowIndex === Math.ceil(steps.length / cols) - 1;
          return (
            <div key={s.n} style={{
              padding: 'clamp(24px, 4vw, 32px) clamp(20px, 3vw, 24px)',
              borderRight: !isLastCol ? `1px solid ${BL.inkLine}` : 'none',
              borderBottom: !isLastRow ? `1px solid ${BL.inkLine}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 16, minHeight: isMobile ? 'auto' : 240,
            }}>
              <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.red }}>[{s.n}]</div>
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(20px, 3vw, 24px)', color: BL.inkText, fontWeight: 400 }}>{s.t}</div>
              <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, lineHeight: 1.55 }}>{s.d}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesEngagementModels() {
  const models = [
    { name: 'Fixed-scope sprint', d: '2–6 weeks. Single deliverable, fixed price.', from: '$10k' },
    { name: 'Embedded squad', d: '3–12 months. Full-time team inside yours.', from: '$20k/mo' },
    { name: 'Fractional CTO', d: 'Ongoing. One day per week, two-quarter min.', from: '$7k/mo' },
    { name: 'Research retainer', d: 'Open-ended. We chase the question with you.', from: 'custom' },
  ];
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// engagement models</BLEyebrow>
      <h2 aria-label="How do you buy a Bina Labs engagement?" style={{
        marginTop: 32, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(40px, 8vw, 80px)',
        letterSpacing: '-0.035em', color: BL.inkText, lineHeight: 1,
      }}>
        How to <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.copper, fontWeight: 300 }}>buy</span> us.
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
        <span style={{ color: BL.copper, fontWeight: 500 }}>How do you buy a Bina Labs engagement?</span>{' '}
        Email intelligence@bina-labs.com with what you are trying to do in three to five sentences. Bina Labs responds within two business days with either a scoping call or a polite no. No procurement portals, no SOW templates from 2014 - just a one-page agreement and an invoice in USD.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: 16,
      }}>
        {models.map(m => (
          <div key={m.name} style={{
            border: `1px solid ${BL.inkLineStrong}`, padding: 'clamp(24px, 4vw, 32px) clamp(20px, 3vw, 28px)',
            display: 'flex', flexDirection: 'column', gap: 16, minHeight: 220,
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontFamily: BL.serif, fontSize: 'clamp(20px, 3vw, 26px)', color: BL.inkText, marginBottom: 12, fontWeight: 400 }}>{m.name}</div>
              <div style={{ fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted, lineHeight: 1.55 }}>{m.d}</div>
            </div>
            <div style={{
              fontFamily: BL.mono, fontSize: 13, color: BL.red,
              paddingTop: 16, borderTop: `1px solid ${BL.inkLine}`,
            }}>from {m.from}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'clamp(32px, 6vw, 56px)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <BLPillLink primary href="/contact">Start a conversation →</BLPillLink>
        <BLPillLink href="/work">See past engagements</BLPillLink>
      </div>
    </section>
  );
}
