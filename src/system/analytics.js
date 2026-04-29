// Lightweight Google Analytics 4 loader for a hash-routed SPA.
// Reads VITE_GA_ID at build time. If unset, every export is a no-op,
// so local dev and previews stay clean.

const GA_ID = import.meta.env.VITE_GA_ID;
let initialized = false;

function gtag() {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export function initAnalytics() {
  if (initialized || !GA_ID || typeof window === 'undefined') return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  gtag('js', new Date());
  // Manual page_view sending — the SPA fires its own on route change.
  gtag('config', GA_ID, { send_page_view: false });
}

export function trackPageView(page) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  const path = page === 'home' ? '/' : `/${page}`;
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  });
}

export function trackEvent(name, params = {}) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}
