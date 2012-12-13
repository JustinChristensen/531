(function (window, $, undefined) {
  'use strict';

  _531.Views.LiftCellView = Backbone.View.extend({

    tagName: 'td', 

    template: _.template( $('#cell-template').html() ),

    initialize: function (options) {
      var wkId = options.wkId || 0;

      this.reps = _531.program.reps[wkId];
      this.percentages = _531.program.percentages[wkId];

      this.render();
      return this;
    },

    render: function () {
      var weights = _.map(this.percentages, this.model.calcWeight, this.model),
        template = this.template({ reps: this.reps, weights: weights });

      // Blank table cells for lifts with a max of 0
      if(this.model.get('max') != 0) {
        this.$el.html(template);
      }

      return this;
    }

  });

}(window, jQuery));
