const jwt = require('jsonwebtoken')
const contentModel = require('../../Model/contentModel')

const admin = require('../firebase/admin')

const contentPost = async(req,res) =>{
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

        const uploadPromises = files.map(async (file) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            const fileRef = bucket.file(`contentImages/${fileName}`);
     
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
        const newContent = new contentModel({
            adminId:verify.adminId,
            ...data,
            images:imagesUrl,
            postedDate:new Date(),

        })
        const savedContent = await newContent.save()
        console.log({verify})
        if(!data)
        return res.status(403).send('there is no data')

        res.status(200).send(savedContent)
        console.log({savedContent})
    } catch (error) {
        res.status(403).send(error.message)
        console.log({error:error.message})
    }
}

module.exports = contentPost