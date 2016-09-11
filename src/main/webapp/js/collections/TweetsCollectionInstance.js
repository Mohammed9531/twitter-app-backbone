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
        'collections/TweetsCollection',
        'domReady'
        ], function ($, _, Backbone, TweetsList) {

    /**
     * Backbone collection instance
     */
    var tweets = new TweetsList();

    return tweets;
});