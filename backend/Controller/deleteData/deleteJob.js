const jobModel = require('../../Model/jobModel')
const deleteJob = async(req,res) =>{
    try {
        const {id} = req.body

        const isThereJob = await jobModel.findById({_id:id})

        if(!isThereJob)
        return res.status(402).send('there is no job with this id')

        const deletedJob = await jobModel.deleteOne({_id:id})
        
        if(!deletedJob)
        return res.status(404).send('the job t is not deleted')

        res.status(200).send('content succefully deleted')
    } catch (error) {
     console.log({error:error.message})   
    }
}

module.exports = deleteJob