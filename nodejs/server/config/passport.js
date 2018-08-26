var mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GitHubStrategy = require('passport-github').Strategy,
    GoogleStrategy = require('passport-google-oauth20');
    User = mongoose.model('User');
    var logger = require("../shared/lib/logger");
var BasicStrategy = require('passport-http').BasicStrategy;


module.exports = function(passport) {
    //Serialize sessions
    //push user into the session
    passport.serializeUser(function(user, done) {
        //console.log('serialize user???');
        done(null, user.id);
    });

    //take out user from session
    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }, function(err, user) {
            if (user._id) user.userId = user._id;
            done(err, user);
        });
    });
    
    
/*
    passport.use(new BasicStrategy(
        function(username, password, done) {
            User.findOne({
                username: username
            }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                if (!user.authenticate(password)) {
                    return done(null, false);
                }
                return done(null, user);
            });
        }
    ));
*/

// =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({

        clientID        : "1008570235583-r01m8beq98c5u7mfjpp60c83qk5lmc3o.apps.googleusercontent.com",
        clientSecret    : "mhQTQbT8B2DfOyOfRJTFF3wA",
        callbackURL     : "http://localhost:3000/api/auth/google/callback",

    },
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            console.log("profile",profile.id);
            
        });

    }));

   //Use local strategy
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(email, password, done) {
            User.findOne({
                email: email
            }, function(err, user) {
			
				logger.info("passport"+password);
                if (err) {
				//console.log("passporterror"+err);
                    return done(err);
					}
                if (!user) {
                    return done(null, false, {
                        message: 'Unknown user'
                    });
                }
                if (!user.authenticate(password)) {
                    return done(null, false, {
                        message: 'Invalid passwordd'
                    });
                }
                logger.info('Founds user!');
                return done(null, user);
            });
        }
    ));

    

   


    
};
