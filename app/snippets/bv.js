Backbone.View.extend({
	events: {
		'click a' : 'clicked'
	},

	clicked: function(e) {
		console.log(e.currentTarget);
	}
});