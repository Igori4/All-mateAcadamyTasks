'use strict'
let container = document.querySelector('.container');
let ourCarouselElement = document.querySelector('ul');
let arrowPrew = container.children[0];
let arrowNext = container.children[1];
arrowPrew.style.cssText = ' position: absolute; \
  left : 0 ';
arrowNext.style.cssText = ' position: absolute; \
  right : 0 ';

let ulStyles = getComputedStyle(ourCarouselElement);
let position = parseInt(ulStyles.marginLeft, 10);

arrowNext.addEventListener('click', function() {
  if (position > -910) {
      position += -130;

  if (position <= 0) {
     ourCarouselElement.style.marginLeft  = position + 'px';
 }
}
})

arrowPrew.addEventListener('click', function() {
  if(position >= 0){
    return;
  }
  position += 130;
    ourCarouselElement.style.marginLeft  = position + 'px';
})