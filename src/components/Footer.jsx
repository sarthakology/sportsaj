import { Link } from 'react-router-dom';
import { company, navLinks } from '../data/content';

export default function Footer() {
  const footerLinks = navLinks.filter((l) => l.path !== '/');

  return (
    <footer className="bg-brand-black text-white pb-safe-bottom">
      <div className="h-1 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red" />

      <div className="page-container py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="lg:col-span-2 text-center sm:text-left">
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-5 brightness-110 mx-auto sm:mx-0"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-4 sm:mb-6 mx-auto sm:mx-0">
              {company.showcaseIntro}
            </p>
            <p className="text-white/50 text-xs">
              {company.legalName}
              <br />
              Showcasing {company.showcaseBrand}
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="footer-heading inline-block sm:block">Navigation</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 sm:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/65 hover:text-white text-sm transition-colors inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="footer-heading inline-block sm:block">Contact</h4>
            <address className="not-italic text-white/65 text-sm space-y-1.5 sm:space-y-2">
              <p>{company.address.line1}</p>
              <p>{company.address.line2}</p>
              <p>{company.address.country}</p>
              <p className="pt-2">
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors underline decoration-white/30 underline-offset-2 break-all"
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-[10px] sm:text-xs font-porsche tracking-wide sm:tracking-porsche uppercase">
            Showcasing {company.showcaseBrand}
          </p>
        </div>
      </div>
    </footer>
  );
}
