const express = require('express')
const http = require('http');
const { Server } = require('socket.io');
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


const app = express()

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('database successfully connected')
})
.catch((err)=>{
    console.log(err.message)
})


// Attach Socket.IO instance to the req object
app.use((req, res, next) => {
    req.io = io;
    next();
  });
  
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

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  
    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });

const PORT = 3600;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});