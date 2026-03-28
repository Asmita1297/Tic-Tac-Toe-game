// let marks = [25, 30, 50, 33];
// console.log(marks);
// console.log(marks.length);
// let names = ["Anup", "Asmita", "Suchita", "Abishek"];
// console.log (names);
// let names = ["Anup", "Asmita", "Suchita", "Abishek"];
// for(idx = 0; idx < names.length; idx++){
//     console.log(names[idx]);
// }

// let names = ["asbhi", "anu", "Anushka", "Suchita", "Mina"];
// for (let name of names) {
//     console.log(name.toUpperCase());
// }

// let marks = [85, 97, 44, 37, 76,60]
// let sum = 0
// for(let val of marks) {
//     sum = sum + val;
   
// }
// console.log(sum);
// let avg = sum/marks.length;
// console.log(`The avg marks of the class is ${avg}`);

// let prices = [250, 645, 300, 900, 50];
// for(let i = 0; i<prices.length; i++) {
//     let offer = prices[i] / 10;
//     prices[i] -= offer;
// }
// console.log(prices);

//Array methods
// let name = ["Asmita", "Anup", "Suchita", "Mina", "Prem", "Abishek"];
// let names2 = ["Priyanka"," Anushka"];
// let name3 = name.concat(names2);
// console.log(name3);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google","IBM","Netlfix"];
companies.splice(2, 1, "ola");
companies.push("Amazon");
console.log(companies);