import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { brandNameUpperYear, brandNameYear, contact, site } from '../content';

const SITE_URL = 'https://sportsaj.com';
const SITE_NAME = brandNameUpperYear();
const DEFAULT_OG_IMAGE = '/assets/amdavad-el-clasico.png';

function absoluteUrl(path) {
  if (!path) return `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function pageTitle(title) {
  if (!title) return SITE_NAME;
  const normalized = title.replace(/\s+/g, ' ').trim();
  if (
    normalized === SITE_NAME ||
    normalized.toLowerCase() === brandNameYear().toLowerCase()
  ) {
    return SITE_NAME;
  }
  if (normalized.includes(SITE_NAME)) return normalized;
  return `${normalized} | ${SITE_NAME}`;
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    alternateName: site.brand,
    url: SITE_URL,
    logo: absoluteUrl('/assets/logo-sportsaj.png'),
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '001 BPTP Park Centra, Sector 31',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122001',
      addressCountry: 'IN',
    },
  };
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: site.legalName,
    },
  };
}

export function sportsEventSchema(event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: event.title,
    description: `${event.title} — ${brandNameYear()}`,
    startDate: event.startDateISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: `${SITE_URL}${event.path}`,
    image: absoluteUrl(event.logo),
    location: {
      '@type': 'Place',
      name: event.venueName || event.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.city,
        addressRegion: event.addressRegion,
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: site.legalName,
      url: SITE_URL,
    },
    performer: [
      { '@type': 'SportsTeam', name: 'FC Barcelona Legends' },
      { '@type': 'SportsTeam', name: 'Real Madrid Leyendas' },
    ],
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/buy-tickets`,
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'INR',
    },
  };
}

export default function SEO({
  title,
  description,
  breadcrumb,
  image = DEFAULT_OG_IMAGE,
  imageAlt = SITE_NAME,
  keywords,
  type = 'website',
  noIndex = false,
  schema,
  article,
}) {
  const { pathname } = useLocation();
  const fullTitle = pageTitle(title);
  const canonical = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
  const ogImage = absoluteUrl(image);
  const robots = noIndex ? 'noindex, follow' : 'index, follow';

  const schemas = [organizationSchema(), websiteSchema()];

  if (breadcrumb) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: breadcrumb, item: canonical },
      ],
    });
  }

  if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.headline,
      description,
      image: ogImage,
      datePublished: article.datePublished,
      author: {
        '@type': 'Organization',
        name: article.source || site.brand,
      },
      publisher: {
        '@type': 'Organization',
        name: site.legalName,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/assets/logo-sportsaj.png'),
        },
      },
      mainEntityOfPage: canonical,
    });
  }

  if (schema) {
    const extra = Array.isArray(schema) ? schema : [schema];
    schemas.push(...extra);
  }

  const jsonLd = JSON.stringify(schemas).replace(/</g, '\\u003c');

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={site.legalName} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  );
}
