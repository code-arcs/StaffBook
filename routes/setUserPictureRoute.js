

module.exports = function (req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');

  collection.update(req.params.id, {$set: {avatar: req.file.path.split('public')[1].split('\\').join('/')}}, response);

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
};
