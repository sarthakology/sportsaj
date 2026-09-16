import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import MilestoneCarousel from '../components/MilestoneCarousel';

const introHeading = 'Real Madrid Leyendas Rights';
const introDescription =
  'Sports AJ holds the official rights to bring Real Madrid Leyendas to India as part of the El Clásico Legends India Tour — one of the most iconic rivalries in football history, live on Indian soil for the first time at this scale.';
const realMadridDetails = [
  'Exclusive rights holder for Real Madrid Leyendas appearances in India',
  'Barça Legends vs Real Madrid Leyendas — El Clásico comes to Ahemdabad and Kolkata',
  'Legends of the game — former Galácticos and club icons on the pitch',
  'A first-of-its-kind exhibition football experience for Indian fans',
  'Tickets and fan engagement managed by Sports AJ',
];

const aboutText =
  'Seven3Sports is run by a group of avid entrepreneurs and sports industry professionals. We have served prestigious cricket boards like BCCI and New Zealand, and maintain working relations with top broadcasters including Star TV, Sony MSM, ESPN, Supersports, Geo TV, Channel 9, Sky Sports, NDTV, and UTV. Our in-house expertise spans large sports program management, media rights, sports production, and league development.';

const credentials = [
  { value: '375M+', label: 'TV Homes Reached via IPL' },
  { value: '28M', label: 'Sachin FB Followers Built' },
  { value: '6', label: 'Nations — FIFA World Cup 2014' },
  { value: '11', label: 'Broadcasters Across 6 Nations' },
  { value: '50+', label: 'Sports Stars Engaged' },
  { value: '100+', label: 'Sports Shows Produced' },
];

const capabilities = [
  'Media rights management across TV, mobile, and digital',
  'League development and franchise structuring',
  'Broadcast-level sports production',
  'Digital fan engagement and social launches',
  'Event management and ticket operations',
  'Sports infrastructure consultancy',
];

const journeyHighlights = [
  {
    title: 'Forbes India — FILA Cover Feature',
    description: 'Jatin Ahluwalia and Abhishek Saklani featured on the cover of Forbes India Leadership Awards 2026 — "A Mind of Their Own" and "The Billion Dollar Kick!"',
    source: 'Forbes India',
    link: '/forbes-india',
    internal: true,
  },
  {
    title: 'IPL Sub-continental Broadcast',
    description: 'Enabled the Indian Premier League to reach over 375 million TV homes across Pakistan, Bangladesh, and Sri Lanka.',
    source: 'Economic Times',
    link: 'https://economictimes.indiatimes.com/industry/media/entertainment/seven3sports-bags-sub-licence-for-ipl-in-pakistan-sl-bangladesh/articleshow/20312343.cms',
  },
  {
    title: 'FIFA 2014 World Cup Partnership',
    description: 'Partnered with FIFA through MSM to broadcast across six Asian countries — a first for the region.',
    source: 'Business Standard',
    link: 'https://www.business-standard.com/article/pti-stories/seven3sports-gets-fifa-broadcast-rights-for-neighbouring-114061600891_1.html',
  },
  {
    title: 'Nepal Premier League Rights',
    description: 'Cricket Association of Nepal sold NPL rights to Seven3Sports for Rs 420 million over 10 years as Strategic and Commercial Partner.',
    source: 'Himalayan News Service',
    link: '#',
  },
  {
    title: 'Sachin Tendulkar Digital Launch',
    description: 'Launched the Official Facebook Page of Sachin Tendulkar — built from scratch to 28 million followers, the world\'s largest online cricket community.',
    source: 'OMG Sachin',
    link: 'http://omgsachin.blogspot.com/2012/12/sachin-tendulkars-facebook-page.html',
  },
  {
    title: 'Airtel Mobile VOD for IPL',
    description: 'First-ever Mobile Video on Demand for IPL with Airtel, including the Rs.1 Mobile Video store innovation in India.',
    source: 'Economic Times',
    link: 'https://economictimes.indiatimes.com/tech/internet/times-internet-licenses-digital-distribution-rights-of-ipl-to-star-india/articleshow/29517748.cms',
  },
  {
    title: 'Bundesliga Digital Rights',
    description: 'Acquired digital rights for Bundesliga — live streaming, VOD, mobile apps, and audio commentary for Indian fans.',
    source: 'afaqs!',
    link: 'https://www.afaqs.com/news/story/41711_Seven3Sports-bags-digital-rights-for-Bundesliga-2014',
  },
  {
    title: 'French Open Digital Rights',
    description: 'Brought premier tennis action from Roland Garros to mobile and Internet devices across India.',
    source: 'Pocket News Alert',
    link: 'https://www.pocketnewsalert.com/2014/05/seven3sports-acquires-digital-and.html',
  },
  {
    title: 'US Open Digital Rights',
    description: 'Acquired mobile rights of the US Open — partnering with USTA and Accenture for sponsorship.',
    source: 'Business Standard',
    link: 'https://www.business-standard.com/article/companies/seven3sports-acquires-mobile-rights-of-the-us-open-113082800584_1.html',
  },
];

