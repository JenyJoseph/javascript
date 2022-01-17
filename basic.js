var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var userName;
userName = "Jeny";
console.log(userName);
var digit;
digit = 10;
console.log(digit);
var istrue;
istrue = false;
console.log(istrue);
var hobbies;
var hobbies1;
hobbies1 = ["dancing", "swinning"];
var person;
person = {
    name: "Jeny",
    age: 37
};
console.log(person);
//Type infernece
var course;
course = "Ract";
//Union Types
//More than one type
var course1 = "rerewrew";
course1 = 3;
//functions and types
function add(a, b) {
    return a + b;
}
// function print(value: any) {
//   console.log(value);
// }
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2];
var updatedArray = insertAtBeginning(demoArray, -1);
var datavalue = null;
console.log(typeof datavalue);
