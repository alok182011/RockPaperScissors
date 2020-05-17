let userChosen;
let computerChosen;
var result = results();
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
let randomNumber;
const possibleChoices = document.querySelectorAll('.choices');

//get userChosen

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChosen = e.target.id;
    randomNumber = Math.floor(Math.random()*(4));
    generatedComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    
    if(result ==='you lost'){
        document.getElementById('lose').style.display="inline-flex";
        document.getElementById('tied').style.display="none";
        document.getElementById('win').style.display='none';
    }
    else if(result === 'There was a tie'){
        document.getElementById('tied').style.display="inline-flex";
        document.getElementById('win').style.display='none';
        document.getElementById('lose').style.display="none";
    }
    else if(result === 'you win!'){
        document.getElementById('win').style.display='inline-flex';
        document.getElementById('lose').style.display="none";
        document.getElementById('tied').style.display="none";
    }
}));

//get a random computer choice
function generatedComputerChoice(){
    if(randomNumber === 1){
        return computerChosen = "rock";
    }
    else if(randomNumber === 2){
        return computerChosen = "paper";
    }
    else if(randomNumber === 3){
        return computerChosen = "scissors";
    }
}

//get Results

function results() {
    if(computerChosen === userChosen){
        return result = "There was a tie";
    }
    else if(computerChosen === 'rock' && userChosen === 'paper'){
        return result = 'you win!';
    }
    else if(computerChosen === 'rock' && userChosen === 'scissors'){
        return result='you lost';
    }
    else if(computerChosen === 'paper' && userChosen === 'rock'){
        return result = 'you lost';
    }
    else if(computerChosen === 'paper' && userChosen === 'scissors'){
        return result = 'you win!';
    }
    else if(computerChosen === 'scissors' && userChosen === 'paper'){
        return result = 'you lost';
    }
    else if(computerChosen === 'scissors' && userChosen === 'rock'){
        return result = 'you win!';
    }
}

