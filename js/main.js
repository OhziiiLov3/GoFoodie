
/* hamburger toggle */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('#page-logo')





menuToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
    logo.classList.toggle('show');
});

