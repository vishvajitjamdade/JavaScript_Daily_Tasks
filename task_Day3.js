// 1.Problem Statement:
// A product originally costs ₹2500. A 10% discount is applied.
// Write a JavaScript program to calculate the final price after the discount and display it.
let productPrice = 2500;
let originalPrice = (2500 * 10) / 100;
console.log("Price after applied 10% discount : " + originalPrice);

// 2.Problem Statement:
// You have two variables: a = 5 and b = 10.
// Write a JavaScript program to swap their values without using a third variable and print before and after values.
let a = 5;
let b = 10;
a = a + b;
b = a - b;
a = a - b;

// 3.Problem Statement:
// You bought a mobile for ₹1200 and sold it for ₹1500.
// Write a program that calculates and prints whether you made a profit or loss, and by how much.
let buyPrice = 1200;
let soldPrice = 1500;

if (soldPrice > buyPrice) {
    console.log("You have made the profit of : Rs." + (soldPrice - buyPrice));
}
else {
    console.log("You have loss of : Rs." + (buyPrice - soldPrice));
}

// 4. Problem Statement:
// You have a total of 5000 seconds.
// Write a program to convert it into hours, minutes, and seconds format and print it.
// (Example Output: 1 hour 23 minutes 20 seconds)
// let totalSeconds = 5000;

// let remainder1 = totalSeconds % 3600;
// let quotientH = Math.floor((5000 - remainder1) / 3600);
// let remainder2 = remainder1 % 60;
// let quotientM = Math.floor((remainder1 - remainder2) / 60);

// console.log(quotientH + " hour " + quotientM + " minutes " + remainder2 + " seconds");

const totalSeconds = 5000;

// 1. Calculate hours: 3600 seconds in an hour
const hours = Math.floor(totalSeconds / 3600);

// 2. Get remaining seconds after hours are taken out
const remainingSecondsAfterHours = totalSeconds % 3600;

// 3. Calculate minutes: 60 seconds in a minute
const minutes = Math.floor(remainingSecondsAfterHours / 60);

// 4. Get final remaining seconds
const seconds = remainingSecondsAfterHours % 60;

// Display the result using a Template Literal for better readability
console.log(`${hours} hour ${minutes} minutes ${seconds} seconds`);

// 5. Problem Statement:
// Write a program that takes your current age (e.g., 20 years) and calculates how many days you've 
// lived, assuming 365 days per year.
let currentAge = 21;
console.log((currentAge * 365) + " many days I've lived");