define([
    'backbone', 
    'collections/slides', 
    'views/slides',
    'router'

], function( Backbone, SlidesCollections, SlidesView, MainRouter) {

        var AppView = Backbone.View.extend({
            el: 'body',

            initialize: function() {
                new SlidesView({
                    collection: new SlidesCollections( window.slides )
                });

                App.router = new MainRouter();
                Backbone.history.start();
            },

            events: {
                'keyup' : 'keyUp'
            },

            keyUp: function(e) {
                if ( e.keyCode === 37  || e.keyCode === 39 ) {
                    App.Vent.trigger('changeSlide', {
                        direction: e.keyCode == 39 ? 'next' : 'prev'
                    });
                }

            }
        });

        return AppView;
});