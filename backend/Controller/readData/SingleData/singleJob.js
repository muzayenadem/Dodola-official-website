const jobModel = require('../../../Model/jobModel')

const singleJob = async(req,res) =>{
    try {
        const {jobId} = req.params
        const job = await jobModel.find({_id:jobId})

        if(!job)
            return res.status(403).send("there is no job with this Id")

        return res.status(200).send(job)
    } catch (error) {
        console.log({error:error.message})
        res.status(500).send("something wrong with server")
    }
}
module.exports = singleJob