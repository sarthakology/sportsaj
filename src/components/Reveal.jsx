import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0, from = 'up' }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShow(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden =
    from === 'left'
      ? '-translate-x-8'
      : from === 'right'
        ? 'translate-x-8'
        : 'translate-y-8';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        show ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hidden}`
      } ${className}`}
      style={{ transitionDelay: show ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
