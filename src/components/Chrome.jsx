import React from 'react';
import { BL, MQ } from '../system/bl.js';
import { useMediaQuery } from '../system/useMediaQuery.js';

const NAV_ITEMS = [
  { label: '~/work', page: 'work', href: '/work' },
  { label: '~/services', page: 'services', href: '/services' },
  { label: '~/manifesto', page: 'manifesto', href: '/manifesto' },
  { label: '~/writing', page: 'writing', href: '/writing' },
  { label: '~/about', page: 'about', href: '/about' },
];

export function BLNav({ current }) {
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

  const closeDrawer = () => setOpen(false);

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
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12, cursor: 'pointer', minWidth: 0, textDecoration: 'none', color: 'inherit' }}>
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
            {NAV_ITEMS.map((x) => (
              <a key={x.page}
                href={x.href}
                style={{
                  color: current === x.page ? BL.inkText : BL.inkMuted,
                  padding: '6px 12px', borderRadius: 4, cursor: 'pointer',
                  background: current === x.page ? 'rgba(232,241,247,0.05)' : 'transparent',
                  transition: 'all .15s', textDecoration: 'none',
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
            <a href="/contact" style={{
              color: BL.ink, background: BL.red,
              padding: '8px 16px', cursor: 'pointer',
              fontWeight: 500, letterSpacing: '0.02em', borderRadius: 0,
              fontFamily: BL.mono, fontSize: 12, textDecoration: 'none',
            }}>./connect.sh</a>
          )}
          {isTablet && (
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              style={{
                background: 'transparent', border: `1px solid ${BL.inkLineStrong}`,
                color: BL.inkText, padding: '10px 14px', minHeight: BL.tap,
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
                color: BL.inkText, padding: '10px 14px', minHeight: BL.tap,
                fontFamily: BL.mono, fontSize: 12, cursor: 'pointer', borderRadius: 0,
              }}>close ✕</button>
          </div>
          <div className="bl-mobile-drawer-list">
            <a href="/" onClick={closeDrawer} style={{ color: current === 'home' ? BL.copper : BL.inkText, textDecoration: 'none' }}>~/home</a>
            {NAV_ITEMS.map((x) => (
              <a key={x.page} href={x.href} onClick={closeDrawer} style={{ color: current === x.page ? BL.copper : BL.inkText, textDecoration: 'none' }}>{x.label}</a>
            ))}
          </div>
          <div style={{ marginTop: 'auto', padding: '20px', borderTop: `1px solid ${BL.inkLine}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: BL.mono, fontSize: 11, color: BL.inkDim }}>
            <span>UTC {time}</span>
            <a href="/contact" onClick={closeDrawer} style={{
              color: BL.ink, background: BL.red,
              padding: '14px 22px', cursor: 'pointer',
              fontWeight: 500, letterSpacing: '0.02em',
              fontFamily: BL.mono, fontSize: 12,
              display: 'inline-flex', alignItems: 'center', minHeight: BL.tap,
              textDecoration: 'none',
            }}>./connect.sh</a>
          </div>
        </div>
      )}
    </>
  );
}

export function BLFooter() {
  const isMobile = useMediaQuery(MQ.mobile);
  const isTablet = useMediaQuery(MQ.tablet);

  const columns = [
    {
      h: '// pages',
      l: [
        { t: 'work', href: '/work' },
        { t: 'services', href: '/services' },
        { t: 'manifesto', href: '/manifesto' },
        { t: 'writing', href: '/writing' },
      ],
    },
    {
      h: '// social',
      l: [
        { t: 'github', href: 'https://github.com/michaelfleicher', external: true },
        { t: 'linkedin', href: 'https://www.linkedin.com/in/michaelfleicher', external: true },
      ],
    },
    {
      h: '// company',
      l: [
        { t: 'about', href: '/about' },
        { t: 'careers (4)', href: '/about' },
        { t: 'press', href: 'mailto:intelligence@bina-labs.com?subject=Press%20inquiry', external: true },
        { t: 'contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer style={{
      background: BL.ink,
      padding: isMobile ? '48px 20px 24px' : 'clamp(48px, 9vw, 80px) clamp(20px, 4vw, 32px) 24px',
      fontFamily: BL.mono, fontSize: 12, color: BL.inkMuted,
      borderTop: `1px solid ${BL.inkLine}`,
    }}>
      <h2 style={{
        fontFamily: BL.sans, fontWeight: 300,
        fontSize: isMobile ? 64 : 'clamp(48px, 14vw, 132px)',
        lineHeight: 0.92, letterSpacing: '-0.045em',
        color: BL.inkText, marginBottom: isMobile ? 32 : 'clamp(32px, 6vw, 56px)', maxWidth: '12ch',
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
            {c.l.map((x) => (
              <a key={x.t}
                href={x.href}
                {...(x.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ color: BL.inkText, marginBottom: 8, cursor: 'pointer', display: 'block', textDecoration: 'none' }}
                className="bl-link-hover">{x.t}</a>
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

export function BLPillButton({ children, primary, onClick, type }) {
  const [h, setH] = React.useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(12px, 2vw, 14px) clamp(18px, 3vw, 22px)',
        minHeight: BL.tap,
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

export function BLPillLink({ children, primary, href, onClick, external }) {
  const [h, setH] = React.useState(false);
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a
      href={href}
      onClick={onClick}
      {...externalProps}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(12px, 2vw, 14px) clamp(18px, 3vw, 22px)',
        minHeight: BL.tap,
        background: primary ? (h ? BL.bone : BL.red) : 'transparent',
        color: primary ? BL.ink : BL.inkText,
        border: primary ? 'none' : `1px solid ${BL.inkLineStrong}`,
        fontFamily: BL.mono, fontSize: 13, fontWeight: 500,
        letterSpacing: '0.02em', transition: 'all .2s',
        display: 'inline-flex', alignItems: 'center', gap: 10,
        textDecoration: 'none', cursor: 'pointer',
        boxSizing: 'border-box',
      }}>
      {children}
    </a>
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
