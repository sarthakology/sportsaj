import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function MilestoneCard({ item }) {
  const card = (
    <div className={`card overflow-hidden group h-full max-w-2xl mx-auto ${item.link ? 'hover:border-brand-red/40 transition-colors' : ''}`}>
      {item.image ? (
        <div className={`h-48 sm:h-56 overflow-hidden ${item.imageFit === 'contain' ? 'bg-white' : ''}`}>
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full transition-transform duration-500 ${
              item.imageFit === 'contain'
                ? 'object-contain p-4'
                : 'object-cover group-hover:scale-105'
            }`}
          />
        </div>
      ) : (
        <div className="h-48 sm:h-56 bg-brand-gray-bg border-b border-brand-gray-light flex items-center justify-center">
          <span className="font-porsche tracking-porsche text-4xl sm:text-5xl text-brand-red/20 uppercase">
            {item.tag}
          </span>
        </div>
      )}
      <div className="card-pad">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <span className="font-porsche tracking-porsche text-brand-red text-lg sm:text-xl">{item.year}</span>
          <span className="px-2 py-0.5 bg-brand-red/10 text-brand-red text-[10px] sm:text-xs font-porsche tracking-porsche uppercase">
            {item.tag}
          </span>
        </div>
        <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-base sm:text-lg mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
        {item.link && (
          <p className="text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs mt-4 group-hover:underline">
            Read Full Story →
          </p>
        )}
      </div>
    </div>
  );

  if (item.link) {
    return <Link to={item.link} className="block">{card}</Link>;
  }
  return card;
}

export default function MilestoneCarousel({ items }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const paused = useRef(false);

  const goNext = () => setCurrent((prev) => (prev + 1) % items.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) {
        setCurrent((prev) => (prev + 1) % items.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    paused.current = true;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    setTimeout(() => { paused.current = false; }, 3000);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.title} className="w-full flex-shrink-0 px-2 sm:px-4">
              <MilestoneCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:translate-x-0 w-10 h-10 sm:w-11 sm:h-11 bg-white border border-brand-gray-light shadow-sm flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-0 w-10 h-10 sm:w-11 sm:h-11 bg-white border border-brand-gray-light shadow-sm flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? 'w-6 bg-brand-red' : 'w-2 bg-brand-gray-light hover:bg-brand-red/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
