Backbone.Router.extend({
	routes: {
		'' : 'index'
	},

	index: function() {
		console.log("Индексная страница!");	
	}
});