import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const leadership = [
  {
    name: 'Jatin Ahluwalia',
    role: 'Founder & CEO',
    image: '/assets/jatin.jpg',
    bio: 'An avid entrepreneur and innovator with proven track record at STAR TV, Ericsson, IBM, and Accenture. Credited with sports value proposition deals for IPL, Cricket Asia Cup, FIFA World Cup 2014, US Open, and French Open.',
    highlights: ['STAR TV', 'IBM', 'Accenture', 'Harvard Business School'],
  },
  {
    name: 'Abhishek Saklani',
    role: 'Sports Media Professional',
    image: '/assets/abhishek.jpg',
    bio: 'Over a decade in sports industry. Youngest Sports Producer of Indian Media at 23. Instrumental in ICC/FIFA World Cup Bidding 2014, EURO 2012, IPL media syndication (2012-2017), and French Open (2012-2015).',
    highlights: ['ESPN', 'ZEE Media', 'SAHARA TV', 'NEWS24'],
  },
];

const founderEducation = [
  'Delhi University Graduate',
  'British Chevening Scholarship — Leeds University Business School (LUBS)',
  'Accenture Partners Program at Harvard Business School',
  'Executive programs at London Business School / Duke',
];

const founderCareer = [
  'Leading Cricket entrepreneur and general management professional',
  'Held several leadership positions at globally acclaimed organizations',
  'Accomplished in building brand equity, growth strategies and business transformation',
  'Launched brands and nurtured businesses across media and technology',
  'Global exposure with local expertise in sports and entertainment',
];

const careerLogos = [
  'image49.png', 'image50.png', 'image51.png', 'image52.png', 'image53.png',
  'image54.png', 'image55.png', 'image56.jpeg', 'image57.jpeg', 'image58.jpeg',
  'image59.jpeg', 'image60.png', 'image61.png', 'image62.png',
];

export default function Team() {
  return (
    <>
      <SEO
        title="Leadership Team"
        description="Meet the Seven3Sports leadership team — sports media entrepreneurs with experience at STAR TV, ESPN, IBM, and Accenture."
        breadcrumb="Team"
      />
      <PageHeader
        label="Leadership Team"
        title="Our Team"
        description="The leadership behind Seven3Sports — avid entrepreneurs and sports industry professionals driving innovation in global sports media."
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
                    <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-xl sm:text-2xl">
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
                          className="px-2 py-1 bg-brand-gray-bg text-brand-black text-xs border border-brand-gray-light"
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
              <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-5 sm:mb-6">
                Founder&apos;s Profile
              </h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {founderEducation.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-red flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                    <span className="text-brand-black text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 border-t border-brand-gray-light">
                {careerLogos.map((logo, index) => (
                  <div key={logo} className="p-2 bg-brand-gray-bg border border-brand-gray-light">
                    <img
                      src={`/assets/career/${logo}`}
                      alt={`${leadership[0].name} career organization logo ${index + 1}`}
                      className="h-6 sm:h-7 w-auto object-contain opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="card card-pad lg:p-10">
              <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-5 sm:mb-6">
                Professional Career
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {founderCareer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-red flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                    <span className="text-brand-black text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-gray-bg border-t border-brand-gray-light">
        <div className="page-container max-w-3xl text-center">
          <p className="section-label justify-center mb-3 sm:mb-4">Thought Leadership</p>
          <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
            Driving innovation in sports media, digital fan engagement, and league development —
            Seven3Sports continues to shape the future of sports entertainment across South Asia and beyond.
          </p>
        </div>
      </section>
    </>
  );
}
