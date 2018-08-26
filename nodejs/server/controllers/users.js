/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    User = mongoose.model('User'),
    pw = require('../helpers/passwordGenerator/passwordGenerator');
    var logger = require("../shared/lib/logger");

    exports.signin = function(req, res, next, passport) {
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                logger.info(info.message);
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
    
                req.theUser = user;
                //exports.show(req, res, next);
                //logger.info("req.theUser"+req.theUser);
                res.send(user);
    
            });
        })(req, res, next);
    
    };









/**
 * Show login form
 */
exports.signin = function(req, res, next, passport) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            logger.info(info.message);
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }

            req.theUser = user;
            //exports.show(req, res, next);
            //logger.info("req.theUser"+req.theUser);
            res.send(user);

        });
    })(req, res, next);

};

/**
 * Create user
 */
exports.create = function(req, res) {

    //logger.info("inpost log");
    const timer = logger.startTimer();
    var theUser = new User(req.body);

    // generates a new random password
    //theUser.password = pw.generate(15);

    theUser.save(function(err) {

        if (err) {
            logger.info(err);
        } else {
            res.send(theUser);
        }
    });
    timer.done(`register time`);

};


/**
 * List of Users
 */
exports.all = function(req, res) {
    console.log("ccccccc",req.theUser);
    var select = '';

    
    User.find({}).select(select).sort('-fullname').exec(function(err, users) {
        if (err) {
            logger.info(err);
        } else {
            //logger.info(users);
            res.send(users);
        }
    });
};

