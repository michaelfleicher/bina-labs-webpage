import React from 'react';
import { BL, MQ } from '../system/bl.js';
import { useMediaQuery } from '../system/useMediaQuery.js';

export function BLNav({ current, navigate }) {
  const [t, setT] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const isTablet = useMediaQuery(MQ.tablet);
  const isMobile = useMediaQuery(MQ.mobile);
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    if (!navRef.current || typeof window === 'undefined') return;
    const el = navRef.current;
    const update = () => {
      const h = el.offsetHeight;
      document.documentElement.style.setProperty('--bl-nav-h', `${h}px`);
    };
    update();
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isTablet, isMobile]);

  const time = t.toISOString().split('T')[1].slice(0, 8);

  const items = [
    { label: '~/work', page: 'work' },
    { label: '~/services', page: 'services' },
    { label: '~/manifesto', page: 'manifesto' },
    { label: '~/writing', page: 'writing' },
    { label: '~/about', page: 'about' },
  ];

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const goto = (page) => { setOpen(false); navigate(page); };

  return (
    <>
      <nav ref={navRef} style={{
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr auto' : '1fr auto 1fr',
        alignItems: 'center',
        padding: 'clamp(10px, 2.4vw, 14px) clamp(16px, 4vw, 32px)',
        borderBottom: `1px solid ${BL.inkLine}`,
        fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted,
        position: 'sticky', top: 0, background: BL.ink, zIndex: 50,
        backdropFilter: 'blur(8px)',
        gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12, minWidth: 0 }}>
          <a onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12, cursor: 'pointer', minWidth: 0 }}>
            <span style={{
              width: 10, height: 10, background: BL.red,
              boxShadow: `0 0 14px ${BL.red}aa`, display: 'inline-block', flexShrink: 0,
            }} />
            <span style={{ color: BL.inkText, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>BINA LABS</span>
          </a>
          {!isMobile && <span>::</span>}
          {!isMobile && <span style={{ color: BL.copper }}>{current || 'home'}</span>}
        </div>

        {!isTablet && (
          <div style={{ display: 'flex', gap: 4 }}>
            {items.map((x) => (
              <a key={x.page}
                onClick={() => navigate(x.page)}
                style={{
                  color: current === x.page ? BL.inkText : BL.inkMuted,
                  padding: '6px 12px', borderRadius: 4, cursor: 'pointer',
                  background: current === x.page ? 'rgba(232,241,247,0.05)' : 'transparent',
                  transition: 'all .15s',
                }}
                onMouseEnter={(e) => { if (current !== x.page) { e.currentTarget.style.color = BL.inkText; e.currentTarget.style.background = 'rgba(232,241,247,0.04)'; } }}
                onMouseLeave={(e) => { if (current !== x.page) { e.currentTarget.style.color = BL.inkMuted; e.currentTarget.style.background = 'transparent'; } }}>
                {x.label}
              </a>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: isMobile ? 10 : 16, alignItems: 'center' }}>
          {!isTablet && <span style={{ color: BL.inkDim }}>UTC {time}</span>}
          {!isTablet && (
            <a onClick={() => navigate('contact')} style={{
              color: BL.ink, background: BL.red,
              padding: '8px 16px', cursor: 'pointer',
              fontWeight: 500, letterSpacing: '0.02em', borderRadius: 0,
              fontFamily: BL.mono, fontSize: 12,
            }}>./connect.sh</a>
          )}
          {isTablet && (
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              style={{
                background: 'transparent', border: `1px solid ${BL.inkLineStrong}`,
                color: BL.inkText, padding: '8px 12px',
                fontFamily: BL.mono, fontSize: 12, cursor: 'pointer', borderRadius: 0,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
              <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ width: 16, height: 1, background: BL.inkText }} />
                <span style={{ width: 16, height: 1, background: BL.inkText }} />
                <span style={{ width: 16, height: 1, background: BL.inkText }} />
              </span>
              menu
            </button>
          )}
        </div>
      </nav>

      {open && isTablet && (
        <div className="bl-mobile-drawer" role="dialog" aria-modal="true">
          <div className="bl-mobile-drawer-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                width: 10, height: 10, background: BL.red,
                boxShadow: `0 0 14px ${BL.red}aa`, display: 'inline-block',
              }} />
              <span style={{ color: BL.inkText, letterSpacing: '0.04em' }}>BINA LABS</span>
              <span>::</span>
              <span style={{ color: BL.copper }}>{current || 'home'}</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'transparent', border: `1px solid ${BL.inkLineStrong}`,
                color: BL.inkText, padding: '8px 12px',
                fontFamily: BL.mono, fontSize: 12, cursor: 'pointer', borderRadius: 0,
              }}>close ✕</button>
          </div>
          <div className="bl-mobile-drawer-list">
            <a onClick={() => goto('home')} style={{ color: current === 'home' ? BL.copper : BL.inkText }}>~/home</a>
            {items.map((x) => (
              <a key={x.page} onClick={() => goto(x.page)} style={{ color: current === x.page ? BL.copper : BL.inkText }}>{x.label}</a>
            ))}
          </div>
          <div style={{ marginTop: 'auto', padding: '20px', borderTop: `1px solid ${BL.inkLine}`, display: 'flex', justifyContent: 'space-between', fontFamily: BL.mono, fontSize: 11, color: BL.inkDim }}>
            <span>UTC {time}</span>
            <a onClick={() => goto('contact')} style={{
              color: BL.ink, background: BL.red,
              padding: '10px 18px', cursor: 'pointer',
              fontWeight: 500, letterSpacing: '0.02em',
              fontFamily: BL.mono, fontSize: 12,
            }}>./connect.sh</a>
          </div>
        </div>
      )}
    </>
  );
}

