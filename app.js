var ejs = require('ejs')
var path = require('path')
var express = require('express')
var port = process.env.PORT || 3000

var app = express()

// app.set('views', './views/pages')
app.set('views', './static')
// app.set('view engine', 'jade')
app.engine('html', ejs.renderFile)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('Express server listening on port *: ' + port + ' ')

// Route_index
app.get('/', function(req, res) {
    res.render('index.html', {
        title: 'CSGOFAST.COM - TRY YOUR LUCK!'
    })
})
