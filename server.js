var express = require('express');
var parser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var db;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

// app.use(require('./controllers/index.js'));



app.get('/prices', function(req, res) {
  db.collection('prices').find().toArray(function(err, results){
    res.json(results);
  });
});

app.post('/prices', function(req, res){
  db.collection('prices').save(req.body, function(err, result){
    res.redirect('/');
  });
});

app.post('/delete', function(req, res) {
  db.collection('prices').drop(function(){
    res.redirect('/');
  });
});

MongoClient.connect('mongodb://localhost:27017/bitcoin_monero', function(err, database){
  if(err) {
    console.log(err);
    return;
  }
  db = database;

  console.log('Connected to database');

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});


// the below is not actually needed - express libraries automatically look for and use the index.html in build.
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});


//express library
//calback(requestObject, responseObject);
app.get('/api/prices', function(req, res) {
  db.collection('prices').find().toArray(function(err, results){
    res.json(results);
  });
});


app.get('/api/:id', function(req, res) {

});

app.post('/api', function(req, res) {
  
});