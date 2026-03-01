// DOM Elements Retrieval
const billInput = document.querySelector('.bill--input');
const billErrorEl = document.getElementById('billErrorSpan');
const tipContainer = document.querySelector('.main__tip--container');
const customTipInput = document.querySelector('.custom--input');
const peopleInput = document.getElementById('numberOfPeople');
const peopleErrorEl = document.getElementById('peopleErrorSpan');
const tipAmountEl = document.getElementById('tipAmountPerPerson');
const totalAmountEl = document.getElementById('totalPerPerson');
const resetBtn = document.getElementById('resetBtn');

// Global State
let selectedTip = 0;

// Event Listeners
billInput.addEventListener('input', handleInput);
peopleInput.addEventListener('input', handleInput);

tipContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('preset--btn')) {
        const activeBtn = tipContainer.querySelector('.active');
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }

        e.target.classList.add('active');
        selectedTip = parseFloat(e.target.dataset.tip);
        customTipInput.value = '';
        handleInput();
    }
});

tipContainer.addEventListener('input', (e) => {
    if (e.target.classList.contains('custom--input')) {
        const activeBtn = tipContainer.querySelector('.active');
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }

        selectedTip = parseFloat(e.target.value) || 0;
        handleInput();
    }

});
    
resetBtn.addEventListener('click', reset);


// Helper Functions
function validateBill(value) {
    if (value === '') {
        showError(billInput, "Can't be empty", billErrorEl);
        return false;
    } else if (isNaN(value)) {
        showError(billInput, "Must be a number", billErrorEl);
        return false;
    } else if (value <= 0) {
        showError(billInput, "Bill must be greater than 0", billErrorEl);
        return false;
    } else {
        clearError(billInput, billErrorEl);
        billInput.classList.add('valid');
        return true;
    }  
}

function validateCustomTip(value) {
    if (value < 0 ) {
        showError(customTipInput);
        return false;
    } else {
        clearError(customTipInput)
        customTipInput.classList.add('valid');
        return true;
    }   
}

function validatePeople(value) {
    if(!value || isNaN(value) || value < 1 ) {
        showError(peopleInput, "Can't be zero or less", peopleErrorEl);
        return false;
    } else {
        clearError(peopleInput, peopleErrorEl);
        peopleInput.classList.add('valid');
        return true;
    }  
}

function showError(inputEl, message = '', errorEl = null) {
    inputEl.classList.add('invalid');
    if (errorEl) {
        errorEl.textContent = message;
    }
}

function clearError(inputEl, errorEl = null) {
    inputEl.classList.remove('invalid');
    if (errorEl) {
        errorEl.textContent = '';
    }
}

function handleInput () {
    const bill = parseFloat(billInput.value);
    const people = parseFloat(peopleInput.value);

    const billValid = billInput.value ? validateBill(bill) : false;
    const peopleValid = peopleInput.value ? validatePeople(people) : false;
    const tipValid = validateCustomTip(selectedTip);
    
    if (billValid && peopleValid && tipValid) {
        calculate(bill, people, selectedTip);
        resetBtn.disabled = false;
    }
}

function calculate (bill, people, selectedTip) {
    const billPerPerson = bill / people;
    const tipAmount = bill * (selectedTip / 100);
    const tipPerPerson = tipAmount / people;
    const totalAmountPerPerson = billPerPerson + tipPerPerson;

    tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalAmountEl.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
}

function reset () {
    resetBtn.disabled = true;
    clearError(billInput, billErrorEl);
    clearError(peopleInput, peopleErrorEl);
    
    selectedTip = 0;

    billInput.value = '';
    customTipInput.value = '';
    peopleInput.value = '';

    const activeBtn = tipContainer.querySelector('.active');
    if (activeBtn) activeBtn.classList.remove('active');

    billInput.classList.remove('valid', 'invalid');
    customTipInput.classList.remove('valid', 'invalid');
    peopleInput.classList.remove('valid', 'invalid');

    tipAmountEl.textContent = "$0.00";
    totalAmountEl.textContent = "$0.00";
}







