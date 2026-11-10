import { BOXES, CONTACT, FAQ, MENU, REVIEWS, SEO } from './src/data.js'

const fcfa = (price) => price.replace(/\s/g, '')

function structuredData(siteUrl) {
  const business = {
    '@type': 'Restaurant',
    '@id': `${siteUrl}/#business`,
    name: SEO.name,
    description: SEO.description,
    url: `${siteUrl}/`,
    image: [`${siteUrl}/og-image.jpg`, `${siteUrl}/logo.png`],
    logo: `${siteUrl}/logo.png`,
    telephone: CONTACT.phone,
    priceRange: SEO.priceRange,
    currenciesAccepted: 'XOF',
    servesCuisine: SEO.cuisine,
    acceptsReservations: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `Près de la ${CONTACT.place}`,
      addressLocality: CONTACT.city,
      addressRegion: SEO.region,
      addressCountry: SEO.country,
    },
    areaServed: { '@type': 'City', name: CONTACT.city },
    hasMap: CONTACT.maps,
    sameAs: [CONTACT.snapchat],
    potentialAction: {
      '@type': 'OrderAction',
      target: CONTACT.whatsapp,
      deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModePickUp',
    },
    hasMenu: {
      '@type': 'Menu',
      name: 'La carte',
      inLanguage: 'fr',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Mignardises salées',
          hasMenuItem: MENU.map((item) => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.note,
            offers: item.prices.map(([qty, price]) => ({
              '@type': 'Offer',
              name: `${item.name} · ${qty}`,
              price: fcfa(price),
              priceCurrency: 'XOF',
            })),
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Box',
          hasMenuItem: BOXES.map((box) => ({
            '@type': 'MenuItem',
            name: box.name,
            description: box.items.join(', '),
            offers: { '@type': 'Offer', price: fcfa(box.price), priceCurrency: 'XOF' },
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Gratins',
          hasMenuItem: ['Lasagnes', 'Pasticcio'].map((name) => ({
            '@type': 'MenuItem',
            name,
            offers: { '@type': 'Offer', price: '3000', priceCurrency: 'XOF' },
          })),
        },
      ],
    },
    review: REVIEWS.map((r) => ({
      '@type': 'Review',
      reviewBody: r.quote,
      author: { '@type': 'Person', name: r.author },
    })),
  }

  const faq = {
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    mainEntity: FAQ.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: SEO.name,
    inLanguage: 'fr',
    publisher: { '@id': `${siteUrl}/#business` },
  }

  return { '@context': 'https://schema.org', '@graph': [business, website, faq] }
}

function headTags(siteUrl) {
  const url = `${siteUrl}/`
  const image = `${siteUrl}/og-image.jpg`
  const json = JSON.stringify(structuredData(siteUrl)).replace(/</g, '\\u003c')
  return `
    <title>${SEO.title}</title>
    <meta name="description" content="${SEO.description}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="geo.region" content="${SEO.country}-8" />
    <meta name="geo.placename" content="${CONTACT.city}" />
    <meta property="og:type" content="restaurant" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="${SEO.name}" />
    <meta property="og:title" content="${SEO.title}" />
    <meta property="og:description" content="${SEO.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Plateaux de mignardises salées faites maison à Niamey" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${SEO.title}" />
    <meta name="twitter:description" content="${SEO.description}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${json}</script>`
}

/** Injects meta tags and schema.org data, and emits robots.txt / sitemap.xml. */
export default function seo({ siteUrl }) {
  const base = siteUrl.replace(/\/$/, '')
  return {
    name: 'seo',
    transformIndexHtml(html) {
      return html.replace('<!--seo-->', headTags(base))
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      })
    },
  }
}
