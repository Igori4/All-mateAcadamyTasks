'use strict'
const sortStringWords = function(str) {
      let arrWithWords = str !== '' ? str.split(' ') : alert('This is ampty string') ;
      let arrWithLittlLetter = [];
      let arrWithBigLetter = [];

      for (let i = 0 ; i < arrWithWords.length; i++) {
          let firstLetter = arrWithWords[i].charAt(0);
          if(isNaN(+firstLetter)) {
            if(firstLetter === firstLetter.toUpperCase()){
              arrWithBigLetter.push(arrWithWords[i]);
          } else {
            arrWithLittlLetter.push(arrWithWords[i]);
          }
      }
    }
    let result = arrWithBigLetter.concat(arrWithLittlLetter.join(' '));
    return result.join(' ');
  }
console.log(sortStringWords('hey You, Sort me Already!'));
