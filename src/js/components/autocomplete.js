import { autocompleteCities } from '../constants/autocomplete-cities';
import {
    clickOutside
} from '../utils/dom';

const renderArrow = (autocomplete) => {
    const arrow = autocomplete.querySelector('.autocomplete__arrow');
    if (arrow) {
        arrow.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.5L10 14L2 6.5" stroke="#344351" stroke-linecap="round"/>
        </svg>
        
    `;
        return arrow;
    }
};



document.addEventListener('DOMContentLoaded', () => {
    const autocomplete = document.querySelector('.autocomplete');
    const arrow = renderArrow(autocomplete);


    autocomplete.addEventListener('input', () => {
        console.log(autocompleteCities);

    });

    autocomplete.addEventListener('click', () => {
        arrow.classList.add('autocomplete__arrow_active');
        autocomplete.setAttribute('value', "1");

        // let autocompleteList = document.createElement('ul');
        // autocompleteList.innerHTML = autocompleteCities;
        //  autocompleteList.className = "autocomplete__options";
        // autocomplete.appendChild(autocompleteList);
    });



    clickOutside(autocomplete, () => {
        arrow.classList.remove('autocomplete__arrow_active');
    });

})
