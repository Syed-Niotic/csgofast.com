var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', {
        layout: 'layout',
        title: 'CSGOFAST.COM - TRY YOUR LUCK!'
    })
})

module.exports = router;
