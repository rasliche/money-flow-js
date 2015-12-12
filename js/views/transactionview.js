var TransactionView = Backbone.View.extend({
  model: new Transaction(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('.transaction-template').html())
  },
  render: function() {
    this.$el.html(this.template( this.model.toJson()));
  }
})
