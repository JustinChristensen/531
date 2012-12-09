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
     * Backbone Objects
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
      }
    },

    /**
     * Main Driver
     */
    init: function() {
    }

  };

  // Execute application after document is ready
  // TODO: Determine if this is necessary
  $(document).ready(function(){
    _531.init();
  });

}(window, jQuery));

