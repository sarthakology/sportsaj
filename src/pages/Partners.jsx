import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const broadcasters = [
  'Star TV', 'Sony MSM', 'ESPN', 'Supersports', 'Geo TV',
  'Channel 9', 'Sky Sports', 'NDTV', 'UTV',
];

const partnerLogos = [
  'image22.png', 'image23.png', 'image24.png', 'image25.png', 'image26.png',
  'image27.png', 'image28.png', 'image29.png', 'image30.png', 'image31.png',
  'image32.png', 'image33.png', 'image34.png', 'image35.png', 'image36.png',
  'image37.png', 'image38.png', 'image39.png', 'image40.png', 'image41.png',
  'image42.png', 'image46.png', 'image48.png', 'image45.jpeg',
];

const achievements = [
  'TV broadcast Rights (2013-2018) across Pakistan, Sri Lanka and Bangladesh',
  'Mobile Rights 2010-2014 & IPL Video on Demand for India Region 2013 & 2014',
  'Proud media rights holders for FIFA World Cup 2014 across six nations',
  'Launched Sachin Tendulkar Official Facebook Page to 28 MILLION followers',
  'Digital Rights holder for US Open 2013 with USTA & Accenture partnership',
  'Partner for French Open digital and TV broadcast in Indian sub-continent',
  'Exclusive Partner for Bundesliga in Indian Territory (2013-2015)',
  'Delivered Bangladesh Premier League T20 with highest prize money purse',
  'Structured Sri Lankan Cricket League franchisee & sponsorship packages',
];

export default function Partners() {
  return (
    <>
      <SEO
        title="Partners"
        description="Seven3Sports partners include BCCI, FIFA, Star TV, Sony MSM, ESPN, and leading cricket boards and broadcasters."
        breadcrumb="Partners"
      />
      <PageHeader
        label="Clients & Partners"
        title="Our Partners"
        description="Seven3Sports is trusted by global sports bodies, cricket boards, broadcasters, and federations across South Asia and beyond."
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
            {partnerLogos.map((logo, index) => (
              <div
                key={logo}
                className="flex items-center justify-center p-3 sm:p-4 card aspect-square hover:border-brand-red/30"
              >
                <img
                  src={`/assets/partners/${logo}`}
                  alt={`Seven3Sports partner logo ${index + 1}`}
                  className="max-h-8 sm:max-h-10 max-w-full object-contain"
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
          <h2 className="section-title text-xl sm:text-2xl mb-3 sm:mb-4">Become a Partner</h2>
          <p className="text-brand-gray text-sm sm:text-base">
            We collaborate with cricket boards, broadcasters, sponsors, and sports federations to
            deliver world-class sporting experiences and commercial returns.
          </p>
        </div>
      </section>
    </>
  );
}
