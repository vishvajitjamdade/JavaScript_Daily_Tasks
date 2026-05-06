const arr = [2,5,1,9,3,];

let firstMax = -Infinity;
let secondMax = -Infinity;;

for(let num of arr){
    if(num > firstMax){
        secondMax = firstMax;
        firstMax = num;
    }
    else if(secondMax != num && num > secondMax){
        secondMax = num;
    }
}

console.log("First Max Number : " + firstMax);
console.log("Second Max Number : " + secondMax);