'use strict'

function doubleTrouble(x, t){
    let tmpResult = [];
    let result = [];
    for( let i = 0; i < x.length; i++) {
      if(x[i] + x[i + 1] === t){
          delete x[i + 1];
          tmpResult.push(x[i]);
      } else {
        if(x[i] !== undefined){
          tmpResult.push(x[i]);
      }
    }
  } 
  let tempNum = 0;
  for(let i = 0; i < tmpResult.length; i++) {
    if (tempNum !== tmpResult[i]) {
      tempNum = tmpResult[i];
      result.push(tmpResult[i]);
    }
  }

  return result;
}
console.log(doubleTrouble([2, 2, 2, 2 ,2], 4)) //результат должен быть только одна двойка [2]
console.log(doubleTrouble([4, 1, 1 ,1, 4], 2)) // результат должен быть [4, 1, 4];