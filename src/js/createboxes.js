import refs from "./refs";
const { form, container, btn, textMessage, textContainer, clearForm, sendingBtn, bigContainer } = refs;

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
    <img src="/cargo-container/assets/apple-688e882e.jpg" alt="a" width="27" height="27">
       </div>`
}

export function makeVisibleBox(quantity) {
   for (let i = 0; i < quantity; i++) {
     setTimeout(()=>container.children[i].style.visibility = 'visible', i*200)
   } 
}

{/* <img class="input-img" src="/cargo-container/assets/apple-688e882e.jpg" alt="small-apple" width="30" height="30"></img>
<img class="input-img" src="/cargo-container/assets/grape-e08af5f5.jpg" alt="small-grape" width="30" height="30"></img>
<img class="input-img" src="/cargo-container/assets/banana-b2375553.jpg" alt="small-banana" width="30" height="30"></img> */}



//  <img src="./img/${fruit}.jpg" alt="${fruit}" width="${imgWidth}" height="${imgHeight}" />