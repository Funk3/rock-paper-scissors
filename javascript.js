const game = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.querySelector('#results');
const win = document.createElement('div');

const playerCounter = document.querySelector('.playercounter');
const computerCounter = document.querySelector('.computercounter');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

let userBalance = 0;
let computerBalance = 0;

function playRound(e) {

    const userSelection = userPlay();
    const computerSelection = computerPlay();

    //when clicking on a button, it returns the value to be used in the variable userSelection
    function userPlay() {
        if (e.target.id == "rock"){
            return(game[0]);
        } else if (e.target.id== 'paper') {
            return game[1];
        } else if (e.target.id == 'scissors') {
            return game [2];
        }
    };

    function computerPlay() {
    return game[Math.floor(Math.random()*game.length)];
    };

    win.classList.add('win');
    results.appendChild(win);
    
    if (userSelection == game[1] && computerSelection == game[0]) {
            userBalance++;
            playerCounter.textContent= `${userBalance}`;
            win.textContent= `You win! Paper beats rock.`;
    }   else if (userSelection == game[2] && computerSelection == game[1]) {
            userBalance++;
            playerCounter.textContent = `${userBalance}`;
            win.textContent= `You win! Scissors beats paper.`;
    }   else if (userSelection == game[0] && computerSelection == game[2]) {
            userBalance++;
            playerCounter.textContent= `${userBalance}`;
            win.textContent= `You win! Rock beats scissors.`;
    }   else if (userSelection == game [0] && computerSelection == game[1]) {
            computerBalance++;
            computerCounter.textContent= `${computerBalance}`;
            win.textContent= `You lost, paper beats rock.`;
    }   else if (userSelection == game [1] && computerSelection == game[2]) {
            computerBalance++;
            computerCounter.textContent= `${computerBalance}`;
            win.textContent= `You lost, scissors beats paper.`;
    }   else if (userSelection == game[2] && computerSelection == game[0]) {
            computerBalance++;
            computerCounter.textContent= `${computerBalance}`;
            win.textContent= `You lost, rock beats scissors.`;
    }   else if (userSelection == computerSelection) {
            win.textContent= `It's a tie. Please try again.`;
        } 
        
        if ((userBalance == 5) == true){
            win.textContent = `Congrats! You have beat the computer!`;
            userBalance = 0;
            computerBalance = 0;
            playerCounter.textContent= `${userBalance}`;
            computerCounter.textContent= `${computerBalance}`;
        } else if ((computerBalance == 5) == true){
            win.textContent = `Sorry, SKYNET took over. Try again in... a different life?`;
            userBalance = 0;
            computerBalance = 0;
            playerCounter.textContent= `${userBalance}`;
            computerCounter.textContent= `${computerBalance}`;
        }
}


