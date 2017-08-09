var express = require('express');
var apiRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;

apiRouter.get('/', function(req, res) {
  
  res.json({ data: db });

});

apiRouter.get('/:id', function(req, res) {

});

apiRouter.post('/', function(req, res) {
  
});

module.exports = apiRouter;