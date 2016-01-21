/**
 * Created by codeforcoffee on 1/21/16.
 */
var $ = require('jquery');

{
    let answer = 42;
    console.log('Deep Thought responded: Oh, that? The answer is ' + answer);
}

//var appInit = require('./appInit');
//var letLoopsLive = require('./let-loops-live');
//
//// create a new model
//var Model = require('./model');
//var dragonModel = new Model({
//    colour: 'blue-purple',
//    name: 'Malygos',
//    attack: 'arcane barrage',
//    friend: 'Rhonin'
//});
//console.log(dragonModel.toObject());
//console.log(dragonModel.toString());
//console.log(dragonModel.create());

// viewModel! osnap
//var ViewModel = require('./viewModel');
//var userProfile = new ViewModel({
//    age: 31,
//    name: 'JCT',
//    address: '17 e ...',
//    phone: '312....'
//});
//console.log(userProfile.toString());
//console.log(userProfile.toObject());

// getting srs
//var UserViewModel = require('./userViewModel');
//var viewData = new UserViewModel({
//    url: 'https://randomuser.me/api/'
//});
//console.log(viewData.toViewObject());

// arrowed!
var cats = [
    {
        name: 'Magda',
        food: 'tuna'
    },
    {
        name: 'George',
        food: 'french fries'
    },
    {
        name: 'Violet',
        food: 'salmon and egg'
    }
];

var namesOfCats = cats.map(function(cat) {
    return cat.name;
});

//console.log(namesOfCats);

var paulsGotCats = cats.map( cat => cat.name );
console.log(paulsGotCats);

cats.forEach(cat => console.log(cat));


var promise = $.getJSON('http://illinoisdispensaries.space', result => console.log(result) );