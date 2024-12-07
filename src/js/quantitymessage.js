import refs from './refs';
const { textMessage, textContainer, language } = refs;

let textTooMuch;
let textCanMore;
let textComplete;

export function quantityMessage(cargoQuantity) {
  languageChange(cargoQuantity);

  console.log('завантажуємо');
  if (cargoQuantity < 50) {
    textMessage.innerHTML = textCanMore;
    textContainer.classList.remove(
      'text-container-over',
      'text-container-full',
      'text-container-yellow'
    );
    textContainer.classList.add('text-container-green');
  } else if (cargoQuantity === 50) {
    console.log('50');
    textMessage.innerHTML = textComplete;
    textContainer.classList.remove(
      'text-container-over',
      'text-container-green',
      'text-container-yellow'
    );
    textContainer.classList.add('text-container-full');
  } else {
    console.log('>50');
    textMessage.innerHTML = textTooMuch;
    textContainer.classList.remove(
      'text-container-full',
      'text-container-green',
      'text-container-yellow'
    );
    textContainer.classList.add('text-container-over');
  }
}

function languageChange(cargoQuantity) {
  if (language.textContent === 'eng') {
    textTooMuch = `${cargoQuantity} - це забагато ящиків! Зменшіть кількість або забронюйте додатковий контейнер`;
    textCanMore = `завантажуємо ${cargoQuantity} ящиків. Ще є місце для ${
      50 - cargoQuantity
    } ящиків`;
    textComplete = `завантажуємо ${cargoQuantity} ящиків. Контейнер заповнений повністю`;
  } else {
    textTooMuch = `${cargoQuantity} - that's too many boxes! Reduce the quantity or book an additional container`;
    textCanMore = `load ${cargoQuantity} boxes. There is still room for ${
      50 - cargoQuantity
    } boxes`;
    textComplete = `load ${cargoQuantity} boxes. The container is completely filled`;
  }
}
