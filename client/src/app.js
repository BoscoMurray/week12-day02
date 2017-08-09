var PriceView = require('./views/priceView');


var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;

  var priceString = this.responseText;
  var prices = JSON.parse(priceString);
  var priceView = new PriceView(prices);
}

var app = function(){
  var url = "http://localhost:3000/prices";
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);