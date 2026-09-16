import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const pageDescription =
  'Jatin Ahluwalia and Abhishek Saklani featured on the cover of Forbes India — FILA winners and pioneers reshaping India\'s football ecosystem.';

const cover = {
  image: '/assets/forbes-billion-dollar-kick-cover.jpg',
  issue: 'April 3, 2026',
  headline: 'The Billion Dollar Kick!',
  subheadline:
    'How India\'s dynamic duo has chosen the challenging pathway to build a sustainable future for football in India.',
  tag: 'Elevating India\'s Football Ecosystem',
};

const highlights = [
  {
    value: '15+',
    label: 'Years in Sports Media',
    description: 'From IPL mobile rights in 2010 to global sports properties across cricket, football, and tennis.',
  },
  {
    value: '375M+',
    label: 'TV Homes Reached',
    description: 'Sub-continental IPL broadcast rights across Pakistan, Bangladesh, and Sri Lanka.',
  },
  {
    value: '6',
    label: 'Nations — FIFA 2014',
    description: 'First-time FIFA World Cup broadcast experience for over half a billion fans in South Asia.',
  },
  {
    value: '28M',
    label: 'Sachin FB Followers',
    description: 'Built the world\'s largest online cricket community from scratch for Sachin Tendulkar.',
  },
];

const storyPoints = [
  {
    title: 'Pioneers of Sports Monetisation',
    description:
      'After leaving Accenture, Jatin Ahluwalia began his entrepreneurial journey with the acquisition of Global Mobile Rights for IPL in 2010 — one of the first to bring live cricket to mobile phones in India. Abhishek Saklani joined to build a pure-play sports venture focused on media rights, digital fan engagement, and league development.',
  },
  {
    title: 'Building Beyond Conventional Sports',
    description:
      'Seven3Sports went beyond cricket — acquiring FIFA World Cup broadcast rights for six South Asian nations, Bundesliga and French Open digital rights, and pioneering mobile VOD innovations with Airtel. The Forbes India cover story recognises their contrarian approach to growing India\'s sports ecosystem.',
  },
  {
    title: 'Global Footprint, Local Impact',
    description:
      'From Sports Networks UK and a Barcelona office to tie-ups with Catalonia\'s cricket board and MICFOOTBALL youth tournaments, the duo has expanded Indian sports influence globally while investing in grassroots development at home.',
  },
  {
    title: 'El Clásico Legends India Tour',
    description:
      'Today, through Sports AJ, Jatin Ahluwalia and Abhishek Saklani bring Real Madrid Leyendas and Barça Legends to Indian stadiums — the El Clásico Legends India Tour in Ahemdabad and Kolkata, one of the most ambitious exhibition football events India has ever hosted.',
  },
];

export default function ForbesIndia() {
  return (
    <>
      <SEO
        title="Forbes India Feature"
        description="Jatin Ahluwalia and Abhishek Saklani on the cover of Forbes India — FILA winners building India's football future."
        breadcrumb="Forbes India"
      />
      <PageHeader
        label="In The Media"
        title="Forbes India"
        description={pageDescription}
        breadcrumb="Forbes India"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="max-w-sm mx-auto">
            <div className="card overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden bg-brand-gray-bg">
                <img
                  src={cover.image}
                  alt={`Forbes India — ${cover.headline}`}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="card-pad border-t-4 border-t-brand-red">
                <p className="section-label mb-2">{cover.tag}</p>
                <p className="text-brand-gray text-xs mb-2">{cover.issue}</p>
                <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-base sm:text-lg mb-2 leading-snug">
                  {cover.headline}
                </h2>
                <p className="text-brand-gray text-sm leading-relaxed">{cover.subheadline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container max-w-4xl">
          <p className="section-label mb-3">The Story</p>
          <h2 className="section-title text-xl sm:text-2xl mb-6">
            A New Generation of Sports Entrepreneurs
          </h2>
          <p className="text-brand-gray text-sm sm:text-base leading-relaxed mb-8">
            Abhishek Saklani and Jatin Ahluwalia represent a new generation of sports entrepreneurs,
            driven by vision, credibility, and a commitment to reshape the sporting landscape in India.
            Featured in the Forbes India Leadership Awards 2026 special edition, they are recognised for
            doing what they believe in — even when it goes against conventional wisdom.
          </p>

          <div className="space-y-6">
            {storyPoints.map((point) => (
              <div key={point.title} className="card card-pad border-l-4 border-l-brand-red">
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm sm:text-base mb-2">
                  {point.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="text-center mb-8 sm:mb-10">
            <p className="section-label justify-center mb-2">By The Numbers</p>
            <h2 className="section-title">The Seven3Sports Legacy</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="card card-pad text-center border-t-4 border-t-brand-red">
                <div className="font-porsche tracking-porsche text-2xl sm:text-3xl text-brand-red mb-1">
                  {item.value}
                </div>
                <div className="font-porsche tracking-wide text-brand-black uppercase text-xs sm:text-sm mb-2">
                  {item.label}
                </div>
                <p className="text-brand-gray text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg border-t border-brand-gray-light">
        <div className="page-container text-center">
          <p className="text-brand-gray mb-5 sm:mb-6 text-sm sm:text-base max-w-xl mx-auto">
            Explore the full Seven3Sports journey — from IPL and FIFA World Cup rights to El Clásico Legends in India.
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/our-journey" className="btn-primary">Our Journey</Link>
            <Link to="/" className="btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
