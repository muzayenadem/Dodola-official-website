const express = require('express')
const  route  = require('./Routes/Route')
const mongoose = require('mongoose')
const session = require('express-session')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
dotenv.config({path:'./.env'})
require('dotenv').config();
require('./Middleware/passportAuth')
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('database successfully connected')
})
.catch((err)=>{
    console.log(err.message)
})


const app = express()
app.use(cors({ 
    origin:['https://dodola-official-website.vercel.app','http://localhost:5173','https://dodola-official-website-git-main-muzayen.vercel.app'],
     credentials:true,
     methods: 'GET,POST,PUT,DELETE',
     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
   }))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))


app.use(session({secret:'cats'}))
//app.use(require('express-session')({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(route)
app.listen(3600,()=>{
    console.log('succeed')
})