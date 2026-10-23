import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { galaDinners, seoCopy, site } from '../content';
import { captureUTMData } from '../utils/utm';

const HERO = '/assets/draft/hero-ballroom.png';
const OG_IMAGE = '/assets/draft/hero-ballroom.jpg';
const CREST = '/assets/draft/crest.png';
const ICON_PLUS = '/assets/draft/icon-plus-black.svg';
const ICON_PLUS_HOVER = '/assets/draft/icon-plus-white.svg';
const ICON_MINUS = '/assets/draft/icon-minus-black.svg';
const ICON_MINUS_HOVER = '/assets/draft/icon-minus-white.svg';
const FLOW_DIVIDER = '/assets/draft/event-flow-divider.svg';

// Paste your n8n POST webhook URL here
const N8N_WEBHOOK_URL = 'https://n8n.barcaacademy.tech/webhook/3ca0afed-ac82-499b-a34d-75df5dbe7822';

const flowPreview = [
  {
    title: 'Curtain Raiser on El Clasico Legends Match',
    bullets: [
      'An exclusive first look at tomorrow’s Barça Legends vs Real Madrid Leyendas showdown',
      'Behind-the-scenes stories, squad reveals and what’s at stake on the pitch',
    ],
  },
  {
    title: 'Meet The Squad',
    bullets: [
      'Both squads walk in. Luís Figo, Carles Puyol, Jordi Alba, Iker Casillas and more',
      'Up close with the icons, the night before they take the field',
    ],
  },
  {
    title: 'Rivalry Strike Session',
    bullets: [
      'Members of both squads on stage, in conversation with our host',
      'Stories from El Clasico in their prime, the dressing-room tension and the nights that defined a rivalry',
      'Their thoughts on tomorrow’s match and on football in India',
    ],
  },
];

const flowMore = [
  {
    title: 'Soirée',
    bullets: [
      'A curated fine-dining experience in an elegant setting',
      'Music, conversation and the legends among you',
    ],
  },
  {
    title: 'Selfie Moment',
    bullets: [
      'Your moment with the legends, captured',
      'Memories to take home from a night few will ever experience',
    ],
  },
  {
    title: 'Networking',
    bullets: [
      'Connect with India’s business leaders, celebrities and dignitaries',
      'A final chance to meet the legends before the night winds down',
    ],
  },
  {
    title: 'Closing',
    bullets: [
      'A farewell toast to the greatest rivalry in football',
      'Head home ready for matchday, with your premium hospitality ticket in hand',
    ],
  },
];

const fieldClass =
  'w-full h-9 px-2.5 bg-white border border-[#d9d9dd] text-brand-black text-sm font-garamond placeholder:text-[#999] outline-none focus:border-brand-red';

