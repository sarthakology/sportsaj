/**
 * Central content + brand configuration.
 *
 * To switch the public name if legal requires it, set BRAND_SPELLING to 'classic'.
 * To rename the west event, change matches.gujarat.region from 'Gujarat' to 'Ahmedabad'.
 */

export const BRAND_SPELLING = 'clasico'; // 'clasico' | 'classic'

const WORDS = {
  clasico: { title: 'El Clásico', upper: 'EL CLÁSICO' },
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
  brand: 'Sports AJ',
  legalName: 'Sports AJ Ventures Private Limited',
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
  gujarat: {
    slug: 'gujarat',
    region: 'Gujarat',
    city: 'Ahmedabad',
    variant: 'gujarat',
    date: 'Saturday, 22 November 2026',
    venue: 'Eka Arena, Ahmedabad',
    stadiumImage: '/assets/stadium-ahemdabad.webp',
    logo: '/assets/amdavad-el-clasico.png',
    path: '/gujarat',
    status: 'confirmed',
  },
  kolkata: {
    slug: 'kolkata',
    region: 'Kolkata',
    city: 'Kolkata',
    variant: 'kolkata',
    date: 'Wednesday, 25 November 2026',
    venue: 'Salt Lake Stadium, Kolkata',
    stadiumImage: '/assets/stadium-kolkata.jpg',
    logo: '/assets/EL KOLKATA.png',
    path: '/kolkata',
    status: 'confirmed',
  },
};

Object.values(matches).forEach((event) => {
  event.title = eventName(event);
});

export const confirmedEvents = [matches.gujarat, matches.kolkata];

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
    heading: 'El Clásico Legends India Tour',
    body:
      'Sports AJ is proud to present the first ever El Clásico Legends Tour 2026, bringing legendary footballers from FC Barcelona Legends and Real Madrid Leyendas together to celebrate the world’s most iconic football rivalry in India. Featuring celebrated former players who have represented the two clubs at the highest level, the landmark tour will give Indian fans a rare opportunity to witness footballing legends renew the historic El Clásico rivalry on Indian soil. This landmark India tour will feature matches in Ahmedabad on November 22 and Kolkata on November 25, 2026 — one of the most ambitious exhibition football events India has ever hosted.',
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
  heading: 'Ahmedabad and Kolkata',
  body:
    `Ahmedabad and Kolkata, two of India’s foremost cities, celebrated for their rich cultural heritage and passionate sporting communities will host the country’s greatest football spectacle and home to this iconic ${brandNameYear()}`,
};

export const aboutCompany = {
  heading: 'Sports AJ Ventures',
  body:
    'Sports AJ Ventures Private Limited is the sole and exclusive rights holder authorized by both FC Barcelona and Real Madrid to organise and host the proposed Legends exhibition match in Ahmedabad and Kolkata. The only Indian company which holds exclusive agreements with both clubs for this friendly exhibition match.',
  separation:
    'This event is presented by Sports AJ Ventures Private Limited. It is not a Barça Academy event.',
};

export const journey = {
  heading: 'Our Journey',
  lead:
    'Over 25 years of creating and delivering experiences around some of the world’s most recognised sporting properties.',
  foundersLine:
    'Led by sports entrepreneurs Jatin Ahluwalia and Abhishek Saklani, our leadership team brings extensive experience in acquiring, broadcasting and monetising some of the world’s leading sports properties.',
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
    { id: 'tour', label: 'EL CLÁSICO INDIA TOUR' },
  ],
};

export const founders = {
  heading: 'About Us',
  intro:
    'Led by sports entrepreneurs Jatin Ahluwalia and Abhishek Saklani, our leadership team brings extensive experience in acquiring, broadcasting and monetising some of the world’s leading sports properties.',
  image: '/assets/forbes-billion-dollar-kick-cover.jpg',
  imageAlt: 'Forbes India — Jatin Ahluwalia and Abhishek Saklani',
  people: [
    {
      name: 'Jatin Ahluwalia',
      role: 'Founder',
      image: '/assets/jatin-ahluwalia.png',
      bio: '',
      highlights: [],
    },
    {
      name: 'Abhishek Saklani',
      role: 'Founder',
      image: '/assets/abhishek-saklani.jpg',
      bio: '',
      highlights: [],
    },
  ],
};

export const navItems = [
  { label: 'Our Journey', path: '/our-journey' },
  { label: 'Press & Coverage', path: '/in-the-news' },
];

export const newsItems = [
  {
    slug: 'forbes-india',
    path: '/news/forbes-india',
    source: 'Forbes India',
    date: 'April 3, 2026',
    title: 'The Billion Dollar Kick!',
    excerpt:
      'How India’s dynamic duo has chosen the challenging pathway to build a sustainable future for football in India.',
    image: '/assets/forbes-billion-dollar-kick-cover.jpg',
  },
];
