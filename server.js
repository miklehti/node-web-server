const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

//handelbars example
app.set('view engine', 'hbs');
//käytetään middleware
app.use(express.static(__dirname + '/public'));

//middleware
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n');
  //blokkaa applikaation toimintaa kunnes next() on kutusuttu.
  next();
});

// maintanance kaikkeen, next puuttuuu joten jää tähän.
// app.use((req, res, next) =>{
//   res.render('maintanance.hbs');
// });

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

/* toinen route
app.get('/hello', (req, res) => {
  res.send("Heippa!");
});
*/

// hbs esimerkki
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});


// kolmas route, error
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Something bad happened'
  });
});

// sitoo aplikaation johonkin porttiin. toinen argumentti funktio
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
