import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { newsItems, site, brandNameYear } from '../content';

export default function InTheNews() {
  return (
    <>
      <SEO
        title="In The News"
        description={`In The News — ${site.brand} and ${brandNameYear()}.`}
        breadcrumb="In The News"
      />
      <PageHeader
        label="Sports AJ"
        title="In The News"
        breadcrumb="In The News"
      />
      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newsItems.map((item, index) => (
              <Reveal key={item.slug} delay={index * 100}>
                <Link
                  to={item.path}
                  className="card overflow-hidden group block h-full hover:border-brand-red/40 transition-all sm:hover:-translate-y-1"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-brand-gray-bg">
                    <img
                      src={item.image}
                      alt={`${item.source} — ${item.title}`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="card-pad border-t-4 border-t-brand-red">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="section-label">{item.source}</span>
                      <span className="text-brand-gray text-xs">{item.date}</span>
                    </div>
                    <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-base sm:text-lg mb-2 leading-snug group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-brand-gray text-sm leading-relaxed mb-4">{item.excerpt}</p>
                    <p className="text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs">
                      Read story →
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
