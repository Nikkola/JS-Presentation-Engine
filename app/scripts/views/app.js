define(['backbone', 'collections/slides', 'views/slides'], function(Backbone, SlidesCollections, SlidesView) {
	var AppView = Backbone.View.extend({
		el: 'body',

		initialize: function() {
			var testCollection = [
				{title: 'My first Slide'},
				{title: 'My Second Slide'}
			];
			new SlidesView({
				collection: new SlidesCollections(testCollection)
			});
		}
	});

	return AppView;
});