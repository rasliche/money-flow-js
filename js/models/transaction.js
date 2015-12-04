// js/models/transaction.js

var app = app || {};

// Transaction Model
// -----------------
// models a transaction in the register

app.Transaction = Backbone.Model.extend({

  // Default attributes
  defaults: {
    date: new Date(),
    flow: 0,
    target: '',
    category: '',
    memo: '',
    cleared: false
  },

  toggleCleared: function() {
    this.save({
      cleared: !this.get('cleared')
    });
  },

  writeMemo: function(newMemo) {
    this.save({
      memo: newMemo
    });
  }
})
