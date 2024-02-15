import refs from "./refs";
const { container, textMessage, textContainer } = refs;

export function quantityMessage(cargoQuantity) {
   if (cargoQuantity > 50) {
        container.innerHTML = '';
    console.log('забагато ящиків');
        textMessage.innerHTML = `${cargoQuantity} - це забагато ящиків! Зменшіть кількість або забронюйте додатковий контейнер`;
        textContainer.classList.remove('text-container-green', 'text-container-full', 'text-container-yellow')
        textContainer.classList.add('text-container-over');
        return

  } else {
    console.log('завантажуємо');
        if (cargoQuantity < 50) {
            textMessage.innerHTML = `завантажуємо ${cargoQuantity} ящиків. Ще є місце для ${50 - cargoQuantity} ящиків`;
             textContainer.classList.remove('text-container-over', 'text-container-full', 'text-container-yellow')
            textContainer.classList.add('text-container-green');
        } else {
            textMessage.innerHTML = `завантажили ${cargoQuantity} ящиків. Контейнер заповнений повністю`;
             textContainer.classList.remove('text-container-over', 'text-container-green', 'text-container-yellow')
            textContainer.classList.add('text-container-full');
            }
  } 
}