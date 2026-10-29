import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useRoute, Route } from './hooks/useRoute';
import { portfolioData } from './data/portfolioData';
import { articles, essays } from './data/essays';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { WritingPage } from './pages/WritingPage';
import { ArticlePage } from './pages/ArticlePage';

const SITE_TITLE = 'Olga Sirenko · Product Design Leader & AI Systems Architect';
const SITE_DESCRIPTION =
  'Product Design Leader and AI Systems Architect. Enterprise systems, AI workflow automation, and global team operations.';
const WRITING_TITLE = 'Writing · Olga Sirenko';
const WRITING_DESCRIPTION =
  'Notes on AI systems and business impact: exploring how thoughtful interface design simplifies complex workflows, reduces operational overhead, and drives user adoption.';

function updateMeta(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updatePageMetadata(title: string, description: string, ogType: 'website' | 'profile' | 'article') {
  document.title = title;

  // Primary meta description
  updateMeta('name', 'description', description);

  // OpenGraph social tags
  updateMeta('property', 'og:title', title);
  updateMeta('property', 'og:description', description);
  updateMeta('property', 'og:type', ogType);
  if (typeof window !== 'undefined') {
    updateMeta('property', 'og:url', window.location.href);
  }

  // Twitter / X card tags
  updateMeta('name', 'twitter:title', title);
  updateMeta('name', 'twitter:description', description);
}

export function App() {
  const { theme, toggleTheme } = useTheme();
  const route = useRoute();

  const article = route.page === 'article' ? articles.find(a => a.slug === route.slug) : undefined;
  const essay = article && essays[article.slug];
  // An unknown article slug falls back to the Writing list.
  const shown: Route = route.page === 'article' && !essay ? { page: 'writing' } : route;
  const page = shown.page;

  useEffect(() => {
    if (page === 'about') {
      updatePageMetadata(SITE_TITLE, SITE_DESCRIPTION, 'profile');
    } else if (page === 'writing') {
      updatePageMetadata(WRITING_TITLE, WRITING_DESCRIPTION, 'website');
    } else if (page === 'article' && article) {
      const articleTitle = `${article.title} · Olga Sirenko`;
      updatePageMetadata(articleTitle, article.dek, 'article');
    }
  }, [page, article]);

  return (
    <div className="glow-wrap">
      <div className="glow-wrap__bg" aria-hidden="true" />

      <Header
        name={portfolioData.name}
        monogram={portfolioData.monogram}
        theme={theme}
        onToggleTheme={toggleTheme}
        route={shown}
      />

      <main id="main">
        {page === 'about' && <AboutPage />}
        {page === 'writing' && <WritingPage />}
        {page === 'article' && article && essay && <ArticlePage article={article} essay={essay} />}
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
