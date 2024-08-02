import refs from './js/refs';
const {
  form,
  container,
  textMessage,
  textContainer,
  clearForm,
  sendingBtn,
  bigContainer,
  language,
} = refs;

import { createBoxes, makeVisibleBox } from './js/createboxes';
import { quantityMessage } from './js/quantitymessage';
import { clearingForm } from './js/cleaningform';

console.log(screen.width);

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
  return fruitsObj;
});

function onFormSubmit(e) {
  e.preventDefault();
  cargoQuantity = 0;
  for (const key in fruitsObj) {
    cargoQuantity += fruitsObj[key];
  }

  quantityMessage(cargoQuantity);

  if (cargoQuantity <= 50) {
    let cargoHeight = Math.ceil(cargoQuantity / 10) * 50;
    container.style.height = `${cargoHeight}px`;
    createBoxes(fruitsObj);
    makeVisibleBox(cargoQuantity);
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
