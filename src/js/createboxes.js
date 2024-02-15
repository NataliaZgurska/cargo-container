import refs from "./refs";
const { container } = refs;

export function createBoxes(obj) {
    let boxArray = [];
    container.innerHTML = '';
    for (const key in obj) {
        for (let i = 0; i < obj[key]; i++) {
            const boxEl = boxTemplate(key, i);
 console.log(boxEl);           
            boxArray.push(boxEl);
        }
    }
    const markup = boxArray.join('');

    container.insertAdjacentHTML('beforeend', markup);
    
}

function boxTemplate(fruit, i) {
    return `<div class="box ${fruit}"> <p">${i + 1}</p> </div>`
}

export function makeVisibleBox(quantity) {
   for (let i = 0; i < quantity; i++) {
     setTimeout(()=>container.children[i].style.visibility = 'visible', i*200)
   } 
}



