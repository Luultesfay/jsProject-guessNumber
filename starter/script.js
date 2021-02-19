'use strict';

//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'correct number';

//console.log(document.querySelector('.message').textContent);
//document.querySelector('.number').textContent = '15';
//document.querySelector('.score').textContent = '19';

//document.querySelector('.guess').value = '14';
//console.log(document.querySelector('.guess').value);
/*
let unknownNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = unknownNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);//Number here cast the string type to numbers type becouse always when we input in to  input field the entered data is string
  console.log(guess, typeof guess);//type of guess is tell us the type

  if (!guess) {//if there is no guess then the below message  is desplayed in the page
    document.querySelector('.message').textContent = 'no number is found';
  } else if (guess === unknownNumber) {
    document.querySelector('.message').textContent =
      '🏆you Got it ..correct number🏆';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > unknownNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number is high';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < unknownNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number is Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
/*
let unknownNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = unknownNumber;//the ? if we want it to be visible
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); //this print the value to the console

  //when there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ no number';
    // when the guess is correct
  } else if (guess === unknownNumber) {
    document.querySelector('.message').textContent =
      '🏆 wow you got the correct number';
    document.querySelector('.number').textContent = unknownNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; // we are manpulating style using DOM here ..we change the color
    document.querySelector('.number').style.width = '30rem'; //we change the width of the numbner
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when the guess is high
  } else if (guess > unknownNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '💥 number is high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 you failed';
      document.querySelector('.score').textContent = 0;
    }
    //when the the guess is low
  } else if (guess < unknownNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '💥 number is low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 you failed';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// when we reset and start the game from the begninng
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  unknownNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = '...start guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

//refactoring this code  and make it less complicated and presize

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let unknownNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = unknownNumber;//the ? if we want it to be visible
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); //this print the value to the console

  //when there is no guess
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ no number';
    displayMessage('⛔️ no number');
    // when the guess is correct
  } else if (guess === unknownNumber) {
    //document.querySelector('.message').textContent ='🏆 wow you got the correct number'
    displayMessage('🏆 wow you got the correct number');

    document.querySelector('.number').textContent = unknownNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // we are manpulating style using DOM here ..we change the color

    document.querySelector('.number').style.width = '30rem'; //we change the width of the numbner

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when the guess is high
  } else if (guess !== unknownNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =guess > unknownNumber ? '💥 number is high' : '💥 number is low';
      displayMessage(
        guess > unknownNumber ? '💥 number is high' : '💥 number is low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '👎 you failed';
      displayMessage('👎 you failed');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// when we reset and start the game from the begninng
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  unknownNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  //document.querySelector('.message').textContent = '...start guessing';
  displayMessage('...start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
