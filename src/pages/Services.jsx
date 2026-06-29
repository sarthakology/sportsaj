import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ServiceIcon from '../components/ServiceIcon';
import { capabilities, sportsVerticals, company } from '../data/content';

export default function Services() {
  return (
    <>
      <PageHeader
        label="What We Do"
        title="Our Services"
        description={`${company.showcaseBrand} delivers end-to-end sports media, league development, production, and digital innovation — from concept to commercial success.`}
        breadcrumb="Services"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-start">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="card card-pad lg:p-10 hover:border-brand-red/40 transition-all"
              >
                <div className="flex flex-col xs:flex-row items-start gap-4 sm:gap-5">
                  <ServiceIcon name={cap.icon} className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-base sm:text-lg mb-2 sm:mb-3 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed mb-3 sm:mb-4">{cap.description}</p>
                    <p className="text-brand-black/80 text-sm leading-relaxed border-l-2 border-brand-red pl-3 sm:pl-4">
                      {cap.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container">
          <div className="text-center mb-8 sm:mb-14">
            <p className="section-label mb-2">Sports We Cover</p>
            <h2 className="section-title">Verticals & Events</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sportsVerticals.map((v) => (
              <div key={v.name} className="card card-pad sm:p-8 border-t-4 border-t-brand-red">
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-red uppercase text-lg sm:text-xl mb-4 sm:mb-5">
                  {v.name}
                </h3>
                <ul className="space-y-2">
                  {v.events.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-brand-black text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0 mt-1.5" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-red">
        <div className="page-container max-w-4xl text-center">
          <h2 className="font-porsche tracking-wide sm:tracking-porsche text-xl sm:text-2xl md:text-3xl text-white uppercase mb-3 sm:mb-4">
            Need a Custom Sports Solution?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            We structure media rights, develop leagues, and deliver digital experiences tailored to your market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto px-8 py-3 bg-white text-brand-red font-porsche tracking-porsche uppercase text-sm hover:bg-brand-gray-bg transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
