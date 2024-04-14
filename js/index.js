const menuImg = document.querySelector('.menu2');
const dropMenu = document.querySelector('.drop-menu');

menuImg.onclick = function() {
    dropMenu.classList.toggle('open');
};
