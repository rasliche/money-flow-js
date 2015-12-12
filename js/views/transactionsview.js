var TransactionsView = Backbone.View.extend({
  model: transactions,
  el: $('#transactions'),
  initialize: function() {
    this.model.on('add', this.render(), this);
  },
  render: function() {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function() {
      self.$el.append(new TransactionView({model: transaction})).render().$el);
    });
  }
});
