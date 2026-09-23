import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { matches, brandNameYear } from '../content';

const pageHeading = 'Buy Tickets';
const pageSubheading = 'Tickets coming soon. Register your interest and we will notify you when sales open.';

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'd7ee421f-4dc1-4daa-a7dc-0b34a05f9a61';

const events = [matches.gujarat, matches.kolkata];

const inputClass =
  'w-full px-4 py-3 text-base border border-brand-gray-light bg-white text-brand-black focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors rounded-none';

function InterestForm({ event }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Ticket Interest — ${event.city}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: event.city,
          venue: event.venue,
          match_date: event.date,
          tickets: form.tickets,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Could not submit your interest. Please try again or email info@sportsaj.com');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 sm:py-14">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-porsche tracking-porsche text-brand-black uppercase mb-2 text-sm sm:text-base">
          Interest Registered
        </h3>
        <p className="text-brand-black/80 font-medium text-sm max-w-sm mx-auto">
          Thanks for your interest in {event.title}. We will reach out when tickets go on sale.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor={`${event.slug}-name`} className="block text-brand-black text-sm font-medium mb-1.5">
            Full Name
          </label>
          <input
            id={`${event.slug}-name`}
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${event.slug}-email`} className="block text-brand-black text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id={`${event.slug}-email`}
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor={`${event.slug}-phone`} className="block text-brand-black text-sm font-medium mb-1.5">
            Phone
          </label>
          <input
            id={`${event.slug}-phone`}
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor={`${event.slug}-tickets`} className="block text-brand-black text-sm font-medium mb-1.5">
            Tickets Interested In
          </label>
          <select
            id={`${event.slug}-tickets`}
            value={form.tickets}
            onChange={(e) => setForm({ ...form, tickets: e.target.value })}
            className={inputClass}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${event.slug}-message`} className="block text-brand-black text-sm font-medium mb-1.5">
          Message <span className="text-brand-gray font-normal">(optional)</span>
        </label>
        <textarea
          id={`${event.slug}-message`}
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none min-h-[100px]`}
          placeholder="Any questions or special requests..."
        />
      </div>

      {error && <p className="text-brand-red text-sm" role="alert">{error}</p>}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={loading}>
        {loading ? 'Submitting...' : 'Register Interest'}
      </button>
    </form>
  );
}

export default function BuyTickets() {
  const location = useLocation();
  const fromKolkata = location.search.includes('city=kolkata') || location.hash === '#kolkata';
  const [activeTab, setActiveTab] = useState(fromKolkata ? 'kolkata' : 'gujarat');
  const activeEvent = events.find((e) => e.slug === activeTab) || events[0];

  return (
    <>
      <SEO
        title="Buy Tickets"
        description={`Register your interest for ${brandNameYear()} tickets in Ahmedabad and Kolkata.`}
        breadcrumb="Buy Tickets"
      />
      <section className="section-py bg-white pt-24 sm:pt-28 lg:pt-36">
        <div className="page-container max-w-3xl">
          <Reveal>
            <div className="mb-8 sm:mb-10">
              <h1 className="section-title text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                {pageHeading}
              </h1>
              <p className="text-brand-black/80 font-medium text-sm sm:text-base leading-relaxed max-w-2xl">
                {pageSubheading}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex border-b border-brand-gray-light mb-8 sm:mb-10">
              {events.map((event) => (
                <button
                  key={event.slug}
                  type="button"
                  onClick={() => setActiveTab(event.slug)}
                  className={`flex-1 min-h-[48px] px-4 py-3 font-porsche tracking-porsche uppercase text-xs sm:text-sm transition-colors border-b-2 -mb-px ${
                    activeTab === event.slug
                      ? 'border-brand-red text-brand-red'
                      : 'border-transparent text-brand-gray hover:text-brand-black'
                  }`}
                >
                  {event.title}
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="card card-pad lg:p-10 border-t-4 border-t-brand-red">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-brand-gray-light">
              <img
                src={activeEvent.logo}
                alt={activeEvent.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
              <div className="text-center sm:text-left">
                <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-1">
                  {activeEvent.title}
                </h2>
                <p className="text-brand-gray text-sm">{activeEvent.venue}</p>
                <p className="text-brand-red font-porsche tracking-porsche uppercase text-xs mt-1">
                  {activeEvent.date}
                </p>
              </div>
            </div>

            <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm sm:text-base mb-5 sm:mb-6">
              Register Your Interest
            </h3>

            <InterestForm key={activeEvent.slug} event={activeEvent} />
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
