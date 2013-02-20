require.config({
  shim: {
	'backbone' : {
		deps: ['underscore', 'jquery'],
		exports: 'Backbone'
	}
  },

  paths: {
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore-min',
    backbone: 'vendor/backbone-min'
  }
});
 
require(['backbone'], function(Backbone) {
	console.log( Backbone );
});