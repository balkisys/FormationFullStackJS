//console.log('Hello world ');
//console.error('This is an error Test ');
//console.warn('this is a warning ');


//console.log(a);
 // let, const 
//let age = 30;
//age = 15;
//console.log(age);

//const PI = 3.14;
//PI = 50;
//console.log(age);

//String , Numbers , Boolean , undefined , Objet 

// let number = 14.5;
// var isCold = true;
// var X;
// var z = null;
// const y = undefined;
// console.log(typeof isCold);
// console.log(typeof y);
//x = 6;
//console.log(x);

// Concatenation 
//const age = 30;
//const name = 'Ali ';
//console.log('My name is : ' + name + ' i am ' + age);
// Template literals (Template strings)
//const hello = `My name is ${name} and I am ${age} `;
//console.log(hello);
//const s = 'Hello Weekend';
//console.log(s.length);// property of JS
//console.log(s.toLowerCase());
//console.log(s.toUpperCase()); //methode pre JS

//console.log(s.substring(0, 5).toLocaleUpperCase());
//console.log(s.split(''));
//const c = 'technologie , computers , it , code , React ';
//console.log(c.split(','));
 // Array - vaiables that hold multiple values 
// const numbers = new Array(1, 2, 3, 4, 5); // creation of an array with the constructor 
// console.log(numbers);
// const fruits = ['apples', 'oranges', 1 , 2.2 , true];
// //console.log(fruits[4]); // first element 
// //fruits[5] = 'hello';

// //fruits.push('mangos');

// //fruits.unshift('bbcc');
// //fruits.pop();
// //console.log(fruits);
// //console.log(Array.isArray('test'));

// console.log(fruits.indexOf('oranges'));// position of elements in the array 

const person = {
    firstName: 'Johne',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: ' 50 Main ',
        city: 'Boston ',
        state : 'MA'
    }
    
}
//console.log(person.age);

// distructuring to pull out object properties 
// const { firstName, age, adress: { city } } = person;

// console.log(age);
// console.log(city);
// // we can add a property directly : 
// person.email = 'Johne@gmail.com';
// console.log(person);
// Array of object  : object letrals 
const todos = [
    {
        id: 1,
        text: 'Take JS cours ',
        isCompleted : true 
    },
     {
        id: 2,
        text: 'Take React cours ',
        isCompleted : false 
    },
      {
        id: 3,
        text: 'Take Node.js cours ',
        isCompleted : false 
    }
]
console.log(todos.length);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//FOR LOOP

//  for (let i = 0; i <= todos.length; i++){
//     console.log(todos[i]);
//     //console.log(`For Loop Number : ${i}`);
// }
 
// let i = 0;
// while (i < 5) {
//     console.log(`While Loop Number : ${i}`);
//     i ++;
// }
//ES6
// for (let item of todos) {
//     console.log(item);
// }
//Heigh Order Array Methods : 
// forEach , Map , filter 

// forEach  : just loops threw the array 
// map : create new array from an array 
// filter : create new array from an array based on condition 

// ForEach 
// todos.forEach(
//     function (todo) {
//     console.log(todo.text);
//     })

// ---------------------------------------------------- //

    //EL CODE ELI MENBA3D N7OTOU FI DRIVE 
// const x = 4;
// const y = 11;
// if (x > 5 || y > 10) { // try ' && '
//     console.log('x is more than 5 or y is more than 10 ');
// }
// Functions 
// function addNums(num1, num2) {
//     console.log(num1 + num2); 

// }
// addNums(5, 4);
//addNums();// returns NaN (not a number that means it should return a number)
// other exp with setting default values for our parameters 
// function addNums(num1 = 1 , num2 = 3) {
//     //console.log(num1 + num2); // usualy we don't console log somthing we return somthing from the function 
//     return num1 + num2;
// }
// //addNums(); // it returns value because we have parametres with default value
// console.log(addNums(5, 5));

// Now with arrow functions it much better for code 
// Arrow functions intreduced with ES6 
// we transforme addNums function to arraow function 
// const addNums = (num1 = 1, num2 = 1) => {
//     return num1 + num2;
// }
// if we have one expression  no other variable declaration we can juste write it in one ligne 
// like that 
// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
// addNums(5, 50);
//  if we want to return somthing we simply don't write the 'return' key world 
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 51));

// or if we have one parametre we delete the ()

// const addNums = num1 => num1 + 5; 
// console.log(addNums(5000));
// usffull for  foreach 

todos.forEach((todo) => console.log(todo));

//OOP
// we have looked on Object litterals and distruction 
//constructor function with prototypes and ES6 classes 

function Person(firstName, lastName, dob) {// we set them to properties of object 
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    
}
// Instantiate object with constructor function 
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marry', 'Smith', '3-6-1970');
console.log(person2.firstName);


