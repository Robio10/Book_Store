var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/sign_up', function(req, res, next) {
  res.render('sign_up');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/log_out', function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

module.exports = router;
