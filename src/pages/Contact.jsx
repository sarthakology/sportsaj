import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'd7ee421f-4dc1-4daa-a7dc-0b34a05f9a61';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
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
          name: form.name,
          email: form.email,
          subject: form.topic,
          topic: form.topic,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Could not send your message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 text-base border border-brand-gray-light bg-white text-brand-black focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors rounded-none';

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Sports AJ in Gurugram, India for El Clásico Legends tickets and partnerships."
        breadcrumb="Contact"
      />
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        description="Reach out to discuss tickets, partnerships, or event inquiries."
        breadcrumb="Contact"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-4 sm:mb-6">
                  Office
                </h2>
                <address className="not-italic text-brand-gray space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <p className="font-semibold text-brand-black">Sports AJ</p>
                  <p>Unit No. 001, BPTP, Park Centra, Jal Vayu Vihar</p>
                  <p>Sector 31, Gurugram, Haryana 122001</p>
                  <p>INDIA</p>
                </address>
              </div>

              <div>
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm mb-3 sm:mb-4">
                  Contact Details
                </h3>
                <div className="space-y-2 sm:space-y-3 text-brand-gray text-sm sm:text-base">
                  <p className="break-words">
                    <span className="text-brand-black font-medium">Email: </span>
                    <a href="mailto:info@sportsaj.com" className="hover:text-brand-red transition-colors break-all">
                      info@sportsaj.com
                    </a>
                  </p>
                  <p>
                    <span className="text-brand-black font-medium">Phone: </span>
                    <a href="tel:+91XXXXXXXXXX" className="hover:text-brand-red transition-colors">
                      +91 XXX XXX XXXX
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="card card-pad lg:p-10">
                <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-5 sm:mb-6">
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-porsche tracking-porsche text-brand-black uppercase mb-2 text-sm sm:text-base">
                      Message Sent
                    </h3>
                    <p className="text-brand-gray text-sm">We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-brand-black text-sm font-medium mb-1.5">Name</label>
                        <input
                          id="contact-name"
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
                        <label htmlFor="contact-email" className="block text-brand-black text-sm font-medium mb-1.5">Email</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-topic" className="block text-brand-black text-sm font-medium mb-1.5">Topic</label>
                      <input
                        id="contact-topic"
                        type="text"
                        required
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className={inputClass}
                        placeholder="e.g. Tickets, partnership"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-brand-black text-sm font-medium mb-1.5">Message</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none min-h-[120px]`}
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>
                    {error && (
                      <p className="text-brand-red text-sm" role="alert">{error}</p>
                    )}
                    <button type="submit" className="btn-primary" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
