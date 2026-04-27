//EXAMPLE-1
function dashboard(){
    console.log("Dashboard : ");
    function videos(){
        console.log("Videos Function");
    }
    videos();

    function notifications(){
        console.log("Notification function");
    }
    notifications();
}

dashboard();

//EXAMPLE-2
function function1(val1){
    function function2(val2){
        return val1+val2;
    }
    return function2;
}

function myFunction(){
    console.log(function1(10)(20));
}

myFunction();