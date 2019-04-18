'use strict';

const realtimePositionElement = document.querySelector('#realtime');
const throttlePositionElement = document.querySelector('#throttle');

function onMoveRealtime(event) {
  realtimePositionElement.textContent = `x: ${ event.clientX }, y: ${ event.clientY }`
}

function onMove(event) {
  throttlePositionElement.textContent = `x: ${ event.clientX }, y: ${ event.clientY }`
}

function throttle(f, delay) {
  let isTrottle = false;
  let trottleThis;
  let trottleArgs; 

  return function wrap(...args) {

    if(isTrottle) {
      trottleThis = this;
      trottleArgs = args;
      return;
    }

    f.apply(this, args)

    isTrottle = true;

    setTimeout( function() {
      isTrottle = false;

     if (trottleArgs){
      wrap.apply(trottleThis, trottleArgs);
        trottleArgs = null;
        trottleThis = null;
      }

    },delay)
  }
}

let wrapper = throttle(onMove, 1000);

document.addEventListener('mousemove', wrapper);
document.addEventListener('mousemove', onMoveRealtime);

