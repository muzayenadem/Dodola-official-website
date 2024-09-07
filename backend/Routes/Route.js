const express = require('express')
const createAdmin = require('../Controller/admin/createAdmin')
const data = require('../Controller/samp')
const route = express.Router()

route.get('/',data)


 
route.post('/create-admin',createAdmin)
module.exports = route