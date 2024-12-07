import refs from './js/refs';
const {
  form,
  container,
  textMessage,
  textContainer,
  clearForm,
  sendingBtn,
  loadBtn,
  bigContainer,
  language,
} = refs;

import { createBoxes, makeVisibleBox } from './js/createboxes';
import { quantityMessage } from './js/quantitymessage';
import { clearingForm } from './js/cleaningform';

let fruitsObj;
let cargoQuantity;

textContainer.classList.add('text-container-yellow');

clearForm.addEventListener('click', clearingForm);
form.addEventListener('submit', onFormSubmit);
sendingBtn.addEventListener('click', onSendingBtnClick);

form.addEventListener('input', e => {
  const applesQuantity = Number(form.elements.apples.value);
  const grapesQuantity = Number(form.elements.grapes.value);
  const bananasQuantity = Number(form.elements.bananas.value);

  fruitsObj = {
    apple: applesQuantity,
    grape: grapesQuantity,
    banana: bananasQuantity,
  };

  cargoQuantity = 0;
  for (const key in fruitsObj) {
    cargoQuantity += fruitsObj[key];
  }

  loadBtnActiv(cargoQuantity);

  return fruitsObj, cargoQuantity;
});

function onFormSubmit(e) {
  e.preventDefault();
  quantityMessage(cargoQuantity);

  if (cargoQuantity <= 50) {
    let cargoHeight = Math.ceil(cargoQuantity / 10) * 40;
    container.style.height = `${cargoHeight}px`;
    createBoxes(fruitsObj);
    makeVisibleBox(cargoQuantity);
    sendingBtn.disabled = false;
  } else {
    sendingBtn.disabled = true;
  }
}

function onSendingBtnClick() {
  bigContainer.classList.add('moving');
  if (language.textContent === 'eng') {
    textMessage.innerHTML = `Відправлено контейнер з ${cargoQuantity} ящиками`;
  } else {
    textMessage.innerHTML = `Shipped container with ${cargoQuantity} boxes`;
  }

  setTimeout(() => window.location.reload(), 3500);
}

function loadBtnActiv(quantity) {
  if (quantity > 0) {
    loadBtn.disabled = false;
  } else {
    loadBtn.disabled = true;
  }
}
