// HIstory
(() => {
    const rollerHistory = document.querySelector('.about-content__title__history');
    const sectionHeightHistory = document.querySelector('.about-content__text__history');
    const dotsHistory = document.querySelector('.multi-dot__history');

    const showHidden = () => {
        sectionHeightHistory.classList.toggle('about-content__text__history--open');
        if (dotsHistory.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsHistory.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsHistory.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
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
        if (dotsDescription.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsDescription.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsDescription.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerDescription.addEventListener('click', showHidden);
})();
// OFFER
// 1.  Biznes Plan, wniosek kredytowy, analiza opłacalności investycji
(() => {
    const rollerBusiness = document.querySelector('.offer-content__title__business');
    const sectionHeightBusiness = document.querySelector('.offer-content__text__business');
    const dotsBusiness = document.querySelector('.multi-dot__business');

    const showHidden = () => {
        sectionHeightBusiness.classList.toggle('offer-content__text__business--open');
        if (dotsBusiness.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsBusiness.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsBusiness.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerBusiness.addEventListener('click', showHidden);
})();
// 2. Calculation
(() => {
    const rollerCalculation = document.querySelector('.offer-content__title__calculation');
    const sectionHeightCalculation = document.querySelector('.offer-content__text__calculation');
    const dotsCalculation = document.querySelector('.multi-dot__calculation');

    const showHidden = () => {
        sectionHeightCalculation.classList.toggle('offer-content__text__calculation--open');
        if (dotsCalculation.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculation.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculation.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculation.addEventListener('click', showHidden);
})();
// 3. Calculation test
(() => {
    const rollerCalculationMark = document.querySelector('.offer-content__title__calculation__mark');
    const sectionHeightCalculationMark = document.querySelector('.offer-content__text__calculation__mark');
    const dotsCalculationMark = document.querySelector('.multi-dot__calculation__mark');

    const showHidden = () => {
        sectionHeightCalculationMark.classList.toggle('offer-content__text__calculation__mark--open');
        if (dotsCalculationMark.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationMark.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationMark.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationMark.addEventListener('click', showHidden);
})();
// 4. Calculation test
(() => {
    const rollerCalculationTest = document.querySelector('.offer-content__title__calculation__test');
    const sectionHeightCalculationTest = document.querySelector('.offer-content__text__calculation__test');
    const dotsCalculationTest = document.querySelector('.multi-dot__calculation__test');

    const showHidden = () => {
        sectionHeightCalculationTest.classList.toggle('offer-content__text__calculation__test--open');
        if (dotsCalculationTest.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationTest.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationTest.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationTest.addEventListener('click', showHidden);
})();
// 5. Calculation test
(() => {
    const rollerCalculationInvestor = document.querySelector('.offer-content__title__calculation__investor');
    const sectionHeightCalculationInvestor = document.querySelector('.offer-content__text__calculation__investor');
    const dotsCalculationInvestor = document.querySelector('.multi-dot__calculation__investor');

    const showHidden = () => {
        sectionHeightCalculationInvestor.classList.toggle('offer-content__text__calculation__investor--open');
        if (dotsCalculationInvestor.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationInvestor.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationInvestor.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationInvestor.addEventListener('click', showHidden);
})();
// 6. Due-diligence
(() => {
    const rollerCalculationDueDiligence = document.querySelector('.offer-content__title__calculation__due-diligence');
    const sectionHeightCalculationDueDiligence = document.querySelector('.offer-content__text__calculation__due-diligence');
    const dotsCalculationDueDiligence = document.querySelector('.multi-dot__calculation__due-diligence');

    const showHidden = () => {
        sectionHeightCalculationDueDiligence.classList.toggle('offer-content__text__calculation__due-diligence--open');
        if (dotsCalculationDueDiligence.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationDueDiligence.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationDueDiligence.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationDueDiligence.addEventListener('click', showHidden);
})();
// 7. Transfers
(() => {
    const rollerCalculationTransfers = document.querySelector('.offer-content__title__calculation__transfers');
    const sectionHeightCalculationTransfers = document.querySelector('.offer-content__text__calculation__transfers');
    const dotsCalculationTransfers = document.querySelector('.multi-dot__calculation__transfers');

    const showHidden = () => {
        sectionHeightCalculationTransfers.classList.toggle('offer-content__text__calculation__transfers--open');
        if (dotsCalculationTransfers.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationTransfers.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationTransfers.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationTransfers.addEventListener('click', showHidden);
})();
// 8. Systems
(() => {
    const rollerCalculationSystems = document.querySelector('.offer-content__title__calculation__systems');
    const sectionHeightCalculationSystems = document.querySelector('.offer-content__text__calculation__systems');
    const dotsCalculationSystems = document.querySelector('.multi-dot__calculation__systems');

    const showHidden = () => {
        sectionHeightCalculationSystems.classList.toggle('offer-content__text__calculation__systems--open');
        if (dotsCalculationSystems.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationSystems.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationSystems.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationSystems.addEventListener('click', showHidden);
})();
// 9. Benchmark
(() => {
    const rollerCalculationBenchmark = document.querySelector('.offer-content__title__calculation__benchmark');
    const sectionHeightCalculationBenchmark = document.querySelector('.offer-content__text__calculation__benchmark');
    const dotsCalculationBenchmark = document.querySelector('.multi-dot__calculation__benchmark');

    const showHidden = () => {
        sectionHeightCalculationBenchmark.classList.toggle('offer-content__text__calculation__benchmark--open');
        if (dotsCalculationBenchmark.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationBenchmark.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationBenchmark.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationBenchmark.addEventListener('click', showHidden);
})();
// 10. Interim Management
(() => {
    const rollerCalculationManagement = document.querySelector('.offer-content__title__calculation__management');
    const sectionHeightCalculationManagement = document.querySelector('.offer-content__text__calculation__management');
    const dotsCalculationManagement = document.querySelector('.multi-dot__calculation__management');

    const showHidden = () => {
        sectionHeightCalculationManagement.classList.toggle('offer-content__text__calculation__management--open');
        if (dotsCalculationManagement.innerHTML === '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dotsCalculationManagement.innerHTML = `<img class="content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dotsCalculationManagement.innerHTML = '<img class="content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    rollerCalculationManagement.addEventListener('click', showHidden);
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