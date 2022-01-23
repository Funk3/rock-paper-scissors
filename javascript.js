const game = ["rock", "paper", "scissors"];

/* computerPlay function chooses # between 0-2. That # corresponds with rock, paper, scissors. Function outputs the # as the corresponding string */
function computerPlay() {
    return game[Math.floor(Math.random()* game.length)];
}

console.log(computerPlay(game));
/* userInput function prompts user for rock, paper scissors. That is stored into the user variable. */

function userPlay(game) {
    
}
/* Compare user input to computer input with if and else */

/* if user wins, output you win, else, you lose */



