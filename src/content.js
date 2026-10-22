/**
 * Central content + brand configuration.
 *
 * To switch the public name if legal requires it, set BRAND_SPELLING to 'classic'.
 */

export const BRAND_SPELLING = 'clasico'; // 'clasico' | 'classic'

const WORDS = {
  clasico: { title: 'El Clasico', upper: 'EL CLASICO' },
  classic: { title: 'El Classic', upper: 'EL CLASSIC' },
};

export function brandWord() {
  return WORDS[BRAND_SPELLING].title;
}

export function brandWordUpper() {
  return WORDS[BRAND_SPELLING].upper;
}

export function brandName() {
  return `${brandWord()} India Tour`;
}

export function brandNameUpper() {
  return `${brandWordUpper()} INDIA TOUR`;
}

export function brandNameYear() {
  return `${brandName()} ${site.year}`;
}

export function brandNameUpperYear() {
  return `${brandNameUpper()} ${site.year}`;
}

export function eventName(event) {
  return `${event.region} ${brandWord()}`;
}

export const site = {
  year: '2026',
  url: 'https://elclasicoindia.com',
  brand: 'Sports AJ',
  legalName: 'Sports AJ Ventures Private Limited',
  logo: '/assets/el-clasico-logo.png',
  ogImage: '/assets/el-clasico-logo.png',
  logoAlt: 'El Clasico India Tour — Barça Legends vs Real Madrid Leyendas',
  intro:
    'Sports AJ Ventures Private Limited is the exclusive rights holder for this first ever El Classico India Tour 2026, pursuant to executed agreements with FC Barcelona and Real Madrid to organise the friendly exhibition match between FC Barcelona Legends vs Real Madrid Leyendas!',
};

site.welcome = `Welcome to the first ever ${brandNameYear()}.`;

export const hero = {
  showPlayers: false,
};

export const identity = {
  tour: () => brandNameUpper(),
  tourYear: () => brandNameUpperYear(),
  classicAlt: 'EL CLASSIC INDIA TOUR',
};

export const matches = {
  kolkata: {
    slug: 'kolkata',
    region: 'Kolkata',
    city: 'Kolkata',
    variant: 'kolkata',
    date: 'Wednesday, 25 November 2026',
    startDateISO: '2026-11-25',
    venue: 'Salt Lake Stadium, Kolkata',
    venueName: 'Salt Lake Stadium',
    addressRegion: 'West Bengal',
    stadiumImage: '/assets/stadium-kolkata.jpg',
    stadiumImageAlt: 'Salt Lake Stadium in Kolkata, host venue for the Kolkata El Clasico',
    logo: '/assets/el-clasico-logo.png',
    logoAlt: 'El Clasico India Tour — Barça Legends vs Real Madrid Leyendas',
    path: '/kolkata',
    status: 'confirmed',
  },
};

Object.values(matches).forEach((event) => {
  event.title = eventName(event);
});

export const confirmedEvents = [matches.kolkata];

export const upcomingCities = [
  {
    city: 'Bombay',
    altCity: 'Mumbai',
    status: 'coming-soon',
    visible: false,
  },
];

export const visibleUpcoming = upcomingCities.filter((city) => city.visible);

export const players = {
  enabled: false,
  heading: 'Legendary Players',
  body:
    `${brandNameYear()} will bring together some of the most celebrated players ever to represent FC Barcelona Legends and Real Madrid Leyendas. These legendary footballers have defined generations, won the sport’s greatest honours and created unforgettable moments in ${brandWord()} history. Their presence will offer Indian fans a rare opportunity to witness global football icons renew the world’s greatest rivalry on Indian soil like never before.`,
  items: [],
};

export const elClasico = {
  heading: brandWord(),
  paragraphs: [
    `${brandWord()} is football’s most iconic rivalry—the ultimate showdown between FC Barcelona Legends and Real Madrid Leyendas, two of the world’s biggest and most successful football clubs.`,
    `Followed passionately by millions across the globe, ${brandWord()} transcends the action on the pitch. It represents footballing excellence, legendary players, contrasting philosophies and more than a century of sporting history. Today, ${brandWord()} is not merely a match- it’s one of the world’s most powerful and valuable sports and media asset—an matched global spectacle`,
  ],
};

export const contact = {
  lines: ['001 BPTP Park Centra', 'Sector 31, Gurugram,', 'Haryana 122001', 'INDIA'],
  email: 'info@sportsaj.com',
};

