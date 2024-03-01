let allbtn = document.querySelectorAll(".btn1");
let resetbtn = document.querySelector(".reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".new-game");
let turnO = true;
let count = 0;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () =>{
    turnO = true;
    count = 0;
    enabledbox();
    msg.classList.add("hide");
}

allbtn.forEach((btn1) =>{
    btn1.addEventListener('click',() =>{
        if(turnO){
        btn1.innerText = "x";
    turnO = false;
        }else{
            btn1.innerText = "o";
            turnO = true;  
        }
        btn1.disabled = true;
        count++;
        let iswinner = checkwinner();
        if(count===9 && !iswinner){
            draw();
        }
    });
});



const enabledbox = () =>{
    for(let btn1 of allbtn){
        btn1.disabled = false;
        btn1.innerText = "";
       
    }
}
const disabledbox = () =>{
    for(let btn1 of allbtn){
        btn1.disabled = true;
    }
}

const showWinner = (winner) => {
msg.innerText = 'congratulation,the winner is '+(winner);
msg.classList.remove("hide");
disabledbox();
}

const draw = () => {
    msg.innerText = 'game was a Draw';
    msg.classList.remove("hide");
    disabledbox();
}
const checkwinner = () =>{
    for(let pattern of winpattern){
        let val1 = allbtn[pattern[0]].innerText;
        let val2 = allbtn[pattern[1]].innerText;
        let val3 = allbtn[pattern[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !=""){
            if(val1 === val2 && val2 === val3){
                showWinner(val1);
            }  
        }
    }
}

resetbtn.addEventListener('click',reset);
newgame.addEventListener("click",reset);