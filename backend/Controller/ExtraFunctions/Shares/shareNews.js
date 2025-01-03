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
          <title>${news.title}</title>
          <meta property="og:title" content="${news.title}" />
          <meta property="og:description" content="${news.description}" />
          <meta property="og:image" content="${news.files[0]}" />
          <meta property="og:url" content="https://yourwebsite.com/news/${newsId}" />
          <meta property="og:type" content="article" />
        </head>
        <body>
          <h1>${news.title}</h1>
          <p>${news.description}</p>
          <img src="${news.files[0]}" alt="${news.title}" />
        </body>
        </html>
      `);
    } catch (error) {
      console.error(error);
      res.status(500).send('<h1>Server Error</h1>');
    }
  };

  module.exports = shareNews