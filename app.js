var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
//Doing this gives the flexibility to set port in terminal
// eg:  PORT=4000 NODEMON  // now it gets loaded in localhost:4000

app.get('/', function(req, res) {

  res.send(`<h1>Welcome</h1><p>Roux Academy Meetups</p>`);
});


app.get('/speakers', function(req, res) {
  var info = '';
  dataFile.speakers.forEach(function(el) {
    info += `
    <li>
    <h2>${el.name}</h2>
    <p>${el.summary}</p>
    </li>
    `;
  })

  res.send(`<h1>Roux Academy Meetups</h1>${info}`);
});


app.get('/speakers/:speakerid', function(req, res) {
  var speaker = dataFile.speakers[req.params.speakerid];

  res.send(`<h1>Roux Academy Meetups</h1>${info}`);
});


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// var http = require('http');
//
// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Roux Meetups</h1>');
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');
