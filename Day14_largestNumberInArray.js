const arr = [1,4,6,2];

//METHOD-1
let max = 0;
for(let num of arr){
    if(num > max){
        max = num;
    }
}
console.log("Largest Number is : " + max);

//METHOD-2
arr.sort((a,b) => b-a);
console.log("Largest Number is : "+arr[0]);