// write a function to get computer choice
function getComputerChoice(){
    let random = Math.floor(Math.random()*3)+1;
    switch (random){
        case 1 : return "rock";
        case 2 : return "paper";
        case 3 : return "scissor"
    }
}
console.log(getComputerChoice())
//write a function called playRound with two parameters computerSelection and userSelection to play the game 
function playRound(c,u){
    if (c === u){return "Its a tie!"}

    else if (u === "rock"){
        switch (c) {
            case "paper": return "You lose! paper beats rock";
            break;
            case "scissor": return "You win! rock beats scissor";
            break;
        }
    }

    else if (u === "paper")   {
        switch (c) {
            case "scissor": return "You lose! scissor beats paper";
            break;
            case "rock": return "You win! paper beats rock";
            break;
        }
    }  
    
    else if (u === "scissor") {
        switch (c) {
            case "rock": return "You lose! rock beats scissor";
            break;
            case "paper": return "You win! scissor beats paper";
            break;
        }
    }
    else {
        return "Please enter rock, paper or scissor"
    }
}

//write a function called game() to play the game 5 times
//call getComputerChoice function and store the returned value in a variable
let computerSelection = getComputerChoice();
console.log(computerSelection);

//prompt the user for a input and store it in a variable ,make it case insensitive
let userSelection = prompt("Enter your choice :","").toLowerCase();
console.log(userSelection)
console.log(playRound(computerSelection,userSelection))
//call the game() function