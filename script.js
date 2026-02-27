const billInput = document.querySelector('.bill--input');
const billErrorEl = document.getElementById('billErrorSpan');
const tipContainer = document.querySelector('.main__tip--container');
const customTipInput = document.querySelector('.custom--input');
const peopleInput = document.getElementById('numberOfPeople');
const peopleErrorEl = document.getElementById('peopleErrorSpan');
const tipAmountDisplay = document.getElementById('tipAmountPerPerson');
const totalAmountDisplay = document.getElementById('totalAmountPerPerson');
const resetBtn = document.getElementById('resetBtn');

function validateBill(bill) {
    if(bill <= 0) {
        showError("Bill must be greater than 0");
    } return;
}

function validatePeople(people) {
    if(people < 1 ) {
        showError("Can't be zero");
    }
}

function validateCustomTip(customTip) {
    if (customTip <= 0 ) {
        customTipInput.classList.add('invalid');
    }
}

function calculate() {
    
}









