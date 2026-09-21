import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { brandNameUpperYear, site } from '../content';

const SITE_URL = 'https://sportsaj.com';
const SITE_NAME = brandNameUpperYear();
const ORG_NAME = site.brand;
const DEFAULT_OG_IMAGE = '/assets/amdavad-el-clasico.png';

export default function SEO({ title, description, breadcrumb, image = DEFAULT_OG_IMAGE }) {
  const { pathname } = useLocation();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`;
  const ogImage = `${SITE_URL}${image}`;

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo-sportsaj.png`,
      email: 'info@sportsaj.com',
    },
  ];

  if (breadcrumb) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: breadcrumb, item: canonical },
      ],
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  );
}
