const arr = [10, 100, 25, 5];

//In ascending order
arr.sort((a,b) => a-b);
console.log("Ascending : " +arr);

//In descending order
arr.sort((a,b) => b-a);
console.log("Reversed : " + arr);