// write a function to get computer choice
function getComputerChoice(){
    let random = Math.floor(Math.random()*3)+1;
    switch (random){
        case 1 : return "rock";
        case 2 : return "paper";
        case 3 : return "scissor"
    }
}

function playRound(e){
    let computerChoice = getComputerChoice();
    let userSelection = e.target.id;

    if (computerChoice === userSelection){result.textContent = "Its a tie!"}

    else if (userSelection === "rock"){
        switch (computerChoice) {
            case "paper": 
            computerScore++;
            result.textContent = "You lose! paper beats rock";
            break;
            case "scissor": 
            userScore++;
            result.textContent = "You win! rock beats scissor";
            break;
        }
    }

    else if (userSelection === "paper")   {
        switch (computerChoice) {
            case "scissor": 
            computerScore++;
            result.textContent = "You lose! scissor beats paper";
            break;
            case "rock": 
            userScore++;
            result.textContent = "You win! paper beats rock";
            break;
        }
    }  
    
    else if (userSelection === "scissor") {
        switch (computerChoice) {
            case "rock": 
            computerScore++;
            result.textContent = "You lose! rock beats scissor";
            break;
            case "paper": 
            userScore++;
            result.textContent = "You win! scissor beats paper";
            break;
        }
    }
    score.textContent = `Computer Score: ${computerScore}, User Score: ${userScore}`;
    result.appendChild(score);
    if (computerScore === 5){
        winner.textContent = " YOU LOSE !!! wanna play again?";
        winner.style.color = "red";
        result.appendChild(winner);
        resetGame();
    }
    else if (userScore === 5) {
        winner.textContent = "CONGRATULATIONS!!! You won";
        winner.style.color = "green";
        result.appendChild(winner);
        resetGame();
    }
}


let computerScore = 0;
let userScore = 0;
function resetGame(){
    computerScore = 0;
    userScore = 0;
}
 
const result = document.querySelector("div");
const score = document.createElement("p");
const winner = document.createElement("h1");

const rock = document.querySelector("#rock");
rock.addEventListener('click', playRound)

const paper = document.querySelector("#paper");
paper.addEventListener('click', playRound)

const scissor = document.querySelector("#scissor");
scissor.addEventListener('click', playRound)