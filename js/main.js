// Javascript for Hamburger Menu

(function () {
    "use strict";
    console.log('fired');

    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    };

    burger.addEventListener("click", hamburgerMenu, false);
})();

// Javascript for Products

const productImages = Array.from(document.querySelectorAll('.product-image img'));
const popupCloseButtons = Array.from(document.querySelectorAll('.popup-close'));

function showPopup(imageElement) {
    const popup = imageElement.closest('.product-image').querySelector('.product-popup');
    popup.classList.add('active');
}

function hidePopup(closeButton) {
    const popup = closeButton.closest('.product-popup');
    popup.classList.remove('active');
}

productImages.forEach(image => {
    image.addEventListener('click', () => {
        showPopup(image);
    });
});

popupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        hidePopup(button);
    });
});