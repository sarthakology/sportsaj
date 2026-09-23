export default function FounderCard({ founder }) {
  const initials = founder.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="border border-brand-gray-light bg-white p-6 sm:p-8 text-center">
      {founder.image ? (
        <img
          src={founder.image}
          alt={founder.name}
          className="mx-auto mb-6 h-40 w-40 sm:h-48 sm:w-48 object-cover object-top"
        />
      ) : (
        <div
          className="mx-auto mb-6 flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center bg-brand-gray-bg text-brand-black/30 font-sans font-extralight text-4xl tracking-[0.2em]"
          aria-hidden="true"
        >
          {initials}
        </div>
      )}

      <p className="section-label mb-2">{founder.role}</p>
      <h3 className="font-sans font-light text-brand-black uppercase tracking-[0.16em] text-lg sm:text-xl mb-3">
        {founder.name}
      </h3>
      <p className="prose-copy">{founder.bio}</p>

      {founder.highlights?.length > 0 && (
        <ul className="mt-5 space-y-2 text-brand-black/80 font-medium text-sm">
          {founder.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
