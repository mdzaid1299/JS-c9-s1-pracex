// Write your fibonacci series solution code here
let number = 10, firstnum = 0, seondNum = 1,nextTerm; 


console.log("Fibonacci series of 1st 10 numbers");
console.log(firstnum);
console.log(seondNum);
for(let i = 2; i< number;i++){
    nextTerm = firstnum + seondNum;
    console.log(nextTerm);
    firstnum = seondNum;
    seondNum = nextTerm;
    
}