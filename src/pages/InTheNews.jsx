import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { newsItems, site, seoCopy } from '../content';

function StoryLink({ item, className, children }) {
  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={item.path} className={className}>
      {children}
    </Link>
  );
}

export default function InTheNews() {
  const featured = newsItems[0];
  const more = newsItems.slice(1);

  return (
    <>
      <SEO
        title="Press & Coverage"
        description={seoCopy.pressDescription}
        breadcrumb="Press & Coverage"
        image={featured.image}
        imageAlt={featured.title}
      />
      <PageHeader
        label={site.brand}
        title="Press & Coverage"
        breadcrumb="Press & Coverage"
      />
      <section className="section-py bg-white">
        <div className="page-container">
          <Reveal>
            <StoryLink
              item={featured}
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
            </StoryLink>
          </Reveal>

          <div className="mt-12 sm:mt-16 border-t border-brand-gray-light">
            {more.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <StoryLink
                  item={item}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-8 items-center py-8 sm:py-10 border-b border-brand-gray-light"
                >
                  {item.image ? (
                    <div className="sm:col-span-4 overflow-hidden border border-brand-gray-light bg-white">
                      <img
                        src={item.image}
                        alt={`${item.source} — ${item.title}`}
                        className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  ) : null}
                  <div className={item.image ? 'sm:col-span-8' : 'sm:col-span-12'}>
                    <p className="section-label mb-3">{item.source}</p>
                    <p className="text-brand-gray text-xs mb-3">{item.date}</p>
                    <h2 className="font-sans font-light text-brand-black uppercase tracking-[0.12em] text-xl sm:text-2xl mb-3 leading-tight group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h2>
                    <p className="prose-copy text-base sm:text-lg mb-4 max-w-3xl">{item.excerpt}</p>
                    <p className="text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs">
                      Read story →
                    </p>
                  </div>
                </StoryLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
