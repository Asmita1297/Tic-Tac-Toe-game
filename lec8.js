// let btn1 = document.querySelector("#btn1");
// console.log(btn1);
// btn1.onclick=() => {
//     console.log("button was clicked");
//     let a = 25
//     ++a;
//     console.l og(a);
// }

// let second = document.querySelector("#second");
// second.onmouseover = () => {
//     console.log("You are inside div");
// }

// let btn1 = document.querySelector("#btn1");
// btn1.onclick= (e) => {
//     console.log(e);
//     console.log(e.type);

// }
// let second = document.querySelector("#second");
// second.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }

// let btn1 = document.querySelector("#btn1");
// btn1 = addEventListener("click",( ) => {
//     console.log("The button 1 was clicked");
// })

// btn1 = addEventListener("click",( ) => {
//     console.log("The button 1 was clicked - handler 2");
// })

// const handler3 = () => {
//     console.log ("The button 1 was clicked handler-3");
// };
// btn1 = addEventListener("click",handler3 );

// btn1 = addEventListener("click",( ) => {
//     console.log("The button 1 was clicked- handler 4");
// })

// btn1 = removeEventListener("click", handler3);

let tooglebtn = document.querySelector("#button");

let currmode = "light"; //dark
tooglebtn.addEventListener("click", () => {
    if (currmode === "light") {
    currmode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    } else {
    currmode = "light";
    document.querySelector("body").style.backgroundColor = "pink";
    }
    console.log(currmode);
});
// tooglebtn.onclick = () => {
//     tooglebtn.style.color = "black";
// }

// tooglebtn.ondblclick =() =>
// {
//     tooglebtn.style.color= "white";
// }