export const social = {
  instagram: 'https://www.instagram.com/elclasicoindia',
  facebook: 'https://www.facebook.com/elclasicoindia',
};

export const story = {
  buildingBeyond: {
    heading: 'Building Beyond',
    body:
      'From an early stage in their entrepreneurial journey, they looked beyond cricket—acquiring the broadcast rights for the FIFA World Cup across six South Asian markets, introducing the Bundesliga’s official digital experience in India, building the French Open’s digital presence in the country and pioneering sports video-on-demand innovations with Airtel. A Forbes India cover story recognised their bold, contrarian approach to expanding and transforming India’s sports ecosystem.',
  },
  globalFootprint: {
    heading: 'Global Footprint, Local Impact',
    body:
      'Through their presence in London and Barcelona, the duo has extended India’s influence across the global sports industry while remaining firmly committed to developing grassroots sport and creating new opportunities for young athletes at home.',
  },
  tour: {
    heading: 'El Clasico Legends India Tour',
    body:
      'Sports AJ is proud to present the first ever El Clasico Legends Tour 2026, bringing legendary footballers from FC Barcelona Legends and Real Madrid Leyendas together to celebrate the world’s most iconic football rivalry in India. Featuring celebrated former players who have represented the two clubs at the highest level, the landmark tour will give Indian fans a rare opportunity to witness footballing legends renew the historic El Clasico rivalry on Indian soil. This landmark India tour will feature a match in Kolkata on November 25, 2026 — one of the most ambitious exhibition football events India has ever hosted.',
  },
};

export const experience = {
  heading: story.tour.heading,
  body: story.tour.body,
};

export const legendaryPlayers = {
  heading: players.heading,
  body: players.body,
};

export const hostCities = {
  heading: 'Kolkata',
  body:
    `Kolkata, celebrated for its rich cultural heritage and passionate sporting community, will host the country’s greatest football spectacle and home to this iconic ${brandNameYear()}`,
};

export const aboutCompany = {
  heading: 'Sports AJ Ventures',
  body:
    'Sports AJ Ventures Private Limited is the sole and exclusive rights holder authorized by both FC Barcelona and Real Madrid to organise and host the proposed Legends exhibition match in Kolkata. The only Indian company which holds exclusive agreements with both clubs for this friendly exhibition match.',
  separation:
    'This event is presented by Sports AJ Ventures Private Limited. It is not a Barça Academy event.',
};

export const journey = {
  heading: 'Our Journey',
  lead:
    'Over 25 years of creating and delivering experiences around some of the world’s most recognised sporting properties.',
  foundersLine:
    'Led by sports entrepreneurs Abhishek Saklani and Jatin Ahluwalia, our leadership team brings extensive experience in acquiring, broadcasting and monetising some of the world’s leading sports properties.',
  sections: [
    story.buildingBeyond,
    story.globalFootprint,
    story.tour,
  ],
  milestones: [
    { id: 'years', label: '25+ Years' },
    { id: 'fifa', label: 'FIFA' },
    { id: 'ipl', label: 'IPL Broadcast' },
    { id: 'bundesliga', label: 'Bundesliga Digital Experience' },
    { id: 'french-open', label: 'French Open' },
    { id: 'us-open', label: 'US Open' },
    { id: 'barca-academy', label: 'Barça Academy India' },
    { id: 'tour', label: 'EL CLASICO INDIA TOUR' },
  ],
};

export const founders = {
  heading: 'About Us',
  intro:
    'Led by sports entrepreneurs Abhishek Saklani and Jatin Ahluwalia, our leadership team brings extensive experience in acquiring, broadcasting and monetising some of the world’s leading sports properties.',
  image: '/assets/forbes-billion-dollar-kick-cover.jpg',
  imageAlt: 'Forbes India cover featuring founders Abhishek Saklani and Jatin Ahluwalia',
  people: [
    {
      name: 'Abhishek Saklani',
      role: 'Founder',
      image: '/assets/abhishek-saklani.jpg',
      imageAlt: 'Portrait of Abhishek Saklani, Founder of Sports AJ',
      bio: '',
      highlights: [],
    },
    {
      name: 'Jatin Ahluwalia',
      role: 'Founder',
      image: '/assets/jatin-ahluwalia.png',
      imageAlt: 'Portrait of Jatin Ahluwalia, Founder of Sports AJ',
      bio: '',
      highlights: [],
    },
  ],
};

