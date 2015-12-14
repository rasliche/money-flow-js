// js/app.js

var trans1 = new app.Transaction({
  flow: 5,
  category: 'Fuel'
});

var trans2 = new app.Transaction({
  flow: 40,
  category: 'Restaurants'
});

var transactions = new Transactions();
transactions.add(trans1);
transactions.add(trans2);
