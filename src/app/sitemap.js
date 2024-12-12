export default function sitemap() {
  return [
    {
      url: 'https://gtavice.vercel.app/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://gtavice.vercel.app/download',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://gtavice.vercel.app/features',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://gtavice.vercel.app/requirements',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://gtavice.vercel.app/faq',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://gtavice.vercel.app/contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}