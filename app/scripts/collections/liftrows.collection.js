(function (window, $, undefined) {
  'use strict';

  _531.Collections.LiftRows = Backbone.Collection.extend({

    model: _531.Models.LiftRow,

    localStorage: new Store('531-calculator'),

    comparator: function (row) {
      return row.get('order');
    }

  });

}(window, jQuery));
