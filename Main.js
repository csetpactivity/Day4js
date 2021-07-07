//Day - 4
// template strings - date object - IIFE function(Self invoking function) 
// - hoisting - for in / for of loop - Garbage Collection -  Getters ans Setters - two new Advanced features 2021


//template strings

// var s = "I am from \n \"KSR\" college";
// console.log(s)

// //object : {}
// // boolean - true or fslse
// //strings "" , ''
// //template literals : ``

// var s1 = `I am from 
// " KSR "
// college`;
// console.log(s1)

// var a = 10;
// var b = 23;
// console.log(`Addition of a and b = ${a+b}`)

// var d = "Good afternoon";
// console.log(`${d}`)



//date object


const date = new Date();
console.log(typeof date)
// console.log(date.getMinutes())



// //IIFE - Immediate invoked function expression

// //initialcsss() , javascript() 

// var a = 10;
// var b = 20;
// ((q,w) => {
//     console.log(` arrow fun -- ${q+w}`)
// })(a,b);

// (function functionname(){

// })();



//Hoisting 

// //function declaration 


// function decfunction(){
//     console.log(`declaration`)
// }

// decfunction()




// //function expression


// let express = function(){
//     console.log(`Expression`)
// }


// express()

//guess the output 


// console.log(num)
// const num = 10;


//for in loop || for of loop

// const person = {
//     name:"stark",
//     age: 20,
//     hobby:"playing"
// }

// console.log(person)

// for(let x in person){  // variable name in that object
//     console.log(`${x} : ${person[x]}`);
// }

// //person.name
// //person['name']


// const arr = ["biriyani" , "parotta","grill","tandoori"];
// console.log(arr);

// for (let x in arr){
//     console.log(arr[x]);
// }

//for of loop

// let scores = [80, 90, 100];

// for(let s of scores){
//     console.log(s);
// }


// const ratings = [
// {
//     user:"john",
//     score:3,
// },
// {
//     user:"Wick",
//     score:30,
// },
// {
//     user:"Arya",
//     score:63,
// },
// {
//     user:"Stark",
//     score:83,
// }

// ]

// let sum = 0;
// for(let {score} of ratings){
//     sum+=score;
// }

// console.log(` sum of the ratings : ${sum}`)

//javscript can automatically clear its memory -- V8 engine 


//getters and setters 
//get - get and display
//set - setting the value   // acess property

// const student = {
//     firstName : "Jon",  // data property 
//     lastName:"Snow",
//     get getName(){  //method
//         return `${student.firstName} ${student.lastName}`  ;
//     },
//     set setName(value)
//     {
//       var arr = value.split(" ")
//       console.log(arr)
//       this.firstName =  arr[0];
//       this.lastName = arr[1] ?? " "; //nullish operator //null or undefined
//     }
// }

// student.setName = "Mohan";
// console.log(student.getName)

// let s = "javascript";
// if(s  == null && s ==undefined){ // value = null or undefined 
//     s = "value changed";
// }
// console.log(s);


// var sq = undefined;
// sq ??= "javascript"; // sq == undefined || sq == null
// console.log(sq);

// let q = "javascript";
// q &&= "value changed"
// console.log(q)



class Student extends Object{
    constructor(name,age){
        super();
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(`hello from sayHi method`)
    }
}


var a = new Student()
var arr= [
  new Student("a",15),
  new Student("b",16),
  new Student("c",17),
  new Student("d",18),
  new Student("e",19),

]


arr.forEach((val) => {
   console.log(`${val.name} ${val.age}`)
})






