console.log(undefined-null);
console.log(true-false);
console.log(-true);
console.log(true+false);
console.log(-false);
console.log(typeof undefined);
console.log(typeof null);

//Q.1 difference between var and let
console.log("difference between var and let keyword output is : ");
for (var i = 0; i < 3; i++) {   //output : 3 3 3
    setTimeout(() => {
        console.log(i);
    }, 100);
}

for (let i = 0; i < 3; i++) {  // output : 0 1 2
    setTimeout(() => {
        console.log(i);
    }, 100);
}

//Q.3
console.log([] == false);
console.log([] == ![]);
console.log(null == undefined);
console.log(null === undefined);

//Q.3
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");