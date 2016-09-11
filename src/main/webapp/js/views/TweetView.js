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
        'collections/TweetsCollection',
        'domReady'
        ], function ($, _, Backbone, TweetModel, TweetsCollection) {

    //Backbone view initialization
    var TweetView = Backbone.View.extend({
        model: TweetModel,
        tagName: 'section',
        className: 'tweet-view',
        template: _.template( $('#tweetsTemplate').html() ),

        events : {
         "click #tweetBlock" : 'onDelete',
         "mouseover": 'onMouseOver',
         "mouseout": 'onMouseLeave'
        },

        initialize: function(options) {
            this.options = _.extend({}, options);

            this.render();
            this.$el.find('.edit-block').hide();
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        onDelete: function() {
        	this.remove();
        	this.model.trigger('delete', this.model);
        },
        onEdit: function() {
          this.$el.find('#' + this.model.get('id'));
        },
        onMouseOver: function() {
          this.$el.find('.edit-block').show();
        },
        onMouseLeave: function() {
            this.$el.find('.edit-block').hide();
        }
    });
    return TweetView;
});