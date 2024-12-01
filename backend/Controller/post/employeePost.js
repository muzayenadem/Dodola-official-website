
const adminModel = require('../../Model/adminModel')

const admin = require('../firebase/admin');
const EmployeeModel = require('../../Model/EmployeeModel');

const employeePost = async(req,res) =>{
    const bucket = admin.storage().bucket(); 
    try {
      const {adminId} = req.admin
     
      const mainAdmin = await adminModel.findOne({_id:adminId})
      const isGeneralManager = mainAdmin.role.generalManager
   


      if(!isGeneralManager)
      return res.status(403).send("you don't have jobs manager role ")


        // take data from client
        let {data} = req.body
        data = JSON.parse(data)
        const files = req.files
        const   {category,title,description,date,employeeName,employeeEmail,employeePhone} = data.postData

        const isAlreadyEmployee = await EmployeeModel.findOne({
          $or: [{ email: employeeEmail }, { phone: employeePhone }]
        });
        

        if(isAlreadyEmployee)
        return res.status(402).send("this employee is already exist")

        console.log({data})
      
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
        const newEmployee = new EmployeeModel({
             adminId:adminId,
             images:imagesUrl,
             fullName:employeeName,
             email:employeeEmail,
             phone:employeePhone,
             category,
             title,
             detail:description,
             date,
            postedDate:new Date(),
        })
        const savedEmployee = await newEmployee.save()
     
        res.status(200).send(savedEmployee)
        console.log({savedEmployee})
    } catch (error) {
        res.status(403).send(error.message)
        console.log({error:error.message})
    }
}


module.exports = employeePost