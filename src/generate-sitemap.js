const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/Program', changefreq: 'monthly', priority: 0.7 },
  { url: '/Contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/IFYR', changefreq: 'monthly', priority: 0.7 },
  { url: '/Publish', changefreq: 'monthly', priority: 0.7 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://www.ys-journal.org' });

// Generate the sitemap
streamToPromise(sitemapStream)
  .then((data) => {
    fs.writeFileSync('public/sitemap.xml', data.toString());
    console.log('Sitemap generated!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });

routes.forEach(route => {
  sitemapStream.write(route);
});

sitemapStream.end();