// define function calculateWeightedAverage here to calcuate weighted average
function assignmentPercentScore(assignmentWeight , assignmentScore){
    return (assignmentWeight/100) * assignmentScore;
}
function projecttPercentScore(assignmentWeight , assignmentScore){
    return (assignmentWeight/100) * assignmentScore;
}
function quizesPercentScore(assignmentWeight , assignmentScore){
    return (assignmentWeight/100) * assignmentScore;
}
function midTermPercentScore(assignmentWeight , assignmentScore){
    return (assignmentWeight/100) * assignmentScore;
}
function finalExamPercentScore(assignmentWeight , assignmentScore){
    return (assignmentWeight/100) * assignmentScore;
}
let assignment = assignmentPercentScore(10,97);
let projects = projecttPercentScore(35,82);
let quizes = quizesPercentScore(10,60);
let mid = midTermPercentScore(15,75);
let finalExm = finalExamPercentScore(30,80);
console.log("Weights"+"      "+"% Value of SCore")
console.log("Assignments    "+assignment);
console.log("Projects    "+projects);
console.log("Quizes    "+quizes);
console.log("Midterm    "+mid);
console.log("Final    "+finalExm);
console.log("\n");
console.log("\n");
let overAllPercentage = assignment + projects + quizes + mid + finalExm;
console.log("OverAll Percentage "+ overAllPercentage);
function calculateWeightedAverage(num1,num2,num3,num4,num5){
    return (num1+num2+num3+num4+num5)/5;
}

//calling functions
console.log(`The weighted average score is : ${calculateWeightedAverage(97, 82, 60, 75, 80)}`);