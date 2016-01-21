/**
 * Created by codeforcoffee on 1/21/16.
 */
var UserModel = require('./userModel');
class UserViewModel extends UserModel {

    toViewObject() {
        let result = {};
        result.name = this.attrs.username;
        result.phone = this.attrs.phone;
        return result;
    }
}

module.exports = UserViewModel;