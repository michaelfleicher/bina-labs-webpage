import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillLink } from '../Chrome.jsx';
import { WRITING_LIST } from '../../data/writings.js';

export default function WritingBody() {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current="writing" />
      <WritingHero />
      <WritingList />
      <WritingComingSoon />
      <BLFooter />
    </div>
  );
}

function WritingHero() {
  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 32px) clamp(32px, 5vw, 48px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>{`// writing · ${WRITING_LIST.length} ${WRITING_LIST.length === 1 ? 'essay' : 'essays'} live · more in edit`}</BLEyebrow>
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
        Notes from production - written by the people who shipped the thing, never by a marketing team that did not.
      </p>
    </section>
  );
}

function WritingList() {
  return (
    <section>
      <div style={{ borderTop: `1px solid ${BL.inkLine}` }}>
        {WRITING_LIST.map((post, i) => (
          <WritingRow key={post.slug} post={post} n={String(i + 1).padStart(2, '0')} />
        ))}
      </div>
    </section>
  );
}

function WritingRow({ post, n }) {
  const [h, setH] = React.useState(false);
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  return (
    <a
      href={`/writing/${post.slug}`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile
          ? '1fr'
          : isTablet
          ? '60px 1fr'
          : '60px 1.6fr 1fr 60px',
        gridTemplateAreas: isMobile
          ? `"num" "headline" "tagline" "meta"`
          : isTablet
          ? `"num headline" "num tagline" "num meta"`
          : undefined,
        alignItems: isMobile ? 'flex-start' : 'center',
        padding: 'clamp(28px, 5vw, 40px) clamp(20px, 4vw, 32px)',
        borderBottom: `1px solid ${BL.inkLine}`,
        background: h ? 'rgba(157,255,77,0.04)' : 'transparent',
        cursor: 'pointer',
        gap: isMobile ? 14 : isTablet ? 20 : 28,
        transition: 'background .15s',
        textDecoration: 'none', color: 'inherit',
      }}>
      <div style={{
        gridArea: isMobile || isTablet ? 'num' : 'auto',
        fontFamily: BL.mono, fontSize: 12, color: BL.inkDim,
      }}>/{n}</div>
      <div style={{ gridArea: isMobile || isTablet ? 'headline' : 'auto' }}>
        <div style={{
          fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted,
          letterSpacing: '0.04em', marginBottom: 10,
        }}>
          {formatDate(post.datePublished)} {post.readTime ? ` · ${post.readTime}` : ''}
        </div>
        <div style={{
          fontFamily: BL.sans, fontSize: 'clamp(22px, 4vw, 32px)',
          fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.15,
          color: h ? BL.red : BL.inkText, transition: 'color .15s',
        }}>
          {post.headline}{' '}
          {post.headlineAccent && (
            <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.copper, fontWeight: 300 }}>
              {post.headlineAccent}
            </span>
          )}
        </div>
      </div>
      <div style={{ gridArea: isMobile || isTablet ? 'tagline' : 'auto' }}>
        <p style={{
          margin: 0,
          fontFamily: BL.serif, fontStyle: 'italic',
          fontSize: 'clamp(15px, 2.2vw, 17px)', lineHeight: 1.55,
          color: BL.inkMuted, fontWeight: 300,
        }}>
          {post.tagline}
        </p>
        {post.tags?.length > 0 && (
          <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} style={{
                fontFamily: BL.mono, fontSize: 10, color: BL.inkDim,
                letterSpacing: '0.04em',
              }}>#{t.replace(/\s+/g, '-').toLowerCase()}</span>
            ))}
          </div>
        )}
      </div>
      {!isMobile && !isTablet && (
        <div style={{
          fontFamily: BL.mono, fontSize: 18, color: BL.inkText, textAlign: 'right',
          transform: h ? 'translateX(8px)' : 'none', transition: 'transform .15s',
        }}>→</div>
      )}
    </a>
  );
}

function WritingComingSoon() {
  const isMobile = useMediaQuery(MQ.mobile);
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px) clamp(64px, 12vw, 140px)',
      borderBottom: `1px solid ${BL.inkLine}`,
      position: 'relative',
      backgroundImage: `linear-gradient(${BL.inkLine} 1px, transparent 1px),
                        linear-gradient(90deg, ${BL.inkLine} 1px, transparent 1px)`,
      backgroundSize: '64px 64px',
    }}>
      <BLEyebrow>// coming up</BLEyebrow>
      <h2 style={{
        marginTop: 24, fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(36px, 7vw, 64px)',
        lineHeight: 1.05, letterSpacing: '-0.035em', color: BL.inkText, maxWidth: '20ch',
        marginBottom: 'clamp(28px, 5vw, 40px)',
      }}>
        More <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.copper, fontWeight: 300 }}>in edit</span>.
      </h2>
      <div style={{
        padding: 'clamp(24px, 4vw, 32px)',
        border: `1px solid ${BL.inkLine}`,
        background: 'rgba(232,241,247,0.02)',
        maxWidth: 640,
        fontFamily: BL.mono, fontSize: 13, color: BL.inkMuted, lineHeight: 1.7,
      }}>
        <div style={{
          color: BL.copper, fontSize: 11, letterSpacing: '0.08em',
          textTransform: 'uppercase', marginBottom: 12,
        }}>
          // what's next
        </div>
        <div><span style={{ color: BL.red }}>→</span> Eval-first AI engineering, the unglamorous version</div>
        <div><span style={{ color: BL.red }}>→</span> On-prem inference economics for B2B teams</div>
        <div><span style={{ color: BL.red }}>→</span> Honest deprecation: four projects we refunded</div>
        <div><span style={{ color: BL.red }}>→</span> Long-context retrieval, beyond the chunking memes</div>
      </div>
      <div style={{
        marginTop: 'clamp(32px, 6vw, 56px)',
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

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
