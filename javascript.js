// write a function to get computer choice
function getComputerChoice(){
    let random = Math.floor(Math.random()*3)+1;
    switch (random){
        case 1 : return "rock";
        case 2 : return "paper";
        case 3 : return "scissor"
    }
}
//write a function called playRound with two parameters computerSelection and userSelection to play the game 
function playRound(c,u){
    if (c === u){return "Its a tie!"}

    else if (u === "rock"){
        switch (c) {
            case "paper": 
            computerScore++;
            return "You lose! paper beats rock";
            break;
            case "scissor": 
            userScore++;
            return "You win! rock beats scissor";
            break;
        }
    }

    else if (u === "paper")   {
        switch (c) {
            case "scissor": 
            computerScore++;
            return "You lose! scissor beats paper";
            break;
            case "rock": 
            userScore++;
            return "You win! paper beats rock";
            break;
        }
    }  
    
    else if (u === "scissor") {
        switch (c) {
            case "rock": 
            computerScore++;
            return "You lose! rock beats scissor";
            break;
            case "paper": 
            userScore++;
            return "You win! scissor beats paper";
            break;
        }
    }
    else {
        return "Please enter rock, paper or scissor"
    }
}

//write a function called game() to play the game 5 times
let computerScore = 0;
let userScore = 0;
function game(){
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let userSelection = prompt("Enter your choice :","").toLowerCase();
        console.log(playRound(computerSelection,userSelection));
        console.log(`Computer Score: ${computerScore}, User Score: ${userScore}`);
    }
    if (computerScore > userScore){
      return " YOU LOSE !!! wanna play again?"
    }
    else if (computerScore < userScore){
        return "CONGRATULATIONS!!! You won"
    }
    else {
        return "Its a tie!!!"
    }
}

//call getComputerChoice function and store the returned value in a variable



//prompt the user for a input and store it in a variable ,make it case insensitive


//console.log(playRound(computerSelection,userSelection))
//call the game() function
console.log(game())