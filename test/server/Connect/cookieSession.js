/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.server.Connect.cookieSession', function() {

    function sess(res) {
        return res.headers['set-cookie'][0];
    }

    function respond(req, res) {
        res.end();
    }

    var app;

    beforeEach(function() {

        app = Ext.create('Ext.server.Connect');
        app.use(Ext.server.Connect.cookieParser('some secret'));
        app.use(Ext.server.Connect.cookieSession());

    });

    it('should default to a browser-session length cookie', function(done) {

        var app = Ext.create('Ext.server.Connect')
                  .use(Ext.server.Connect.cookieParser('keyboard cat'))
                  .use(Ext.server.Connect.cookieSession())
                  .use(function(req, res, next) {
                      res.end();
                  });

        app.request()
        .get('/')
        .end(function(res) {
            var cookie = res.headers['set-cookie'][0];
            cookie.should.not.include('expires');
            done();
        });

    });

    it('should persist json', function(done) {

        app.use(function(req, res) {
            req.session.count = req.session.count || 0;
            var n = req.session.count++;
            res.end('' + n);
        });

        app.request()
        .get('/')
        .end(function(res) {
            res.body.should.equal('0');
            app.request()
            .get('/')
            .set('Cookie', sess(res))
            .end(function(res) {
                res.body.should.equal('1');
                done();
            });
        });
    });

    it('should reset on null', function(done) {
        var n = 0;

        app.use(function(req, res) {
            switch (n++) {
                case 0:
                req.session.name = 'tobi';
                break;
                case 1:
                req.session = null;
                break;
            }

            res.setHeader('Foo', 'bar');
            res.end('wahoo');
        });

        app.request()
        .get('/')
        .end(function(res) {
            sess(res).should.not.include('expires');
            app.request()
            .get('/')
            .set('Cookie', sess(res))
            .end(function(res) {
                sess(res).should.include('expires=Thu, 01 Jan 1970 00:00:00 GMT');
                done();
            });
        });
    });

    describe('cookie option', function() {
        it('should override defaults', function(done) {
            var app = Ext.create('Ext.server.Connect');
            app.use(Ext.server.Connect.cookieParser('some secret'));
            app.use(Ext.server.Connect.cookieSession({ cookie: { httpOnly: false }}));

            app.use(function(req, res) {
                res.end();
            });

            app.request()
            .get('/')
            .end(function(res) {
                var cookie = sess(res);
                cookie.should.include('Path=/');
                cookie.should.not.include('httpOnly');
                done();
            });
        });
    });

    describe('when modified', function() {
        it('should set-cookie', function(done) {
            var n = 0;
            var app = Ext.create('Ext.server.Connect')
            .use(Ext.server.Connect.cookieParser('keyboard cat'))
            .use(Ext.server.Connect.cookieSession())
            .use(function(req, res, next) {
                req.session.foo = ++n;
                res.end();
            });

            app.request()
            .get('/')
            .end(function(res) {
                res.headers.should.have.property('set-cookie');

                app.request()
                .get('/')
                .set('Cookie', sess(res))
                .end(function(res) {
                    res.headers.should.have.property('set-cookie');
                    done();
                });
            });
        });
    });

    describe('when un-modified', function() {
        it('should set-cookie only the initial time', function(done) {
            var modify;

            var app = Ext.create('Ext.server.Connect')
            .use(Ext.server.Connect.cookieParser())
            .use(Ext.server.Connect.cookieSession({ secret: 'keyboard cat'}))
            .use(function(req, res, next) {
                if (modify) req.session.foo = 'bar';
                res.end();
            });

            app.request()
            .get('/')
            .end(function(res) {
                res.headers.should.have.property('set-cookie');
                var cookie = sess(res);

                app.request()
                .get('/')
                .set('Cookie', cookie)
                .end(function(res) {
                    res.headers.should.not.have.property('set-cookie');

                    app.request()
                    .get('/')
                    .set('Cookie', cookie)
                    .end(function(res) {
                        res.headers.should.not.have.property('set-cookie');
                        modify = true;

                        app.request()
                        .get('/')
                        .set('Cookie', cookie)
                        .end(function(res) {
                            res.headers.should.have.property('set-cookie');
                            done();
                        });
                    });
                });
            });
        });
    });

    describe('.secure', function() {
        it('should not set-cookie when insecure', function(done) {
            var app = Ext.create('Ext.server.Connect')
            .use(Ext.server.Connect.cookieParser('keyboard cat'))
            .use(Ext.server.Connect.cookieSession({ cookie: { secure: true }}))
            .use(function(req, res, next) {
                res.end();
            });

            app.request()
            .get('/')
            .end(function(res) {
                res.headers.should.not.have.property('set-cookie');
                done();
            });
        });
    });

    describe('proxy option', function() {
        describe('when enabled', function() {
            it('should trust X-Forwarded-Proto', function(done) {
                var app = Ext.create('Ext.server.Connect')
                .use(Ext.server.Connect.cookieParser('keyboard cat'))
                .use(Ext.server.Connect.cookieSession({ proxy: true, cookie: { secure: true }}))
                .use(respond);

                app.request()
                .get('/')
                .set('X-Forwarded-Proto', 'https')
                .end(function(res) {
                    res.headers.should.have.property('set-cookie');
                    done();
                });
            });
        });

        describe('when disabled', function() {
            it('should not trust X-Forwarded-Proto', function(done) {
                var app = Ext.create('Ext.server.Connect')
                          .use(Ext.server.Connect.cookieParser('keyboard cat'))
                          .use(Ext.server.Connect.cookieSession({ cookie: { secure: true }}))
                          .use(respond);

                app.request()
                .get('/')
                .set('X-Forwarded-Proto', 'https')
                .end(function(res) {
                    res.headers.should.not.have.property('set-cookie');
                    done();
                });
            });
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
