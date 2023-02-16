const playUrl = 'https://miniprojekt-1---js2-default-rtdb.europe-west1.firebasedatabase.app/'

async function getAll(){
    const url = "https://miniprojekt-1---js2-default-rtdb.europe-west1.firebasedatabase.app/.json";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

}
getAll();
 

const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
const score = document.getElementById('score');
let userScore = 0;
let computerScore = 0;

function showGame() {
    startBtn.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

function getComputerChoice() {
    const choices = ['sten', 'påse', 'sax'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userChoice.classList.add('green-glow');
    result.innerHTML = 'Du vann!';
    updateScore();
    setTimeout(() => userChoice.classList.remove('green-glow'), 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userChoice.classList.add('red-glow');
    result.innerHTML = 'Du förlorade!';
    updateScore();
    setTimeout(() => userChoice.classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice) {
    result.innerHTML = 'Det blev oavgjort!';
    setTimeout(() => userChoice.classList.remove('gray-glow'), 1000);
}

function updateScore() {
    score.innerHTML = userScore + ' - ' + computerScore;
}

function game(userChoice) {
    const computer = getComputerChoice();
    computerChoice.innerHTML = computer;
    userChoice.innerHTML = userChoice.id;
    switch (userChoice.id + '-' + computer) {
        case 'rock-sax':
        case 'paper-rock':
        case 'scissors-paper':
            win(userChoice, computerChoice);
            break;
        case 'rock-paper':
    }
}
