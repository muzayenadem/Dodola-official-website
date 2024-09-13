const express = require('express')
const createAdmin = require('../Controller/admin/createAdmin')
const data = require('../Controller/samp')
const loginAdmin = require('../Controller/admin/loginAdmin')
const googleCallback = require('../Controller/SpecialFunctions/googleCallback')
const useGoogle = require('../Controller/SpecialFunctions/useGoogle')
const authGoogle = require('../Controller/SpecialFunctions/authGoogle')
const authorized = require('../Controller/SpecialFunctions/authorized')
const unauthorized = require('../Controller/SpecialFunctions/unauthorized')
const isLogginedWithGoogle = require('../Middleware/isLogginedWithGoogle')
const isLogginedWithEmail = require('../Middleware/isLogginedWithEmail')
const authorizedAdmin = require('../Controller/admin/authorizedAdmin')
const isAdminLoggined = require('../Controller/admin/AdminToken/isAdminLoggined')
const contentPost = require('../Controller/post/contentPost')
const multer = require('multer')
const content = require('../Controller/readData/content')
const filterContent = require('../Controller/readData/filterContent')
const postJob = require('../Controller/post/postJob')
const jobs = require('../Controller/readData/jobs')
const filterJobs = require('../Controller/readData/filterJobs')
const route = express.Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });


// GET METHODS
route.get('/',data)
// google authenticate
route.get('/use/google',useGoogle)
route.get('/auth/google',authGoogle)
route.get('/google/callback',googleCallback)
route.get('/authorized',isLogginedWithGoogle, authorized)
route.get('/unauthorized', unauthorized)
//authorized admin
route.get('/authorized-admin',isLogginedWithEmail,authorizedAdmin)

// is admin loggined
route.get('/isadminloggined',isAdminLoggined)

// readdata from database
route.get('/contents',content)
route.get('/filter-content',filterContent)
route.get('/jobs',jobs)
route.get('/filter-jobs',filterJobs)


// POST METHOD 
route.post('/create-admin',createAdmin)
route.post('/login-admin',loginAdmin)

//POST METHOD
route.post('/post-main-content',isLogginedWithEmail,upload.array('files'),contentPost)
route.post('/post-job',isLogginedWithEmail,upload.array('files'),postJob)



module.exports = route