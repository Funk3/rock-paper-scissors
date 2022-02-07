const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const game = ["rock", "scissors", "paper"];
let userBalance = 0;
let computerBalance = 0;

function singleRound() {
    const userSelection = userPlay();
    const computerSelection = computerPlay();
    
    function userPlay() {
        rock.addEventListener("click", console.log("rock"));
        paper.addEventListener("click", console.log('paper'));
        scissors.addEventListener("click", console.log('scissors'));
    }
    
    function computerPlay() {
        return game[Math.floor(Math.random()*game.length)];
    }

    if (userSelection == "paper" && computerSelection == "rock") {
        userBalance++;
        return (`You beat the computer! Paper beats rock. Player: ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "scissors" && computerSelection == "paper") {
        userBalance++;
        return (`You beat the computer! Scissors beats paper. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "rock" && computerSelection == "scissors") {
        userBalance++;
        return (`You beat the computer! Rock beats scissors. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "rock"&& computerSelection == "paper") {
        computerBalance++;
        return (`You lost, paper beats rock. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "paper" && computerSelection == "scissors") {
        computerBalance++;
        return (`You lost, scissors beats paper. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "scissors" && computerSelection == "rock") {
        computerBalance++;
        return (`You lost, rock beats scissors. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == computerSelection) {
        return (`It's a tie. Please try again. ${userBalance} Computer: ${computerBalance}`);
    }
}

    


