const newsModel = require('../../../Model/newsModel');
const newsCommentModel = require('../../../Model/newsCommentModel');
const likeAndDislikeNewsModel = require('../../../Model/likeAndDislikeNewsModel')
const mongoose = require('mongoose');

const singleNews = async (req, res) => {
    try {
        const { newsId } = req.params;
        const newsWithDetails = await newsModel.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(newsId) },// Match the specific news article by ID
            },
            {
                $lookup: {
                    from: 'newscomments', // Collection for comments
                    localField: '_id',
                    foreignField: 'newsId',
                    as: 'comments'
                }
            },
            {
                $lookup: {
                    from: 'likeanddislikenews', // Collection for reactions
                    localField: '_id',
                    foreignField: 'newsId',
                    as: 'reactions'
                }
            }
        ]);
      //const come = newsWithDetails.reactions.filter((single)=>single.type == 'like')
        console.log('this is single data',{newsWithDetails})
        console.log('this is new id',{newsId})
        //console.log({come:come.length})
        return res.status(200).json(newsWithDetails);
        // const { newsId } = req.params;

        // console.log({ newsId });

        // // Find the news by ID
        // const news = await newsModel.findOne({ _id: newsId });
        // if (!news) {
        //     return res.status(404).json({ error: 'News not found' });
        // }

        // const data = await likeAndDislikeNewsModel.find({});
        // // Find the associated comment(s)
        // const comment = await newsCommentModel.find({ newsId });

        // const reaction = {likes:data.likes,dislikes:data.dislikes}
        // // Respond with the appropriate data
        // if (!comment) {
        //     return res.status(200).json({ news,reaction });
        // }

        // // console.log({comment})
        // // req.io.emit('added-comment', comment);

        // // If both news and comment exist
        // return res.status(200).json({ news, comment ,reaction});
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).send({ error: error.message });
    }
};

module.exports = singleNews;
