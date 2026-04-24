//default function
function test1(){
    console.log("This is text function");
}
test1();

//parameterized function --> this function overrides the default fucntion before colling it 
function test(name,city){
    console.log(name + " " + city);
}
test("Vishvajit","Solapur");

// NOTE : Function declarations are hoisted, so the last definition overrides earlier ones before execution.
// NOTE : Function expressions are not hoisted, so they execute in sequence, allowing different outputs.

//function expression - default
let addition = function(){
    console.log("This is the addition function");
}
addition();

//parameterized function
addition = function(num1,num2){
    console.log("Addition = "+(num1+num2));
}
addition(10,20);

//Arrow function
let display = () => console.log("This is arrow function");
display();

const add = (num1,num2) => {
   return num1+num2;
}

console.log("Addition = "+add(10,90));
