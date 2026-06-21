import React from 'react';
import { BL, MQ } from '../../system/bl.js';
import { useMediaQuery } from '../../system/useMediaQuery.js';
import { BLNav, BLFooter, BLEyebrow, BLPillLink } from '../Chrome.jsx';
import { WRITING_LIST } from '../../data/writings.js';

export default function BlogPostBody({ post }) {
  return (
    <div className="bl-page" style={{ background: BL.ink, color: BL.inkText, fontFamily: BL.sans, minHeight: '100vh' }}>
      <BLNav current={`writing / ${post.slug}`} />
      <article>
        <PostHero post={post} />
        <PostCover post={post} />
        <PostBody post={post} />
      </article>
      <PostCTA />
      <PostRelated currentSlug={post.slug} />
      <BLFooter />
    </div>
  );
}

function PostHero({ post }) {
  const goBack = (e) => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      e.preventDefault();
      window.history.back();
    }
  };
  const date = formatDate(post.datePublished);
  const updatedLabel = formatUpdatedLabel(post.datePublished, post.dateModified);
  return (
    <section style={{
      padding: 'clamp(40px, 7vw, 64px) clamp(20px, 4vw, 32px) clamp(32px, 5vw, 48px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <a
        href="/writing"
        onClick={goBack}
        style={{
          fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted,
          cursor: 'pointer', marginBottom: 32, textDecoration: 'none', display: 'inline-block',
        }}
        className="bl-link-hover">
        ← back to writing
      </a>
      <BLEyebrow>{post.eyebrow}</BLEyebrow>
      <h1 style={{
        marginTop: 28,
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(40px, 8vw, 96px)',
        lineHeight: 0.98, letterSpacing: '-0.04em', color: BL.inkText,
        maxWidth: '20ch',
      }}>
        {post.headline}{' '}
        {post.headlineAccent && (
          <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>
            {post.headlineAccent}
          </span>
        )}
      </h1>
      {post.tagline && (
        <p style={{
          marginTop: 32,
          fontFamily: BL.serif, fontSize: 'clamp(18px, 2.6vw, 26px)', lineHeight: 1.4,
          color: BL.inkText, maxWidth: '54ch', fontWeight: 300, fontStyle: 'italic',
        }}>
          {post.tagline}
        </p>
      )}
      <div
        itemScope
        itemType="https://schema.org/Person"
        style={{
          marginTop: 32,
          fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted,
          letterSpacing: '0.04em',
          display: 'flex', flexWrap: 'wrap', gap: 16,
        }}>
        <span>
          By <a
            href={`/about#${(post.author?.name ?? '') === 'Ronen Chen' ? 'ronen' : 'michael'}`}
            itemProp="url"
            className="bl-link-hover"
            style={{ color: BL.red, textDecoration: 'none' }}>
            <span itemProp="name">{post.author?.name ?? 'Michael Fleicher'}</span>
          </a> · <span itemProp="jobTitle">{post.author?.role ?? 'Principal'}</span>
        </span>
        <span style={{ color: BL.inkDim }}>{date}</span>
        {post.readTime && <span style={{ color: BL.inkDim }}>· {post.readTime}</span>}
        {updatedLabel && (
          <span style={{
            fontFamily: BL.mono, fontSize: 11, color: BL.copper,
            letterSpacing: '0.04em',
            padding: '3px 8px',
            border: `1px solid ${BL.copper}`,
          }}>
            Updated: {updatedLabel}
          </span>
        )}
      </div>
      {post.tags?.length > 0 && (
        <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {post.tags.map((t) => (
            <span key={t} style={{
              fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted,
              padding: '5px 10px', border: `1px solid ${BL.inkLine}`,
              letterSpacing: '0.04em',
            }}>{t}</span>
          ))}
        </div>
      )}
    </section>
  );
}

function PostCover({ post }) {
  if (!post.cover) return null;
  return (
    <figure style={{
      margin: 0,
      padding: 'clamp(32px, 6vw, 56px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
      background: BL.inkSoft,
    }}>
      <img
        src={post.cover.src}
        alt={post.cover.alt ?? ''}
        loading="eager"
        style={{
          width: '100%', maxWidth: 1100, margin: '0 auto', display: 'block',
          border: `1px solid ${BL.inkLine}`,
        }}
      />
      {post.cover.caption && (
        <figcaption style={{
          marginTop: 16, textAlign: 'center',
          fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted,
          maxWidth: 720, marginInline: 'auto', lineHeight: 1.55,
        }}>
          {post.cover.caption}
        </figcaption>
      )}
    </figure>
  );
}

function PostBody({ post }) {
  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 96px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {post.body.map((block, i) => <Block key={i} block={block} />)}
      </div>
    </section>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return (
        <p style={{
          fontFamily: BL.sans, fontSize: 'clamp(16px, 2.2vw, 18px)', lineHeight: 1.7,
          color: BL.inkText, margin: '0 0 24px', fontWeight: 300,
        }}>
          <Inline text={block.text} parts={block.parts} />
        </p>
      );
    case 'h2':
      return (
        <h2 style={{
          fontFamily: BL.sans, fontWeight: 300,
          fontSize: 'clamp(28px, 5vw, 40px)',
          letterSpacing: '-0.025em', lineHeight: 1.15, color: BL.inkText,
          margin: '56px 0 20px',
        }}>
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 style={{
          fontFamily: BL.sans, fontWeight: 400,
          fontSize: 'clamp(20px, 3vw, 24px)',
          letterSpacing: '-0.015em', lineHeight: 1.3, color: BL.copper,
          margin: '36px 0 12px',
        }}>
          {block.text}
        </h3>
      );
    case 'ol':
      return (
        <ol style={{
          margin: '0 0 28px', paddingLeft: 0, listStyle: 'none',
          counterReset: 'bl-counter',
        }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              counterIncrement: 'bl-counter',
              position: 'relative',
              paddingLeft: 44,
              fontFamily: BL.sans, fontSize: 'clamp(15px, 2.1vw, 17px)', lineHeight: 1.7,
              color: BL.inkText, margin: '0 0 18px', fontWeight: 300,
            }}>
              <span style={{
                position: 'absolute', left: 0, top: 0,
                fontFamily: BL.mono, fontSize: 12, color: BL.red,
                letterSpacing: '0.04em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.lead && (
                <span style={{ fontWeight: 500, color: BL.inkText }}>{item.lead} </span>
              )}
              <Inline text={item.text} parts={item.parts} />
            </li>
          ))}
        </ol>
      );
    case 'ul':
      return (
        <ul style={{
          margin: '0 0 28px', paddingLeft: 0, listStyle: 'none',
        }}>
          {block.items.map((item, i) => {
            const isString = typeof item === 'string';
            const text = isString ? item : item.text;
            const parts = isString ? undefined : item.parts;
            const lead = isString ? undefined : item.lead;
            return (
              <li key={i} style={{
                position: 'relative', paddingLeft: 28,
                fontFamily: BL.sans, fontSize: 'clamp(15px, 2.1vw, 17px)', lineHeight: 1.7,
                color: BL.inkText, margin: '0 0 12px', fontWeight: 300,
              }}>
                <span style={{
                  position: 'absolute', left: 0, top: 0,
                  color: BL.red, fontFamily: BL.mono, fontSize: 14,
                }}>→</span>
                {lead && <span style={{ fontWeight: 500 }}>{lead} </span>}
                <Inline text={text} parts={parts} />
              </li>
            );
          })}
        </ul>
      );
    case 'table':
      return <PostTable headers={block.headers} rows={block.rows} />;
    case 'hr':
      return (
        <hr style={{
          border: 0, borderTop: `1px solid ${BL.inkLine}`,
          margin: '48px 0',
        }} />
      );
    case 'faq':
      return (
        <div style={{
          margin: '0 0 28px',
          padding: '20px 24px',
          borderLeft: `2px solid ${BL.copper}`,
          background: 'rgba(36,229,191,0.04)',
        }}>
          <div style={{
            fontFamily: BL.mono, fontSize: 12, color: BL.copper,
            letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8,
          }}>
            Q
          </div>
          <div style={{
            fontFamily: BL.sans, fontWeight: 500, fontSize: 'clamp(16px, 2.2vw, 18px)',
            color: BL.inkText, marginBottom: 12, lineHeight: 1.5,
          }}>
            {block.q}
          </div>
          <div style={{
            fontFamily: BL.sans, fontSize: 'clamp(15px, 2.1vw, 17px)', lineHeight: 1.7,
            color: BL.inkMuted, fontWeight: 300,
          }}>
            <Inline text={typeof block.a === 'string' ? block.a : undefined} parts={Array.isArray(block.a) ? block.a : undefined} />
          </div>
        </div>
      );
    case 'callout':
      return (
        <p style={{
          fontFamily: BL.serif, fontStyle: 'italic',
          fontSize: 'clamp(15px, 2.1vw, 17px)', lineHeight: 1.65,
          color: BL.inkMuted, margin: '40px 0 0',
          paddingTop: 28, borderTop: `1px solid ${BL.inkLine}`,
          fontWeight: 300,
        }}>
          <Inline text={block.text} parts={block.parts} />
        </p>
      );
    default:
      return null;
  }
}

