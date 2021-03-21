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
        test: 'Take JS cours ',
        isCompleted : true 
    },
     {
        id: 2,
        test: 'Take React cours ',
        isCompleted : false 
    },
      {
        id: 3,
        test: 'Take Node.js cours ',
        isCompleted : false 
    }
]
console.log(todos[1].test);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//FOR LOOP

 for (let i = 0; i <= 10; i++){
    console.log(i);
    //console.log(`For Loop Number : ${i}`);
}
 
let i = 0;
while (i < 5) {
    console.log(`While Loop Number : ${i}`);
    i ++;
}
for (let item of todos) {
    console.log(item);
}
