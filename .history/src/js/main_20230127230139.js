const bill = document.querySelector(".billValueInput");
const tipBtns = document.querySelectorAll(".tipBtn");
const tipCustom = document.querySelector("#tipInput");
const people = document.querySelector(".peopleValue");
const result = document.querySelectorAll(".price");
const resetBtn = document.querySelector(".reset");

let billVal = 0;
let tipValue = 0;
let peopleValue = 0;

bill.addEventListener("input", setBillValue);
tipBtns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

tipCustom.addEventListener("input", setCustomTipValue);
people.addEventListener("input", setPeopleValue);
resetBtn.addEventListener("click", reset);

function validationFloat(n) {
  let reg = /^[0-9]*\.?[0-9]*$/;
  return n.match(reg);
}

function validateInt(s) {
  let reg = /^[0-9]*$/;
  return s.match(reg);
}

function setBillValue() {
  if (bill.value.includes(",")) {
    bill.value = bill.value.replace(",", ".");
  }

  if (!validationFloat(bill.value)) {
    bill.value = bill.value.substring(0, bill.value.length - 1);
  }

  billVal = parseFloat(bill.value);
  calculateTip();
}

function handleClick(e) {
  tipBtns.forEach((btns) => {
    btns.classList.remove("active");

    if (e.target.innerHTML == btns.innerHTML) {
      btns.classList.add("active");
      tipValue = parseFloat(btns.innerHTML) / 100;
    }
  });

  tipCustom.value = "";
  calculateTip();
}

function setCustomTipValue() {
  if (!validateInt(tipCustom.value)) {
    tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1);
  }
  tipValue = parseFloat(tipCustom.value / 100);

  tipBtns.forEach((btns) => {
    btns.classList.remove("active");
  });

  if (tipCustom.value !== "") {
    calculateTip();
  }
}

function setPeopleValue() {
  if (!validateInt(people.value)) {
    people.value = people.value.substring(0, people.value.length - 1);
  }

  peopleValue = parseFloat(people.value);

  if (people.value <= 0) {
    alert("can't be less than 1");
  }

  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billVal * tipValue) / peopleValue;
    let total = (billVal * (tipValue + 1)) / peopleValue;
    result[0].innerHTML = "$" + tipAmount.toFixed(2);
    result[1].innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  bill.value = "0.0";
  setBillValue();

  tipBtns[0].click();

  people.value = "1";
  setPeopleValue();
}
