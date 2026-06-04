/**
 * Centralized SEO configuration for MRINJOY Partners
 * Used by Helmet components across all pages
 */

export const SITE_URL = 'https://www.mrinjoypartners.com';
export const SITE_NAME = 'MRINJOY Partners';
export const SITE_TITLE = 'MRINJOY Partners | Intellectual Property Law Firm';
export const SITE_DESCRIPTION =
  'MRINJOY Partners provides professional Intellectual Property legal services including Trademark Registration, Patent Filing, Copyright Registration, Design Protection, Brand Protection, and IP Consultation services across India.';
export const SITE_KEYWORDS =
  'MRINJOY Partners, Intellectual Property Lawyer, IP Law Firm India, Trademark Registration India, Patent Filing India, Copyright Registration India, Design Registration India, Brand Protection, Trademark Attorney, Patent Attorney, Legal Services India, Intellectual Property Services';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const LOCALE = 'en_IN';

/**
 * Generates a title using the site template
 * @param {string} pageTitle - The page-specific title
 * @returns {string} Formatted title
 */
export const formatTitle = (pageTitle) => {
  if (!pageTitle) return SITE_TITLE;
  return `${pageTitle} | ${SITE_NAME}`;
};

/**
 * Generates a canonical URL
 * @param {string} path - The path (e.g., '/services/patent-filing')
 * @returns {string} Full canonical URL
 */
export const canonicalUrl = (path = '/') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
};

/**
 * Organization Schema (JSON-LD)
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description: SITE_DESCRIPTION,
  foundingDate: '2022',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-89106-40567',
    contactType: 'customer service',
    email: 'mrinjoypartners@gmail.com',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.linkedin.com/in/anirbaan-sarkar/',
  ],
};

/**
 * LegalService Schema (JSON-LD)
 */
export const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: OG_IMAGE,
  foundingDate: '2022',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: [
    'Trademark Registration',
    'Patent Filing',
    'Copyright Registration',
    'Design Registration',
    'IP Consultation',
    'Brand Protection',
  ],
  telephone: '+91-89106-40567',
  email: 'mrinjoypartners@gmail.com',
  priceRange: '$$',
};

/**
 * WebSite Schema (JSON-LD) — enables sitelinks search box
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
};

/**
 * Generates BreadcrumbList Schema (JSON-LD)
 * @param {Array<{name: string, url: string}>} items
 * @returns {object} BreadcrumbList schema
 */
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Service page SEO data keyed by slug
 */
export const servicePageSEO = {
  'patent-filing': {
    title: 'Patent Filing Services in India',
    description:
      'Secure exclusive legal rights over your inventions with MRINJOY Partners. Expert patent filing, prosecution, and strategic IP protection services across India.',
    keywords:
      'Patent Filing India, Patent Registration, Patent Attorney India, Patent Prosecution, Invention Protection, Patent Application India, MRINJOY Partners',
  },
  'trademark-registration': {
    title: 'Trademark Registration Services in India',
    description:
      'Protect your brand identity with expert trademark registration by MRINJOY Partners. Logo protection, brand name registration, and trademark enforcement services in India.',
    keywords:
      'Trademark Registration India, Trademark Attorney, Brand Protection India, Logo Registration, Trademark Filing, MRINJOY Partners',
  },
  'copyright-protection': {
    title: 'Copyright Registration & Protection in India',
    description:
      'Protect your creative works, software, music, and digital assets with copyright registration services by MRINJOY Partners. Professional copyright advisory in India.',
    keywords:
      'Copyright Registration India, Copyright Protection, Software Copyright, Digital Asset Protection, Copyright Attorney India, MRINJOY Partners',
  },
  'design-rights': {
    title: 'Design Registration & Protection in India',
    description:
      'Secure exclusive rights for your product designs with MRINJOY Partners. Industrial design registration and visual identity protection services across India.',
    keywords:
      'Design Registration India, Industrial Design Protection, Design Rights India, Product Design Patent, MRINJOY Partners',
  },
  'ip-litigation': {
    title: 'IP Litigation & Enforcement Services in India',
    description:
      'Defend your intellectual property rights with expert IP litigation services by MRINJOY Partners. Infringement actions, cease-and-desist, and enforcement across India.',
    keywords:
      'IP Litigation India, Intellectual Property Enforcement, Patent Infringement, Trademark Infringement, IP Attorney India, MRINJOY Partners',
  },
  'ip-advisory': {
    title: 'IP Consultation & Advisory Services in India',
    description:
      'Strategic IP consultation for startups and enterprises by MRINJOY Partners. Portfolio management, risk assessment, licensing advice, and IP audit services in India.',
    keywords:
      'IP Consultation India, IP Advisory, Intellectual Property Strategy, IP Audit, Patent Consultation, MRINJOY Partners',
  },
};
