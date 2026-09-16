import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const showcaseIntro =
  'Explore the Seven3Sports portfolio — from IPL and FIFA World Cup broadcast rights to Bundesliga digital streaming, and fan communities built for the world\'s greatest sports stars.';

const broadcasters = [
  'Star TV', 'Sony MSM', 'ESPN', 'Supersports', 'Geo TV',
  'Channel 9', 'Sky Sports', 'NDTV', 'UTV',
];

const values = [
  { title: 'Innovation', description: 'Pioneering first-of-its-kind digital and broadcast experiences across cricket, football, and tennis.' },
  { title: 'Integrity', description: 'Trusted partnerships with cricket boards, FIFA, broadcasters, and global sports bodies.' },
  { title: 'Excellence', description: 'Broadcast-level production quality and strategic league development at every scale.' },
  { title: 'Global Reach', description: 'Connecting South Asian audiences to the world\'s biggest sporting events and properties.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sports AJ and Seven3Sports — sports media professionals across cricket, football, and tennis."
        breadcrumb="About"
      />
      <PageHeader
        label="About Sports AJ"
        title="Our Story"
        description={showcaseIntro}
        breadcrumb="About"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="section-label mb-3">Showcasing Seven3Sports</p>
              <h2 className="section-title mb-4 sm:mb-6">Who We Are</h2>
              <p className="text-brand-gray leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Sports AJ is the official showcase platform for{' '}
                <span className="text-brand-black font-semibold">Seven3Sports</span> — run by
                a group of avid entrepreneurs and sports industry professionals with deep expertise across
                the global sports media landscape.
              </p>
              <p className="text-brand-gray leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Seven3Sports possesses in-house expertise for large sports program management,
                media rights management, sports production and league development — serving prestigious
                cricket boards like BCCI and New Zealand, and maintaining working relations with top
                broadcasters worldwide.
              </p>

              <div className="space-y-3">
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm">
                  Broadcast Partners
                </h3>
                <div className="flex flex-wrap gap-2">
                  {broadcasters.map((b) => (
                    <span
                      key={b}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-brand-gray-bg border border-brand-gray-light text-brand-black text-xs sm:text-sm"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-2 sm:-inset-4 bg-brand-red/20 blur-2xl" />
              <div className="relative overflow-hidden border-l-4 border-brand-red">
                <img
                  src="/assets/hero-bg.png"
                  alt="Seven3Sports"
                  className="w-full h-auto object-cover max-h-64 sm:max-h-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container">
          <div className="text-center mb-8 sm:mb-14">
            <p className="section-label mb-2">Seven3Sports Values</p>
            <h2 className="section-title">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v) => (
              <div key={v.title} className="card card-pad text-center hover:border-brand-red/30">
                <div className="w-12 h-1 bg-brand-red mx-auto mb-4 sm:mb-6" />
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase mb-2 sm:mb-3 text-sm sm:text-base">
                  {v.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container max-w-4xl">
          <div className="card card-pad lg:p-12 border-t-4 border-t-brand-red">
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-2 text-center">Sports AJ</h2>
            <p className="text-brand-red font-porsche tracking-porsche uppercase text-xs text-center mb-6 sm:mb-8">
              Legal Name: Sports AJ
            </p>
            <p className="text-brand-gray leading-relaxed text-center mb-6 sm:mb-8 text-sm sm:text-base">
              Corporate office at Unit No. 001, BPTP, Park Centra, Jal Vayu Vihar, Sector 31, Gurugram, Haryana 122001,
              INDIA. Sports AJ serves as the showcase website for Seven3Sports.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-gray-bg border-t border-brand-gray-light">
        <div className="page-container text-center">
          <p className="text-brand-gray mb-5 sm:mb-6 text-sm sm:text-base">Explore the Seven3Sports portfolio</p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4 max-w-sm xs:max-w-none mx-auto">
            <Link to="/team" className="btn-primary">Meet The Team</Link>
            <Link to="/our-journey" className="btn-outline">Our Journey</Link>
          </div>
        </div>
      </section>
    </>
  );
}
