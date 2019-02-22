


var express = require('express');


var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

.get('/view', (req, res) => {
  res.render('view')
})

.get('/add', (req, res) => {
  res.render('add')
})

.get('/oldmp', (req, res) => {
  res.render('oldmp')
})

app.get('/about', (req, res) => {
  res.render('about', { getName: () => 'Flavio' })
})

.get('/pugone', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('You\’re in reception. How can I help you?');

})


.get('/basement', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('You\’re in the wine cellar. Those bottles are mine!');

})


.get('/floor/1/bedroom', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('Hey, this is a private area!');

})

.get('/door/:floornum/bedroom', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('You are in the bedroom on floor n°' + req.params.variablename);

})

.get('/count/:number', function(req, res) {

    var names = ['Robert', 'Jack', 'David'];

    res.render('page.ejs', {counter: req.params.number, names: names});

})

.get('/floor/:floornum/bedroom', function(req, res) {

    res.render('bedroom.ejs', {floor: req.params.floornum});

})

.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.send(404, 'Page cannot be found!');

});


app.listen(8080);