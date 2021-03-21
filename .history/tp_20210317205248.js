// console.log('Hello world ');
// console.error('This is an error ******');
// console.warn('This is a warning +++++++++++++');
// var name = 'Alice';
// name = 'Ali';
// console.log(name);
// // let , const 
// let age = 30;
// age = 35;
// console.log(age);

// const PI = 3.14;
// PI = 2.13;
// console.log(PI);
// String, Numbers, Boolean, undefined 
// const name = 'John';
// const age = 30.2;
// const x = null;
// const isCool = true;
// const y = undefined; // declare undefined explicitly 
// let z; // going to be undefined 

//console.log(typeof z);



// Concatenation 
// const age = 30;
// const name = 'John';
// //console.log('My name is ' + name + ' and I am ' + age);
// // Template String or Template letrals : 
// const hello = `My name is ${name} and I am ${age} `;
// console.log(hello);

// const s = 'Hello world!';
// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toLocaleLowerCase());
// console.log(s.split(''));
// const c = 'technology , computers , React, Node';
// console.log(c.split(','));
 // ----------- Arays - variables that hold pulti^le values 
 // pls façon pour créer Arrays 
// const numbers = new Array(1, 2, 3, 4, 5, 6);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];
// // console.log(fruits);
// // console.log(fruits[1]);
// //fruits = []; // error
// fruits[3] = 'grapes';
// fruits.unshift('mangos');

// fruits.pop();
// console.log(fruits);
// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('apples'));

// Object literals 
const person = {    
    firstName: 'John',
    age: 27,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: '50 Main st',
        city: 'New York',
        state: 'MA'
    }
}

//console.log(age);
// distructuring let us pull properties out : ES6
// const { firstName, age, adress: { city,state  } } = person;

// person.email = 'test@gmail.com';
// console.log(person);


// Arrays of Object : todos 
const todos = [
    {
    id: 1,
    text: 'Take JS cours',
    isCompleted: true 
    },
     {
    id: 2,
    text: 'Take React cours',
    isCompleted: true 
    },
      {
    id: 1,
    text: 'Take Node.js cours',
    isCompleted: false 
    }
]
//console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
//  // For  Loop 
// for (let i = 0; i < 10; i++){
//     //console.log(i);
//     console.log(`For Loop Number : ${i} `);
// }
// WHILE 
// let i = 0;
// while (i < 10) {
//     console.log(`while Loop Number : ${i} `);
//     i++;
// }

// for (let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

for (let item of todos) {
    console.log(item);
}
