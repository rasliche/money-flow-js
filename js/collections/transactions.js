// js/collections/transactions.js

var app = app || {};

// Transactions Collection
// -----------------------

var Transactions = Backbone.Collection.extend({
  model: app.Transaction,

  localStorage: new Backbone.LocalStorage('transactions-backbone')

});

app.Register = new Transactions();
