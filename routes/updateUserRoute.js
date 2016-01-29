var express = require('express');
var router = express.Router();

/* POST update user. */
router.post('/user/:id', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');

  collection.update(req.params.id, {$set: {avatar: req.file.path}}, response);

  function response(err, doc){
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect(`/user/${req.params.id}`);
    }
  }
});

module.exports = router;
