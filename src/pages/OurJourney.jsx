import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import EventIdentity from '../components/EventIdentity';
import { journey, aboutCompany, matches, seoCopy } from '../content';

export default function OurJourney() {
  const lineRef = useRef(null);
  const [lineOn, setLineOn] = useState(false);
  const journeyItems = [
    { id: 'years', label: '25+ Years' },
    { id: 'fifa', label: 'FIFA' },
    { id: 'ipl', label: 'IPL Broadcast' },
    { id: 'bundesliga', label: 'Bundesliga Digital Experience' },
    { id: 'french-open', label: 'French Open' },
    { id: 'us-open', label: 'US Open' },
    { id: 'tour', label: 'EL CLÁSICO INDIA TOUR' },
  ];
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SEO title={journey.heading} description={seoCopy.journeyDescription} breadcrumb={journey.heading} />
      <PageHeader title={journey.heading} breadcrumb={journey.heading} />

      <section className="relative bg-white border-b border-brand-gray-light overflow-hidden">
        <div className="page-container py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-7" from="left">
              <p className="section-label mb-4">Sports AJ Ventures</p>
              <blockquote className="font-sans font-light text-brand-black text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight">
                {journey.lead}
              </blockquote>
              <p className="prose-copy text-base sm:text-lg mt-6">{journey.foundersLine}</p>
            </Reveal>
            <Reveal className="lg:col-span-5" from="right" delay={160}>
              <div className="relative max-w-sm mx-auto lg:ml-auto group">
                <div className="absolute -inset-3 bg-brand-red/10 blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                <img
                  src="/assets/forbes-billion-dollar-kick-cover.jpg"
                  alt="Forbes India — Jatin Ahluwalia and Abhishek Saklani"
                  className="relative w-full shadow-xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container max-w-3xl">
          <Reveal className="text-center mb-6">
            <p className="section-label mb-3">The story</p>
            <h2 className="section-title text-xl sm:text-2xl md:text-3xl">
              25+ years of sporting experiences
            </h2>
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
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container max-w-4xl">
          <div className="relative" ref={lineRef}>
            <div className="hidden sm:block absolute left-[1.15rem] top-3 bottom-3 w-px bg-brand-gray-light overflow-hidden">
              <span
                className={`block w-full bg-brand-red origin-top transition-transform duration-1000 ease-out ${
                  lineOn ? 'scale-y-100' : 'scale-y-0'
                }`}
                style={{ height: '100%' }}
              />
            </div>

            <div className="space-y-10 sm:space-y-14">
              {journey.sections.map((section, index) => (
                <Reveal key={section.heading} delay={index * 140}>
                  <article className="relative sm:pl-16">
                    <span className="hidden sm:flex absolute left-0 top-1 w-9 h-9 items-center justify-center bg-white border border-brand-gray-light font-sans text-[11px] tracking-[0.2em] text-brand-red">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="sm:hidden section-label mb-3">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-sans font-light text-brand-black uppercase tracking-[0.16em] text-xl sm:text-2xl mb-4">
                      {section.heading}
                    </h3>
                    <p className="prose-copy text-base sm:text-lg">{section.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-red overflow-hidden">
        <Reveal>
          <div className="page-container max-w-4xl text-center">
            <p className="font-sans font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed text-white">
              {journey.foundersLine}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-py bg-brand-gray-bg">
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
              <p className="prose-copy mb-3">{aboutCompany.body}</p>
              <p className="prose-copy mb-6">{aboutCompany.separation}</p>
              <Link to="/buy-tickets" className="btn-primary">Buy Tickets</Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
