import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

async function generateStaticRoutes() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('sitemap.xml not found in dist/ directory. Make sure to run build first.');
    process.exit(1);
  }

  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error('index.html not found in dist/ directory.');
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locs = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];

  const urls = locs.map(loc => loc.replace(/<\/?loc>/g, '').trim());
  const domain = 'https://www.edgeroboticsstudio.com';

  console.log(`Found ${urls.length} URLs in sitemap.`);

  for (const url of urls) {
    if (!url.startsWith(domain)) continue;

    let routePath = url.replace(domain, '');

    // Skip root and external links
    if (routePath === '' || routePath === '/') continue;

    // Clean up route path
    if (routePath.startsWith('/')) routePath = routePath.substring(1);

    const targetDir = path.join(DIST_DIR, routePath);
    const targetFile = path.join(targetDir, 'index.html');

    console.log(`Generating static route: /${routePath}`);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    let htmlContent = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

    // Ensure the URL has a trailing slash for consistency
    let canonicalUrl = url;
    if (!canonicalUrl.endsWith('/')) {
      canonicalUrl += '/';
    }

    // Replace the canonical link
    htmlContent = htmlContent.replace(
      /<link id="canonical-link" rel="canonical" href="https:\/\/www\.edgeroboticsstudio\.com\/" \/>/,
      `<link id="canonical-link" rel="canonical" href="${canonicalUrl}" />`
    );

    // Create a dynamic title and description based on the route
    const segments = routePath.split('/').filter(Boolean);
    if (segments.length > 0) {
      const titleSegments = segments.map(segment => {
        return segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      });
      const pageTitle = titleSegments.reverse().join(' - ') + 'Edge Robotics Studio';
      const pageDescription = `Learn more about ${titleSegments.join(' ')} at Edge Robotics Studio. Specializing in ROS2, Embedded Systems, Computer Vision, and AI.`;

      htmlContent = htmlContent.replace(
        /<title>Edge Robotics Studio<\/title>/,
        `<title>${pageTitle}</title>`
      );

      htmlContent = htmlContent.replace(
        /<meta name="description"[\s\S]*?content="[^"]*" \/>/,
        `<meta name="description" content="${pageDescription}" />`
      );
    }

    fs.writeFileSync(targetFile, htmlContent);
  }

  console.log('Static route generation complete!');
}

generateStaticRoutes().catch(err => {
  console.error('Error generating static routes:', err);
  process.exit(1);
});
