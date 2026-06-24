import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, company } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const isHome = location.pathname === '/';
  const solidNav = scrolled || !isHome || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe-top ${
        solidNav
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-brand-charcoal/10'
          : 'bg-brand-black/70 backdrop-blur-sm md:bg-transparent'
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 sm:h-9 lg:h-11 w-auto max-w-[140px] sm:max-w-none object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-2.5 lg:px-3 py-2 text-xs font-porsche tracking-porsche uppercase transition-colors rounded ${
                    isActive
                      ? solidNav || !isHome
                        ? 'text-brand-red border-b-2 border-brand-red'
                        : 'text-white border-b-2 border-brand-red-light'
                      : solidNav || !isHome
                        ? 'text-brand-charcoal hover:text-brand-red'
                        : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden xl:inline-flex btn-primary !py-2.5 !px-6 !text-xs !w-auto"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`xl:hidden p-2.5 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              solidNav ? 'text-brand-charcoal' : 'text-white'
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
            className="xl:hidden fixed inset-0 top-14 sm:top-16 bg-black/40 z-[-1]"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="xl:hidden bg-white border-t border-brand-gray-light shadow-lg max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <div className="page-container py-3 space-y-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center min-h-[48px] px-4 py-3 font-porsche tracking-porsche uppercase text-sm rounded-lg transition-colors ${
                      isActive ? 'text-brand-red bg-brand-red/5' : 'text-brand-charcoal hover:text-brand-red hover:bg-brand-gray-bg'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="flex items-center justify-center min-h-[48px] mt-2 btn-primary !text-xs"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
