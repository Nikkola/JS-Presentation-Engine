require.config({
  shim: {
    'backbone' : {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    }
  },

  paths: {
    jquery: 'vendor/jquery.min',
    underscore : 'vendor/underscore-min',
    backbone: 'vendor/backbone-min',
    prettify: 'vendor/prettify'
  }
});
 

require(['views/app', 'prettify'], function(AppView) {
    window.App = {
        Vent: _.extend({}, Backbone.Events)
    };

    new AppView();
});