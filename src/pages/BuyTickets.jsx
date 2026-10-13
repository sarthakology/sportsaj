import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { matches, seoCopy } from '../content';

const event = matches.kolkata;

const inputClass =
  'w-full px-4 py-3 text-base border border-brand-gray-light bg-white text-brand-black focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors rounded-none';

const captureUTMData = () => {
  const params = new URLSearchParams(window.location.search);

  const currentUTM = {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
  };

  const hasTrackingData = Object.values(currentUTM).some(
    (value) => value !== ''
  );

  /*
   * If tracking parameters are present in the URL,
   * save them as the user's attribution.
   *
   * This keeps the FIRST source that brought the user
   * to the website.
   */
  if (hasTrackingData) {
    const existingAttribution =
      localStorage.getItem('marketing_attribution');

    /*
     * Only save if we don't already have attribution.
     *
     * This means:
     *
     * Facebook → Website → Buy Tickets
     *
     * remains attributed to Facebook even if the user
     * navigates around the website.
     */
    if (!existingAttribution) {
      localStorage.setItem(
        'marketing_attribution',
        JSON.stringify(currentUTM)
      );
    }
  }

  /*
   * Return saved attribution.
   */
  try {
    return JSON.parse(
      localStorage.getItem('marketing_attribution') || '{}'
    );
  } catch {
    return {};
  }
};


/*
|--------------------------------------------------------------------------
| Interest Form
|--------------------------------------------------------------------------
*/

function InterestForm({ event, utmData }) {
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


  /*
  |--------------------------------------------------------------------------
  | Submit Form
  |--------------------------------------------------------------------------
  */

const handleSubmit = async (e) => {
  e.preventDefault();

  setError('');
  setLoading(true);

  try {
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      tickets: form.tickets,
      message: form.message.trim(),
      city: event.city,

      utm_source: utmData.utm_source || '',
      utm_medium: utmData.utm_medium || '',
      utm_campaign: utmData.utm_campaign || '',
      utm_content: utmData.utm_content || '',
      utm_term: utmData.utm_term || '',
    };

    const response = await axios.post(
      'https://barca-backend.onrender.com/sportsaj/',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 15000,
      }
    );

    if (!response.data?.success) {
      throw new Error(
        response.data?.message ||
        'Something went wrong. Please try again.'
      );
    }

    setSubmitted(true);

  } catch (error) {
    console.error('Ticket interest submission error:', error);

    let errorMessage =
      'Could not submit your interest. Please try again.';

    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    } else if (error.code === 'ECONNABORTED') {
      errorMessage =
        'The request took too long. Please try again.';
    } else if (!error.response) {
      errorMessage =
        'Unable to connect to the server. Please try again.';
    }

    setError(errorMessage);

  } finally {
    setLoading(false);
  }
};


  /*
  |--------------------------------------------------------------------------
  | Success State
  |--------------------------------------------------------------------------
  */

  if (submitted) {
    return (
      <div className="text-center py-10 sm:py-14">

        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-red/10 flex items-center justify-center mx-auto mb-4">

          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-brand-red"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>

        </div>

        <h3 className="font-porsche tracking-porsche text-brand-black uppercase mb-2 text-sm sm:text-base">
          Interest Registered
        </h3>

        <p className="text-brand-black/80 font-medium text-sm max-w-sm mx-auto">
          Thanks for your interest in {event.title}. We will reach out when
          tickets go on sale.
        </p>

      </div>
    );
  }


  /*
  |--------------------------------------------------------------------------
  | Form
  |--------------------------------------------------------------------------
  */

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 sm:space-y-5"
    >

      {/* Name + Email */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <div>

          <label
            htmlFor={`${event.slug}-name`}
            className="block text-brand-black text-sm font-medium mb-1.5"
          >
            Full Name
          </label>

          <input
            id={`${event.slug}-name`}
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className={inputClass}
            placeholder="Your name"
          />

        </div>


        <div>

          <label
            htmlFor={`${event.slug}-email`}
            className="block text-brand-black text-sm font-medium mb-1.5"
          >
            Email
          </label>

          <input
            id={`${event.slug}-email`}
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className={inputClass}
            placeholder="you@email.com"
          />

        </div>

      </div>


      {/* Phone + Tickets */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <div>

          <label
            htmlFor={`${event.slug}-phone`}
            className="block text-brand-black text-sm font-medium mb-1.5"
          >
            Phone
          </label>

          <input
            id={`${event.slug}-phone`}
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />

        </div>


        <div>

          <label
            htmlFor={`${event.slug}-tickets`}
            className="block text-brand-black text-sm font-medium mb-1.5"
          >
            Tickets Interested In
          </label>

          <select
            id={`${event.slug}-tickets`}
            value={form.tickets}
            onChange={(e) =>
              setForm({
                ...form,
                tickets: e.target.value,
              })
            }
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


      {/* Message */}

      <div>

        <label
          htmlFor={`${event.slug}-message`}
          className="block text-brand-black text-sm font-medium mb-1.5"
        >
          Message{' '}
          <span className="text-brand-gray font-normal">
            (optional)
          </span>
        </label>

        <textarea
          id={`${event.slug}-message`}
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className={`${inputClass} resize-none min-h-[100px]`}
          placeholder="Any questions or special requests..."
        />

      </div>


      {/* Error */}

      {error && (
        <p
          className="text-brand-red text-sm"
          role="alert"
        >
          {error}
        </p>
      )}


      {/* Submit */}

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Register Interest'}
      </button>

      <p className="text-brand-gray text-xs leading-relaxed max-w-xl">
        By registering, you agree to the{' '}
        <Link
          to="/terms-and-conditions"
          className="text-brand-black underline underline-offset-4 decoration-brand-gray-light hover:text-brand-red"
        >
          Terms and Conditions
        </Link>{' '}
        and{' '}
        <Link
          to="/privacy-policy"
          className="text-brand-black underline underline-offset-4 decoration-brand-gray-light hover:text-brand-red"
        >
          Privacy Policy
        </Link>
        . Registering records your interest only and does not buy a ticket.
      </p>

    </form>
  );
}


