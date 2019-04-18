'use strict'
let deys = ['Mon' , 'Tue', 'Wen', 'Tue', 'Fri', 'Sut', 'Sun'];

let allMonth = ['January','February','March',
'April','May','June',
'July','August','September',
'October','November','December',]


const creatCalendar = (id, year , month) => {
    let container = document.querySelector(`#${id}`);
    container.innerHTML += `
        <table>
            <thead>
                <tr></tr>
            </thead>
            <tbody></tbody>
        </table>
    `
    let dey = document.querySelector('thead tr');

    for (let i = 0; i < deys.length; i++) {
        dey.innerHTML += ` <th>${deys[i]}</th>`
    }

    let tbody = document.querySelector('tbody');
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < 7 ; j++) {
            tr.innerHTML += `<td></td>`
        }
        tbody.appendChild(tr);
    }

    let currentMont = allMonth[month - 1] + ' ' + 1;
    let daysinMonth = new Date(year, month, 0).getDate();
    let firstDay = new Date(`${currentMont} , ${year} 00:00:00`).getDay();
    let allDays = [];

    for (let i = 1; i <= daysinMonth; i++) {
        allDays.push(i);
    }

    let allCells = document.querySelectorAll('td');

    for (let i =  firstDay - 1; i < allCells.length; i++ ) {
            allCells[i].textContent = allDays[i - firstDay + 1];
    }
}

creatCalendar( 'cal', 2019, 4);