const newsModel = require('../../../Model/newsModel')
const shareNews =  async (req, res) => {
    try {
      const newsId = req.params.id;
  
      // Fetch the news item from your database
      const news = await newsModel.findById(newsId);
  
      if (!news) {
        return res.status(404).send('<h1>News not found</h1>');
      }
  
      // Send an HTML response with Open Graph meta tags
      res.send(`
           <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${news.title} | Dodola City</title>

        <!-- Open Graph -->
        <meta property="og:title" content="${news.title}" />
        <meta property="og:description" content="${news.description.substring(0, 180)}... Read more!" />
        <meta property="og:image" content="${news.files[0]}" />
        <meta property="og:url" content="https://dodola-official-website.vercel.app/news-detail/${newsId}" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Dodola City Official" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${news.title}" />
        <meta name="twitter:description" content="${news.description.substring(0, 180)}... Read more!" />
        <meta name="twitter:image" content="${news.files[0]}" />
        <meta name="twitter:site" content="@DodolaCity" />

        <!-- Additional Meta -->
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <script>
          window.location.href = "https://dodola-official-website.vercel.app/news-detail/${newsId}";
        </script>
        <h1>Redirecting to ${news.title}...</h1>
        <p>If you are not redirected, <a href="https://dodola-official-website.vercel.app/news-detail/${newsId}">click here</a>.</p>
      </body>
      </html>
      `);
    } catch (error) {
      console.error(error);
      res.status(500).send('<h1>Server Error</h1>');
    }
  };

  module.exports = shareNews