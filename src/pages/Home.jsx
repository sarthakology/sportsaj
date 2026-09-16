import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const tagline = 'El Clásico Legends';
const description =
  'El Clásico Legends matches are happening at a larger scale than ever done in India. Sports AJ is bringing Barça Legends and Real Madrid Leyendas to Indian stadiums — register your interest for tickets today.';
const statsHeading = 'El Clásico India Tour Matches';

const tourMatches = [
  {
    path: '/ahemdabad',
    image: '/assets/gujarat-el-clasico.png',
    city: 'Ahemdabad',
    venue: 'Eka Areana',
    date: '22 November 2026',
    matchTitle: 'Gujarat El Clásico',
    teams: 'Barça Legends vs Real Madrid Leyendas',
    tagline: 'Football\'s greatest rivalry — live in Gujarat',
  },
  {
    path: '/kolkata',
    image: '/assets/gujarat-el-clasico.png',
    city: 'Kolkata',
    venue: 'Salt Lake Stadium',
    date: '25 November 2026',
    matchTitle: 'Kolkata El Clásico',
    teams: 'Barça Legends vs Real Madrid Leyendas',
    tagline: 'El Clásico comes to the City of Joy',
  },
];

const highlights = [
  {
    title: 'Legendary Players',
    description: 'Watch former Galácticos and club icons take the pitch in an unforgettable exhibition match.',
  },
  {
    title: 'Two Indian Cities',
    description: 'Ahemdabad and Kolkata — two massive nights of El Clásico football across India.',
  },
  {
    title: 'Tickets Opening Soon',
    description: 'Register your interest now and be the first to know when tickets go on sale.',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Sports AJ | El Clásico Legends India Tour"
        description="Buy tickets for El Clásico Legends in Ahemdabad and Kolkata. Barça Legends vs Real Madrid Leyendas — India's biggest football exhibition."
      />
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-3/5 bg-cover bg-center opacity-30 lg:opacity-40"
          style={{ backgroundImage: "url('/assets/sports-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 lg:to-transparent" />

        <div className="relative page-container py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-porsche tracking-wide sm:tracking-porsche text-[1.75rem] leading-[1.15] xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-brand-black uppercase mb-4 sm:mb-6">
              {tagline.split(' ').slice(0, 3).join(' ')}{' '}
              <span className="text-brand-black underline decoration-brand-red decoration-[3px] sm:decoration-4 underline-offset-4 sm:underline-offset-8">
                Tour of India
              </span>
            </h1>

            <p className="text-brand-gray text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <Link to="/buy-now" className="btn-primary">Buy Now</Link>
              <Link to="/about" className="btn-outline">About Sports AJ</Link>
            </div>
          </div>

          <div className="mt-10 sm:mt-16 lg:mt-24">
            <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8">
              {statsHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
              {tourMatches.map((match, index) => (
                <Link
                  to={match.path}
                  key={`${match.city}-${index}`}
                  className="flex flex-col card card-pad border-l-4 border-l-brand-red hover:border-brand-red transition-colors group"
                >
                  <div className="flex items-center gap-4 sm:gap-5 mb-4">
                    <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-transparent">
                      <img
                        src={match.image}
                        alt={`${match.matchTitle} — ${match.city}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="section-label mb-1">{match.matchTitle}</p>
                      <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm sm:text-base leading-snug">
                        {match.teams}
                      </h3>
                    </div>
                  </div>

                  <p className="text-brand-gray text-sm mb-4">{match.tagline}</p>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-brand-gray-light">
                    <div>
                      <span className="text-brand-gray text-[10px] uppercase tracking-wide block mb-0.5">City</span>
                      <span className="font-porsche tracking-wide text-brand-black uppercase text-xs sm:text-sm">{match.city}</span>
                    </div>
                    <div>
                      <span className="text-brand-gray text-[10px] uppercase tracking-wide block mb-0.5">Venue</span>
                      <span className="font-porsche tracking-wide text-brand-black uppercase text-xs sm:text-sm leading-snug">{match.venue}</span>
                    </div>
                    <div>
                      <span className="text-brand-gray text-[10px] uppercase tracking-wide block mb-0.5">Date</span>
                      <span className="font-porsche tracking-wide text-brand-black uppercase text-xs sm:text-sm">{match.date}</span>
                    </div>
                  </div>

                  <p className="text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs mt-4 group-hover:underline">
                    View Match Details →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container">
          <div className="text-center mb-8 sm:mb-12">
            <p className="section-label justify-center mb-3">The Experience</p>
            <h2 className="section-title">Why El Clásico Legends?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {highlights.map((item) => (
              <div key={item.title} className="card card-pad border-t-4 border-t-brand-red text-center sm:text-left">
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm sm:text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative page-container text-center">
          <h2 className="font-porsche tracking-wide sm:tracking-porsche text-2xl sm:text-3xl md:text-4xl text-white uppercase mb-3 sm:mb-4">
            Don&apos;t Miss El Clásico in India
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Tickets are opening soon for Ahemdabad and Kolkata. Register your interest now to secure your spot.
          </p>
          <Link
            to="/buy-now"
            className="inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto px-8 py-3.5 bg-white text-brand-red font-porsche tracking-porsche uppercase text-sm hover:bg-brand-gray-bg transition-colors"
          >
            Register Interest
          </Link>
        </div>
      </section>
    </>
  );
}
