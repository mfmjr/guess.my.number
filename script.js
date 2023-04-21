'use strict';
const body = document.querySelector('body');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
const highScoreString = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('secretNumber: ', secretNumber);
number.textContent = '?';

const displayMessage = (msg) => {
    message.textContent = msg;
};

const displayBackground = (color) => {
    body.style.backgroundColor = color;
};

const displayScore = (score) => {
    document.querySelector('.score').textContent = score;
};

const displayNumberWidth = (width) => {
    number.style.width = width;
};

const displayNumber = (numberSecret) => {
    number.textContent = numberSecret;
};

const btnCheckClicked = () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('🛑 No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        displayNumber(secretNumber);
        displayBackground('#60b347');
        displayNumberWidth('30rem');

        if (score > highScore) {
            highScore = score;
            highScoreString.textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!'
            );
            score--;
            displayScore(score);
        } else {
            displayMessage('🛑 You lost the game!');
            displayBackground('#ff0000');
            displayScore(0);
            displayNumber(secretNumber);
            displayNumberWidth('30rem');
        }
    } else {
        displayMessage('🛑 Wrong Number!');
        score--;
        displayScore(0);
        displayBackground('#ff0000');
    }
};

const btnAgainClicked = () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('secretNumber: ', secretNumber);
    score = 20;

    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    displayBackground('#222');
    displayScore(score);
    displayNumberWidth('15rem');
    number.textContent = '?';
};

btnAgain.addEventListener('click', btnAgainClicked);
btnCheck.addEventListener('click', btnCheckClicked);
