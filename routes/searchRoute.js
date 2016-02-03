var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search/:name', function (req, res, next) {
    //var db = req.db;
    //var collection = db.get('usercollection');
    //collection.findById(req.params.id,function(e,docs){
    //  res.send(docs);
    //});

    res.send([
        {
            "name": "StaffBook",
            "items": [
                {
                    "name": "First result in category", // Will be shown in the results list panel
                    "type": "staffBookMember", // Will be used to load custom icons / templates in the result item detail panel
                    "description": "Whatever description" // Additional attriutes which can be accessed in custom result item detail panel
        },{
                    "name": "First result in category", // Will be shown in the results list panel
                    "type": "staffBookMember", // Will be used to load custom icons / templates in the result item detail panel
                    "description": "Whatever description" // Additional attriutes which can be accessed in custom result item detail panel
                }
    ]}])
});

module.exports = router;
