import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-black antialiased overflow-x-hidden">
      <SEO pathname={pathname} />
      <Navbar />
      <main className="flex-1 w-full min-w-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
