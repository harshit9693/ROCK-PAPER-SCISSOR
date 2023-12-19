//to access all the variable
let userScore = 0;
let compScore = 0;
let countGame = 0;

//access all the choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let restartBtn = document.querySelector("#restart-btn");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const countGameTotal = document.querySelector("#game-count");

const genComputerChoice = ()=>{
    //rock paper scisoor me se koi bhi random select krna hai\
    const options = ["rock", "paper","scissors"];
    //Math.random(); //it will generate a number from 0 to 1

    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

}

const drawGame = ()=>{
    //console.log("Game Was Draw");
    msg.innerText = "Game Draw , Play Again";
    msg.style.backgroundColor = "black";
    countGame++;
    countGameTotal.innerText = countGame;
}

const showWinner = (UserWin , userChoice,compChoice)=>{
    if(UserWin){
        // console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        //console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
    countGame++;
    countGameTotal.innerText = countGame;
}

const playGame = (userChoice) => {
    //console.log("user choice is ", userChoice);

    //generate the computer choice -> modular
    const compChoice = genComputerChoice();
    //console.log("Comp choice is ", compChoice);

    if(userChoice === compChoice){
        //Draw Game 
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor or paper
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            //scissor or rock
            if(compChoice === "rock"){
                userWin = true;
            }
            else{
                userWin = false;
            }
        }
        else{
            //rock or paper
            if(compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

//implement an event listener
choices.forEach((choice) => {   //we are extracting all the div from the choices div
    //console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const restartGame = ()=>{
    userScore = 0;
    userScorePara.innerText = 0;
    compScore = 0;
    compScorePara.innerText = 0;
    countGame = 0;
    countGameTotal.innerText = 0;
}

restartBtn.addEventListener("click",restartGame);