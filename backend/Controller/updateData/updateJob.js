const newsModel = require('../../Model/newsModel')
const jwt = require('jsonwebtoken')
const admin = require('../firebase/admin');
const adminModel = require('../../Model/adminModel');
const JobModel = require('../../Model/jobModel');
 const updateJob = async (req,res) =>{
     const bucket = admin.storage().bucket(); 
    try {
        const {adminId} = req.admin
        const {jobId} = req.params
        console.log({adminId,jobId})

        const mainAdmin = await adminModel.findOne({_id:adminId})
        const isEventManager = mainAdmin.role.jobsManager
         
        const { job, address, company } = JSON.parse(req.body.data);
        const {files}  = req.files ? req : null
        console.log({job,address,company,files})

        let newFiles = job.files

        if(!isEventManager)
        return res.status(403).send("you don't have job manager role ")
        
        const loginnedAdmin = await adminModel.findOne({_id:adminId})
        if(!loginnedAdmin)
        return res.status(403).send('not admin data')
        

        const {fname,lname,email,_id} = loginnedAdmin
        const admin = {fname,lname,email,_id}
        let filesUrl
        if (files.length){
            const uploadPromises = files.map(async (file) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            const fileRef = bucket.file(`JobFile/${fileName}`);
     
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
            newFiles = [...filesUrl,...job.files]
        }

        console.log({updatedFiles:newFiles})

        delete job.files
           const updatedJob = {
                job,
                images:newFiles,
                company,
                address,  // update file urls (image/video from firebase)
                updatedBy:admin,
                updatedDate: new Date(),
                };

                console.log({updatedJob})

            const result = await JobModel.findByIdAndUpdate(
            { _id: jobId},
            { $set: updatedJob },
            { new: true } // return the updated document
            );

            if (!result) {
            return res.status(404).json({ message: "News not found" });
            }

             res.status(200).json({ message: "Job updated successfully", data: result });
    } catch (error) {
        res.status(403).send(error.message)
        console.log({error:error.message})
    }
}

module.exports = updateJob