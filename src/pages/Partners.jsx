import PageHeader from '../components/PageHeader';
import { partnerLogos, achievements, broadcasters, company } from '../data/content';

export default function Partners() {
  return (
    <>
      <PageHeader
        label="Clients & Partners"
        title="Our Partners"
        description={`${company.showcaseBrand} is trusted by global sports bodies, cricket boards, broadcasters, and federations across South Asia and beyond.`}
        breadcrumb="Partners"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="text-center mb-8 sm:mb-12">
            <p className="section-label mb-2">Broadcast Network</p>
            <h2 className="section-title text-2xl sm:text-3xl">Media & Broadcast Partners</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
            {broadcasters.map((b) => (
              <span
                key={b}
                className="px-3 sm:px-5 py-1.5 sm:py-2 bg-brand-gray-bg border border-brand-gray-light font-porsche tracking-wide sm:tracking-porsche uppercase text-[10px] sm:text-xs text-brand-black"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 mb-10 sm:mb-16">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center p-3 sm:p-4 card aspect-square hover:border-brand-red/30"
              >
                <img
                  src={`/assets/partners/${logo}`}
                  alt="Partner"
                  className="max-h-8 sm:max-h-10 max-w-full object-contain hover:opacity-100 transition-opacity hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container">
          <div className="text-center mb-8 sm:mb-12">
            <p className="section-label mb-2">Credentials</p>
            <h2 className="section-title text-2xl sm:text-3xl">Key Achievements & Rights</h2>
          </div>

          <div className="card card-pad lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3 p-2 sm:p-3">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-brand-black text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-t border-brand-gray-light">
        <div className="page-container max-w-4xl text-center">
          <h2 className="section-title text-xl sm:text-2xl mb-3 sm:mb-4">
            Become a Partner
          </h2>
          <p className="text-brand-gray text-sm sm:text-base">
            We collaborate with cricket boards, broadcasters, sponsors, and sports federations to
            deliver world-class sporting experiences and commercial returns.
          </p>
        </div>
      </section>
    </>
  );
}
