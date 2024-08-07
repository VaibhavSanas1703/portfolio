
let menu = document.querySelector('.menu ion-icon');
let navContainer = document.querySelector('.navlinks');

menu.addEventListener('click',() => {
   navContainer.classList.toggle('toggle-navlinks')
})