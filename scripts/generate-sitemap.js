import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { blogPosts } from '../src/data/blogPosts.js';

const SITE_URL = 'https://www.mrinjoypartners.com';

// Define static routes
const routes = [
  '/',
  '/practice-areas',
  '/trademark',
  '/patent',
  '/copyright',
  '/design',
  '/brand',
  '/ip-consultation',
  '/about',
  '/process',
  '/faq',
  '/contact',
  '/trademark-registration-kolkata',
  '/blog',
  ...blogPosts.map(post => `/blog/${post.slug}`)
];

// Helper to format date for sitemap
const getTodayDate = () => new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach((route) => {
    // Basic priority logic
    const priority = route === '/' ? '1.0' : route.includes('trademark') || route.includes('patent') ? '0.9' : '0.8';
    
    xml += `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${getTodayDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  xml += `\n</urlset>`;

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
};

generateSitemap();
