import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import FounderCard from '../components/FounderCard';
import { aboutCompany, founders, site, brandNameYear } from '../content';

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description={`${brandNameYear()} is presented by ${site.legalName}.`}
        breadcrumb="About"
      />
      <PageHeader
        label={site.legalName}
        title="About"
        description={aboutCompany.separation}
        breadcrumb="About"
      />

      <section className="section-py bg-white">
        <div className="page-container max-w-4xl">
          <Reveal>
            <p className="section-label mb-3">The organiser</p>
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-6">
              {aboutCompany.heading}
            </h2>
            <p className="prose-copy text-base sm:text-lg mb-4">{aboutCompany.body}</p>
            <p className="prose-copy text-base sm:text-lg">{founders.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container">
          <Reveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <p className="section-label mb-3">The founders</p>
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-4">
              {founders.heading}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {founders.people.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 120}>
                <FounderCard founder={founder} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link to="/our-journey" className="btn-outline">Our Journey</Link>
          <Link to="/buy-tickets" className="btn-primary">Buy Tickets</Link>
        </div>
      </section>
    </>
  );
}
