//if-else

//1. Check whether a given number is even or odd.
let num1 = parseInt(prompt("Enter the number to check even or odd : "));
if (num % 2 == 0) {
    console.log(num + " is even number");
} else {
    console.log(num + " is add number");
}

//2. Check whether a number is divisible by both 3 and 5, only 3, only 5, or neither.
let num2 = parseInt(prompt("Enter the number to check it is divisible by 3,5: "));
if (num2 % 3 == 0 && num2 % 5 == 0) {
    console.log(num2 + " is divisible by 3 and 5");
}
else if (num2 % 3 == 0) {
    console.log(num2 + " is divisible by 3");
}
else if (num2 % 5 == 0) {
    console.log(num2 + " is divisible by 5");
}
else {
    console.log(num2 + " Not divisible by both 3 and 5");
}

//3. Given a number, check whether it is a multiple of 10 but not a multiple of 100.
let num3 = parseInt(prompt("Enter the number to check is it multiple of 10 but not 100"));
if (num3 % 10 == 0 && num3 % 100 != 0) {
    console.log(num3 + " satisfies condition");
}
else {
    console.log("not satisfies");
}

//4. Check whether a number is divisible by 2 OR 7 but not both.
let num4 = parseInt(prompt("Enter the number : "));
if ((num4 % 2 == 0 && num4 % 7 == 0) && (num4 % 2 == 0 || num4 % 7 == 0)) {
    console.log(num4 + " Satiesfies the condition");
} else {
    console.log(num4 + " not satiesfies the condition");
}

//5. Check whether a number lies between 50 and 100 (inclusive) or not.
let num5 = parseInt(prompt("Enter the number : "));
if (num5 >= 50 && num5 <= 100) {
    console.log(num5 + " lies between 50 and 100");
} else {
    console.log(num5 + " not lies between 50 and 100");
}


//else-if

// 1. Input a number and classify it as:
// Single digit
// Two digit
// Three digit
// More than three digits

let num_5 = parseInt(prompt("Enter the numbers : "));
let rev = 0;
let count = 0;
while (num_5 != 0) {
    count++;
    num_5 = Math.flooe(num_5 / 10);
}
if (count == 1) {
    console.log("Single digit");
}
else if (count == 2) {
    console.log("two digit");
}
else if (count == 3) {
    console.log("three digit");
}
else {
    console.log("More than three digit");
}

//2. Input electricity units consumed and calculate bill:
// First 100 → free
// Next 100 → ₹5/unit
// Above 200 → ₹10/unit
let choice;

do {
    let units = parseInt(prompt("Enter electricity units: "));
    let bill = 0;

    if (units <= 100) {
        bill = 0;
    }
    else if (units <= 200) {
        bill = (units - 100) * 5;
    }
    else {
        bill = (100 * 5) + (units - 200) * 10;
    }

    console.log("Total bill = Rs." + bill);

    choice = prompt("Type 'yes' to continue, anything else to stop");
} while (choice === "yes");

//3. Input temperature and display:

// Hot (> 35°C)
// Warm (20–35°C)
// Cold (< 20°C)

let temp = parseInt(prompt("Enter the temperature"));
if (temp > 35) {
    console.log("Hot");
}
else if (temp > 20 && temp < 35) {
    console.log("Warm");
}
else {
    console.log("Cold");
}

//4. Check age group:

// Child (< 13)
// Teen (13–19)
// Adult (20–59)
// Senior (60+)
let age = parseInt(prompt("Enter the age : "));
if (age < 13) {
    console.log("child");
}
else if (age > 13 && age < 19) {
    console.log("Teen");
}
else if (age > 20 && age < 59) {
    console.log("Adult");
}
else {
    console.log("Senior");
}

//5.Find the largest among three numbers.
let first = 15;
let second = 56;
let third = 44;
if (first > second && first > third) {
    console.log(first + " is greater than " + second + " and " + third);
}
else if (second > first && second > third) {
    console.log(second + " is greater than " + third + " and " + second);
} else {
    console.log(third + " is greater than " + first + " " + second);
}

//SWITCH

//1.Input a number (1–7) and print the day of the week.
let weekNum = 4;
switch (weekNum) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Not a valid number");
        break;
}

