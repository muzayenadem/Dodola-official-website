const newsModel = require('../../../Model/newsModel');
const newsCommentModel = require('../../../Model/newsCommentModel');

const singleNews = async (req, res) => {
    try {
        const { newsId } = req.params;

        console.log({ newsId });

        // Find the news by ID
        const news = await newsModel.findOne({ _id: newsId });
        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }

        // Find the associated comment(s)
        const comment = await newsCommentModel.find({ newsId });

        // Respond with the appropriate data
        if (!comment) {
            return res.status(200).json({ news });
        }

        // console.log({comment})
        // req.io.emit('added-comment', comment);

        // If both news and comment exist
        return res.status(200).json({ news, comment });
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).send({ error: 'There is something wrong at the server' });
    }
};

module.exports = singleNews;
