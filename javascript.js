const game = ["rock", "scissors", "paper"];
let userBalance = 0;
let computerBalance = 0;

function singleRound() {
    const userSelection = userPlay();
    const computerSelection = computerPlay();
    
    function userPlay() {
        return prompt("Rock, Paper, Scissors?").toLowerCase();
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

function multipleRound() {
    for (rounds = 0; rounds < 5; rounds++) {
        console.log(singleRound());
    }
}

console.log(multipleRound());

