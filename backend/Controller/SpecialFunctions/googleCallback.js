const passport = require('passport')
const googleCallback =  passport.authenticate('google',{
        successRedirect: '/authorized',
        failureRedirect:'/unauthorized'
    })


module.exports = googleCallback