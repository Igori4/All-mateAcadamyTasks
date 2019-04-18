'use strict'
let table = document.querySelector('#grid');
let tbody = document.querySelector('tbody');
table.addEventListener('click', function(event) {
    let target = event.target;
    let rows = [...tbody.rows];
    if(target.dataset.type === 'number') {
          rows.sort( (a, b) => {
          let aVal =  parseInt(a.children[0].textContent,10);
          let bVal =  parseInt(b.children[0].textContent,10);
          if ( aVal > bVal ) {return 1}
          if ( aVal < bVal ) {return -1}
            return 0;
        })
        tbody.innerHTML = null;
        for (let i = 0; i < rows.length; i++) {
            tbody.appendChild(rows[i]);
        }

    }

    if(target.dataset.type === 'string') {
        rows.sort( (a, b) => {
          let aVal =  a.children[1].textContent;
          let bVal =  b.children[1].textContent;
          if ( aVal > bVal ) {return 1}
          if ( aVal < bVal ) {return -1}
            return 0;
        })
        tbody.innerHTML = null;
        for (let i = 0; i < rows.length; i++) {
            tbody.appendChild(rows[i]);
        }
    }
});