//self-invoked function

(function(){
    console.log("Immediate Invoked Function Expression");
})();

(() => {
    console.log("This is default arrow immediate function expression");
})();

((name) => {
    console.log("This is parameterized arrow : " + name);
})("IIFE");