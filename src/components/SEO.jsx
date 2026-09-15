import { Helmet } from 'react-helmet-async';
import { company, siteUrl, defaultOgImage, pageSeo } from '../data/content';

function buildCanonicalUrl(pathname) {
  if (pathname === '/') return siteUrl;
  return `${siteUrl}${pathname}`;
}

function buildPageTitle(seo, pathname) {
  if (pathname === '/') return seo.title;
  return `${seo.title} | ${company.name}`;
}

function buildStructuredData(pathname, canonical, breadcrumb) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}${company.logo}`,
    email: company.email,
    description: company.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122001',
      addressCountry: 'IN',
    },
  };

  const schemas = [organization];

  if (pathname === '/') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: company.name,
      url: siteUrl,
      description: company.metaDescription,
      publisher: {
        '@type': 'Organization',
        name: company.name,
      },
    });
  }

  if (breadcrumb) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: breadcrumb,
          item: canonical,
        },
      ],
    });
  }

  return schemas;
}

export default function SEO({ pathname }) {
  const seo = pageSeo[pathname] || pageSeo['/'];
  const canonical = buildCanonicalUrl(pathname);
  const title = buildPageTitle(seo, pathname);
  const description = seo.description;
  const ogImage = `${siteUrl}${seo.image || defaultOgImage}`;
  const structuredData = buildStructuredData(pathname, canonical, seo.breadcrumb);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData.length === 1 ? structuredData[0] : structuredData)}
      </script>
    </Helmet>
  );
}
