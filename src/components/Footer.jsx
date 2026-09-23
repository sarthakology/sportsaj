import { Link } from 'react-router-dom';
import { navItems, site, contact } from '../content';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="relative bg-white text-brand-black pb-safe-bottom">
      <div className="h-1 bg-brand-red origin-left motion-safe:animate-scale-x" />
      <div className="page-container py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <Reveal className="text-center sm:text-left" from="left">
            <img
              src="/assets/logo-sportsaj.png"
              alt="Sports AJ"
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-5 mx-auto sm:mx-0"
            />
            <p className="text-brand-black/80 font-medium text-sm leading-relaxed max-w-md mb-4 sm:mb-6 mx-auto sm:mx-0">
              {site.welcome}
            </p>
            <p className="text-brand-gray text-xs">{site.legalName}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="text-center sm:text-left">
              <h4 className="footer-heading inline-block sm:block">Navigation</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 sm:space-y-2">
                {navItems.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-brand-gray hover:text-brand-red text-sm transition-all duration-300 inline-block py-1 sm:hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/buy-tickets"
                    className="text-brand-gray hover:text-brand-red text-sm transition-all duration-300 inline-block py-1 sm:hover:translate-x-1"
                  >
                    Buy Tickets
                  </Link>
                </li>
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
