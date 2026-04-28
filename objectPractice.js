const student = {
    name : "vishvajit",
    city : "solapur"
}

console.log(student);
console.log(student.name);
console.log(student.city);

console.log("Using loop for-in : ")
for(let key in student){
    console.log(key,student[key]);
}