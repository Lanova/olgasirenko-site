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

export function App() {
  const { theme, toggleTheme } = useTheme();
  const route = useRoute();

  const article = route.page === 'article' ? articles.find(a => a.slug === route.slug) : undefined;
  const essay = article && essays[article.slug];
  // An unknown article slug falls back to the Writing list.
  const shown: Route = route.page === 'article' && !essay ? { page: 'writing' } : route;
  const page = shown.page;

  useEffect(() => {
    if (page === 'about') document.title = SITE_TITLE;
    if (page === 'writing') document.title = 'Writing · Olga Sirenko';
  }, [page]);

  return (
    <>
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
      />
    </>
  );
}

export default App;
