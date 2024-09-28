const newsModel = require("../../Model/newsModel");


const filterNews = async(req,res) =>{
    try {
        const searchQuery = req.query.search;  // Get the query parameter 'search'
  
        //const params = JSON.parse(param)
        const regex = new RegExp(searchQuery,'i')
        const filteredData = await newsModel.find({"category":regex})
        if(!filteredData)
        return res.status(200).send([])

        res.status(200).send(filteredData)
        console.log({filteredData:filteredData.length})
    } catch (error) {
        console.log({error:error.message})
    }
}
module.exports = filterNews