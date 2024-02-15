import refs from "./js/refs";
const {form, container, btn, textMessage, textContainer, clearForm, sendingBtn, bigContainer} = refs;

// import { createBoxes, makeVisibleBox } from "./js/createboxes";
import { quantityMessage } from "./js/quantitymessagr";
import { clearingForm } from "./js/cleaningform";


console.log(screen.width);

let fruitsObj;
let cargoQuantity;

textContainer.classList.add('text-container-yellow');

clearForm.addEventListener('click', clearingForm)
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
    }
    return fruitsObj;
})


function onFormSubmit(e) {
    e.preventDefault();
    cargoQuantity = 0;
    for (const key in fruitsObj) {
        cargoQuantity += fruitsObj[key];
    }

    quantityMessage(cargoQuantity);

    if (cargoQuantity <= 50) {
        let cargoHeight = Math.ceil(cargoQuantity / 10)*50;
        container.style.height = `${cargoHeight}px`;
        createBoxes(fruitsObj);   
        makeVisibleBox(cargoQuantity);
    }
}


function onSendingBtnClick() {
    bigContainer.classList.add('moving');
    textMessage.innerHTML = `Відправлено контейнер з ${cargoQuantity} ящиками`;
    console.log('відправляємо контейнер');
    
    const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('перезавантажуємо сторінку')
    }, 3500);
})
    promise1.then((value) => {
       window.location.reload();
     
    });
}
 
 function createBoxes(obj) {
    let boxArray = [];
    container.innerHTML = '';
    for (const key in obj) {
        for (let i = 0; i < obj[key]; i++) {
            const boxEl = boxTemplate(key, i);
            boxArray.push(boxEl);
        }
    }
    const markup = boxArray.join('');

    container.insertAdjacentHTML('beforeend', markup);
    
}

let imgWidth;
let imgHeight;
if (screen.width >=1158) {
  imgWidth =64;
 imgHeight =64;  
} else {
    if (screen.width >=768) {
        imgWidth =42;
        imgHeight =42;   
    } else {
        imgWidth =27;
        imgHeight =27; 
    }      
}
console.log('screen: ', screen.width, 'imgWidth:', imgWidth);

function boxTemplate(fruit, i) {
    return `<div class="box"> <p">${i + 1}</p> 
    <img src="./src/img/${fruit}.jpg" alt="${fruit}" width="${imgWidth}" height="${imgHeight}" />
    </div>`
}

function makeVisibleBox(quantity) {
   for (let i = 0; i < quantity; i++) {
     setTimeout(()=>container.children[i].style.visibility = 'visible', i*200)
   } 
}
