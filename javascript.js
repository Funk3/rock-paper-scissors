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
    if (userSelection == "paper" && computerSelection == "rock") {
        return ("You beat the computer!");
    }   else if (userSelection == "scissors" && computerSelection == "paper") {
        return ("You beat the computer!");
    }   else if (userSelection == "rock" && computerSelection == "scissors") {
        return ("You beat the computer!");
    }   else if (userSelection == "rock"&& computerSelection == "paper") {
        return ("You lost, please try again");
    }   else if (userSelection == "paper" && computerSelection == "scissors") {
        return ("You lost, please try again");
    }   else if (userSelection == "scissors" && computerSelection == "rock") {
        return ("You lost, please try again");
    }   else if (userSelection === computerSelection) {
        return ("It's a tie. Please try again");
    }
}

/* automatically runs the functions when you load the page */
console.log(singleRound());


