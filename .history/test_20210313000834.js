console.log('Hello World');
console.error('This is an error'); //show app an error
console.warn('this is a warning');

// let, const 

/* let age = 30;
age = 31;
console.log(age);

const age1 = 50;
age1 = 51;
console.log(age1); */


// String, Numbers, Boolean, undefined 

/* const name = 'John';
const age = 30;
const rating = 4.5;
const x = null;
const isCool = true;
const x = null;
const y = undefined; //declare undefined explicitly 
let z; //going to be undefined 

console.log(typeof age); */
const age = 30;
const name = 'John';

// Concatenation 
console.log('My name is' + name + ' and I am  ' + age);

// Template String 
const hello = console.log(`My name is  ${name} and I am ${age}`);
console.log(hello);