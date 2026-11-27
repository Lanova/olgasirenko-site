import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useRoute, Route } from './hooks/useRoute';
import { portfolioData } from './data/portfolioData';
import { articles, essays } from './data/essays';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { AdvisoryPage } from './pages/AdvisoryPage';
import { WritingPage } from './pages/WritingPage';
import { ArticlePage } from './pages/ArticlePage';

import { FAQS, TRACKS } from './data/advisory';

const SITE_ORIGIN = 'https://olgasirenko.com';
const PORTRAIT_URL = `${SITE_ORIGIN}/images/portrait-about.jpg`;

const SITE_TITLE = 'Olga Sirenko · Product Designer & Design Leader (Seattle, PNW)';
const SITE_DESCRIPTION =
  'Olga Sirenko is a Product Designer & Design Leader in the Seattle–Portland PNW area with 12+ years in enterprise SaaS, AI systems architecture, and DesignOps.';
const ADVISORY_TITLE = 'AI UX Advisory & 48-Hour Audit · Olga Sirenko (Seattle, PNW)';
const ADVISORY_DESCRIPTION =
  'Forensic 48-hour AI architecture audits and fractional product design advisory in Seattle, PNW & globally for Seed and Series-A SaaS teams.';
const WRITING_TITLE = 'Writing on AI Systems & Product Design · Olga Sirenko';
const WRITING_DESCRIPTION =
  'Essays by Seattle–Portland Product Design Leader Olga Sirenko on agentic UX, non-deterministic state design, dual-audience UI, and enterprise SaaS.';

function updateMeta(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function updateJsonLd(schema: Record<string, unknown>) {
  let script = document.getElementById('dynamic-seo-schema') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'dynamic-seo-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
}

function updatePageMetadata(
  title: string,
  description: string,
  ogType: 'website' | 'profile' | 'article',
  canonicalPath: string,
  schema: Record<string, unknown>
) {
  document.title = title;
  const pageUrl =
    typeof window !== 'undefined' && window.location.hostname === 'olgasirenko.com'
      ? `${window.location.origin}${window.location.pathname}${window.location.hash}`
      : `${SITE_ORIGIN}${canonicalPath}`;

  // Primary meta description
  updateMeta('name', 'description', description);
  updateCanonical(pageUrl);

  // OpenGraph social tags
  updateMeta('property', 'og:title', title);
  updateMeta('property', 'og:description', description);
  updateMeta('property', 'og:type', ogType);
  updateMeta('property', 'og:url', pageUrl);
  updateMeta('property', 'og:image', PORTRAIT_URL);

  // Twitter / X card tags
  updateMeta('name', 'twitter:title', title);
  updateMeta('name', 'twitter:description', description);
  updateMeta('name', 'twitter:image', PORTRAIT_URL);

  // Dynamic Schema.org JSON-LD for search engines and AI agents
  updateJsonLd(schema);
}

const PERSON_REF = {
  '@id': `${SITE_ORIGIN}/#person`,
  '@type': 'Person',
  name: 'Olga Sirenko',
  url: `${SITE_ORIGIN}/`,
  email: 'mailto:hello@olgasirenko.com',
  jobTitle: 'Product Designer, Product Design Leader & AI Systems Architect',
  sameAs: ['https://www.linkedin.com/in/olga-sirenko-840b08176/']
};

const ROUTE_RANK: Record<Route['page'], number> = {
  about: 0,
  writing: 1,
  article: 1.5,
  advisory: 2
};

function normalizeRoute(route: Route): Route {
  if (route.page === 'article') {
    const found = articles.find(a => a.slug === route.slug);
    if (!found || !essays[found.slug]) return { page: 'writing' };
  }
  return route;
}

function getRouteKey(route: Route): string {
  return route.page === 'article' ? `article:${route.slug}` : route.page;
}

function getTransitionDirection(from: Route, to: Route): 1 | -1 {
  if (from.page === 'article' && to.page === 'article') {
    const fromIdx = articles.findIndex(a => a.slug === from.slug);
    const toIdx = articles.findIndex(a => a.slug === to.slug);
    if (fromIdx !== -1 && toIdx !== -1) {
      if ((fromIdx + 1) % articles.length === toIdx) return 1;
      return toIdx > fromIdx ? 1 : -1;
    }
    return 1;
  }
  return ROUTE_RANK[to.page] >= ROUTE_RANK[from.page] ? 1 : -1;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  );
}

