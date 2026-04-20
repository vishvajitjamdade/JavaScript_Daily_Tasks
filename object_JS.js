//CREATION OF OBJECT

var student={
    rollno:101,
    name:"abcd",
    email:"email123@gmail.com",
    contactNumber:1234567890
    // rollno:102 --> Key should be unique : Answer if we use it : 102 //override the value //this do not give any error
};

console.log(student);
console.log(student.rollno);
console.log(student["rollno"]);

//CREATION OF ARRAY
var data =[101,"abcd",true,99.99];
console.log(data);