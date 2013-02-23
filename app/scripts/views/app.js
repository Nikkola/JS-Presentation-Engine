define([
    'backbone', 
    'collections/slides', 
    'text!../../templates/link.html',
    'text!../../templates/links.html',
    'text!../../templates/snippets.html',
    'text!../../templates/quote.html',
    'text!../../templates/bullets.html',
    'views/slides',
    'router'

], function( Backbone, SlidesCollections, linksTpl, linkTpl, snippetTpl, quoteTpl, bulletsTpl, SlidesView, MainRouter) {

        var AppView = Backbone.View.extend({
            el: 'body',

            initialize: function() {
                //грузим шаблоны
                $('body').append(linksTpl);
                $('body').append(linkTpl);
                $('body').append(snippetTpl);
                $('body').append(quoteTpl);
                $('body').append(bulletsTpl);

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
                if ( e.keyCode === 37  || e.keyCode === 39  ) {
                    App.Vent.trigger('changeSlide', {
                        direction: e.keyCode == 39 ? 'next' : 'prev'
                    });
                }

                if ( e.keyCode === 38  || e.keyCode === 40  ) {
                    App.Vent.trigger('changeSlide', {
                        direction: e.keyCode == 38 ? 'next' : 'prev'
                    });
                }

            }
        });

        return AppView;
});