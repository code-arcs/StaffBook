var express = require('express');
var router = express.Router();

/* POST delete user. */
router.post('/user/:id', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');

  collection.remove({_id: req.params.id}, response);

  function response(err){
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
