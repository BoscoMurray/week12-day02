var express = require('express');
var priceRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;

priceRouter.get('/', function(req, res) {

  MongoClient.connect('mongodb://localhost:27017/bitcoin_monero', function(err, database){
    if(err) {
      console.log(err);
      return;
    }
    db = database;
  });
  db.collection('prices').find().toArray(function(err, results){
    res.json(results);
  });
});

priceRouter.post('/', function(req, res){
  db.collection('prices').save(req.body, function(err, result){
    res.redirect('/');
  });
});

priceRouter.post('/delete', function(req, res) {
  db.collection('prices').drop(function(){
    res.redirect('/');
  });
});

module.exports = priceRouter;