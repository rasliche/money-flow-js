// js/models/transaction.js

var Transaction = Backbone.Model.extend({
  defaults: {
    date: new Date(),
    flow: 0,
    category: '',
    cleared: false
  }
});
