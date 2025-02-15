const express = require('express')
const createAdmin = require('../Controller/admin/createAdmin')
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
const searchJobs = require('../Controller/readData/searchJobs')
const deleteContent = require('../Controller/deleteData/deleteContent')
const deleteJob = require('../Controller/deleteData/deleteJob')
const askQuestions = require('../Controller/SpecialFunctions/askQuestions')
const questions = require('../Controller/readData/questions')
const newsPost = require('../Controller/post/newsPost')
const news = require('../Controller/readData/news')
const deleteNew = require('../Controller/deleteData/deleteNews')
const filterNews = require('../Controller/readData/filterNews')
const searchNews = require('../Controller/readData/searchNews')
const admins = require('../Controller/readData/admins')
const adminData = require('../Controller/readData/adminData')
const updateAdminProfile = require('../Controller/updateData/updateAdmin')
const changeAdminPassword = require('../Controller/updateData/changeAdminPassword')
const employeePost = require('../Controller/post/employeePost')
const employee = require('../Controller/readData/employee')
const deleteEmployee = require('../Controller/deleteData/deleteEmployee')
const filterEmployee = require('../Controller/readData/filterEmployee')
const setNewsComment = require('../Controller/ExtraFunctions/Comments/setNewsComment')
const singleNews = require('../Controller/readData/SingleData/singleNews')
const { likeComment, dislikeComment } = require('../Controller/ExtraFunctions/Comments/likeAndDeslikeOfComment')
const { likeAndDislikeNews } = require('../Controller/ExtraFunctions/Likes/LikeAndDislikeNews')
const shareNews = require('../Controller/ExtraFunctions/Shares/shareNews')
const singleContent = require('../Controller/readData/SingleData/singleContent')
const releatedContent = require('../Controller/readData/releatedContent')
const route = express.Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });


// google authenticate
route.get('/use/google',useGoogle)
route.get('/auth/google',authGoogle)
route.get('/google/callback',googleCallback)
route.get('/authorized',isLogginedWithGoogle, authorized)
route.get('/unauthorized', unauthorized)
//authorized admin
route.get('/authorized-admin',isLogginedWithEmail,authorizedAdmin)

// is admin loggined
route.get('/admin-data',isLogginedWithEmail,adminData)
route.get('/isadminloggined',isAdminLoggined)

// read data from database
route.get('/contents',content)
route.get('/filter-content',filterContent)
route.get('releated-content', releatedContent)
route.get('/jobs',jobs)
route.get('/filter-jobs',filterJobs)
route.get('/search-jobs',searchJobs)
route.get('/news',news)
route.get('/employee',employee)
route.get('/filter-employee', filterEmployee)
route.get('/filter-news',filterNews)
route.get('/search-news',searchNews)
// read single data from database
route.get('/single-news/:newsId',singleNews)
route.get('/single-content/:contentId',singleContent)

// POST METHOD 
route.post('/create-admin',isLogginedWithEmail,createAdmin)
route.post('/login-admin',loginAdmin)
//GET METHOD
route.get('/admins',isLogginedWithEmail,admins)

//POST METHOD
route.post('/post-main-content',isLogginedWithEmail,upload.array('files'),contentPost)
route.post('/post-job',isLogginedWithEmail,upload.array('files'),postJob)
route.post('/post-news',isLogginedWithEmail,upload.array('files'),newsPost)
route.post('/post-employee',isLogginedWithEmail,upload.array('files'),employeePost)


//QUESTIONS
route.post('/ask',askQuestions)
route.get('/questions',isLogginedWithEmail,questions)
//DELETE METHODS
route.post('/delete-content',isLogginedWithEmail,deleteContent)
route.post('/delete-job',isLogginedWithEmail,deleteJob)
route.post('/delete-news',isLogginedWithEmail,deleteNew)
route.post('/delete-employee',isLogginedWithEmail,deleteEmployee)

//Extra Routes like comments, like and share
route.post('/new-comment',setNewsComment)
route.put('/comment/like/:commentId', likeComment)
route.put('/comment/dislike/:commentId', dislikeComment)
//like news
route.post('/news/reaction/:newsId', likeAndDislikeNews)
//share routes
route.get('/news/:id/share',shareNews)


//UPDATE METHODS
route.put('/update-admin-profile',isLogginedWithEmail,upload.any('image'),updateAdminProfile)
route.put('/change-admin-password',isLogginedWithEmail,changeAdminPassword)


module.exports = route