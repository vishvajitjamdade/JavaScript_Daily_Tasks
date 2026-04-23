//4. Reverse a given number using a while loop.
let num = 1234;
console.log("Original Number : " + num);
let rev = 0;
while(num > 0){
    let lastDigit = num%10;
    rev = rev*10 + lastDigit;
    num = Math.floor(num/10);
}
console.log("Reversed Number : " + rev);