export function App() {
  const { theme, toggleTheme } = useTheme();
  const route = useRoute();

  const target = normalizeRoute(route);
  const targetKey = getRouteKey(target);

  const [displayed, setDisplayed] = useState<Route>(target);
  const [transitionTick, setTransitionTick] = useState(0);
  const displayedKey = getRouteKey(displayed);

  const stageRef = useRef<HTMLDivElement>(null);
  const activeAnimRef = useRef<Animation | null>(null);
  const pendingDirRef = useRef<1 | -1 | null>(null);
  const targetRef = useRef<Route>(target);
  const displayedRef = useRef<Route>(displayed);
  targetRef.current = target;
  displayedRef.current = displayed;

  useEffect(() => {
    if (targetKey === displayedKey) return;

    const nextRoute = targetRef.current;
    const prevRoute = displayedRef.current;
    const el = stageRef.current;
    if (!el || !el.animate || prefersReducedMotion()) {
      activeAnimRef.current?.cancel();
      activeAnimRef.current = null;
      pendingDirRef.current = null;
      window.scrollTo({ top: 0, behavior: 'auto' });
      setDisplayed(nextRoute);
      return;
    }

    let cancelled = false;
    const dir = getTransitionDirection(prevRoute, nextRoute);
    const exitX = dir === 1 ? -32 : 32;

    activeAnimRef.current?.cancel();
    setTransitionTick(t => t + 1);

    const outAnim = el.animate(
      [
        { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        { opacity: 0, transform: `translate3d(${exitX}px, 0, 0)` }
      ],
      {
        duration: 180,
        easing: 'cubic-bezier(0.4, 0, 1, 1)',
        fill: 'forwards'
      }
    );
    activeAnimRef.current = outAnim;

    outAnim.onfinish = () => {
      if (cancelled) return;
      pendingDirRef.current = dir;
      window.scrollTo({ top: 0, behavior: 'auto' });
      setDisplayed(nextRoute);
    };

    return () => {
      cancelled = true;
      outAnim.cancel();
    };
  }, [targetKey, displayedKey]);

  useLayoutEffect(() => {
    const dir = pendingDirRef.current;
    const el = stageRef.current;
    if (dir === null || !el || !el.animate) return;
    pendingDirRef.current = null;

    activeAnimRef.current?.cancel();
    const enterX = dir === 1 ? 44 : -44;
    const inAnim = el.animate(
      [
        { opacity: 0, transform: `translate3d(${enterX}px, 0, 0)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ],
      {
        duration: 420,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    );
    activeAnimRef.current = inAnim;
  }, [displayedKey]);

  const targetArticle = target.page === 'article' ? articles.find(a => a.slug === target.slug) : undefined;
  const displayedArticle = displayed.page === 'article' ? articles.find(a => a.slug === displayed.slug) : undefined;
  const displayedEssay = displayedArticle && essays[displayedArticle.slug];
  const page = displayed.page;

  useEffect(() => {
    if (target.page === 'about') {
      updatePageMetadata(SITE_TITLE, SITE_DESCRIPTION, 'profile', '/', {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: `${SITE_ORIGIN}/`,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        mainEntity: { '@id': `${SITE_ORIGIN}/#person` }
      });
    } else if (target.page === 'advisory') {
      updatePageMetadata(ADVISORY_TITLE, ADVISORY_DESCRIPTION, 'website', '/#/advisory', {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            name: 'Olga Sirenko · AI Product Design & Architecture Advisory',
            url: `${SITE_ORIGIN}/#/advisory`,
            description: ADVISORY_DESCRIPTION,
            provider: PERSON_REF,
            areaServed: [
              { '@type': 'Place', name: 'Seattle, WA' },
              { '@type': 'Place', name: 'Portland, OR' },
              { '@type': 'Place', name: 'Pacific Northwest' },
              { '@type': 'Country', name: 'United States' }
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Advisory Services',
              itemListElement: TRACKS.map((track) => ({
                '@type': 'Offer',
                name: track.title,
                description: `${track.sub}. ${track.points.join('; ')}`,
                ...(track.action === 'audit' ? { price: '1500', priceCurrency: 'USD' } : {})
              }))
            }
          },
          {
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          }
        ]
      });
    } else if (target.page === 'writing') {
      updatePageMetadata(WRITING_TITLE, WRITING_DESCRIPTION, 'website', '/#/writing', {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: WRITING_TITLE,
        description: WRITING_DESCRIPTION,
        url: `${SITE_ORIGIN}/#/writing`,
        author: PERSON_REF,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: articles.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            url: `${SITE_ORIGIN}/#/writing/${encodeURIComponent(item.slug)}`,
            name: item.title,
            description: item.dek
          }))
        }
      });
    } else if (target.page === 'article' && targetArticle) {
      const articleTitle = `${targetArticle.title} · Olga Sirenko`;
      const articlePath = `/#/writing/${encodeURIComponent(targetArticle.slug)}`;
      updatePageMetadata(articleTitle, targetArticle.dek, 'article', articlePath, {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: targetArticle.title,
        description: targetArticle.dek,
        keywords: targetArticle.tags.join(', '),
        url: `${SITE_ORIGIN}${articlePath}`,
        mainEntityOfPage: `${SITE_ORIGIN}${articlePath}`,
        image: PORTRAIT_URL,
        author: PERSON_REF,
        publisher: PERSON_REF
      });
    }
  }, [target.page, targetArticle]);

  return (
    <div className="glow-wrap">
      {transitionTick > 0 && (
        <div key={transitionTick} className="page-transition-bar" aria-hidden="true" />
      )}
      <div className="glow-wrap__bg" aria-hidden="true" />

      <Header
        name={portfolioData.name}
        monogram={portfolioData.monogram}
        theme={theme}
        onToggleTheme={toggleTheme}
        route={target}
      />

      <main id="main">
        <div ref={stageRef} className="page-stage">
          {page === 'about' && <AboutPage />}
          {page === 'advisory' && <AdvisoryPage />}
          {page === 'writing' && <WritingPage />}
          {page === 'article' && displayedArticle && displayedEssay && (
            <ArticlePage article={displayedArticle} essay={displayedEssay} />
          )}
        </div>
      </main>

      <Footer
        monogram={portfolioData.monogram}
        copyright={portfolioData.footer.copyright}
        location={portfolioData.footer.location}
        email={portfolioData.contact.email}
        linkedinUrl={portfolioData.contact.linkedinUrl}
      />
    </div>
  );
}

export default App;
