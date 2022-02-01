class CalcController {

    constructor() {

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize() {

        // El = elemento HTML
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "21/03/2001";
        timeEl.innerHTML = "15:36";

    }

    get displayCalc() {
        return this.displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._dataAtual;
    }

    set dataAtual(value) {
        this._dataAtual = value;
    }
}