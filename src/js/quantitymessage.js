import refs from "./refs";
const { container, textMessage, textContainer, language } = refs;

let textTooMuch;
let textCanMore;
let textComplete;

export function quantityMessage(cargoQuantity) {
    languageChange(cargoQuantity);
    
   if (cargoQuantity > 50) {
        container.innerHTML = '';
    console.log('забагато ящиків');
        textMessage.innerHTML = textTooMuch;
        textContainer.classList.remove('text-container-green', 'text-container-full', 'text-container-yellow')
        textContainer.classList.add('text-container-over');
        return

  } else {
    console.log('завантажуємо');
        if (cargoQuantity < 50) {
            textMessage.innerHTML = textCanMore;
             textContainer.classList.remove('text-container-over', 'text-container-full', 'text-container-yellow')
            textContainer.classList.add('text-container-green');
        } else {
            textMessage.innerHTML = textComplete;
             textContainer.classList.remove('text-container-over', 'text-container-green', 'text-container-yellow')
            textContainer.classList.add('text-container-full');
            }
  } 
}

function languageChange(cargoQuantity) {
    if (language.textContent === 'eng') {
        textTooMuch = `${cargoQuantity} - це забагато ящиків! Зменшіть кількість або забронюйте додатковий контейнер`;
        textCanMore = `завантажуємо ${cargoQuantity} ящиків. Ще є місце для ${50 - cargoQuantity} ящиків`;
        textComplete = `завантажили ${cargoQuantity} ящиків. Контейнер заповнений повністю`;
    } else {
        textTooMuch = `${cargoQuantity} - that's too many boxes! Reduce the quantity or book an additional container`;
        textCanMore = `load ${cargoQuantity} boxes. There is still room for ${50 - cargoQuantity} boxes`;
        textComplete = `loaded ${cargoQuantity} boxes. The container is completely filled`;
    }
}