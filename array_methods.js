const rollno = [101,102,103,104,105];
let flag = false;

//METHOD-1
rollno.forEach((r) =>{
    if(r === 100){
        flag = true;
        return;
    }
});

if(flag){
    console.log("Present");
}
else{
    console.log("Not Present");
}

//METHOD-2
console.log(rollno.includes(100));

//METHOD-3
if(rollno.includes(101)){
    console.log("Present");
}
else{
    console.log("Not Present");
}