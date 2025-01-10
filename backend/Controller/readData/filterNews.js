const newsModel = require('../../Model/newsModel');
const newsCommentModel = require('../../Model/newsCommentModel');
const likeAndDislikeNewsModel = require('../../Model/likeAndDislikeNewsModel')
const mongoose = require('mongoose');

const  filterNews = async (req, res) => {
    try {
        const searchQuery = req.query.search;  // Get the query parameter 'search'
        const regex = new RegExp(searchQuery,'i')
        const newsWithDetails = await newsModel.aggregate([
            {
                $match: {"category":regex},// Match the specific news article by ID
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
        //console.log({come:come.length})
        return res.status(200).json({news:newsWithDetails});
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).send({ error: error.message });
    }
};

module.exports = filterNews;