//2.Input a character and check if it is a vowel (a, e, i, o, u).
let char = 'i';
switch (char) {
    case 'a':
        console.log("vowel");
        break;

    case 'e':
        console.log("vowel");
        break;

    case 'i':
        console.log("vowel");
        break;

    case 'o':
        console.log("vowel");
        break;

    case 'u':
        console.log("vowel");
        break;

    default:
        console.log("Not a vowel");
        break;
}

//3. Create a simple calculator:
// Input operator (+, -, *, /) and perform the operation.

let a = 5;
let b = 10;
let op = '+';
switch (op) {
    case '+':
        console.log(a + b);
        break;

    case '-':
        console.log(a + b);
        break;

    case '/':
        console.log(a + b);
        break;

    case '*':
        console.log(a + b);
        break;

    default:
        console.log("Invalid Input");
        break;
}

//4.Input traffic signal color (red, yellow, green) and print the action.
let signal = "yellow";
switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Input");
        break;
}

//5.Input a number (1–12) and print the month name.
let month = 12;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        console.log("Invalid Input");
        break;
}

//while loop

//1. Print numbers from 1 to 10 using a loop.
let i = 1;
while (i <= 10) {
    console.log(i++);
}

//2.Print all even numbers from 1 to 50.
let num7 = 3;
while (num7 <= 50) {
    if (num7 % 2 == 0) {
        console.log(num7);
    }
    num7++;
}

//3.Calculate the sum of first N natural numbers.
let n = 10;
let sum = 0;
while (n > 0) {
    sum = sum + n;
    n--;
}

//4.Reverse a given number
let num8 = 123;
let reve = 0;
while (num8 != 0) {
    let remainder = num8 % 10;
    reve = reve * 10 + remainder;
    num8 = num8 / 10;
}

//5.Count the number of digits in a given number.
let num9 = 123;
let count_1 = 0;
while (num9 != 0) {
    count_1++;
    num8 = num8 / 10;
}
console.log("No of digits are : " + count_1);

// DO-WHILE
//1.Display numbers from 1 to 5, ensuring loop runs at least once.
let ii = 1;
do {
    console.log(i++);
} while (ii <= 5);

//2.Keep asking user to enter a number until they enter 0.
let ask;
do {
    ask = parseInt(prompt("Enter the number"));
} while (ask !== 0);

//3.Create a menu-driven program that repeats until user selects exit option.
let arr = [];
let inp;
do {
    console.log("Select one option");
    console.log("1. push element");
    console.log("2. pop element");
    console.log("3. Exit");

    inp = parseInt(prompt("Enter the option number"));
    switch (inp) {
        case 1:
            arr.push(parseInt(prompt("Enter the number")));
            console.log("Array : " + arr);
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Array is empty");
            } else {
                arr.pop();
            }
            break;

        case 3:
            console.log("Exit");
            break;

        default:
            console.log("Invalid Input");
            break;
    }
} while (inp !== 3);

//4. Ask user to guess a number until they guess the correct number.
let correctNum = 17;
let guess;
do{
    guess = parseInt(prompt("Enter the number"));
}while(correct != guess);
console.log("You guessed the correct number");

//5.Keep taking input until user enters a negative number, then stop.
let input;
do{
    input = parseInt(prompt("Enter the number"));
}while(input > 0);

//FOR-LOOP

//1.Print numbers from 1 to N.
let N = 90;
for(let i = 1;i<=N;i++){
    console.log(i);
}

//2.Print the multiplication table of a number.
let multNum = 2;
for(let i = 1;i<=10;i++){
    console.log(multNum*i);
}

//3.Print all numbers divisible by 3 between 1 to 100.
for(let i = 1;i<100;i++){
    if(i%3==0){
        console.log(i);
    }
}

//4.Count how many numbers between 1 to N are even.
let limit = 60;
let countEven = 0;
for(let i = 1;i<limit;i++){
    if(i%2==0){
        countEven++;
    }
}

//5. Find the factorial of a number.
let fact = 1;
let factNum = 5;
for(let i = 1;i<=factNum;i++){
    fact = fact*i;
}
console.log("factorial of : "+ factNum +" is "+fact);