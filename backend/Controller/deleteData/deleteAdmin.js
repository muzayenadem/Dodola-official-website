const adminModel = require('../../Model/adminModel')
const deleteAdmin = async(req,res) =>{
    try {
        const {deleteAdminId} = req.params
         const {adminId} = req.admin
        

         console.log({adminId,deleteAdminId})
        const mainAdmin = await adminModel.findOne({_id:adminId})
        const isGeneralManager = mainAdmin.role.generalManager
    
        if(!isGeneralManager)
        return res.status(201).send("the admin is doesn't have general manager role ")

        const isThereAdmin = await adminModel.findById({_id:deleteAdminId})

        if(!isThereAdmin)
        return res.status(402).send('there is no admin with this id')

        const deletedAdmin = await adminModel.deleteOne({_id:deleteAdminId})
        
        if(!deletedAdmin)
        return res.status(404).send('the admin t is not deleted')

        res.status(200).send('content succefully deleted')
    } catch (error) {
     console.log({error:error.message})   
    }
}

module.exports = deleteAdmin