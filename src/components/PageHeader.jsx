import { Link } from 'react-router-dom';

export default function PageHeader({ label, title, description, breadcrumb }) {
  return (
    <section className="relative bg-white border-b border-brand-gray-light pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative page-container">
        {breadcrumb && (
          <nav className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="page-breadcrumb-active">{breadcrumb}</span>
          </nav>
        )}

        {label && <p className="section-label mb-2 sm:mb-3">{label}</p>}
        <h1 className="section-title mb-3 sm:mb-4 break-words">
          {title}
        </h1>
        {description && (
          <p className="text-brand-gray text-base sm:text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />
    </section>
  );
}