function FlowBlock({ title, bullets }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h3 className="font-garamond font-semibold text-xl sm:text-2xl leading-none text-brand-red">
        {title}
      </h3>
      <ul className="font-garamond text-base sm:text-2xl leading-[1.4] text-brand-black max-w-6xl">
        {bullets.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Expand({ open, children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.style.height = open ? 'auto' : '0px';
      return undefined;
    }

    if (open) {
      el.style.height = `${el.scrollHeight}px`;
      const done = (event) => {
        if (event.propertyName !== 'height') return;
        el.style.height = 'auto';
      };
      el.addEventListener('transitionend', done);
      return () => el.removeEventListener('transitionend', done);
    }

    const current = el.getBoundingClientRect().height;
    el.style.height = `${current}px`;
    void el.offsetHeight;
    el.style.height = '0px';
    return undefined;
  }, [open]);

  return (
    <div
      ref={ref}
      aria-hidden={!open}
      className="h-0 overflow-hidden motion-safe:transition-[height] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <div
        className={`flex flex-col items-center gap-10 pt-10 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function ShowToggle({ expanded, onClick }) {
  const label = expanded ? 'SHOW LESS' : 'SHOW MORE';
  const icon = expanded ? ICON_MINUS : ICON_PLUS;
  const iconHover = expanded ? ICON_MINUS_HOVER : ICON_PLUS_HOVER;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      className="group inline-flex items-center justify-center gap-1 h-10 px-6 border border-brand-black bg-brand-gray-bg text-brand-black hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-300 motion-safe:hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="font-garamond font-medium text-sm leading-[1.4] uppercase">{label}</span>
      <span className="relative size-4 shrink-0">
        <img src={icon} alt="" width={16} height={16} className="absolute inset-0 group-hover:opacity-0" />
        <img src={iconHover} alt="" width={16} height={16} className="absolute inset-0 opacity-0 group-hover:opacity-100" />
      </span>
    </button>
  );
}

function InterestForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    seats: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const utmData = captureUTMData();
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      city: form.city,
      seats: form.seats,
      message: form.message.trim(),
      event: 'Gala Dinner',
      utm_source: utmData.utm_source || '',
      utm_medium: utmData.utm_medium || '',
      utm_campaign: utmData.utm_campaign || '',
      utm_content: utmData.utm_content || '',
      utm_term: utmData.utm_term || '',
    };

    try {
      if (N8N_WEBHOOK_URL) {
        await axios.post(N8N_WEBHOOK_URL, payload, {
          headers: { 'Content-Type': 'application/json' },
          timeout: 15000,
        });
      }
      setSubmitted(true);
    } catch (err) {
      setError('Could not submit your interest. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <h3 className="font-garamond font-medium text-lg text-brand-black mb-2">Interest registered</h3>
        <p className="font-garamond text-sm text-brand-black/80">
          Thanks for your interest in the Gala Dinner. We will be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-full">
      <p className="font-garamond text-base py-2.5">REGISTER YOUR INTEREST</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2.5">
          <span className="font-garamond text-base">Full Name</span>
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass}
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className="font-garamond text-base">Email</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass}
            placeholder="your@email.com"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <label className="flex flex-col gap-2.5">
          <span className="font-garamond text-base">Phone</span>
          <input
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={fieldClass}
            placeholder="+91 xxxxx xxxxx"
          />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className="font-garamond text-base">City Interested In</span>
          <select
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className={`${fieldClass} ${form.city ? 'text-brand-black' : 'text-[#999]'}`}
          >
            <option value="" disabled>
              Select city
            </option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </label>
        <label className="flex flex-col gap-2.5">
          <span className="font-garamond text-base">No. of Seats</span>
          <select
            value={form.seats}
            onChange={(e) => setForm({ ...form, seats: e.target.value })}
            className={fieldClass}
          >
            {['1', '2', '3', '4', '5', '6+'].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2.5">
        <span className="font-garamond text-base">
          Message <span className="text-[#999] text-xs">(optional)</span>
        </span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${fieldClass} h-[200px] py-2.5 resize-y`}
          placeholder="Any questions or special requests..."
        />
      </label>

      {error ? <p className="text-brand-red text-sm">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-red text-white font-garamond font-bold text-sm leading-[1.4] uppercase px-6 py-2.5 disabled:opacity-70"
      >
        {loading ? 'SUBMITTING…' : 'REGISTER INTEREST'}
      </button>

      <p className="font-garamond text-[10px] leading-none text-brand-black py-2.5">
        By registering, you agree to the{' '}
        <Link to="/terms-and-conditions" className="underline">
          Terms and Conditions
        </Link>{' '}
        and{' '}
        <Link to="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        . Registering records your interest only and does not buy a ticket.
      </p>
    </form>
  );
}

export default function GalaDinner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <SEO
        title={seoCopy.galaDinnerTitle}
        description={seoCopy.galaDinnerDescription}
        keywords={seoCopy.galaDinnerKeywords}
        breadcrumb="Gala Dinner"
        image={OG_IMAGE}
        imageAlt="Grand blue-lit gala ballroom for the El Clasico Legends India Tour Gala Dinner"
        imageWidth={1024}
        imageHeight={570}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: seoCopy.galaDinnerTitle,
            description: seoCopy.galaDinnerDescription,
            url: `${site.url}/gala-dinner`,
            inLanguage: 'en-IN',
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: `${site.url}${OG_IMAGE}`,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'EventSeries',
            name: 'El Clasico Legends Gala Dinner',
            description: seoCopy.galaDinnerDescription,
            url: `${site.url}/gala-dinner`,
            image: `${site.url}${OG_IMAGE}`,
            inLanguage: 'en-IN',
            organizer: {
              '@type': 'Organization',
              name: site.legalName,
              url: site.url,
            },
            subEvent: galaDinners.map((event) => ({
              '@type': 'Event',
              name: event.name,
              startDate: event.startDateISO,
              location: {
                '@type': 'Place',
                name: event.city,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: event.city,
                  addressRegion: event.addressRegion,
                  addressCountry: 'IN',
                },
              },
            })),
          },
          ...galaDinners.map((event) => ({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: event.name,
            description: seoCopy.galaDinnerDescription,
            startDate: event.startDateISO,
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            url: `${site.url}/gala-dinner`,
            image: `${site.url}${OG_IMAGE}`,
            inLanguage: 'en-IN',
            isAccessibleForFree: false,
            location: {
              '@type': 'Place',
              name: event.city,
              address: {
                '@type': 'PostalAddress',
                addressLocality: event.city,
                addressRegion: event.addressRegion,
                addressCountry: 'IN',
              },
            },
            organizer: {
              '@type': 'Organization',
              name: site.legalName,
              url: site.url,
            },
            performer: [
              { '@type': 'SportsTeam', name: 'FC Barcelona Legends' },
              { '@type': 'SportsTeam', name: 'Real Madrid Leyendas' },
              { '@type': 'Person', name: 'Luís Figo' },
              { '@type': 'Person', name: 'Carles Puyol' },
              { '@type': 'Person', name: 'Jordi Alba' },
              { '@type': 'Person', name: 'Iker Casillas' },
            ],
            offers: {
              '@type': 'Offer',
              name: 'Register interest',
              url: `${site.url}/gala-dinner`,
              availability: 'https://schema.org/PreOrder',
              priceCurrency: 'INR',
            },
          })),
        ]}
      />

      <img
        src={HERO}
        alt="Grand blue-lit gala ballroom set for the El Clasico Legends Gala Dinner"
        className="block w-full h-[317px] sm:h-[458px] lg:h-[598px] object-cover mt-14 sm:mt-16 lg:mt-20"
      />


      <section className="bg-white px-5 sm:px-10 lg:px-[155px] pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-[100px]">
        <h1 className="font-garamond font-bold text-brand-red text-[32px] sm:text-5xl lg:text-[64px] leading-none">
          GALA DINNER
        </h1>
        <p className="mt-2.5 font-garamond font-bold text-brand-black text-base sm:text-2xl lg:text-[32px] leading-none">
          Your exclusive evening with Barça Legends and Real Madrid Leyendas before they hit the pitch
        </p>
        <div className="mt-8 sm:mt-10 h-px bg-brand-red" />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-10 lg:gap-16 items-start">
          <Reveal from="left">
            <p className="font-garamond font-medium text-[12px] leading-none text-brand-red px-2.5">
              EL CLASICO LEGENDS INDIA TOUR 2026
            </p>
            <h2 className="mt-2.5 font-garamond font-medium text-[32px] sm:text-[40px] leading-none text-brand-black">
              About the
              <br />
              GALA DINNER
            </h2>
          </Reveal>
          <Reveal from="right" delay={120}>
            <p className="font-garamond font-medium text-base sm:text-lg leading-[1.4] text-brand-black">
              On the eve of each match, the El Clasico Legends India Tour opens its doors to an unforgettable experience. The Gala Dinner is an intimate evening with the Barça Legends and Real Madrid Leyendas squads. Share the room with Luís Figo, Carles Puyol, Jordi Alba, Iker Casillas and more of the icons who defined football’s greatest rivalry, before they take the field. Expect fine dining, close encounters and moments to savour for a lifetime. Every Gala Dinner ticket includes premium hospitality at the match the next day, so your night with the legends carries straight through to matchday.
            </p>
            <div className="mt-6 sm:mt-8 space-y-2.5 font-garamond font-semibold text-sm sm:text-base leading-[1.4] text-brand-red">
              <p>Ahmedabad · 21 November 2026 · 7:30 PM</p>
              <p>Kolkata · 24 November 2026 · 7:30 PM</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-gray-bg px-5 sm:px-10 lg:px-[155px] py-16 sm:py-20 lg:py-[100px]">
        <div className="flex flex-col items-center gap-10">
          <Reveal className="text-center">
            <p className="font-garamond font-medium text-[12px] leading-none text-brand-black">
              GALA DINNER
            </p>
            <h2 className="mt-2.5 font-garamond font-medium text-[32px] sm:text-[40px] leading-none text-brand-red">
              Event Flow
            </h2>
            <p className="mt-2.5 font-garamond font-normal text-base sm:text-2xl leading-[1.4] text-brand-black">
              One night. Two legendary squads. An evening reserved for a select few.
            </p>
          </Reveal>

          <img src={FLOW_DIVIDER} alt="" width={241.5} height={17.5} />

          <div className="flex w-full flex-col items-center">
            <div className="flex w-full flex-col items-center gap-10">
              <Reveal>
                <div className="flex flex-col items-center gap-6 text-center">
                  <h3 className="font-garamond font-semibold text-xl sm:text-2xl leading-none text-brand-red">
                    Refreshment & Champagne
                  </h3>
                  <ul className="font-garamond text-base sm:text-2xl leading-[1.4] text-brand-black max-w-6xl">
                    <li>• Private red-carpet arrival and personal guest check-in</li>
                    <li>• Refreshment on arrival as the evening begins</li>
                  </ul>
                  <p className="font-garamond text-[10px] sm:text-xs leading-none text-brand-black">
                    *Subject to state regulations
                  </p>
                </div>
              </Reveal>
              {flowPreview.map((item, index) => (
                <Reveal key={item.title} delay={(index + 1) * 80}>
                  <FlowBlock {...item} />
                </Reveal>
              ))}
            </div>

            <Expand open={expanded}>
              {flowMore.map((item) => (
                <FlowBlock key={item.title} {...item} />
              ))}
            </Expand>

            <div className="pt-10">
              <ShowToggle expanded={expanded} onClick={() => setExpanded((v) => !v)} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 sm:px-10 lg:px-[155px] py-16 sm:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
          <Reveal className="lg:w-[291px] shrink-0" from="left">
            <p className="font-garamond font-medium text-[12px] leading-none text-brand-red px-2.5">
              EL CLASICO LEGENDS INDIA TOUR 2026
            </p>
            <h2 className="mt-2.5 font-garamond font-medium text-[32px] sm:text-[40px] leading-none text-brand-black">
              REGISTER NOW
            </h2>
          </Reveal>

          <Reveal className="w-full max-w-[704px] lg:ml-auto" from="right" delay={120}>
            <div className="h-1 bg-brand-red origin-left motion-safe:animate-scale-x" />
            <div className="border-[0.5px] border-[rgba(10,10,10,0.25)] bg-white p-6 sm:p-10">
              <div className="flex items-center gap-2.5 pb-4 border-b-[0.5px] border-[rgba(10,10,10,0.25)] mb-6">
                <img src={CREST} alt={site.logoAlt} className="size-[90px] sm:size-[150px] object-contain" />
                <div>
                  <p className="font-garamond text-base sm:text-xl leading-none text-brand-black">
                    EL CLASICO LEGENDS INDIA TOUR 2026
                  </p>
                  <p className="mt-1 font-garamond text-sm leading-none text-brand-gray">
                    Ahmedabad & Kolkata
                  </p>
                  <p className="mt-1 font-garamond text-xs leading-none text-brand-red">
                    21 & 24 November, 2026 · 7:30PM
                  </p>
                </div>
              </div>
              <InterestForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
