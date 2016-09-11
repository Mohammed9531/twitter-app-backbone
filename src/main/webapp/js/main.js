/**
 *  Author: Shoukath Mohammed
 *  Date: 02/21/2016
 *  Time: 08:54 PM EST
 *  Create with Brackets.io & Eclipse IDE
 */

require.config({

    paths: {
        jquery      : "libs/jquery",
        bootstrap   : "libs/bootstrap",
        underscore  : "libs/underscore",
        backbone    : "libs/backbone",
        domReady    : "libs/ready",
    },

    shim: {
        jquery: {
            exports: "$"
        },
        bootstrap: {
            exports: "$",
            deps: ['jquery']
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: "Backbone"
        },
        domReady: {
            exports: "domReady"
        }
    }
});

// initialize application
require(["app"],function(App){
    App.initialize();
});
