const newsModel = require('../../../Model/newsModel')
const likeAndDislikeNews = require('../../../Model/likeAndDislikeNewsModel')
const likeAndDislikeNewsModel = require('../../../Model/likeAndDislikeNewsModel')

exports.likeAndDislikeNews = async (req,res) => {
    try {
        const { newsId } = req.params; // Content ID
        const { type } = req.body; // Reaction type: 'like' or 'dislike'
    
        if (!['like', 'dislike'].includes(type)) {
          return res.status(400).json({ success: false, message: 'Invalid reaction type' });
        }
    
        // Create a new reaction
        const newReaction = await likeAndDislikeNews.create({ newsId: newsId, type });
    
        // Emit real-time reaction update
        const likes = await likeAndDislikeNewsModel.countDocuments({ newsId: newsId, type: 'like' });
        const dislikes = await likeAndDislikeNewsModel.countDocuments({ newsId: newsId, type: 'dislike' });
        // Find the associated comment(s)

        const reaction = {likes,dislikes}
        req.io.emit('update-news-reaction', { newsId: newsId, type });
    
        res.status(201).json({ success: true, message: 'Reaction added', reaction });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
}