let bill = document.querySelector(".billValueInput");

billValue

bill.addEventListener("input", setBillValue);

function setBillValue() {

};

console.log(bill.value);

// const resetBtn = document.querySelector(".reset"); //reset
// const btns = document.querySelector(".btnsBox"); //div with tip buttons
// let personalTip = document.querySelector("#tipInput"); //personal tip
// let tipFPrsn = document.querySelector("#tipForPrsn"); //return tip for person
// let totalFPrsn = document.querySelector("#totalForPrsn"); //return total for person

// //***************** */
// let billVal = document.querySelector(".billValue");
// let billInput = billVal.firstElementChild;
// let pplVal = document.querySelector(".peopleValue");
// let tipVal = document.querySelector(".custom");
// let billValue = 0;
// let tipValue = 0;
// let numberOfPeople = 1;

// billInput.addEventListener("input", validateBill);

// function validateBill() {
//   if (billInput.value.includes(",")) {
//     billInput.value.replace(",", ".");
//   }
//   billVal = parseFloat(billInput.value);
//   // calculate() !!!!!;
//   console.log(billVal);
// }

// personalTip.addEventListener("input", personTipVal);
// pplVal.addEventListener("input", setPeopleVal);
// resetBtn.addEventListener("click", resetBill);

// btns.forEach((button) => {
//   button.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//   btns.forEach((button) => {
//     button.classList.add("active");
//     if (event.target.innerHTML === button.innerHTML) {
//       button.classList.add("active");
//       tipVal = parseFloat(button.innerHTML) / 100;
//       console.log(tipVal);
//     }
//   });
//   personalTip.value = "";
//   calculate();
// };

// function personalTipVal() {
//   tipVal = parseFloat(personalTip.value / 100);
//   btns.forEach((button) => {
//     button.classList.remove("active");
//   });
//   if (personalTip.value !== 0) {
//     calculate();
//   }
//   console.log(tipVal);
// };

// function setPeopleVal() {
//   pplVal = parseFloat(setPeopleVal.value);
//   if (pplVal <= 0) {
//     alert("error");
//   }
//   console.log(pplVal);
//   calculate();
// };

// function calculate() {
//     if(numberOfPeople >= 1) {
//         let tip = billVal * tipVal / pplVal;
//         let totalAmount = billVal * (tipVal + 1) / pplVal;

//         billVal[0].innerHTML = tip.toFixed(2);
//         billVal[1].innerHTML = totalAmount.toFixed(2);
//     }
// };

// function resetBill() {
//     billInput.value = 0.0;
//     validateBill();

//     btns[2].click();
//     pplVal.value = 1;
//     setPeopleVal();
// }
