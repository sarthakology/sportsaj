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
      <span className="mt-3 sm:mt-4 block font-sans font-normal text-brand-gray uppercase tracking-[0.38em] sm:tracking-[0.48em] text-[11px] sm:text-sm">
        {variant === 'year' ? `India Tour ${site.year}` : 'India Tour'}
      </span>
    </span>
  );
}
