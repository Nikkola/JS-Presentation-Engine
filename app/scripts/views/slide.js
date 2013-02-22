define(['backbone'], function(Backbone) {
	var SlideView = Backbone.View.extend({
		className: 'slide',

		render: function() {
			if ( this.model.get('image') ) {
				this.renderImage();
			} else if ( this.model.get('snippet') ) {
				this.renderSnippet();
			} else if ( this.model.get('quote') ) {
				this.renderQuote();
			} else if ( this.model.get('bullets') ) {
				this.renderBullets();
			} else {
				this.renderHeading();
			}

			return this;
		},

		renderSnippet: function() {
			var that = this,
				snippet = this.model.get('snippet');

			this.$el.addClass('snippet');

			if ( this.model.get('title') ) {
				this.renderHeading();
			}

			$.get(snippet, function(snippet) {
				that.$el
					.append('<pre class="prettyprint">' + _.escape(snippet) + '</pre>');
				prettyPrint();	
			});

		},

		renderQuote: function() {
			this.$el
				.addClass('quote')
				.append([,
					'<figure>',
						'<blockquote>',
							this.model.get('quote'),
						'</blockquote>',
						'<figcaption>',
							'<cite>',
								this.model.get('cite'),
							'</cite>',
						'</figcaption>',
					'</figure>'
				].join(''));	
		},

		renderHeading: function() {
			this.$el.append(
				'<h1 class=' + this.model.get('size') + '>' + this.model.get('title') + '</h1>'
			);				
		},

		renderImage: function() {
			this.$el
				.addClass('image')
				.append('<img src="' + this.model.get('image') + '">');
		},

		renderBullets: function() {
			var el = this.$el;
			
			el.addClass('bullets');

			if (this.model.get('title') ) {
				el.append('<h1>' + this.model.get('title') + '</h1>');
			}

			el
				.append([
					'<ul>',
						'<li>' + this.model.get('bullets').join('</li><li>'),
					'</ul>'	
				].join(''));
		}
	});

	return SlideView;
});