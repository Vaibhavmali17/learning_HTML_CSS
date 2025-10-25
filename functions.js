// function task(value1 , value2){
//     alert("my function is  working....")
//     console.log("hey in console");
//     console.log(value1 + value2);
    
// }
// task(10,20)
// task(30,20)

// function msg(){
//     alert("addded to card")
// }
// msg()


// 18-07-2025

// nested functions

// function parent ()
// {
//     let Name = "harsha"
//     console.log("i am parent functions");

//     function child()
//     {
//         console.log("i am child functions");
//         let msg2="logout"
//         console.log(Name);
//     }
//     child()
//     // parent() 
// }
// parent()

// // global scope
// let Name="sangharsh"
// console.log(Name);
// function printMsg(name1){
//     //local scope
//     let text="omkar"
//     console.log(text);
//     console.log(`hello ${Name} and ${name1}`);
//     function greet(){
//         console.log(`namskar ${text}`);
//     }
//     greet()
// }
// printMsg("vishwajit")
// console.log(Name);
// // console.log(name1);
// // console.log(text);


// // block scope

// function printMsg2(){
//     let content = "good afternoon"
//     if(content){
//         console.log(content);
//     }
//     else{
//         console.log("good evening");
//     }
//     console.log(content);
    
// }
// console.log(content);
// printMsg2()


// //  first way to create array by using literal

// let numbers=[10, 20,40,90,35]
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[4]);
// console.log(numbers[-2]);
// console.log(numbers[0]);

// let Names = ["jayesh","ketan","bhavesh","hitesh"]
//  console.log(Names);
//  let stddetails= ["ramesh","dhule",22,false]

// //  second way to create an array is by new constructor

// let Places = new Array("pune","kedarnath","dhule","hol")
// let favnumbers= new Array(33,43,897,232,53)
// console.log(Places);
// console.log(favnumbers);

// let Subject = new Array("webtech")
// console.log(Subject);

// //  by creating length of array
// let Contact = new Array(244)
// // let Contact = new Array("web","sql")
// Contact[0]=3232
// Contact[1]=1002
// Contact[2]=20993
// Contact[3]=1923
// Contact[555]=9052
// console.log(Contact);

// //  remove/add 1st value & last value using push/pop , unshift/shift
// let movies =["chhava","tiger","dhoom","raone"]
// console.log(movies);

// movies.push("krish","lucifer")
// console.log(movies)

// movies.pop()
// console.log(movies)

// movies.unshift("avengers","HOD")
// console.log(movies);

// movies.shift()
// console.log(movies);

// tamasha // slice

// let moviesall =["pathan","tiger","ved","timepass","dhoom","golmaal"]
// console.log(moviesall);

// let marathimovies=moviesall.slice(2,4)
// console.log(marathimovies)

// 21/7/2025

// function msg (){
//     return 'hello'
// }
// function printname(value,value2){
//     console.log(msg(value),value2);
// }
// printname(msg, "mahak")
// printname(msg, "mrudul")
// printname(msg, "madhuri")
// printname(msg, "shivani")

// function printboys(name,name1){
//     console.log(msg(name),name1);
// }
// printboys(msg,"bhavesh")
// printboys(msg,"jayesh")
// printboys(msg,"ketan")
// printboys(msg,"harshal")


// let numbers=[10,34,54,76,12,99,67,24]
// let even = numbers.filter((ele)=>{
//     console.log(ele);
//     return ele % 2 ==0
// })
// console.log(numbers);
// console.log(even);



// let names = ['sandhya','supriya','namrata','sayali','vijaya','bhagyashri']
// let Nnames= names.filter((val)=>{
//    // return val.includes('n')
//     // return val.startsWith('n')
//     return val.endsWith('a')

// })
// console.log(Nnames);


let head = document.getElementById("msg")
console.log(head);
head.style.color= "red"
head.style.backgroundColor= "yellow"

let actros = document.getElementsByClassName("head")
console.log(actros);
actros[0].style.color="pink"
actros[1].style.color="crimson"
actros[2].style.color="red"

actros.forEach((ele)=> {
    return ele.style.color="green"
});





 