(function (window, $, undefined) {
  'use strict';

  _531.Views.LiftRowView = Backbone.View.extend({

    tagName: 'tr',
    className: 'lift-row',
    template: _.template( $('#row-template').html() ),

    events: {
      'blur .max-input': 'updateMax'
    },

    initialize: function (options) { 
      this.model.on('change:max', this.render, this);
      this.model.on('error', this.handleBadInput, this);

      return this;
    },

    render: function () {
      var row = this.template(this.model.toJSON()),
        getCells = $.proxy(this.getCells, this);

      this.$el.html(row);
      this.$el.append(getCells);

      this.input = this.$el.find('.max-input');

      return this;
    },

    getCells: function() {
      var LiftCellView = _531.Views.LiftCellView,
        numWeeks = 4, i = 0, cells = [], cellView;

      for(i; i < numWeeks; i++) {
        cellView = new LiftCellView({ model: this.model, wkId: i });
        cells.push(cellView.el);  
      }

      return cells;
    },

    updateMax: function(e) {
      var max = $(e.target).val().trim(),
        max = _.isEmpty(max) ? 0 : max;

      this.model.save({ max: max });
    },

    handleBadInput: function (model, error, opts) {
      alert(error);
      this.input.val('').focus();
    }

  });

}(window, jQuery));