/*
|--------------------------------------------------------------------------
| Buy Tickets Page
|--------------------------------------------------------------------------
*/

export default function BuyTickets() {
  const utmData = captureUTMData();


  return (
    <>

      <SEO
        title="Buy Tickets"
        description={seoCopy.ticketsDescription}
        breadcrumb="Buy Tickets"
      />


      <section className="section-py bg-white pt-24 sm:pt-28 lg:pt-36">

        <div className="page-container max-w-3xl">


          {/* Page heading */}

          <Reveal>

            <div className="mb-8 sm:mb-10">

              <h1 className="section-title text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                Buy Tickets
              </h1>

              <p className="text-brand-black/80 font-medium text-sm sm:text-base leading-relaxed max-w-2xl">
                Tickets coming soon. Register your interest and we will notify you when sales open.
              </p>

            </div>

          </Reveal>


          {/* Event card */}

          <Reveal delay={180}>

            <div className="card card-pad lg:p-10 border-t-4 border-t-brand-red">


              {/* Event information */}

              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-brand-gray-light">

                <img
                  src={event.logo}
                  alt={event.logoAlt || event.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />

                <div className="text-center sm:text-left">

                  <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-1">
                    {event.title}
                  </h2>

                  <p className="text-brand-gray text-sm">
                    {event.venue}
                  </p>

                  <p className="text-brand-red font-porsche tracking-porsche uppercase text-xs mt-1">
                    {event.date}
                  </p>

                </div>

              </div>


              {/* Form heading */}

              <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm sm:text-base mb-5 sm:mb-6">
                Register Your Interest
              </h3>


              {/* Form */}

              <InterestForm
                key={event.slug}
                event={event}
                utmData={utmData}
              />

            </div>

          </Reveal>

        </div>

      </section>

    </>
  );
}