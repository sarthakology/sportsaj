import PageHeader from '../components/PageHeader';
import {
  leadership,
  founderEducation,
  founderCareer,
  careerLogos,
  company,
} from '../data/content';

export default function Team() {
  return (
    <>
      <PageHeader
        label="Leadership Team"
        title="Our Team"
        description={`The leadership behind ${company.showcaseBrand} — avid entrepreneurs and sports industry professionals driving innovation in global sports media.`}
        breadcrumb="Team"
      />

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {leadership.map((person) => (
              <div key={person.name} className="card card-pad lg:p-10 border-t-4 border-t-brand-red overflow-hidden">
                <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 overflow-hidden rounded-lg shadow-md ring-2 ring-brand-gray-light ring-offset-2">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-charcoal uppercase text-xl sm:text-2xl">
                      {person.name}
                    </h3>
                    <p className="inline-block mt-2 mb-3 sm:mb-4 px-3 py-1 bg-brand-red/10 text-brand-red border border-brand-red/20 font-porsche tracking-porsche uppercase text-[10px] sm:text-xs">
                      {person.role}
                    </p>
                    <p className="text-brand-gray text-sm leading-relaxed mb-4">{person.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {person.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2 py-1 bg-brand-gray-bg text-brand-charcoal text-xs border border-brand-gray-light"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <div className="card card-pad lg:p-10">
              <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-charcoal uppercase text-lg sm:text-xl mb-5 sm:mb-6">
                Founder&apos;s Profile
              </h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {founderEducation.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-red flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                    <span className="text-brand-charcoal text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
                            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 border-t border-brand-gray-light">
                {careerLogos.map((logo) => (
                  <div key={logo} className="p-2 bg-brand-gray-bg border border-brand-gray-light">
                    <img
                      src={`/assets/career/${logo}`}
                      alt="Organization"
                      className="h-6 sm:h-7 w-auto object-contain opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="card card-pad lg:p-10">
              <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-charcoal uppercase text-lg sm:text-xl mb-5 sm:mb-6">
                Professional Career
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {founderCareer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-red flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                    <span className="text-brand-charcoal text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>


            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-charcoal">
        <div className="page-container max-w-3xl text-center">
          <p className="on-dark-label justify-center mb-3 sm:mb-4">Thought Leadership</p>
          <p className="on-dark-body">
            Driving innovation in sports media, digital fan engagement, and league development —
            {company.showcaseBrand} continues to shape the future of sports entertainment across South Asia and beyond.
          </p>
        </div>
      </section>
    </>
  );
}
