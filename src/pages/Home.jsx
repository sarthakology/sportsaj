import { Link } from 'react-router-dom';
import FootballPitch from '../components/FootballPitch';
import EventIdentity from '../components/EventIdentity';
import Reveal from '../components/Reveal';
import {
  matches,
  confirmedEvents,
  visibleUpcoming,
  founders,
  aboutCompany,
  brandNameYear,
  seoCopy,
} from '../content';
import SEO, { sportsEventSchema } from '../components/SEO';

export default function Home() {
  const journeyItems = [
  { id: 'years', label: '25+ Years' },
  { id: 'fifa', label: 'FIFA' },
  { id: 'ipl', label: 'IPL Broadcast' },
  { id: 'bundesliga', label: 'Bundesliga Digital Experience' },
  { id: 'french-open', label: 'French Open' },
  { id: 'us-open', label: 'US Open' },
  { id: 'tour', label: 'EL CLÁSICO INDIA TOUR' },
];
  return (
    <>
      <SEO
        title={seoCopy.homeTitle}
        description={seoCopy.homeDescription}
        keywords={seoCopy.homeKeywords}
        imageAlt={seoCopy.homeTitle}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'EventSeries',
          name: brandNameYear(),
          description: seoCopy.homeDescription,
          url: 'https://sportsaj.com/',
          subEvent: confirmedEvents.map(sportsEventSchema),
        }}
      />
      <section className="relative bg-white pt-20 sm:pt-24 lg:pt-28">
        <div className="px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-10">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8">
            <div className="order-1 text-center lg:order-2">
              <Reveal>
                <h1>
                    <span className="block text-center">
                    <span className="block font-sans font-extralight text-brand-black uppercase tracking-[0.18em] sm:tracking-[0.22em] text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05]">
                      EL CLÁSICO
                    </span>
                    <span className="mt-5 sm:mt-6 block font-sans font-light text-brand-black uppercase tracking-[0.28em] sm:tracking-[0.36em] text-lg sm:text-2xl md:text-3xl lg:text-4xl">
                      India Tour 2026
                    </span>
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <Link to="/buy-tickets" className="btn-primary mt-6 sm:mt-8">
                  Buy Tickets
                </Link>
              </Reveal>
            </div>
            <div className="order-2 grid grid-cols-2 items-center gap-4 sm:gap-6 lg:contents">
              <Reveal className="flex justify-center lg:justify-start lg:order-1" from="left">
                <img
                  src="/assets/barca-legends.png"
                  alt="Barça Legends"
                  className="w-full max-w-[200px] sm:max-w-md lg:max-w-none h-28 sm:h-40 lg:h-56 xl:h-72 object-contain"
                />
              </Reveal>
              <Reveal className="flex justify-center lg:justify-end lg:order-3" from="right" delay={120}>
                <img
                  src="/assets/real-madrid-leyendas.png"
                  alt="Real Madrid Leyendas"
                  className="w-full max-w-[160px] sm:max-w-[260px] lg:max-w-none h-28 sm:h-40 lg:h-56 xl:h-72 object-contain"
                />
              </Reveal>
            </div>
          </div>
        </div>

        <FootballPitch left={matches.gujarat} right={matches.kolkata} />
      </section>

      <section className="section-py bg-white border-t border-brand-gray-light overflow-hidden">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5" from="left">
              <p className="section-label mb-4 text-sm sm:text-base tracking-[0.2em]">India Tour 2026</p>
              <h2 className="font-sans font-light text-brand-black text-2xl sm:text-3xl lg:text-4xl leading-snug">
                Welcome to the first ever El Clásico India Tour.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-7" from="right" delay={120}>
              <p className="text-brand-black/80 font-medium text-base sm:text-lg leading-relaxed">Sports AJ is proud to present the first ever El Clásico Legends Tour 2026, bringing legendary footballers from FC Barcelona Legends and Real Madrid Leyendas together to celebrate the world’s most iconic football rivalry in India. Featuring celebrated former players who have represented the two clubs at the highest level, the landmark tour will give Indian fans a rare opportunity to witness footballing legends renew the historic El Clásico rivalry on Indian soil. This landmark India tour will feature matches in Ahmedabad on November 22 and Kolkata on November 25, 2026 — one of the most ambitious exhibition football events India has ever hosted.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg overflow-hidden">
        <div className="page-container max-w-3xl">
          <Reveal className="text-center mb-8 sm:mb-12">
            <p className="section-label mb-3">Our Journey</p>
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-6">
              25+ years of sporting experiences
            </h2>
            <p className="prose-copy text-base sm:text-lg">Over 25 years of creating and delivering experiences around some of the world’s most recognised sporting properties.</p>
          </Reveal>
            <ol className="relative">
              <span
                aria-hidden="true"
                className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-brand-gray-light"
              />

              {journeyItems.map((item) => (
                <li key={item.id} className="relative">
                  <div className="flex flex-col items-center py-6 sm:py-8 text-center">
                    <span className="relative z-10 mb-3 h-2 w-2 rounded-full bg-brand-red" />

                    <p className="font-sans font-extralight text-brand-black uppercase tracking-[0.22em] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      {item.label}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          <Reveal className="text-center mt-8">
            <Link to="/our-journey" className="btn-outline">
              Our Journey
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-py bg-white overflow-hidden">
        <div className="page-container">
          <Reveal className="max-w-3xl mb-8 sm:mb-12 mx-auto text-center">
            <p className="section-label mb-3">About Us</p>
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-4">
              Leadership
            </h2>
            <p className="prose-copy text-base sm:text-lg">{founders.intro}</p>
          </Reveal>
          <Reveal className="max-w-sm mx-auto mb-8 sm:mb-10">
            <Link to="/news/forbes-india" className="group block">
              <img
                src={founders.image}
                alt={founders.imageAlt}
                className="w-full shadow-xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {founders.people.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 120} className="text-center">
                <p className="section-label mb-2">{founder.role}</p>
                <h3 className="font-sans font-light text-brand-black uppercase tracking-[0.16em] text-lg sm:text-xl">
                  {founder.name}
                </h3>
                {founder.bio ? <p className="prose-copy mt-3">{founder.bio}</p> : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg overflow-hidden">
        <div className="page-container">
          <Reveal className="max-w-3xl mb-8 sm:mb-12">
            <p className="section-label mb-3">Upcoming events</p>
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-4">
              Ahmedabad and Kolkata
            </h2>
            <p className="prose-copy text-base sm:text-lg">The first ever El Clásico India Tour will be Ahmedabad and Kolkata. Ahmedabad is the nerve centre of India's pursuit of global sporting excellence. Kolkata, as we all know, has a very deep-rooted football culture, with some of the clubs being established in the 19th century.</p>
          </Reveal>

          <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${visibleUpcoming.length ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {confirmedEvents.map((event, index) => (
              <Reveal key={event.slug} delay={index * 140} from={index === 0 ? 'left' : 'right'}>
                <Link
                  to={event.path}
                  className="group block overflow-hidden border border-brand-gray-light bg-white hover:border-brand-red/40 transition-colors p-8 sm:p-10"
                >
                  <EventIdentity event={event} size="md" cityPosition="bottom" />
                  <p className="text-center text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs mt-6">
                    View event →
                  </p>
                </Link>
              </Reveal>
            ))}

            {visibleUpcoming.map((city) => (
              <Reveal key={city.city} delay={280}>
                <div className="border border-dashed border-brand-gray-light bg-white p-8 sm:p-10 min-h-[280px] flex flex-col items-center justify-center text-center">
                  <p className="section-label mb-3">Coming soon</p>
                  <p className="font-sans font-light text-brand-black uppercase tracking-[0.22em] text-2xl">
                    {city.city}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white overflow-hidden">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <Reveal className="lg:col-span-4 flex justify-center" from="left">
              <EventIdentity event={matches.gujarat} size="md" showCity={false} showName={false} />
            </Reveal>
            <Reveal className="lg:col-span-8" from="right" delay={120}>
              <p className="section-label mb-3">Exclusive rights holder</p>
              <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                {aboutCompany.heading}
              </h2>
              <p className="prose-copy text-base sm:text-lg mb-3">{aboutCompany.body}</p>
              <p className="prose-copy text-base sm:text-lg mb-6 sm:mb-8">{aboutCompany.separation}</p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Link to="/our-journey" className="btn-outline">Our Journey</Link>
                <Link to="/buy-tickets" className="btn-primary">Buy Tickets</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
