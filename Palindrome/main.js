"use strict";
let isPalindrome = (s) => {
    let result = false;

    if(s === '') {
        result = true;
    }

    let str = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let reverseString = str.split('').reverse().join('');

   if(str === reverseString) {
       result = true;
   }
    return result;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));