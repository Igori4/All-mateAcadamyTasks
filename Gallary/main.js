'use strict'
let bigImg = document.querySelector('#largeImg');
let containerWithSmallImg = document.querySelector('#thumbs');

containerWithSmallImg.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName === 'IMG') {
        let srcCurrenrEll = target.parentNode.getAttribute('href');
        bigImg.removeAttribute("src");
        bigImg.setAttribute('src',srcCurrenrEll);
        event.preventDefault();
    }
})

