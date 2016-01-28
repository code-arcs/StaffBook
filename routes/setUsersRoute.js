var express = require('express');
var router = express.Router();

/* POST new user. */
router.post('/user', function(req, res, next) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username || "Username";
  var userEmail = req.body.useremail || "user.name@web.de";

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("users");
    }
  });
});

module.exports = router;
