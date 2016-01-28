var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.send(docs);
  });
});

module.exports = router;
