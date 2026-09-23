import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { newsItems, site, brandNameYear } from '../content';

export default function InTheNews() {
  const featured = newsItems[0];

  return (
    <>
      <SEO
        title="Press & Coverage"
        description={`Press & Coverage — ${site.brand} and ${brandNameYear()}.`}
        breadcrumb="Press & Coverage"
      />
      <PageHeader
        label={site.brand}
        title="Press & Coverage"
        breadcrumb="In The News"
      />
      <section className="section-py bg-white">
        <div className="page-container">
          <Reveal>
            <Link
              to={featured.path}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              <div className="lg:col-span-5">
                <div className="overflow-hidden border border-brand-gray-light bg-white">
                  <img
                    src={featured.image}
                    alt={`${featured.source} — ${featured.title}`}
                    className="w-full group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="section-label mb-3">{featured.source}</p>
                <p className="text-brand-gray text-xs mb-4">{featured.date}</p>
                <h2 className="font-sans font-light text-brand-black uppercase tracking-[0.12em] text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight group-hover:text-brand-red transition-colors">
                  {featured.title}
                </h2>
                <p className="prose-copy text-base sm:text-lg mb-6">{featured.excerpt}</p>
                <p className="text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs">
                  Read story →
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
