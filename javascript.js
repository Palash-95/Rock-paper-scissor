// write a function to get computer choice
function getComputerChoice(){
    let random = Math.floor(Math.random()*3)+1;
    switch (random){
        case 1 : return "Rock";
        case 2 : return "Paper";
        case 3 : return "Scissor"
    }
}
console.log(getComputerChoice())
//write a function called playRound with two parameters computerSelection and userSelection to play the game 
//write a function called game() to play the game 5 times
//call getComputerChoice function and store the returned value in a variable
let computerSelection = getComputerChoice();
console.log(computerSelection)
//prompt the user for a input and store it in a variable ,make it case insensitive
let userSelection = prompt("Enter your choice :","").toLowerCase();
console.log(userSelection)
//call the game() function