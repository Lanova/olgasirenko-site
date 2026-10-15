import { useTheme } from './hooks/useTheme';
import { portfolioData } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Principles } from './components/Principles';
import { Career } from './components/Career';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header
        name={portfolioData.name}
        monogram={portfolioData.monogram}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main">
        <div className="glow-wrap">
          <div className="glow-wrap__bg" aria-hidden="true" />

          <section id="about" className="container about" aria-label="About">
            <Hero
              tagline={portfolioData.tagline}
              headline={portfolioData.heroHeadline}
              lede={portfolioData.lede}
              portrait={portfolioData.portrait}
            />

            <Principles principles={portfolioData.principles} />

            <Career entries={portfolioData.career} />
          </section>

          <Contact
            title={portfolioData.contact.title}
            subtitle={portfolioData.contact.subtitle}
            email={portfolioData.contact.email}
            emailSubject={portfolioData.contact.emailSubject}
            linkedinUrl={portfolioData.contact.linkedinUrl}
          />
        </div>
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
