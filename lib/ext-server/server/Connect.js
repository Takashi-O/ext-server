/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.Connect

/**
 * @class Ext.server.Connect
 *
 * {Ext_server_Connect:doc-contents}
 */
Ext.define('Ext.server.Connect', {

    // {{{ requires

    requires: [
        'Ext.server.middleware.BodyParser',
        'Ext.server.middleware.Compress',
        'Ext.server.middleware.CookieParser',
        'Ext.server.middleware.Favicon',
        'Ext.server.middleware.Session',
        'Ext.server.middleware.Static',
        'Ext.server.middleware.Multipart'
    ],

    // }}}
    // {{{ constructor

    constructor: function() {

        return Ext.apply(Ext.$dependencies.connect(), {

            // {{{ request

            request: function(path) {

                return Ext.create('Ext.server.Request', {
                    app: this,
                    path: path
                });

            },

            // }}}
            // {{{ basicAuth

            basicAuth: Ext.$dependencies.connect.basicAuth,

            // }}}
            // {{{ bodyParser

            bodyParser: Ext.$dependencies.connect.bodyParser,

            // }}}
            // {{{ compress

            compress: Ext.$dependencies.connect.compress,

            // }}}
            // {{{ cookieParser

            cookieParser: Ext.$dependencies.connect.cookieParser,

            // }}}
            // {{{ cookieSession

            cookieSession: Ext.$dependencies.connect.cookieSession,

            // }}}
            // {{{ csrf

            csrf: Ext.$dependencies.connect.csrf,

            // }}}
            // {{{ directory

            directory: Ext.$dependencies.connect.directory,

            // }}}
            // {{{ errorHandler

            errorHandler: Ext.$dependencies.connect.errorHandler,

            // }}}
            // {{{ favicon

            favicon: Ext.$dependencies.connect.favicon,

            // }}}
            // {{{ json

            json: Ext.$dependencies.connect.json,

            // }}}
            // {{{ limit

            limit: Ext.$dependencies.connect.limit,

            // }}}
            // {{{ logger

            logger: Ext.$dependencies.connect.logger,

            // }}}
            // {{{ methodOverride

            methodOverride: Ext.$dependencies.connect.methodOverride,

            // }}}
            // {{{ multipart

            multipart: Ext.$dependencies.connect.multipart,

            // }}}
            // {{{ query

            query: Ext.$dependencies.connect.query,

            // }}}
            // {{{ responseTime

            responseTime: Ext.$dependencies.connect.responseTime,

            // }}}
            // {{{ session

            session: Ext.$dependencies.connect.session,

            // }}}
            // {{{ static

            static: Ext.$dependencies.connect.static,

            // }}}
            // {{{ urlencoded

            urlencoded: Ext.$dependencies.connect.urlencoded,

            // }}}
            // {{{ vhost

            vhost: Ext.$dependencies.connect.vhost,

            // }}}
            // {{{ utils

            utils: Ext.$dependencies.connect.utils

            // }}}

        });

    },

    // }}}
    // {{{ statics

    statics: {

        // {{{ basicAuth

        basicAuth: Ext.$dependencies.connect.basicAuth,

        // }}}
        // {{{ bodyParser

        bodyParser: Ext.$dependencies.connect.bodyParser,

        // }}}
        // {{{ compress

        compress: Ext.$dependencies.connect.compress,

        // }}}
        // {{{ cookieParser

        cookieParser: Ext.$dependencies.connect.cookieParser,

        // }}}
        // {{{ cookieSession

        cookieSession: Ext.$dependencies.connect.cookieSession,

        // }}}
        // {{{ csrf

        csrf: Ext.$dependencies.connect.csrf,

        // }}}
        // {{{ directory

        directory: Ext.$dependencies.connect.directory,

        // }}}
        // {{{ errorHandler

        errorHandler: Ext.$dependencies.connect.errorHandler,

        // }}}
        // {{{ favicon

        favicon: Ext.$dependencies.connect.favicon,

        // }}}
        // {{{ json

        json: Ext.$dependencies.connect.json,

        // }}}
        // {{{ limit

        limit: Ext.$dependencies.connect.limit,

        // }}}
        // {{{ logger

        logger: Ext.$dependencies.connect.logger,

        // }}}
        // {{{ methodOverride

        methodOverride: Ext.$dependencies.connect.methodOverride,

        // }}}
        // {{{ multipart

        multipart: Ext.$dependencies.connect.multipart,

        // }}}
        // {{{ query

        query: Ext.$dependencies.connect.query,

        // }}}
        // {{{ responseTime

        responseTime: Ext.$dependencies.connect.responseTime,

        // }}}
        // {{{ session

        session: Ext.$dependencies.connect.session,

        // }}}
        // {{{ static

        static: Ext.$dependencies.connect.static,

        // }}}
        // {{{ urlencoded

        urlencoded: Ext.$dependencies.connect.urlencoded,

        // }}}
        // {{{ vhost

        vhost: Ext.$dependencies.connect.vhost,

        // }}}
        // {{{ utils

        utils: Ext.$dependencies.connect.utils

        // }}}

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
