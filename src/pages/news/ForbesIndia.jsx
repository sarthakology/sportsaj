import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import { story, journey, newsItems, founders } from '../../content';

const item = newsItems[0];

const highlights = [
  {
    value: '15+',
    label: 'Years in Sports Media',
    description: 'From IPL mobile rights in 2010 to global sports properties across cricket, football, and tennis.',
  },
  {
    value: '375M+',
    label: 'TV Homes Reached',
    description: 'Sub-continental IPL broadcast rights across Pakistan, Bangladesh, and Sri Lanka.',
  },
  {
    value: '6',
    label: 'Nations — FIFA 2014',
    description: 'FIFA World Cup broadcast experience across six South Asian markets.',
  },
  {
    value: '28M',
    label: 'Sachin FB Followers',
    description: 'Built the world’s largest online cricket community from scratch for Sachin Tendulkar.',
  },
];

const storyPoints = [
  story.buildingBeyond,
  story.globalFootprint,
  story.tour,
];

export default function ForbesIndia() {
  return (
    <>
      <SEO
        title={`${item.title} — ${item.source}`}
        description={item.excerpt}
        breadcrumb={item.source}
        image={item.image}
        imageAlt={item.title}
        type="article"
        article={{
          headline: item.title,
          datePublished: item.dateISO,
          source: item.source,
        }}
      />
      <PageHeader
        label="Press & Coverage"
        title="Forbes India"
        description={journey.foundersLine}
        breadcrumb="Forbes India"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <div className="border border-brand-gray-light bg-white">
                <img
                  src={founders.image}
                  alt={founders.imageAlt}
                  className="w-full"
                />
                <div className="p-6 border-t border-brand-gray-light">
                  <p className="section-label mb-2">{item.source}</p>
                  <p className="text-brand-gray text-xs mb-2">{item.date}</p>
                  <h2 className="font-sans font-light text-brand-black uppercase tracking-[0.14em] text-xl mb-2">
                    {item.title}
                  </h2>
                  <p className="prose-copy">{item.excerpt}</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={120}>
              <p className="section-label mb-3">The story</p>
              <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-6">
                Press & Coverage
              </h2>
              <div className="space-y-10">
                {storyPoints.map((point) => (
                  <article key={point.heading}>
                    <h3 className="font-sans font-light text-brand-black uppercase tracking-[0.16em] text-lg sm:text-xl mb-3">
                      {point.heading}
                    </h3>
                    <p className="prose-copy text-base sm:text-lg">{point.body}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container">
          <Reveal>
            <div className="text-center mb-8 sm:mb-10">
              <p className="section-label mb-2">By The Numbers</p>
              <h2 className="section-title text-xl sm:text-2xl md:text-3xl">The Journey</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="bg-white border border-brand-gray-light p-6 sm:p-8 text-center">
                  <div className="font-sans font-extralight text-3xl sm:text-4xl text-brand-black mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans uppercase tracking-[0.16em] text-brand-black text-xs sm:text-sm mb-2">
                    {stat.label}
                  </div>
                  <p className="prose-copy text-xs">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-t border-brand-gray-light">
        <div className="page-container text-center">
          <Reveal>
            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/in-the-news" className="btn-outline">In The News</Link>
              <Link to="/our-journey" className="btn-primary">Our Journey</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
