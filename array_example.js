const rollno = [1,2,3,4,5,6];
console.log(rollno);

const student = ["vishvajit","pune",456789078,90.00];
console.log(student);

const persons = new Array("xyz","abc");
console.log(persons);

console.log("Using forEach Loop : ");
persons.forEach((p) => {
    console.log(p);
})

console.log("Using let of loop : ");
for(let p of persons){
    console.log(p);
}
