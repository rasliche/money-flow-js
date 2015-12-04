// js/collections/transactions.js

var app = app || {};

// Transaction Collection
// ----------------------
// models an account register, saves to localStorage

var TransactionRegister = Backbone.Collection.extend({

  // Reference to this collection's model
  model: app.Transaction,

  localStorage: new Backbone.LocalStorage("transactions"),

  cleared: function() {
    return this.filter(function(transaction) {
      return transaction.get('cleared');
    });
  },

  uncleared: function() {
    return this.without.apply( this, this.cleared() );
  }

})

// Create the global collection of **Transactions**
app.Transactions = new TransactionRegister();
