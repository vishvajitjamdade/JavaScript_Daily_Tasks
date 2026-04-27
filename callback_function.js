//EXAMPLE-1
function myfunction(name,callback){
    console.log("This is myfunction");
    callback();
}

function end(){
    console.log("This is the end");
}

myfunction("Abcd",end);

//EXAMPLE-2
let num_array = [1,2,3,4,5];

function mainFunction(callback){
    console.log("Output : ");
    num_array.forEach(callback);
}

function printResult(num){
        console.log("Result : " + num);
}

mainFunction(printResult);
