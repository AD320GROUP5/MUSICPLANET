
const express = require('express');
const app = express();
const path = require('path')
const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


var http = require('http');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(8080);






