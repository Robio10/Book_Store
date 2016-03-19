var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var sess = req.session;
    var email_id = req.body.email_id;
    var password = req.body.password;
    console.log(typeof(email_id));
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/User_List';
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            var collection = db.collection('users_details');
            collection.find({"_id": email_id, "password": password}).toArray(function (err, result) {
                if (err) {
                    res.redirect('/');
                } else if (result.length) {
                    sess.user_name = req.body.email_id;
                    res.redirect('/main_page');
                } else {
                    console.log('No document(s) found with defined "find" criteria!');
                    res.redirect('/');
                }
                db.close();
            });
        }
    });

});
/* GET home page. */
module.exports = router;

