const menuImg = document.querySelector('.menu2');
const dropMenu = document.querySelector('.drop-menu');
const menuImgX = document.querySelector('.menu2X');

menuImg.onclick = function() {
    dropMenu.classList.toggle('open');
    menuImg.style.display = "none"; // Oculta el botón de menú
    menuImgX.style.display = "block"; // Muestra el botón de cerrar menú
    menuImgX.style.animationName = "rebote"; // Aplica la animación de rebote
};

menuImgX.onclick = function() {
    dropMenu.classList.toggle('open');
    menuImg.style.display = "block"; // Muestra el botón de menú
    menuImgX.style.display = "none"; // Oculta el botón de cerrar menú
    menuImg.style.animationName = "rebote"; // Aplica la animación de rebote
};

// document.addEventListener("DOMContentLoaded", function() {
//     var animacion = document.querySelector('.bloque');
    
//     animacion.addEventListener('animationend', function() {
//       animacion.classList.add('finalizado');
//     });
//   });