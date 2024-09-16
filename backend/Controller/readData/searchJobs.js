const jobModel = require('../../Model/jobModel')
const searchJobs = async(req,res) =>{
    try {
        const search = req.query.search
        const regex = new RegExp(search,'i')
        const searchedData = await jobModel.find({$or:[
            {"job.category":regex},
            {"job.type":regex},
            {"job.title":regex},
            {"job.experience":regex},
            {"company.companyName":regex}
        ]})
        if(!searchedData)
        return res.status(200).send([])

        res.status(200).send(searchedData)
        console.log({searchedData:searchedData.length})
    } catch (error) {
        console.log({error:error.message})
    }
}
module.exports = searchJobs