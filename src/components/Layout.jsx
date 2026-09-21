import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-black antialiased overflow-x-hidden">
      <Navbar />
      <main key={pathname} className="flex-1 w-full min-w-0 motion-safe:animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