function PostTable({ headers, rows }) {
  const isMobile = useMediaQuery(MQ.mobile);
  if (isMobile) {
    return (
      <div style={{ margin: '0 0 28px' }}>
        {rows.map((row, i) => (
          <div key={i} style={{
            border: `1px solid ${BL.inkLine}`, marginBottom: 12,
            background: 'rgba(232,241,247,0.02)',
          }}>
            {row.map((cell, j) => (
              <div key={j} style={{
                padding: '14px 16px',
                borderBottom: j < row.length - 1 ? `1px solid ${BL.inkLine}` : 'none',
              }}>
                <div style={{
                  fontFamily: BL.mono, fontSize: 10, color: BL.inkDim,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  marginBottom: 6,
                }}>
                  {headers[j]}
                </div>
                <div style={{
                  fontFamily: BL.sans, fontSize: 15, color: BL.inkText,
                  lineHeight: 1.5, fontWeight: 300,
                }}>
                  {cell}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{
      margin: '0 0 28px', overflow: 'hidden',
      border: `1px solid ${BL.inkLine}`,
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: BL.sans }}>
        <thead>
          <tr style={{ background: BL.inkSoft }}>
            {headers.map((h) => (
              <th key={h} style={{
                textAlign: 'left',
                padding: '14px 18px',
                fontFamily: BL.mono, fontSize: 11, color: BL.copper,
                fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
                borderBottom: `1px solid ${BL.inkLine}`,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{
              borderBottom: i < rows.length - 1 ? `1px solid ${BL.inkLine}` : 'none',
            }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '14px 18px', verticalAlign: 'top',
                  fontFamily: BL.sans, fontSize: 15, lineHeight: 1.55,
                  color: j === 0 ? BL.inkMuted : BL.inkText,
                  fontWeight: 300,
                  borderRight: j < row.length - 1 ? `1px solid ${BL.inkLine}` : 'none',
                  width: `${100 / row.length}%`,
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Inline({ text, parts }) {
  if (parts && parts.length) {
    return (
      <>
        {parts.map((p, i) => {
          if (typeof p === 'string') return <React.Fragment key={i}>{p}</React.Fragment>;
          if (p.b) return <strong key={i} style={{ fontWeight: 500, color: BL.inkText }}>{p.b}</strong>;
          if (p.i) return <em key={i} style={{ fontFamily: BL.serif, fontStyle: 'italic' }}>{p.i}</em>;
          if (p.c) return (
            <code key={i} style={{
              fontFamily: BL.mono, fontSize: '0.9em',
              padding: '2px 6px', background: 'rgba(232,241,247,0.06)',
              border: `1px solid ${BL.inkLine}`, color: BL.copper,
            }}>{p.c}</code>
          );
          if (p.a) return (
            <a key={i} href={p.href} style={{
              color: BL.red, textDecoration: 'none', borderBottom: `1px solid ${BL.red}`,
            }} className="bl-link-hover">{p.a}</a>
          );
          return null;
        })}
      </>
    );
  }
  return <>{text}</>;
}

function PostCTA() {
  const isMobile = useMediaQuery(MQ.mobile);
  return (
    <section style={{
      padding: 'clamp(56px, 9vw, 96px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`, background: BL.inkSoft,
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <BLEyebrow>// next step</BLEyebrow>
        <h3 style={{
          marginTop: 24,
          fontFamily: BL.sans, fontWeight: 300,
          fontSize: 'clamp(28px, 5vw, 44px)',
          letterSpacing: '-0.025em', lineHeight: 1.1, color: BL.inkText,
          marginBottom: 24, maxWidth: '22ch',
        }}>
          Want a build, not a{' '}
          <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>roadmap</span>?
        </h3>
        <p style={{
          fontFamily: BL.serif, fontStyle: 'italic',
          fontSize: 'clamp(16px, 2.2vw, 19px)', lineHeight: 1.55,
          color: BL.inkMuted, fontWeight: 300, marginBottom: 32, maxWidth: '52ch',
        }}>
          We embed senior AI engineers into B2B teams. 4-week paid pilot. Working code in your environment by week four, or we walk.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 12,
          alignItems: isMobile ? 'stretch' : 'center',
        }}>
          <BLPillLink primary href="/contact">Start a conversation →</BLPillLink>
          <BLPillLink href="/manifesto">Read the manifesto</BLPillLink>
        </div>
      </div>
    </section>
  );
}

function PostRelated({ currentSlug }) {
  const others = WRITING_LIST.filter((p) => p.slug !== currentSlug).slice(0, 3);
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);
  if (others.length === 0) {
    return (
      <section style={{
        padding: 'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 32px)',
        borderBottom: `1px solid ${BL.inkLine}`,
      }}>
        <BLEyebrow>// more soon</BLEyebrow>
        <p style={{
          marginTop: 16,
          fontFamily: BL.serif, fontStyle: 'italic',
          fontSize: 'clamp(18px, 2.5vw, 22px)', color: BL.inkMuted, fontWeight: 300,
          maxWidth: '40ch',
        }}>
          More essays in edit. We will not ship a stale archive.
        </p>
      </section>
    );
  }
  return (
    <section style={{
      padding: 'clamp(56px, 10vw, 120px) clamp(20px, 4vw, 32px)',
      borderBottom: `1px solid ${BL.inkLine}`,
    }}>
      <BLEyebrow>// more writing</BLEyebrow>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: 16, marginTop: 32,
      }}>
        {others.map((p) => (
          <a key={p.slug} href={`/writing/${p.slug}`} style={{
            border: `1px solid ${BL.inkLine}`, padding: 'clamp(24px, 4vw, 32px)',
            background: 'rgba(232,241,247,0.02)',
            display: 'flex', flexDirection: 'column', gap: 16,
            textDecoration: 'none', color: 'inherit',
          }}>
            <div style={{ fontFamily: BL.mono, fontSize: 11, color: BL.inkMuted }}>
              {formatDate(p.datePublished)} · {p.readTime}
            </div>
            <div style={{
              fontFamily: BL.sans, fontSize: 'clamp(20px, 3vw, 24px)',
              fontWeight: 300, letterSpacing: '-0.015em',
              color: BL.inkText, lineHeight: 1.25,
            }}>
              {p.headline}
            </div>
          </a>
        ))}
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

function formatUpdatedLabel(publishedIso, modifiedIso) {
  if (!publishedIso || !modifiedIso) return '';
  const published = new Date(publishedIso);
  const modified = new Date(modifiedIso);
  if (Number.isNaN(published.getTime()) || Number.isNaN(modified.getTime())) return '';
  if (modified.getTime() <= published.getTime()) return '';
  return modified.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}
