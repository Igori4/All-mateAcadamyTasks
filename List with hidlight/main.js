'use strict'
class HighliteList {
    constructor(options) {
        this.element = options.element;
        this.items = options.items;
        this._render();
        this._selectedEl = [];
        this._elWithClass;
        this._showSelectedEl = this._showSelectedElements.bind(this);
        this._lastClickedElement;
        this._ulElem = document.querySelector(`#${this.element.id} ul`);
        this._highliteElement();
        this.getSelected();
    };

    _highliteElement() {
        let allItems = [...this._ulElem.children];

        this._ulElem.addEventListener('click', (event) =>{

            if(event.target.tagName !== 'LI') return;

            if(event.ctrlKey || event.metaKey) {
                this._selectedElWithCtrl(event);

            } else if(event.shiftKey) {
                this._selectFromShift(event.target)                
            } else {
                
                if(this._elWithClass) {
                    allItems.map(item =>{
                        if(item.classList.contains('selected')) {
                            item.classList.remove('selected')
                        };
                    });
                }
                this._lastClickedElement = event.target;
                this._elWithClass = event.target;
                this._elWithClass.classList.add('selected');
            }
            this._isHaveClass(this._ulElem);
        })
 
    };

    _isHaveClass(items) {
        this._selectedEl = [];
        let allItems = [...items.children];
        allItems.map(item => {
            if(item.classList.contains('selected')) {
                this._selectedEl.push(item.textContent);
            }
        })
    };

    _selectedElWithCtrl(event) {
        event.target.classList.toggle('selected');
        this._lastClickedElement = event.target;
        this._cancleShiftSelected();
    };

    _selectFromShift(target) {
        let startElem = this._lastClickedElement || this._ulElem.children[0];
        let elem;
        let isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
  
        if (isLastClickedBefore) {
          for ( elem = startElem; elem != target; elem = elem.nextElementSibling) {
            elem.classList.add('selected');
          }
        } else {
          for ( elem = startElem; elem != target; elem = elem.previousElementSibling) {
            elem.classList.add('selected');
          }
        }
        elem.classList.add('selected');
        this._cancleShiftSelected();
    };

    _showSelectedElements() {
        alert(this._selectedEl);
    };

    getSelected() {
        let button = document.querySelector(`#${this.element.id} #getSelected`);
        button.onclick = this._showSelectedEl;
    };

    _cancleShiftSelected() {
        if (window.getSelection)  window.getSelection().removeAllRanges();
            else if (document.selection && document.selection.clear) document.selection.clear();            
    };

    _render() {
        this.element.innerHTML = `
        <ul>
            <li>Крістофор Колумб</li>
            <li>Вінні Пух</li>
            <li>Ослик Іа</li>
            <li>Розумна Сова</li>
            <li>Кролик . Просто кролик</li>
        </ul>
         
        
        <button id="getSelected">getSelected</button>
        `
    };

};

let list = new HighliteList({
    element : document.querySelector('#firstList'),
    items : [
        'Крістофор Колумб',
        'Вінні Пух',
        'Ослик Іа',
        'Розумна Сова',
        'Кролик . Просто кролик'
    ]
})
let list2 = new HighliteList({
    element : document.querySelector('#secondList'),
    items : [
        'Крістофор Колумб',
        'Вінні Пух',
        'Ослик Іа',
        'Розумна Сова',
        'Кролик . Просто кролик'
    ]
})
