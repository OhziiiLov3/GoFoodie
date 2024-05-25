

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
console.log(menuToggle);
console.log(navLinks);

menuToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
});

