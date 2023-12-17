let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-contain");
let msg = document.querySelector("#msg");

// To track turn of playerX or playerY
let turnO = true;

// Now Store all winning patterns - Use 2D Array
// winning Patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO)
        {
            //PlayerO
            box.innerText = "O";
            turnO = false;
        }
        else{
            //PlayerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
    box.disabled = false;
    box.innerText = ""; 
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetBtn.innerText = "Reset Game";
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.innerText = "New Game";
};

const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);