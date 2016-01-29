var express = require('express');
var router = express.Router();

/* POST new user. */
router.post('/user', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert(req.body, function (err, doc) {
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
