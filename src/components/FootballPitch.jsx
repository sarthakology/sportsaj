import { Link } from 'react-router-dom';
import EventIdentity from './EventIdentity';
import Reveal from './Reveal';

function PitchBackground() {
  return (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover origin-center scale-y-[0.72] pointer-events-none opacity-55 [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_78%,transparent_100%)]"
        src="/assets/pitch-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent"
        aria-hidden="true"
      />
    </>
  );
}

function Half({ event, side, size = 'lg' }) {
  const isLeft = side === 'left';
  const isCenter = side === 'center';

  return (
    <Link
      to={event.path}
      className={`relative z-10 min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-10 lg:py-16 group ${
        isCenter ? '' : isLeft ? 'lg:items-end lg:pr-20 xl:pr-24' : 'lg:items-start lg:pl-20 xl:pl-24'
      }`}
    >
      <div className="relative">
        <Reveal from={isCenter ? 'up' : isLeft ? 'left' : 'right'} delay={isCenter ? 80 : isLeft ? 80 : 200}>
          <EventIdentity event={event} size={size} cityPosition="top" hover />
          <span className="relative mt-4 mx-auto block w-8 h-px bg-brand-red" />
        </Reveal>
      </div>
    </Link>
  );
}

export default function FootballPitch({ left, right, event }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <PitchBackground />

      {event ? (
        <div className="relative min-h-screen">
          <Half event={event} side="center" size="xl" />
        </div>
      ) : (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <Half event={left} side="left" />
          <Half event={right} side="right" />
        </div>
      )}
    </div>
  );
}
