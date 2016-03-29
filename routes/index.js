var express = require('express')
var router = express.Router()

var passport = require('passport')
var filters = require('./lib/appfilters')

router.get('/', function(req, res) {
    res.render('www/index', {
        title: 'CSGOFAST.COM - TRY YOUR LUCK!',
        user: req.user
    })
})

router.get('/auth/login', passport.authenticate('steam', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('/');
})

router.get('/auth/return', passport.authenticate('steam', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('/');
})

router.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}

module.exports = router;
