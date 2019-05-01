const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const UserDetails = require('../models/users')

passport.serializeUser((user, cb)=>{
    cb(null, user.id)
})
passport.deserializeUser((user, cb)=>{
    User.findById(id, function(err, user){
        cb(err, user)
    })
})

passport.use(new LocalStrategy(
    function(username, password, done){
        UserDetails.findOne({
            username: username
        }, function(err, user){
            if (err){ return done(err)}
            if(!user) {return done(null, false)}
            if(user.password != password) {return done(null, false)}
            return done(null, user);
        })   
    }
))
