const adminModel = require("../../Model/adminModel")

// const adminModel = require('../../adminModel')
const suspendAdmin = async(req,res) =>{
    try {
        const {adminId} = req.params
        const status = await adminModel.find({_id:adminId})
        const suspension = status[0].suspended
        const suspensionAdmin = await adminModel.findByIdAndUpdate(
        { _id: adminId },
        { $set: {
            suspended: !suspension
           } },
        { new: true }
        )
        
        await suspensionAdmin.save()
        res.status(200).send('Admin suspension succesfull changed');
    } catch (error) {
        console.log({error:error.message})
        res.status(500).send(error.message)   
    }
}
module.exports = suspendAdmin