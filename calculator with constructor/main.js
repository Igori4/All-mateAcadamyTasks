function Calculator() {
    this.firstValue= 0;
    this.secndValue= 0;
}
var calculator = new Calculator();
Calculator.prototype.read = function () {
    this.firstValue = parseInt(prompt('type a num'),10);
    this.secndValue = parseInt(prompt('type a num'),10);
}
Calculator.prototype.sum = function () {
    let result = this.firstValue + this.secndValue;
    return result;
}

Calculator.prototype.mul = function () {
    let result = this.firstValue * this.secndValue;
    return result;
}


calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );