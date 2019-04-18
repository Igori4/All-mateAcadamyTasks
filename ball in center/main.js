let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

ball.style.top = (field.clientHeight / 2 - ball.clientHeight / 2) + 'px';
ball.style.left = (field.clientWidth / 2 - ball.clientWidth / 2) + 'px';