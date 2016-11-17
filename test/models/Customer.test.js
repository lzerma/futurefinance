"use strict";
/**
 * Customer.test.js
 *
 * @description :: Test suit for the Customer model.
 */
const expect = require('chai').expect;

describe('CustomerModel', function () {

    const chuck = {
        last_name: "Norris Jr",
        first_name: "Chuck",
        birth_date: "1952-12-12"
    };

    describe('#save()', function () {
        it('should check create function', function (done) {
            Customer.create(chuck)
                .then(function (result) {
                    expect(result).to.contain.all.keys(chuck);
                    done();
                })
                .catch(done);
        });
    });

    describe('#find()', function () {
        it('should check find function', function (done) {
            Customer.find()
                .then(function (results) {
                    expect(results).to.have.lengthOf(1);
                    expect(results[0]).to.contain.all.keys(chuck);
                    chuck.id = results[0].id;
                    done();
                })
                .catch(done);
        });

        it('should check findOne function', function (done) {
            Customer.findOne({id: chuck.id})
                .then(function (result) {
                    expect(result).to.contain.all.keys(chuck);
                    done();
                })
                .catch(done);
        });
    });

    describe('#update()', function () {
        it('should check update function', function (done) {
            chuck.last_name = "Norris Updated";
            Customer.update({id: chuck.id}, chuck)
                .then(function (results) {
                    expect(results).to.have.lengthOf(1);
                    expect(results[0]).to.contain.all.keys(chuck);
                    done();
                })
                .catch(done);
        });
    });

    describe('#delete()', function () {
        it('should check delete function', function (done) {
            Customer.destroy({id: chuck.id}, chuck)
                .then(function (results) {
                    expect(results).to.have.lengthOf(1);
                    expect(results[0]).to.contain.all.keys(chuck);
                    done();
                })
                .catch(done);
        });
    });
});