export const navItems = [
  { label: 'Stars Lineup', path: '/stars-lineup' },
  { label: 'Our Journey', path: '/our-journey' },
  { label: 'Gala Dinner', path: '/gala-dinner' },
  { label: 'Press & Coverage', path: '/in-the-news' },
];

export const ministerAnnouncement = {
  name: 'Dr. Indranil Khan',
  role: 'Minister of State (Independent Charge), Youth Affairs and Sports, West Bengal',
  date: 'October 12, 2026',
  url: 'https://www.facebook.com/share/p/1FZARUNQNy/?mibextid=wwXIfr',
  title: 'Dr. Indranil Khan announces the Kolkata El Clasico',
  excerpt:
    'West Bengal Minister of State (Independent Charge) for Youth Affairs and Sports, Dr. Indranil Khan, announced that Barcelona and Real Madrid legends will meet in Kolkata on 25 November 2026.',
  image: '/assets/press/cm-suvendu-announcement.jpg',
  imageAlt:
    'Dr. Indranil Khan with Abhishek Saklani and Jatin Ahluwalia holding a white Kolkata El Clasico jersey dated 25 November 2026',
};

export const newsItems = [
  {
    slug: 'dr-indranil-khan-announcement',
    url: ministerAnnouncement.url,
    source: 'Facebook',
    date: ministerAnnouncement.date,
    dateISO: '2026-10-12',
    title: ministerAnnouncement.title,
    excerpt: ministerAnnouncement.excerpt,
    image: ministerAnnouncement.image,
    imageAlt: ministerAnnouncement.imageAlt,
    cta: 'Watch announcement →',
  },
  {
    slug: 'news18-el-clasico-en',
    url: 'https://www.news18.com/sports/football/after-brazil-and-uruguay-kolkata-set-to-host-barcelona-vs-real-madrid-legends-on-november-25-el-clasico-ws-l-10380062.html',
    source: 'News18',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'After Brazil and Uruguay, Kolkata set to host Barcelona vs Real Madrid legends on November 25',
    excerpt:
      'News18 reports that West Bengal sports minister Dr. Indranil Khan announced a Barcelona vs Real Madrid legends match at Salt Lake Stadium on 25 November 2026.',
    image: '/assets/press/news18-el-clasico-en.jpg',
    imageAlt: 'Salt Lake Stadium in Kolkata, the venue for the El Clasico legends match',
  },
  {
    slug: 'indiagazette-el-clasico',
    url: 'https://www.indiagazette.com/news/279371576/bengal-sports-minister-announces-el-clasico-clash-between-barcelona-real-madrid-legends',
    source: 'India Gazette',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Bengal sports minister announces El Clasico clash between Barcelona and Real Madrid legends',
    excerpt:
      'India Gazette reports that Dr. Indranil Khan announced a special El Clasico between Barcelona and Real Madrid legends in Kolkata on 25 November at Salt Lake Stadium.',
    image: '/assets/press/ani-el-clasico.jpg',
    imageAlt:
      'Dr. Indranil Khan with Abhishek Saklani and Jatin Ahluwalia holding the Kolkata El Clasico jersey dated 25 November 2026',
  },
  {
    slug: 'instagram-el-clasico-announcement',
    url: 'https://www.instagram.com/p/DebcT3PoJMm/?xtok=MXN5NjRtczE5OXhndA==',
    source: 'Instagram',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'El Clasico in Kolkata: the announcement on Instagram',
    excerpt:
      'The Kolkata El Clasico announcement shared on Instagram, with Barcelona and Real Madrid legends set to meet on 25 November 2026.',
    image: ministerAnnouncement.image,
    imageAlt: ministerAnnouncement.imageAlt,
    cta: 'Watch post →',
  },
  {
    slug: 'indianexpress-el-clasico',
    url: 'https://indianexpress.com/article/sports/football/real-madrid-barcelona-legends-el-clasico-kolkata-november-10919682/',
    source: 'The Indian Express',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Real Madrid Legends and Barcelona Legends set to play in Kolkata in November',
    excerpt:
      'The Indian Express reports that Salt Lake Stadium will host Barcelona and Real Madrid legends on 25 November, after India played Brazil and Uruguay earlier this month.',
    image: '/assets/press/indianexpress-el-clasico.jpg',
    imageAlt: 'Carles Puyol of Barcelona and Luís Figo of Real Madrid competing in an El Clasico',
  },
  {
    slug: 'ndtv-el-clasico',
    url: 'https://sports.ndtv.com/football/el-clasico-in-india-kolkata-to-host-blockbuster-real-madrid-vs-barcelona-match-in-november-12178442',
    source: 'NDTV Sports',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'El Clasico in India: Kolkata to host blockbuster Real Madrid vs Barcelona match in November',
    excerpt:
      'NDTV Sports reports that Dr. Indranil Khan announced a Barcelona vs Real Madrid legends exhibition at Salt Lake Stadium on 25 November 2026.',
  },
  {
    slug: 'olympics-el-clasico',
    url: 'https://www.olympics.com/en/news/barcelona-vs-real-madrid-legends-el-clasico-2026-match-kolkata-stadium-india',
    source: 'Olympics.com',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Barcelona vs Real Madrid legends El Clasico set for Kolkata in 2026',
    excerpt:
      'Olympics.com reports that Barcelona and Real Madrid legends will meet in Kolkata on 25 November 2026 at Salt Lake Stadium.',
  },
  {
    slug: 'telegraph-el-clasico',
    url: 'https://www.telegraphindia.com/sports/football/real-madrid-and-barcelona-legends-to-bring-el-clasico-to-kolkata-on-november-25/cid/2184527',
    source: 'The Telegraph',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Real Madrid and Barcelona legends to bring El Clasico to Kolkata on November 25',
    excerpt:
      'The Telegraph reports that Salt Lake Stadium will host Real Madrid and Barcelona legends on 25 November, after India’s friendlies against Brazil and Uruguay.',
  },
  {
    slug: 'pti-el-clasico',
    url: 'https://www.ptinews.com/story/sports/barcelona-real-madrid-legends-to-face-off-in-kolkata-on-november-25/4160714',
    source: 'PTI',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Barcelona, Real Madrid legends to face off in Kolkata on November 25',
    excerpt:
      'PTI reports that Barcelona and Real Madrid legends will meet in Kolkata on 25 November at Salt Lake Stadium.',
  },
  {
    slug: 'toi-el-clasico-kolkata',
    url: 'https://timesofindia.indiatimes.com/sports/football/top-stories/kolkata-to-bring-el-clasico-to-india-with-blockbuster-barcelona-vs-real-madrid-legends-clash-on-nov-25-luis-figo-puyol-among-expected-names/articleshow/134926283.cms',
    source: 'The Times of India',
    date: 'October 14, 2026',
    dateISO: '2026-10-14',
    title: 'Kolkata to bring El Clasico to India: Barcelona vs Real Madrid legends on Nov 25',
    excerpt:
      'The Times of India reports the Salt Lake Stadium fixture on 25 November, with Luís Figo, Carles Puyol and Iker Casillas among names expected.',
    image: '/assets/press/toi-el-clasico.jpg',
    imageAlt:
      'Dr. Indranil Khan with Abhishek Saklani and Jatin Ahluwalia holding the Kolkata El Clasico jersey, as published by The Times of India',
  },
  {
    slug: 'dailyjagran-el-clasico',
    url: 'https://www.thedailyjagran.com/sports/news/el-clasico-in-kolkata-barcelona-and-real-madrid-icons-prepare-to-face-off-next-month-at-iconic-salt-lake-stadium-10332568',
    source: 'The Daily Jagran',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'El Clasico in Kolkata: Barcelona and Real Madrid icons prepare to face off at Salt Lake Stadium',
    excerpt:
      'The Daily Jagran reports that Dr. Indranil Khan announced the legends’ match for 25 November, with Luís Figo, Iker Casillas and Carles Puyol among names mentioned.',
    image: '/assets/press/dailyjagran-el-clasico.jpg',
    imageAlt: 'Football legends in Real Madrid and Barcelona kits playing in a stadium',
  },
  {
    slug: 'newsx-el-clasico',
    url: 'https://www.newsx.com/sports/el-clasico-in-india-bengal-sports-minister-announces-mouth-watering-clash-between-barcelona-and-real-madrid-legends-282898/',
    source: 'NewsX',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'El Clasico in India: Bengal sports minister announces Barcelona vs Real Madrid legends clash',
    excerpt:
      'NewsX reports that Dr. Indranil Khan announced an exclusive El Clasico exhibition between Barcelona and Real Madrid legends in Kolkata on 25 November.',
    image: '/assets/press/newsx-el-clasico.jpg',
    imageAlt:
      'Dr. Indranil Khan with Abhishek Saklani and Jatin Ahluwalia holding the Kolkata El Clasico jersey dated 25 November 2026',
  },
  {
    slug: 'ani-el-clasico-kolkata',
    url: 'https://www.aninews.in/news/sports/football/bengal-sports-minister-announces-el-clasico-clash-between-barcelona-real-madrid-legends20261013150324',
    source: 'ANI',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Bengal sports minister announces El Clasico clash between Barcelona and Real Madrid legends',
    excerpt:
      'ANI reports that West Bengal sports minister Dr. Indranil Khan announced a Barcelona legends vs Real Madrid legends match in Kolkata on 25 November at Salt Lake Stadium.',
    image: '/assets/press/ani-el-clasico.jpg',
    imageAlt:
      'Dr. Indranil Khan with Abhishek Saklani and Jatin Ahluwalia holding the Kolkata El Clasico jersey dated 25 November 2026',
  },
  {
    slug: 'thenewsmill-el-clasico-kolkata',
    url: 'https://thenewsmill.com/2026/10/west-bengal-to-host-barcelona-vs-real-madrid-legends-match/',
    source: 'The News Mill',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'West Bengal to host Barcelona vs Real Madrid legends match',
    excerpt:
      'The News Mill reports that West Bengal sports minister Dr. Indranil Khan announced the El Clasico legends match at Kolkata’s Salt Lake Stadium on 25 November 2026.',
    image: '/assets/press/thenewsmill-el-clasico.jpg',
    imageAlt:
      'Dr. Indranil Khan with Abhishek Saklani and Jatin Ahluwalia holding the Kolkata El Clasico jersey, as published by The News Mill',
  },
  {
    slug: 'anandabazar-kolkata-legends',
    url: 'https://www.anandabazar.com/west-bengal/kolkata/match-between-barcelona-and-real-madrid-legends-will-take-place-in-kolkata-on-november-25-dgtl/cid/1719238',
    source: 'Anandabazar',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Barcelona and Real Madrid legends to meet in Kolkata on 25 November',
    excerpt:
      'Anandabazar reports that the legends’ match between Barcelona and Real Madrid will take place in Kolkata on 25 November.',
  },
  {
    slug: 'news18-bangla-el-clasico',
    url: 'https://bengali.news18.com/news/sports/fc-barcelona-vs-real-madrid-match-in-kolkata-possible-on-november-25-sup-2927084.html',
    source: 'News18 Bangla',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Barcelona vs Real Madrid legends set for Kolkata',
    excerpt:
      'News18 Bangla reports that Barcelona and Real Madrid legends are set to face each other in Kolkata, with the state sports department behind the fixture.',
    image: '/assets/press/news18-el-clasico.jpg',
    imageAlt: 'Real Madrid and FC Barcelona crests over a packed night-time football stadium',
  },
  {
    slug: 'etv-bharat-el-clasico',
    url: 'https://www.etvbharat.com/bn/sports/kolkata-to-witness-el-clasico-barcelona-vs-real-madrid-match-in-next-month-wbs26101207520',
    source: 'ETV Bharat',
    date: 'October 12, 2026',
    dateISO: '2026-10-12',
    title: 'Kolkata to witness El Clasico next month',
    excerpt:
      'ETV Bharat reports that a Barcelona–Real Madrid match could be held at Yuba Bharati on 25 November.',
    image: '/assets/press/etv-el-clasico.jpg',
    imageAlt: 'Real Madrid and FC Barcelona crests beside a football on a grass pitch',
  },
  {
    slug: 'aajtak-bangla-el-clasico',
    url: 'https://bangla.aajtak.in/sports/football/story/el-clasico-in-kolkata-when-will-barcelona-and-real-madrid-play-at-yuva-bharati-stadium-sud-1462211-2026-10-13',
    source: 'Aaj Tak Bangla',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'El Clasico in Kolkata: when Barcelona and Real Madrid play at Yuba Bharati',
    excerpt:
      'Aaj Tak Bangla reports that the Chief Minister’s office has given the green signal for Barcelona and Real Madrid to meet in Kolkata.',
    image: '/assets/press/aajtak-el-clasico.jpg',
    imageAlt: 'FC Barcelona and Real Madrid flags facing each other for the Kolkata El Clasico',
  },
  {
    slug: 'tv9-bangla-el-clasico',
    url: 'https://tv9bangla.com/sports/el-clasico-legends-in-kolkata-real-madrid-and-barcelona-icons-set-for-salt-lake-stadium-match-1353049.html',
    source: 'TV9 Bangla',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Real Madrid and Barcelona icons set for a Salt Lake Stadium match',
    excerpt:
      'TV9 Bangla reports that Kolkata could see Real Madrid and Barcelona legends at Salt Lake Stadium before the year ends.',
    image: '/assets/press/tv9-el-clasico.jpg',
    imageAlt: 'Close-up of Real Madrid and FC Barcelona crests on match jerseys',
  },
  {
    slug: 'zee-24-ghanta-el-clasico',
    url: 'https://www.facebook.com/Zee24Ghanta/videos/%E0%A6%B6%E0%A7%80%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A7%81%E0%A6%B0%E0%A7%81%E0%A6%A4%E0%A7%87%E0%A6%87-%E0%A6%95%E0%A6%B2%E0%A6%95%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A7%9F-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%B8-%E0%A6%AB%E0%A7%81%E0%A7%81%E0%A6%9F%E0%A6%AC%E0%A6%B2-%E0%A6%AB%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%AF%E0%A7%81%E0%A6%AC%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%A4%E0%A7%87-%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B2-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%A6-%E0%A6%AC%E0%A6%A8%E0%A6%BE%E0%A6%AE-%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8/2029563397699293/',
    source: 'Zee 24 Ghanta',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Spanish football fever in Kolkata: Real Madrid vs Barcelona at Yuba Bharati',
    excerpt:
      'Zee 24 Ghanta’s report on the Real Madrid and Barcelona legends’ fixture planned for Yuba Bharati Krirangan.',
    cta: 'Watch video →',
  },
  {
    slug: 'republic-bangla-el-clasico',
    url: 'https://www.facebook.com/RepublicBangla/videos/%E0%A6%AF%E0%A7%81%E0%A6%AC%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%A4%E0%A7%87-%E0%A6%8F%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%B9%E0%A6%A4%E0%A7%87-%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87-%E0%A6%8F%E0%A6%B2-%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95%E0%A7%8B-%E0%A6%A8%E0%A6%AD%E0%A7%87%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%87%E0%A6%87-%E0%A6%95%E0%A6%B2%E0%A6%95%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A7%9F-%E0%A6%86%E0%A6%B8%E0%A6%A4%E0%A7%87-%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87-%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B2-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%A6-%E0%A6%93/1963380944570272/',
    source: 'Republic Bangla',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'El Clasico in November: Real Madrid and Barcelona coming to Kolkata',
    excerpt:
      'Republic Bangla’s report on the El Clasico legends’ match planned for Yuba Bharati in November.',
    cta: 'Watch video →',
  },
  {
    slug: 'forbes-india',
    path: '/news/forbes-india',
    source: 'Forbes India',
    date: 'April 3, 2026',
    dateISO: '2026-04-03',
    title: 'The Billion Dollar Kick!',
    excerpt:
      'How India’s dynamic duo has chosen the challenging pathway to build a sustainable future for football in India.',
    image: '/assets/forbes-billion-dollar-kick-cover.jpg',
    imageAlt: 'Forbes India cover, The Billion Dollar Kick, featuring Abhishek Saklani and Jatin Ahluwalia',
  },
  {
    slug: 'toi-goa-barca-academy',
    url: 'https://timesofindia.indiatimes.com/city/goa/cm-sawant-mulls-over-barca-academy-in-goa/articleshow/124370718.cms',
    source: 'The Times of India',
    date: 'October 8, 2025',
    dateISO: '2025-10-08',
    title: 'CM Sawant discusses proposal to launch Barca Academy in Goa',
    excerpt:
      'Goa chief minister Pramod Sawant met Barca Academy officials, including Abhishek Saklani and Jatin Ahluwalia, on the support needed to set up an academy in the state.',
    image: '/assets/press/toi-goa-barca.jpg',
    imageAlt: 'Goa Chief Minister Pramod Sawant meeting Barca Academy officials including Abhishek Saklani and Jatin Ahluwalia',
  },
  {
    slug: 'sportstak-barca-camps',
    url: 'https://thesportstak.com/football/story/fc-barcelona-barca-academy-india-announces-football-camps-3169765-2025-04-07',
    source: 'SportsTak',
    date: 'April 7, 2025',
    dateISO: '2025-04-07',
    title: 'FC Barcelona’s Barca Academy India announces football camps',
    excerpt:
      'Registration opened for Barca Academy camps in Hyderabad, Bengaluru and Delhi, with Abhishek Saklani and Jatin Ahluwalia of SportsNTW.',
    image: '/assets/press/sportstak-barca-camps.jpg',
    imageAlt: 'Abhishek Saklani and Jatin Ahluwalia with guests holding a Barça Academy India jersey',
  },
  {
    slug: 'ani-barca-academies',
    url: 'https://www.aninews.in/news/business/fc-barcelona-expands-its-footprint-in-india-with-new-football-academies20251008105855',
    source: 'ANI',
    date: 'October 8, 2025',
    dateISO: '2025-10-08',
    title: 'FC Barcelona expands its footprint in India with new football academies',
    excerpt:
      'Barca Academy returned to India with camps in six cities. Abhishek Saklani and Jatin Ahluwalia of SportsNTW spoke about training young players in the Barca methodology.',
    image: '/assets/press/ani-barca-academies.jpg',
    imageAlt: 'Abhishek Saklani, Jatin Ahluwalia and Barca Academy India officials standing on an athletics track',
  },
  {
    slug: 'revsportz-kolkata-legends',
    url: 'https://revsportz.in/kolkata-set-to-host-legends-el-clasico-on-november-25/',
    source: 'RevSportz',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    title: 'Kolkata set to host legends’ El Clasico on November 25',
    excerpt:
      'Vivekananda Yuba Bharati Krirangan is scheduled to host a legends’ El Clasico between former Real Madrid and Barcelona players on 25 November.',
    image: '/assets/press/revsportz-el-clasico.jpg',
    imageAlt: 'Football legends in Real Madrid and Barcelona kits playing in a stadium',
  },
];

