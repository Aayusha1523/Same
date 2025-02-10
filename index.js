// let person = {
//   name: "John",
//   age: 10,
// };
// for (key in person) {
//   console.log(key ,person[key]);
// }

// let j=1;

// while(j<=5){
//     console.log(j)
//     j++;
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=5)

//// for in USE
// const numbers=[1,2,3,4,5]
//     for(number in numbers){
//         console.log(numbers[number])
//     }
// out -- 1,2,3,4,5

//JAVASCRIPT IS  A SEQUENTIAL LANGUSAGE SO IT WORK SEQUENTIALLY

// let position=1;

// switch(position){
//     case "admin":
//         console.log("Ia m the admin");
//         break;
//         case "user":
//         console.log("You are the ");
//         break;
//         default:
//             console.log("Who are you");
// }

// const checkrole =(role)=>{

//     switch(role){
//         case "admin":
//             console.log("Ia m the admin");
//             break;
//             case "user":
//             console.log("You are the ");
//             break;
//             default:
//                 console.log("Who are you");
//     }
// }
// checkrole("admin");

//Control flow is done by break ,continue and return mainly used in function both break and return are same

// for (i=0;i<=5;i++){
//     if(i==3)break;
//     console.log(i)
// }

////                     CLASS -SECOND                               ////

////  HOISTING IN JS ⭐️ promotes rediability

// console.log property
// console.log(x)
// var x=1;// Yesma k huncha bhaney output it's undefined

// greet()
// function greet(){
//     console.log("Hello world");
// }

// VAR IS GLOBAL

//eg-
// function great(){
//     console.log("Hello world");
// }
// console.log(great) YESKO OUTPUT function great()

// let ra const local ma host huncha
// console.log(x);
// let x=12;

// TEMPORAL DEATH ZONE

//  CLOSURE- is a function bundle with lexical scope

// LEXICAL FUNCTION

// EG --1
// function outer(){
//     var x=23;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();

//EG --2
//  function outer(){
//    var x =1;
//     function inner(){
//         console.log(x)
//     }

//     inner()
//     x=100;
// }
// outer()
// const fan = outer()

// console.log(fan)

// function outer(){
//     var x=1;
//     console.log(x);
//     function inner(){
//        var b=2;
//         console.log(b)
//         console.log(x*b)
//     }
//     inner();

// }outer();

/////      WITH PARAMETERS

// function  out(a){
//     function circ(b){
//         console.log(a*b);
//     }
//     out(4);
// }
// circ(6);

// MEMORY CREATION AND EXECUTION in hoisting

///  CLOSURE KO USE

// EG---

// function factor(f){
//     return function mult(num){
//         console.log(num*f)
//     }
// }
// const double =factor(2)
// const triple =factor(3)
// const multBy6 =factor(6)
// double(2)
// triple(3)
// multBy6(6)

// EG ---2

// function counter(){
//     let count =0;
//     return{
//         increment:()=>{
//             count++;
//         },
//         decrement:()=>{
//             count--;
//         },
//         getCount:()=>{
//             console.log(count);
//         }
//     }
// }

// const count =counter()
// count.increment();
// count.decrement();
// count.getCount()

// ES 6
// right speed operator left accumulator operator

// const person={
//     name:'Aayusha',
//     age:2
// };
// const {name,age} = person;

// function add(numbers){
//     let sum=0
//     numbers.reduce((acc,val)) =>
//     {
//         acc += valsum=acc;
//         return acc
//     },0)
//     console.log(sum)
// }
// add(1,2,3)

//rest accumulate the value
// array literals ra constructor use garney

// const person=[1,2,3,4,5]
// var map =new Map()
// map.set("name","John")
// map.set('age',10)
// map.set(person,"Map with array");

// console.log(map.get(person))
// console.log(map.size)
// console.log(map.has("name"))

// MAP IS COMPARED WITH OBJECT

///         set -- YESMA KEY VALUE HUDAINA doesnot have data redundancy
// var set =new Set()
// set.add("1")
// set.add("1")
// set.add(1)
// console.log(set)

// var set =new Set([1,2,4,3,4,5,6])
// console.log(set)

// const array=[1,2,3,4]
// const array2=[...new Set(array)]
// console.log(array2)

//  PROTOTYPING IN JS --- it is the blueprint how the code should be performend in a systematic manner
//constructor function where the name must be captial

// function Person(name, age) {
//   this.age = age;
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   console.log("Hello this is Aayusha");
// };
// var person1 = new Person("John", 20);
// console.log(person1.name);
// person1.greet();
// console.log(person1.__proto__ === Person.prototype);

// EG -1

// class Person{
//     walk(){
//         console.log("Person walk")
//     }
// }
// class John extends Person{
//     speak(){
//         'John Speaks'
//     }
// }
// const person1 = new John()
// person1.speak()
// person1.walk()

//    EG ---2

// class Person{
//     walk(){
//         console.log("Person walks")
//     }
// }
// class John extends Person{
//     speak(){
//         'John Speaks'
//     }
// }
// const person1 = new John()
// person1.speak()
// person1.walk()

/////                    Homework

// person parent classs class s student and teacher  chai child

// class Head{
//     head(){
//         console.log('I am the Total Haed');
//     }
// }
// class Teacher extends Head{
//     teach(){
//         console.log('I am the Teacher who teaches');
//     }
// }
// class Student extends Head{
//     study(){
//         console.log('I gain knowledge');
//     }
// }
// const student1= new Teacher()
// student1.teach()

// const student2= new Student()
// student2.study()

// Asynchronous  language non  blocking IO single threader in JS

//pending,promise,reject- its a object

// console.log('start');
// setTimeout(()=>{
//     console.log('middle')
// },2000)
// console.log('end');
// // next eg
// console.log('start');
// setTimeout((name,age)=>{
//     console.log(name,age)
// },2000,'Aayusha',20)
// console.log('end');

// console.log('start');
// const timerId=setTimeout((name,age)=>{
//     console.log(name,age)
// },2000,'Aayusha',20)
// clearTimeout(timerId) it is used to clear the timeout its like deleting
// console.log('end');

// let x=10
// const timerId= setInterval(()=>{
//     x--;
//     console.log(x)
//     if(x==0){
//         clearInterval(timerId)
//     }
// },1000)

//event loop micro tasking call stack

/// PROMISES IN JS
// function Aayusha() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = Math.random() > 0.1;
//       if (success) {
//         resolve("the data is being sucessfully fetched");
//       } else {
//         reject("This one is being rejected");
//       }
//     }, 1000);
//   });
// }
// //// In the above code we have used resolve and reject now in below we're going to perform by Try ,catch and finally
// async function Neupane() {
//   try {
//     let result = await Aayusha("https://jsonplaceholder.typicode.com/todos");
//     console.log("This a catch block ", result);
//   } catch (error) {
//     console.log("This is an error");
//   } finally {
//     console.log("It is sucessful");
//   }
// }
// Neupane();

//  JSON

// async function getData() {
//   try {
//     const response =await fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((f) => console.log("this is json file:", f));
//     console.log(response);
//   } catch (error) {
//     console.log("err", error);
//   }
// }git 
// getData();

//JSON javascript object notation-- less coding light weight 

// Data Types in json are= String,Number,Boolean,Array, Object, Null,merge


