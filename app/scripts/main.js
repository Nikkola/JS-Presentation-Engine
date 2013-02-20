require.config({
  shim: {
    'backbone' : {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    }
  },

  paths: {
    jquery: 'vendor/jquery.min',
    'underscore' : 'vendor/underscore-min',
    backbone: 'vendor/backbone-min'
  }
});
 

require(['views/app'], function(AppView) {
    window.App = {
        Vent: _.extend({}, Backbone.Events)
    };

    new AppView();
});