export function BLFooter({ navigate }) {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);

  const columns = [
    {
      h: '// pages',
      l: [
        { t: 'work', p: 'work' },
        { t: 'services', p: 'services' },
        { t: 'manifesto', p: 'manifesto' },
        { t: 'writing', p: 'writing' },
      ],
    },
    {
      h: '// social',
      l: [
        { t: 'github', href: 'https://github.com/michaelfleicher' },
        { t: 'linkedin', href: 'https://www.linkedin.com/in/michaelfleicher' },
      ],
    },
    {
      h: '// company',
      l: [
        { t: 'about', p: 'about' },
        { t: 'careers (4)', p: 'about' },
        { t: 'press', href: 'mailto:intelligence@bina-labs.com?subject=Press%20inquiry' },
        { t: 'contact', p: 'contact' },
      ],
    },
  ];

  return (
    <footer style={{
      background: BL.ink,
      padding: 'clamp(48px, 9vw, 80px) clamp(20px, 4vw, 32px) 24px',
      fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted,
      borderTop: `1px solid ${BL.inkLine}`,
    }}>
      <h2 style={{
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: 'clamp(48px, 14vw, 132px)',
        lineHeight: 0.92, letterSpacing: '-0.045em',
        color: BL.inkText, marginBottom: 'clamp(32px, 6vw, 56px)', maxWidth: '12ch',
      }}>
        Have a real <span style={{ fontFamily: BL.serif, fontStyle: 'italic', color: BL.red, fontWeight: 300 }}>problem</span>?<br />
        Let's build.
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
        gap: isMobile ? 32 : 60,
        paddingTop: 40, borderTop: `1px solid ${BL.inkLine}`,
      }}>
        <div>
          <a href="mailto:intelligence@bina-labs.com" style={{
            color: BL.inkText, fontSize: 16, marginBottom: 8,
            display: 'inline-block', cursor: 'pointer', wordBreak: 'break-word',
            textDecoration: 'none',
          }} className="bl-link-hover">intelligence@bina-labs.com</a>
          <div style={{ marginTop: 28 }}>30 Melchet St - Tel Aviv, Israel, 6523417</div>
        </div>
        {columns.map((c) => (
          <div key={c.h}>
            <div style={{ marginBottom: 16, color: BL.inkDim }}>{c.h}</div>
            {c.l.map((x) => x.href ? (
              <a key={x.t} href={x.href} target="_blank" rel="noopener noreferrer"
                style={{ color: BL.inkText, marginBottom: 8, cursor: 'pointer', display: 'block', textDecoration: 'none' }} className="bl-link-hover">{x.t}</a>
            ) : (
              <div key={x.t}
                onClick={() => x.p && navigate(x.p)}
                style={{ color: BL.inkText, marginBottom: 8, cursor: x.p ? 'pointer' : 'default' }} className="bl-link-hover">{x.t}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 'clamp(40px, 8vw, 80px)', paddingTop: 24, borderTop: `1px solid ${BL.inkLine}`,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 12 : 0,
        justifyContent: 'space-between', fontSize: 11,
      }}>
        <span>© 2026 bina-labs.com - architectural intelligence of tomorrow</span>
        <span style={{ color: BL.red }}>● systems nominal</span>
      </div>
    </footer>
  );
}

export function BLEyebrow({ children, color }) {
  return (
    <div style={{
      fontFamily: BL.mono, fontSize: 11, color: color || BL.inkDim,
      letterSpacing: '0.06em', textTransform: 'uppercase',
    }}>{children}</div>
  );
}

export function BLPillButton({ children, primary, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(12px, 2vw, 14px) clamp(18px, 3vw, 22px)',
        background: primary ? (h ? BL.bone : BL.red) : 'transparent',
        color: primary ? BL.ink : BL.inkText,
        border: primary ? 'none' : `1px solid ${BL.inkLineStrong}`,
        fontFamily: BL.mono, fontSize: 13, fontWeight: 500,
        letterSpacing: '0.02em', transition: 'all .2s',
        display: 'inline-flex', alignItems: 'center', gap: 10,
      }}>
      {children}
    </button>
  );
}

export function BLMarquee({ items, color }) {
  return (
    <div style={{
      borderTop: `1px solid ${BL.inkLine}`, borderBottom: `1px solid ${BL.inkLine}`,
      padding: '20px 0', overflow: 'hidden', background: BL.inkSoft,
    }}>
      <div style={{
        display: 'flex', gap: 'clamp(28px, 5vw, 56px)', fontFamily: BL.mono,
        fontSize: 'clamp(12px, 2.5vw, 14px)', color: BL.inkMuted,
        animation: 'bl-scroll-x 60s linear infinite',
        whiteSpace: 'nowrap', width: 'max-content',
      }}>
        {[...items, ...items, ...items].map((x, i) => (
          <span key={i} style={{ display: 'inline-flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: color || BL.red }}>⌬</span>
            <span style={{ color: BL.inkText }}>{x.split('—')[0].trim()}</span>
            <span>—</span>
            <span>{x.split('—')[1] && x.split('—')[1].trim()}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
