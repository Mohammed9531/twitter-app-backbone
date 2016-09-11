/**
 *  Author: Shoukath Mohammed
 *  Date: 02/21/2016
 *  Time: 08:54 PM EST
 *  Create with Brackets.io & Eclipse IDE
 */

define([
        'jquery',
        'underscore',
        'backbone',
        'models/TweetModel',
        'views/TweetView',
        'collections/TweetsCollection',
        'domReady'
        ], function ($, _, Backbone, Tweet, TweetView, TweetsCollection) {

    // Backbone all models view initialization
    var TweetsView = Backbone.View.extend({
        el: $('#tweets-view'),

        initialize: function(options){
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
        },
        render: function() {
            var self = this;

            this.$el.empty();
            this.collection.each(function(tweet, i) {
            var view = new TweetView({
            	 model: tweet,
            	 collection: self.collection
            });
                self.$el.append(view.render().$el);
            });
            return this;
        }
    });
    return TweetsView;
});