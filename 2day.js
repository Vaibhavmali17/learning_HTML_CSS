// //printing statement of js
// // thisprinting statment which appears in console window 
// console.log("hello students !!!"); // 1st choice 

// document.write("hello")
// document.write("hello")
// document.write("hello")
// document.write("hello" + "<h1>HR</h1>")

// document.writeln("Hello")
// document.writeln("Hello")
// document.writeln("Hello" +"<br>")
// document.writeln("Hello")
// document.writeln("Hello")

// // BOM this will provides some popup boxes
// // alert will print you the simple popup box with simple msg with okay option
// alert("summited complete")

// confirm("are you sure")
// prompt(" enter your name")

let pro1 = parseInt(prompt("enter the first product price"))
let pro2 = parseInt(prompt("enter the second product price"))
let pro3 = parseInt(prompt("enter the third product price"))
let pro4 = parseInt(prompt("enter the fourth product price"))
let pro5 = parseInt(prompt("enter the fifth product price"))

let total =  pro1 + pro2 + pro3 + pro4 +pro5
console.log(total);
if(total >= 10000){
    document.writeln(" dear vustomer you have purchesed the product ")
}
else{
    document.writeln("")
}