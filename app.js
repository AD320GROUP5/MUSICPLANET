
var express = require('express');
var path = require('path');




var indexRouter = require('./routes/index');
var viewRouter = require('./routes/view');
var deleteRouter = require('./routes/delete');
var addRouter = require('./routes/add');
var aboutRouter = require('./routes/about');
var editRouter = require('./routes/edit');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/view', viewRouter);
app.use('/delete', deleteRouter);
app.use('/add', addRouter);
app.use('/about', aboutRouter);
app.use('/edit', editRouter);


.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.send(404, 'SORRY!!!  PAGE NOT FOUND!');

});

module.exports = app;
//app.listen(8080);
