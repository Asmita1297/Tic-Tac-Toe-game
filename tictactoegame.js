let boxes = document.querySelectorAll(".box");
let resetBTn = document.querySelector("#reset-button");
let msgcont= document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turn0 = true ;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
 turn0 = true;
 enableBoxes();
 msgcont.classList.add("hide");

     
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0) {
            box.innerText = "O"
            turn0 = false;
        
    }   else {
        box.innerText = "X";
        turn0 =true;
    }
    box.disabled = true;

    checkWinner();
    }); 
});

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;  
    }
};


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;  
        box.innerText = "";
    }

};
const showWinner = (winner) => {
    msg.innerText = `congrats , Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disabledBoxes();
};



const checkWinner  =  () => {
    for(let pattern of winpatterns) {
        let ps1 =boxes[pattern[0]].innerText;
        let ps2 =boxes[pattern[1]].innerText;
        let ps3 = boxes[pattern[2]].innerText;      

        if(ps1 != "" && ps2 != "" && ps3 != "") {
            if(ps1 == ps2 && ps2 === ps3) {
                console.log("Winner", ps1);
                showWinner(ps1);
            }
        }
}
};

newbtn.addEventListener("click", resetGame);
resetBTn.addEventListener("click", resetGame);


