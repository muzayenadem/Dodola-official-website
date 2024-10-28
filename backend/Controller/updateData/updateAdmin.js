const adminModel = require('../../Model/adminModel')
const admin = require('../firebase/admin')

const updateAdminProfile = async (req,res) =>{
    const bucket = admin.storage().bucket(); 
    try {
        let {data} = req.body
        const {adminId} = req.admin
        console.log({adminId})
        data = JSON.parse(data)
        const files = req.files;
        const {fname,lname,email,phone} = data
        console.log({fname,lname,email,phone})
        

        let profileImgUrl, coverImgUrl;

        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileName = `${Date.now()}-${file.originalname}`;
                const fileRef = bucket.file(
                    file.fieldname === 'profileImg'
                        ? `AdminProfile/${fileName}`
                        : file.fieldname === 'cover'
                        ? `AdminCover/${fileName}`
                        : null
                );

                if (!fileRef) continue;  // Skip if it's not profileImg or cover

                const stream = fileRef.createWriteStream({
                    metadata: {
                        contentType: file.mimetype,
                    },
                });

                await new Promise((resolve, reject) => {
                    stream.on('error', reject);
                    stream.on('finish', resolve);
                    stream.end(file.buffer);
                });

                await fileRef.makePublic();
                const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileRef.name}`;

                if (file.fieldname === 'profileImg') {
                    profileImgUrl = publicUrl;
                } else if (file.fieldname === 'cover') {
                    coverImgUrl = publicUrl;
                }
            }
        }

        coverImgUrl && console.log({coverImgUrl})
        profileImgUrl && console.log({profileImgUrl})
        //Update admin details here 
        const updateAdmin = await adminModel.findByIdAndUpdate(
          { _id: adminId },
          { $set: {
            fname: fname ? fname : null,
            lname: lname ? lname : null,
            email: email ? email : null,
            phone: phone ? phone : null,
            profileImg: profileImgUrl ,
            coverImg: coverImgUrl
        } },
          { new: true }
        );
        res.status(200).send('Admin profile updated successfully.');
    } catch (error) {
        res.status(500).send('something is error')
        console.log({error:error.message})
    }
}

module.exports = updateAdminProfile