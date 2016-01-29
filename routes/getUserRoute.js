var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user/:id', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.findById(req.params.id,function(e,docs){
    res.send(docs);
  });
});

module.exports = router;
