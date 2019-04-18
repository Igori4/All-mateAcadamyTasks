//use strict

let container = document.querySelector('.container');
let wrapper = document.querySelector('.container').innerHTML;
let restartButton = document.querySelector('#restart_game');
let valueOfFirstGamer = [];
let valueOfSecondGamer = [];
let allVariants = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','6','9'],
    ['1','5','9'],
    ['3','5','7'],
]
let startElementX = true;


const isWin = function(gamer, allVariants) {
    let concidence = 0;

    for (let i = 0; i < allVariants.length; i++) { // лучше было бы избегать такого большого количества вложенности циклов.
        let current = allVariants[i];

        for (let j = 0; j < current.length; j++) { // постарайся разбить задание на некоторое количество функций, которая делает что-то определенное.
            let currentNumber = current[j];

            for (let k = 0; k < gamer.length; k++) {

                if(currentNumber === gamer[k]) {
                    concidence++;
                }
            }
            if(concidence === 3) {
                return true;
            } 
        }
        concidence = 0;
    }
    allVariants.forEach( current => {
        console.log(current)
    })
    return false;

}

function isClass(target, clas) { // class
    
    if (target.classList.contains(clas)) {
        return true;
    }

    return false;
}

function addClass(target, clas) {
    target.classList.add(clas);
}

const game = function(event) {
    let target = event.target;

        if(target.dataset.value) {

            if  (isClass(target,'ballot') || isClass(target,'lattinO')) { // Попробуй сделать всю игру не основывая на классах как на главных типах данных. допустим можешь использовать объекты в которые будешь записывать определнные данные, а потом уже именно ими и оперировать. 

            return;
            }

            if (startElementX) {
                addClass(target,'ballot');
                valueOfFirstGamer.push(target.dataset.value);
                startElementX = false;

            } else {
                addClass(target,'lattinO');
                valueOfSecondGamer.push(target.dataset.value);
                startElementX = true;
            }
        }

        setTimeout ( () => { // для чего здесь setTimeout?
            if(isWin(valueOfFirstGamer,allVariants)) {
                alert('First Gamer Win')
                gameOver()
            }
            if(isWin(valueOfSecondGamer,allVariants)) {
                alert('Second Gamer Win')
                gameOver()
            }
        },200)

}

function gameOver() { // в твоём случае после чей-то победы можно кликать на пустые ячейки. В условиях было сказано "disable new clicks after game is over until restart".
    valueOfFirstGamer = [];
    valueOfSecondGamer = [];
}

const restartGame = function() {
    container.innerHTML = null;
    container.innerHTML = wrapper;
    valueOfFirstGamer = [];
    valueOfSecondGamer = [];
    startElementX = true;

}

container.addEventListener('click' , game)
restartButton.addEventListener('click',restartGame)


