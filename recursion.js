function table(num,tableNum){
    if(num === 10){
        console.log(num*tableNum);
        return;
    }

    console.log(num*tableNum);
    table(num+1,tableNum);
}

table(1,5);


