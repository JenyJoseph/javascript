let userName: string;
userName = "Jeny";
console.log(userName);

let digit: number;
digit = 10;
console.log(digit);

let istrue: boolean;
istrue = false;
console.log(istrue);
let hobbies: null;

let hobbies1: string[];
hobbies1 = ["dancing", "swinning"];

type Person = {
  name: string;
  age: number;
};
let person: Person;
person = {
  name: "Jeny",
  age: 37,
};

console.log(person);

//Type infernece
let course: "Ract";
course = "Ract";

//Union Types
//More than one type
let course1: string | number = "rerewrew";
course1 = 3;

//functions and types
function add(a: number, b: number) {
  return a + b;
}
// function print(value: any) {
//   console.log(value);
// }

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2];
const updatedArray = insertAtBeginning(demoArray, -1);

const datavalue = null;
console.log(typeof datavalue);
