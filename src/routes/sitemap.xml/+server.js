const domain = 'https://pawsaroundmotown.com';

export async function GET() {
  return new Response(
    `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
            <url>
                <loc>${domain}</loc>
            </url>
            <url>
                <loc>${domain}/about</loc>
            </url>
            <url>
                <loc>${domain}/dog-training</loc>
            </url>
            <url>
                <loc>${domain}/dog-walking</loc>
            </url>
            <url>
                <loc>${domain}/faq</loc>
            </url>
            <url>
                <loc>${domain}/team</loc>
            </url>
            <url>
                <loc>${domain}/blog</loc>
            </url>
            <url>
                <loc>${domain}/blog/dog-harness-vs-collar-which-is-better</loc>
            </url>
            <url>
                <loc>${domain}/blog/back-to-school-back-to-routine-tips-for-managing-separation-anxiety-in-pets</loc>
            </url>
		</urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}