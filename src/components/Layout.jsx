import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-gray-bg text-brand-charcoal antialiased overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full min-w-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
