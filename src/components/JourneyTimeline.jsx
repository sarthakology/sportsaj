import Reveal from './Reveal';

export default function JourneyTimeline({ items }) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-brand-gray-light"
      />

      {items.map((item, index) => (
        <li key={item.id} className="relative">
          <Reveal delay={index * 80}>
            <div className="flex flex-col items-center py-6 sm:py-8 text-center">
              <span className="relative z-10 mb-3 h-2 w-2 rounded-full bg-brand-red" />
              <p className="font-sans font-extralight text-brand-black uppercase tracking-[0.22em] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {item.label}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
