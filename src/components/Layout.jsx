import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { captureUTMData } from '../utils/utm';

export default function Layout() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    captureUTMData();
  }, [pathname, search]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-black antialiased overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-2 focus:left-2 focus:bg-brand-red focus:text-white focus:px-4 focus:py-2 focus:font-bold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" key={pathname} className="flex-1 w-full min-w-0 motion-safe:animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
