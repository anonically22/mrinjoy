import { Helmet } from 'react-helmet-async';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  OG_IMAGE,
  LOCALE,
  formatTitle,
  canonicalUrl,
} from './seoConfig';

/**
 * SEOHead — drop-in Helmet component for per-page SEO.
 *
 * @param {object} props
 * @param {string} [props.title] - Page title (will be formatted with template)
 * @param {string} [props.description] - Meta description
 * @param {string} [props.keywords] - Meta keywords
 * @param {string} [props.path] - URL path for canonical (e.g., '/services/patent-filing')
 * @param {string} [props.ogImage] - OG image override
 * @param {string} [props.ogType] - OG type override (default: 'website')
 * @param {Array<object>} [props.jsonLd] - Array of JSON-LD schema objects to inject
 * @param {boolean} [props.noindex] - If true, add noindex directive
 */
const SEOHead = ({
  title,
  description,
  keywords,
  path = '/',
  ogImage,
  ogType = 'website',
  jsonLd = [],
  noindex = false,
}) => {
  const formattedTitle = title ? formatTitle(title) : formatTitle();
  const metaDescription = description || SITE_DESCRIPTION;
  const metaKeywords = keywords || SITE_KEYWORDS;
  const canonical = canonicalUrl(path);
  const image = ogImage || OG_IMAGE;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{formattedTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={formattedTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={formattedTitle} />

      {/* JSON-LD Structured Data */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
