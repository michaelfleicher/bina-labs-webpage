import React from 'react';
import PageHome from './pages/Home.jsx';
import PageServices from './pages/Services.jsx';
import PageWork from './pages/Work.jsx';
import PageCaseStudy from './pages/CaseStudy.jsx';
import PageAbout from './pages/About.jsx';
import PageManifesto from './pages/Manifesto.jsx';
import PageWriting from './pages/Writing.jsx';
import PageContact from './pages/Contact.jsx';
import { initAnalytics, trackPageView } from './system/analytics.js';

const PAGES = {
  home: PageHome,
  services: PageServices,
  work: PageWork,
  'case-study': PageCaseStudy,
  about: PageAbout,
  manifesto: PageManifesto,
  writing: PageWriting,
  contact: PageContact,
};

const hashToPage = (h) => (h.split('/')[0] || 'home');

export default function App() {
  const [page, setPage] = React.useState(() => hashToPage(window.location.hash.slice(1)));
  const [transition, setTransition] = React.useState(0);
  const pageRef = React.useRef(page);
  React.useEffect(() => { pageRef.current = page; }, [page]);

  React.useEffect(() => {
    initAnalytics();
    trackPageView(page);
  }, []);

  React.useEffect(() => {
    trackPageView(page);
  }, [page]);

  const navigate = React.useCallback((p) => {
    setTransition((t) => t + 1);
    setPage(hashToPage(p));
    window.location.hash = p;
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const onHash = () => {
      const base = hashToPage(window.location.hash.slice(1));
      if (base !== pageRef.current) {
        setPage(base);
        setTransition((t) => t + 1);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const Page = PAGES[page] || PageHome;

  return (
    <div key={transition} className="page-wrap" data-screen-label={page}>
      <Page navigate={navigate} />
    </div>
  );
}
