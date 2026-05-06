const arr = [-1,4,-6,2];

//METHOD-1
let min = Infinity;
for(let num of arr){
    if(num < min){
        min = num;
    }
}
console.log("smallest Number is : " + min);

//METHOD-2
arr.sort((a,b) => a-b);
console.log("Smallest Number is : "+arr[0]);