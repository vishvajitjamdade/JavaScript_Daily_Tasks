const student = {
    firstName : "Vishvajit",
    lastName : "Jamdade",
    state : "Maharashtra",
    pinCode : 1234,
    phone1 : 123456781,
    phone2 : 123456734,
    fullName : function() { 
        console.log(this.firstName + " " + this.lastName)
    },
    address : function(){
        console.log(this.state);
        console.log(this.pinCode);
    },
    phone : () => {
        console.log(student.phone1);
        console.log(student.phone2);
    }
}

console.log(student);
student.fullName();
student.address();
student.phone();