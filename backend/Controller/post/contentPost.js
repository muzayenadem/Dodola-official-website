const jwt = require('jsonwebtoken')
const contentModel = require('../../Model/contentModel')
const adminModel = require('../../Model/adminModel')
const admin = require('../firebase/admin')
//const  translate = require('./translate');

const contentPost = async(req,res) =>{
    const bucket = admin.storage().bucket(); 
    try {
      const {adminId} = req.admin
      const mainAdmin = await adminModel.findOne({_id:adminId})
      const isContentManager = mainAdmin.role.contentManager
  
      if(!isContentManager)
      return res.status(403).send("you don't have content manager role ")

   

        // take data from client
        let {data} = req.body
        data = JSON.parse(data)
        const files = req.files

        // console.log('Attempting translation...');
        
        // const translatedText = await translate(data.title, 'en', 'fr');
        
        // console.log('Translation result:', translatedText);
        
        // if (translatedText) {
        //     return res.status(200).json({ normalText: translatedText });
        // } else {
        //     throw new Error('Empty translation response');
        // }

  
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
            adminId:adminId,
            ...data,
            images:imagesUrl,
            postedDate:new Date(),

        })
        const savedContent = await newContent.save()
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