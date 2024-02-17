import refs from "./refs";
const { form, container, textMessage, textContainer, bigContainer } = refs;

export function clearingForm() {
    bigContainer.classList.remove('moving');
    form.reset();
    textContainer.classList.remove('text-container-green', 'text-container-full', 'text-container-over')
    textContainer.classList.add('text-container-yellow');
    container.innerHTML = '';
}