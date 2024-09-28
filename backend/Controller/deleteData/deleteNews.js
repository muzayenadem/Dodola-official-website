const newsModel = require('../../Model/newsModel')
const deleteNew = async(req,res) =>{
    try {
        const {id} = req.body

        const isThereNew = await newsModel.findById({_id:id})

        if(!isThereNew)
        return res.status(402).send('there is no job with this id')

        const deletedNew = await newsModel.deleteOne({_id:id})
        
        if(!deletedNew)
        return res.status(404).send('the job t is not deleted')

        res.status(200).send('content succefully deleted')
    } catch (error) {
     console.log({error:error.message})   
    }
}

module.exports = deleteNew