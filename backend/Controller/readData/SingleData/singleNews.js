const newsModel = require('../../../Model/newsModel');
const newsCommentModel = require('../../../Model/newsCommentModel');
const likeAndDislikeNewsModel = require('../../../Model/likeAndDislikeNewsModel')

const singleNews = async (req, res) => {
    try {
        const { newsId } = req.params;

        console.log({ newsId });

        // Find the news by ID
        const news = await newsModel.findOne({ _id: newsId });
        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }

        const likes = await likeAndDislikeNewsModel.countDocuments({ newsId: newsId, type: 'like' });
        const dislikes = await likeAndDislikeNewsModel.countDocuments({ newsId: newsId, type: 'dislike' });
        // Find the associated comment(s)
        const comment = await newsCommentModel.find({ newsId });

        const reaction = {likes,dislikes}
        // Respond with the appropriate data
        if (!comment) {
            return res.status(200).json({ news,reaction });
        }

        // console.log({comment})
        // req.io.emit('added-comment', comment);

        // If both news and comment exist
        return res.status(200).json({ news, comment ,reaction});
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).send({ error: 'There is something wrong at the server' });
    }
};

module.exports = singleNews;
