// js/app.js

var trans1 = new app.Transaction({
  flow: 5,
  category: 'Fuel'
});

var trans2 = new app.Transaction({
  flow: 40,
  category: 'Restaurants'
});

app.Register.add(trans1);
app.Register.add(trans2);
