define([
    'backbone', 
    'collections/slides', 
    'views/slides',
    'router'
    ], 
    function(
        Backbone, 
        SlidesCollections,
        SlidesView,
        MainRouter
    ) {

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

                App.router = new MainRouter();
                Backbone.history.start();
            }
        });

        return AppView;
});