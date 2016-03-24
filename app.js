var ejs = require('ejs')
var path = require('path')
var express = require('express')
var passport = require('passport')
var port = process.env.PORT || 3000
var session = require('express-session')
var partials = require('express-partials')
var SteamStrategy = require('passport-steam').Strategy

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Steam profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser(function(obj, done) {
    done(null, obj);
})

// Use the SteamStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(new SteamStrategy({
        returnURL: 'http://localhost:3000/auth/return',
        realm: 'http://localhost:3000/',
        apiKey: '3EFED48BCD0D9C76C4D2608C10E906C3'
    },
    function(identifier, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function() {

            // To keep the example simple, the user's Steam profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Steam account with a user record in your database,
            // and return that user instead.
            profile.identifier = identifier;
            return done(null, profile);
        });
    }
))

var routes = require('./routes/index')

var app = express()

app.set('views', './views')

app.use(partials())
app.set('view engine', 'ejs')

app.use(session({
    secret: 'cs:go',
    name: 'user_steam',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    },
}));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

app.use('/', routes)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// })

console.log('Express server listening on port *: ' + port + ' ')

module.exports = app;
