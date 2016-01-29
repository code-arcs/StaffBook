var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var getUsers = require('./routes/getUsersRoute');
var setUsers = require('./routes/setUsersRoute');


var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file);
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require('mongodb');
var monk = require('monk');
var db = monk('192.168.99.100:27017/test');
// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/', getUsers);
app.use('/', setUsers);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
