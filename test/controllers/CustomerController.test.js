"use strict";
/**
 * CustomerController.test.js
 *
 * @description :: Test suit for the CustomerController.
 */
const request = require('supertest');

describe('CustomerController', function () {

    let chuck = {};

    beforeEach(function () {
        chuck = {
            last_name: "Norris",
            first_name: "Chuck",
            birth_date: "1911-11-11"
        };
    });

    describe("#create", function () {
        it('should insert an customer', function (done) {
            chuck.id = 1;
            request(sails.hooks.http.app)
                .post('/customer')
                .set('Accept', 'application/json')
                .set('Content-type', 'application/json')
                .send(chuck)
                .expect(201, chuck, done);
        });
    });

    describe("#get", function () {

        it('should return only 1 customer', function (done) {
            chuck.id = 1;
            request(sails.hooks.http.app)
                .get('/customer')
                .expect(200, [chuck], done);
        });

        it('should return 1 specific customer', function (done) {
            chuck.id = 1;
            chuck.age = 105;
            chuck.joke = "This is my default joke. this is not funny.";
            request(sails.hooks.http.app)
                .get('/customer/1')
                .expect(function (res) {
                    if (!('joke' in res.body)) throw new Error("missing joke key");
                    if (!('age' in res.body)) throw new Error("missing age key");
                    res.body.joke = chuck.joke;
                })
                .expect(200, chuck, done);
        });
    });

    describe("#update", function () {

        it('should update 1 specific customer', function (done) {

            chuck.last_name = "Norris updated";
            chuck.id = 1;
            request(sails.hooks.http.app)
                .post('/customer/1')
                .set('Accept', 'application/json')
                .set('Content-type', 'application/json')
                .send(chuck)
                .expect(200, done);
        });
    });

    describe("#delete", function () {

        it('should delete 1 specific customer', function (done) {

            chuck.id = 1;
            request(sails.hooks.http.app)
                .delete('/customer/1')
                .set('Accept', 'application/json')
                .set('Content-type', 'application/json')
                .expect(200, done);
        });
    });

});