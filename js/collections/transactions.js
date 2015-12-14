// js/collections/transactions.js

var app = app || {};

// Transactions Collection
// -----------------------

var Transactions = Backbone.Collection.extend({
  model: app.Transaction

});

app.Register = new Transactions();
