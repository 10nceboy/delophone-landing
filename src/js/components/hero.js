import { isTouchDevice } from '../utils/dom';

let timeoutId = null;
let over = false;
const smoothContentSwitch = (element, newContent) => {
    element.style.opacity = 0;
    setTimeout(() => {
        element.innerHTML = newContent;
        element.style.transition = 'opacity 0.2s ease-in-out';
        element.style.opacity = 1;
    }, 250);
};

if (!isTouchDevice()) {
    const heroBtn = document.querySelector('.hero__button');
    const label = document.querySelector('.hero__label span');
    const originalContent = label.textContent;
    const newContent = '⚡️ Сразу после регистрации';

    heroBtn.addEventListener('mouseover', () => {
        timeoutId = setTimeout(() => {
            over = true;
            smoothContentSwitch(label, newContent);
        }, 200);
    });

    heroBtn.addEventListener('mouseout', () => {
        clearTimeout(timeoutId);
        if (over === true) {
            smoothContentSwitch(label, originalContent);
            over = false;
        }
    });
}