import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Our Journey', path: '/our-journey' },
  { label: 'About', path: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-brand-red text-brand-black pb-safe-bottom">
      <div className="page-container py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="lg:col-span-2 text-center sm:text-left">
            <img
              src="/assets/logo-sportsaj.png"
              alt="Sports AJ"
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-5 mx-auto sm:mx-0"
            />
            <p className="text-brand-gray text-sm leading-relaxed max-w-md mb-4 sm:mb-6 mx-auto sm:mx-0">
              El Clásico Legends matches are happening at a larger scale than ever done in India.
            </p>
            <p className="text-brand-gray text-xs">Sports AJ</p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="footer-heading inline-block sm:block">Navigation</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-gray hover:text-brand-red text-sm transition-colors inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="footer-heading inline-block sm:block">Contact</h4>
            <address className="not-italic text-brand-gray text-sm space-y-1.5 sm:space-y-2">
              <p>Unit No. 001, BPTP, Park Centra, Jal Vayu Vihar</p>
              <p>Sector 31, Gurugram, Haryana 122001</p>
              <p>INDIA</p>
              <p className="pt-2">
                <a
                  href="mailto:info@sportsaj.com"
                  className="text-brand-black hover:text-brand-red transition-colors underline decoration-brand-gray-light underline-offset-2 break-all"
                >
                  info@sportsaj.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-brand-gray-light flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-brand-gray text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Sports AJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
