// function myfunction() {
//     console.log("We are learning  abt functions in lec 5");
// }
// myfunction();

//arrow function
// const arrowsum = (a , b) => {
//     console.log(a*b);
// };

//
// function countVowel(str) {
//     let count = 0;
//    for (const char of str ) {
//     if (char == "a"|| 
//         char == "e" ||
//         char == "i" ||
//         char == "0" || 
//         char == "u"
//     ) {
//     count++;
//    }
//    }
// console.log(count);
// }
// const vowelarrow = (str) => {
//     let count = 0;
//    for (const char of str ) {
//     if (char == "a"|| 
//         char == "e"||
//         char == "i"||
//         char == "0"|| 
//         char == "u"
//     ) {
//     count++;
//    }
//    }
// return count++;
// };

// let array = ["Nepal", "India", "China"];

// array.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);

// });

// let arr = [2,3,4,6];
// arr.forEach((val) => {
//     console.log(val*val);
// });

// let asmi = ["khatri"];
// asmi.map ((val) => {
//     console.log(val.toUpperCase());

// });

// let nums = [1,2,3,4,5];
// let newarr = nums.map((val) =>{
//     return val*2;
// });
// console.log(newarr);

// let num = [1,2,3,4,5,6,7,8,9];

// let newarr = num.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(newarr);

//   let num = [1,2,3,4,5,6,7,8];

//   const output = num.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
//   });
//   console.log(output);

// let num = [22,33,98,56,78,99,100];
// const results = num.filter((val) => {
//     return val > 90;

// });
// console.log(results);

let n = prompt("Enter a number : ");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}
console.log(arr); 
let sum = arr.reduce((val, curr) =>{
    return val + curr;

});
console.log("sum = ", sum);

let factorial = arr.reduce((val, curr) =>{
    return val* curr;

});
console.log("factorial = " , factorial);
