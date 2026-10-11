import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { aboutCompany, contact, matches, seoCopy, site } from '../content';

const kolkata = matches.kolkata;

const sections = [
  {
    title: 'About these terms',
    body: [
      `These terms apply to sportsaj.com and to registering your interest in the El Clásico India Tour, presented by ${site.legalName}. By using the website or submitting the interest form, you agree to these terms and to our Privacy Policy.`,
    ],
  },
  {
    title: 'The event',
    body: [
      `The match currently announced is ${kolkata.title}: FC Barcelona Legends versus Real Madrid Leyendas at ${kolkata.venue} on ${kolkata.date}. Further matches may be announced on this website.`,
      aboutCompany.separation,
      'Club names, crests and player references identify the exhibition. They do not mean the clubs operate this website or sell these tickets themselves.',
    ],
  },
  {
    title: 'Registering interest is not a ticket',
    body: [
      'The form on this website records your interest only. It does not take payment, reserve a seat, or guarantee that tickets will be available. We will use the details you submit to contact you when sales open.',
      'When tickets go on sale, the price, categories, purchase limits and refund rules will be shown at the point of sale. Those sale terms will apply to any ticket you buy. Until then, nothing on this website is an offer to sell a ticket.',
    ],
  },
  {
    title: 'Changes to the event',
    body: [
      'Match dates, venues, kick-off times and participating players can change. We will publish material updates on this website or contact people who have registered their interest. A change to the event does not create a refund right for an interest registration, because no ticket has been purchased.',
    ],
  },
  {
    title: 'Using the website',
    body: [
      'You may use the website for personal, non-commercial information about the tour. You may not copy the site, scrape it, interfere with it, or submit false details on the form. Text, photographs, logos and event marks on the site belong to Sports AJ or to their respective owners and may not be reused without permission.',
    ],
  },
  {
    title: 'Liability',
    body: [
      'We work to keep the website accurate and available, but we do not guarantee that it will be uninterrupted or free of errors. To the extent the law allows, Sports AJ is not liable for loss arising from use of the website or from an event detail that is later updated. Nothing in these terms limits liability that cannot legally be limited.',
    ],
  },
  {
    title: 'Law',
    body: [
      'These terms are governed by the laws of India. The courts at Gurugram, Haryana have jurisdiction, without affecting any right you have as a consumer under Indian law.',
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description={seoCopy.termsDescription}
        breadcrumb="Terms and Conditions"
      />
      <PageHeader title="Terms and Conditions" breadcrumb="Terms and Conditions" />
      <section className="section-py bg-white">
        <div className="page-container max-w-3xl space-y-10">
          <Reveal>
            <p className="prose-copy">Last updated: 11 October 2026</p>
          </Reveal>
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 40}>
              <h2 className="font-sans font-light text-brand-black uppercase tracking-[0.16em] text-lg sm:text-xl mb-3">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="prose-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="prose-copy">
              Questions about these terms: {contact.email}. Read how we handle your details in the{' '}
              <Link to="/privacy-policy" className="text-brand-black underline underline-offset-4 decoration-brand-gray-light hover:text-brand-red">
                Privacy Policy
              </Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
