import refs from './refs';
const { container } = refs;

export function createBoxes(obj) {
  let markup = '';

  for (const key in obj) {
    markup += Array.from({ length: obj[key] }, (_, i) =>
      boxTemplate(key, i)
    ).join('');
  }
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', markup);
}

function boxTemplate(fruit, i) {
  return `<div class="box ${fruit}"> <p>${i + 1}</p> </div>`;
}

export function makeVisibleBox(quantity) {
  for (let i = 0; i < quantity; i++) {
    setTimeout(
      () => (container.children[i].style.visibility = 'visible'),
      i * 200
    );
  }
}
