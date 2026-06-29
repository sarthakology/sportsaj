import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { digitalStats, digitalServices, company } from '../data/content';

export default function Digital() {
  return (
    <>
      <PageHeader
        label="Sports Digital & Social"
        title="Digital Innovation"
        description="Pioneering digital fan engagement, social media launches, and mobile VOD experiences for sports stars and events worldwide."
        breadcrumb="Digital"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="section-title mb-4 sm:mb-6">Digital Fan Engagement Pioneers</h2>
              <p className="text-brand-gray leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Pioneered the debut of Bharat Ratna Mr. Sachin Tendulkar on digital and social media —
                launching the Official Facebook Page of the Master Blaster, the first ever launch of a
                Cricket superstar on Facebook.
              </p>
              <p className="text-brand-gray leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Our proprietary fan engagement program has helped over 50 leading sports stars and sporting
                events find a connect with their fans. We also launched the first-ever Mobile Video on
                Demand for IPL with Airtel.
              </p>

              <blockquote className="border-l-4 border-brand-red pl-4 sm:pl-6 italic text-brand-black text-sm sm:text-base">
                &ldquo;With inclusion of this undertaking to our portfolio, {company.showcaseBrand} is bringing a
                bouquet of diverse sports to its viewers — introducing new experiences such as French
                Open and Bundesliga.&rdquo;
                <footer className="mt-3 text-brand-red not-italic font-porsche tracking-porsche uppercase text-[10px] sm:text-xs">
                  — Jatin Ahluwalia, Founder & CEO
                </footer>
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
              {digitalStats.map((stat) => (
                <div key={stat.label} className="card p-4 sm:p-8 text-center border-t-4 border-t-brand-red">
                  <div className="font-porsche tracking-porsche text-2xl sm:text-3xl md:text-4xl text-brand-red mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-brand-gray text-[10px] sm:text-xs uppercase tracking-wide leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-12">
            <p className="section-label mb-2">Capabilities</p>
            <h2 className="section-title">Digital Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {digitalServices.map((service) => (
              <div key={service.title} className="card card-pad hover:border-brand-red/40">
                <div className="w-10 h-1 bg-brand-red mb-4 sm:mb-5" />
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase mb-2 sm:mb-3 text-sm sm:text-base leading-snug">
                  {service.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-gray-bg">
        <div className="page-container max-w-4xl text-center">
          <h2 className="font-porsche tracking-wide sm:tracking-porsche text-xl sm:text-2xl text-brand-black uppercase mb-3 sm:mb-4">
            Worked With Leading Sports Stars
          </h2>
          <p className="text-brand-gray mb-5 sm:mb-6 text-sm sm:text-base">
            Sachin Tendulkar, Wasim Akram, Virendra Sehwag, Yuvraj Singh, and many more —
            building digital communities that reach millions of fans worldwide.
          </p>
          <Link to="/media" className="btn-primary !text-xs">See Media Coverage</Link>
        </div>
      </section>
    </>
  );
}
