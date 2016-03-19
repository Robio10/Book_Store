var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sess = req.session;
    if(sess.user_name)
        res.render('main_page', {user_name: sess.user_name});
    else
        res.redirect('/');
});

module.exports = router;
