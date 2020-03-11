'use strict';

(() => {
    
    const get = selector => document.querySelector(selector);
    const getAll = selector => document.querySelectorAll(selector);

    const burgerMenu = () => {
        const menu = get('.burger-menu');
        const button = get('.burger-menu__button');
        const links = getAll('.burger-menu__link');
        const buttonsContainer = get('.header-button');

        [button, ...links].forEach(item => item.addEventListener('click', 
            () => {
                buttonsContainer.classList.toggle('header-button--active');
                menu.classList.toggle('burger-menu--active')
            }
        ));
    };

    const main = () => {
        burgerMenu();
    };

    main();
})();