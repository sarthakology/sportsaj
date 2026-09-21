import { brandNameUpper, brandWordUpper, site } from '../content';

const variants = {
  stacked: 'stacked',
  inline: 'inline',
  year: 'year',
};

export default function BrandLockup({ variant = 'stacked', className = '' }) {
  if (variant === variants.inline) {
    return (
      <span className={`font-sans uppercase tracking-[0.18em] ${className}`}>
        {brandNameUpper()}
      </span>
    );
  }

  return (
    <span className={`block text-center ${className}`}>
      <span className="block font-sans font-extralight text-brand-black uppercase tracking-[0.18em] sm:tracking-[0.22em] text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05]">
        {brandWordUpper()}
      </span>
      <span className="mt-5 sm:mt-6 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
        <img
          src="/assets/fc-barcelona.svg"
          alt="FC Barcelona"
          className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
        />
        <span className="font-sans font-light text-brand-black uppercase tracking-[0.28em] sm:tracking-[0.36em] text-lg sm:text-2xl md:text-3xl lg:text-4xl">
          {variant === 'year' ? `India Tour ${site.year}` : 'India Tour'}
        </span>
        <img
          src="/assets/real-madrid.svg"
          alt="Real Madrid"
          className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
        />
      </span>
    </span>
  );
}
