'use strict'

const people = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"},
];


const arrWithSectionNames = ['id','name','sex',
                            'born','died','age',
                            'century','mother','father',
                            'children'
];

const createTables = function(arrSectionNames) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
      table.appendChild(thead);
      table.appendChild(tbody);

  for (let i = 0; i < arrSectionNames.length; i++) {
          let th = document.createElement('th');
              th.textContent = arrSectionNames[i];
              thead.appendChild(th);
  }
  return table;
}

let getChildren = function( parentName , arrWithPeople) {
    let childs = arrWithPeople.filter( function(persone) {
      if(persone.mother === parentName || persone.father === parentName){
        return true;
      }
    });
    let result = ' ';
    if(childs.length >= 1 ) {
      for (let i = 0; i < childs.length; i++) {
        result += childs[i].name + ', ';
    }
  }
    
    return result.slice(0,-2) ;
}


const showPeople = function (elements, people) {

  let container = elements;
  let table = createTables(arrWithSectionNames,people);
      table.className = 'people__table';
      container.appendChild(table);
  let tbody = document.querySelector('tbody');
   
  for (let i = 0 ; i < people.length; i++) {
      let tr = document.createElement('tr');
          tr.classList = 'person';

      for (let j = 0; j < arrWithSectionNames.length; j++) {

          let td = document.createElement('td');

          switch (arrWithSectionNames[j]) {
            case 'id': 
            td.textContent = i + 1;
            tr.appendChild(td);
            break;
            case 'name':
            td.textContent = people[i].name;
            tr.appendChild(td);
            break;
            case 'sex':
            td.textContent = people[i].sex;
            tr.appendChild(td);
            break;
            case 'born': 
            td.textContent = people[i].born;
            tr.appendChild(td);
            break;
            case 'died': 
            td.textContent = people[i].died;
            tr.appendChild(td);
            break;
            case 'age': 
            td.textContent = people[i].died - people[i].born;
            tr.appendChild(td);
            break;
            case 'century': 
            td.textContent = Math.ceil(people[i].died / 100); 
            tr.appendChild(td);
            break;
            case 'mother': 
            td.textContent = people[i].mother;
            tr.appendChild(td);
            break;
            case 'father': 
            td.textContent = people[i].father;
            tr.appendChild(td);
            break;
            case 'children': 
            td.textContent = getChildren(people[i].name, people);
            tr.appendChild(td);
            break;
            default:
            td.textContent = undefined;
            tr.appendChild(td);
          }
      }
      tbody.appendChild(tr);
  }

   return container;

}
let tableWithPeople = showPeople(document.querySelector('.people'), people);

function addSexToPerson(BgColor) {
   [...document.querySelectorAll('.person')].map( el => {
    if (el.children[2].textContent === 'f') {
      el.classList.add('person--female');
      el.style = `background-color: ${BgColor}`;
    } else {
      el.classList.add('person--male');

    };
  });
}

function foundParents(BgColor) {
  [...document.querySelectorAll('.person')].map( el => {
    let name = el.children[1].textContent;
    [...document.querySelectorAll('.person')].some( persone => {
      if (name === persone.children[7].textContent) {
        el.classList.add('person--mother');
      } else if (name === persone.children[8].textContent) {
        el.classList.add('person--father');
        el.style = `background-color: ${BgColor}`;
      };
    });
  });
}

function foundPersonFromCentyry(century) {
  let numOfCentury  = century.toString();
  [...document.querySelectorAll('.person')].map( el => {
    return el.children[6].textContent === numOfCentury ? el.classList.add(`person--lived-in-${numOfCentury}`) : false;
  })
}

function addBorder(borderColor, age) {
  [...document.querySelectorAll('.person')].map( el => {
    if( +el.children[5].textContent > +age ) {
      [...el.children].map(section => {
        section.style = `border: 2px solid ${borderColor}`
      })
    }
    
  })
}

function markSomeText (before, after) {
  [...document.querySelectorAll('.person')].map( el => {
    let spanOne = document.createElement('span');
    spanOne.textContent = el.children[1].textContent;
    spanOne.style.textDecoration = 'line-through';

    let spanTwo = document.createElement('span');
    spanTwo.textContent = el.children[9].textContent;
    spanTwo.style.textDecoration = 'line-through';

      if (el.children[3].innerText < before.toString()) {
        el.children[1].textContent = '';
        el.children[1].appendChild(spanOne);

      el.children[9].textContent = '';
      el.children[9].appendChild(spanTwo);

      };
  });

 [...document.querySelectorAll('.person')].map( el => {
  let spanOne = document.createElement('span');
  spanOne.textContent = el.children[1].textContent;
  spanOne.style.fontWeight = 'bold';

  let spanTwo = document.createElement('span');
  spanTwo.textContent = el.children[9].textContent;
  spanOne.style.fontWeight = 'bold';

    if (el.children[3].innerText > after.toString()) {
      el.children[1].textContent = '';
      el.children[1].appendChild(spanOne);

      el.children[9].textContent = '';
      el.children[9].appendChild(spanTwo);
      } 
  })
  
}

addSexToPerson('lightpink');
foundParents('cornflowerblue');
foundPersonFromCentyry(17);
addBorder( 'green', 65);
markSomeText (1650, 1800);



