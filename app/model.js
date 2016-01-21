/**
 * Created by codeforcoffee on 1/21/16.
 */
class Model {

    constructor(params) {
        if (typeof params == "object") {
            this.attrs = params;
        }
    }

    toObject() {
        return this.attrs;
    }

    create() {
        console.log('sorry');
    }

    read() {
        console.log('sorry');
    }

    update() {
        console.log('sorry');
    }

    destroy() {
        console.log('sorry');
    }

    toString() {
        let result = "";
        for (var item in this.attrs) {
            result = result + item + "=" + this.attrs[item] + ",";
        }
        return result;
    }

}

module.exports = Model;