const arr1 = [2,6,1,5,2,4];
const arr2 = [6,2,9,0,1,3];

//METHOD-1
const arr = [];
for(let num of arr1){
    arr.push(num);
}

for(let num of arr2){
    arr.push(num);
}

console.log("Merged Array : " + arr);

//METHOD-2
const merged = [...arr1,...arr2];
console.log("Merged Array : "  + merged);