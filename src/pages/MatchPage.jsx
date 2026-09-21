import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { legendaryPlayers, experience, matches, aboutCompany, brandNameYear, players } from '../content';

export default function MatchPage({ city }) {
  const match = matches[city];

  return (
    <>
      <SEO
        title={`${match.title} — ${brandNameYear()}`}
        description={`${match.title}. ${match.date}. ${match.venue}.`}
        breadcrumb={match.title}
      />

      <section className="bg-white pt-24 sm:pt-28 lg:pt-36">
        <div className="page-container mb-8 sm:mb-10">
          <h1 className="section-title text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            {match.title}
          </h1>
          <p className="prose-copy max-w-2xl">
            {match.city}
          </p>
        </div>

        <div className="page-container mb-10 sm:mb-14">
          <div className="overflow-hidden border border-brand-gray-light">
            <img
              src={match.stadiumImage}
              alt={match.venue}
              className="w-full h-48 sm:h-64 md:h-80 object-cover bg-brand-gray-bg"
            />
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-t border-brand-gray-light">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              {players.enabled && (
                <div>
                  <h2 className="section-title text-xl sm:text-2xl mb-4">{legendaryPlayers.heading}</h2>
                  <p className="prose-copy">{legendaryPlayers.body}</p>
                </div>
              )}
              <div>
                <h2 className="section-title text-xl sm:text-2xl mb-4">{experience.heading}</h2>
                <p className="prose-copy">{experience.body}</p>
              </div>
              <div>
                <h2 className="section-title text-xl sm:text-2xl mb-4">{aboutCompany.heading}</h2>
                <p className="prose-copy">{aboutCompany.body}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card card-pad border-t-4 border-t-brand-red">
                <img
                  src={match.logo}
                  alt={match.title}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain mx-auto mb-5"
                />
                <div className="space-y-3">
                  {[
                    { label: 'Match', value: match.title },
                    { label: 'City', value: match.city },
                    { label: 'Date', value: match.date },
                    { label: 'Venue', value: match.venue },
                    { label: 'Fixture', value: 'FC Barcelona Legends vs Real Madrid Leyendas' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between gap-4 text-sm border-b border-brand-gray-light pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-brand-gray uppercase text-xs tracking-wide">{item.label}</span>
                      <span className="text-brand-black font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/buy-tickets" className="btn-primary w-full">
                Buy Tickets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
