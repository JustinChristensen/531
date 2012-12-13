/**
 * Initialize calculator global object
 * 531 Calculator is a Backbone Application
 *
 * Justin Christensen
 * Sun Dec  9 15:59:09 2012
 */
(function (window, $, undefined) {
  'use strict';

  window._531 = {
    /**
     * Backbone Namespaces
     */
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    /**
     * General Utilities
     */
    utils: {
      keys: {
        ENTER: 13
      },

      toPercent: function(num) {
        return num >= 1 ? num / 100 : num;
      }
    },

    /**
     * Reps and Percentages for Cell View
     */
    program: {
      percentages: {
        0: [65, 75, 85],
        1: [70, 80, 90],
        2: [75, 85, 95],
        3: [40, 50, 60]
      },

      reps: {
        0: ['5', '5', '5'],
        1: ['3', '3', '3'],
        2: ['5', '3', '1'],
        3: ['5', '5', '5']
      }
    },

    /**
     * On first load
     */
    initialRows: [
      { lift: 'Press', order: 0 },
      { lift: 'Deadlift', order: 1 },
      { lift: 'Bench', order: 2 },
      { lift: 'Squat', order: 3 }
    ],

    /**
     * Main Driver
     */
    init: function() {
      var ApplicationView = this.Views.ApplicationView,
        LiftRows = this.Collections.LiftRows;

      // Create instance to bind handlers to
      this.rows = new LiftRows();

      // Fire things off
      new ApplicationView();
    }

  };

  // Execute application after document is ready
  // TODO: Determine if this is necessary
  $(document).ready(function(){
    _531.init();
  });

}(window, jQuery));
