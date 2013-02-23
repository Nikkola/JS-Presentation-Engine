define([
	'backbone', 
	'views/presentation'
	], function(Backbone,  RresentationView) {

	var PresentationsView = Backbone.View.extend({
		initialize: function() {
		
		},

		el: $('.presentations'),

		render: function(presentation) {

		}
	});

	return PresentationsView;
});