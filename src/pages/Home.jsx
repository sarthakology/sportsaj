import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FootballPitch from '../components/FootballPitch';
import BrandLockup from '../components/BrandLockup';
import EventIdentity from '../components/EventIdentity';
import JourneyTimeline from '../components/JourneyTimeline';
import Reveal from '../components/Reveal';
import {
  site,
  matches,
  confirmedEvents,
  visibleUpcoming,
  journey,
  founders,
  aboutCompany,
  hostCities,
  brandNameYear,
  story,
} from '../content';

export default function Home() {
  return (
    <>
      <SEO
        title={brandNameYear()}
        description={story.tour.body}
      />
      <section className="relative bg-white pt-20 sm:pt-24 lg:pt-28">
        <div className="page-container text-center pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-10">
          <Reveal>
            <h1>
              <BrandLockup variant="year" />
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <Link to="/buy-tickets" className="btn-primary mt-6 sm:mt-8">
              Buy Tickets
            </Link>
          </Reveal>
        </div>

        <FootballPitch left={matches.gujarat} right={matches.kolkata} />
      </section>

      <section className="section-py bg-white border-t border-brand-gray-light overflow-hidden">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5" from="left">
              <p className="section-label mb-4 text-sm sm:text-base tracking-[0.2em]">India Tour {site.year}</p>
              <h2 className="font-sans font-light text-brand-black text-2xl sm:text-3xl lg:text-4xl leading-snug">
                {site.welcome}
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-7" from="right" delay={120}>
              <p className="prose-copy text-base sm:text-lg">{story.tour.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg overflow-hidden">
        <div className="page-container max-w-3xl">
          <Reveal className="text-center mb-8 sm:mb-12">
            <p className="section-label mb-3">{journey.heading}</p>
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-6">
              25+ years of sporting experiences
            </h2>
            <p className="prose-copy text-base sm:text-lg">{journey.lead}</p>
          </Reveal>
          <JourneyTimeline items={journey.milestones} />
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
              {founders.heading}
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
              {hostCities.heading}
            </h2>
            <p className="prose-copy text-base sm:text-lg">{hostCities.body}</p>
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
