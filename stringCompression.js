let str = "aaabbccc";
let count = 1;
let compressed = "";

for(let i = 1;i<=str.length;i++){
    if(str.charAt(i) === str.charAt(i-1)){
        count++;
    }else{
        compressed += str.charAt(i-1)+count;
        count = 1;
    }
}

console.log(compressed);