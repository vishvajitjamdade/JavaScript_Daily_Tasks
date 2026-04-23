const attendance = [1,0,1,1,0,1];
let present = 0;
let absent = 0;

//Approach-1
for(let day of attendance){
    (day === 1)? present++ : absent++;
}

//Approach-2
// attendance.forEach((day) => {
//     if(day == 1){
//         present++;
//     }c
//     else{
//         absent++;
//     }
// });

console.log("You are present for " + present + " days and absent for " + absent + " days.");