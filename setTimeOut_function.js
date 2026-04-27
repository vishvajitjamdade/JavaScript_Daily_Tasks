function downloadMovie(callback){
    console.log("Movie downloading...");
    setTimeout(() => {
        callback();
    },5000);
}

function end(){
    console.log("Movie downloaded successfully.");
}

downloadMovie(end);