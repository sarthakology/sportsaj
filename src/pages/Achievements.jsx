import PageHeader from '../components/PageHeader';
import { milestones, nplDetails, company } from '../data/content';

export default function Achievements() {
  return (
    <>
      <PageHeader
        label="How It Started"
        title="Achievements"
        description={`The ${company.showcaseBrand} track record — pioneering sports media rights, digital innovation, and league development across cricket, football, and tennis.`}
        breadcrumb="Achievements"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="space-y-10 sm:space-y-16">
            {milestones.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col lg:flex-row gap-6 sm:gap-10 items-start lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {item.image ? (
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden border-l-4 border-brand-red group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 bg-brand-red text-white font-porsche tracking-porsche uppercase text-[10px] sm:text-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full lg:w-1/3 flex-shrink-0">
                    <div className="w-full h-36 sm:h-48 bg-brand-gray-bg border-l-4 border-brand-red flex items-center justify-center">
                      <span className="font-porsche tracking-porsche text-4xl sm:text-6xl text-brand-red/20 uppercase">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className={`w-full min-w-0 ${item.image ? 'lg:w-1/2' : 'lg:w-2/3'}`}>
                  <span className="font-porsche tracking-porsche text-brand-red text-3xl sm:text-4xl">{item.year}</span>
                  <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-charcoal uppercase text-xl sm:text-2xl lg:text-3xl mt-2 mb-3 sm:mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-charcoal">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="on-dark-label mb-3">Path Breaking Initiative</p>
              <h2 className="on-dark-heading text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                Nepal Premier League
              </h2>
              <p className="on-dark-body mb-6 sm:mb-8">
                The Cricket Association of Nepal sold the Nepal Premier League rights to {company.showcaseBrand}
                for a total of <span className="on-dark-highlight">Rs 420 million</span> for
                10 years — a landmark deal for Nepalese cricket.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {nplDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-red flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-brand-gray-light text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-dark border border-white/15 card-pad lg:p-10">
              <h3 className="font-porsche tracking-wide sm:tracking-porsche text-white uppercase mb-5 sm:mb-6 pl-3 border-l-2 border-brand-red-light text-sm sm:text-base">
                Deal Structure
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  ['Duration', '10 Years'],
                  ['Deal Value', 'Rs 420 Million'],
                  ['Role', 'Strategic Partner'],
                  ['Grass Root Program', 'Junior Cricket Championship'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-4 p-3 sm:p-4 bg-brand-charcoal/50 border border-white/10"
                  >
                    <span className="text-white/60 text-xs sm:text-sm">{label}</span>
                    <span className={`font-semibold text-xs sm:text-sm ${label === 'Deal Value' ? 'on-dark-highlight w-fit' : 'text-white'}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
