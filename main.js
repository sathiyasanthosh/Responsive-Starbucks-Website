let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
Window.onclick = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('bx-x');
}
