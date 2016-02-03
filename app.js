var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('mongodb');
var monk = require('monk');
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null,Date.now()  + '-' + file.originalname)
    }
});

var upload = multer({ storage: storage });
var db = monk('192.168.99.100:27017/test');
var app = express();


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

/*Routes*/
var routes = require('./routes/index');
var getUsers = require('./routes/getUsersRoute');

var setUser = require('./routes/setUserRoute');
var getUser = require('./routes/getUserRoute');
var updateUser = require('./routes/updateUserRoute');
var deleteUser = require('./routes/deleteUserRoute');
var setUsersPicture = require('./routes/setUserPictureRoute');
var searchRoute = require('./routes/searchRoute');

app.use('/', routes);
app.use('/', getUsers);

app.use('/', getUser);
app.use('/', setUser);
app.use('/', updateUser);
app.use('/', deleteUser);
app.use('/', searchRoute);
app.post('/user/:id/avatar', upload.single('avatar'), setUsersPicture);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
