const newsModel = require('../../Model/newsModel')
const searchNews = async(req,res) =>{
    try {
        const search = req.query.search
        const regex = new RegExp(search,'i')
        const searchedData = await newsModel.find({$or:[
            {"category":regex},
            {"title":regex},
            {"description":regex},
        ]})
        if(!searchedData)
        return res.status(200).send([])

        res.status(200).send(searchedData)
        console.log({searchedData:searchedData.length})
    } catch (error) {
        console.log({error:error.message})
    }
}
module.exports = searchNews