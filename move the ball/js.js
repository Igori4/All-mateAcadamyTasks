'use strict'
let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

field.addEventListener('click', (event) => {
  let eventCoordinatX = (event.clientX - field.offsetLeft - field.clientLeft) + 'px';
  let eventCoordinatY = (event.clientY - field.offsetTop - field.clientTop) + 'px';

  let endOfTheRightSide = field.offsetLeft + field.offsetWidth - field.clientLeft - ball.offsetWidth + 20;
  let endOfTheLeftSide = field.offsetLeft + field.clientLeft + ball.offsetWidth - 20;
  let endOfTheTop =  field.offsetTop + field.clientTop + ball.offsetHeight - 20;
  let endOfTheBottom = field.offsetTop + field.offsetHeight - field.clientTop - ball.offsetHeight + 20;

 if( event.clientX < endOfTheLeftSide) {
    if(event.clientY < endOfTheTop) {
      ball.style.left = (field.clientLeft - field.clientLeft + ball.offsetWidth / 2)  + 'px';
      ball.style.top = ((field.offsetTop - field.clientTop / 2) - ball.offsetHeight /2) + 'px';

    } else if(event.clientY > endOfTheBottom) {
      ball.style.left = (field.clientLeft - field.clientLeft + ball.offsetWidth / 2)  + 'px';
      ball.style.top = field.offsetHeight - ball.offsetHeight  + 'px';   

    } else {
      ball.style.left = (field.clientLeft - field.clientLeft + ball.offsetWidth / 2)  + 'px';
      ball.style.top = eventCoordinatY;
    }

  } else if (event.clientY < endOfTheTop) {
      if(event.clientX > endOfTheRightSide) {
        ball.style.left =  field.offsetWidth - (field.clientLeft * 2) - ball.offsetWidth / 2  + 'px';
        ball.style.top = ((field.offsetTop - field.clientTop / 2) - ball.offsetHeight /2) + 'px';

      } else {
        ball.style.left = eventCoordinatX;
        ball.style.top = ((field.offsetTop - field.clientTop / 2) - ball.offsetHeight /2) + 'px';
      }

  } else if (event.clientX > endOfTheRightSide) {
      if(event.clientY > endOfTheBottom) {
        ball.style.left =  field.offsetWidth - (field.clientLeft * 2) - ball.offsetWidth / 2  + 'px';
        ball.style.top = field.offsetHeight - ball.offsetHeight  + 'px';
      } else {
        ball.style.left =  field.offsetWidth - (field.clientLeft * 2) - ball.offsetWidth / 2  + 'px';
        ball.style.top = eventCoordinatY;
      }

  } else if (event.clientY > endOfTheBottom) {
    ball.style.left = eventCoordinatX;
    ball.style.top = field.offsetHeight - ball.offsetHeight  + 'px';

  } else {
    ball.style.left = eventCoordinatX;
    ball.style.top = eventCoordinatY;
  }
})

