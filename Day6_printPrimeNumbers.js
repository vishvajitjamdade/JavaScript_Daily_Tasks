//Print all prime numbers between 1 to 100 using a for loop.
for(let i = 2;i<100;i++){
    if(isPrime(i)){
        console.log(i + " ");
    }
}

function  isPrime(num){
    for(let i = 2;i<=Math.sqrt(num);i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}