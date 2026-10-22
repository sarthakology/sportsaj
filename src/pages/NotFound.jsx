import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="This page does not exist on the El Clasico India Tour website."
        breadcrumb="Page not found"
        noIndex
      />
      <PageHeader title="Page not found" breadcrumb="Page not found" />
      <section className="section-py bg-white min-h-[50vh] flex items-center">
        <div className="page-container text-center">
          <Reveal>
            <p className="font-sans font-extralight text-brand-black uppercase tracking-[0.18em] text-6xl sm:text-8xl leading-none">
              404
            </p>
            <p className="mt-6 font-sans font-light text-brand-black uppercase tracking-[0.22em] text-xl sm:text-3xl">
              This page could not be found
            </p>
            <div className="mt-8 flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
              <Link to="/" className="btn-primary">Home</Link>
              <Link to="/buy-tickets" className="btn-outline">Buy Tickets</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
