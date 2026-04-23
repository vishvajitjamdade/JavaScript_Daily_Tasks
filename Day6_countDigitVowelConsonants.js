//Count digits, vowels, and consonants in a string using a loop.
let countDigits = 0;
let countVowels = 0;
let countConsonants = 0;

let str = "one2ka4";

for(let ch of str){
    if(ch >= '0' && ch <= '9'){
        countDigits++;
    }
    else if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        countVowels++;
    }
    else{
        countConsonants++;
    }
}

console.log("Number of digits in string is : " + countDigits);
console.log("Number of vowels in string is : " + countVowels);
console.log("Number of consonants in string is : " + countConsonants);