/* game variable that has rock as 0, Paper as 1, and Scissors as 2 */
const game = ["rock", "scissors", "paper"];

/* computer function that allows them to randomly choose a game variable */
function computerPlay() {
    return game[Math.floor(Math.random()*game.length)];
}

/* user prompt function that allows them to choose a variable */
function userPlay() {
    return window.prompt("Rock, Paper, Scissors?").toLowerCase();
}

/* variables to store the above functions for the function below */
const userSelection = userPlay();
const computerSelection = computerPlay();

/* single round function that compares the two inputs and gives a statement according to the conditions */
function singleRound() {
    userBalance = 0;
    computerBalance = 0;
    if (userSelection == "paper" && computerSelection == "rock") {
        userBalance += 1;
        return (`You beat the computer! Paper beats rock. Player: ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "scissors" && computerSelection == "paper") {
        userBalance += 1;
        return (`You beat the computer! Scissors beats paper. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "rock" && computerSelection == "scissors") {
        userBalance += 1;
        return (`You beat the computer! Rock beats scissors. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "rock"&& computerSelection == "paper") {
        computerBalance += 1;
        return (`You lost, paper beats rock. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "paper" && computerSelection == "scissors") {
        computerBalance += 1;
        return (`You lost, scissors beats paper. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection == "scissors" && computerSelection == "rock") {
        computerBalance += 1;
        return (`You lost, rock beats scissors. ${userBalance} Computer: ${computerBalance}`);
    }   else if (userSelection === computerSelection) {
        return ("It's a tie. Please try again. ${userBalance} Computer: ${computerBalance}");
    }
}

/* automatically runs the functions when you load the page */

/* function that plays the game 5 times and keeps a counter. When the counter reaches 5 you win or lose */

function bestRound() {
    userBalance = 0;
    computerBalance = 0;
    singleRound();
        if (userBalance == 5) {
            return ("Congratulations, you won!");
        } else if (computerBalance == 5) {
            return ("You lost. reload and play again.")
        }

}

console.log(bestRound());