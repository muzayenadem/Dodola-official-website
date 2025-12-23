const adminModel = require('../../Model/adminModel')

const updateAdminRole = async (req,res)=>{
    try{
        const {adminId} = req.admin
        const {fname,lname,email,phone,role} = req.body
        console.log({data_from_client:req.body})
        const editId = req.params.adminId

        const isThereAdmin = await adminModel.find({_id:adminId})
        if (!isThereAdmin)
            return res.status(404).send('there is no admin with this id')

        const isGeneralManager = isThereAdmin[0]?.role.generalManager

        if(!isGeneralManager)
            return res.status(403).send("you don't have the permission to do this")

        const isEditAdminThere = adminModel.find({_id:editId})
        if (!isEditAdminThere)
            return res.status(403).send('there is no admin with this id')

        
        const updateAdmin = await adminModel.findByIdAndUpdate(
                  { _id: editId },
                  { $set: {
                    fname: fname ? fname : null,
                    lname: lname ? lname : null,
                    email: email ? email : null,
                    phone: phone ? phone : null,
                    role: role ? role : null                } },
                  { new: true }
                );
                await updateAdmin.save()
                res.status(200).send('Admin role and profile updated successfully.');
    } catch(error){
        console.log({error:error.message})
        res.status(500).send(error.message)
    }
}
module.exports = updateAdminRole