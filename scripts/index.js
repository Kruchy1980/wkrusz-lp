// HIstory
(() => {
    const rollerHistory = document.querySelector('.about-content__title__history');
    const sectionHeightHistory = document.querySelector('.about-content__text__history');
    const dotsHistory = document.querySelector('.multi-dot__history');

    const showHidden = () => {
        sectionHeightHistory.classList.toggle('about-content__text__history--open');
        if (dotsHistory.innerHTML === '<img class="about-content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsHistory.innerHTML = `<img class="about-content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsHistory.innerHTML = '<img class="about-content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
        if (sectionHeightHistory.classList.contains('active')) {
            sectionHeightHistory.classList.toggle('active');
            sectionHeightHistory.classList.toggle('about-content__text__history--open');
        }
    }
    rollerHistory.addEventListener('click', showHidden);
})();
// Description
(() => {
    const rollerDescription = document.querySelector('.about-content__title__description');
    const sectionHeightDescription = document.querySelector('.about-content__text__description');
    const dotsDescription = document.querySelector('.multi-dot__description');

    const showHidden = () => {
        sectionHeightDescription.classList.toggle('about-content__text__description--open');
        if (dotsDescription.innerHTML === '<img class="about-content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsDescription.innerHTML = `<img class="about-content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsDescription.innerHTML = '<img class="about-content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerDescription.addEventListener('click', showHidden);
})();
// Menu on button
(() => {
    const button = document.querySelector('.js-main-navigation__inner__mobile-button');
    const navList = document.querySelector('.js-main-navigation__inner__nav-list');

    const toggleClass = () => {
        navList.classList.toggle('main-navigation__inner__nav-list--open');
    };
    button.addEventListener('click', toggleClass);
    navList.addEventListener('click', toggleClass);
})();