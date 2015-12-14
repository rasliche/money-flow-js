// js/views/appview.js

var app = app || {};

// The Application
// ---------------

app.appview = Backbone.View.extend({
  el: '.money-flow-app',

  events: {
    'click .new-transaction': 'createTransaction'
  },

  initialize: function() {},

  createTransaction: function() {}
});
