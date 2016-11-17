"use strict";
const moment = require("moment");
const request = require("request");
/**
 * Icndb service
 *
 * @description :: Server-side logic for requesting to ICNDB REST API
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */

module.exports = {

    requestRandom: function () {

        return new Promise((resolve, reject) => {

            var options = {
                method: 'GET',
                url: 'http://api.icndb.com/jokes/random',
                headers: {
                    'cache-control': 'no-cache'
                }
            };

            request(options, function (error, response, body) {

                let jokeResponse = JSON.parse(body);
                if (error) reject(error);

                if (jokeResponse.type == "success") {
                    resolve(jokeResponse);
                }
                else {
                    reject(body);
                }
            });
        });
    }
};