export const seoCopy = {
  homeTitle: brandNameUpperYear(),
  homeDescription: `The first ever ${brandNameYear()}: FC Barcelona Legends vs Real Madrid Leyendas in Kolkata on 25 November 2026.`,
  homeKeywords:
    'El Clasico India Tour 2026, El Clasico India Tour, elclasicoindia.com, Kolkata El Clasico, Salt Lake Stadium, FC Barcelona Legends, Real Madrid Leyendas, Sports AJ, Barça Academy India',
  journeyDescription: journey.lead,
  pressDescription: `Press and coverage of ${site.brand} and ${brandNameYear()}, including the Forbes India feature on founders Abhishek Saklani and Jatin Ahluwalia.`,
  ticketsDescription: `Register your interest for ${brandNameYear()} tickets — Kolkata El Clasico.`,
  galaDinnerTitle: 'Gala Dinner',
  galaDinnerDescription:
    'Your exclusive evening with Barça Legends and Real Madrid Leyendas before they hit the pitch. Gala dinners in Ahmedabad on 21 November 2026 and Kolkata on 24 November 2026, with premium hospitality at the match the next day.',
  galaDinnerKeywords:
    'El Clasico Gala Dinner, El Clasico Legends Gala Dinner India, Ahmedabad Gala Dinner 21 November 2026, Kolkata Gala Dinner 24 November 2026, Barça Legends, Real Madrid Leyendas, El Clasico India Tour 2026',
  privacyDescription: `Privacy Policy for ${site.legalName} and ${brandNameYear()}.`,
  termsDescription: `Terms and Conditions for ${site.legalName} and ${brandNameYear()}.`,
};

export const galaDinners = [
  {
    name: 'El Clasico Legends Gala Dinner — Ahmedabad',
    city: 'Ahmedabad',
    addressRegion: 'Gujarat',
    startDateISO: '2026-11-21T19:30:00+05:30',
  },
  {
    name: 'El Clasico Legends Gala Dinner — Kolkata',
    city: 'Kolkata',
    addressRegion: 'West Bengal',
    startDateISO: '2026-11-24T19:30:00+05:30',
  },
];

export function matchSeoDescription(event) {
  return `${event.title} at ${event.venue} on ${event.date}. FC Barcelona Legends vs Real Madrid Leyendas as part of ${brandNameYear()}.`;
}
