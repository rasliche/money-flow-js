// js/models/transaction.js

var app = app || {};

// Transaction Model
// -----------------

app.Transaction = Backbone.Model.extend({
  defaults: {
    date: new Date(),
    flow: 0,
    category: 'unknown',
    cleared: false
  }
});
