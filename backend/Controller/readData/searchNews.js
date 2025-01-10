// const newsModel = require('../../Model/newsModel')
// const searchNews = async(req,res) =>{
//     try {
//         const search = req.query.search
//         const regex = new RegExp(search,'i')
//         const searchedData = await newsModel.find({$or:[
//             {"category":regex},
//             {"title":regex},
//             {"description":regex},
//         ]})
//         if(!searchedData)
//         return res.status(200).send([])

//         res.status(200).send(searchedData)
//         console.log({searchedData:searchedData.length})
//     } catch (error) {
//         console.log({error:error.message})
//     }
// }
// module.exports = searchNews
const newsModel = require('../../Model/newsModel');
const newsCommentModel = require('../../Model/newsCommentModel');
const likeAndDislikeNewsModel = require('../../Model/likeAndDislikeNewsModel')
const mongoose = require('mongoose');

const  searchNews = async (req, res) => {
    try {
        const searchQuery = req.query.search;  // Get the query parameter 'search'
        const regex = new RegExp(searchQuery,'i')
        const newsWithDetails = await newsModel.aggregate([
            {
                $match: {$or:[
                                {"category":regex},
                                {"title":regex},
                                {"description":regex},
                            ]},
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
        return res.status(200).json({news:newsWithDetails});
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).send({ error: error.message });
    }
};

module.exports = searchNews;
