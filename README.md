# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](/assets/images/screenshots/vvv.png)
![](/assets/images/screenshots/vvv1.png)
![](/assets/images/screenshots/vvv2.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/jacey10/fm-tip-calculator-app)
- Live Site URL: [Add live site URL here](https://jacey10.github.io/fm-tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow
- Modular Pattern
- Controller Pattern
- Event-Driven Architecture

### What I learned

- Separation of Concerns: Breaking the app into distinct layers — validation, calculation, and a controller (handleInput) that coordinates both — kept the code clean and each function focused on one job.
- Event Delegation: Instead of attaching listeners to each tip button individually, one listener on the parent tipContainer handles all clicks by checking e.target. Fewer listeners, cleaner code.

```js
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
```

```js
function calculate (bill, people, selectedTip) {
  const billPerPerson = bill / people;
  const tipAmount = bill * (selectedTip / 100);
  const tipPerPerson = tipAmount / people;
  const totalAmountPerPerson = billPerPerson + tipPerPerson;

  tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmountEl.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
}
```

### Useful resources
- Claude 

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

