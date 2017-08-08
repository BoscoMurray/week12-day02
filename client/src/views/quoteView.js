var QuoteView = function(prices){
  this.render(prices);
}

QuoteView.prototype = {
  render: function(prices){
    
    console.log(prices);
    prices.forEach( function(price){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('prices');
      text.innerText = price.date + ": " + '"' + price.price + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = QuoteView;