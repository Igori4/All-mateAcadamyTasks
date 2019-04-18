'use strict'
let counter = 0
let links = [...document.querySelectorAll('li a')].map( el => {
    let findWords = el.textContent.split(':');
    if(findWords[0] === 'http' || findWords[0] === 'ftp') {
        counter++;
        el.classList.add('external');
    }    
});

let lastLink = [...document.querySelectorAll('.external')];
lastLink[ [counter - 1] ].classList.remove('external')




