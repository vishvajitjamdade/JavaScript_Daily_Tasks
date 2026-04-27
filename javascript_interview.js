//What Happens When You Try to Do Calculations with Numbers and Strings?

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string

const result4 = null + 5;
console.log(result4); // 5
console.log(typeof result4); // number

const result5 = undefined + 5;
console.log(result5); // NaN
console.log(typeof result5); // number