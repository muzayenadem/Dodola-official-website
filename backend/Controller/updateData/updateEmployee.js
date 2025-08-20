const jwt = require('jsonwebtoken')
const admin = require('../firebase/admin');
const adminModel = require('../../Model/adminModel');
const EmployeeModel = require('../../Model/EmployeeModel');
 const updateEmployee = async (req,res) =>{
     const bucket = admin.storage().bucket(); 
    try {
        const {adminId} = req.admin
        const {employeeId} = req.params
        
        const mainAdmin = await adminModel.findOne({_id:adminId})
        const isEventManager = mainAdmin.role.employeeManager
        
        const {updatedEmployeeData} = JSON.parse(req.body.data)
        const {files}  = req.files ? req : null
    
        
        let newFiles = updatedEmployeeData.files
       
        if(!isEventManager)
        return res.status(403).send("you don't have event manager role ")
        

        const loginnedAdmin = await adminModel.findOne({_id:adminId})
        if(!loginnedAdmin)
        return res.status(403).send('not admin data')
        


        let filesUrl
        if (files.length){
            const uploadPromises = files.map(async (file) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            const fileRef = bucket.file(`EmployeesImages/${fileName}`);
     
            const stream = fileRef.createWriteStream({
              metadata: {
                contentType: file.mimetype
              }
            });
     
            await new Promise((resolve, reject) => {
              stream.on('error', reject);
              stream.on('finish', resolve);
              stream.end(file.buffer);
            });
     
            await fileRef.makePublic();
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileRef.name}`;

            return publicUrl
          });

          filesUrl = files.length && await Promise.all(uploadPromises)
        }

        filesUrl && console.log({filesUrl})
        if(filesUrl){
            newFiles = [...filesUrl,...updatedEmployeeData.files]
        }

        delete updatedEmployeeData.files
           const updatedEmployee = {
                ...updatedEmployeeData,
                images: newFiles,     // update file urls (image/video from firebase)
                updatedBy:adminId,
                updatedDate: new Date(),
                };


            const result = await EmployeeModel.findByIdAndUpdate(
            { _id: employeeId},
            { $set: updatedEmployee },
            { new: true } // return the updated document
            );

            if (!result) {
            return res.status(404).json({ message: "News not found" });
            }

             res.status(200).json({ message: "News updated successfully", data: result });
    } catch (error) {
        res.status(403).send(error.message)
        console.log({error:error.message})
    }
}

module.exports = updateEmployee 