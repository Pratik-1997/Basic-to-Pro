// While Writing or Updating any innerHTML in js ( If not visible to HTML) ✨
// --> Then check if you are adding any event for js to run or not

// ➖➖➖➖➖➖

// // Fetcher / Selector ✨
// let a = document.getElementById("id");
// document.getElementsByClassName("Classname");
// document.querySelector("selector");

// // Below is solution for fetching HTML element ✨
// console.log(a);
// // Below is solution for retrieving innerHTML ✨
// console.log(a.innerHTML) ;
// // Below is solution for setting innerHTML ✨
// a.innerHTML = "Setting inner HTML";

// Fetching Attribute value ✨
// let a = document.querySelector(".anchorTest").attributes.href;
// let b = a.value;
// console.log(b);
// document.querySelector(".anchorTest").setAttribute('href',"facebook.com");
// console.log(a);

// ➖➖➖➖➖➖

// // Hosting ✨
// var is not a block level scope , can be Redeclared , it is hoisted
// let is a block level scrope , cannot be redeclared , it is not hoisted

// ➖➖➖➖➖➖

// Concatenation and Addition can be done with '+' ✨
// let a = "Test";
// console.log("Test Data" + a);
// console.log("Test Data" , a);

// ➖➖➖➖➖➖

// Logical Operators  ✨
// 1. &&  --> Logical AND
// 2. ||  --> Logical OR
// 3. !   --> Logical NOT
// let a = 4;
// let b = 5;
// if(a==4 && b==4) {
//     console.log("True");
// }
// else {
//     console.log("False")
// }

// ➖➖➖➖➖➖

// To find type ✨
// let a = "Pratik";
// let b = typeof(a);
// console.log(b);

// Some Important Data Types ✨
// Number , String , Object , Array

// ➖➖➖➖➖➖

// // Objects ✨✨
// const person = {
//     fname : "Pratik",
//     lname : "Keluskar",
//     fullname : function() {
//         return this.fname + " " + this.lname;
//     }
// }
// console.log(person.fname);
// // For adding new properties ✨
// person.job = "Developer";
// console.log(person);
// // For deleting properies ✨
// delete person.job;
// console.log(person);
// // Defining a function inside object ✨
// console.log(person.fullname())
// // Iterating over object  ✨
// let a = document.querySelector(".names").innerHTML;
// for ( let x in person) {
//     a += `<li>${person[x]}</li>`
// }
// document.querySelector(".names").innerHTML = a;

// ➖➖➖➖➖➖

// // Important String Methods ✨
// let a = "Hello World";
// let b = a.toUpperCase();
// console.log(b);
// let c = a.toLowerCase();

// ➖➖➖➖➖➖

// // String Interpolation ✨
// let fname = "Pratik";
// let lname = "Keluskar";
// let fullname = `Hi ${fname} is your surname ${lname}`;
// console.log(fullname);

// ➖➖➖➖➖➖

// // Numbers ✨
// let num1 = "10.225";
// let inte = parseInt(num1);
// console.log(inte);

// ➖➖➖➖➖➖

// // Array ✨✨
// // Array can hold many values under a single name and you can access the values by reffering to index nubmers
// const cars = ["BMW" , "Suzuki" , "Audi"];
// console.log(cars);
// // Array Methods ✨
// console.log(cars.length) //For getting array length
// // Below is method for adding new array element ✨
// cars.push("Lexus");
// console.log(cars);
// // Below is method for removing last array element ✨
// cars.pop();
// console.log(cars);
// // Below is method for adding new array element at start ✨
// cars.unshift("Limo");
// console.log(cars);
// // Below is method for removing array element at start ✨
// cars.shift();
// console.log(cars);
// // Showing Array elements in html ✨
// let a = document.querySelector(".names").innerHTML;
// for ( let x in cars) {
//     a += `<li>${cars[x]}</li>`;
// }
// document.querySelector(".names").innerHTML = a;
// // Finding array element ( returns true if element is present in array) ✨
// let val1 = cars.includes("BMW");
// console.log(val1);
// // To find index of BMW
// let val2 = cars.indexOf("BMW");
// console.log(val2);
// // Sorting / Reversing Array ✨
// cars.sort();
// console.log(cars);
// cars.reverse();
// console.log(cars);
// Array Iteration Methods ✨
// (i) --> forEach  -> This methods calls a callback function
// let b = document.querySelector(".arrayList").innerHTML;
// cars.forEach((x)=> {
//     b += `<li>${x}</li>`;
// })
// document.querySelector(".arrayList").innerHTML = b;
// (ii) --> map  -> This method creates a new array by performng on each array element , it does not change original array
// Basic example
// let b = document.querySelector(".arrayList").innerHTML;
// let cars2 = cars.map((x)=> {
//     b += `<li>${x}</li>`;
// })
// document.querySelector(".arrayList").innerHTML = b;
// (iii) ==> filter method creates new array with array elements
// let numArray = [ 1 , 2 , 3 , 4 , 5 , 6 ];
// filteredVal = numArray.filter((x)=> { return x > 4});
// console.log(filteredVal)

