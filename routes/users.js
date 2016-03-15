var express = require('express')
var router = express.Router()

router.post('/users/auth/steam', function(req, res) {
    res.redirect('/')
})

module.exports = router;
