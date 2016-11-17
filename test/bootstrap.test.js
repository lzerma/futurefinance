"use strict";
/**
 * Bootstrap.test.js
 *
 * @description :: Bootstrap to lift the sails api for testing.
 */
const sails = require('sails');

before(function (done) {

    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(5000);

    sails.lift({
        models: {connection: "memory"} // setting to use memory db rather than a sqlite file.
    }, function (err, server) {
        if (err) return done(err);
        done(err, sails);
    });
});

after(function (done) {
    sails.lower(done);
});