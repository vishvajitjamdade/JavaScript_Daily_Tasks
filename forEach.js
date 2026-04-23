let students = ["abc","pqr","lmn","xyz"];

// for(let i = 0;i<students.length;i++){
//     console.log(students[i]);
// }

//NOTE : FOR-LOOP is not used in MERN because it takes much time to execute so we use forEach array method
//       forEach is not a loop It is the array method;

console.log("forEach Using let-of");
for(let student of students){
    console.log(student);
}

console.log("Using forEach loop with arrow function");
students.forEach((student) => {
    console.log(student);
})

var name = "abcd";
let i = 0;
let count = 0;
while(name.charAt(i)){
    i++;
    count++;
}
console.log(count);