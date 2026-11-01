import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  canonicalUrl,
  keywords,
  ogType = 'website',
  ogImage = '/assets/aistudio/pdfcrowd__1__9381cdb7.jpg',
  schema,
}) => {
  const siteUrl = 'https://aliraza-international.com';
  const path = canonicalPath || canonicalUrl || '';
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = `${title} | ALI RAZA INTERNATIONAL TRADE SPS`;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Meta description
    setMetaTag('description', description);

    // 3. Open Graph
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`, true);
    setMetaTag('og:site_name', 'ALI RAZA INTERNATIONAL TRADE SPS', true);

    // 4. Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`);

    // 5. Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 6. JSON-LD Schema
    const existingSchemaScript = document.getElementById('json-ld-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [fullTitle, description, fullUrl, ogType, ogImage, schema]);

  return null;
};

// Reusable standard Organization & LocalBusiness schema generator
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ALI RAZA INTERNATIONAL TRADE SPS',
    alternateName: 'OAN Moving & Logistics Services',
    legalName: 'Ali Raza International Trade Single Person Company (SPC)',
    description:
      'Licensed residential moving, commercial office relocation, building materials trading, and international logistics in Muscat, Sultanate of Oman.',
    url: 'https://aliraza-international.com',
    telephone: '+96898386824',
    email: 'Iqumantransport@gmail.com',
    taxID: '1896320',
    identifier: 'CR: 1481820',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ruwi / Muttrah Commercial Business Hub',
      addressLocality: 'Muscat',
      addressRegion: 'Muscat Governorate',
      addressCountry: 'OM',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.5900',
      longitude: '58.5400',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Sultanate of Oman' },
      { '@type': 'City', name: 'Muscat' },
      { '@type': 'City', name: 'Sohar' },
      { '@type': 'City', name: 'Nizwa' },
      { '@type': 'City', name: 'Salalah' },
    ],
  };
}
