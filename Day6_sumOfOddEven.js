//Sum of even and odd numbers separately from 1 to N using a loop

let num = 100;
let countEven = 0;
let countOdd = 0;
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        countEven++;
    } else {
        countOdd++;
    }
}

console.log("The sum even number from 1 to " + num + " is " + countEven);
console.log("The sum even number from 1 to " + num + " is " + countOdd);