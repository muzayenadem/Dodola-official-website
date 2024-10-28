const adminModel = require('../../Model/adminModel')
const adminData = async (req,res)=>{
    try {
        const {adminId} = req.admin
        console.log({adminId})

        const admin = await adminModel.findOne({_id:adminId})
       
        if(!admin)
        return res.status(201).send("there is no admin here with this ")
       

        res.status(200).send(admin)
    } catch (error) {
        console.log({error:error.message})
    }
}
module.exports = adminData