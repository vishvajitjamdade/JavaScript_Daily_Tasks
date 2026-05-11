const mypromise = new Promise((resolve,reject)=>{
    let mytask = true;

    if(mytask){
        console.log("Task Completed!");
    }
    else{
        console.log("Task Fail!");
    }
});

mypromise.then((result) => console.log(result))
         .catch((error) => console.error(error));