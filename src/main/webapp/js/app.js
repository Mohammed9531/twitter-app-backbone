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
        'views/TweetsView',
        'collections/TweetsCollection',
        'domReady'
        ], function ($, _, Backbone, TweetModel, TweetsView, TweetsCollection) {

    var initialize = function () {
    	var tweets, author, status, tweet;

        tweets = new TweetsCollection();

        $('#newTweet').on('submit', function() {
            tweet = new TweetModel();
            author = $('#author').val();
            status = $('#status').val();

            if( !_.isEmpty(author) && !_.isEmpty(status)) {
                tweet.set({
                    author: author,
                    status: status,
                    date: new Date().toLocaleString()
                });
            }
            tweets.add(tweet);
            return false;
        });

        // Create an all view instance to push all model instances
        var tweetsView = new TweetsView({
           collection: tweets
        });
    };
    return {
        initialize: initialize
    }
});