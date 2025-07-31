//functions
//write a basic function to calculate percentage

// function calcPercentage(){

// }

// write a statement to do the grading

// function gradeScore(score){
//     switch(score){
//         case (score>=80): return "grade A";
//         case(score>=70 && score<80): return "grade B";
//         case(score>=60 && score<70): return "grade C";
//         case(score>=50 && score<60): return "grade D";
//         case(score>=40 && score<50): return "grade E";
//         default: "grade F";
//     }
// }



// const percentage = (score, totalScore) => {
//     let totalPercentage = (score, totalScore) * 100;

//     if (totalPercentage >= 80) {
//         return "A";

//     }
// }



// console.log(gradeScore());

//write a function that determines if a number is even or odd and a multiple of 5

function isEvenOrOdd(number){
if(number%2===0){
    return "is Even"
}else if(number%2===1 && number%5===0){
    return "is Odd and a multiple of 5"
}else if(number%2===1 ){
    return "is Odd"

}}

console.log(isEvenOrOdd(15));

