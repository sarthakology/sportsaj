const icons = {
  media: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
  league: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10l1 5H6l1-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9a3 3 0 106 0" />
    </svg>
  ),
  production: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0120 8.618v6.764a1 1 0 01-1.447.894L15 16M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  digital: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path strokeLinecap="round" d="M11 18h2" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  consultancy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function ServiceIcon({ name, className = '' }) {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <div
      className={`flex items-center justify-center text-brand-red bg-brand-red/5 border border-brand-red/20 ${className}`}
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}
