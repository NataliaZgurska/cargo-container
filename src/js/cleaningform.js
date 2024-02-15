import refs from "./refs";
const { form, container, btn, textMessage, textContainer, clearForm, sendingBtn, bigContainer } = refs;

export function clearingForm() {
    bigContainer.classList.remove('moving');
    form.reset();
    textContainer.classList.remove('text-container-green', 'text-container-full', 'text-container-over')
    textContainer.classList.add('text-container-yellow');
    textMessage.innerHTML = 'Ви можете завантажити не більше 50 ящиків';
    container.innerHTML = '';
 
}