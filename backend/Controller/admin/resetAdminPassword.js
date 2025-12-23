const adminModel = require('../../../adminModel')

const resetAdminPassword = async (req,res) =>{
    try{
        const adminId = req.adminId

        isThereAdmin = adminModel.find({_id:adminId})
        if(!isThereAdmin) 
            return res.status(402).send("not authanticated")

        const {generalManager} = isThereAdmin.role

        if(!generalManager)
            return res.status(402).send("you dont have the permision to reset the admin password")



    } catch (error) {
        res.status(500).sesnd({error:error.message})
    }
}