const milestones = [
  {
    year: '2026',
    title: 'Forbes India Cover Feature',
    description:
      'Jatin Ahluwalia and Abhishek Saklani graced the cover of Forbes India\'s FILA special edition — recognised as FILA winners and pioneers building a sustainable future for football in India.',
    image: '/assets/forbes-fila-cover.jpg',
    tag: 'Media',
    link: '/forbes-india',
  },
  {
    year: '2013',
    title: 'IPL Broadcast Rights',
    description:
      'Won TV broadcasting rights of the prestigious IPL across Pakistan, Bangladesh, and Sri Lanka — reaching over 375 million TV homes across the Indian sub-continent.',
    image: '/assets/ipl.jpg',
    tag: 'Cricket',
  },
  {
    year: '2014',
    title: 'FIFA World Cup',
    description:
      'Acquired TV broadcast rights to bring the FIFA World Cup to 6 South Asian countries — a unique innovation bringing first-time FIFA WC experience to over half a billion fans.',
    image: '/assets/fifa.jpg',
    tag: 'Football',
  },
  {
    year: '2014',
    title: 'Bundesliga Digital Rights',
    description:
      'Bagged digital media rights of Bundesliga from Neo Sports — live streaming, VOD, mobile apps, and audio commentary for Indian fans on the go.',
    image: '/assets/bundesliga.webp',
    imageFit: 'contain',
    tag: 'Football',
  },
];

const digitalHighlight =
  'Pioneered the debut of Bharat Ratna Mr. Sachin Tendulkar on digital and social media — the first ever launch of a cricket superstar on Facebook. Our proprietary fan engagement program has helped over 50 leading sports stars and sporting events connect with their fans worldwide.';

export default function OurJourney() {
  return (
    <>
      <SEO
        title="Our Journey"
        description="Sports AJ holds Real Madrid Leyendas rights for El Clásico Legends India Tour — plus a legacy of IPL, FIFA World Cup, and global sports media."
        breadcrumb="Our Journey"
      />
      <PageHeader
        label="Seven3Sports"
        title="Our Journey"
        description="Home of Real Madrid Leyendas in India — and a legacy of world-class sports media rights, league development, and digital innovation."
        breadcrumb="Our Journey"
      />

      <section className="py-10 sm:py-14 bg-white border-b border-brand-gray-light">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="section-label mb-3">El Clásico Legends India Tour</p>
              <h2 className="section-title text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                {introHeading}
              </h2>
              <p className="text-brand-gray text-sm sm:text-base leading-relaxed mb-6">
                {introDescription}
              </p>
              <ul className="space-y-3">
                {realMadridDetails.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-brand-black text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/gujarat-el-clasico.png"
                alt="Real Madrid Leyendas — El Clásico Legends India Tour"
                className="w-full max-w-sm sm:max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-brand-gray-bg">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <p className="section-label mb-3">Integrated Sports Venture</p>
              <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-4 sm:mb-6">
                Who We Are
              </h2>
              <p className="text-brand-gray text-sm sm:text-base leading-relaxed mb-6">
                {aboutText}
              </p>
              <ul className="space-y-2">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-brand-black text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {credentials.map((stat) => (
                <div key={stat.label} className="card p-4 sm:p-5 text-center border-t-4 border-t-brand-red">
                  <div className="font-porsche tracking-porsche text-xl sm:text-2xl text-brand-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-brand-gray text-[10px] sm:text-xs uppercase tracking-wide leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-b border-brand-gray-light">
        <div className="page-container max-w-4xl">
          <p className="section-label mb-3">Sports Digital & Social</p>
          <h2 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-lg sm:text-xl mb-4">
            Digital Fan Engagement Pioneers
          </h2>
          <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
            {digitalHighlight}
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container">
          <div className="mb-8 sm:mb-10">
            <p className="section-label mb-2">In The Media</p>
            <h2 className="section-title">Press & Coverage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {journeyHighlights.map((item) => {
              const isExternal = !item.internal && item.link !== '#';
              const Wrapper = item.internal ? Link : 'a';
              const wrapperProps = item.internal
                ? { to: item.link }
                : {
                    href: item.link,
                    target: isExternal ? '_blank' : undefined,
                    rel: isExternal ? 'noopener noreferrer' : undefined,
                  };

              return (
              <Wrapper
                key={item.title}
                {...wrapperProps}
                className={`card card-pad hover:border-brand-red/40 transition-all sm:hover:-translate-y-1 group block min-h-[44px] ${item.link === '#' ? 'pointer-events-none' : ''}`}
              >
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="px-2 py-1 bg-brand-red/10 text-brand-red font-porsche tracking-porsche uppercase text-[10px] sm:text-xs truncate">
                    {item.source}
                  </span>
                  {item.link !== '#' && (
                    <svg className="w-4 h-4 flex-shrink-0 text-brand-gray group-hover:text-brand-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.internal ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      )}
                    </svg>
                  )}
                </div>
                <h3 className="font-porsche tracking-wide sm:tracking-porsche text-brand-black uppercase text-sm mb-2 sm:mb-3 group-hover:text-brand-red transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
              </Wrapper>
            );
            })}
          </div>
        </div>
      </section>

      <section className="section-py-lg bg-brand-gray-bg">
        <div className="page-container">
          <div className="mb-8 sm:mb-12">
            <p className="section-label mb-2">How It Started</p>
            <h2 className="section-title">Path Breaking Achievements</h2>
          </div>
          <MilestoneCarousel items={milestones} />
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container max-w-4xl">
          <div className="card card-pad lg:p-12 border-l-4 border-l-brand-red">
            <p className="section-label mb-3">Featured Quote</p>
            <blockquote className="text-brand-black text-base sm:text-lg leading-relaxed italic mb-4">
              &ldquo;With inclusion of this undertaking to our portfolio, Seven3Sports is bringing a
              bouquet of diverse sports to its viewers. We are targeting to go beyond the conventional
              sports loved in India; introducing new experiences such as French Open in the past and
              now the Bundesliga. This will be an exciting new venture for us with the ultimate aim to
              provide live viewership to those who are always on the go.&rdquo;
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
