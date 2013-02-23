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
    text: 'vendor/text',
    handlebars: 'vendor/handlebars',
    prettify: 'vendor/prettify'
  }
});
 

require(['views/app', 'handlebars', 'prettify'], function(AppView) {
    window.App = {
        Vent: _.extend({}, Backbone.Events)
    };

    new AppView();
});