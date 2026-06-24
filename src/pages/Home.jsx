import { Link } from 'react-router-dom';
import { company, stats, milestones, capabilities, sportsVerticals } from '../data/content';

export default function Home() {
  const featured = milestones.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/sports-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-charcoal/90 to-brand-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

        <div className="relative page-container py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl animate-slide-up">
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 sm:h-16 lg:h-20 w-auto max-w-[200px] sm:max-w-none mb-6 sm:mb-8"
            />

            <p className="on-dark-label mb-3 sm:mb-4">
              Showcasing {company.showcaseBrand}
            </p>

            <h1 className="font-porsche tracking-wide sm:tracking-porsche text-[1.75rem] leading-[1.15] xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white uppercase mb-4 sm:mb-6">
              {company.tagline.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-white underline decoration-brand-red decoration-[3px] sm:decoration-4 underline-offset-4 sm:underline-offset-8">
                at a Global Arena
              </span>
            </h1>

            <p className="text-brand-gray-light text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              {company.description}
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <Link to="/about" className="btn-primary">
                Our Story
                <svg className="ml-2 w-5 h-5 hidden xs:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/achievements" className="btn-outline-light">
                Achievements
              </Link>
            </div>
          </div>

          <div className="mt-10 sm:mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="on-dark-stat text-left">
                <div className="on-dark-stat-value">{stat.value}</div>
                <div className="on-dark-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-white border-b border-brand-gray-light">
        <div className="page-container">
          <div className="flex flex-col gap-5 sm:gap-6 card card-pad border-l-4 border-l-brand-red">
            <div>
              <p className="section-label mb-1">{company.name}</p>
              <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-charcoal uppercase text-lg sm:text-xl leading-snug">
                Official Showcase of {company.showcaseBrand}
              </h2>
              <p className="text-brand-gray text-sm mt-2 max-w-xl">{company.showcaseIntro}</p>
            </div>
            <Link to="/about" className="btn-primary !text-xs sm:!w-auto shrink-0">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sportsVerticals.map((v) => (
              <div key={v.name} className="card card-pad border-l-4 border-l-brand-red">
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-charcoal uppercase text-base sm:text-lg mb-2 sm:mb-3">
                  {v.name}
                </h3>
                <ul className="space-y-1">
                  {v.events.map((e) => (
                    <li key={e} className="text-brand-gray text-sm">{e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-lg bg-brand-gray-bg">
        <div className="page-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
            <div>
              <p className="section-label mb-2">Highlights</p>
              <h2 className="section-title">Path Breaking Achievements</h2>
            </div>
            <Link to="/achievements" className="btn-outline !py-2.5 !px-6 !text-xs shrink-0">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featured.map((item) => (
              <div key={item.title} className="card overflow-hidden group">
                {item.image && (
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="card-pad">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="font-porsche tracking-porsche text-brand-red text-lg sm:text-xl">{item.year}</span>
                    <span className="px-2 py-0.5 bg-brand-red/10 text-brand-red text-[10px] sm:text-xs font-porsche tracking-porsche uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-charcoal uppercase text-base sm:text-lg mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-lg bg-brand-charcoal">
        <div className="page-container">
          <div className="text-center mb-8 sm:mb-14">
            <p className="on-dark-label justify-center mb-3 sm:mb-4">What We Do</p>
            <h2 className="on-dark-heading text-2xl sm:text-3xl md:text-4xl">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {capabilities.slice(0, 6).map((cap) => (
              <div key={cap.title} className="on-dark-card group">
                <div className="text-2xl mb-2 sm:mb-3">{cap.icon}</div>
                <h3 className="on-dark-card-title group-hover:underline group-hover:decoration-brand-red-light group-hover:underline-offset-4 transition-all">
                  {cap.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services" className="btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative page-container text-center">
          <h2 className="font-porsche tracking-wide sm:tracking-porsche text-2xl sm:text-3xl md:text-4xl text-white uppercase mb-3 sm:mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            From media rights to league development — let&apos;s build the next big sports property together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto px-8 py-3.5 bg-white text-brand-red font-porsche tracking-porsche uppercase text-sm hover:bg-brand-gray-light transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
