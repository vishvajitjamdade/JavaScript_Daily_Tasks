function hello(){
    console.log("Hello");
};

hello();
hello();

//parameterized function
function add(a,b){
    console.log(a+b);
}
add(4,5);

//named function
function mult(a,b){
    console.log(a*b);
}
mult(8,9);

//anonymous function
// function (a,b){
//     console.log(a+b);
// }
// (4,5);

//imediate invoke function
(function(a,b){
    console.log(a+b);
}(9,10));

//function with expression
let mn = function add(a,b){
    console.log(a+b);
}
mn(8,9);

//arrow function
let ab = (a,b)=>{
    console.log(a*b);
}
ab(7,8);