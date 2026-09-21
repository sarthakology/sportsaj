import { brandWord, eventName } from '../content';

const sizes = {
  sm: 'w-20 h-20 sm:w-24 sm:h-24',
  md: 'w-28 h-28 sm:w-36 sm:h-36',
  lg: 'w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72',
};

export default function EventIdentity({
  event,
  size = 'lg',
  showLogo = true,
  showCity = true,
  showName = true,
  cityPosition = 'top',
}) {
  const name = eventName(event);

  return (
    <div className="flex flex-col items-center text-center">
      {showCity && cityPosition === 'top' && (
        <p className="font-sans font-medium text-brand-black uppercase tracking-[0.45em] text-[10px] sm:text-xs mb-3">
          {event.city}
        </p>
      )}

      {showLogo && (
        <div className={`relative ${showName || cityPosition === 'bottom' ? 'mb-6 sm:mb-8' : ''}`}>
          <img
            src={event.logo}
            alt={name}
            className={`relative ${sizes[size]} object-contain [filter:drop-shadow(0_4px_10px_rgba(0,0,0,0.18))]`}
          />
        </div>
      )}

      {showName && (
        <h2 className="font-sans font-semibold text-brand-black uppercase tracking-[0.18em] text-xl sm:text-2xl lg:text-3xl leading-tight [text-shadow:0_0_18px_#fff,0_0_36px_#fff]">
          <span className="block">{event.region}</span>
          <span className="block font-light tracking-[0.22em] mt-1">{brandWord()}</span>
        </h2>
      )}

      {showCity && cityPosition === 'bottom' && (
        <p className="mt-3 font-sans font-medium text-brand-red uppercase tracking-[0.45em] text-[10px] sm:text-xs">
          {event.city}
        </p>
      )}
    </div>
  );
}
