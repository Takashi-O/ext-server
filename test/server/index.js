/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ requires

Ext.Loader.require('Ext.server.Server');

// }}}
// {{{ describe

describe('Ext.server.*', function() {

    var port = 8124;

    it('should wrap in an http.Server', function(done){

        var app = Ext.create('Ext.server.Connect');

        app.use(function(req, res){
            res.end();
        });

        app.listen(++port, function() {
            app
            .request('/')
            .expect(200, done);
        });

    });

    it('Ext.server.Server.create onLaunch', function(done) {

        Ext.server.Server.create({
            port    : ++port,
            onLaunch: function() {
                done();
            }
        });

    });

    it('Ext.server.Server.create static', function(done) {

        var fixtures = require('path').normalize(__dirname + '/../shared/fixtures');

        Ext.server.Server.create({
            public: fixtures,
            port: ++port,
            onLaunch: function() {
                done();
            }
        });

    });

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
