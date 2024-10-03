//Q1: Define a variable age and assign it the value 25.what is the type of the age variable?
var age = 25;
console.log(age);
//the type of "age" variable is 'number'
//Q2: create a constant variable PI and assign it the value 3.14 . what are the advantages of using a constant variable over a regular variable in typescript?
var PI = 3.14;
console.log(PI);
//The advantae of using constant variable in typescript is that its value can't be changed.
//Q3: Declare a variable name without initialize it. what is the initial value and type of the name variable?
var fname;
console.log(fname);
//the type of this variable is 'any'.
//Q4: explain the difference between declaring a vriable and using let and const in typescript. provide exaple.
//if we use let so we can reassign our initial value 
//But 
//if we use const so we can't reassign our initial value 
// Here some Examples
var a = 5;
a = 4;
//console . log (a);
var D = 6;
//b=7
console.log(D);
// Here is a errorr is that you can't reassign a value of "B" because  its a constant.
//Q5:Define a variable colours and assign it an array of strings containing different colours. what is the type of colours variable?
var colours = ["red ,yelow , green"];
console.log(colours);
//Q6: what is the difference btween declaring a variable without a type annotation and with a type annotation in typescript?
var butter = "yummy";
console.log(butter);
//its  A infer typing.
var egg = "delicious";
console.log(egg);
//its a strong typing.
//Q7: create a variale userinfo and assign it an object with name and age properties. provide type annotations for the userinfo variable.
var userinfo = {
    name: "javeria nigar",
    age: 15,
};
console.log(userinfo);
//Q8: Define a variable tamperature and assign it a value of 20.5. what type does typescript infer for the temperature variable?
var temperature = 20.5;
console.log(temperature);
//the typescript infer the type of variable is "number".
//Q9: declare a variable is loggedin and assign it a boolean value true .later in teh code , changed it value to false. is this allowed with const variable in typescript ?
var loggedin = true;
//loggedin = false 
console.log(loggedin);
//the const isn't allowed the reassign the value of variable.
//Q10: define a variable student using the let keyword and assign it an object with name age and grade properties. later in the code, update the grade property to a new value. is this alloewed in typescript? why or why not?
var student = {
    name: "burhan",
    age: 8,
    grade: 98,
    //grade:99,
    //Here is a error is that "An object literal cannot have multiple properties with tha same name".
};
console.log(student);
// if we use the same variable name within an object, there won't be any error.
grade: 99;
//because 
//"variable in objects are 'local scope' those outside are 'globalscope'".Thats it .
