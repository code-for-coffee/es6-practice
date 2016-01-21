/**
 * Created by codeforcoffee on 1/21/16.
 */
var $ = require('jquery');
var userModel = {
    name: 'James',
    age: 31,
    hobby: 'sleep',
    lovesES6: true
};


class UserModel {

    constructor(params) {
        let self = this;
        if (typeof params == 'object' && params.hasOwnProperty('url')) {
            $.getJSON(params['url'], function(data) {
                console.log(data.results[0].user);
                self.attrs = data.results[0].user;
            });
        }
    }

    toObject() {
        return this.attrs;
    }

}

module.exports = UserModel;