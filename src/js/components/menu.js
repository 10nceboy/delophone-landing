import { isTouchDevice, toggleOverflow } from "../utils/dom";


const scrollToSectionByLink = (link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

document.querySelectorAll('.menu-link').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());

    link.parentNode.addEventListener('click', (event) => {
        event.preventDefault();

        if (isTouchDevice()) {
            const burgerButton = document.querySelector('.header__burger');


            const header = document.querySelector('.header_active');

            if (header) {
                header.classList.remove('header_active');

                burgerButton.classList.remove('header__burger_hidden');
                toggleOverflow(false);
                setTimeout(() => {
                    scrollToSectionByLink(link);
                }, 200);

                return;
            }
        }

        scrollToSectionByLink(link);
    });
});