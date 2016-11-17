"use strict";
const moment = require("moment");
/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    findOne: function (req, res) {

        Customer.findOne({id: req.allParams().id})
            .then((customer) => {
                if (customer == null) return res.json(404, {"msg": "No customer was found."});
                customer.age = moment().diff(moment(customer.birth_date), "years");

                Icndb.requestRandom().then((joke) => {

                    customer.joke = joke.value.joke.replace("Chuck Norris", customer.first_name + " " + customer.last_name);
                    return res.json(customer);
                }).catch((error) => {
                    console.log(error);
                    return res.json(500, {"msg": error.toString()});
                });
            })
            .catch((error) => {
                console.log("error", error);
                return res.json(500, {"msg": error.toString()});
            });
    }
};