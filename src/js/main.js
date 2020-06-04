import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
  // eslint-disable-next-line no-console
    console.log('document ready2');
});

const openBtn = document.querySelector('#open_close_btn');
const menu = document.querySelector('#menu');
let menuItems = document.querySelectorAll('.list-item');

openBtn.addEventListener('click', () => {
    menu.classList.toggle('menu_state_open');
});


const anchors = document.querySelectorAll('.list a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('menu_state_open');
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// menuItems.addEventListener('click', function (argument) {
//       menu.classList.removeClass('menu_state_open');
// })
// menuItems.forEach(function(userItem) {
//   // deleteUser(userItem);
//    userItem.addEventListener('click', function (argument) {
//       menu.classList.removeClass('menu_state_open');
// })
// });
