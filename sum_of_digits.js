var num = 345;
var sum = 0;
var org = num;

while(num>0){
    var lastDigit = num % 10;
    sum = sum + lastDigit;
    num = Math.floor(num/10);
}
console.log("The sum of digits of number "+org + " is "+ sum);