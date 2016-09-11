/**
 *  Author: Shoukath Mohammed
 *  Date: 02/21/2016
 *  Time: 08:54 PM EST
 *  Create with Brackets.io & Eclipse IDE
 */

require.config({

    paths: {
        jquery      : "../bower_components/jquery/dist/jquery.min",
        bootstrap   : "../bower_components/bootstrap/dist/js/bootstrap.min",
        underscore  : "../bower_components/underscore/underscore-min",
        backbone    : "../bower_components/backbone/backbone-min",
        domReady    : "../bower_components/domready/ready.min",
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
