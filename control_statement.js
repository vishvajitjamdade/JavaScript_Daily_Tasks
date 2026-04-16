//conditional statement
//if else
//if we want to check one condition according to only one block

let age = 18;
if(age>18){
    console.log("You are eligible for voting");
}else{
    console.log("Try next time!");
}

let num = 40;
if(num%2 == 0){
    console.log(num + " is even number");
}else{
    console.log(num + " is not even number");
}

let marks = parseInt(prompt("Enter your marks : "));
if(marks>=35){
    console.log("Congratulations! You have passed exam successfully.");
}else{
    console.log("Failed in exam");
}

//else if
//here we can check more than one condition accirding to multiple block

let num1 = 56;
let num2 = 69;
let num3 = 90;

if(num1>num2 && num1>num3){
    console.log(num1 + " is greater than " + num2 + " and " + num3);
}
else if(num2>num1 && num2>num3){
    console.log(num2 + " is greater than " + num1 + " and " + num3)
}
else{
    console.log(num3 + " is greater than " + num1 + " and " + num2);
}

let percentage = 98;
if(percentage>90){
    console.log("Grade A");
}else if(percentage<90 && percentage>75){
    console.log("Grade B");
}
else if(percentage>55 && percentage<75){
    console.log("Grade C");
}
else{
    console.log("Fail");
}

let n = 10;
if(n > 0){
    console.log(n + " is positive number");
}else if(n < 0){
    console.log(n + " is negative number");
}else{
    console.log(n + " is not a number");
}

//switch
let time = 12;
switch(time){
    case 6:
        console.log("Good Morning");
        break;
    case 12 : 
        console.log("Good Afternoon");
        break;

    case 4 : 
        console.log("Good Evening");
        break;

    default : 
        console.log("Good Night");
        break;
}

//Looping

//1. for -loop --> Used when the number of iteration are known in advance.
for(let i = 1;i<=10;i++){
    console.log("Hello JavaScript for-loop");
}

//2. while-loop --> Repeats the block of code as long as given condition is true
let a = 1;
while(a<=10){
    console.log("Hello while-loop");
    a++;
}

//3. do-while loop --> Executes code at least once and then check the condition;
let count = 1;
do{
    console.log("Hello do-while");
    count++;
}while(count<=10);
