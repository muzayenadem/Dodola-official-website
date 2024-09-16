const contentModel = require('../../Model/contentModel')

const filterContent = async(req,res) =>{
    try {
        const searchQuery = req.query.search;  // Get the query parameter 'search'
     
        const regex = new RegExp(searchQuery,'i')
        const filteredData = await contentModel.find({subCategory:regex})
        if(!filteredData)
        return res.status(200).send([])

        res.status(200).send(filteredData)
        console.log({filteredData:filteredData.length})
    } catch (error) {
        console.log({error:error.message})
    }
}
module.exports = filterContent