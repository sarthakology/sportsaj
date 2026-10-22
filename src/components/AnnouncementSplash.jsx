import { useEffect, useState } from 'react';
import { ministerAnnouncement } from '../content';

const STORAGE_KEY = 'elclasico-announcement-dismissed';

export default function AnnouncementSplash() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* private browsing */
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-white"
      role="dialog"
      aria-modal="true"
      aria-label={`${ministerAnnouncement.name} announces the Kolkata El Clasico`}
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close and enter the website"
        className="absolute top-4 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-black shadow-md border border-brand-gray-light text-2xl leading-none hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors"
      >
        <span aria-hidden="true">×</span>
      </button>
      <img
        src={ministerAnnouncement.image}
        alt={ministerAnnouncement.imageAlt}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
