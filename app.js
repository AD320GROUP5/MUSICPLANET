


var express = require('express');


var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/view', (req, res) => {
  res.render('view')
})

app.get('/delete', (req, res) => {
  res.render('delete')
})


app.get('/add', (req, res) => {
  res.render('add', { getName: () => 'Flavio' })
})

app.get('/delete', (req, res) => {
  res.render('delete')
})

app.get('/about', (req, res) => {
  res.render('about', { getName: () => 'Flavio' })
})

app.get('/edit', (req, res) => {
  res.render('edit', { getName: () => 'Flavio' })
})



.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.send(404, 'SORRY!!!  PAGE NOT FOUND!');

});


app.listen(8080);