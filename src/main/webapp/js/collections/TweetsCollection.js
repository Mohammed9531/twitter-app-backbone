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
        'domReady'
        ], function ($, _, Backbone, Tweet) {

    /**
     * Backbone collection initialization
     */
    var TweetsList = Backbone.Collection.extend({
        model: Tweet,
        initialize: function(options) {
           this.bind('remove', this.onDelete, this);
        },
        onDelete: function(model, collection, options) {
           var arr = [model, collection, options];

           _.each(arr, function(i) {
        	   console.log(i + "" + "=" + arr[i]);
           });
        }
    });

    return TweetsList;
});