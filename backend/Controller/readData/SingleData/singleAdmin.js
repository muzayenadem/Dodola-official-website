const adminModel = require("../../../Model/adminModel")

const singleAdmin = async (req,res) =>{
    try {
        const {adminId} = req.params;
        const general_adminId = req.admin.adminId

        const generalAdmin = await adminModel.find({_id:general_adminId})
        const {generalManager} = generalAdmin[0].role
        if(!generalManager) 
            return res.status(403).send({"error":"you don't have the permission to read this data"})
        
        const is_single_admin = await adminModel.find({_id:adminId})
        if (!is_single_admin)
            return res.status(404).send({"error":"there is no adin with this id"})

        return res.status(200).send(is_single_admin)
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = singleAdmin