// 1. Pobierz wartość rachunku:
//   x a) Pobierz inputa :)
//   x c) sprawdź czy nie jest pusty i pobierz wartosc
//   b) Dodajemy walidacje
// 2.Pobierz wielkosc napiwku w %
//   a) Budujemy buttony na %
//   x b) Pobierz Input na%
//   c) Dodajemy warunek, ze tylko 1 (button/Input) może być zaznaczony
//   d) Zapisujemy wartośc z tipa w zmiennej
//   e) Jeśli w zmiennej jest % z buttona i cos wpiszemy w input to nadpisujemy zmienna
//   f) Automatycznie dodajemy %, a z buttonów zczytujemy tylko wartości.
//   e) Dodajemy walidacje do custom, żeby przyjmowaly tylko numery od 0 do 100
// 3. Pobierz ilośc osób do podziału
//   x a) pobieramy input
//   x c) sprawdź czy nie jest pusty i pobierz wartosc
//   b) Dodajemy walidacje
// 4. Wyświetl total
//   a) Pobierz total
//   b) pobierz tip amount
//   c) Wyświetl wyliczenia
// 5. Pobierz reset button
//   a)dodaj listenera
//   b) dodaj funkcje resetującą.


// Pobierz wartość rachunku (Bill)
// Pobierz wielkośc napiwku w % (Tip)
//  Pobierz ilość osób do podziału (People)

//  Tip Amount / person = Bill * Tip / People
//  Total / person = Bill + (Bill * Tip) / People=

// import {dom} from './dom.js';
// import {logic} from './logic.js';

// const billVal = document.querySelector('.billValue'); //enter bill value space
// const ppl = document.querySelector('.peopleValue'); //number of people
// const tipVal = document.querySelectorAll('.tipBtn'); //select tip value
const resetBtn = document.querySelector('.reset'); //reset
const btns = document.querySelector('.btnsBox'); //div with tip buttons
let personalTip = document.querySelector('.tipInput'); //personal tip
const tipFPrsn = document.querySelector('#tipForPrsn'); //return tip for person
const totalFPrsn = document.querySelector('#totalForPrsn'); //return total for person

let tipForPersonValue = 0;
let totalForPersonValue = 0;
let selectedTipValue = 0;
//***************** */
const billVal = document.querySelector('.billValue');
const billInput= billVal.firstElementChild;
const ppl = document.querySelector('.peopleValue');
const tipVal = document.querySelector('.custom');
let billValue;
let tipValue;
let numberOfPeople;

function resetColors() {
    let i = 0;
    for (i = 0; i < btns.length - 1; i++) {
        console.log(bt.style.backgroundColor);
        // if (btns[i].style.backgroundColor === "$SweetGreen") {
        //     btns[i].style.backgroundColor = "";
        // }
    }
}

function addColor() {
    resetColors();
    this.style.backgroundColor = "$SweetGreen";
}

// const handleBillInputValue = (e) => {
//     if(e.key === 'Enter'){
//         billValue = billInput.value ? billInput.value : 0;
//     }
//     console.log(billValue)
// }

// const handleTipInputValue = (e) => {
//     if(e.key === 'Enter'){
//         tipValue = tipVal.value ? tipVal.value : 0;
//     }
//     console.log(tipValue)
// }

// const handleNumberOfPeopleInputValue = (e) => {
//     if (e.key === 'Enter') {
//         numberOfPeople = ppl.value ? ppl.value : 0;
//     }
//     console.log(numberOfPeople)
// }


// const start = () => {
//     billInput.addEventListener('keydown', handleBillInputValue);
//     tipVal.addEventListener('keydown', handleTipInputValue);
//     ppl.addEventListener('keydown', handleNumberOfPeopleInputValue);
// }

// start();