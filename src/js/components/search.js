import {
    clickOutside,
    transitionEnter,
    transitionLeave
} from '../utils/dom';



document.addEventListener('DOMContentLoaded', () => {
    let searchInput = document.querySelector('.search__input');
    const submitButton = document.querySelector('.search__submit-button');
    const search = document.querySelector('.search');
    const closeButton = document.querySelector('.search__close-button');


    const onSearchLeave = () => {
        closeButton.classList.remove('search__close-button_active')
        submitButton.classList.remove('search__submit-button_active');
        setTimeout(() => {
            closeButton.classList.remove('search__close-button_visible')
            submitButton.classList.remove('search__submit-button_visible');
            searchInput.classList.remove('search__input_active')

        }
            , 200);

    }

    const onSearchStart = () => {
        transitionEnter(submitButton, 'search__submit-button');
        transitionEnter(closeButton, 'search__close-button');
        transitionEnter(searchInput, 'search__input');

    }


    searchInput.addEventListener('keyup', (event) => {
        if (event.target.value.length == 0) {
            onSearchLeave();
        }
        else {
            onSearchStart();
        }
    });

    closeButton.addEventListener('click', () => {
        onSearchLeave();
        searchInput.value = '';
    })


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


})