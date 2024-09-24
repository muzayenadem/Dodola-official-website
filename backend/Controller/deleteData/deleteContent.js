const contentModel = require('../../Model/contentModel')
const deleteContent = async(req,res) =>{
    try {
        const {id} = req.body

        const isThereContent = await contentModel.findById({_id:id})

        if(!isThereContent)
        return res.status(402).send('there is no content with this id')

        const deletedContent = await contentModel.deleteOne({_id:id})
        
        if(!deletedContent)
        return res.status(404).send('content is not deleted')
   
        res.status(200).send('content succefully deleted')
    } catch (error) {
     console.log({error:error.message})   
    }
}

module.exports = deleteContent