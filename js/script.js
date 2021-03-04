let navBar = document.querySelector('.navbar');
let hamburgerBtn = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('change');
})