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
const route = express.Router()

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




// POST METHOD 
route.post('/create-admin',createAdmin)
route.post('/login-admin',loginAdmin)

// is admin loggined
route.get('/isadminloggined',isAdminLoggined)



module.exports = route