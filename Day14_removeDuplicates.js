const num = [1,2,4,1,5,4];
const arr = [];

//METHOD-1
for(let i = 0;i<num.length;i++){
    if(!arr.includes(num[i])){
        arr.push(num[i]);
    }
}
console.log(arr);

//METHOD-2
const updatedArr = [...new Set(num)];
console.log(updatedArr);