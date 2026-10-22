import { Link } from 'react-router-dom';
import { navItems, site, contact, social } from '../content';
import Reveal from './Reveal';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

const footerLinks = [...navItems, { label: 'Buy Tickets', path: '/buy-tickets' }];

export default function Footer() {
  return (
    <footer className="relative bg-white text-brand-black pb-safe-bottom">
      <div className="h-1 bg-brand-red origin-left motion-safe:animate-scale-x" />

      <div className="md:hidden px-8 pt-12 pb-10">
        <div className="flex flex-col items-center text-center">
          <img src={site.logo} alt={site.logoAlt} className="h-24 w-auto" />
          <p className="mt-5 font-garamond font-medium text-[32px] leading-none text-brand-red">
            {site.brand}
          </p>
          <p className="mt-4 font-garamond text-base leading-[1.4] text-brand-black max-w-sm">
            {site.welcome}
          </p>
          <p className="mt-2 font-garamond text-sm leading-none text-brand-gray">{site.legalName}</p>
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h4 className="font-garamond font-medium text-lg leading-none text-brand-black pl-3 border-l-2 border-brand-red">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-garamond text-base leading-[1.4] text-brand-black hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-garamond font-medium text-lg leading-none text-brand-black pl-3 border-l-2 border-brand-red">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/privacy-policy"
                  className="font-garamond text-base leading-[1.4] text-brand-black hover:text-brand-red transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="font-garamond text-base leading-[1.4] text-brand-black hover:text-brand-red transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-garamond font-medium text-lg leading-none text-brand-black pl-3 border-l-2 border-brand-red">
              Contact
            </h4>
            <address className="mt-4 not-italic font-garamond text-base leading-[1.4] text-brand-black space-y-0.5">
              {contact.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="underline underline-offset-2 decoration-brand-black/40 hover:text-brand-red hover:decoration-brand-red transition-colors"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <p className="font-garamond text-sm leading-none text-brand-gray">
            @{new Date().getFullYear()} Sports AJ. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-brand-black">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red transition-colors"
              aria-label="Sports AJ on Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red transition-colors"
              aria-label="Sports AJ on Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block page-container py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <Reveal className="text-center sm:text-left" from="left">
            <img
              src={site.logo}
              alt={site.logoAlt}
              className="h-16 sm:h-20 lg:h-24 w-auto mb-4 sm:mb-5 mx-auto sm:mx-0"
            />
            <p className="font-porsche font-bold uppercase tracking-porsche text-brand-red text-[1.6875rem] sm:text-[1.875rem] lg:text-[2.25rem] leading-none mb-4 sm:mb-5">
              {site.brand}
            </p>
            <p className="text-brand-black/80 font-medium text-sm leading-relaxed max-w-md mb-4 sm:mb-6 mx-auto sm:mx-0">
              {site.welcome}
            </p>
            <p className="text-brand-gray text-xs">{site.legalName}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="text-center sm:text-left">
              <h4 className="footer-heading inline-block sm:block">Navigation</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 sm:space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-brand-gray hover:text-brand-red text-sm transition-all duration-300 inline-block py-1 sm:hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="text-center sm:text-left">
              <h4 className="footer-heading inline-block sm:block">Legal</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 sm:space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-brand-gray hover:text-brand-red text-sm transition-all duration-300 inline-block py-1 sm:hover:translate-x-1"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-brand-gray hover:text-brand-red text-sm transition-all duration-300 inline-block py-1 sm:hover:translate-x-1"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={220} from="right">
            <div className="text-center sm:text-left">
              <h4 className="footer-heading inline-block sm:block">Contact</h4>
              <address className="not-italic text-brand-black/80 font-medium text-sm space-y-1.5 sm:space-y-2">
                {contact.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="pt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-brand-black hover:text-brand-red transition-colors underline decoration-brand-gray-light underline-offset-2 break-all"
                  >
                    {contact.email}
                  </a>
                </p>
              </address>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-brand-gray-light flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-brand-gray text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Sports AJ. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-brand-black hover:text-brand-red text-sm underline underline-offset-4 decoration-brand-gray-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-brand-black hover:text-brand-red text-sm underline underline-offset-4 decoration-brand-gray-light transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
