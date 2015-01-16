/**
 * Task Center
 * Application server
 */
var url = require('url');
var express = require('express');
var proxy = require('proxy-middleware');
var config = require('./config.js');

// Application
var application = express();

// Middleware: proxy
application.use(config.api.url, proxy(url.parse(config.api.host)));

// Middleware: static content
application.set('port', process.env.PORT || config.server.port);
application.use(express.static(__dirname + '/../' + config.app.dir));
application.use(express.bodyParser());
application.use(express.logger('dev')); //options: default, short, tiny, dev
application.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
}));
application.use(application.router);

/**
 * @todo authentication
 */

// Server
application.listen(application.get('port'), function () {
    'use strict';

    console.log(
        'Task-Center application server listening on port %s',
        application.get('port')
    );
});
