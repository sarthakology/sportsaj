import PageHeader from '../components/PageHeader';
import { mediaHighlights, company } from '../data/content';

export default function MediaPage() {
  return (
    <>
      <PageHeader
        label="In The Media"
        title="Press & Coverage"
        description={`${company.showcaseBrand} in the news — from IPL sublicensing to FIFA World Cup broadcast rights and digital innovation.`}
        breadcrumb="Media"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mediaHighlights.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={item.link !== '#' ? '_blank' : undefined}
                rel={item.link !== '#' ? 'noopener noreferrer' : undefined}
                className="card card-pad hover:border-brand-red/40 transition-all sm:hover:-translate-y-1 group block min-h-[44px]"
              >
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="px-2 py-1 bg-brand-red/10 text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs truncate">
                    {item.source}
                  </span>
                  {item.link !== '#' && (
                    <svg className="w-4 h-4 flex-shrink-0 text-brand-gray group-hover:text-brand-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm mb-2 sm:mb-3 group-hover:text-brand-red transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container max-w-4xl">
          <div className="card card-pad lg:p-12 border-l-4 border-l-brand-red">
            <p className="section-label mb-3">Featured Quote</p>
            <blockquote className="text-brand-black text-base sm:text-lg leading-relaxed italic mb-4">
              &ldquo;With inclusion of this undertaking to our portfolio, {company.showcaseBrand} is bringing a
              bouquet of diverse sports to its viewers. We are targeting to go beyond the conventional
              sports loved in India; introducing new experiences such as French Open in the past and
              now the Bundesliga.&rdquo;
            </blockquote>
            <footer className="font-porsche tracking-porsche text-brand-red uppercase text-xs sm:text-sm">
              — Jatin Ahluwalia, Founder & CEO
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}
