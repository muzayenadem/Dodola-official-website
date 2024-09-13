const jwt = require('jsonwebtoken')


const admin = require('../firebase/admin');
const JobModel = require('../../Model/jobModel');

const postJob = async(req,res) =>{
    const bucket = admin.storage().bucket(); 
    try {
  
        const adminToken = req.cookies.adminToken

        if(!adminToken)
        return res.status(404).send('not authorized')

        const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)

        if(!verify)
        return res.status(403).send('not authenticated')

        // take data from client
        let {data} = req.body
        data = JSON.parse(data)
        const files = req.files
      
        if(!data)
          return res.status(404).send('there is no data')
  

        const uploadPromises = files.map(async (file) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            const fileRef = bucket.file(`JobsImages/${fileName}`);
     
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
     
          const imagesUrl = await Promise.all(uploadPromises);
        
          console.log({imagesUrl})
        const newJob = new JobModel({
            adminId:verify.adminId,
            job:data.postData,
            images:imagesUrl,
            company:data.company,
            address:data.address,
        })
        const savedJob = await newJob.save()
        console.log({verify})
     
        res.status(200).send(savedJob)
        console.log({savedJob})
    } catch (error) {
        res.status(403).send(error.message)
        console.log({error:error.message})
    }
}

module.exports = postJob