const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("stick", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');
}

window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.skill,.hobby,.contact',{delay:190, origin:'bottom'})