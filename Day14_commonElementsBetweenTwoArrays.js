const arr1 = [1,5,3,1,2];
const arr2 = [43,5,2,1,5];

const common = [];

arr1.forEach((num) => {
    if(arr2.includes(num) && !common.includes(num)){
        common.push(num);
    }
});

console.log("common numbers : "+common);
