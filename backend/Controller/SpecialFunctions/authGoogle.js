const passport = require('passport')
const authGoogle = passport.authenticate('google', { 
    scope: ['profile', 'email'],
    accessType: 'offline',  // Necessary to get the refresh token
    prompt: 'consent'       // Ask for consent each time to get refresh token
 })
module.exports = authGoogle