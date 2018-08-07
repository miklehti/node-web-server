const express = require('express');

var app = express();

// eka url ja toka funktio joka suoritetaan. funktio ottaa syötteenään req ja res.
app.get('/', (req, res) => {
  // palautta text/html
  // res.send('<h1>Hello Express!<h1>');
  // palautta json
  res.send({
    name: 'Mikko',
    lastName: 'Lehtinen'
  });
});

// toinen route
app.get('/hello', (req, res) => {
  res.send("Heippa!");
});

// kolmas route
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Something bad happened'
  });
});

// sitoo aplikaation johonkin porttiin.
app.listen(3000);
