import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

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
