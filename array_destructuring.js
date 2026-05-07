let fruits = ["apple", "banana", "orange"];

let [first,second,third] = fruits;
console.log(first);
console.log(second);
console.log(third);
console.log(fruits);

let colors = ["red", "green", "blue", "yellow"];
let [firstColor,,thirdColor] = colors;
console.log(firstColor);
console.log(thirdColor);

let numbers = [1,2];
let [a,b,c=3] = numbers;
console.log(a);
console.log(b);
console.log(c);

fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;
console.log(first);
console.log(second);
console.log(rest);