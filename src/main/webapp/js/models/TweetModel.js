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
        'domReady'
        ], function ($, _, Backbone) {

    // Backbone model initialization
    var Tweet = Backbone.Model.extend({

        defaults: function() {
            return {
                author:"Anonymonous User",
                status:"Nothing posted...",
                date: new Date().toLocaleString()
            }
        },
        initialize: function() {
          if (this.isNew()) {
            this.set('id', this.cid);
          }
        }
    });
    return Tweet;
});