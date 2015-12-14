// js/views/appview.js

var app = app || {};

// The Application
// ---------------

app.appview = Backbone.View.extend({

  // The id of an element to bind to
  el: '.money-flow-app',

  events: {
    'click .new-transaction': 'createTransaction'
  },

  initialize: function() {},

  createTransaction: function() {}
});
