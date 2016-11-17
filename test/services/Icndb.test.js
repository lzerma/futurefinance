"use strict";
/**
 * Icndb.test.js
 *
 * @description :: Test suit for the ICNDB API service.
 */
const expect = require('chai').expect;

describe('IcndbService', function () {

    describe('#randomJoke()', function () {
        it('should get a random joke', function (done) {
            Icndb.requestRandom().then((joke) => {
                expect(joke).to.have.all.keys(["type", "value"]);
                expect(joke.value).to.have.all.keys(["id", "joke", "categories"]);
                expect(joke.type).to.be.equal("success");
                done();
            }).catch((error) => {
                console.log(error);
                done(error);
            });
        });
    });
});