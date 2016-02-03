var express = require('express');
var router = express.Router();

/* search for user */
router.get('/users/search/:term', function (req, res, next) {
    var db = req.db;
    var collection = db.get('usercollection');
    var re = new RegExp(req.params.term, 'i');
    collection.find({name: re}, function (e, docs) {

        res.send(transformToSpotlightDataStructure(docs));
    });

    function transformToSpotlightDataStructure(docs) {
        var items = docs.map(member => {
            member.type = 'staffBookMember';
            return member;
        });
        return [
            {
                "name": "StaffBook",
                "items": items
            }];
    }

});

module.exports = router;
