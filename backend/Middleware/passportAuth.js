const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback: true,
  },
  function(req,accessToken,refreshToken, profile, cb) {

    profile = {...profile,refreshToken,accessToken}
      // Call done with the user object, which now includes the tokens;
    return cb(null,profile)
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  // Deserialize user information from the session
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });