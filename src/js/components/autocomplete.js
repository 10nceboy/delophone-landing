import { autocompleteCities } from '../constants/autocomplete-cities';
import { debounce } from '../utils/common';
import {
    clickOutside,
    transitionEnter,
    transitionLeave
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
    const autocompleteInput = document.querySelector('.autocomplete__input');
    const arrow = renderArrow(autocomplete);




    function handleOptionClick(event) {
        event.stopPropagation();
        const { target } = event;
        autocompleteInput.value = target.innerHTML;
        const autocompleteList = document.querySelector('.autocomplete__options')
        transitionLeave(autocompleteList, 'autocomplete__options');
        window.setTimeout(() => {
            removeAutocompleteList();
        }, 300);
        arrow.classList.remove('autocomplete__arrow_active');
    }

    const createAutocompleteList = (list) => {
        const autocompleteList = document.createElement('ul');
        autocompleteList.className = 'autocomplete__options';
        autocompleteList.id = 'autocomplete__options';
        autocomplete.appendChild(autocompleteList);
        list.forEach((item) => {
            const autocompleteOption = document.createElement('li');
            autocompleteOption.innerHTML = item;
            autocompleteList.appendChild(autocompleteOption);
            autocompleteOption.className = "autocomplete__option-item"
            autocompleteOption.addEventListener('click', handleOptionClick);
        });
    }
    const removeAutocompleteList = () => {
        const autocompleteList = document.querySelector('#autocomplete__options')
        if (autocompleteList) {
            const options = autocompleteList.querySelectorAll('.autocomplete__option');
            options.forEach(option => option.removeEventListener('click', handleOptionClick));
            autocompleteList.remove();
        }
    }
    const renderFilteredList = (inputValue) => {
        removeAutocompleteList()
        const preparedValue = inputValue.toLowerCase().trim();
        const filteredCities = autocompleteCities.filter((cityName) => (cityName.toLowerCase().trim().includes(preparedValue))
        );
        if (!filteredCities.length) {
            createAutocompleteList(["Нет пододящих городов"]);
            const autocompleteList = document.querySelector('.autocomplete__options')
            autocompleteList.classList.add('autocomplete__options_active')
            return
        }
        createAutocompleteList(filteredCities);
        const autocompleteList = document.querySelector('.autocomplete__options')
        autocompleteList.classList.add('autocomplete__options_active')
    }

    const renderFilteredListDebounced = debounce(renderFilteredList);
    autocompleteInput.addEventListener('input', (event) => {
        const inputValue = event.target.value.toString().toLowerCase().trim();
        renderFilteredListDebounced(inputValue);
    });

    clickOutside(autocomplete, () => {
        const autocompleteList = document.querySelector('.autocomplete__options')
        if (autocompleteList) {
            arrow.classList.remove('autocomplete__arrow_active')
            transitionLeave(autocompleteList, 'autocomplete__options');
            window.setTimeout(() => {
                removeAutocompleteList();
            }, 100);
        }
    });

    autocomplete.addEventListener('click', () => {
        arrow.classList.add('autocomplete__arrow_active');
        const autocompleteList = document.querySelector('.autocomplete__options');
        if (!autocompleteList) {
            autocompleteInput.focus();
            createAutocompleteList(autocompleteCities)
            const autocompleteList = document.querySelector('.autocomplete__options');
            transitionEnter(autocompleteList, 'autocomplete__options')
        }
        transitionEnter(autocompleteList, 'autocomplete__options')
    });
});












