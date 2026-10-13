import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { contact, seoCopy, site } from '../content';

const sections = [
  {
    title: 'Who we are',
    body: [
      `${site.legalName} (“Sports AJ”, “we”, “us”) operates elclasicoindia.com and organises the El Clásico India Tour. This policy explains how we handle personal information when you use the website or register your interest in tickets.`,
      `Our office is at 001 BPTP Park Centra, Sector 31, Gurugram, Haryana 122001, India. For privacy questions, email ${contact.email}.`,
    ],
  },
  {
    title: 'Information we collect',
    body: [
      'If you register your interest in tickets, we collect your name, email address, phone number, the number of tickets you are interested in, the match city, and any message you choose to send.',
      'If you arrive from a campaign link, we may store the campaign source (such as utm_source, utm_medium, utm_campaign, utm_content and utm_term) in your browser so it can be included with your registration. We use that only to understand which announcement brought you to the site.',
      'Our servers may also receive standard technical details such as your browser type and the time of your visit, which hosting systems record in the ordinary course of operating the website.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'We use your details to record your interest, tell you when ticket sales open, reply to questions you send us, and run the event. We do not use this form to take payment, and registering does not buy a ticket.',
      'We do not sell your personal information. We share it only with people and service providers who help us store registrations, send updates, or operate the event, and only for those purposes. We may also disclose information if the law requires it.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'We keep registration details for as long as we need them to contact you about this tour and to keep a record of enquiries. You can ask us to delete your details by emailing us. We may retain a limited record where we need it for legal, accounting, or security reasons.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You may ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Write to us at the email above and tell us the name and phone number or email you used on the form so we can find the registration.',
      'You can also clear the campaign source stored in your browser by clearing site data for elclasicoindia.com in your browser settings.',
    ],
  },
  {
    title: 'Children',
    body: [
      'This website is meant for adults arranging tickets. We do not knowingly collect information from children. If you believe a child has submitted the form, email us and we will delete that registration.',
    ],
  },
  {
    title: 'Updates',
    body: [
      'We may update this policy when the event or the website changes. The date at the top of this page is the latest version. Continued use of the site after an update means the new version applies.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={seoCopy.privacyDescription}
        breadcrumb="Privacy Policy"
      />
      <PageHeader title="Privacy Policy" breadcrumb="Privacy Policy" />
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
              Ticket purchases, once sales open, will be covered by the{' '}
              <Link to="/terms-and-conditions" className="text-brand-black underline underline-offset-4 decoration-brand-gray-light hover:text-brand-red">
                Terms and Conditions
              </Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
