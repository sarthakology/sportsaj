import { Link } from 'react-router-dom';

export default function PageHeader({ label, title, description, breadcrumb }) {
  return (
    <section className="relative bg-brand-charcoal pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-brand-gray rounded-full blur-3xl" />
      </div>

      <div className="relative page-container">
        {breadcrumb && (
          <nav className="flex items-center gap-2 mb-4 sm:mb-6 font-porsche tracking-wide sm:tracking-porsche uppercase text-[10px] sm:text-xs text-white/60 flex-wrap">
            <Link to="/" className="on-dark-link">Home</Link>
            <span className="text-white/40">/</span>
            <span className="on-dark-link-active">{breadcrumb}</span>
          </nav>
        )}

        {label && <p className="on-dark-label mb-2 sm:mb-3">{label}</p>}
        <h1 className="font-porsche tracking-wide sm:tracking-porsche text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-3 sm:mb-4 leading-tight break-words">
          {title}
        </h1>
        {description && (
          <p className="on-dark-body text-base sm:text-lg max-w-2xl">{description}</p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red" />
    </section>
  );
}
