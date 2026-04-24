//Find factorial of a number using both for and while loops.
let fact = 1;
let num = 5;
for(let i = 1;i<=num;i++){
    fact = fact*i;
}
console.log("Factorial of " + num + " is " + fact);

let i = 1;
let factorial = 1;
while(i<=num){
    factorial = factorial*i;
    i++;
}
console.log("Factorial of " + num + " is " + factorial);