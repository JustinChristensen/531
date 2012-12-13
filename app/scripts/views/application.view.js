(function (window, $, undefined) {
  'use strict';

  _531.Views.ApplicationView = Backbone.View.extend({

    el: '#application',

    calculator: '.calculator',

    initialize: function () {
      this.$calculator = $(this.calculator);
      _531.rows.on('reset', this.render, this);

      this.bootstrap();
    },

    bootstrap: function () {
      // If there are no stored rows bootstrap application
      // with initial rows
      if (_531.rows.fetch().length === 0) {
        _531.rows.reset(_531.initialRows);
      }
    },

    render: function () {
      var LiftRowView = _531.Views.LiftRowView, 
        rows = [], 
        rowView;

      // Render all of the lift rows
      _531.rows.each(function (row) {
        rowView = new LiftRowView({ model: row });
        rows.push(rowView.render().el);
      });

      // Render the collection
      this.$calculator.html(rows);
    }

  });


}(window, jQuery));
