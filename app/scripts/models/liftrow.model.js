(function (window, $, undefined) {
  'use strict';

  _531.Models.LiftRow = Backbone.Model.extend({

    defaults: {
      lift: '',
      max: 0,
      order: 0
    },

    calcWeight: function(percent) {
      var toPercent = _531.utils.toPercent,
        max = this.get('max'),
        percent = toPercent(percent);
  
      return Math.round( max * percent / 5) * 5;
    },

    isNumeric: function(max) {
      return /^\d+$/.test(max) ? true : false;
    },

    validate: function(attrs, opts) {
      if(!this.isNumeric(attrs.max)) {
        return "Please enter a valid value for this lift's max.";
      }
    }

  });

}(window, jQuery));
