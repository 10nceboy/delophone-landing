import {
    transitionEnter,
    transitionLeave,
    scrollToElement,
    isInViewport
} from '../utils/dom';




document.addEventListener('DOMContentLoaded', () => {
    const expand = document.querySelector('.expand__card');
    const expandButton = document.querySelector('.expand__button');
    const expandContent = document.querySelectorAll('.expand__content');
    const tableHeader = document.querySelectorAll('.phone-numbers__header');
    const phonenNumber = document.getElementById('phone-numbers');
    let state = false;
    const headerArray = Array.from(tableHeader);
    let headerView = headerArray.some(element => isInViewport(element));

    expand.addEventListener('click', () => {
        state = !state;



        if (state) {
            expandButton.classList.add('expand__button_active');
            expandContent.forEach(element => transitionEnter(element, 'expand__content'));
            tableHeader.forEach(element => transitionEnter(element, 'phone-numbers__header'));
            phonenNumber.scrollIntoView({ block: 'start' });
        }
        else {
            expandContent.forEach(element => transitionLeave(element, 'expand__content'));
            tableHeader.forEach(element => transitionLeave(element, 'phone-numbers__header'));
            window.setTimeout(() => {
                expandButton.classList.remove('expand__button_active');
            }, 400);
            phonenNumber.scrollIntoView({ block: 'end' });
        }
    });



});