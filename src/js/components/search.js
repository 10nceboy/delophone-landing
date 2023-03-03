import {
    clickOutside
} from '../utils/dom';



document.addEventListener('DOMContentLoaded', () => {
    let searchInput = document.querySelector('.search__input');
    const submitButton = document.querySelector('.search__submit-button');
    const search = document.querySelector('.search');
    let value = searchInput.value;


    searchInput.addEventListener('input', (event) => {
        if (event.target.value.trim() === '') {
            submitButton.classList.remove('search__submit-button_active')
        }
        else {
            submitButton.classList.add('search__submit-button_active')
        }
    });

    searchInput.addEventListener('keydown', (event) => {
        const allowedKeys = [
            'Enter',
            'Tab',
            'Backspace',
            'Delete',
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '(',
            ')',
            '?',
            '*'
        ];

        if (allowedKeys.includes(event.key)) {
            return true;
        }
        event.preventDefault();

    })



    clickOutside(search, () => {
        submitButton.classList.remove('search__submit-button_active')
    });




})