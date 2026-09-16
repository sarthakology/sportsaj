import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const city = 'Kolkata';
const venue = 'Salt Lake Stadium';
const date = '25 November 2026';
const kickoff = '7:30 PM IST';
const gatesOpen = '5:30 PM IST';
const logo = '/assets/gujarat-el-clasico.png';
const stadiumImage = '/assets/stadium-kolkata.jpg';

const pageHeading = 'El Clásico Legends — Kolkata';
const pageSubheading =
  'Barça Legends vs Real Madrid Leyendas at Salt Lake Stadium. Football\'s greatest rivalry comes to the City of Joy.';

const aboutVenue =
  'Salt Lake Stadium in Kolkata — one of Asia\'s largest football venues — will host El Clásico Legends as the tour continues east. A historic stadium ready for an unforgettable night of football.';

const matchInfo = [
  { label: 'Date', value: date },
  { label: 'Kick-off', value: kickoff },
  { label: 'Gates Open', value: gatesOpen },
  { label: 'Venue', value: venue },
  { label: 'City', value: city },
  { label: 'Format', value: 'Exhibition Match' },
];

const highlights = [
  'Barça Legends vs Real Madrid Leyendas',
  'El Clásico Legends at Salt Lake Stadium',
  'Premium matchday experience for Kolkata football fans',
  'Official El Clásico Legends merchandise on site',
];

export default function Kolkata() {
  return (
    <>
      <SEO
        title={`${city} — El Clásico India Tour`}
        description={`El Clásico Legends match in ${city} at ${venue} on ${date}.`}
        breadcrumb={city}
      />

      <section className="bg-white pt-24 sm:pt-28 lg:pt-36">
        <div className="page-container mb-8 sm:mb-10">
          <h1 className="section-title text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            {pageHeading}
          </h1>
          <p className="text-brand-gray text-sm sm:text-base leading-relaxed max-w-2xl">
            {pageSubheading}
          </p>
        </div>

        <div className="page-container mb-10 sm:mb-14">
          <div className="overflow-hidden border border-brand-gray-light">
            <img
              src={stadiumImage}
              alt={`${venue} stadium`}
              className="w-full h-48 sm:h-64 md:h-80 object-cover bg-brand-gray-bg"
            />
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-t border-brand-gray-light">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="section-label mb-2">About The Match</p>
                <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-4">
                  Kolkata El Clásico
                </h2>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  {aboutVenue}
                </p>
              </div>

              <div>
                <p className="section-label mb-2">Match Highlights</p>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                      <span className="text-brand-black text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card card-pad border-t-4 border-t-brand-red">
                <img
                  src={logo}
                  alt="Gujarat El Clásico"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain mx-auto mb-5"
                />
                <div className="space-y-3">
                  {matchInfo.map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 text-sm border-b border-brand-gray-light pb-2 last:border-0 last:pb-0">
                      <span className="text-brand-gray uppercase text-xs tracking-wide">{item.label}</span>
                      <span className="text-brand-black font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/buy-now" className="btn-primary w-full">
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
