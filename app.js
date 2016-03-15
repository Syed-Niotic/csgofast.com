var ejs      = require('ejs')
var path     = require('path')
var express  = require('express')
var port     = process.env.PORT || 3000
var partials = require('express-partials')

var routes = require('./routes/index')
var users  = require('./routes/users')

var app = express()

app.set('views', './views')

app.use(partials())
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

app.use('/', routes)
app.use('/users', users)

console.log('Express server listening on port *: ' + port + ' ')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
