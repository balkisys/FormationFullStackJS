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

/*
// Concatenation 
const age = 30;
const name = 'John';
console.log('My name is' + name + ' and I am  ' + age);

// Template String : or template leterals 
const hello = `My name is  ${name} and I am ${age}`;
console.log(hello);
*/

/*const s = 'Hello World!';
console.log(s.length);//length property to calculate length of string
// we can try  : 
console.log(s.toLowerCase()); //or to UpperCase 
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toLocaleUpperCase());
console.log(s.split(''));

const c = 'technology, computers , it , code ';
console.log(c.split(', ')); */

// Arrays - variables that hold multiple values 
// il y a pls facons de creer Arrays 
// 1 ER METHODE AVEC constructeur n'est pas trop utiliser mais pour le connaitre 
const numbers = new Array(1,2,3,4,5,6);

console.log(numbers);
// Moste commun way is to write array like that 
 
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[1]); //shows orange because arrays begin with 0 
// we will have an error if we re asign the array like that 
fruits = []; // error
// to add a data to array 
fruits[3] = 'grapes';
// // in javascript i can have different type of data in one array  

// const fruits1 = ['apples', 'oranges', 'pears', 10, true];
// console.log(fruits1);

// to add data to array with push() at the end of the array 
fruits.push('mangos');
// to add data at the begining 
fruits.unshift('banana');
// to delete the last one 
fruits.pop();

console.log(fruits);
