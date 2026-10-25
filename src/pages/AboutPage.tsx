import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Hero } from '../components/Hero';
import { Principles } from '../components/Principles';
import { Career } from '../components/Career';
import { Contact } from '../components/Contact';

export const AboutPage: React.FC = () => (
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
);
