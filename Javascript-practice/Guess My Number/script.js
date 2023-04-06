'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

let secretNumber = Math.trunc(Math.random() * 20) + 1; // it will give random numbers till 19 that is why adding 1 to it.
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', () => {
   const guess = Number(document.querySelector('.guess').value); // this value generated is string so we need to convert it into number.
   console.log(guess); 

   // if user has not guessed any number
   if (!guess) {
    // document.querySelector('.message').textContent = "⛔️ No number!";
    displayMessage("⛔️ No number!");
   } 
   // When player wins
   else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
   }
   // Combined both conditions.
   else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
   }
   
// When guess is too high
//    else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = '📈 Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '💥 You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
        
//    }
//    // When guess is too low
//    else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = '📉 Too low!'
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '💥 You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
})

document.querySelector('.again').addEventListener
('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})