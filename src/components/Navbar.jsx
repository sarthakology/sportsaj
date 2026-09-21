import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../content';

const linkHover =
  'relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:after:scale-x-100';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-brand-gray-light pt-safe-top motion-safe:animate-slide-down">
      <div className="page-container">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <Link
            to="/"
            className={`flex items-center gap-2 sm:gap-3 min-w-0 transition-all duration-500 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <img
              src="/assets/logo-sportsaj.png"
              alt="Sports AJ"
              className="h-8 sm:h-9 lg:h-11 w-auto max-w-[140px] sm:max-w-none object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-0.5">
            {navItems.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 lg:px-3 py-2 text-xs font-porsche tracking-porsche uppercase transition-all duration-500 rounded ${linkHover} ${
                    isActive
                      ? 'text-brand-red border-b-2 border-brand-red after:scale-x-0'
                      : 'text-brand-black hover:text-brand-red'
                  } ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`
                }
                style={{ transitionDelay: `${140 + index * 80}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/buy-tickets"
            className={`hidden xl:inline-flex btn-primary !py-2.5 !px-6 !text-xs !w-auto transition-all duration-500 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Buy Tickets
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`xl:hidden p-2.5 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-brand-black transition-all duration-500 ${
              entered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="xl:hidden fixed inset-0 top-14 sm:top-16 bg-white/60 z-[-1] motion-safe:animate-fade-in"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="xl:hidden bg-white border-t border-brand-gray-light shadow-lg max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto motion-safe:animate-slide-up">
            <div className="page-container py-3 space-y-0.5">
              {navItems.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center min-h-[48px] px-4 py-3 font-porsche tracking-porsche uppercase text-sm rounded-lg transition-colors ${
                      isActive ? 'text-brand-red bg-brand-red/5' : 'text-brand-black hover:text-brand-red hover:bg-brand-gray-bg'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/buy-tickets"
                className="flex items-center justify-center min-h-[48px] mt-2 btn-primary !text-xs"
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
