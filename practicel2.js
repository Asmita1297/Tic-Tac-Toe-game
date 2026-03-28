// let num = prompt("Enter a number");
// if(num % 5 ===0) {
//     console.log(num, "is multiple of 5");
// }else  {
//     console.log(num,"is not a multiplication of 5");
// }

// let score = prompt("Enter your scores");
// if(score >=90 && score <=100 ){
//     console.log("Grade A");
// }else if(score >=70 && score <=89) {
//     console.log("Grade B");
// } else if (score >= 60 && score <= 69) {
//     console.log("Grade C");
// } else if (score >= 50 && score <=59 ) {
//     console.log("Grade D")
// } else {
// console.log("Grade F");
// }

//Switch one
// const fruit = prompt("Enter what fruit you're lookinf for?");
// switch (fruit) {
//     case 'papayas':
//         console.log("The price for papayas is 5$");
//         break;
//     case 'oranges':
//     case 'mangoes':
//         console.log("The price for oranges and mangoes is $5");
//         break;
//     default:
//         console.log("Not available");
// }

let score = prompt("Enter you score");
let grade;
if (score >= 90 && score <=100){
    grade = "A";
}
else if (score >= 70 && score <= 89) {
    grade = "B";
}

else if (score >= 60 && score <= 69) {
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade = "D";
} else {
    grade = "F";
}

console.log( "Acc to your score your grade is", grade);