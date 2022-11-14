"use strict";
exports.__esModule = true;
var greetings = "Hello Ann!";
console.log(greetings);
// number
var userId = 334466;
// boolean
var isLoggedIn = false;
// function
//takes number and returns number
function addTwo(num) {
    return num + 2;
}
function getUpperCase(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var getHello = function (s) {
    return "Hello ".concat(s);
};
addTwo(4);
getUpperCase('test');
loginUser('ann', 'a@a.com');
getHello('Kitty');
