'use strict'
let container = document.querySelector('.container');

let data = {
    "Рыбы": {
      "Форель": {},
      "Щука": {}
    },
  
    "Деревья": {
      "Хвойные": {
        "Лиственница": {},
        "Ель": {}
      },
      "Цветковые": {
        "Берёза": {},
        "Тополь": {}
      }
    }
  };

const createTree = (place, data) => {
place.innerHTML =  listFromObj(data);
}

function listFromObj(obj) {
  let keys = Object.keys(obj);
  if (keys.length === 0 ) return '' ;
  return `
        ${
          Object.keys(obj)
          .map(el => {
           return `<ul><li>${el} ${listFromObj(obj[el])}</li></ul>`
          })
          .join('')
        }
  `
}

createTree(container, data);