// MODAL WINDOW LOGIC
// 1. Function which creates the boxes to modal windows
const modalInformation = () => {
    // Remove function added on button click
    const closeButton = document.querySelector('.modal__box--close-button');
    // Whole modal window
    const modalBox = document.querySelector('.modal__box--background');
    // Toggle visibility of modal
    const toggleModal = () => {
        modalBox.classList.toggle('modal-inactive');
    }
    const removeModal = () => {
            modalBox.classList.remove('modal__box--background');
        }
        // Button logic 
    closeButton.addEventListener('click', toggleModal);
    window.addEventListener('click', removeModal);
}


// Callback modal on page loading
window.onload = modalInformation();