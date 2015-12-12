// js/views/appview.js

// AppView controlling the application
// -----------------------------------
var appview = Backbone.View.extend({
  el: '.money-flow',

  events: {
    'click .new-transaction': 'createTransaction'
  },

  initialize: function() {},

  createTransaction: function() {
    var tempTransaction = Transactions({});
  }
});
