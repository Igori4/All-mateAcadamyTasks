"use strict";
const randomNumber = () => {
    const max = 9999;
    const min = 1000;
    let result = true;
    let ourNum = (Math.floor(Math.random() * (max - min + 1)) + min).toString().split('');

    let count = 0;
    for(let i = 0; i < ourNum.length; i++) {
        let per = ourNum[i];
        for(let value of ourNum) {
            if(per === value) {
                count++;
            }
        }
    }
    if( count == 4 ) {
        return ourNum;
    } 
}

const correctNum = () => {
    let isCorrect = false;
    let result;
    do {
        let num = randomNumber();
        if (num !== undefined) {
            result = num;
            isCorrect = true
        }
    } while (!isCorrect);
    return result;
}

const bullsAndCows = () => {
    let computerNum = correctNum()
    let userCompleat = false;
    console.log(computerNum);

    do {
      let userNumber = (prompt('Write a number please number from 1000 to 9999)')).toString();
      let bulls = 0;
      let cows = 0;
        if(isFinite(userNumber) && userNumber !== '') {
            userNumber.split('');
            if( userNumber.length === 4) {
                for( let i = 0; i < computerNum.length; i++) {
                    let num = computerNum[i];
                    for (let j = 0; j < userNumber; j++) {
                        if(num === userNumber[j] && i == j) {
                            bulls++;
                        } else if( num === userNumber[j]) {
                            cows++;
                        }
                    }
                }
                if(bulls === 4) {
                    alert(`Congratulations you Win`);
                    userCompleat = true;
                } else {
                    alert(`cows ---${cows} , bulls -- ${bulls}`);
                }
            }
        }
    }while (!userCompleat);

    let tryAgain = confirm('Want to play again???))');
    if(tryAgain === true) {
        bullsAndCows()
    }else{
        return alert(`Thank you for your GAME`);
    }

}

console.log(bullsAndCows());
