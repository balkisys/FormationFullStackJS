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
//const numbers = new Array(1,2,3,4,5,6);

//console.log(numbers);
// Moste commun way is to write array like that 
 
//const fruits = ['apples', 'oranges', 'pears'];
//console.log(fruits);
//console.log(fruits[1]); //shows orange because arrays begin with 0 
// we will have an error if we re asign the array like that 
//fruits = []; // error
// to add a data to array 
//fruits[3] = 'grapes';
// // in javascript i can have different type of data in one array  

// const fruits1 = ['apples', 'oranges', 'pears', 10, true];
// console.log(fruits1);
/*
// to add data to array with push() at the end of the array 
fruits.push('mangos');
// to add data at the begining 
fruits.unshift('banana');
// to delete the last one 
fruits.pop();
// to check if we have an array 
console.log(Array.isArray(fruits)); // true 
console.log(Array.isArray('hello')); //false
console.log(fruits.indexOf('oranges'));// 2 
console.log(fruits);
*/

// OBJECT LITERALS
// const person = {
//   firstName: 'John',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 Main st',
//     city: 'Boston',
//     state: 'MA'
//   }
// }
// we can use distructuring to pull properties out part of ES6
//const { firstName, lastName, adress: {city} } = person;

//console.log(firstName);
//console.log(city);
// we can add property directly :
//person.email = 'test@gmail.com';
//console.log(person); // email is added 

// Get single value
//console.log(person.name)

// Arrays of object  : exp array of todos : object letrals  
const todos = [
    {
        id: 1,
        text: 'Take Javascript cours ',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take React cours ',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Take Git cours ',
        isCompleted: true
    }
];
console.log(todos);
// if want to acced to text propertie 
console.log(todos[1].text);

// je veux parler de JSON is a data format on travaille bcp en fullstack avec JSON api 
  // similaire lel object literals 
  // go to JSON FORMATTER web site 
// par exp n7ebou nbadlou array eli 3anna lel format JSON on dirait bch nab3thouha l serveur 
// y a une methode eli t7adhrelna el JSON Format 
// Nchouf sit postman 
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);



// For loop 
// for (let i = 0; i <= 10; i++) {

//     //console.log(i);
//     console.log(`For Loop Number: ${i}`); // `` is template string 

// }

// While 
// let i = 0; // we set the variable outside the loop 
// while (i<10) {
//     console.log(`while Loop Number: ${i}`);
//     i++; // to increment it by 1 
// }

// for (let i = 0; i <= todos.length; i++) {

//     //console.log(i);
//     console.log(todos[i].text); 

// }
// other methode to loop throw an array 
//for (let todo of todos) {
    //console.log(todo);
//}

// Heigh Order Array Methods : best iteration for arrays 

// forEach : just loops threw the array 
// map : let us create new array from an array 
// filter : let us create new array from an array  based on a condition 

// ForEach  

todos.forEach(function (todo) { //todo is name of the variable of each item of the array 
    console.log(todo.text);
    
});

// Map 
const todoText = todos.map(function (todo) {
    return todo.text;
});

console.log(todoText);