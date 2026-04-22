let students = ["abc","pqr","lmn","xyz"];

//NOTE : FOR-LOOP is not used in MERN because it takes much time to execute so we use forEach array method
//       forEach is not a loop It is the array method;

//Using forEach loop
// for(let student of students){
//     console.log(student);
// }

//Using forEach loop with arrow function 
students.forEach((student) => {
    console.log(student);
})