// ➖➖➖➖➖➖

// // Math ✨
// // Basic methods
// Math.round();
// Math.min();
// Math.max();
// // To Return a random number from 0 to 10
// Math.floor(Math.random() * 11);

// ➖➖➖➖➖➖

// Loop For ✨
// Loops through number of block multiple times

// ➖➖➖➖➖➖

// Loop for in ✨
// Covered at top
// Definition : The for in statement loops through properties of object / Array

// ➖➖➖➖➖➖

// Break ✨
// Break statement can be used to jump out of loop

// Continue ✨
// The statement breaks one iteration in the loop

// ➖➖➖➖➖➖

// For Type Conversion ✨
// let a = "1111";
// let test = typeof(a);
// console.log(test);
// let test2 = parseInt(a);
// console.log(typeof(test2));

// ➖➖➖➖➖➖

// Strict mode ✨
// "use strict";
// using a variable without declaring won't work in this mode

// ➖➖➖➖➖➖

// this keyword ✨
// in an object method , this refers to an object
// alone this refers to global object
// in function, this refers to global object
// In an event, this refers to element that received the event

// ➖➖➖➖➖➖

// // Arrow function ✨
// Hello = () => { console.log("Hello works")};
// Hello();

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// jQuery ✨✨
// $(document).ready(function(){
//     console.log("Check jQuery")
// })

// Selectors ✨
// For id & Class
// $("#id").click(function(){console.log("test")});
// $(".class").click(function(){console.log("test")});

// For Click ✨
// $("#id").click(function(){console.log("test")});
// Same using javascript
// document.getElementById("id").addEventListener(click,function(){console.log("test")});

// // Traversing ✨
// // Below method only give top parent
// let a = $(".child").parent();
// console.log(a);
// // Below method will give all top parent elements
// let b = $(".childs").parents();
// // Below method will give child elements
// let c = $("parent").child();
// // Others methods are : next(), nextAll(), nextUntil(), prev(), prevAll()

// Not method ✨
// The method returs all methods that does not match criteria
// $(p).not(".intro");

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// Advanced Javascript Functionalities ✨✨

// // Callback ✨
// // Its a function passed as an arguement to another function
// function Displayer(c) {
//   document.getElementById("hello").innerHTML = c;
// }
// function Callback(a, b, caller) {
//   let c = a + b;
//   console.log("Callback working");
//   caller(c);
// }

// Callback(1, 2, Displayer);

// Promise ✨
// Promise object can be pending, fullfilled or Rejected
// let myPromise = new Promise(function(myResolve,myReject) {
//     let success = true;
//     if(success) {
//         myResolve("operation was succesfful");
//     }
//     else {
//         myReject("operation was not successful");
//     }
// })

// myPromise.then(function(value){
//     console.log(value);
// }).catch(function(value){
//     console.log(value);
// })

// // Async Await ✨
// // async make a function returns a promise
// // await makes a function wait for promise ( await keyword can be used inside async function )
// // Define an async function
// async function executePromise() {
//     let myPromise = new Promise(function(myResolve, myReject) {
//         // Simulate an asynchronous operation
//         let success = true; // Change this to false to simulate a rejection
//         if (success) {
//             myResolve("Operation was successful!");
//         } else {
//             myReject("Operation failed!");
//         }
//     });

//     // Use try...catch to handle promise resolution and rejection
//     try {
//         let result = await myPromise;
//         console.log(result); // "Operation was successful!"
//     } catch (error) {
//         console.log(error); // "Operation failed!"
//     }
// }

// // Call the async function
// executePromise();

// Closure ✨
// Closure is a combination of function bundled together with reference to its surrounding state (lexical environment)
// function init(){
//     var name = "Mozilla";
//     function displayName(){
//         console.log(name); 
//     }
//     displayName();
// }
// init();

// Higher Order Function ✨
// HOF does one of following
// (i) takes one or more function as arguement
// (ii) returns a function as arguement

// Arrow Function ✨
// const x = (x,y) => {console.log(x,y)};
// x(1,2);

// Object Destructuring ✨
// Line 66 object 💤
// let {fname , lname } = person;

// Spread Operator ✨
// const q1 = [1,2,3,4];
// const q2 = [5,6,7,8];
// const q = [...q1 , ...q2]
// console.log(q);

// Rest Operator ✨
// The rest parameter allows a function to treat indefinite number of argument as array
// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//         return sum;
//     }
// }
// let x = sum (4,9,10,29,50);

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// DOM Manipulation ✨✨

// Css Manipulation using CSS ✨
// document.getElementById("id").style.color = "Blue";

// Event Bubbling or Capturing ✨
// In bubbling inner most element event is handled first (By default)
// In capturing outer most
// Eg : a.addEventListener("click",myFnc,true); -- True for Bubbling / False for Capturing
