import Component from "./component.js";

export default class Tabs extends Component {
    constructor({ element, tabs }) {
        super({ element });
        this._tabs =  tabs || [...this._element.children]
        .filter((el) => el.matches('tab'))
        .map((tabel) => {
            const title = tabel.getAttribute('title') || 'no-name';
            const content =tabel.textContent;
            return {title, content};
        });
        this._currentTab = 0;

        this.render();

        this.on('click', '[data-element="tab-select"]', (event) =>{
            const tabSelect = event.target.closest('[data-element="tab-select"]');
            this._currentTab = tabSelect.dataset.tabId;
            this.render()
            this.emit('tab-selected', this.getCurrentTabData());
            const tabSelectEvent = new CustomEvent('tab-selected', {
                detail: this.getCurrentTabData()
             })
             this._element.dispatchEvent(tabSelectEvent);
        })
    }

    getCurrentTabData() {
        return this._tabs[this._currentTab];
    }

    render() {
        this._element.innerHTML = `
        <div class="tabs__controls">
            ${
               this._tabs.map((tab, i) => {
                return `<button
                     data-element="tab-select"
                     data-tab-id="${i}"
                     >
                    ${tab.title}
                    </button>
                    `
                }).join('')
            }
        </div>
        <div class="tabs__content" data-element="content">
            ${this.getCurrentTabData().content}
        </div>
        `
    }
}

const allTabs = [...document.querySelectorAll('tabs')];
    allTabs.forEach(el => {
        new Tabs({element: el});
    });