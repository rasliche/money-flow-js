// js/app.js

var trans1 = new Transaction({
  flow: 5,
  category: 'Fuel'
});

var trans2 = new Transaction({
  flow: 40,
  category: 'Restaurants'
});

var transactions = new Transactions([trans1,trans2]);
