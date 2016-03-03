var path = require('path')
var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('listening on *: ' + port + ' ')

// Route_index
app.get('/', function(req, res) {
  res.render('index', {
    title: 'CSGOFAST.COM - TRY YOUR LUCK!'
  })
})
