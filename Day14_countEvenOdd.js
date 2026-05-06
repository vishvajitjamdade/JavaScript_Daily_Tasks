const arr = [20,21,56,55,3,11];

let even = 0;
let odd = 0;

for(let num of arr){
    if(num%2 == 0){
        even++;
    }
    else{
        odd++;
    }
}

console.log("Even Count : " + even);
console.log("Odd Count : " + odd);