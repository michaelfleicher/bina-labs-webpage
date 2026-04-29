// Lightweight Google Analytics 4 loader for Astro static + view-transitions.
// Reads PUBLIC_GA_ID (Astro public env) or VITE_GA_ID (legacy) at build time.
// If unset, every export is a no-op so local dev and previews stay clean.

const GA_ID = import.meta.env.PUBLIC_GA_ID ?? import.meta.env.VITE_GA_ID;
let initialized = false;
let routeTrackingBound = false;

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
  // Manual page_view dispatch — Astro view transitions fire `astro:after-swap`,
  // and the first hit is sent below.
  gtag('config', GA_ID, { send_page_view: false });
}

export function trackPageView(path) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  const resolved = path ?? window.location.pathname + window.location.search;
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: resolved,
  });
}

export function trackEvent(name, params = {}) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

// Bind a single `astro:after-swap` listener so that view-transition navigations
// dispatch a fresh page_view. Also fires once for the initial load.
export function setupRouteTracking() {
  if (routeTrackingBound || !GA_ID || typeof window === 'undefined') return;
  routeTrackingBound = true;

  const send = () => trackPageView();

  if (document.readyState === 'complete') {
    send();
  } else {
    window.addEventListener('load', send, { once: true });
  }
  document.addEventListener('astro:after-swap', send);
}
