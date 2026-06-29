import PageHeader from '../components/PageHeader';
import { milestones, company } from '../data/content';

export default function Achievements() {
  return (
    <>
      <PageHeader
        label="How It Started"
        title="Achievements"
        description={`The ${company.showcaseBrand} track record — pioneering sports media rights, digital innovation, and league development across cricket, football, and tennis.`}
        breadcrumb="Achievements"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="space-y-10 sm:space-y-16">
            {milestones.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col lg:flex-row gap-6 sm:gap-10 items-start lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {item.image ? (
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden border-l-4 border-brand-red group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 bg-brand-red text-white font-porsche tracking-porsche uppercase text-[10px] sm:text-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full lg:w-1/3 flex-shrink-0">
                    <div className="w-full h-36 sm:h-48 bg-brand-gray-bg border-l-4 border-brand-red flex items-center justify-center">
                      <span className="font-porsche tracking-porsche text-4xl sm:text-6xl text-brand-red/20 uppercase">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className={`w-full min-w-0 ${item.image ? 'lg:w-1/2' : 'lg:w-2/3'}`}>
                  <span className="font-porsche tracking-porsche text-brand-red text-3xl sm:text-4xl">{item.year}</span>
                  <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-xl sm:text-2xl lg:text-3xl mt-2 mb-3 sm:mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
