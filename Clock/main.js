class Clock {

    constructor(options) {
        this.element = options.element;
        this._id = options.id;
        this._class = options.class;
        this._buttonStart = options.buttonStart;
        this._buttonStop = options.buttonStop;
        this._render();
        this._date = new Date();
        this._hours = this._date.getHours();
        this._minutes = this._date.getMinutes(); 
        this._seconds = this._date.getSeconds();
        this._timer;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this._addListeners();
    }

    _addZeroOfStart(time){
        let nowTime = time.toString();

        if(nowTime.length === 1) {
            return `0${nowTime}`;
        }

        return nowTime;
    }

    _addTime(hours, minuties, seconds) {
        let hour = document.querySelector(`#${this._id} .hour`);
        hour.textContent = this._addZeroOfStart(hours);
        let min = document.querySelector(`#${this._id} .min`);
        min.textContent = this._addZeroOfStart(minuties);
        let sec = document.querySelector(`#${this._id} .sec`);
        sec.textContent = this._addZeroOfStart(seconds);
    }

    start() {
        this._timer = setInterval(() => {
            this._date = new Date();
            this._hours = this._date.getHours();
            this._minutes = this._date.getMinutes(); 
            this._seconds = this._date.getSeconds();
            this._addTime(this._hours, this._minutes, this._seconds);
        },1000);
    };

    stop() {
        clearInterval(this._timer);
    };
    
    _addListeners() {
        let startButton = document.querySelector(`.${this._buttonStart}`);
        let stopButton = document.querySelector(`.${this._buttonStop}`);
        startButton.addEventListener('click', this.start)
        stopButton.addEventListener('click', this.stop)

    }

    _render() {
        this.element.innerHTML = `
        <div id="${this._id}" class="${this._class}">
        <span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span>
        </div>
    
        <input type="button" class="${this._buttonStart}" value="Старт">
        <input type="button" class="${this._buttonStop}" value="Стоп">
        <input type="button" onclick="alert('Перевіряємо годиник')" value="alert для проверки корректного возобновления">
        `
    };
};

const clock = new Clock({
    element: document.querySelector('.firstContainer'),
    id: 'clock',
    class: 'clock',
    buttonStart: 'clock_start',
    buttonStop: 'clock_stop',
  });

const clock2 = new Clock({
    element: document.querySelector('.secondContainer'),
    id: 'clock2',
    class: 'clock2',
    buttonStart: 'clock2_start',
    buttonStop: 'clock2_stop',
})

  
