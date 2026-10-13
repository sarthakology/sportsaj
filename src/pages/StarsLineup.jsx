import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

export default function StarsLineup() {
  return (
    <>
      <SEO
        title="Stars Lineup"
        description="The Stars Lineup for the El Clásico India Tour is coming soon."
        breadcrumb="Stars Lineup"
      />
      <PageHeader title="Stars Lineup" breadcrumb="Stars Lineup" />
      <section className="section-py bg-white min-h-[50vh] flex items-center">
        <div className="page-container text-center">
          <Reveal>
            <p className="font-sans font-light text-brand-black uppercase tracking-[0.22em] text-3xl sm:text-5xl lg:text-6xl">
              Coming Soon
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
