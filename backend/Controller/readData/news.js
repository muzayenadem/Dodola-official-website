const newsModel = require('../../Model/newsModel');
const newsCommentModel = require('../../Model/newsCommentModel');
const likeAndDislikeNewsModel = require('../../Model/likeAndDislikeNewsModel');
const news = async (req, res) => {
    try {
        const newsWithDetails = await newsModel.aggregate([
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
        const come = newsWithDetails[0].reactions.filter((single)=>single.type == 'like')
        console.log({newsWithDetails})
        console.log({come:come.length})
        return res.status(200).json({news:newsWithDetails});
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ error: error.message });
    }
};
module.exports = news;